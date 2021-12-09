import React from 'react';
import CallActions from '../../components/CallActions';

import {Container, CallingName, CallerPreview} from './styles';

const InCallScreen = () => {
  return (
    <Container>
      <CallingName>Denison Dev RN</CallingName>

      <CallerPreview />

      <CallActions />
    </Container>
  );
};

export default InCallScreen;
