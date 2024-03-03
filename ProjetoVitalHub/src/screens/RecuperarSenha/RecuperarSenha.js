// Import dos componentes
import { Container, ContainerInputButtom } from "../../components/Container/style"
import { LogoStyle } from "../../components/Logo/style"
import { Subtitle } from "../../components/Text/style"
import { InputStyle } from "../../components/Input/style"
import { ButtonTitle } from "../../components/ButtonTitle/style"
import { Button } from "../../components/Button/style"
import { Title } from "../../components/Title/style"

// Import da Logo
import logo from "../../../assets/logo.png"

export const RecuperarSenha = ({
    navigation
}) => {
    return (
        <Container>
            <LogoStyle source={logo} />

            <Title>Recuperar</Title>

            <Subtitle>Digite abaixo seu email cadastrado que enviaremos um link para recuperação de senha</Subtitle>
            <ContainerInputButtom>
                <InputStyle
                    placeholder="Usuário ou email"
                />

                <Button onPress={() => navigation.navigate("VerificarEmail")}>
                    <ButtonTitle>Continuar</ButtonTitle>
                </Button>
            </ContainerInputButtom>
        </Container>
    )
}