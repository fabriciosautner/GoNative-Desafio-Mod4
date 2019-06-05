import styled from 'styled-components/native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

export const Container = styled.View`
  background: #fff;
  justify-content: center;
  align-items: center;
  height: ${60 + getStatusBarHeight()}px;
  padding-top: ${getStatusBarHeight() + 10}px;
`;

export const Title = styled.Text`
  color: #f19d9d;
  font-size: 16px;
  font-weight: bold;
`;
