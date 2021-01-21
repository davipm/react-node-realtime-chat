import styled from "styled-components/macro";

export const Wrapper = styled("form")`
  display: flex;
  border-top: 2px solid #d3d3d3;
`;

export const InputWrapper = styled("input")`
  border: none;
  border-radius: 0;
  padding: 5%;
  width: 80%;
  font-size: 1.2em;
`;

export const SendButton = styled("button")`
  display: inline-block;
  position: relative;
  left: 0.2px;
  width: 20%;
  padding: 20px;
  font-size: 1rem;
  font-weight: normal;
  font-style: normal;
  text-align: center;
  color: white;
  background-color: #2979ff;
  border: 0;
  border-radius: 0;
  cursor: pointer;
  transition: all 0.15s ease-in-out;
  user-select: none;

  &:hover {
    opacity: 0.8;
  }

  &:focus {
    outline: none;
  }
`;
