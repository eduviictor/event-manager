import * as express from 'express';
import * as jwt from 'jsonwebtoken';
import authConfig from '../../config/auth';

export function expressAuthentication(
  request: express.Request,
  securityName: string,
  scopes?: string[]
): Promise<any> {
  if (securityName === 'jwt') {
    const { authorization } = request.headers;

    return new Promise((resolve, reject) => {
      if (!authorization) {
        reject(new Error('No token provided'));
      }

      const [, token] = authorization.split(' ');
      console.log('token', token);
      jwt.verify(token, authConfig.secret, function (err: any, decoded: any) {
        console.log('scopes', scopes);
        console.log('decoded', decoded);
        if (err) {
          reject(err);
        } else {
          // Check if JWT contains all required scopes
          for (let scope of scopes) {
            if (!decoded.scopes.includes(scope)) {
              reject(new Error('JWT does not contain required scope.'));
            }
          }
          resolve(decoded);
        }
      });
    });
  }
  return Promise.reject({});
}
