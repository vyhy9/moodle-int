import { IsString, IsNumber, IsBoolean, IsObject, IsOptional } from 'class-validator';

export class CreateProgressDto {
  @IsString()
  userId: string;

  @IsString()
  exerciseId: string;

  @IsNumber()
  score: number;

  @IsBoolean()
  completed: boolean;

  @IsOptional()
  @IsObject()
  answers?: Record<string, any>;
} 