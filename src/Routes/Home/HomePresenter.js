import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Section from 'Components/Section';

const Container = styled.div`
  padding: 0px 10px;
`;

const HomePresenter = ({ nowPlaying,
  upComing,
  popular,
  error,
  loading }) => loading ? null : 
    <Container>
      {nowPlaying && nowPlaying.length > 0 && <Section title="Now Playing">{nowPlaying.map(movie => movie.title)}</Section>}
      {upComing && upComing.length > 0 && <Section title="Upcoming Movies">{upComing.map(movie => movie.title)}</Section>}
      {popular && popular.length > 0 && <Section title="Popular Movies">{popular.map(movie => movie.title)}</Section>}
    </Container>
  ;

HomePresenter.prototype = {
  nowPlaying:PropTypes.array,
  upComing:PropTypes.array,
  popular:PropTypes.array,
  error:PropTypes.string,
  loading:PropTypes.bool.isRequired
}

export default HomePresenter;