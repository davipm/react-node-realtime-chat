import React from "react";

import { Wrapper, InputWrapper, SendButton } from "./style";

const Input = ({ setMessage, sendMessage, message }) => (
  <Wrapper>
    <InputWrapper
      type="text"
      placeholder="Type a message"
      value={message}
      onChange={({ target: { value } }) => setMessage(value)}
      onKeyPress={(event) =>
        event.key === "Enter" ? sendMessage(event) : null
      }
    />
    <SendButton onClick={(event) => sendMessage(event)}>Send</SendButton>
  </Wrapper>
);

export default Input;
