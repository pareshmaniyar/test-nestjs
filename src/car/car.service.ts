import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCarInput } from './dto/create-car.input';
import { UpdateCarInput } from './dto/update-car.input';
import { Car } from './entities/car.entity';

@Injectable()
export class CarService {
  constructor(@InjectRepository(Car) private carRepo: Repository<Car>) {}
  create(createCarInput: CreateCarInput) {
    const newCar = this.carRepo.create(createCarInput);
    return this.carRepo.save(newCar);
  }

  findAll() {
    return this.carRepo.find();
  }

  findOne(id: number) {
    return this.carRepo.findOneOrFail(id);
  }

  update(id: number, updateCarInput: UpdateCarInput) {
    return `This action updates a #${id} car`;
  }

  remove(id: number) {
    return `This action removes a #${id} car`;
  }
}
