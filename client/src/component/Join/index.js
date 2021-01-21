import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import {
  JoinOuterContainer,
  JoinInnerContainer,
  JoinInput,
  Heading,
  Button,
} from "./style";

export default function Join() {
  const history = useHistory();
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");

  const onLogin = (event) => {
    event.preventDefault();
    history.push(`/chat?name=${name}&room=${room}`);
  };

  return (
    <JoinOuterContainer>
      <JoinInnerContainer onSubmit={onLogin}>
        <Heading>Join</Heading>
        <div>
          <JoinInput
            type="text"
            placeholder="Name"
            onChange={(event) => setName(event.target.value)}
          />
        </div>
        <div>
          <JoinInput
            type="text"
            placeholder="Room"
            onChange={(event) => setRoom(event.target.value)}
          />
        </div>

        <Button type="submit">Sing in</Button>
      </JoinInnerContainer>
    </JoinOuterContainer>
  );
}
