export interface OAuthVerifyService {
  fetchUserInfo(token: string): any;
  createToken(): any;
}
