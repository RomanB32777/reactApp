import React from 'react';


const TextItem = props => {
  // console.log(props.text);
 const cls = [];

  if (props.state){
    //console.log(props.state);
    cls.push(props.state)
  }
//  console.log(cls);
 return(
   <p className={cls.join(' ') /* */}
    onClick={() => props.onTextClick(props.text.id)} >
     { props.text.p }
  </p>
)
}
export default TextItem;
