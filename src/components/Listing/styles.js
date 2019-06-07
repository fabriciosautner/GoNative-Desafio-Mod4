import styled from 'styled-components/native';

export const Container = styled.ScrollView`
  background: #dddddd;
`;

export const Content = styled.View`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: ${({ loading }) => (loading ? 'center' : 'space-between')};
  margin: 20px;
`;

export const Product = styled.TouchableOpacity.attrs({
  activeOpacity: 0.6,
})`
  background: #fff;
  width: 49%;
  display: flex;
  align-items: center;
  padding-top: 5px;
  margin-bottom: 10px;
`;

export const Image = styled.Image.attrs({
  resizeMode: 'contain',
})`
  height: 200;
  width: 100%;
`;

export const Details = styled.View`
  flex: 1;
  width: 100%;
  padding: 5px 5px 5px 10px;
`;

export const Name = styled.Text`
  color: #333333;
  font-weight: bold;
`;

export const Mark = styled.Text`
  color: #999999;
  font-size: 10px;
`;

export const Price = styled.Text`
  color: #5bc9b5;
  font-weight: bold;
  margin-top: 5px;
`;
