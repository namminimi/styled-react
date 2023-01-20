


import React,{useState,useEffect} from 'react';
import styled,{keyframes,css} from 'styled-components';
import ButtonTotal from './ButtonTotal';
//fadeIn - keyframes만들기
const fadeIn = keyframes`
  from {
    opacity: 0
  }
  to {
    opacity: 1
  }
`;
//애니메이션
//fadeOut - keyframes만들기
const fadeOut = keyframes`
  from {
    opacity: 1
  }
  to {
    opacity: 0
  }
`;
//slideup - keyframes만들기
const slideUp = keyframes`
  from {
    transform: translateY(200px);
  }
  to {
    transform: translateY(0px);
  }
`;
//slideDown - keyframes만들기
const slideDown = keyframes`
  from {
    transform: translateY(0px);
  }
  to {
    transform: translateY(200px);
  }
`;
//배경
//바깥 div 생성
const DarkBakcground = styled.div`
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(0,0,0,0.8);
    animation-duration: 0.25s;
    animation-timing-function: ease-out;
    animation-name: ${fadeIn};
    animation-fill-mode: forwards;
    ${props =>
        props.disappear &&
        css`
          animation-name: ${fadeOut};
        `}
`;//컴펌창 블럭
//스타일이 적용된 컴퍼넌트
const DialogBlock = styled.div`
  width: 320px;
  padding: 1.5rem;
  background: white;
  border-radius: 2px;
  h3 {
    margin: 0;
    font-size: 1.5rem;
  }
  p {
    font-size: 1.125rem;
  }
  animation-duration: 0.25s;
  animation-timing-function: ease-out;
  animation-name: ${slideUp};
  animation-fill-mode: forwards;
  ${props =>
    props.disappear &&
    css`
      animation-name: ${slideDown};
    `}
`;//props가 true면 밑에 적용
const ButtonGroup = styled.div`
  margin-top: 3rem;
  display: flex;
  justify-content: flex-end;
`;

const Dialog = ({ title, children, 
confirmText, cancelText, visible,onCancel,onConfirm }) => {
     //현재 트랜지션 효과를 보여주는 중이라는 상태를 의미
    const [animate, setAnimate] = useState(false);
    //실제로 컴포넌트가 사라지는 시점을 지연시키기 위한 상태
    const [localVisible, setLocalVisible] = useState(visible);
  //useEffect 작성
    //visible 값이 true에서 false로 바뀌는 시점을 감지하여 animate값을 true로 변경
    //setTimeout함수를 사용하여 0.5초 이후에 false로 변경
    useEffect(() => {
      // visible 값이 true -> false 가 되는 것을 감지
      if (localVisible && !visible) {
        setAnimate(true);
        setTimeout(() => setAnimate(false), 250);
      }
      setLocalVisible(visible);
    }, [localVisible, visible]);
  
    if (!animate && !localVisible) return null; 
    return(
        <DarkBakcground disappear={!visible}>
           <DialogBlock disappear={!visible}>
                <h3>{title}</h3>
                <p>{children}</p>
                <ButtonGroup>
                <ButtonTotal color="gray" 
onClick = {onCancel}>{cancelText}</ButtonTotal>
                <ButtonTotal color="pink" 
onClick = {onConfirm}>{confirmText}</ButtonTotal>
                </ButtonGroup>
            </DialogBlock>
        </DarkBakcground>
    )
}
Dialog.defaultProps = {
    confirmText: '확인',
    cancelText: '취소'
  };
export default Dialog;


