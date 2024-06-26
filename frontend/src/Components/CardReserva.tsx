import React from "react";
import { IReserva } from "../Interfaces/Reserva";




const CardReserva: React.FC<IReserva> = (props: IReserva) => {
    const formattedDataUso = new Date(props.dataUso).toLocaleDateString();

    
return(
 

    <div className="bg-green-500 flex flex-col w-52 p-5 justify-center items-center rounded-lg space-y-1 ml-2 ">
        <div>
        <div className=""> {props.url && <img src={props.url} alt="Imagem da reserva" style={{ objectFit: 'cover', width: '100%', height: '150px'}} />}</div>
        </div>


        <div className="text-left ">
            <ul>
                <li> Sala: {props.nomeSala}</li>
                <li>Local: {props.local}</li>
                <li>Data: {formattedDataUso}</li>
                <li>Início: {props.horaInicio}</li>
                <li>Término:{props.horaFinal}</li>
                <li>Responsável: {props.responsavel}</li>


            </ul>
        </div>
        <div className="flex space-x-9">
        {/* <RiDeleteBin6Line className="w-6 h-6" onClick={deleteReserva} /> */}
        {/* <FiEdit3 className="w-6 h-6" /> */}
        </div>

    </div>

)



 }

 export default CardReserva;