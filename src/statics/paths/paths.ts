import { RequestMethod } from '@nestjs/common';
import { docs } from '../docs/docs';

export class Path {
  path: string;
  method?: RequestMethod;
  tag?: string;
  public?: boolean;
  summary?: string;
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
  summary: docs.summaries.defaultNotFound,
};

paths.defaultPost = {
  path: `${paths.default.path}`,
  method: RequestMethod.POST,
  public: true,
  summary: docs.summaries.defaultNotFound,
};

paths.defaultPatch = {
  path: `${paths.default.path}`,
  method: RequestMethod.PATCH,
  public: true,
  summary: docs.summaries.defaultNotFound,
};

paths.defaultPut = {
  path: `${paths.default.path}`,
  method: RequestMethod.PUT,
  public: true,
  summary: docs.summaries.defaultNotFound,
};

paths.defaultDelete = {
  path: `${paths.default.path}`,
  method: RequestMethod.DELETE,
  public: true,
  summary: docs.summaries.defaultNotFound,
};

paths.accounts = {
  path: '/accounts',
  tag: 'Accounts',
};

paths.accountsGet = {
  path: `${paths.accounts.path}`,
  method: RequestMethod.GET,
  public: false,
  summary: docs.summaries.accountsGet,
};

paths.accountsGetOne = {
  path: `${paths.accounts.path}/:id`,
  method: RequestMethod.GET,
  public: false,
  summary: docs.summaries.accountsGetOne,
};

paths.accountsCreate = {
  path: `${paths.accounts.path}`,
  method: RequestMethod.POST,
  public: false,
  summary: docs.summaries.accountsCreate,
};

paths.accountsUpdate = {
  path: `${paths.accounts.path}/:id`,
  method: RequestMethod.PATCH,
  public: false,
  summary: docs.summaries.accountsUpdate,
};

paths.accountsDelete = {
  path: `${paths.accounts.path}/:id`,
  method: RequestMethod.DELETE,
  public: false,
  summary: docs.summaries.accountsDelete,
};

paths.auth = {
  path: '/auth',
  tag: 'Auth',
};

paths.authLogin = {
  path: `${paths.auth.path}/login`,
  method: RequestMethod.POST,
  public: true,
  summary: docs.summaries.authLogin,
};

paths.authSignup = {
  path: `${paths.auth.path}/signup`,
  method: RequestMethod.POST,
  public: true,
  summary: docs.summaries.authSignup,
};

paths.adoptions = {
  path: '/adoptions',
  tag: 'Adoptions',
};

paths.adoptionsGet = {
  path: `${paths.adoptions.path}`,
  method: RequestMethod.GET,
  public: true,
  summary: docs.summaries.adoptionsGet,
};

export { paths };
