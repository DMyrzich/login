import { Request } from "express";
import { UserEntity } from '../auth/auth.entity';

export interface ExpressRequestIntarface extends Request {

    user?: UserEntity;
}