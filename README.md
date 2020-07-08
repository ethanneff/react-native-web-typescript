# React Native Web with TypeScript

![image](https://i.imgur.com/sa5z3DR.gif)

### Featuring

- iOS
- Android
- Web
- Typescript
- React-Navigation
- Jest
- Eslint

### Install brew

```sh
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install.sh)"
```

### Install dependencies

```sh
brew install node
brew install watchman
sudo gem install cocoapods
npm i -g yarn
```

### Install code

```sh
git clone git@github.com:ethanneff/react-native-web-typescript.git
cd react-native-web-typescript
yarn install
cd ios
pod install
```

### Run

```sh
yarn ios
```

```sh
yarn android
```

```sh
yarn web
```

### Lint

```sh
yarn lint
```

### Test

```sh
yarn test
```

### Deploy

```sh
yarn build
```
