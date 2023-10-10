import {
  Body,
  Controller,
  Delete,
  Get,
  Inject,
  Logger,
  Param,
  ParseIntPipe,
  Post,
  Put,
} from '@nestjs/common';
import { GroupService } from './group.service';
import { GroupDto } from './dto/GroupDto';

@Controller('group')
export class GroupController {
  private readonly logger = new Logger(GroupController.name);
  @Inject(GroupService)
  private readonly groupService: GroupService;

  @Get(':id')
  async find(@Param('id', ParseIntPipe) groupId: number): Promise<GroupDto> {
    return await this.groupService.find(groupId);
  }

  @Post()
  async create(@Body() dto: GroupDto): Promise<number> {
    return await this.groupService.create(dto);
  }

  @Put()
  async update(@Body() dto: GroupDto): Promise<number> {
    return await this.groupService.update(dto);
  }

  @Delete(':id')
  async delete(@Param('id', ParseIntPipe) groupId: number): Promise<number> {
    return await this.groupService.delete(groupId);
  }
}
