import "./ItemQuadro.css"

const itensQuadro = ["Lavar louça", "Estudar React", "Fazer compras", "Lavar roupa"]

const ItemQuadro = () => {
    return (
        <ul>
            {itensQuadro.map((item, index) => (
                <li key={index}>{item}</li>
            ))}
        </ul>
    )
}

export default ItemQuadro