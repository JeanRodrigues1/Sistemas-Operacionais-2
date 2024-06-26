
import { SalaEntity } from "src/salas/entities/sala.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: 'img'})
export class ImgEntity {

    @PrimaryGeneratedColumn('increment')
    id: number

    @Column()
    nomeImg: String

    @Column()
    tipoArquivo: String

    @Column()
    tamanhoArquivo: number

    @Column()
    url: String

     @ManyToOne(()=> SalaEntity, (sala)=> sala.imgs)
     idSala: number
    

}