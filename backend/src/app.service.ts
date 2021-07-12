import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Página Inicial';
  }
  getObjeto(): any {
    return {
      id: 1,
      name: 'João',
    };
  }
  getUsers(): any {
    return 'Rotas para exibir todos os usuários';
  }
}
