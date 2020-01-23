import styled from "styled-components";

export const Wrapper = styled('form')`
  display: flex;
  border-top: 2px solid #D3D3D3;
`;

export const InputWrapper = styled('input')`
  border: none;
  border-radius: 0;
  padding: 5%;
  width: 80%;
  font-size: 1.2em;
`;

export const SendButton = styled('button')`
  position: relative;
  left: .2px;
  color: #fff;
  text-transform: uppercase;
  text-decoration: none;
  background: #2979FF;
  padding: 20px;
  display: inline-block;
  border: none;
  width: 20%;
  cursor: pointer;
`;
