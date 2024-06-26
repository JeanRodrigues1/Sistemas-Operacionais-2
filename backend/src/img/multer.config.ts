import { diskStorage } from 'multer';
import * as path from 'path';
import { v4 as uuidv4 } from 'uuid';
import * as fs from 'fs'
import { MulterOptions } from '@nestjs/platform-express/multer/interfaces/multer-options.interface';

const multerConfig : MulterOptions = {
    storage: diskStorage({
        destination: (req, res , callback) => {
            const idUsuario : string = req.params.id

            //Diretório onde o arquivo será salvo
            const diretorioImgs = path.join('./imgs', idUsuario)

            if (!fs.existsSync(diretorioImgs)) {
                fs.mkdirSync(diretorioImgs, {recursive : true})
            }

            callback(null, diretorioImgs)
        },
        filename: (req, arquivo, callback) => {
            const nomeImg = path.parse(arquivo.originalname).name.replace(/\s/g, '') + '-' + uuidv4();

            const tipoArquivo = path.parse(arquivo.originalname).ext;
            callback(null, `${nomeImg}${tipoArquivo}`);
        }
    })
}

export default multerConfig