import { OAuthUserInfo } from '../dto/OAuthUserInfo';

export interface OAuthVerifyService {
  fetchUserInfo(token: string): Promise<OAuthUserInfo>;
  createToken(): any;
}
