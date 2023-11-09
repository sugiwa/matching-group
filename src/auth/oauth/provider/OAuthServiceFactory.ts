import { GoogleVerifyService } from './GoogleVerifyService';
import { OAuthVerifyService } from './OAuthVerifyService';

const PROVIDER = {
  GOOGLE: 'google',
};

export class OAuthServiceFactory {
  public create(provider: string): OAuthVerifyService {
    if (provider === PROVIDER.GOOGLE) {
      return new GoogleVerifyService();
    }
    throw new Error(`Error: ${provider} is not supported provider.`);
  }
}
