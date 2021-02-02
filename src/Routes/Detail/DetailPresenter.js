import React from 'react';
import PropTypes, { string } from 'prop-types';
import styled from 'styled-components';
import Loader from 'Components/Loader';

const Container = styled.div`
  height:calc(100vh - 50px);
  width:100%;
  position:relative;
  padding: 50px;
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


const DetailPresenter = ({ result,
  error,
  loading }) => loading ? <Loader /> :
  <Container>
    <Backdrop bgImg={`https://image.tmdb.org/t/p/original${result.backdrop_path}`} />
    <Content>
      <Cover bgUrl={result.poster_path ? `https://image.tmdb.org/t/p/w300${result.poster_path}` : require("../../Assets/univ.png")} />
    </Content>
  </Container>;

DetailPresenter.prototype = {
  result:PropTypes.object,
  error:PropTypes.string,
  loading:PropTypes.bool.isRequired
}

export default DetailPresenter;