import React from 'react';
import { Button, Image, Keyboard, KeyboardAvoidingView, StatusBar, StyleSheet, Text, TextInput, TouchableWithoutFeedback, View } from 'react-native';
import logo from '../assets/imgs/logo.png';
import { NavigationProp } from '@react-navigation/native';

export default function SignUp({navigation}: {navigation: NavigationProp<{}>}): JSX.Element {
  return (
    <View>
      <StatusBar barStyle={'light-content'} backgroundColor={'black'} />
      <View style={{height: '100%', backgroundColor: '#fff', display: 'flex', flexDirection:'column', justifyContent: 'flex-start', alignItems: 'center'}}>
        <KeyboardAvoidingView>
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={{flex: 1, justifyContent: 'flex-start', alignItems: 'center'}}>
            <Image style={styles.logo} source={logo}/>
            <Text style={{fontSize: 20, fontWeight: '600', color: '#545454', alignItems: 'center', width: 300}}>Cadastrar-se</Text>

          <View style={styles.section}>
            <View style={styles.field}>
              <Text>Nome</Text>
              <TextInput style={styles.input}/>
            </View>
            <View style={styles.field}>
              <Text>Email</Text>
              <TextInput style={styles.input}/>
            </View>
            <View style={styles.field}>
              <Text>Senha</Text>
              <TextInput secureTextEntry={true} style={styles.input}/>
            </View>
            <View style={styles.field}>
              <Text>Confirmar senha</Text>
              <TextInput secureTextEntry={true} style={styles.input}/>
            </View>
            <View style={{...styles.buttons}}>
            <Button color={'#1965D6'} title="Cadastrar"/>
            <View style={styles.buttonLogin}>
              <Text>Já tem conta? Faça <Text onPress={()=> navigation.reset({ index: 0, routes: [{ name: 'login' }] })} style={{fontWeight: '800'}}>login</Text></Text>
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
