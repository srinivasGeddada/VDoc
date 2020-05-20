import { Injectable, Inject, HttpCode, HttpStatus, Global } from '@nestjs/common';
import { Repository } from 'typeorm';
import { UserEntity } from 'src/entities/user.entity';
import { UserDto } from 'src/dto/user.dto';
import { GlobalResponse } from 'src/shared/response';
import { sign } from 'jsonwebtoken';
import { hash, genSalt, compare } from 'bcrypt';
import { globalAgent } from 'http';
import { RolesEntity } from 'src/entities/roles.entity';
@Injectable()
export class UserService {
	constructor(
		@Inject('UserRepository') private readonly userRepo: Repository<UserEntity>,
		@Inject('RolesRepository') private readonly rolerepo: Repository<RolesEntity>
	) {}

	async getAllUsers() {
		return await this.userRepo.find({
			relations: [ 'roles' ]
		});
	}

	async createUser(data: UserDto): Promise<GlobalResponse> {
		try {
			if (await this.checkEmail(data.email)) {
				return new GlobalResponse(false, HttpStatus.CONFLICT, [], 'Email Exists');
			} else {
				if (await this.checkPhoneNumber(data.phoneNo)) {
					return new GlobalResponse(false, HttpStatus.CONFLICT, [], 'Phone Number Exists');
				} else {
					data.password = await hash(data.password, 6);
					const result = await this.userRepo.save(data);
					return new GlobalResponse(true, HttpStatus.CREATED, result, '');
				}
			}
		} catch (error) {
			return new GlobalResponse(false, HttpStatus.INTERNAL_SERVER_ERROR, [], error.message);
		}
	}

	async login(data) {
		try {
			const isThere = await this.findByEmail(data.email.trim());
			if (isThere.length != 0) {
				console.log(isThere);
				if (await compare(data.password.trim(), isThere[0].password)) {
					return new GlobalResponse(
						true,
						HttpStatus.OK,
						{ token: this.signToken(isThere[0].email), user: isThere[0]},
						''
					);
				} else {
					return new GlobalResponse(false, HttpStatus.NOT_ACCEPTABLE, [], 'Invalid Password');
				}
			} else {
				return new GlobalResponse(false, HttpStatus.NOT_ACCEPTABLE, [], 'Invalid Email');
			}
		} catch (error) {
			return new GlobalResponse(false, HttpStatus.INTERNAL_SERVER_ERROR, [], error.message);
		}
	}

	async checkEmail(email): Promise<boolean> {
		const result = await this.userRepo.find({
			where: {
				email: email
			}
		});
		return result.length === 0 ? false : true;
	}

	async checkPhoneNumber(phNo) {
		const result = await this.userRepo.find({
			where: {
				phoneNo: phNo
			}
		});
		return result.length === 0 ? false : true;
	}

	async createRole(data) {
		return await this.rolerepo.save(data);
	}

	async findByEmail(email): Promise<UserEntity[]> {
		return await this.userRepo.find({
			relations: [ 'roles' ],
			where: {
				email: email
			}
		});
	}

	signToken(email: any) {
		const payload = email;
		return sign(payload, email);
	}
}
