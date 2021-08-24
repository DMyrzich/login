import { Body, Controller, Post, Get, UsePipes, ValidationPipe, UseFilters, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UserResponseInterface } from './types/user.interface';
import { createUserDto } from './dto/create.user.dto';
import { HttpExceptionFilter } from './http-exception.filter';
import { loginUserDto } from './dto/login.user';
import { UserEntity } from './auth.entity';
import { AuthGuard } from './guard/auth.guard';
import { User } from './decorators/user.decorator';

@Controller('auth')
export class AuthController {

    constructor(private readonly authService: AuthService) { }

    @UsePipes(new ValidationPipe())
    @UseFilters(new HttpExceptionFilter())
    @Post('register')
    async createUser(@Body() createUserDto: createUserDto): Promise<UserResponseInterface> {

        const newUser = await this.authService.createUser(createUserDto);
        return this.authService.buldUserResponse(newUser);
    }

    @UsePipes(new ValidationPipe())
    @UseFilters(new HttpExceptionFilter())
    @Post('login')
    async login(@Body() loginUserDto: loginUserDto): Promise<UserResponseInterface> {

        const loginUser = await this.authService.loginUser(loginUserDto);
        return this.authService.buldUserResponse(loginUser);
    }

    @Get('user')
    @UseGuards(AuthGuard)
    async curentUser(@User() user: UserEntity): Promise<UserResponseInterface> {

        return this.authService.buldUserResponse(user);
    }

}
