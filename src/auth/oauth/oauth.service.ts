import { Inject, Injectable, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { OAuthVerifyService } from './provider/OAuthVerifyService';
import { OAuthServiceFactory } from './provider/OAuthServiceFactory';
import { OAuthUserInfo } from './dto/OAuthUserInfo';
import { OAuthRepository } from './oauth.repository';
import { UserDto } from '@/user/dto/UserDto';
import { UserService } from '@/user/user.service';
import { API_SECRET_KEY } from '@/constants/auth';
import { OAuthUserEntity } from '@prisma/client';

@Injectable()
export class OAuthService {
  private logger = new Logger(OAuthService.name);

  @Inject(OAuthRepository)
  private oauthRepository: OAuthRepository;
  @Inject(UserService)
  private userService: UserService;

  constructor(
    private readonly configService: ConfigService,
    private readonly jwtService: JwtService,
  ) {}

  async signIn(provider: string, token: any) {
    const verifyService: OAuthVerifyService = OAuthServiceFactory.create(
      provider,
      this.configService,
    );

    const userInfo: OAuthUserInfo = await verifyService.fetchUserInfo(token);
    this.logger.debug(JSON.stringify(userInfo));

    const entity = await this.fetchOAuthUserEntity(userInfo);
    const accessToken = await this.createToken(entity);
    return { accessToken };
  }

  private async fetchOAuthUserEntity(userInfo: OAuthUserInfo) {
    const entity = await this.oauthRepository.find(userInfo);
    if (entity) {
      this.logger.debug('this user is already registered');
      return entity;
    }
    const userId: number = await this.createUser(userInfo);
    console.log('userId: ', userId);
    return await this.oauthRepository.save(userInfo, userId);
  }

  private async createUser(userInfo: OAuthUserInfo) {
    const user = new UserDto();
    user.name = userInfo.name;
    const userId = await this.userService.create(user);
    return userId;
  }

  private async createToken(authUser: OAuthUserEntity) {
    const { userId } = authUser;
    const payload = { userId };
    return await this.jwtService.signAsync(payload, {
      secret: this.configService.get(API_SECRET_KEY),
    });
  }
}
