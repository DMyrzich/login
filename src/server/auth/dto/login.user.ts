import { IsNotEmpty, IsEmail } from "class-validator";

export class loginUserDto {

    @IsNotEmpty()
    @IsEmail()
    readonly email: string

    @IsNotEmpty()
    readonly password: string;
}