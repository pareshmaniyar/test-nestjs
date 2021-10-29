import { ApiProperty } from '@nestjs/swagger';
import {
  IsDate,
  IsInt,
  IsEmail,
  MaxLength,
  IsDateString
} from 'class-validator';

export class CreateContactInfoDto {
  @ApiProperty()
  @MaxLength(20)
  name: string;

  @ApiProperty()
  @IsDateString()
  dob: string;

  @ApiProperty()
  @MaxLength(40)
  address: string;

  @ApiProperty()
  @IsInt()
  pincode: string;

  @ApiProperty()
  @MaxLength(20)
  phoneNumber: string;

  @ApiProperty()
  @IsEmail()
  email: string;

  @ApiProperty()
  @MaxLength(20)
  country: string;
}
