import { Body, Controller, HttpCode, Param } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { statics } from '@src/statics/statics';
import { HttpStatus } from '@nestjs/common';
import { AccountService } from '@src/modules/api/modules/accounts/services/account.service';
import {
  AccountResponseDto,
  AccountsResponseDto,
} from './dtos/account-response.dto';
import { ErrorResponseDto } from '@src/dtos/error-response.dto';
import { AccountDto, PartialAccountDto } from './dtos/account.dto';
import { IdDto } from '@src/dtos/id.dto';
import { ResponseError } from '@src/common/exceptions/response-error';
import { EndpointConfig } from '@src/common/decorators/enpoint-config.decorator';

@ApiTags(statics.paths.accounts.tag)
@Controller()
export class AccountsController {
  constructor(private readonly accountService: AccountService) {}

  @EndpointConfig(statics.paths.accountsGet, [
    {
      status: HttpStatus.OK,
      type: AccountsResponseDto,
    },
  ])
  async findAll(): Promise<AccountsResponseDto> {
    const accounts = await this.accountService.findAll();
    return {
      status: HttpStatus.OK,
      code: statics.codes.dataRetrievedSuccessfully.code,
      message: statics.codes.dataRetrievedSuccessfully.message,
      detail: statics.messages.accounts.findAll,
      body: accounts,
    };
  }

  @EndpointConfig(statics.paths.accountsGetOne, [
    {
      status: HttpStatus.OK,
      type: AccountResponseDto,
    },
    {
      status: HttpStatus.BAD_REQUEST,
      type: ErrorResponseDto,
    },
    {
      status: HttpStatus.NOT_FOUND,
      type: ErrorResponseDto,
    },
  ])
  async findOne(@Param() params: IdDto): Promise<AccountResponseDto> {
    const account = await this.accountService.findOne({ id: params.id });
    return {
      status: HttpStatus.OK,
      code: statics.codes.dataRetrievedSuccessfully.code,
      message: statics.codes.dataRetrievedSuccessfully.message,
      detail: statics.messages.accounts.findOne,
      body: account,
    };
  }

  @HttpCode(HttpStatus.CREATED)
  @EndpointConfig(statics.paths.accountsCreate, [
    {
      status: HttpStatus.CREATED,
      type: AccountResponseDto,
    },
    {
      status: HttpStatus.BAD_REQUEST,
      type: ErrorResponseDto,
    },
    {
      status: HttpStatus.CONFLICT,
      type: ErrorResponseDto,
    },
  ])
  async create(@Body() account: AccountDto): Promise<AccountResponseDto> {
    const createdAccount = await this.accountService.create(account);
    return {
      status: HttpStatus.CREATED,
      code: statics.codes.dataSavedSuccessfully.code,
      message: statics.codes.dataSavedSuccessfully.message,
      detail: statics.messages.accounts.create,
      body: createdAccount,
    };
  }

  @EndpointConfig(statics.paths.accountsUpdate, [
    {
      status: HttpStatus.OK,
      type: AccountsResponseDto,
    },
    {
      status: HttpStatus.BAD_REQUEST,
      type: ErrorResponseDto,
    },
    {
      status: HttpStatus.NOT_FOUND,
      type: ErrorResponseDto,
    },
    {
      status: HttpStatus.CONFLICT,
      type: ErrorResponseDto,
    },
  ])
  async update(
    @Param() params: IdDto,
    @Body() updateAccountRequest: PartialAccountDto,
  ): Promise<AccountResponseDto> {
    const updatedAccounts = await this.accountService.update(
      { id: params.id },
      updateAccountRequest,
    );
    if (updatedAccounts.length === 0) {
      throw new ResponseError({
        status: HttpStatus.NOT_FOUND,
        code: statics.codes.noDataFound.code,
        message: statics.codes.noDataFound.message,
        detail: statics.messages.accounts.notFound,
      });
    }
    return {
      status: HttpStatus.OK,
      code: statics.codes.dataUpdatedSuccessfully.code,
      message: statics.codes.dataUpdatedSuccessfully.message,
      detail: statics.messages.accounts.update,
      body: updatedAccounts[0],
    };
  }

  @EndpointConfig(statics.paths.accountsDelete, [
    {
      status: HttpStatus.OK,
      type: AccountsResponseDto,
    },
    {
      status: HttpStatus.BAD_REQUEST,
      type: ErrorResponseDto,
    },
    {
      status: HttpStatus.NOT_FOUND,
      type: ErrorResponseDto,
    },
  ])
  async delete(@Param() params: IdDto): Promise<AccountResponseDto> {
    const deletedAccounts = await this.accountService.delete({ id: params.id });
    if (deletedAccounts.length === 0) {
      throw new ResponseError({
        status: HttpStatus.NOT_FOUND,
        code: statics.codes.noDataFound.code,
        message: statics.codes.noDataFound.message,
        detail: statics.messages.accounts.notFound,
      });
    }
    return {
      status: HttpStatus.OK,
      code: statics.codes.dataDeletedSuccessfully.code,
      message: statics.codes.dataDeletedSuccessfully.message,
      detail: statics.messages.accounts.delete,
      body: deletedAccounts[0],
    };
  }
}
