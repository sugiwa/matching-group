import { API_SECRET_KEY } from '@/constants/auth';
import { Injectable, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy as BaseJwtStrategy } from 'passport-jwt';

@Injectable()
export default class JwtStrategy extends PassportStrategy(BaseJwtStrategy) {
  private readonly logger = new Logger(JwtStrategy.name);

  constructor(private readonly configService: ConfigService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: configService.get(API_SECRET_KEY),
    });
  }

  async validate(payload: any) {
    this.logger.debug(`payload: ${JSON.stringify(payload)}`);
    const { sub, email, employeeId } = payload;
    return { userId: sub, email, employeeId };
  }
}
