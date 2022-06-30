import React, { Component } from 'react'
import NewsFeed from './components/NewsFeed'

export default class App extends Component {
  render() {
    // let {newsTitle, newsDescription} = this.props;
    return (
      <NewsFeed
      pageSize={12}
      />
    )
  }
}