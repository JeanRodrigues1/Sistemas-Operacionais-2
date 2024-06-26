import { ImgEntity } from 'src/img/entities/img.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';


@Entity()
export class SalaEntity {

    @PrimaryGeneratedColumn('increment')
    id : number

    @Column()
    nomeSala : string

    @Column()
    local : string

    @Column()
    dataUso : Date

    @Column( {type: 'time'} )
    horaInicio : number

    @Column( {type: 'time'} )
    horaFinal : number

    @Column()
    responsavel: string

    @Column()
    motivo : string

    @Column()
    convidados : string

    @OneToMany(()=> ImgEntity, (img)=> img.idSala)
    imgs : ImgEntity[]


}