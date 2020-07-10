const SignInStack = () => (
  <Stack.Navigator>
    <Stack.Screen name="Landing" component={Landing} />
    <Stack.Screen name="SignIn" component={SignIn} />
    <Stack.Screen name="SignUp" component={SignUp} />
    <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
  </Stack.Navigator>
);
  const token = useRootSelector((state) => state.auth.token);
  const appStack = token ? MainStack : SignInStack;
      <Stack.Navigator mode={rootMode} screenOptions={rootScreenOptions}>
        <Stack.Screen
          name="GlobalNotification"
          component={GlobalNotification}
        />
        <Stack.Screen name="GlobalAlert" component={GlobalAlert} />
      </Stack.Navigator>
