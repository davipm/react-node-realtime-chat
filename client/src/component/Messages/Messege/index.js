import React from 'react';
import ReactEmoji from "react-emoji";

import { MessageBox, MessageContainer, MessageText, SendText } from "./style";

function Message({ message: { text, user }, name }) {
  let isSentByCurrentUser = false;

  const trimmedName = name.trim().toLowerCase();
  
  if (user === trimmedName) {
    isSentByCurrentUser = true;
  }

  return (
    isSentByCurrentUser ? (
      <MessageContainer>
        <SendText>{trimmedName}</SendText>
        <MessageBox>
          <MessageText>{ReactEmoji.emojify(text)}</MessageText>
        </MessageBox>
      </MessageContainer>
    ) : (
      <MessageContainer>
        <MessageBox>
          <MessageText>{ReactEmoji.emojify(text)}</MessageText>
        </MessageBox>
        <SendText>{user}</SendText>
      </MessageContainer>
    )
  );
}

export default Message;
