import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class getBetDTO {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  bet: string;
}
