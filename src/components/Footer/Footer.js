import React from 'react';
import {Footer} from 'react-materialize'

function Foot(){
return(
<Footer
  className="example"
  copyrights="Coded by Annalisa Bauer"
  links={<ul id="footer"><li><a className="grey-text text-lighten-3" href="https://github.com/AnnalisaMBauer">GitHub</a></li><li><a className="grey-text text-lighten-3" href="https://www.linkedin.com/in/annalisa-bauer/">LinkedIn</a></li><li><a className="grey-text text-lighten-3" href="mailto:annalisa.bauer1@gmail.com">annalisa.bauer1@gmail.com</a></li></ul>}
  
>
</Footer>
);
}

export default Foot;