import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { OAuthUserInfo } from './dto/OAuthUserInfo';

@Injectable()
export class OAuthRepository {
  private prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }

  async save(oauthUserInfo: OAuthUserInfo) {
    const data = {
      provider: oauthUserInfo.provider,
      sub: oauthUserInfo.sub,
      userId: 0,
    };
    const entity = await this.prisma.oAuthUserEntity.create({ data });
    return entity;
  }

  async find(userInfo: OAuthUserInfo) {
    const { provider, sub } = userInfo;
    const entity = await this.prisma.oAuthUserEntity.findFirst({
      where: { provider, sub },
    });
    return entity;
  }
}
