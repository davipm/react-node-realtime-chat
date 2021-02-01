import React from "react";

import iconOnline from "../../icons/onlineIcon.png";

import { Wrapper, ActiveContainer, ActiveItem } from "./style";

export default function TextContainer({ users }) {
  return (
    <Wrapper>
      <div>
        <h1>
          Realtime Chat Application{" "}
          <span role="img" aria-label="emoji">
            💬
          </span>
        </h1>
        <h2>
          Created with React, Express, Node and Socket.IO{" "}
          <span role="img" aria-label="emoji">
            ❤
          </span>
        </h2>
        <h2>
          Try it out right now!{" "}
          <span role="img" aria-label="emoji">
            ⬅
          </span>
        </h2>
      </div>
      {users && (
        <div>
          <h1>People currently chatting:</h1>
          <ActiveContainer>
            <h2>
              {users.map((item) => (
                <ActiveItem key={item.name}>
                  {item.name}
                  <img src={iconOnline} alt="Online Icon" />
                </ActiveItem>
              ))}
            </h2>
          </ActiveContainer>
        </div>
      )}
    </Wrapper>
  );
}
