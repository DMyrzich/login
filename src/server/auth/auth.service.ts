import { UserResponseInterface } from './types/user.interface';
import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { UserEntity } from './auth.entity';
import { sign } from 'jsonwebtoken';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { createUserDto } from './dto/create.user.dto';
import { compare } from 'bcrypt';
import { loginUserDto } from './dto/login.user';

@Injectable()
export class AuthService {

    constructor(@InjectRepository(UserEntity) private readonly UserRepository: Repository<UserEntity>) { }
    async createUser(createUserDto: createUserDto): Promise<UserEntity> {

        const { email, name } = createUserDto;
        const isEmail = await this.UserRepository.findOne({ email: email });
        const isName = await this.UserRepository.findOne({ name: name });
        if (isEmail || isName) {

            throw new HttpException({ status: HttpStatus.UNPROCESSABLE_ENTITY, message: 'email or username registred' }, HttpStatus.UNPROCESSABLE_ENTITY)
        }
        const newUser = new UserEntity();
        Object.assign(newUser, createUserDto);
        return await this.UserRepository.save(newUser);
    }

    async loginUser(loginUserDto: loginUserDto): Promise<UserEntity> {

        const { email, password } = loginUserDto;
        const login = await this.UserRepository.findOne({ email: email }, { select: ['id', 'password', 'email', 'name', 'bio', 'image'] });
        if (!login) {

            throw new HttpException({ status: HttpStatus.UNPROCESSABLE_ENTITY, message: 'Email no registr' }, HttpStatus.UNPROCESSABLE_ENTITY)
        }
        const isPassword = await compare(password, login.password);
        if (!isPassword) {

            throw new HttpException({ status: HttpStatus.UNPROCESSABLE_ENTITY, message: 'Email no registr' }, HttpStatus.UNPROCESSABLE_ENTITY)
        }
        delete login.password;
        return login;
    }

    getJWT(user: UserEntity): string {

        return sign({ id: user.id, email: user.email, username: user.name }, "12345");
    }

    buldUserResponse(user: UserEntity): UserResponseInterface {

        return {

            response: {
                user: {
                    ...user,
                    token: this.getJWT(user)
                }
            }
        }
    }

    getUserId(id: number): Promise<UserEntity> {

        return this.UserRepository.findOne(id);
    }
}


