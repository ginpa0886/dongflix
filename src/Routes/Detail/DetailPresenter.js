import React from 'react';
import PropTypes, { string } from 'prop-types';
import styled from 'styled-components';
import Helmet from 'react-helmet';
import { Link } from 'react-router-dom';
import Loader from 'Components/Loader';
import Message from 'Components/Message';

const Container = styled.div`
  height:calc(100vh - 50px);
  width:100%;
  position:relative;
  padding: 50px;
`;

const TrailerLink = styled.a`
  width: 150px;
  height: 45px;
  border: 1px solid rgb(211,211,211);
  border-radius: 3px;
  position: absolute;
  left: 10px;
  bottom: 10px;
  text-align: center;
  padding-top: 12px;
  font-weight: 700;
  color: rgb(211,211,211);
  transition: color 400ms ease-in-out, border 400ms ease-in-out, box-shadow 400ms ease-in-out;
  &:hover{
    color: white;
    border: 2px solid white;
    box-shadow: 17px 17px 34px #397ca3, 
             -17px -17px 34px #71f6ff;
  }
`;

const Backdrop = styled.div`
  position:absolute;
  top:0;
  left:0;
  width:100%;
  height:100%;
  background-image: url(${props => props.bgImg});
  background-position: center center;
  background-size: cover;
  filter:blur(3px);
  opacity: 0.5;
  z-index: 0;
  
`;

const Content = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  position:relative;
  z-index: 1;
`;

const Cover = styled.div`
  width: 30%;
  height: 100%;
  background-image: url(${props => props.bgUrl});
  background-position: center center;
  background-size: cover;
  border-radius: 5px;
`;

const Data = styled.div`
  width: 70%;
  margin-left: 10px;
  position: relative;
`;

const Title = styled.h3`
  font-size: 32px;
`;

const ItemContainer = styled.div`
  margin:20px 0;
  position: relative;
`;

const Item = styled.span`

`;

const CompanyContainer = styled.div`
  width: 200px;
  height: 40px;
  display:flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  right: 20px;
  bottom: 10px;
`;


const Company = styled.div`
  max-width:100px;
  width: 20px;
  height: 20px;
  background-image: url(${props => props.bgIcon});
  background-position: center center;
  background-size: cover;
  background-color: white;
  margin-right: 5px;
  &:last-child{
    margin-right: 0px;
  }
`;

const Divider = styled.span`
  margin:0 10px;
`;

const Overview = styled.p`
  font-size:12px;
  opacity: 0.7;
  line-height: 1.5;
  width: 50%;
`;

const DetailPresenter = ({ result,
  error,
  loading, video }) => loading ? 
  <>
    <Helmet>
        <title>loading | dongflix</title>
    </Helmet>
    <Loader />
  </> :
    error ? <Message text={error} color="e74c3c"/> : 
    <Container>
        <Helmet>
            <title>{result.original_title ? result.original_title : result.original_name} | dongflix</title>
        </Helmet>
        <Backdrop bgImg={`https://image.tmdb.org/t/p/original${result.backdrop_path}`} />
        <Content>
          <Cover bgUrl={result.poster_path ? `https://image.tmdb.org/t/p/w300${result.poster_path}` : null} />
          <Data>
            <Title>{result.original_title ? result.original_title : result.original_name}</Title>
            <ItemContainer>
              <Item>
                {result.release_date ? result.release_date.substring(0, 4) : result.first_air_date.substring(0, 4)}
              </Item>
              <Divider>•</Divider>
              <Item>
                {result.runtime ? result.runtime : result.episode_run_time}min
              </Item>
              <Divider>•</Divider>
              <Item>
                {result.genres && result.genres.map((genre, index) => index === result.genres.length - 1 ? genre.name : `${genre.name} / `)}
              </Item>
              <Divider>•</Divider>
              <Item>
                {result.production_countries && result.production_countries[0].name}
              </Item>
            </ItemContainer>
            <Overview>{result.overview}</Overview>
            <TrailerLink href={`${video}${result.videos.results[0].key}`}>Watch Trailer</TrailerLink>
            <CompanyContainer>
              {result.production_companies ? result.production_companies.map(logo => 
                (<Company bgIcon={`https://image.tmdb.org/t/p/w300/${logo.logo_path}`}/>)
                ) : null}
            </CompanyContainer>
          </Data>
        </Content>
      </Container>
  ;
  

DetailPresenter.prototype = {
  result:PropTypes.object,
  error:PropTypes.string,
  loading:PropTypes.bool.isRequired
}

export default DetailPresenter;