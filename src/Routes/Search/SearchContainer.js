import { moviesApi, tvApi } from 'api';
import React from 'react';
import SearchPresenter from './SearchPresenter';

export default class extends React.Component{
  state = {
    movieResults: null,
    tvResults: null,
    searchTerm: "code",
    error: null,
    loading: false
  };

  handleSumit = () => {
    const { searchTerm } = this.state;
    if(searchTerm !== ""){
      this.searchByTerm();
    }
  }

  searchByTerm = async() => {
    const { searchTerm } = this.state;
    this.setState({
      loading: true
    });

    try{
      const { data: { results: movieResults }}  = await moviesApi.search(searchTerm);
      const { data: { results: tvResults }} = await tvApi.search(searchTerm);
      this.setState({
        movieResults,
        tvResults
      });
      
    } catch {
      this.setState({
        error: "Can't find TV information."
      })
    } finally{
      this.setState({
        loading: false
      })
    }

  }

  render(){
    const { movieResults, tvResults,searchTerm, error, loading} = this.state;
    // console.log(this.state);
    return(
      <SearchPresenter
        movieResults={movieResults}
        tvResults={tvResults}
        searchTerm={searchTerm}
        error={error}
        loading={loading}
        handleSumit={this.handleSumit}
      />
    )
  }
}