import { Injectable, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { PrismaClient } from '@prisma/client';
import { OAuthVerifyService } from './provider/OAuthVerifyService';
import { OAuthServiceFactory } from './provider/OAuthServiceFactory';

@Injectable()
export class OAuthService {
  private logger = new Logger(OAuthService.name);
  private prisma: PrismaClient;

  constructor(
    private readonly configService: ConfigService,
    private readonly jwtService: JwtService,
  ) {
    this.prisma = new PrismaClient();
  }

  async signIn(provider: string, token: any) {
    const verifyService: OAuthVerifyService = OAuthServiceFactory.create(
      provider,
      this.configService,
    );

    const userInfo = await verifyService.fetchUserInfo(token);
    this.logger.debug(userInfo);
  }
}
