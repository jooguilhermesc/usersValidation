import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('objeto')
  getObjeto(): any {
    return this.appService.getObjeto();
  }

  @Get('users')
  getUsers(): any {
    return this.appService.getUsers();
  }
}
