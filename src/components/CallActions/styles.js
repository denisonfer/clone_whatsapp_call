import styled from 'styled-components/native';
import IconVI from 'react-native-vector-icons/Ionicons';
import IconVIMI from 'react-native-vector-icons/MaterialIcons';

export const Container = styled.View`
  background: #222;
  width: 100%;
  border-top-left-radius: 25px;
  border-top-right-radius: 25px;
  margin-top: auto;
  padding: 20px 20px 80px 20px;
`;

export const RowButtons = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
`;

export const Button = styled.TouchableOpacity`
  background: ${({red}) => (red ? 'red' : 'rgba(0, 0, 0, 0.5)')};
  border-radius: 50px;
  align-items: center;
  justify-content: center;
  padding: 15px;
`;

export const Icon = styled(IconVI)`
  color: white;
  font-size: 26px;
`;

export const IconMI = styled(IconVIMI)`
  color: white;
  font-size: 26px;
`;
