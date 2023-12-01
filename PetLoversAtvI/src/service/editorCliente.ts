import Entrada from "../io/entrada"
import CPF from "../model/CPF"
import Cliente from "../model/Cliente"

export default class EditorCliente {
    private entrada: Entrada
    constructor() {
        this.entrada = new Entrada()
    }

    public editar(cliente: Cliente): void {
        console.log(`\nEdição de cliente`)

        let editarCliente : string|boolean = true
        while (editarCliente) {
            console.log(`Opções de Edição: `);
            console.log(`1- Editar nome do cliente`);
            console.log(`2- Editar nome social do cliente`);
            console.log(`3- Editar CPF do cliente`);
            console.log(`0- Retornar ao menu principal`);

            let opcao = this.entrada.receberNumero(` Escolha uma opção: `)

            switch (opcao){
                case 1: 
                    let nome = this.entrada.receberTexto(` Informe o nome do Cliente: `)
                    cliente._nome = nome
                    editarCliente = this.entrada.receberTexto(`Deseja alterar mais alguma informação do cliente? (s/n) `)
                    if (editarCliente === "s" || editarCliente === "S"){
                        editarCliente = true
                    } else if (editarCliente === "n" || editarCliente === "N") {
                        editarCliente = false
                    } else {
                        console.log(`Opção inválida! `)
                        editarCliente = this.entrada.receberTexto(`Deseja alterar mais alguma informação do cliente? (s/n)`)
                    }
                    break;
                case 2: 
                    let nomeSocial = this.entrada.receberTexto(` Informe o nome do Cliente: `)
                    cliente._nomeSocial = nomeSocial
                    editarCliente = this.entrada.receberTexto(`Deseja alterar mais alguma informação do cliente? (s/n) `)
                    if (editarCliente === "s" || editarCliente === "S"){
                        editarCliente = true
                    } else if (editarCliente === "n" || editarCliente === "N") {
                        editarCliente = false
                    } else {
                        console.log(`Opção inválida! `)
                        editarCliente = this.entrada.receberTexto(`Deseja alterar mais alguma informação do cliente? (s/n)`)
                    }
                    break;
                case 3:
                    let valorCPF = this.entrada.receberTexto(`Informe o CPF do cliente: `)
                    let dataEmissaoCPF = this.entrada.receberTexto(`Informe a data de emissão do CPF (dd/mm/aaaa): `)
                    let partesDataCPF = dataEmissaoCPF.split(`/`)
                    let anoCPF = new Number(partesDataCPF[2].valueOf()).valueOf()
                    let mesCPF = new Number(partesDataCPF[1].valueOf()).valueOf()
                    let diaCPF = new Number(partesDataCPF[0].valueOf()).valueOf()
                    let dataCPF = new Date (anoCPF, mesCPF, diaCPF)
                    let cpf = new CPF(valorCPF, dataCPF)
                    cliente.setCpf = cpf
                    editarCliente = this.entrada.receberTexto(`Deseja alterar mais alguma informação do cliente? (s/n) `)
                    if (editarCliente === "s" || editarCliente === "S"){
                        editarCliente = true
                    } else if (editarCliente === "n" || editarCliente === "N") {
                        editarCliente = false
                    } else {
                        console.log(`Opção inválida! `)
                        editarCliente = this.entrada.receberTexto(`Deseja alterar mais alguma informação do cliente? (s/n)`)
                    }
                    break;
                case 0:
                    editarCliente = false
                    break
                    
            }

        }

        console.log(`Edição Concluida! `)
    }
}