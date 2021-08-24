
import { ExpressRequestIntarface } from '../../types/ExpressRequest.intarface';
import { Injectable, NestMiddleware, HttpException, HttpStatus } from '@nestjs/common';
import { Response, NextFunction } from 'express';
import { verify } from 'jsonwebtoken';
import { AuthService } from '../auth.service';

@Injectable()
export class AuchMiddlewares implements NestMiddleware {

    constructor(private readonly userService: AuthService) { }

    async use(req: ExpressRequestIntarface, res: Response, next: NextFunction) {

        if (!req.headers.authorization) {

            req.user = null;
            next()
            return;
        }
        try {

            const token = req.headers.authorization;
            const decode = verify(token, "12345") as { id: number };
            req.user = await this.userService.getUserId(decode.id);;
            next();

        } catch (error) {

            req.user = null;
            next();
        }
    }
}