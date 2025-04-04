import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ExerciseDocument = Exercise & Document;

@Schema()
export class Exercise {
  @Prop({ required: true })
  title: string;

  @Prop({ required: true, enum: ['listening', 'reading'] })
  type: string;

  @Prop({ required: true, enum: ['beginner', 'intermediate', 'advanced'] })
  level: string;

  @Prop({ required: true })
  content: string;

  @Prop({ required: function() { return this.type === 'listening'; } })
  audioUrl: string;

  @Prop([{
    questionText: String,
    options: [String],
    correctAnswer: String,
    explanation: String
  }])
  questions: Array<{
    questionText: string;
    options: string[];
    correctAnswer: string;
    explanation: string;
  }>;

  @Prop({ required: true })
  duration: number;

  @Prop({ required: true })
  moodleCourseId: string;

  @Prop({ default: Date.now })
  createdAt: Date;
}

export const ExerciseSchema = SchemaFactory.createForClass(Exercise); 