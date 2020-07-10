import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {View, Button, TextInput} from 'react-native';
import {useRootDispatch} from '../../providers';

export function SignIn() {
  const {navigate} = useNavigation();
  const dispatch = useRootDispatch();
  const [form, setForm] = useState({email: '', password: ''});

  return (
    <View>
      <TextInput
        placeholder="email"
        value={form.email}
        onChangeText={(email) => setForm((s) => ({...s, email}))}
      />
      <TextInput
        placeholder="password"
        value={form.password}
        onChangeText={(password) => setForm((s) => ({...s, password}))}
      />
      <Button title="sign in" onPress={() => dispatch({type: 'LOGIN'})} />
      <Button
        title="forgot password"
        onPress={() => navigate('ForgotPassword', {email: form.email})}
      />
    </View>
  );
}
