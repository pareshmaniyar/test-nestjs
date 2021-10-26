import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreatePeriodDto } from './dto/create-period.dto';
import { UpdatePeriodDto } from './dto/update-period.dto';
import { Period } from './entities/period.entity';

@Injectable()
export class PeriodService {
    constructor(
        @InjectRepository(Period) private periodRepo: Repository<Period>
    ) {}

    async create(createPeriodDto: CreatePeriodDto) {
        const period = this.periodRepo.create({
            name: createPeriodDto.name,
        });
        const result = await this.periodRepo.save(period);
        return result;
    }

    findAll() {
        return this.periodRepo.find({});
    }

    findOne(id: number) {
        return this.periodRepo.findOne({ id });
    }

    update(id: number, updatePeriodDto: UpdatePeriodDto) {
        return this.periodRepo.save({ id, ...updatePeriodDto });
    }

    remove(id: number) {
        return this.periodRepo.delete({ id });
    }
}
