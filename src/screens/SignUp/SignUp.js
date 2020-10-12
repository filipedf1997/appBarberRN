import React, { useState, useContext } from 'react';
import { useNavigation } from '@react-navigation/native';
import {
  Container,
  InputArea,
  CustomButton,
  CustomButtonText,
  SignMessageButton,
  SignMessageButtonText,
  SignMessageButtonTextBold,
} from './styles.js';
import BarberLogo from '../../assets/barber.svg';
import SignInput from '../../components/SignInput';
import PerfilIcon from '../../assets/person.svg';
import EmailIcon from '../../assets/email.svg';
import LockIcon from '../../assets/lock.svg';
import API from '../../Api';
import AsyncStorage from '@react-native-community/async-storage';
import { UserContext } from '../../contexts/UserContext';

const SignUp = () => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { dispatch: userDispatch } = useContext(UserContext);

  const navigation = useNavigation();

  const handleMessageButtonClick = () => {
    navigation.reset({
      routes: [{ name: 'SignIn' }]
    })
  };

  const handleSignUpClick = async () => {
    if (name != '' && email != '' && password != '') {
      let res = await API.signUp(name, email, password);
      if (res.token) {
        await AsyncStorage.setItem('token', res.token);

        userDispatch({
          type: 'setAvatar',
          payload: {
            avatar: res.data.avatar
          }
        });

        navigation.reset({
          routes: [{ name: 'MainTab' }]
        });
      } else {
        alert('Erro ao cadastrar');
      };
    } else {
      alert('Preencha os campo!');
    }
  }

  return (
    <Container>
      <BarberLogo width='100%' height='160' />

      <InputArea>

        <SignInput
          IconSvg={PerfilIcon}
          placeholder='Digite seu nome'
          value={name}
          onChangeText={t => setName(t)}
        />

        <SignInput
          IconSvg={EmailIcon}
          placeholder='Digite seu e-mail'
          value={email}
          onChangeText={t => setEmail(t)}
        />

        <SignInput
          IconSvg={LockIcon}
          placeholder='Digite sua senha'
          value={password}
          onChangeText={t => setPassword(t)}
          password={true}
        />

        <CustomButton onPress={handleSignUpClick}>
          <CustomButtonText>CADRASTRAR</CustomButtonText>
        </CustomButton>

      </InputArea>

      <SignMessageButton onPress={handleMessageButtonClick} >
        <SignMessageButtonText>Já possui uma conta?</SignMessageButtonText>
        <SignMessageButtonTextBold>Faça o login!</SignMessageButtonTextBold>
      </SignMessageButton>

    </Container>
  );
};

export default SignUp;