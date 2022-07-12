type Props = {
    item: any
}

function Card({ item } : Props) {
    return (
        <tr>
          <td>{item.id}</td>
          <td>{item.nome}</td>
          <td>{item.telefone}</td>
          <td>{item.cep}</td>
          <td>{item.rua}</td>
          <td>{item.bairro}</td>
          <td>{item.cidade}</td>
          <td>{item.uf}</td>
        </tr>
    );
}

export default Card;