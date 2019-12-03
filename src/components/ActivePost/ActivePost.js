import React from 'react';
import BodyActivePost from "./BodyActivePost/BodyActivePost"

const ActivePost = props => (
  <div className="ActivePost">
  <h1>{props.title}</h1>
  <small> {props.postNumber} пост из {props.postsLength}</small>
    <BodyActivePost
       texts={props.texts}
       onTextClick={props.onTextClick}
       state={props.state}
    />
  </div>
)

export default ActivePost;
