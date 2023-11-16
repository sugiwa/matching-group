import { OAuth2Client } from 'google-auth-library';
import { OAuthVerifyService } from './OAuthVerifyService';
import { ConfigService } from '@nestjs/config';
import { OAuthUserInfo } from '../dto/OAuthUserInfo';

const client = new OAuth2Client();
export class GoogleVerifyService implements OAuthVerifyService {
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
    const oauthUserInfo: OAuthUserInfo = new OAuthUserInfo();
    oauthUserInfo.provider = 'google';
    oauthUserInfo.sub = payload.sub;
    return oauthUserInfo;
  }

  async createToken() {
    return null;
  }
}
