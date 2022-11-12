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


//Create

      async add(heroDto: CreateHeroDto): Promise<HeroInterface> {
        const newHero = await new this.heroModel(heroDto);
        return newHero.save();
      }
    

// ALL

async getAllFromDb(): Promise<HeroInterface[]> {
  return await this.heroModel.find().exec();
}


// GET BYID
async getById(id: string): Promise<HeroInterface> {
  return await this.heroModel.findById(id).exec();
}



// UPDATE ONE

async update(id: string, heroDto: CreateHeroDto): Promise<HeroInterface> {
  return await this.heroModel.findByIdAndUpdate(id, heroDto, {
    new: true,
  });
}

//DELETE

async remove(id: string): Promise<any> {
  const result = await this.heroModel.deleteOne({ _id: id }).exec();
  if (!result) {
    throw new NotFoundException('Could not find hero.');
  }
}



}
