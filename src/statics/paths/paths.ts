import { RequestMethod } from '@nestjs/common';

export class Path {
  path: string;
  method?: RequestMethod;
  tag?: string;
  public?: boolean;
}
const paths: Record<string, Path> = {};

paths.root = {
  path: '/',
  tag: 'Root',
  method: RequestMethod.GET,
  public: false,
};

paths.docs = {
  path: '/docs',
  public: true,
};

paths.default = {
  path: '*',
  tag: 'Default',
  public: true,
};

paths.defaultGet = {
  path: `${paths.default.path}`,
  method: RequestMethod.GET,
  public: true,
};

paths.defaultPost = {
  path: `${paths.default.path}`,
  method: RequestMethod.POST,
  public: true,
};

paths.defaultPatch = {
  path: `${paths.default.path}`,
  method: RequestMethod.PATCH,
  public: true,
};

paths.defaultPut = {
  path: `${paths.default.path}`,
  method: RequestMethod.PUT,
  public: true,
};

paths.defaultDelete = {
  path: `${paths.default.path}`,
  method: RequestMethod.DELETE,
  public: true,
};

paths.test = {
  path: '/test',
  tag: 'Test',
};

paths.testSuccess = {
  path: `${paths.test.path}/success`,
  method: RequestMethod.GET,
  public: false,
};

paths.testError = {
  path: `${paths.test.path}/error`,
  method: RequestMethod.GET,
  public: false,
};

paths.accounts = {
  path: '/accounts',
  tag: 'Accounts',
};

paths.accountsGet = {
  path: `${paths.accounts.path}`,
  method: RequestMethod.GET,
  public: false,
};

paths.accountsGetOne = {
  path: `${paths.accounts.path}/:id`,
  method: RequestMethod.GET,
  public: false,
};

paths.accountsCreate = {
  path: `${paths.accounts.path}`,
  method: RequestMethod.POST,
  public: false,
};

paths.accountsUpdate = {
  path: `${paths.accounts.path}/:id`,
  method: RequestMethod.PATCH,
  public: false,
};

paths.accountsDelete = {
  path: `${paths.accounts.path}/:id`,
  method: RequestMethod.DELETE,
  public: false,
};

paths.auth = {
  path: '/auth',
  tag: 'Auth',
};

paths.authLogin = {
  path: `${paths.auth.path}/login`,
  method: RequestMethod.POST,
  public: true,
};

paths.authSignup = {
  path: `${paths.auth.path}/signup`,
  method: RequestMethod.POST,
  public: false,
};

export { paths };
