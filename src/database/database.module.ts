import { Module } from '@nestjs/common';
import { databaseProviders } from './database.providers';

@Module({
  providers: [...databaseProviders],

  // exports to can using mongoose database in onother modules folders
  exports: [...databaseProviders],
})
export class DatabaseModule {}