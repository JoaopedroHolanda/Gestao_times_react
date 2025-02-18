import "./Formulario.css"
import CampoTexto from "../CampoTexto"
import ListaSuspensa from "../ListaSuspensa"
import Botao from "../Botao"
import { useState } from "react"
import { IColaborador } from "../../shared/interfaces/IColaborador"

interface FormularioProps{
    aoColaboradorCadastrado: (colaborador: IColaborador) => void
    times: string[]
}

const Formulario = (props: FormularioProps) =>{
    
    const [nome,setNome] = useState("")
    const [cargo,setCargo]= useState("")
    const [imagem, setImagem] = useState("")
    const [time, setTime] = useState("")
    const [data, setData] = useState("")

    const aoSalvar = (evento: React.FormEvent<HTMLFormElement>)=>{
        evento.preventDefault()
       props.aoColaboradorCadastrado({
         nome,
         cargo, 
         imagem, 
         time,
         data
       })
       setNome("")
       setCargo("")
       setImagem("")
       setTime("")
       setData("")
    }
    return(
        <section className="formulario">
            <form onSubmit={evento => aoSalvar(evento)}>
            <h2>Preencha os dados para criar o card do colaborador</h2>
            <CampoTexto obrigatorio = {true} label="Nome" placehoader = "Digite seu nome" valor={nome} aoAlterado={valor=>setNome(valor)}/>
            <CampoTexto  obrigatorio = {true}label="Cargo" placehoader = "Digite seu cargo" valor={cargo} aoAlterado={valor=>setCargo(valor)}/>
            <CampoTexto label="Imagem" placehoader = "Digite o endereço da imagem" valor={imagem} aoAlterado={valor=>setImagem(valor)}/>
            <CampoTexto label="data de entrada no time" placehoader="" tipo="date" valor={data} aoAlterado={valor=>setData(valor)}/>
            <ListaSuspensa obrigatorio = {true}label="Time" itens = {props.times} valor={time} aoAlterado={valor=> setTime(valor)}/>
            <Botao>
                Criar card
            </Botao>
            </form>
        </section>
    )

}

export default Formulario