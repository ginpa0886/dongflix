import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Helmet from 'react-helmet';
import Loader from 'Components/Loader';
import Section from "Components/Section";
import Message from 'Components/Message';
import Poster from 'Components/Poster';


const Container = styled.div`
  padding: 0px 20px;
`;

const Form =styled.form`
  margin-bottom:50px;
  width:100%;
`;

const Input = styled.input`
  all: unset;
  font-size: 28px;
  width:100%;
`;

const SearchPresenter = ({ movieResults,
  tvResults,
  searchTerm,
  error,
  loading,
  handleSumit,
  updateTerm }) => 
    <Container>
      <Helmet>
        <title>Search | dongflix</title>
      </Helmet>
      <Form onSubmit={handleSumit}>
        <Input placeholder="Search Movies or TV Shows" value={searchTerm} onChange={updateTerm} />
      </Form>
      {loading ? <Loader /> : 
      <>
        {movieResults && movieResults.length > 0 && 
        <Section title="Movie Title">{movieResults.map(movie => 
          <Poster 
            key={movie.id} 
            id={movie.id} 
            title={movie.original_title} 
            imageUrl={movie.poster_path} 
            rating={movie.vote_average} 
            year={movie.release_date && movie.release_date.substring(0, 4)} 
            isMovie={true} />
          )}
        </Section>}

        {tvResults && tvResults.length > 0 && 
        <Section title="Show Title">{tvResults.map(show => 
          <Poster 
            key={show.id} 
            id={show.id} 
            title={show.name} 
            imageUrl={show.poster_path} 
            rating={show.vote_average} 
            year={show.first_air_date && show.first_air_date.substring(0, 4)} 
            isMovie={false} 
            />
          )}
        </Section>}
      </>}
      
      {error && <Message color="#e74c3c" text={error} />}
      {tvResults && movieResults && tvResults.length === 0 && movieResults.length === 0 && <Message text="nothing found" color="#95a5a6" />}
    </Container>
  


  SearchPresenter.prototype = {
    movieResults:PropTypes.array,
    tvResults:PropTypes.array,
    searchTerm:PropTypes.string,
    error:PropTypes.string,
    loading:PropTypes.bool.isRequired,
    handleSumit:PropTypes.func.isRequired,
    updateTerm:PropTypes.func.isRequired
}

export default SearchPresenter;