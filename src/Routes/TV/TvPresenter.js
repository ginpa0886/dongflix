import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Section from 'Components/Section';
import Loader from 'Components/Loader';

const Container = styled.div`
  padding: 0px 10px;
`;

const TvPresenter = ({ topRate,
  popular,
  airingToday,
  error,
  loading }) => loading ? <Loader /> : 
  <Container>
    {topRate && topRate.length > 0 && <Section title="Toprate Shows">{topRate.map(show => show.name)}</Section>}
    {popular && popular.length > 0 && <Section title="Popular Shows">{popular.map(show => show.name)}</Section>}
    {airingToday && airingToday.length > 0 && <Section title="AiringToday">{airingToday.map(show => show.name)}</Section>}
  </Container>;

TvPresenter.prototype = {
  topRate:PropTypes.array,
  popular:PropTypes.array,
  airingToday:PropTypes.array,
  error:PropTypes.string,
  loading:PropTypes.bool.isRequired
}

export default TvPresenter;
