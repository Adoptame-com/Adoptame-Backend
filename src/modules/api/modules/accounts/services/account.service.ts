import { HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Account } from '@src/modules/mongo/schemas/account.schema';
import {
  AccountDto,
  PartialAccountDto,
  PartialAccountIdDto,
  AccountNames,
  AccountIdNoPasswordDto,
} from '../dtos/account.dto';
import { statics } from '@src/statics/statics';
import { ResponseError } from '@src/common/exceptions/response-error';
import { replaceKey } from '@src/common/functions/replace-key';
import { AccountIdDto } from '../dtos/account.dto';
import { replacePlaceholders } from '@src/common/functions/replace-placeholders';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AccountService {
  constructor(
    @InjectModel(Account.name) private accountModel: Model<Account>,
  ) {}

  async findAll(): Promise<AccountIdNoPasswordDto[]> {
    const accounts = await this.accountModel.find().exec();
    return accounts.map((account: Account) => ({
      id: account._id.toString(),
      username: account.username,
      email: account.email,
    }));
  }

  async findOne(
    accountDto: PartialAccountIdDto,
  ): Promise<AccountIdNoPasswordDto> {
    const adaptedAccountDto = replaceKey<PartialAccountIdDto>(
      accountDto,
      AccountNames.id,
      AccountNames._id,
    );
    const account = await this.accountModel.findOne(adaptedAccountDto).exec();
    if (!account) {
      throw new ResponseError({
        status: HttpStatus.NOT_FOUND,
        code: statics.codes.noDataFound.code,
        message: statics.codes.noDataFound.message,
        detail: statics.messages.accounts.notFound,
      });
    }
    return {
      id: account._id.toString(),
      username: account.username,
      email: account.email,
    };
  }

  async findOneWithPassword(
    accountDto: PartialAccountIdDto,
  ): Promise<AccountIdDto> {
    const adaptedAccountDto = replaceKey<PartialAccountIdDto>(
      accountDto,
      AccountNames.id,
      AccountNames._id,
    );
    const account = await this.accountModel.findOne(adaptedAccountDto).exec();
    if (!account) {
      throw new ResponseError({
        status: HttpStatus.NOT_FOUND,
        code: statics.codes.noDataFound.code,
        message: statics.codes.noDataFound.message,
        detail: statics.messages.accounts.notFound,
      });
    }
    return {
      id: account._id.toString(),
      username: account.username,
      email: account.email,
      password: account.password,
    };
  }

  async create(createAccountDto: AccountDto): Promise<AccountIdNoPasswordDto> {
    try {
      const encryptAccountDto = {
        ...createAccountDto,
        password: bcrypt.hashSync(
          createAccountDto.password,
          statics.constants.bcrypt.saltRounds,
        ),
      };
      const account = new this.accountModel(encryptAccountDto);
      const createdAccount = await account.save();
      return {
        id: createdAccount._id.toString(),
        username: createdAccount.username,
        email: createdAccount.email,
      };
    } catch (error) {
      if (error.code === 11000) {
        throw new ResponseError({
          status: HttpStatus.CONFLICT,
          code: statics.codes.conflictRequest.code,
          message: statics.codes.conflictRequest.message,
          detail: replacePlaceholders(
            statics.messages.default.dataAlreadyExists,
            [Object.keys(error.keyValue)[0]],
          ),
        });
      }
      throw error;
    }
  }

  async update(
    filterPartialAccountDto: PartialAccountIdDto,
    updatePartialAccountDto: PartialAccountDto,
  ): Promise<AccountIdNoPasswordDto[]> {
    try {
      const adaptedPartialAccountDto = replaceKey<PartialAccountIdDto>(
        filterPartialAccountDto,
        AccountNames.id,
        AccountNames._id,
      );
      const accountsToUpdate = await this.accountModel
        .find(adaptedPartialAccountDto)
        .exec();
      const ids = accountsToUpdate.map((account) => account._id);
      await this.accountModel
        .updateMany(adaptedPartialAccountDto, updatePartialAccountDto)
        .exec();
      const updatedAccounts = await this.accountModel
        .find({ _id: { $in: ids } })
        .exec();
      return updatedAccounts.map((account: Account) => ({
        id: account._id.toString(),
        username: account.username,
        email: account.email,
      }));
    } catch (error) {
      if (error.code === 11000) {
        throw new ResponseError({
          status: HttpStatus.CONFLICT,
          code: statics.codes.conflictRequest.code,
          message: statics.codes.conflictRequest.message,
          detail: replacePlaceholders(
            statics.messages.default.dataAlreadyExists,
            [Object.keys(error.keyValue)[0]],
          ),
        });
      }
      throw error;
    }
  }

  async delete(
    filterPartialAccountDto: PartialAccountIdDto,
  ): Promise<AccountIdNoPasswordDto[]> {
    const adaptedPartialAccountDto = replaceKey<PartialAccountIdDto>(
      filterPartialAccountDto,
      AccountNames.id,
      AccountNames._id,
    );
    const accountsToDelete = await this.accountModel
      .find(adaptedPartialAccountDto)
      .exec();
    await this.accountModel.deleteMany(adaptedPartialAccountDto).exec();
    return accountsToDelete.map((account: Account) => ({
      id: account._id.toString(),
      username: account.username,
      email: account.email,
    }));
  }
}
