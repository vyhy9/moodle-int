import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(private jwtService: JwtService) {}

  async validateUser(profile: any) {
    // Here you would typically find or create a user in your database
    const user = {
      id: profile.id,
      email: profile.emails.value,
      name: profile.displayName,
    };

    return user;
  }

  async login(user: any) {
    const payload = { 
      sub: user.id,
      email: user.email,
      name: user.name 
    };
    
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
} 