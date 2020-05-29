import { UserDto } from 'src/dto/user.dto';
import { Injectable } from '@nestjs/common';
import { PatientDto } from 'src/dto/patient.dto';
import { DoctorDto } from 'src/dto/doctor.dto';
@Injectable()
export class UserAdapter {
	loginResponse(data, token) {
		var da = new UserDto();
		da.userName = data.userName;
		da.email = data.email;
		da.phoneNo = data.phoneNo;
		da.role = data.roles.RoleName;
		da.roleID = data.TblRole_ID;
		da.token = token;
		return da;
	}

	patientResponse(data) {
		var dat = new PatientDto();
		dat.ID = data.ID;
		dat.PatientName = data.PatientName;
		dat.PhoneNo = data.PhoneNo;
		dat.Country = data.country.country;
		dat.TblCountry_ID = data.TblCountry_ID;

		dat.State = data.state.state;
		dat.TblState_ID = data.TblState_ID;

		dat.City = data.city.city;
		dat.TblCity_ID = data.TblCity_ID;
		return dat;
	}

	doctorResponse(data) {
		var da = new DoctorDto();
		da.ID = data.ID;
		da.DoctorName = data.DoctorName;
		da.Address = data.Address;
		da.PhoneNo = data.PhoneNo;
		da.Country = data.country.country;
		da.TblCountry_ID = data.TblCountry_ID;

		da.State = data.state.state;
		da.TblState_ID = data.TblState_ID;

		da.City = data.city.city;
		da.TblCity_ID = data.TblCity_ID;
		return da;
	}
}
