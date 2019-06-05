import React, { Component } from 'react';
import {
  Container, Product, Image, Details, Name, Mark, Price, Content,
} from './styles';

export default class Listing extends Component {
  componentDidMount() {}

  render() {
    return (
      <Container>
        <Content>
          <Product>
            <Image
              source={{
                uri:
                  'https://t-static.dafiti.com.br/EpEXepU-tSbgo6ZMl4Y5BOdjelw=/fit-in/427x620/dafitistatic-a.akamaihd.net%2fp%2fquiksilver-camiseta-quiksilver-double-tap-preta-7115-8165043-1-product.jpg',
              }}
            />
            <Details>
              <Name>Camiseta Trok</Name>
              <Mark>Adidas</Mark>
              <Price>R$ 50,00</Price>
            </Details>
          </Product>
          <Product>
            <Image
              source={{
                uri:
                  'https://t-static.dafiti.com.br/EpEXepU-tSbgo6ZMl4Y5BOdjelw=/fit-in/427x620/dafitistatic-a.akamaihd.net%2fp%2fquiksilver-camiseta-quiksilver-double-tap-preta-7115-8165043-1-product.jpg',
              }}
            />
            <Details>
              <Name>Camiseta Trok</Name>
              <Mark>Adidas</Mark>
              <Price>R$ 50,00</Price>
            </Details>
          </Product>
          <Product>
            <Image
              source={{
                uri:
                  'https://t-static.dafiti.com.br/EpEXepU-tSbgo6ZMl4Y5BOdjelw=/fit-in/427x620/dafitistatic-a.akamaihd.net%2fp%2fquiksilver-camiseta-quiksilver-double-tap-preta-7115-8165043-1-product.jpg',
              }}
            />
            <Details>
              <Name>Camiseta Trok</Name>
              <Mark>Adidas</Mark>
              <Price>R$ 50,00</Price>
            </Details>
          </Product>
          <Product>
            <Image
              source={{
                uri:
                  'https://t-static.dafiti.com.br/EpEXepU-tSbgo6ZMl4Y5BOdjelw=/fit-in/427x620/dafitistatic-a.akamaihd.net%2fp%2fquiksilver-camiseta-quiksilver-double-tap-preta-7115-8165043-1-product.jpg',
              }}
            />
            <Details>
              <Name>Camiseta Trok</Name>
              <Mark>Adidas</Mark>
              <Price>R$ 50,00</Price>
            </Details>
          </Product>
        </Content>
      </Container>
    );
  }
}
