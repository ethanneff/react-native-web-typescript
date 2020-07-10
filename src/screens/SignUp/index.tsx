import React, {useState} from 'react';
import {View, Button, TextInput} from 'react-native';
import {useRootDispatch} from '../../providers';

export function SignUp() {
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
      <Button title="sign up" onPress={() => dispatch({type: 'LOGIN'})} />
    </View>
  );
}
