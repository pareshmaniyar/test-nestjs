import { ApiProperty } from "@nestjs/swagger";
import { MaxLength } from "class-validator";

export class CreateSubjectDto {
    @ApiProperty()
    @MaxLength(20)
    name: string;
}
