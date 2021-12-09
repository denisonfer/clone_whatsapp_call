import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  background-color: firebrick;
`;

export const CallingName = styled.Text`
  font-size: 24px;
  font-weight: bold;
  color: white;
  margin-top: 90px;
`;

export const CallerPreview = styled.View`
  background: blue;
  border-radius: 7px;
  height: 150px;
  width: 120px;
  position: absolute;
  right: 20px;
  top: 150px;
`;
