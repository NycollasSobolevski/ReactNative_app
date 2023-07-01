
# React Transactions APP

Application developed in React Native that manages transactions, being able to view and add transactions.

## Functionalities

- Login & Sign In
    - Firebase validation 
- Add Transaction
    - [API](https://github.com/NycollasSobolevski/React_Node_API) to connect with Mongo Database via Axios
- View all transactions
    - [API](https://github.com/NycollasSobolevski/React_Node_API) to connect with Mongo Database via Axios
- Android and IOS
    


## Instalation

Install JDK (jdk11)
```bash
choco install -y microsoft-openjdk11
```
Install Android Studio
[Here](https://developer.android.com/studio)
- Select "Custom"
- Select all instalation checkbox 
- Accept all terms 
- Click "finalize"

Install Android Sdk Tiramisu
- Open Android Studio (admin)
- 'more actions' > 'SDK Manager'
- Select 'android 13.0 tiramisu'
- Click 'SDK Tools'
- Select 'android sdk build tools' (default 34, select 33.0)


Yarn install in CMD (Run as Administrator)

```bash
npm install --global yarn
```

Install (add) Expo

```bash
yarn add expo
```

Run as WEB
```bash
npx expo install react-native-web@~0.18.10 react-dom@18.2.0 @expo/webpack-config@^18.0.1
```
## Run 

In iphone (Mac)
```bash
npx expo start
```

In Android (localhost with cable)
```bash
npx expo start --localhost --android
```
