import React, { Component } from 'react';
import dummyData from '../../dummy-data';
import SearchBar from '../SearchBar/SearchBar';
import PostContainer from './PostContainer';
import Authenticate from '../Authentication/Authenticate';
import styled from 'styled-components';

const Nav = styled.div
` display: flex;
  flex-flow: row;
`

class PostsPage extends Component {
  constructor(){
    super();
    this.state = {
      data: [],
      filteredData: []
    }
  }

  componentDidMount(){
    this.setState({ data: dummyData})
  }

  searchHandler = event => {
    const data = this.state.data.filter(tempArr => {
      if(tempArr.username.includes(event.target.value)) {
        return tempArr;
      }
    });
    this.setState({ filteredData: data });
  };

  render() {
    return (
      <div className="App">
        <Nav>
          <SearchBar
            keyword={this.state.keyword}
            search={this.searchHandler}
          />
        </Nav>
        <PostContainer
          data={
            this.state.filteredData.length > 0
              ? this.state.filteredData
              : this.state.data
          }
          logout={this.props.logout}
        />
      </div>
    );
  }
}

export default PostsPage;
