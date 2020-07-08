# React Native Web with TypeScript

![image](https://i.imgur.com/sa5z3DR.gif)

### install brew

```sh
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install.sh)"
```

### install dependencies

```sh
brew install node
brew install watchman
sudo gem install cocoapods
npm i -g yarn
```

### install code

```sh
git clone git@github.com:ethanneff/react-native-web-typescript.git
cd react-native-web-typescript
yarn install
cd ios
pod install
```

### run

```sh
yarn ios
```

```sh
yarn android
```

```sh
yarn web
```

### lint

```sh
yarn lint
```

### test

```sh
yarn test
```

### deploy

```sh
yarn build
```
