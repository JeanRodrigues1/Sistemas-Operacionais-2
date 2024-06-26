import { Module } from '@nestjs/common';
import { ImgService } from './img.service';
import { ImgController } from './img.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ImgEntity } from './entities/img.entity';

@Module({
  controllers: [ImgController],
  providers: [ImgService],
  imports: [TypeOrmModule.forFeature([ImgEntity])]
})
export class ImgModule {}