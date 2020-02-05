import styled from 'styled-components';
export const Bottom=styled.div`
    flex:0;
    height:50px;
`
export const Content=styled.div`
    flex:1;
    height:calc(100vh - 50px)
`
export const Layout=styled.div`
    display:flex;
    height:100%;
    flex-direction:column;
`