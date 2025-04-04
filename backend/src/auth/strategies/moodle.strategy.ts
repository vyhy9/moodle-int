import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-oauth2';
import { ConfigService } from '@nestjs/config';
import axios from 'axios';

@Injectable()
export class MoodleStrategy extends PassportStrategy(Strategy, 'moodle') {
  constructor(private configService: ConfigService) {
    super({
      authorizationURL: `${configService.get<string>('MOODLE_URL')}/oauth2/authorize`,
      tokenURL: `${configService.get<string>('MOODLE_URL')}/oauth2/token`,
      clientID: configService.get<string>('MOODLE_CLIENT_ID'),
      clientSecret: configService.get<string>('MOODLE_CLIENT_SECRET'),
      callbackURL: configService.get<string>('MOODLE_CALLBACK_URL'),
      scope: ['user_info', 'email', 'profile'],
    });
  }

  async validate(accessToken: string, refreshToken: string): Promise<any> {
    try {
      // Get user info from Moodle
      const response = await axios.get(
        `${this.configService.get<string>('MOODLE_URL')}/webservice/rest/server.php`,
        {
          params: {
            wstoken: accessToken,
            wsfunction: 'core_user_get_users_by_field',
            moodlewsrestformat: 'json',
            field: 'id',
            values: [0],
          },
        },
      );

      const userData = response.data[0];
      
      return {
        id: userData.id,
        email: userData.email,
        name: `${userData.firstname} ${userData.lastname}`,
        accessToken,
      };
    } catch (error) {
      console.error('Error fetching user data from Moodle:', error);
      throw error;
    }
  }
} 