import React from 'react';
import {Navbar, NavItem, Icon} from 'react-materialize';

function Nav(){
return(
<Navbar
  alignLinks="right"
  brand={<a className="brand-logo" href="#">Logo</a>}
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
    Getting started
  </NavItem>
  <NavItem href="components.html">
    Components
  </NavItem>
</Navbar>
);
}

export default Nav;