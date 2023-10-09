import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import JwtStrategy from './jwt.strategy';
import { AuthInterceptor } from './auth.interceptor';
import { JwtService } from '@nestjs/jwt';

@Module({
  controllers: [AuthController],
  imports: [
    ConfigModule,
    // JwtModule.registerAsync({
    //   imports: [ConfigModule],
    //   useFactory: async (configService: ConfigService) => {
    //     console.error(`THIS IS ${configService.get(API_SECRET_KEY)}`);
    //     return {
    //       secret: configService.get(API_SECRET_KEY),
    //       secretOrPrivateKey: 'test',
    //       publicKey: 'test',
    //       privateKey: 'test',
    //     };
    //   },
    //   inject: [ConfigService],
    // }),
  ],
  providers: [
    AuthService,
    ConfigService,
    JwtStrategy,
    AuthInterceptor,
    JwtService,
  ],
})
export class AuthModule {}
