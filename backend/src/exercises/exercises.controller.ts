import { Controller, Get, Post, Body, Param, Put, Delete, Query } from '@nestjs/common';
import { ExercisesService } from './exercises.service';
import { Exercise } from './schemas/exercise.schema';

@Controller('exercises')
export class ExercisesController {
  constructor(private readonly exercisesService: ExercisesService) {}

  @Post()
  async create(@Body() createExerciseDto: any): Promise<Exercise> {
    return this.exercisesService.create(createExerciseDto);
  }

  @Get()
  async findAll(): Promise<Exercise[]> {
    return this.exercisesService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Exercise> {
    return this.exercisesService.findOne(id);
  }

  @Get('type/:type')
  async findByType(@Param('type') type: string): Promise<Exercise[]> {
    return this.exercisesService.findByType(type);
  }

  @Get('level/:level')
  async findByLevel(@Param('level') level: string): Promise<Exercise[]> {
    return this.exercisesService.findByLevel(level);
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() updateExerciseDto: any,
  ): Promise<Exercise> {
    return this.exercisesService.update(id, updateExerciseDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<Exercise> {
    return this.exercisesService.remove(id);
  }
} 