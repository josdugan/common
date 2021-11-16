import { Request, Response, NextFunction } from 'express';
import { JWTService } from '../services/jwt';
import { UserPayload } from '../interfaces/user-payload';

const currentUser = (req: Request, res: Response, next: NextFunction) => {
  if (!req.session?.jwt) {
    return next();
  }

  try {
    const payload = JWTService.verify(req.session.jwt) as UserPayload;
    req.currentUser = payload;
  } catch (err: any) {
    console.error(err.message);
  }

  next();
};

export { currentUser, UserPayload };
