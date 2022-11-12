import { ApiProperty } from '@nestjs/swagger';
export class CreateHeroDto {
    @ApiProperty()
  readonly firstName: string;
  @ApiProperty()
  readonly lastName: string;
  @ApiProperty()
  readonly house: string;
  @ApiProperty()
  readonly knownAs: string;
}
