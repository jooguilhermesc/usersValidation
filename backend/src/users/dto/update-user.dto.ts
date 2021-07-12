import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';

export class UpdateUserDto extends PartialType(CreateUserDto) {
  id?: number;
  name: string;
  email: string;
  cpf: string;
  phoneNumber?: string;
  habilities: string[];
  isValidated?: number;
}
