import styled from 'styled-components/native';

export const Container = styled.View`
  background: #f19d9d;
  height: 40px;
`;

export const OptionsMenu = styled.FlatList``;

export const Item = styled.TouchableOpacity.attrs({
  activeOpacity: 0.6,
})`
  height: 100%;
  margin-left: 20px;
  flex: 1;
  justify-content: center;
  border-bottom-width: ${({ active }) => (active ? 3 : 0)};
  border-bottom-color: ${({ active }) => (active ? '#fff' : 'transparent')};
`;

export const ItemText = styled.Text`
  display: flex;
  text-align: center;
  color: #fff;
  text-transform: uppercase;
  font-size: 16px;
  width: 100px;
  font-weight: ${({ active }) => (active ? 'bold' : 'normal')};
`;
