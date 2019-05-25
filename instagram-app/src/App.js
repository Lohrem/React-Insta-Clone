import React, { Component } from 'react';
import dummyData from './dummy-data'
import './App.css';
// import PropTypes from 'prop-types'
import SearchBar from '../src/components/SearchBar/SearchBar'
import PostContainer from '../src/components/PostContainer/PostContainer'

class App extends Component {
  state = {
    dummies: []
  }
  componentDidMount() {
    this.setState({ dummies: dummyData })
  }
  render() {
    return (
      <div className="App">
          <SearchBar />
          <div className="post-holder">
          {
            this.state.dummies.map(dummies => {
              return (
                <PostContainer dummies={dummies} />
              )
            })
          }
          </div>
      </div>
    )};
}

export default App
