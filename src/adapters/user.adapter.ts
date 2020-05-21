import { UserDto } from 'src/dto/user.dto';
import { Injectable } from '@nestjs/common';
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
}
