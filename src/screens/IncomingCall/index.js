import React, {useCallback} from 'react';

import imageBG from '../../assets/images/ios_bg.png';
import {
  Button,
  CallerName,
  CallerPhone,
  Container,
  Icon,
  RowButtons,
} from './styles';

const IncomingCallScreen = () => {
  const handleDeclineCaller = useCallback(() => {
    alert('Rejeitar chamada');
  }, []);

  const handleAcceptCaller = useCallback(() => {
    alert('Aceitar chamada');
  }, []);

  return (
    <Container source={imageBG} resizeMode="cover">
      <CallerName>Sheila Viana</CallerName>
      <CallerPhone>+55 (85)99392-1234</CallerPhone>

      <RowButtons>
        <Button red onPress={handleDeclineCaller}>
          <Icon name="x" />
        </Button>

        <Button onPress={handleAcceptCaller}>
          <Icon name="check" />
        </Button>
      </RowButtons>
    </Container>
  );
};

export default IncomingCallScreen;
