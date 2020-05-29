import { Injectable, HttpStatus, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { DoctorEntity } from 'src/entities/doctor.entity';
import { GlobalResponse } from 'src/shared/response';
import { UserAdapter } from 'src/adapters/user.adapter';

@Injectable()
export class DoctorService {
	constructor(
		@Inject('DoctorRepository') private readonly doctorRepo: Repository<DoctorEntity>,
		private readonly userAdapter: UserAdapter
	) {}

	async createDoctor(doctorDto) {
		try {
			const doctor = await this.doctorRepo.find({
				where: {
					PhoneNo: doctorDto.PhoneNo,
					isDeleted: false
				}
			});
			if (doctor.length === 0) {
				const data = await this.doctorRepo.save(doctorDto);
				return new GlobalResponse(true, HttpStatus.CREATED, [], 'Success');
			} else {
				return new GlobalResponse(false, HttpStatus.CONFLICT, [], 'Doctor Exists With Given Phone Number');
			}
		} catch (error) {
			return new GlobalResponse(false, HttpStatus.INTERNAL_SERVER_ERROR, [], error.message);
		}
	}

	async getDoctorByID(id) {
		try {
			const data = await this.doctorRepo.find({
				where: { ID: id, isDeleted: false },
				relations: [ 'country', 'state', 'city' ]
			});
			return new GlobalResponse(true, HttpStatus.OK, this.userAdapter.doctorResponse(data[0]), '');
		} catch (error) {
			return new GlobalResponse(false, HttpStatus.INTERNAL_SERVER_ERROR, [], error.message);
		}
	}

	async getDoctorByCityID(id) {
		try {
			const data = await this.doctorRepo.find({
				where: { TblCity_ID: id, isDeleted: false },
				select: [ 'ID', 'DoctorName', 'Address', 'PhoneNo', 'city' ]
			});
			return new GlobalResponse(true, HttpStatus.OK, data, '');
		} catch (error) {
			console.log(error);
			return new GlobalResponse(false, HttpStatus.INTERNAL_SERVER_ERROR, [], error.message);
		}
	}

	async deleteDoctor(id) {
		try {
			await this.doctorRepo.update({ ID: id }, { isDeleted: true });
			return new GlobalResponse(true, HttpStatus.OK, [], 'Success');
		} catch (error) {
			return new GlobalResponse(false, HttpStatus.INTERNAL_SERVER_ERROR, [], error.message);
		}
	}

	async updateDoctor(id, doctorDto) {
		try {
			await this.doctorRepo.update({ ID: id }, doctorDto);
			return new GlobalResponse(true, HttpStatus.OK, [], 'Success');
		} catch (error) {
			return new GlobalResponse(false, HttpStatus.INTERNAL_SERVER_ERROR, [], error.message);
		}
	}
}
