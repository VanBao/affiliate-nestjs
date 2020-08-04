import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response } from 'express';

@Injectable()
export class CheckLoginMiddleware implements NestMiddleware {
    use(req: Request, res: Response, next: Function) {
      console.log(req.headers); 
      //res.send({status: false, msg: 'error', code: 702, data: []});
    next();
  }
}
