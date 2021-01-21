import styled from "styled-components/macro";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 100px;
  color: white;
  height: 60%;
  justify-content: space-between;

  h1 {
    margin-bottom: 0;
  }

  @media (min-width: 320px) and (max-width: 1200px) {
    display: none;
  }
`;

export const ActiveContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 50%;

  img {
    padding-left: 10px;
  }
`;

export const ActiveItem = styled.div`
  display: flex;
  align-items: center;
`;
