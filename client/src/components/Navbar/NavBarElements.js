import { FaMosque } from 'react-icons/fa';
import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';



export const Nav = styled.nav`
    background: #378D40;
    height: 85px;
    display: flex;
    justify-content: space-around;
    padding: 0.2rem calc((100vw-1000px)/2);
    z-index: 12;
    
`;

export const NavLink = styled(Link)`
    color: #FFFF;
    font-family: 'Lato', sans-serif;
    font-size: 24px;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    width:50%;
    cursor: pointer;
    &.active{
        color: #71C364;
    }
    &:hover{
        color: #AB9C49;
    }
`;


export const MobileIcon = styled.div`
  display: none;
  color: #ffffff;
  @media screen and (max-width: 960px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;
  
export const NavMenu = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: auto;
  /* Second Nav */
  /* margin-right: 24px; */
  /* Third Nav */
  /* width: 100vw;
  white-space: nowrap; */
  @media screen and (max-width: 960px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    width:100%;
    height: 50%;
    position:absolute;
    top:80px;
    left: ${({click}) => (click ? 0: '-100%')};
    opacity: 1;
    transition: all 0.5s ease;
    background: #101522;
  }
`;
  
export const NavBtn = styled.nav`
  
  align-items: center;
  margin-right: 40px;
  /* Third Nav */
  /*justify-content: flex-end;
  width: 100vw; */
  @media screen and (max-width: 960px) {
    display: none;
  }
`;
  
export const NavBtnLink = styled(Link)`
  border-radius: 4px;
  font-family: 'Lato', sans-serif;
  background: #ffffff;
  white-space: nowrap;
  text-align: center;
  padding: 10px 40px;
  color: #AB9C49;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  /* Second Nav */
  margin-left: 40px;
  &:hover {
    transition: all 0.2s ease-in-out;
    background: #AB9C49;
    color: #fff;
  }
`;

export const NavItemBtn = styled.li`
  display: none;
@media screen and (max-width: 960px) {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 120px;
}`

export const NavLogo = styled(Link)`
color: #FFF;
justify-self: flex-start;
padding-left: 40px;
cursor: pointer;
text-decoration: none;
font-size: 2rem;
display: flex;
align-items: center;
`;

export const NavIcon = styled(FaMosque)`
margin-right: 0.5rem;
`;