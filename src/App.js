import React, { useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import './App.css';
import ButtonTotal from './component/ButtonTotal';
import Dialog from './component/Dialog';
//import SassComponent from './component/SassComponent'
//import styled, {css} from 'styled-components';
//import Circle from './component/Circle';
//import Button from './component/Button';


/* 함수에 props를 받아서 리턴해줌 컬러가 있으면 true 없으면 false
props에 color값이 있으면 color값 적용 없으면 black */
/* function props(props) {
  return props.color || black
} */

const AppBlock = styled.div`
width: 512px;
margin: 0 auto;
margin-top: 4em;
border: 1px solid black;
padding: 1em;
`;
function App() {
  const [dialog, setDialog] = useState(false);
  const onClick = () => {
    setDialog(true);
  };
  const onConfirm = () => {
    console.log('확인');
    setDialog(false);
  };
  const onCancel = () => {
    console.log('취소');
    setDialog(false);
  };
  return (
    <ThemeProvider theme={{
      palette:{
        blue:'#228be6',
        gray: '#495057',
        pink: '#f06595'
      }
    }}>
      <>
    <AppBlock>
      <div>
        <ButtonTotal size='large'>Button</ButtonTotal>
        <ButtonTotal>Button</ButtonTotal>
        <ButtonTotal size='small'>Button</ButtonTotal>
      </div>
      <div>
        <ButtonTotal size='large' color='pink'>Button</ButtonTotal>
        <ButtonTotal color='pink'>Button</ButtonTotal>
        <ButtonTotal size='small' color='pink'>Button</ButtonTotal>
      </div>
      <div>
        <ButtonTotal size='large' color='gray'>Button</ButtonTotal>
        <ButtonTotal color='gray'>Button</ButtonTotal>
        <ButtonTotal size='small' color='gray'>Button</ButtonTotal>
      </div>
      <div>
        <ButtonTotal size='large' color='gray' fullWidth>Button</ButtonTotal>
      </div>
      <div>
        <ButtonTotal  color='pink' fullWidth>Button</ButtonTotal>
      </div>
      <div>
        <ButtonTotal size='small' fullWidth onClick={onClick}>삭제</ButtonTotal>
      </div>
    </AppBlock>
    <Dialog title="정말로 삭제하시겠습니까?"
        confirmText="삭제"
        cancelText="취소" onConfirm={onConfirm} onCancel={onCancel} visible={dialog}> 
        데이터를 정말로 삭제하시겠습니까?
      </Dialog></>
    </ThemeProvider>
  );
}

export default App;


