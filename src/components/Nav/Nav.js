import React from 'react';
import {Navbar, NavItem, Icon} from 'react-materialize';

function Nav(){
return(
<Navbar
  alignLinks="right"
  brand={<a className="brand-logo" href="#">Annalisa Bauer</a>}
  centerChildren
  id="mobile-nav"
  menuIcon={<Icon>menu</Icon>}
  options={{
    draggable: true,
    edge: 'left',
    inDuration: 250,
    onCloseEnd: null,
    onCloseStart: null,
    onOpenEnd: null,
    onOpenStart: null,
    outDuration: 200,
    preventScrolling: true
  }}
>
  <NavItem href="">
    About Me
  </NavItem>
  <NavItem href="">
    Portfolio
  </NavItem>
  <NavItem href="">
   Contact
  </NavItem>
  <NavItem href="">
    Resume
  </NavItem>
</Navbar>
);
}

export default Nav;