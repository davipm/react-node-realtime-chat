import styled from "styled-components/macro";

export const MessageBox = styled.div`
  display: inline-flex;
  justify-content: flex-end;
  align-items: center;
  padding: 10px;
  background-color: #ccc;
  border-radius: 1rem;

  p {
    margin-bottom: 0;
  }
`;

export const MessageText = styled.p`
  width: 100%;
  letter-spacing: 0;
  float: left;
  font-size: 1.1rem;
  word-wrap: break-word;

  img {
    vertical-align: middle;
  }
`;

export const MessageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: ${({ isSend }) => (isSend ? "flex-end" : "flex-start")};
  padding: 0 5%;
  margin-top: 3px;

  p {
    margin-bottom: 0;
  }
`;

export const SendText = styled.p`
  display: flex;
  align-items: center;
  margin-top: 10px;
  font-family: Helvetica, sans-serif;
  color: #828282;
  letter-spacing: 0.3px;
`;
