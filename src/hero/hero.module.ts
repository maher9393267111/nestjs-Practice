import { Module } from '@nestjs/common';
import { HeroController } from './hero.controller';
import { HeroService } from './hero.service';
import { heroesProviders } from './hero.providers';
 import { DatabaseModule } from 'src/database/database.module';

@Module({
  imports:[DatabaseModule],
  controllers: [HeroController],
  providers: [HeroService , ...heroesProviders],
  exports:[HeroService]
})
export class HeroModule {}
