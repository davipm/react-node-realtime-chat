import styled from "styled-components";

export const Wrapper = styled('div')`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #2979FF;
  border-radius: 4px 4px 0 0;
  height: 60px;
  width: 100%;
`;

export const LeftInnerContainer = styled('div')`
  flex: 0.5;
  display: flex;
  align-items: center;
  margin-left: 5%;
  color: white;
  
  h3 {
    margin-left: 10px;
  }
`;

export const RightInnerContainer = styled('div')`
  display: flex;
  flex: .5;
  justify-content: flex-end;
  align-items: center;
  padding-right: 20px;
`;

export const OnlineIcon = styled('img')`
  margin-left: 5%;
`;
