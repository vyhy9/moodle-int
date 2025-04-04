import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { ProgressService } from './progress.service';
import { Progress } from './schemas/progress.schema';
import { CreateProgressDto } from './dto/create-progress.dto';

@Controller('progress')
export class ProgressController {
  constructor(private readonly progressService: ProgressService) {}

  @Post()
  async create(@Body() createProgressDto: CreateProgressDto): Promise<Progress> {
    return this.progressService.create(createProgressDto);
  }

  @Get(':userId')
  async findByUser(@Param('userId') userId: string): Promise<Progress[]> {
    return this.progressService.findByUser(userId);
  }
} 