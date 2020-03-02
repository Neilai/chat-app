import styled from "styled-components";

export const Bottom = styled.div`
  width: 100%;
  position: fixed;
  height: 45px;
  bottom: 0;
`;
export const Content = styled.div`
    margin: 45px 0;
    height:calc(100vh - 90px);
    overflow:hidden;
    padding:5px 0;
    /* border:1px solid red; */
`;

export const Header = styled.div`
  z-index:100;
  position:fixed;
  width:100%;
  top:0;
  height: 45px;
`;
