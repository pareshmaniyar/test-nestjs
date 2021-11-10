import { Field, InputType } from '@nestjs/graphql';
import { ApiProperty } from '@nestjs/swagger';
import { MaxLength } from 'class-validator';

@InputType()
export class CreateSubjectDto {
  @Field(() => String, { description: 'Name of the Subject' })
  @ApiProperty()
  @MaxLength(20)
  name: string;
}
