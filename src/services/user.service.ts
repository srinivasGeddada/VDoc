import { Injectable, Inject } from "@nestjs/common";
import { Repository } from "typeorm";
import { UserEntity } from "src/entities/user.entity";

@Injectable()
export class UserService{
constructor(@Inject('UserRepository') private readonly userRepo:Repository<UserEntity>){}

async getAllUsers(){
    return await this.userRepo.find();
}
}