import { Controller, Get, Param, Post, Body, Delete, Put } from '@nestjs/common';
import { DoctorService } from 'src/services/doctor.service';
import { DoctorDto } from 'src/dto/doctor.dto';

@Controller('doctor')
export class DoctorController {
	constructor(private readonly doctorService: DoctorService) {}

	@Get(':id')
	getDoctorById(@Param('id') id) {
		return this.doctorService.getDoctorByID(id);
	}
	@Get('cityID/:id')
	getDoctorByCityId(@Param('id') id) {
		return this.doctorService.getDoctorByCityID(id);
	}

	@Post('create')
	createDoctor(@Body() doctorDto: DoctorDto) {
		return this.doctorService.createDoctor(doctorDto);
	}

	@Delete('delete/:id')
	deleteDoctor(@Param('id') id) {
		return this.doctorService.deleteDoctor(id);
	}

	@Put('update/:id')
	updateDoctor(@Param('id') id, @Body() doctorDto: DoctorDto) {
		return this.doctorService.updateDoctor(id, doctorDto);
	}
}
