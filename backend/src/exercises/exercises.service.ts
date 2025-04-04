import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Exercise } from './schemas/exercise.schema';

@Injectable()
export class ExercisesService {
  constructor(
    @InjectModel(Exercise.name)
    private exerciseModel: Model<Exercise>
  ) {}

  async create(createExerciseDto: any): Promise<Exercise> {
    const createdExercise = new this.exerciseModel(createExerciseDto);
    return createdExercise.save();
  }

  async findAll(): Promise<Exercise[]> {
    return this.exerciseModel.find().exec();
  }

  async findOne(id: string): Promise<Exercise> {
    return this.exerciseModel.findById(id).exec();
  }

  async findByType(type: string): Promise<Exercise[]> {
    return this.exerciseModel.find({ type }).exec();
  }

  async findByLevel(level: string): Promise<Exercise[]> {
    return this.exerciseModel.find({ level }).exec();
  }

  async update(id: string, updateExerciseDto: any): Promise<Exercise> {
    return this.exerciseModel
      .findByIdAndUpdate(id, updateExerciseDto, { new: true })
      .exec();
  }

  async remove(id: string): Promise<Exercise> {
    return this.exerciseModel.findByIdAndDelete(id).exec();
  }
} 