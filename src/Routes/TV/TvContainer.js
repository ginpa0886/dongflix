import React from 'react';
import TvPresenter from './TvPresenter';

export default class extends React.Component{
  state = {
    topRate: null,
    popular: null,
    airingToday: null,
    error: null,
    loading: true
  };

  render(){
    const { topRate, popular, airingToday, error, loading } = this.state;
    return(
    <TvPresenter
      topRate={topRate}
      popular={popular}
      airingToday={airingToday}
      error={error}
      loading={loading}
      />
    )
  }
}