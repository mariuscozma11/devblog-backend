import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { LoginDto } from './dto/auth.dto';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/user/entities/user.entity';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,

    private jwtService: JwtService,
  ) {}
  async validateUser(loginDto: LoginDto) {
    const user = await this.userRepository.findOne({
      where: {
        email: loginDto.email,
      },
    });
    if (!user) return null;
    const isMatch = await bcrypt.compare(loginDto.password, user.password);

    if (!isMatch) {
      throw new HttpException('Wrong credentials', HttpStatus.UNAUTHORIZED);
    }
    if (isMatch) {
      const payload = { sub: user.id, email: user.email};
      return {
        access_token: await this.jwtService.signAsync(payload),
      };
    }
  }
}
