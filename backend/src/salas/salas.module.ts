import { Module } from "@nestjs/common";
import { TypeOrmModule } from '@nestjs/typeorm';
import { SalasService } from './salas.service';
import { SalasController } from "./salas.controller";
import { SalaEntity } from "./entities/sala.entity";
import { ImgEntity } from 'src/img/entities/img.entity';

@Module({
    imports: [TypeOrmModule.forFeature([SalaEntity])],
    controllers: [SalasController],
    providers: [SalasService],
})
export class SalasModule {}