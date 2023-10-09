import {
  Body,
  Controller,
  Delete,
  Get,
  Inject,
  Param,
  ParseIntPipe,
  Post,
  Put,
} from '@nestjs/common';
import { UserService } from './user.service';
import { UserDto } from './dto/UserDto';

@Controller('user')
export class UserController {
  @Inject(UserService)
  private readonly userService: UserService;

  @Get(':id')
  async find(@Param('id', ParseIntPipe) id: number) {
    return await this.userService.find(id);
  }

  @Post()
  async create(@Body() dto: UserDto) {
    return await this.userService.create(dto);
  }

  @Put()
  async update(@Body() dto: UserDto) {
    return await this.userService.update(dto);
  }

  @Delete(':id')
  async delete(@Param('id', ParseIntPipe) id: number) {
    return await this.userService.delete(id);
  }
}
