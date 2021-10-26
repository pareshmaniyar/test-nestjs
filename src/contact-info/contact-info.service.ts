import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateContactInfoDto } from './dto/create-contact-info.dto';
import { UpdateContactInfoDto } from './dto/update-contact-info.dto';
import { ContactInfo } from './entities/contact-info.entity';

@Injectable()
export class ContactInfoService {
  constructor(
    @InjectRepository(ContactInfo)
    private contactInfoRepo: Repository<ContactInfo>
  ) {}
  async create(createContactInfoDto: CreateContactInfoDto) {
    const contactInfo = this.contactInfoRepo.create({
      ...createContactInfoDto,
    });
    const result = await this.contactInfoRepo.save(contactInfo);
    return result;
  }

  findAll() {
    return this.contactInfoRepo.find({});
  }

  findOne(id: number) {
    return this.contactInfoRepo.findOne({ id });
  }

  update(id: number, updateContactInfoDto: UpdateContactInfoDto) {
    return this.contactInfoRepo.save({ id, ...updateContactInfoDto });
  }

  remove(id: number) {
    return this.contactInfoRepo.delete({ id });
  }
}
