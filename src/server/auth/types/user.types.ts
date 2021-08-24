import { UserEntity } from '../auth.entity';

export type UserType = Omit<UserEntity, 'hashPasword'>;
