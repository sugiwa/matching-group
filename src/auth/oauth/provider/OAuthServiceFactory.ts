import { ConfigService } from '@nestjs/config';
import { GoogleVerifyService } from './GoogleVerifyService';
import { OAuthVerifyService } from './OAuthVerifyService';

const PROVIDER = {
  GOOGLE: 'google',
};

export class OAuthServiceFactory {
  public static create(
    provider: string,
    configService: ConfigService,
  ): OAuthVerifyService {
    if (provider === PROVIDER.GOOGLE) {
      return new GoogleVerifyService(configService);
    }
    throw new Error(`Error: ${provider} is not supported provider.`);
  }
}
