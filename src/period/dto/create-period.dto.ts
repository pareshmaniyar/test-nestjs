import { ApiProperty } from '@nestjs/swagger';
import { IsInt } from 'class-validator';

export class CreatePeriodDto {
    @ApiProperty()
    name: string;

    @ApiProperty()
    @IsInt()
    startTime: number; //timestamp

    @ApiProperty()
    @IsInt()
    duration: number;

    @ApiProperty()
    classId: string;
}
