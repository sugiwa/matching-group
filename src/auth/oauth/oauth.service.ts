import { Inject, Injectable, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { PrismaClient } from '@prisma/client';
import { OAuthVerifyService } from './provider/OAuthVerifyService';
import { OAuthServiceFactory } from './provider/OAuthServiceFactory';
import { OAuthUserInfo } from './dto/OAuthUserInfo';
import { OAuthRepository } from './oauth.repository';

@Injectable()
export class OAuthService {
  private logger = new Logger(OAuthService.name);
  private prisma: PrismaClient;

  @Inject(OAuthRepository)
  private oauthRepository: OAuthRepository;

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

    const userInfo: OAuthUserInfo = await verifyService.fetchUserInfo(token);
    this.logger.debug(JSON.stringify(userInfo));

    const entity = this.oauthRepository.find(userInfo);
    if (entity) {
      this.logger.debug('this user is already registered');
      return;
    }

    await this.oauthRepository.save(userInfo);
  }
}
