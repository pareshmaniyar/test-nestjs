import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ParseIntPipe
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { ContactInfoService } from './contact-info.service';
import { CreateContactInfoDto } from './dto/create-contact-info.dto';
import { UpdateContactInfoDto } from './dto/update-contact-info.dto';

@ApiTags('contact-info')
@Controller('contact-info')
export class ContactInfoController {
  constructor(private readonly contactInfoService: ContactInfoService) {}

  @Post()
  create(@Body() createContactInfoDto: CreateContactInfoDto) {
    return this.contactInfoService.create(createContactInfoDto);
  }

  @Get()
  findAll() {
    return this.contactInfoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.contactInfoService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateContactInfoDto: UpdateContactInfoDto
  ) {
    return this.contactInfoService.update(+id, updateContactInfoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.contactInfoService.remove(+id);
  }
}
