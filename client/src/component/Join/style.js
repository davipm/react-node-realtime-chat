import styled from "styled-components";

export const JoinOuterContainer = styled('div')`
  display: flex;
  justify-content: center;
  text-align: center;
  height: 100vh;
  align-items: center;
  background-color: #1a1a1d;
  
  @media (min-width: 320px) and (max-width: 480px) {
    height: 100%;
  }
`;

export const JoinInnerContainer = styled('div')`
  width: 20%;
  
  @media (min-width: 320px) and (max-width: 480px) {
    width: 90%;
  }
`;

export const JoinInput = styled('input')`
  border-radius: 0;
  margin-bottom: 1rem;
  padding: 15px 20px;
  width: 100%;
  height: 45px;
  font-size: 1rem;
  line-height: 1.4;
`;

export const Heading = styled('h1')`
  color: white;
  font-size: 2.5rem;
  padding-bottom: 10px;
  border-bottom: 2px solid white;
`;

export const Button = styled('button')`
  display: inline-block;
  padding: .9rem 1rem;
  text-align: center;
  font-size: 1rem;
  color: white;
  background-color: #2979FF;
  border-radius: 5px;
  border: 0;
  width: 100%;
  cursor: pointer;
  user-select: none;
`;
