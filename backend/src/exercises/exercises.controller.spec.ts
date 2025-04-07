import { Test, TestingModule } from '@nestjs/testing';
import { ExercisesController } from './exercises.controller';
import { ExercisesService } from './exercises.service';
import { Exercise } from './schemas/exercise.schema';

describe('ExercisesController', () => {
  let controller: ExercisesController;
  let service: ExercisesService;

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
      controllers: [ExercisesController],
      providers: [
        {
          provide: ExercisesService,
          useValue: {
            create: jest.fn().mockResolvedValue(mockExercise),
            findAll: jest.fn().mockResolvedValue([mockExercise]),
            findOne: jest.fn().mockResolvedValue(mockExercise),
            findByType: jest.fn().mockResolvedValue([mockExercise]),
            findByLevel: jest.fn().mockResolvedValue([mockExercise]),
            update: jest.fn().mockResolvedValue(mockExercise),
            remove: jest.fn().mockResolvedValue(mockExercise),
          },
        },
      ],
    }).compile();

    controller = module.get<ExercisesController>(ExercisesController);
    service = module.get<ExercisesService>(ExercisesService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('create', () => {
    it('should create an exercise', async () => {
      const result = await controller.create(mockExercise);
      expect(result).toEqual(mockExercise);
      expect(service.create).toHaveBeenCalledWith(mockExercise);
    });
  });

  describe('findAll', () => {
    it('should return an array of exercises', async () => {
      const result = await controller.findAll();
      expect(result).toEqual([mockExercise]);
      expect(service.findAll).toHaveBeenCalled();
    });
  });

  describe('findOne', () => {
    it('should return a single exercise', async () => {
      const result = await controller.findOne('some-id');
      expect(result).toEqual(mockExercise);
      expect(service.findOne).toHaveBeenCalledWith('some-id');
    });
  });
}); 