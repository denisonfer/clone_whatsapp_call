import React from 'react';
import CallActions from '../../components/CallActions';

import {Container, CallingName, CallingPhone} from './styles';

const CallingScreen = () => {
  return (
    <Container>
      <CallingName>Denison Dev RN</CallingName>
      <CallingPhone>Chamando +55 (85)12344-5858</CallingPhone>

      <CallActions />
    </Container>
  );
};

export default CallingScreen;
