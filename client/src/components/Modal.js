import React, { useEffect, useRef } from 'react'
import ReactDom from 'react-dom'
import styled, {createGlobalStyle} from 'styled-components';
import  {ModalOverlay}  from './ModalElements.js'
import closeIcon from '../Images/close.png'


const portal = document.getElementById("portal");

const Background = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.85);
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Content = styled.div`
  background-color: #fff;
  padding: 50px;
  border-radius: 20px;
  max-width: 50%;
  max-height: 90%;
  box-shadow: 0 2px 15px 5px rgba(255,255,255,0.2);
  position: relative;
`;

const HeaderRow = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
`;

const ScrollDisabler = createGlobalStyle`
  body {
    overflow-y: hidden;
  }
`;

const Modal  = ({ isOpen, close, children}) => {
    const contentRef = useRef();

    useEffect(() => {
      if(!isOpen) return;

      function listener(evt){
        if (contentRef.current?.contains(evt.target)) return;
        close();
      }

      window.addEventListener("click", listener);

      return () => window.removeEventListener("click", listener);
    }, [isOpen]);


    if (!isOpen) return null;
    return ReactDom.createPortal(
      <>
        <Background>
          <Content ref={contentRef}>
            <HeaderRow>
              <img 
                src={closeIcon} 
                alt="" 
                width="30px" 
                style={{ cursor: "pointer"}}
                onClick= {close} />
            </HeaderRow>
            {children}
          </Content>
        </Background>
        <ScrollDisabler />
      </>, 
      portal
    );
};

export default Modal;