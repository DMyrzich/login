import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthController } from './auth.controller';
import { UserEntity } from './auth.entity';
import { AuthService } from './auth.service';

@Module({

  controllers: [AuthController],
  providers: [AuthService],
  imports: [TypeOrmModule.forFeature([UserEntity])],
  exports: [AuthService]

})
export class AuthModule { }
