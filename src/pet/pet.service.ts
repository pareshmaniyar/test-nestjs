import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreatePetInput } from './dto/create-pet.input';
import { UpdatePetInput } from './dto/update-pet.input';
import { Pet } from './entities/pet.entity';

@Injectable()
export class PetService {
  constructor(@InjectRepository(Pet) private petRepo: Repository<Pet>) {}
  create(createPetInput: CreatePetInput) {
    const newPet = this.petRepo.create(createPetInput);
    return this.petRepo.save(newPet);
  }

  findAll() {
    return this.petRepo.find();
  }

  findOne(id: number) {
    return this.petRepo.findOneOrFail(id);
  }

  update(id: number, updatePetInput: UpdatePetInput) {
    return `This action updates a #${id} pet`;
  }

  remove(id: number) {
    return `This action removes a #${id} pet`;
  }
}
