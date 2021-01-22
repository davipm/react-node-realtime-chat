import React, { useState, useEffect, useCallback } from "react";
import queryString from "query-string";
import io from "socket.io-client";

import InfoBar from "../InfoBar";
import Input from "../Input";
import Messages from "../Messages";
import TextContainer from "../TextContainer";

import { OuterContainer, Container } from "./style";

const ENDPOINT = "localhost:5000";
let socket;

export default function Chat({ location }) {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");
  const [users, setUsers] = useState([]);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const { name, room } = queryString.parse(location.search);

    socket = io(ENDPOINT);

    setName(name);
    setRoom(room);

    socket.emit("join", { name, room }, (error) => {
      if (error) {
        alert(error);
      }
    });
  }, [ENDPOINT, location.search]);

  useEffect(() => {
    socket.on("message", (message) => {
      setMessages((prevState) => [...prevState, message]);
    });

    socket.on("roomData", ({ users }) => {
      setUsers(users);
    });

    return () => {
      socket.emit("disconnect");
      socket.off();
    };
  }, []);

  const sendMessage = useCallback(
    (event) => {
      event.preventDefault();
      if (message) {
        socket.emit("sendMessage", message, () => setMessage(""));
      }
    },
    [message]
  );

  return (
    <OuterContainer>
      <Container>
        <InfoBar room={room} />
        <Messages name={name} messages={messages} />
        <Input
          message={message}
          setMessage={setMessage}
          sendMessage={sendMessage}
        />
      </Container>
      <TextContainer users={users} />
    </OuterContainer>
  );
}
