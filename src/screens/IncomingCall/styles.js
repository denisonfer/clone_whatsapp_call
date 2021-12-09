import styled from 'styled-components/native';
import IconVI from 'react-native-vector-icons/Feather';

export const Container = styled.ImageBackground`
  flex: 1;
  align-items: center;
`;

export const CallerName = styled.Text`
  font-size: 24px;
  font-weight: bold;
  color: white;
  margin-top: 150px;
  margin-bottom: 20px;
`;

export const CallerPhone = styled.Text`
  font-size: 14px;
  color: white;
`;

export const RowButtons = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  margin-top: auto;
  margin-bottom: 150px;
`;

export const Button = styled.TouchableOpacity`
  background: ${({red}) => (red ? '#f54242' : '#4248f5')};
  border-radius: 50px;
  align-items: center;
  justify-content: center;
  padding: 25px;
`;

export const Icon = styled(IconVI)`
  color: white;
  font-size: 26px;
`;
