export default function tabela({produtos}) {
    return (
        <section id="tabela">
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nome</th>
                        <th>Preço</th>
                        <th>Quantidade</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Café X</td>
                        <td>R$10,00</td>
                        <td>5</td>
                    </tr>
                    {produtos.map((produto) => (
                        <tr key={produto.id}>
                            <td>{produto.id}</td>
                            <td>{produto.nome}</td>
                            <td>{produto.preco}</td>
                            <td>{produto.qtde}</td>
                        </tr>
                    ))}
                </tbody>
            </table></section>
    )
}
 