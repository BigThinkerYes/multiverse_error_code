import React from 'react';
import styled from 'styled-components';

const FooterDefine = styled.div`
text-align: center;
`
export const Footer = () =>(
    <FooterDefine>
        Today is {new Date().getFullYear()}
    </FooterDefine>
);