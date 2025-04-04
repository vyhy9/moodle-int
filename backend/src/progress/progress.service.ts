import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Progress } from './schemas/progress.schema';
import { ProgressServiceInterface } from './interfaces/progress.service.interface';

@Injectable()
export class ProgressService implements ProgressServiceInterface {
  constructor(
    @InjectModel(Progress.name)
    private progressModel: Model<Progress>
  ) {}

  async create(createProgressDto: any): Promise<Progress> {
    const createdProgress = new this.progressModel(createProgressDto);
    return createdProgress.save();
  }

  async findByUser(userId: string): Promise<Progress[]> {
    return this.progressModel.find({ userId }).exec();
  }
} 