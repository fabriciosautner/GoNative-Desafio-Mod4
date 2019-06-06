import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import MenuActions from '~/store/ducks/menu';
import ProductsActions from '~/store/ducks/products';

import {
  Container, OptionsMenu, Item, ItemText,
} from './styles';

class Menu extends Component {
  static propTypes = {
    loadMenuRequest: PropTypes.func.isRequired,
    menu: PropTypes.shape().isRequired,
  };

  componentDidMount() {
    const { loadMenuRequest } = this.props;

    loadMenuRequest();
  }

  handleClickMenu = (idCategory) => {
    const { loadProductsRequest } = this.props;
    loadProductsRequest(idCategory);
  };

  render() {
    const { menu, currentCategory } = this.props;

    return (
      <Container>
        <OptionsMenu
          data={menu.categories}
          horizontal
          keyExtractor={option => String(option.id)}
          renderItem={({ item: option }) => (
            <Item
              active={option.id === currentCategory}
              onPress={() => this.handleClickMenu(option.id)}
            >
              <ItemText active={option.id === currentCategory}>{option.title}</ItemText>
            </Item>
          )}
        />
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  menu: state.menu,
  currentCategory: state.products.currentCategory,
});

const mapDispatchToProps = dispatch => bindActionCreators({ ...MenuActions, ...ProductsActions }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Menu);
