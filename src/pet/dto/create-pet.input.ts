import { InputType, Int, Field } from '@nestjs/graphql';
import { IsAlpha, MaxLength } from 'class-validator';

@InputType()
export class CreatePetInput {
  @Field(() => String, { description: 'Name of the pet' })
  @IsAlpha()
  @MaxLength(15)
  name: string
}
