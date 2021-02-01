import { tvApi } from 'api';
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

  async componentDidMount(){
    try{
      const { data:{ results: topRate }} = await tvApi.topRate();
      const { data:{ results: popular }} = await tvApi.popular();
      const { data:{ results: airingToday }} = await tvApi.airingToday();

      this.setState({
        topRate,
        popular,
        airingToday
      })
    } catch{
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
    const { topRate, popular, airingToday, error, loading } = this.state;
    // console.log(this.state);
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