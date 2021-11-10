import { InputType, Int, Field } from '@nestjs/graphql';
import { IsAlpha, MaxLength } from 'class-validator';

@InputType()
export class CreateCarInput {
  @Field(() => String, { description: 'Name of the Car' })
  @IsAlpha()
  @MaxLength(15)
  name: string
}
