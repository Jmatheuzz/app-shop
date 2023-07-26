import React, { useState } from 'react';
import { Button, Image, Keyboard, KeyboardAvoidingView, StatusBar, StyleSheet, Text, TextInput, TouchableWithoutFeedback, View } from 'react-native';
import logo from '../assets/imgs/logo.png';
import { NavigationProp } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import { Login as LoginAction } from '../store/actions';

export default function Login({navigation}: {navigation: NavigationProp<{}>}): JSX.Element {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  async function handleSubmit(){
    dispatch(LoginAction(email, password));
  }

  return (
    <View>
      <StatusBar animated />
      <View style={{height: '100%', backgroundColor: '#fff', display: 'flex', flexDirection:'column', justifyContent: 'flex-start', alignItems: 'center'}}>
        <KeyboardAvoidingView>
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={{flex: 1, justifyContent: 'flex-start', alignItems: 'center'}}>
            <Image style={styles.logo} source={logo}/>
            <Text style={{fontSize: 20, fontWeight: '600', color: '#545454', alignItems: 'center', width: 300}}>Login</Text>

          <View style={styles.section}>
            <View style={styles.field}>
              <Text>Email</Text>
              <TextInput onChangeText={(email) => setEmail(email)} style={styles.input}/>
            </View>
            <View style={styles.field}>
              <Text>Senha</Text>
              <TextInput onChangeText={(password) => setPassword(password)} secureTextEntry={true} style={styles.input}/>
            </View>
            <View style={{...styles.buttons}}>
            <Button color={'#1965D6'} title="Entrar" onPress={handleSubmit}/>
            <View style={styles.buttonLogin}>
              <Text>Não tem conta? Faça seu <Text onPress={()=> navigation.reset({ index: 0, routes: [{ name: 'signup' }] })} style={{fontWeight: '800'}}>cadastro</Text></Text>
            </View>
          </View>
          </View>
          </View>
        </TouchableWithoutFeedback>

        </KeyboardAvoidingView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    borderBottomWidth: 1,
    width: 300,
    height: 40,
    borderRadius: 4,
  },
  field: {
    margin: 5,
  },
  section: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  sectionLogo: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    marginTop: 5,
    alignItems: 'center',backgroundColor: 'red',
  },
  buttonLogin:{
    marginTop: 10,
  },
  logo: {
    width: 70,
    height: 70,
    marginTop: 10,
    marginBottom: 20,
  },
  buttons:{
    marginTop: 5,
  },
});
