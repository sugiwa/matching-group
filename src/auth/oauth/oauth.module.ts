import { Module } from '@nestjs/common';
import { OAuthController } from './oauth.controller';
import { OAuthService } from './oauth.service';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { OAuthRepository } from './oauth.repository';

@Module({
  controllers: [OAuthController],
  imports: [],
  providers: [OAuthService, ConfigService, JwtService, OAuthRepository],
})
export class OAuthModule {}
