import {
  Body,
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Post,
  Req,
  UseGuards,
} from '@nestjs/common';
import { LoginDto } from './dto/auth.dto';
import { AuthService } from './auth.service';
import { LocalGuard } from './guards/local.guard';
import express from 'express';
import { JwtAuthGuard } from './guards/jwt.guard';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}
  @UseGuards(LocalGuard)
  @Post('login')
  login(@Req() req: express.Request) {
    return req.user
  }

  @Get('status')
  @UseGuards(JwtAuthGuard)
  status(@Req() req: express.Request) {
    console.log("inside auth controller status method")
    return req.user;
  }
}
