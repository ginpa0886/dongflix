import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const TvPresenter = ({ topRate,
  popular,
  airingToday,
  error,
  loading }) => null;

TvPresenter.prototype = {
  topRate:PropTypes.array,
  popular:PropTypes.array,
  airingToday:PropTypes.array,
  error:PropTypes.string,
  loading:PropTypes.bool.isRequired
}

export default TvPresenter;
