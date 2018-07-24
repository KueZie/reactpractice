import React, { Component } from 'react'

class Article extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="row justify-content-center text-center my-3 shadow p-3 bg-light">
        <h2 className="row">{ this.props.title }</h2>
        <div className="w-100"></div>
        <p className="row lead">{ this.props.content }</p>
      </div>
    )
  }
}

export default Article;
