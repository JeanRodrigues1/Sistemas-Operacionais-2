import { Controller, Get, Post, Body, Patch, Param, Delete, UseInterceptors, Req, UploadedFile, StreamableFile } from '@nestjs/common';
import { ImgService } from './img.service';
import { FileInterceptor } from '@nestjs/platform-express';
import multerConfig from './multer.config';
import { Request } from 'express';
import * as fs from 'fs';
import { join } from 'path';

@Controller('img')
export class ImgController {
  constructor(private readonly imgService: ImgService) {}

  @Post('upload/:id')
  @UseInterceptors(FileInterceptor('file', multerConfig))
  create(
    @Param('id') id: number,
    @Req() req: Request,
    @UploadedFile() img: Express.Multer.File
  ) {
    return this.imgService.create(req, id, img);
  }

  @Get(':id/:nomeImg')
  findOne(@Param('id') id: number, @Param('nomeImg') nomeImg: String) {
    const img : fs.ReadStream = fs.createReadStream(join (process.cwd(), `imgs/${id}/${nomeImg}`))
    return new StreamableFile(img);
  }

}