import { OAuth2Client } from 'google-auth-library';
import { OAuthVerifyService } from './OAuthVerifyService';
import { ConfigService } from '@nestjs/config';
import { OAuthUserInfo } from '../dto/OAuthUserInfo';
import { Logger } from '@nestjs/common';

const client = new OAuth2Client();
export class GoogleVerifyService implements OAuthVerifyService {
  private readonly logger = new Logger(GoogleVerifyService.name);
  private readonly configService: ConfigService;
  constructor(configService: ConfigService) {
    this.configService = configService;
  }

  async fetchUserInfo(token: string): Promise<OAuthUserInfo> {
    const ticket = await client.verifyIdToken({
      idToken: token,
      audience: this.configService.get('GOOGLE_CLIENT_ID'),
    });
    const payload = ticket.getPayload();
    this.logger.debug(payload);
    const oauthUserInfo: OAuthUserInfo = new OAuthUserInfo();
    oauthUserInfo.provider = 'google';
    oauthUserInfo.sub = payload.sub;
    oauthUserInfo.name = payload.name;
    oauthUserInfo.email = payload.email;
    return oauthUserInfo;
  }

  async createToken() {
    return null;
  }
}
