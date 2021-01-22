import React, { useState, useMemo, useEffect } from "react";
import ReactEmoji from "react-emoji";

import { MessageBox, MessageContainer, MessageText, SendText } from "./style";

export default function Message({ message: { text, user }, name }) {
  const [isSentByCurrentUser, setIsSentByCurrentUser] = useState(false);
  const trimmedName = useMemo(() => name.trim().toLowerCase(), []);

  useEffect(() => {
    if (user === trimmedName) setIsSentByCurrentUser(true);
  }, [user]);

  return (
    <MessageContainer isSend={isSentByCurrentUser}>
      <SendText>{isSentByCurrentUser ? trimmedName : name}</SendText>
      <MessageBox>
        <MessageText>{ReactEmoji.emojify(text)}</MessageText>
      </MessageBox>
    </MessageContainer>
  );
}
