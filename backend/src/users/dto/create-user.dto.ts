export class CreateUserDto {
  id?: number;
  name: string;
  email: string;
  cpf: string;
  phoneNumber?: string;
  habilities: string[];
  isValidated?: number;
}
