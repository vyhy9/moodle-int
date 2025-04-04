import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ProgressDocument = Progress & Document;

@Schema()
export class Progress {
  @Prop({ required: true })
  userId: string;

  @Prop({ required: true })
  exerciseId: string;

  @Prop({ required: true })
  score: number;

  @Prop({ required: true })
  completed: boolean;

  @Prop({ default: Date.now })
  completedAt: Date;

  @Prop({ type: Object })
  answers: Record<string, any>;
}

export const ProgressSchema = SchemaFactory.createForClass(Progress); 