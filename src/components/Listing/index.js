import React, { Component } from 'react';
import numeral from 'numeral';

import { connect } from 'react-redux';

import {
  Container, Product, Image, Details, Name, Mark, Price, Content,
} from './styles';

class Listing extends Component {
  componentDidMount() {}

  renderList = product => (
    <Product key={product.id}>
      <Image
        source={{
          uri: product.image,
        }}
      />
      <Details>
        <Name>{product.name}</Name>
        <Mark>{product.brand}</Mark>
        <Price>
R$
          {numeral(product.price).format('00,00')}
        </Price>
      </Details>
    </Product>
  );

  render() {
    const { products } = this.props;
    return (
      <Container>
        <Content>{products.data.map(product => this.renderList(product))}</Content>
      </Container>
    );
  }
}
const mapStateToProps = state => ({
  products: state.products,
});

export default connect(mapStateToProps)(Listing);
