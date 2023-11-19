import { Module } from '@nestjs/common';
import { OAuthController } from './oauth.controller';
import { OAuthService } from './oauth.service';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { OAuthRepository } from './oauth.repository';
import { UserModule } from '@/user/user.module';
import { UserService } from '@/user/user.service';

@Module({
  controllers: [OAuthController],
  imports: [UserModule],
  providers: [
    OAuthService,
    ConfigService,
    JwtService,
    OAuthRepository,
    UserService,
  ],
})
export class OAuthModule {}
