import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background: white;
`;

export const ButtonToDoCall = styled.TouchableOpacity`
  background: green;
  width: 70px;
  height: 70px;
  border-radius: 100px;
  padding: 5px;
  align-items: center;
  justify-content: center;
`;

export const TextButton = styled.Text`
  font-size: 14px;
  color: white;
  font-weight: 700;
`;

export const ListContacts = styled.FlatList``;

export const ContactView = styled.View`
  padding: 20px;
`;

export const Separator = styled.View`
  width: 100%;
  height: 1px;
  background-color: #f0f0f0;
`;

export const ContactName = styled.Text`
  font-size: 16px;
  color: black;
  font-weight: 700;
`;

export const Search = styled.TextInput`
  background: #f0f0f0;
  padding: 8px 16px;
  width: 90%;
  height: 45px;
  border-radius: 15px;
  align-self: center;
  margin-top: 20px;
`;
