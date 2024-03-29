import React from "react";
import { css, styled } from "styled-components";

const Container = styled.div`
  display: fle;
`;

const Button = styled.button`
  background: transparent;
  border-radius: 30x;
  border: 2px solid #3c5b69;
  color: #b9eaff;
  maring: 0 1rem;
  padding: 0.25em 1em;
  ${(props) =>
    props.primary &&
    css`
      background: #009cd5;
      color: white;
    `}
`;

export default function StyledComponent() {
  return (
    <Container>
      <Button>Normal Button</Button>
      <Button primary>Primary Button</Button>
    </Container>
  );
}
