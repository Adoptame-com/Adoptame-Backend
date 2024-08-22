import { HttpStatus, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { AccountService } from '../accounts/services/account.service';
import * as bcrypt from 'bcrypt';
import { AccountIdNoPasswordDto } from '../accounts/dtos/account.dto';
import { statics } from '@src/statics/statics';
import { ResponseError } from '@src/common/exceptions/response-error';
import { TokenDto } from './dtos/token.dto';

@Injectable()
export class AuthService {
  constructor(
    private readonly accountService: AccountService,
    private readonly jwtService: JwtService,
  ) {}

  async validateUserByEmail(
    email: string,
    password: string,
  ): Promise<TokenDto> {
    try {
      const account = await this.accountService.findOneWithPassword({
        email: email,
      });
      const validPassword = bcrypt.compareSync(password, account.password);
      if (!validPassword) {
        throw new Error();
      }
      return this.generateToken(account);
    } catch {
      throw new ResponseError({
        status: HttpStatus.UNAUTHORIZED,
        code: statics.codes.unauthorizedRequest.code,
        message: statics.codes.unauthorizedRequest.message,
        detail: statics.messages.default.incorrectEmailOrPassword,
      });
    }
  }

  async generateToken(account: AccountIdNoPasswordDto): Promise<TokenDto> {
    const payload = { id: account.id };
    return {
      token: this.jwtService.sign(payload),
    };
  }
}
