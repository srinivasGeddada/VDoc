import { IsString, IsNumber, IsEmail } from 'class-validator';

export class UserDto {
	ID?: number;
	@IsString() userName: string;
	@IsString() password: string;
	@IsString() address?: string;
	@IsNumber() phoneNo: number;
	@IsNumber() aadhaarNo?: number;
	@IsEmail() email: string;
}
