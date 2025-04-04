import { Controller, Get, UseGuards, Request, Res } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './auth.service';
import { Response } from 'express';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Get('moodle')
  @UseGuards(AuthGuard('moodle'))
  async moodleAuth() {
    // This route will redirect to Moodle for authentication
  }

  @Get('moodle/callback')
  @UseGuards(AuthGuard('moodle'))
  async moodleAuthCallback(@Request() req, @Res() res: Response) {
    // Successful authentication, redirect to the application
    res.redirect('/dashboard');
  }

  @Get('logout')
  async logout(@Res() res: Response) {
    // Handle logout logic
    res.redirect('/');
  }
} 