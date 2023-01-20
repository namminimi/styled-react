import React from 'react';
import styled from 'styled-components';

const Button = () => {
    const Buttoncom = styled.button`
    background: ${props => props.primary ? `palevioletred`: "white"};
    color: ${props => props.primary ? 'white': "palevioletred"};
    font-size: 1em;
    margin: 1em;
    padding: 0.25em 1em;
    border: 2px solid palevioletred;
    border-radius: 3px;
    `;
    const TomatoButton = styled(Buttoncom)`
    color: tomato;
    background: #fff;
    `;
    /* Buttoncom에서 기능 속성 상속받아옴 */ 
    return (
        <div>
            <Buttoncom>Normar</Buttoncom>
            <Buttoncom primary>primary</Buttoncom>
            <TomatoButton>TomatoButton</TomatoButton>
        </div>
    );
};

export default Button;