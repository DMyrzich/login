import { ExpressRequestIntarface } from "../../types/ExpressRequest.intarface";
import { createParamDecorator, ExecutionContext } from "@nestjs/common";

export const User = createParamDecorator((data: any, ctx: ExecutionContext) => {

    const request = ctx.switchToHttp().getRequest<ExpressRequestIntarface>();

    if (!request.headers.authorization) {
        return null;
    }

    if (data) {
        return request.user[data];
    }

    return request.user;
})