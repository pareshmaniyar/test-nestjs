import {
  Body,
  Controller,
  Get,
  NotFoundException,
  Param,
  ParseIntPipe,
  Post,
  Query
} from '@nestjs/common';
import {
  ApiBadRequestResponse,
  ApiCreatedResponse,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiQuery,
  ApiTags
} from '@nestjs/swagger';
import { CreateUserDTO } from './dtos/create-user.dto';
import { User } from './entities/user.entity';
import { UserService } from './user.service';

@ApiTags('users')
@Controller('users')
export class UserController {
  constructor(private userService: UserService) {}

  @ApiOkResponse({ type: User, isArray: true })
  @ApiNotFoundResponse()
  @ApiQuery({ name: 'name', required: false })
  @Get()
  getUsers(@Query('name') name: string): User[] {
    const user = this.userService.findAll(name);
    if (!user.length) {
      throw new NotFoundException('User not found');
    }
    return user;
  }

  @ApiOkResponse({ type: User })
  @Get(':id')
  getUserByID(@Param('id', ParseIntPipe) id: number): User {
    return this.userService.findById(id);
  }

  @ApiCreatedResponse({ type: User })
  @ApiBadRequestResponse()
  @Post()
  createUser(@Body() body: CreateUserDTO): User {
    return this.userService.createUser(body);
  }
}
