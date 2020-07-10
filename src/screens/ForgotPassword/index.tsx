import React, {useState} from 'react';
import {useNavigation, useRoute, RouteProp} from '@react-navigation/native';
import {View, Button, TextInput} from 'react-native';
import {StackParams} from '../../providers/Navigation/params';

type RouteProps = RouteProp<StackParams, 'ForgotPassword'>;
export function ForgotPassword() {
  const {navigate} = useNavigation();
  const {params} = useRoute<RouteProps>();
  const [form, setForm] = useState({email: params.email});

  return (
    <View>
      <TextInput
        placeholder="email"
        value={form.email}
        onChangeText={(email) => setForm((s) => ({...s, email}))}
      />
      <Button title="forgot password" onPress={() => navigate('SignIn')} />
    </View>
  );
}
