import { Module } from '@nestjs/common';
import { UserModule } from './module/user/user.module';
import { DatabaseModule } from './infrastructure/persistence/database.module';

@Module({
  imports: [DatabaseModule, UserModule],
})
export class AppModule {}
