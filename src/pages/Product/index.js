import React, { Component } from 'react';

import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';

import { Container, Content } from './styles';

import Header from '~/components/Header';

class Product extends Component {
  componentDidMount() {}

  render() {
    return (
      <Container>
        <Header />
        <Content />
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  products: state.products,
});

// const mapDispatchToProps = dispatch =>
//   bindActionCreators(Actions, dispatch);

export default connect(mapStateToProps)(Product);
