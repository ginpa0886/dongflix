import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Section from 'Components/Section';
import Loader from 'Components/Loader';
import Message from 'Components/Message';
import Poster from 'Components/Poster';

const Container = styled.div`
  padding: 0px 20px;
`;

const TvPresenter = ({ topRate,
  popular,
  airingToday,
  error,
  loading }) => loading ? <Loader /> : 
  <Container>
    {topRate && topRate.length > 0 && 
    <Section title="Toprate Shows">{topRate.map(show => 
      <Poster 
        key={show.id} 
        id={show.id} 
        title={show.name} 
        imageUrl={show.poster_path} 
        rating={show.vote_average} 
        year={show.first_air_date && show.first_air_date.substring(0, 4)} 
        isMovie={false}
      />)}
    </Section>}

    {popular && popular.length > 0 && 
    <Section title="Popular Shows">{popular.map(show => 
      <Poster 
        key={show.id} 
        id={show.id} 
        title={show.name} 
        imageUrl={show.poster_path} 
        rating={show.vote_average} 
        year={show.first_air_date && show.first_air_date.substring(0, 4)} 
        isMovie={false}
      />)}
    </Section>}

    {airingToday && airingToday.length > 0 && 
    <Section title="AiringToday">{airingToday.map(show => 
      <Poster 
        key={show.id} 
        id={show.id} 
        title={show.name} 
        imageUrl={show.poster_path} 
        rating={show.vote_average} 
        year={show.first_air_date && show.first_air_date.substring(0, 4)} 
        isMovie={false} 
      />)}
    </Section>}

    {error && <Message color="#e74c3c" text={error} />}
  </Container>;

TvPresenter.prototype = {
  topRate:PropTypes.array,
  popular:PropTypes.array,
  airingToday:PropTypes.array,
  error:PropTypes.string,
  loading:PropTypes.bool.isRequired
}

export default TvPresenter;
