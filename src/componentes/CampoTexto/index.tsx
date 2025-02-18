import "./CampoTexto.css"

interface CampoTextoProps{
    aoAlterado: (valor: string) => void
    placehoader: string
    label: string
    valor: string 
    obrigatorio?: boolean
    tipo?: 'text' | 'password' | 'email' | 'date'
}

const CampoTexto =({aoAlterado, label, placehoader, valor, obrigatorio = false, tipo = 'text'}: CampoTextoProps)=>{

    const placeholderModificada = `${placehoader}`
    
    const aoDigitado = (evento: React.ChangeEvent<HTMLInputElement>) =>{
        aoAlterado(evento.target.value)
     }
     
    return (
        <div className="campo-texto">
            <label>{label}</label>
            <input value={valor}
             onChange={aoDigitado}
             required={obrigatorio}
             placeholder={placeholderModificada}
             type={tipo}
             />
        </div>
    )
}

export default CampoTexto