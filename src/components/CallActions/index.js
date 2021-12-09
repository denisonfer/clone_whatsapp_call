import React from 'react';

import {Container, RowButtons, Button, Icon, IconMI} from './styles';

const CallActions = () => {
  return (
    <Container>
      <RowButtons>
        <Button>
          <Icon name="camera-reverse" />
        </Button>

        <Button>
          <IconMI name="videocam-off" />
        </Button>

        <Button>
          <Icon name="mic-off" />
        </Button>

        <Button red>
          <IconMI name="call-end" />
        </Button>
      </RowButtons>
    </Container>
  );
};

export default CallActions;
