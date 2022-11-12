import { Model } from 'mongoose';
import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { CreateHeroDto } from './create-hero.dto';
import { HeroInterface } from './hero.interface';


@Injectable()
export class HeroService {

    constructor(
        @Inject('HERO_MODEL')
        private readonly heroModel: Model<HeroInterface>,
      ) {}


      async add(heroDto: CreateHeroDto): Promise<HeroInterface> {
        const newHero = await new this.heroModel(heroDto);
        return newHero.save();
      }
    




}
