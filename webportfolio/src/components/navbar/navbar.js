import React from 'react';
import styled from 'styled-components';
import logo from './images/logo.png'
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <Navbar>
      <LogoContainer>
        <Logo src={logo}/>
      </LogoContainer>
      <LinkContainer>
        <StyledLink to='/'>Home</StyledLink>
        <StyledLink to='/skills'>Tech Skills</StyledLink>
        <StyledLink to='/projects'>Projects</StyledLink>
        <StyledLink to='/about'>About</StyledLink>
        <StyledLink to='/contact'>Contact</StyledLink>
      </LinkContainer>
      <NavSpacer />

          

    </Navbar>
    
  )
}

export default NavBar;

const Navbar = styled.div`
     top: 0;
     position: sticky;
     height: 65px;
     border-bottom: solid 3px white;
     display: flex;
     align-items: center;
`
const LogoContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  flex: .3;
`
const Logo = styled.img`
     height: 62px;
`
const LinkContainer = styled.div`
  display: flex;
  flex: .3;
  justify-content: center;
  align-items: center;
`
const NavSpacer = styled.div`
  display: flex;
  flex: .4;
`

const StyledLink = styled(Link)`
  font-family: 'Anton', sans-serif;
  width: 90px;
  color: white;
  font-size: 21px;
  text-decoration: none;
  margin-left: 10px;
  margin-right: 10px;
  text-align: center;
  :hover{
          transform: scale(1.5);
     }
`