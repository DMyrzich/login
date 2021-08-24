import { HttpStatus, Injectable } from '@nestjs/common';
import { ExpressRequestIntarface } from '../../types/ExpressRequest.intarface';
import { CanActivate, ExecutionContext, HttpException } from '@nestjs/common';

@Injectable()
export class AuthGuard implements CanActivate {

    canActivate(ctx: ExecutionContext): boolean {

        const request = ctx.switchToHttp().getRequest<ExpressRequestIntarface>();

        if (request.user) {
            return true;
        }

        throw new HttpException({ response: { status: HttpStatus.UNAUTHORIZED, message: 'Not auth or invalid Token' } }, HttpStatus.UNAUTHORIZED)
    }
}