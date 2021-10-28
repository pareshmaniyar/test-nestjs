import { ApiProperty, PartialType } from '@nestjs/swagger';
import { IsInt, IsEmail, MaxLength, IsDateString } from 'class-validator';
import { CreateContactInfoDto } from './create-contact-info.dto';

export class UpdateContactInfoDto extends PartialType(CreateContactInfoDto) {
  @ApiProperty()
  @MaxLength(20)
  name?: string;

  @ApiProperty()
  @IsDateString()
  dob?: string;

  @ApiProperty()
  @MaxLength(40)
  address?: string;

  @ApiProperty()
  @IsInt()
  pincode?: string;

  @ApiProperty()
  @MaxLength(20)
  phoneNumber?: string;

  @ApiProperty()
  @IsEmail()
  email?: string;
}
