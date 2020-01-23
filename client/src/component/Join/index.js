import React, { useState } from 'react';
import { Link } from "react-router-dom";

import { JoinOuterContainer, JoinInnerContainer, JoinInput, Heading, Button } from "./style";

function Join() {
  const [name, setName] = useState('');
  const [room, setRoom] = useState('');

  return (
    <JoinOuterContainer>
      <JoinInnerContainer>
        <Heading>Join</Heading>
        <div><JoinInput type="text" placeholder="Name" onChange={event => setName(event.target.value)} /></div>
        <div><JoinInput type="text" placeholder="Room" onChange={event => setRoom(event.target.value)} /></div>

        <Link onClick={event => (!name || !room) ? event.preventDefault() : null} to={`/chat?name=${name}&room=${room}`}>
          <Button type="submit">Sing in</Button>
        </Link>
      </JoinInnerContainer>
    </JoinOuterContainer>
  );
}

export default Join;
