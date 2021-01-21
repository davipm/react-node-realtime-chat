import React from "react";

import { Wrapper } from "./style";

import Message from "./Messege";

const Messages = ({ messages, name }) => (
  <Wrapper>
    {messages.map((message, i) => (
      <div key={i}>
        <Message message={message} name={name} />
      </div>
    ))}
  </Wrapper>
);

export default Messages;
