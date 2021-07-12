import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entities/user.entity';
// import { UpdateUserDto } from './dto/update-user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('cadastro')
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  @Get('listar')
  findAll() {
    return this.usersService.findAll();
  }

  @Get(':id/listar')
  findOne(@Param('id') id: number) {
    return this.usersService.findOne(id);
  }

  @Put(':id/validar')
  update(@Param('id') id: number, @Body() user: User): Promise<any> {
    user.id = Number(id);
    console.log('Update' + user.id);
    return this.usersService.update(user);
  }

  @Delete(':id/delete')
  remove(@Param('id') id: number) {
    return this.usersService.remove(id);
  }
}
