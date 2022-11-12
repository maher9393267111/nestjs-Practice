import {
    Controller,
    Get,
    Res,
    HttpStatus,
    Post,
    Body,
    Put,
    Delete,
    Param,
    HttpException,
  } from '@nestjs/common';

  import { HeroService } from './hero.service';
  import { CreateHeroDto } from './create-hero.dto';

  import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

  @ApiTags('hero')
  @Controller('hero')


@Controller('hero')
export class HeroController {


    // add service
    constructor(private readonly heroService: HeroService) {}


//1- Create Hero
@ApiOperation({ summary: 'Create hero' })
@ApiResponse({
  status: 201,
  description: 'The hero has been successfully created.',
})
@Post('add')
async saveHero(@Res() res, @Body() heroDto: CreateHeroDto) {
  const createdHero = await this.heroService.add(heroDto);
  return res.status(HttpStatus.OK).json(createdHero);
}






}
