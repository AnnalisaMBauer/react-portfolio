import React from 'react';
import {Navbar, NavItem, Icon} from 'react-materialize'

function Foot(){
return(
<Navbar className="avatar"
  alignLinks="left"
  brand={<a className="brand-logo" href="https://github.com/AnnalisaMBauer">GitHub</a>}
  centerLogo
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
<NavItem className="avatar">
        <img
          alt="github cat"
          className="circle"
          src="https://github.com/AnnalisaMBauer/react-portfolio/blob/main/src/img/GitHub-Mark-Light-120px-plus.png?raw=true"
        />
 </NavItem>
</Navbar>
);
}

export default Foot;