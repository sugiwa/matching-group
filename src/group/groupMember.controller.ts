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
import { GroupMemberService } from './groupMember.service';
import { GroupMemberDto } from './dto/GroupMemberDto';

@Controller('groupMember')
export class GroupMemberController {
  @Inject(GroupMemberService)
  private readonly groupMemberService: GroupMemberService;

  @Get(':id')
  async find(@Param('id', ParseIntPipe) id: number): Promise<GroupMemberDto> {
    return await this.groupMemberService.find(id);
  }

  @Post()
  async create(@Body() dto: GroupMemberDto): Promise<number> {
    return await this.groupMemberService.create(dto);
  }

  @Put()
  async update(@Body() dto: GroupMemberDto): Promise<number> {
    return await this.groupMemberService.update(dto);
  }

  @Delete(':id')
  async delete(@Param('id', ParseIntPipe) id: number): Promise<number> {
    return await this.groupMemberService.delete(id);
  }
}
