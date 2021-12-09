import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import ContactsScreen from '../screens/Contacts';
import CallingScreen from '../screens/CallingScreen';
import IncomingCallScreen from '../screens/IncomingCall';
import InCallScreen from '../screens/InCall';

const {Navigator, Screen} = createNativeStackNavigator();

const Routes = () => {
  return (
    <NavigationContainer>
      <Navigator>
        <Screen name="ContactsScreen" component={ContactsScreen} />
        <Screen name="CallingScreen" component={CallingScreen} />
        <Screen name="IncomingCallScreen" component={IncomingCallScreen} />
        <Screen name="InCallScreen" component={InCallScreen} />
      </Navigator>
    </NavigationContainer>
  );
};

export default Routes;
