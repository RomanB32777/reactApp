import React from 'react';
import TextItem from "./TextItem/TextItem"

const BodyActivePost = props => (
  <div className="BodyActivePost">
    { props.texts.map((text, index) => {
      //console.log(text);
      return(
        <TextItem
        key={index}
        text={text}
        onTextClick={props.onTextClick}
        state={props.state ? props.state[text.id] : null}
        />
      )
    })
  }
  </div>
);

export default BodyActivePost;
