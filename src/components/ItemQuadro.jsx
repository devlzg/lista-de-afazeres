import "./ItemQuadro.css"

const itensQuadro = ["Lavar louça", "Estudar React", "Fazer compras", "Lavar roupa", "Estudar Inglês", "Fazer exercícios", "Limpar a casa", "Estudar Python", "Fazer almoço", "Estudar JavaScript"]

const ItemQuadro = () => {
    return (
        <ul>
            {itensQuadro.map((item, index) => (
                <>
                    <li key={index}>{item}
                        <div className="botoes">
                            <button className="botao-concluir">Concluir</button>
                            <button className="botao-deletar">Deletar</button> 
                        </div>
                    </li>
                    
                </>
            ))}
        </ul>
    )
}

export default ItemQuadro