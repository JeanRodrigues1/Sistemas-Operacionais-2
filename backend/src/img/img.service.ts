import { Injectable } from '@nestjs/common';
import { Request } from 'express';
import { ImgEntity } from './entities/img.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class ImgService {
  constructor(
    @InjectRepository(ImgEntity)
    readonly imgRepository : Repository<ImgEntity>
  ){}
  async create(req: Request, idSala: number, img: Express.Multer.File) {
    const novaImg : ImgEntity = new ImgEntity()
    novaImg.idSala = idSala
    novaImg.nomeImg = img.filename
    novaImg.tipoArquivo = img.mimetype
    novaImg.tamanhoArquivo = img.size
    novaImg.url = `${req.protocol}://${req.get('host')}/img/${req.params.id}/${img.filename}`
    return await this.imgRepository.save(novaImg);
  }

  
}