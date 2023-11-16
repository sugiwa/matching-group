import { Controller, Headers, Inject, Param, Post } from '@nestjs/common';
import { OAuthService } from './oauth.service';
import { Public } from '@/shared/decorators/public.decorator';

@Controller('oauth')
export class OAuthController {
  @Inject(OAuthService)
  private readonly oauthService: OAuthService;

  @Public()
  @Post('/:provider')
  async signIn(
    @Param('provider') provider: string,
    @Headers('oauth-token') token: string,
  ) {
    return this.oauthService.signIn(provider, token);
  }
}
