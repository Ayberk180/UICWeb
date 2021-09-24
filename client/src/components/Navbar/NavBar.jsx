import React, { useState, useEffect } from 'react';
import { Nav, NavLink, MobileIcon, NavMenu, NavBtn, NavItemBtn, NavBtnLink, NavIcon, NavLogo} from './NavBarElements';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Button } from '../../globalStyles';


const Navbar = () => {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);

    const [button, setButton ] = useState(true);
    const showButton = () => {
        if(window.innerWidth <=960) {
            setButton(false);
        } else {
            setButton(true);
        }
    };

    useEffect(() => {
        showButton()
    }, []);

    window.addEventListener('resize', showButton);

    return (
            <Nav>
                
                    <NavLogo to='/'>
                        <NavIcon />
                        Ulu Cami
                    </NavLogo>

                    <MobileIcon onClick={handleClick}>
                        {click ? <FaTimes /> : <FaBars />}
                    </MobileIcon>
                    <NavMenu onClick={handleClick} click={click}>
                        <NavLink to={'/'} exact={true} className="NavLink" > Home </NavLink>
                        <NavLink to={'/Staff'} className="NavLink"> Staff </NavLink>
                        <NavLink to={'/Services'} className="NavLink"> Services </NavLink>
                        <NavLink to={'/Contact'} className="NavLink"> Contact </NavLink>
                        <NavLink to={'/Donate'} className="NavLink"> Donate </NavLink>
                        <NavBtn>
                            <NavBtnLink to='/signin'>Sign In</NavBtnLink>
                        </NavBtn>
                        <NavItemBtn>
                            {button ? (
                                <NavBtnLink to='/signin'>
                                    <Button primary>Sign In</Button>
                                </NavBtnLink>
                                ) : (
                                    <NavBtnLink to = '/signin'>
                                        <Button fontBig primary>
                                            Sign in
                                        </Button>
                                    </NavBtnLink>
                                )}
                        </NavItemBtn>
                    </NavMenu>
                    
                    
            </Nav>
    )
}

export default Navbar;

/*
<NavItemBtn>
                            {button ? (
                                <NavBtnLink to='/signin'>
                                    <Button primary>Sign In</Button>
                                </NavBtnLink>
                                ) : (
                                    <NavBtnLink to = '/signin'>
                                        <Button fontBig primary>
                                            Sign in
                                        </Button>
                                    </NavBtnLink>
                                )}
                        </NavItemBtn> */