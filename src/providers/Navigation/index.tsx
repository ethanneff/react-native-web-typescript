const linking = {
  prefixes: ['https://app.example.com', 'mychat://'],
};

const SignInStack = () => (
  <Stack.Navigator>
    <Stack.Screen name="Landing" component={Landing} />
    <Stack.Screen name="SignIn" component={SignIn} />
    <Stack.Screen name="SignUp" component={SignUp} />
    <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
  </Stack.Navigator>
);

const HomeStack = () => (
  <Stack.Navigator>
    <Stack.Screen name="Home" component={Home} />
    <Stack.Screen name="Details" component={Details} />
  </Stack.Navigator>
);

const SettingsStack = () => (
  <Stack.Navigator>
    <Stack.Screen name="Settings" component={Settings} />
  </Stack.Navigator>
);

// TODO: handle better
const MainStack = () => (
  <Tab.Navigator>
    <Tab.Screen name="Home" component={HomeStack} />
    <Tab.Screen name="Profile" component={SettingsStack} />
    <Tab.Screen name="Settings" component={SettingsStack} />
  </Tab.Navigator>
);

export const Navigation = () => {
  const token = useRootSelector((state) => state.auth.token);
  const appStack = token ? MainStack : SignInStack;
  const {initialState, isReady, onStateChange} = usePersistedState();

  return !isReady ? (
    <Loading />
  ) : (
    <NavigationContainer
      initialState={initialState}
      onStateChange={onStateChange}
      linking={linking}
      fallback={<Loading />}>
      <Stack.Navigator mode={rootMode} screenOptions={rootScreenOptions}>
        <Stack.Screen name="App" component={appStack} />
        <Stack.Screen
          name="GlobalNotification"
          component={GlobalNotification}
        />
        <Stack.Screen name="GlobalAlert" component={GlobalAlert} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
