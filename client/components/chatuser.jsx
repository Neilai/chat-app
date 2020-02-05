import React, {
  forwardRef,
  useState,
  useEffect,
  useRef,
  useImperativeHandle,
  useMemo
} from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import image from "../assets/test.jpg";

const Avatar = styled.div`
  img {
    width: 40px;
    height: 40px;
  }
  margin: 0 5px;
`;
const Message = styled.div`
  margin-top: 10px;
  display: flex;
  &.right {
    justify-content:flex-end;
    .avatar {
      order: 1;
    }
    .triangle {
      right: -16px;
      border-left-color: white;
    }
    p{
      float:right;
    }
  }
  &.left {
    justify-content:flex-start;
    .avatar {
      order: 0;
    }
    .triangle {
      border-right-color: white;
      left: -16px;
    }
  }
`;
const Triangle = styled.div`
  content: "";
  display: block;
  border: 8px solid transparent;
  width: 0;
  height: 0;
  position: absolute;
  top: 10px;
`;

const Content = styled.div`
  p {
    word-break: break-word;
  }
  position: relative;
  background-color: white;
  padding: 10px;
  margin: 0 8px;
  /* width: calc(100% - 50px); */
  border-radius: 5%;
`;

function Chatuser(props) {
  const { direction, message } = props;
  return (
    <Message className={direction}>
      <Avatar className={"avatar"}>
        <img src={image} alt="" />
      </Avatar>
      <Content>
        <Triangle className={"triangle"}></Triangle>
        <p>{message}</p>
      </Content>
    </Message>
  );
}
export default React.memo(Chatuser);
