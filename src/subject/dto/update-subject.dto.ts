import { Field, InputType, Int } from '@nestjs/graphql';
import { PartialType } from '@nestjs/swagger';
import { CreateSubjectDto } from './create-subject.dto';

@InputType()
export class UpdateSubjectDto extends PartialType(CreateSubjectDto) {
  @Field(() => Int)
  id: number;

  @Field()
  name: string;
}
