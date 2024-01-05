import { Container } from "./styles";

export function ButtonText({ title }) {
    return(
        <Container 
        type="button"
        {...rest}>
            {title}
        </Container>
    )
}