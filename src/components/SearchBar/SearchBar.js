import React, { Component } from 'react';
import styled from "styled-components";

const SearchContain = styled.div
` display: flex;
  flex-flow: row nowrap;
  width: 90%;
  margin: 0 auto;
  margin-bottom: 1rem;
  padding-top: 0.7rem;
  border-bottom: 1px solid lightgrey;  
  justify-content: space-evenly;
  `
const HeaderLogos = styled.div
` display: flex;
  flex-flow: row nowrap;

    span{
      margin-left: 0.4rem;
      margin-right: 0.4rem;
      font-size: 1.5rem;
      align-items: center;
    }

    .logo-icon{
      font-size: 1.8rem;
    }

    .logo-header{
      font-size: 1.3rem;
    }`;

const SearchInput = styled.input
` text-align: center;
  background-color: #fff7fd;`

const SocialLogos = styled.div
` display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;

    span{
      margin-right: 0.6rem;
      margin-left: 0.6rem;
      font-size: 1.3rem;
    }`;

const SearchBar = props => {
  return(
    <SearchContain>
      <HeaderLogos>
        <span className='logo-icon'><i class="fab fa-instagram"></i></span>
        <span>{` | `}</span>
        <span className='logo-header'>Instagram</span>
      </HeaderLogos>
      <div>
        <SearchInput
          className='searchBar'
          type='text'
          placeholder={'\uf002 Search'}
          onKeyDown={props.search}
        />
      </div>
      <SocialLogos>
        <span className='icon'>
          <i className="fas fa-compass" />
        </span>
        <span className='icon'>
          <i className="fas fa-heart" />
        </span>
        <span className='icon'>
          <i className="fas fa-user-circle" />
        </span>
      </SocialLogos>
    </SearchContain>
)};

export default SearchBar;
