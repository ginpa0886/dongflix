import { moviesApi, tvApi } from 'api';
import React from 'react';
import DetailPresenter from './DetailPresenter';

export default class extends React.Component{
  constructor(props){
    super(props);
    const { location: { pathname }} = props;
    this.state = {
      result: null,
      error: null,
      loading: true,
      isMovie: pathname.includes("/movie/")
    };
  }

  

  async componentDidMount(){
    const { match: { params: { id }}, history: { push }} = this.props;
    const { isMovie }= this.state;
    const parseId = parseInt(id);
    if(isNaN(parseId)){
      return push("/")
    }
    let result = null;
    try{
      if(isMovie){
        const request = await moviesApi.movieDetial(parseId);
        result = request.data;
      } else{
        const request = await tvApi.showDetail(parseId);
        result = request.data;
      }
      console.log(result);
    } catch{
      this.setState({
        error: "Can't find anything."
      })
    } finally{
      this.setState({
        loading: false, result
      })
    }
  }
  

  render(){
    // console.log(this.props);
    const { result, error, loading } = this.state;
    return (
      <DetailPresenter 
        result={result}
        error={error}
        loading={loading}
      />
    )
  }
}