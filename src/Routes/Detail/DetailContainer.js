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
      isMovie: pathname.includes("/movie/"),
      video:`https://www.youtube.com/watch?v=`
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
        ({data: result} = await moviesApi.movieDetial(parseId));
        
      } else{
        ({data: result} = await tvApi.showDetail(parseId));
      }
      
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
    const { result, error, loading, video } = this.state;
    // console.log(result);
    return (
      <DetailPresenter 
        result={result}
        error={error}
        loading={loading}
        video={video}
      />
    )
  }
}