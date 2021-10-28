import React from 'react';
import {MediaBox} from 'react-materialize';

function Header(){
return (
<MediaBox
  id="MediaBox_9"
  options={{
    inDuration: 275,
    onCloseEnd: null,
    onCloseStart: null,
    onOpenEnd: null,
    onOpenStart: null,
    outDuration: 200
  }}
>
  <img
    alt=""
    src="https://materializecss.com/images/sample-1.jpg"
    width="650"
  />
</MediaBox>
);
}

export default Header;