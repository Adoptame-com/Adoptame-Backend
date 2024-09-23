import { HttpStatus } from '@nestjs/common';

export const docs = {
  title: 'Adoptame',
  description:
    'A simple and user-friendly app that connects people with animals in need of adoption, helping you find and adopt your perfect pet.',
  version: '1.0',
  messages: {
    allowedRoles: '**Allowed Roles**: <<0>>.',
    notRolesRequired: 'No roles required',
  },
  summaries: {
    accountsGet: 'Returns all accounts.',
    accountsGetOne: 'Returns an account by ID.',
    accountsCreate: 'Creates a new account.',
    accountsUpdate: 'Updates an account by ID.',
    accountsDelete: 'Deletes an account by ID.',
    authLogin: 'Authenticates a user and returns a JWT token.',
    authSignup: 'Registers a new user.',
    adoptionsGet: 'Returns all adoptions.',
    defaultNotFound: 'Returns no found response.',
  },
  statusCodes: {
    [HttpStatus.CONTINUE]: 'Continue',
    [HttpStatus.SWITCHING_PROTOCOLS]: 'Switching Protocols',
    [HttpStatus.PROCESSING]: 'Processing',
    [HttpStatus.EARLYHINTS]: 'Early Hints',
    [HttpStatus.OK]: 'OK',
    [HttpStatus.CREATED]: 'Created',
    [HttpStatus.ACCEPTED]: 'Accepted',
    [HttpStatus.NON_AUTHORITATIVE_INFORMATION]: 'Non-Authoritative Information',
    [HttpStatus.NO_CONTENT]: 'No Content',
    [HttpStatus.RESET_CONTENT]: 'Reset Content',
    [HttpStatus.PARTIAL_CONTENT]: 'Partial Content',
    [HttpStatus.AMBIGUOUS]: 'Ambiguous',
    [HttpStatus.MOVED_PERMANENTLY]: 'Moved Permanently',
    [HttpStatus.FOUND]: 'Found',
    [HttpStatus.SEE_OTHER]: 'See Other',
    [HttpStatus.NOT_MODIFIED]: 'Not Modified',
    [HttpStatus.TEMPORARY_REDIRECT]: 'Temporary Redirect',
    [HttpStatus.PERMANENT_REDIRECT]: 'Permanent Redirect',
    [HttpStatus.BAD_REQUEST]: 'Bad Request',
    [HttpStatus.UNAUTHORIZED]: 'Unauthorized',
    [HttpStatus.PAYMENT_REQUIRED]: 'Payment Required',
    [HttpStatus.FORBIDDEN]: 'Forbidden',
    [HttpStatus.NOT_FOUND]: 'Not Found',
    [HttpStatus.METHOD_NOT_ALLOWED]: 'Method Not Allowed',
    [HttpStatus.NOT_ACCEPTABLE]: 'Not Acceptable',
    [HttpStatus.PROXY_AUTHENTICATION_REQUIRED]: 'Proxy Authentication Required',
    [HttpStatus.REQUEST_TIMEOUT]: 'Request Timeout',
    [HttpStatus.CONFLICT]: 'Conflict',
    [HttpStatus.GONE]: 'Gone',
    [HttpStatus.LENGTH_REQUIRED]: 'Length Required',
    [HttpStatus.PRECONDITION_FAILED]: 'Precondition Failed',
    [HttpStatus.PAYLOAD_TOO_LARGE]: 'Payload Too Large',
    [HttpStatus.URI_TOO_LONG]: 'URI Too Long',
    [HttpStatus.UNSUPPORTED_MEDIA_TYPE]: 'Unsupported Media Type',
    [HttpStatus.REQUESTED_RANGE_NOT_SATISFIABLE]:
      'Requested Range Not Satisfiable',
    [HttpStatus.EXPECTATION_FAILED]: 'Expectation Failed',
    [HttpStatus.I_AM_A_TEAPOT]: 'I Am a Teapot',
    [HttpStatus.MISDIRECTED]: 'Misdirected Request',
    [HttpStatus.UNPROCESSABLE_ENTITY]: 'Unprocessable Entity',
    [HttpStatus.FAILED_DEPENDENCY]: 'Failed Dependency',
    [HttpStatus.PRECONDITION_REQUIRED]: 'Precondition Required',
    [HttpStatus.TOO_MANY_REQUESTS]: 'Too Many Requests',
    [HttpStatus.INTERNAL_SERVER_ERROR]: 'Internal Server Error',
    [HttpStatus.NOT_IMPLEMENTED]: 'Not Implemented',
    [HttpStatus.BAD_GATEWAY]: 'Bad Gateway',
    [HttpStatus.SERVICE_UNAVAILABLE]: 'Service Unavailable',
    [HttpStatus.GATEWAY_TIMEOUT]: 'Gateway Timeout',
    [HttpStatus.HTTP_VERSION_NOT_SUPPORTED]: 'HTTP Version Not Supported',
  },
};
