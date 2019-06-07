import React, { Component } from 'react';
import { withNavigation } from 'react-navigation';
import numeral from 'numeral';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ProductsActions from '~/store/ducks/products';

import { ActivityIndicator } from 'react-native';
import {
  Container, Product, Image, Details, Name, Mark, Price, Content,
} from './styles';

class Listing extends Component {
  componentDidMount() {
    const { loadProductsRequest, products } = this.props;
    loadProductsRequest(products.currentCategory);
  }

  renderList = (product) => {
    const { navigation } = this.props;
    console.tron.log(this.props);
    return (
      <Product key={product.id} onPress={() => navigation.navigate('Product')}>
        <Image
          source={{
            uri: product.image,
          }}
        />
        <Details>
          <Name>{product.name}</Name>
          <Mark>{product.brand}</Mark>
          <Price>{`R$ ${numeral(product.price).format('00,00')}`}</Price>
        </Details>
      </Product>
    );
  };

  render() {
    const { products, navigation } = this.props;
    return (
      <Container>
        <Content loading={products.loading}>
          {products.loading ? (
            <ActivityIndicator color="#FFF" size="large" />
          ) : (
            products.data.map(product => this.renderList(product))
          )}
        </Content>
      </Container>
    );
  }
}
const mapStateToProps = state => ({
  products: state.products,
});

const mapDispatchToProps = dispatch => bindActionCreators(ProductsActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(withNavigation(Listing));
