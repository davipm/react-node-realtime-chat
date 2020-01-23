import React, { useState, useEffect } from 'react';
import queryString from 'query-string';
import io from 'socket.io-client';

import InfoBar from "../InfoBar";
import Input from "../Input";
import Messages from "../Messages";
import TextContainer from "../TextContainer";

import { OuterContainer, Container } from "./style";

let socket;

function Chat({ location }) {
  const [name, setName] = useState('');
  const [room, setRoom] = useState('');
  const [users, setUsers] = useState('');
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const ENDPOINT = 'localhost:5000';

  useEffect(() => {
    const { name, room } = queryString.parse(location.search);

    socket = io(ENDPOINT);

    setName(name);
    setRoom(room);

    socket.emit('join', { name, room }, (error) => {
      if (error) {
        alert(error);
      }
    });
  }, [ENDPOINT, location.search]);

  useEffect(() => {
    socket.on('message', (message) => {
      setMessages([...messages, message])
    });

    socket.on('roomData', ({ users }) => {
      setUsers(users)
    });

    return () => {
      socket.emit('disconnect');
      socket.off()
    }
  }, [messages]);

  // function for send message
  function sendMessage(event) {
    event.preventDefault();

    if (message) {
      socket.emit('sendMessage', message, () => setMessage(''));
    }
  }

  return (
    <OuterContainer>
      <Container>
        <InfoBar room={room} />
        <Messages name={name} messages={messages} />
        <Input message={message} setMessage={setMessage} sendMessage={sendMessage} />
      </Container>
      <TextContainer users={users} />
    </OuterContainer>
  );
}

export default Chat;
