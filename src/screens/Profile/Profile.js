import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Button, Text } from 'react-native';
import { Container } from './styles';

export default Profile = () => {
  const navigation = useNavigation();

  const handleClick = async () => {
    await API.logout();
    navigation.reset({
      routes:[{name: 'SignIn'}]
    });
  };

  return (
    <Container>
      <Text>Profile</Text>
      <Button onPress={handleClick} title='Sair' />
    </Container>
  );
};