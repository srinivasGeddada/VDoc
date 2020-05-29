import { Controller, Body, Post, Get, Param, Delete, Put } from '@nestjs/common';
import { PatientService } from 'src/services/patient.service';
import { PatientDto } from 'src/dto/patient.dto';

@Controller('patient')
export class PatientController {
	constructor(private readonly patientService: PatientService) {}

	@Post('create')
	createPatient(@Body() patientDto: PatientDto) {
		return this.patientService.createPatient(patientDto);
	}

	@Get(':id')
	getPatientByID(@Param('id') id) {
		return this.patientService.getPatientByID(id);
	}
	@Get('cityID/:id')
	getPatientByCityID(@Param('id') id) {
		return this.patientService.getPatientByCityID(id);
	}

	@Delete('delete/:id')
	deletePatient(@Param('id') id) {
		return this.patientService.deletePatient(id);
	}

	@Put('update/:id')
	updatePatient(@Param('id') id, @Body() patientDto: PatientDto) {
		return this.patientService.updatePatient(id, patientDto);
	}
}
