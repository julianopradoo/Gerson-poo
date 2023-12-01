export default function ListaClientes () {
    return (
        <div className="container">
            <h1 className="pb-4">Listagem de Clientes</h1>
            <table className="table table-hover">
                <thead>
                    <tr className="table-dark">
                        <th scope="col">#</th>
                        <th scope="col">Nome</th>
                        <th scope="col">Nome Social</th>
                        <th scope="col">E-mail</th>
                        <th scope="col">CPF</th>
                        <th scope="col">RG</th>
                        <th scope="col">Telefone</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Lucas Gonsalves</td>
                        <td>Luquinha</td>
                        <td>Lucas123@gmail.com</td>
                        <td>111.111.111-11</td>
                        <td>22.222.222-1</td>
                        <td>12 91234-5671</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Eduardo Chaves</td>
                        <td>Chavinho</td>
                        <td>Educhave@gmail.com</td>
                        <td>111.111.111-12</td>
                        <td>22.222.222-2</td>
                        <td>12 91234-5672</td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>Valentina</td>
                        <td>Vava</td>
                        <td>Valentinavava@gmail.com</td>
                        <td>111.111.111-13</td>
                        <td>22.222.222-3</td>
                        <td>12 91234-5673</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}