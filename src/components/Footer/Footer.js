import React from 'react';
import {Footer, Icon} from 'react-materialize'

function Foot(){
return(
<Footer
  className="example"
  
  links={<ul><li><a className="grey-text text-lighten-3" href="#!">Link 1</a></li><li><a className="grey-text text-lighten-3" href="#!">Link 2</a></li><li><a className="grey-text text-lighten-3" href="#!">Link 3</a></li><li><a className="grey-text text-lighten-3" href="#!">Link 4</a></li></ul>}
>
  <h5 className="white-text">
 </h5>
   image={ <img alt='' src=''/>}
  <p className="grey-text text-lighten-4">
    You can use rows and columns here to organize your footer content.
  </p>
</Footer>
);
}

export default Foot;