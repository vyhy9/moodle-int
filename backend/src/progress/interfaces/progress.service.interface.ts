import { Progress } from '../schemas/progress.schema';
import { CreateProgressDto } from '../dto/create-progress.dto';

export interface ProgressServiceInterface {
  create(createProgressDto: CreateProgressDto): Promise<Progress>;
  findByUser(userId: string): Promise<Progress[]>;
} 