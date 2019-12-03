import React from 'react';

export default class PostDetail extends React.Component {
  render() {
    return (
      <div>
          <h1>{this.props.match.params.name}</h1>
      </div>
    )
  }
}
