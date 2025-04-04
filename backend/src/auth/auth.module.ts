import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { MoodleStrategy } from './strategies/moodle.strategy';

@Module({
  imports: [PassportModule.register({ defaultStrategy: 'moodle' })],
  controllers: [AuthController],
  providers: [AuthService, MoodleStrategy],
  exports: [AuthService],
})
export class AuthModule {} 