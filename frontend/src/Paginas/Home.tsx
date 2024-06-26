import { useEffect, useState } from "react";
import CardReserva from "../Components/CardReserva";
import { IoSearch } from "react-icons/io5";
import TopBar from "../Components/TopBar";




export const Home = () => {
    const [reservas, setReservas] = useState<any[]>([]);
    const [searchTerm, setSearchTerm] = useState<string>("");


    useEffect(() => {
        fetchReservas();
    }, []);

    const fetchReservas = async () => {
        try {
            const response = await fetch("http://localhost:3000/salas");
            if (response.ok) {


                const data = await response.json();
                console.log(data);

                setReservas(data);
            } else {
                console.error("Erro ao obter as reservas:", response.statusText);
            }
        } catch (error) {
            console.error("Erro ao obter as reservas:", error);
        }
    };

    const filteredReservas = reservas.filter(reserva =>
        reserva.nomeSala.toLowerCase().includes(searchTerm.toLowerCase())
    );


    return (

        <>
            <TopBar/>
            <div className="text-black flex flex-col mt-8">
                <h1 className="text-xl font-bold">Salas Reservadas</h1>
                <div className="flex items-center justify-end space-x-4 mt-4">
                    
                    <input
                        type="text"
                        placeholder="Buscar pelo nome da sala"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:border-green-500"
                    />
                    <IoSearch className="text-gray-500" />

                </div>
                <div className="flex flex-wrap justify-start space-x-14 mt-4">
                    {searchTerm === "" ? (
                        reservas.map((reserva, index) => (
                            <div key={index} className="w-1/5 p-4">
                                <CardReserva
                                    id={reserva.id}
                                    nomeSala={reserva.nomeSala}
                                    local={reserva.local}
                                    dataUso={reserva.dataUso}
                                    horaInicio={reserva.horaInicio}
                                    horaFinal={reserva.horaFinal}
                                    responsavel={reserva.responsavel}
                                    url={reserva.url}
                                    motivo={""} convidados={""}
                                />
                            </div>
                        ))
                    ) : (
                        filteredReservas.map((reserva, index) => (
                            <div key={index} className="w-1/5 p-4">
                                <CardReserva
                                    id={reserva.id}
                                    nomeSala={reserva.nomeSala}
                                    local={reserva.local}
                                    dataUso={reserva.dataUso}
                                    horaInicio={reserva.horaInicio}
                                    horaFinal={reserva.horaFinal}
                                    responsavel={reserva.responsavel}
                                    url={reserva.url}
                                    motivo={""} convidados={""}
                                />
                            </div>
                        ))
                    )}
                </div>
            </div>
        </>

    )
}

export default Home;