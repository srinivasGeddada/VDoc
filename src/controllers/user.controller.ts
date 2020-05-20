import { Controller, Get, Post, Body } from '@nestjs/common';
import { UserService } from 'src/services/user.service';
import { UserDto } from 'src/dto/user.dto';
import { RoleDto } from 'src/dto/role.dto';
import { LoginDto } from 'src/dto/login.dto';

@Controller('user')
export class UserController {
	constructor(private readonly userService: UserService) {}
	@Get('all')
	getAllUsers() {
		console.log('working');
		return this.userService.getAllUsers();
	}

	@Post('create')
	createUser(@Body() data: UserDto) {
		return this.userService.createUser(data);
	}

	// @Post('create/role')
	// createRole(@Body() patientrole: RoleDto) {
	// 	return this.userService.createRole(patientrole);
	// }

	@Post('login')
	loginUser(@Body() data: LoginDto) {
		return this.userService.login(data);
	}
}
