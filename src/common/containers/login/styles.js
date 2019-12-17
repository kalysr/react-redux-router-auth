import styled from "styled-components";

export const LoginForm = styled.div`
  display: flex;
  flex-direction: column;
  width: 340px;
  max-width: 100%;
  background-color: rgb(235, 241, 245);
  padding: 20px;
  border-radius: 6px;
  margin-bottom: 15%;
  .bp3-dark & {
    background-color: rgb(57, 75, 89);
  }
`;

export const LoginPageWrap = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
