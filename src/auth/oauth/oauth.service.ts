import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class OAuthService {
  private prisma: PrismaClient;

  constructor(
    private readonly configService: ConfigService,
    private readonly jwtService: JwtService,
  ) {
    this.prisma = new PrismaClient();
  }

  async signIn(provider: string, dto: any) {
    // TODO
  }
}
