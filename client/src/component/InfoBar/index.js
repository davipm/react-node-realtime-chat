import React from "react";
import { Link } from "react-router-dom";

import onlineIcon from "../../icons/onlineIcon.png";
import closeIcon from "../../icons/closeIcon.png";

import {
  Wrapper,
  LeftInnerContainer,
  OnlineIcon,
  RightInnerContainer,
} from "./style";

export default function InfoBar({ room }) {
  return (
    <Wrapper>
      <LeftInnerContainer>
        <OnlineIcon src={onlineIcon} alt="Online icon" />
        <h3>{room}</h3>
      </LeftInnerContainer>
      <RightInnerContainer>
        <Link to="/">
          <img src={closeIcon} alt="Close icon" />
        </Link>
      </RightInnerContainer>
    </Wrapper>
  );
}
