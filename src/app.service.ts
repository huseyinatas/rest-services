import { Injectable } from '@nestjs/common';
@Injectable()
export class AppService {
  appLoaded(): any {
    return {
      message: 'Api worked!',
      status: 200,
    };
  }
}
