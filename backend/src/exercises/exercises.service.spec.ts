import { Test, TestingModule } from '@nestjs/testing';
import { getModelToken } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ExercisesService } from './exercises.service';
import { Exercise } from './schemas/exercise.schema';

describe('ExercisesService', () => {
  let service: ExercisesService;
  let model: Model<Exercise>;

  const mockExercise = {
    title: 'Test Exercise',
    type: 'reading',
    level: 'beginner',
    content: 'Test content',
    questions: [{
      questionText: 'Test question',
      options: ['A', 'B', 'C', 'D'],
      correctAnswer: 'A',
      explanation: 'Test explanation'
    }],
    duration: 10,
    moodleCourseId: '123'
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ExercisesService,
        {
          provide: getModelToken(Exercise.name),
          useValue: {
            new: jest.fn().mockResolvedValue(mockExercise),
            constructor: jest.fn().mockResolvedValue(mockExercise),
            find: jest.fn(),
            findOne: jest.fn(),
            findById: jest.fn(),
            findByIdAndUpdate: jest.fn(),
            findByIdAndDelete: jest.fn(),
            exec: jest.fn(),
            save: jest.fn(),
          },
        },
      ],
    }).compile();

    service = module.get<ExercisesService>(ExercisesService);
    model = module.get<Model<Exercise>>(getModelToken(Exercise.name));
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

//   describe('create', () => {
//     it('should create a new exercise', async () => {
//       jest.spyOn(model.prototype, 'save').mockResolvedValue(mockExercise as any);
//       const result = await service.create(mockExercise);
//       expect(result).toEqual(mockExercise);
//     });
//   });

  describe('findAll', () => {
    it('should return an array of exercises', async () => {
      const exercises = [mockExercise];
      jest.spyOn(model, 'find').mockReturnValue({
        exec: jest.fn().mockResolvedValue(exercises),
      } as any);
      expect(await service.findAll()).toEqual(exercises);
    });
  });

  describe('findOne', () => {
    it('should return a single exercise', async () => {
      jest.spyOn(model, 'findById').mockReturnValue({
        exec: jest.fn().mockResolvedValue(mockExercise),
      } as any);
      expect(await service.findOne('some-id')).toEqual(mockExercise);
    });
  });
}); 