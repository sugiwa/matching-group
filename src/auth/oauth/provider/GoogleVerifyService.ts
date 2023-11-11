import { OAuth2Client } from 'google-auth-library';
import { OAuthVerifyService } from './OAuthVerifyService';
import { ConfigService } from '@nestjs/config';

const client = new OAuth2Client();
export class GoogleVerifyService implements OAuthVerifyService {
  private readonly configService: ConfigService;
  constructor(configService: ConfigService) {
    this.configService = configService;
  }

  async fetchUserInfo(token: string) {
    const ticket = await client.verifyIdToken({
      idToken: token,
      audience: this.configService.get('GOOGLE_CLIENT_ID'),
    });
    const payload = ticket.getPayload();
    return payload;
  }

  async createToken() {
    return null;
  }
}
