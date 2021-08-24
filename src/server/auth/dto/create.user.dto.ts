import { IsNotEmpty, IsEmail } from "class-validator";

export class createUserDto {

    @IsNotEmpty()
    readonly name: string;
    
    @IsNotEmpty()
    readonly password: string;
    
    @IsNotEmpty()
    @IsEmail()
    readonly email: string
}