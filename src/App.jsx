import React, { Component } from 'react';
import shortid from 'shortid';
import CreateArticle from './components/CreateArticle';
import Article from './components/Article';
import Navbar from './components/Navbar';
import Footer from './components/Footer'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: [
        {title: "testing", content: "fake content"},
        {title: "testing", content: "fake content"}
      ]
    }
    this.handleArticleCreate = this.handleArticleCreate.bind(this);
  }

  handleArticleCreate(payload) {
    this.setState({ articles: [...this.state.articles, payload] });
  }

  render() {
    return (
      <React.Fragment>
      <div className="container">
        <div className="row">
          <Navbar/>
          <CreateArticle handleArticleCreate = {this.handleArticleCreate}/>
          <div className="w-100 m-4 border-bottom border-primary"></div>
          <div className="container">{this.state.articles.map(a => <Article key={shortid.generate()} title={a.title} content={a.content} />)}</div>
        </div>
      </div>
      <Footer/>
      </React.Fragment>
    );
  }
}

export default App;
