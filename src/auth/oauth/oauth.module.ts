import { Module } from '@nestjs/common';
import { OAuthController } from './oauth.controller';
import { OAuthService } from './oauth.service';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';

@Module({
  controllers: [OAuthController],
  imports: [],
  providers: [OAuthService, ConfigService, JwtService],
})
export class OAuthModule {}
