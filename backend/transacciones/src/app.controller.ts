import { Controller } from '@nestjs/common';
import { AppService } from './app.service';
import { MessagePattern } from '@nestjs/microservices';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  /*
  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
    */

  @MessagePattern({ cmd: 'get_transacciones' })
  gettransacciones() {
    return this.appService.findAll();
  }

  @MessagePattern({ cmd: 'create_usuario' })
  createUsuario(data: any) {
    return this.appService.create(data);
  }
}
