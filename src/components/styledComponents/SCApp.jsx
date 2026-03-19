import styled from "styled-components";

export default function SCApp() {
  const Container = styled.div`
    background-color: red;
  `;

  const Title = styled.h1`
    background-color: orange;
  `;

  const Button = styled.button`
    background-color: green;
    color: white;
  `;

  const SendButton = styled(Button)`
    color: black;
  `;

  const Input = styled.input`
    padding: 1rem;
  `;

  const PasswordInput = styled(Input).attrs({ type: "password" })`
    background-color: gray;
  `;

  return (
    <Container>
      <Title>This is a Styled Component</Title>
      <Button>Click You</Button>
      <Input></Input>
      <PasswordInput></PasswordInput>
      <br />
      <SendButton>Send</SendButton>
      <br />
    </Container>
  );
}
