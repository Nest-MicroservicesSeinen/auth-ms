import { Controller } from '@nestjs/common';
import { AuthService } from './auth.service';
import { MessagePattern, Payload } from '@nestjs/microservices';

@Controller()
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @MessagePattern('auth.register.user')
  registerUser(@Payload() pepe){
    return 'register User'
  }

  @MessagePattern('auth.login.user')
  loginUser(@Payload() pepe){
    return 'login User'
  }

  @MessagePattern('auth.verify.user')
  verifyUser(@Payload() pepe){
    return 'verify User'
  }

}
