import jwt from 'jsonwebtoken';
import { UserPayload } from '../interfaces/user-payload';

class JWTService {
  static generate(user: UserPayload) {
    return jwt.sign(
      {
        id: user.id,
        email: user.email,
      },
      process.env.JWT_KEY!
    );
  }

  static verify(userJwt: string) {
    return jwt.verify(userJwt, process.env.JWT_KEY!);
  }
}

export { JWTService };
