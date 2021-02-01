import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const SearchPresenter = ({ movieResults,
  tvResults,
  searchTerm,
  error,
  loading,
  handleSumitg }) => null;

  SearchPresenter.prototype = {
    movieResults:PropTypes.array,
    tvResults:PropTypes.array,
    searchTerm:PropTypes.string,
    error:PropTypes.string,
    loading:PropTypes.bool.isRequired,
    handleSumit:PropTypes.func.isRequired
}

export default SearchPresenter;