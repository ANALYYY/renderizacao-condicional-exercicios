import { Button, Divs, Form, Input } from "./styled";

function TelaCadastroEndereco (props) {

    return (
        <Divs>
            <Form onSubmit={() => props.mudarTela(1)}>
                <label htmlFor="complemento">Endereço*</label>
                <Input id="text" type="text" required></Input>
    
                <label htmlFor="complemento">N°*</label>
                <Input id="number" type="number" required></Input>

                <label htmlFor="complemento">Telefone*</label>
                <Input id="number" type="number" required></Input>

                <label htmlFor="complemento">Complemento*</label>
                <Input id="text" type="text" required></Input>

                <Button type="submit">Concluir Cadastro</Button>        
            </Form>
        </Divs>
    )
}

export default TelaCadastroEndereco;