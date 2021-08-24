import { UserType } from '../types/user.types';

export interface UserResponseInterface {

    response: {
        user: UserType & {
            token: string
        }
    }
}

