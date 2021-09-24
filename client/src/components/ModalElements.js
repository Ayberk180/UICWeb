import styled from 'styled-components';

 export const ModalOverlay = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: #fff;
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center; 
  `;
  
  export const ModalContainer = styled.div`
    width: 500px;
    height: 500px;
    border-radius: 12px;
    background-color: green;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    display: flex;
    flex-direction: column;
    padding: 25px;
  `;
  
  export const ModalTitle = styled.div`
    display: inline-block;
    text-align: center;
    margin-top: 10px;
  `;
  
  export const ModalClose = styled.div`
    display: flex;
    justify-content: flex-end;
    background-color: transparent;
    border: none;
    font-size: 25px;
    cursor: pointer;
  `;
  
  export const ModalBody = styled.div`
     flex: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.7rem;
    text-align: center; 
  `;