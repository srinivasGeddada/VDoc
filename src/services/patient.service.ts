import { Injectable, Inject, Global, HttpStatus } from '@nestjs/common';
import { Repository } from 'typeorm';
import { PatientEntity } from 'src/entities/patient.entity';
import { GlobalResponse } from 'src/shared/response';
import { UserAdapter } from 'src/adapters/user.adapter';

@Injectable()
export class PatientService {
	constructor(
		@Inject('PatientRepository') private readonly patientRepo: Repository<PatientEntity>,
		private readonly userAdapter: UserAdapter
	) {}

	async createPatient(patientDto) {
		try {
			const patient = await this.patientRepo.find({
				where: {
					PhoneNo: patientDto.PhoneNo,
					isDeleted: false
				}
			});
			if (patient.length === 0) {
				const data = await this.patientRepo.save(patientDto);
				return new GlobalResponse(true, HttpStatus.CREATED, [], 'Success');
			} else {
				return new GlobalResponse(false, HttpStatus.CONFLICT, [], 'Patient Exists With Given Phone Number');
			}
		} catch (error) {
			return new GlobalResponse(false, HttpStatus.INTERNAL_SERVER_ERROR, [], error.message);
		}
	}

	async getPatientByID(id) {
		try {
			const data = await this.patientRepo.find({
				where: { ID: id, isDeleted: false },
				relations: [ 'country', 'state', 'city' ]
			});
			return new GlobalResponse(true, HttpStatus.OK, this.userAdapter.patientResponse(data[0]), '');
		} catch (error) {
			return new GlobalResponse(false, HttpStatus.INTERNAL_SERVER_ERROR, [], error.message);
		}
	}
	async getPatientByCityID(id) {
		try {
			const data = await this.patientRepo.find({
				where: { ID: id, isDeleted: false },
				select: [ 'ID', 'PatientName', 'PhoneNo', 'Sex', 'Address' ]
			});
			return new GlobalResponse(true, HttpStatus.OK, data, '');
		} catch (error) {
			return new GlobalResponse(false, HttpStatus.INTERNAL_SERVER_ERROR, [], error.message);
		}
	}

	async deletePatient(id) {
		try {
			await this.patientRepo.update({ ID: id }, { isDeleted: true });
			return new GlobalResponse(true, HttpStatus.OK, [], 'Success');
		} catch (error) {
			return new GlobalResponse(false, HttpStatus.INTERNAL_SERVER_ERROR, [], error.message);
		}
	}

	async updatePatient(id, patientDto) {
		try {
			await this.patientRepo.update({ ID: id }, patientDto);
			return new GlobalResponse(true, HttpStatus.OK, [], 'Success');
		} catch (error) {
			return new GlobalResponse(false, HttpStatus.INTERNAL_SERVER_ERROR, [], error.message);
		}
	}
}
