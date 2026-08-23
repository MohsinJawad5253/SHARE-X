=# ShareX

This is a new [**React Native**](https://reactnative.dev) project, bootstrapped using [`@react-native-community/cli`](https://github.com/react-native-community/cli).

## 🚀 Getting Started

> **Note**: Make sure you have completed the [Set Up Your Environment](https://reactnative.dev/docs/set-up-your-environment) guide before proceeding.

### Step 1: Start Metro

First, you will need to run **Metro**, the JavaScript build tool for React Native.

To start the Metro dev server, run the following command from the root of your React Native project:

```sh
# Using npm
npm start

# OR using Yarn
yarn start

# OR using Bun
bun start
```

### Step 2: Build and run your app

With Metro running, open a new terminal window/pane from the root of your project, and use one of the following commands to build and run your Android or iOS app:

#### Android

```sh
# Using npm
npm run android

# OR using Yarn
yarn android
```

#### iOS

For iOS, you must install CocoaPods dependencies before running the app for the first time or after updating native modules.

1. Install the Ruby bundler:
   ```sh
   bundle install
   ```
2. Install CocoaPods:
   ```sh
   bundle exec pod install
   ```

Then run the iOS app:
```sh
# Using npm
npm run ios

# OR using Yarn
yarn ios
```

If everything is set up correctly, you should see your new app running in the Android Emulator or iOS Simulator.

### Step 3: Modify your app

Open `App.tsx` in your text editor and make some changes. Thanks to **Fast Refresh**, your app will update automatically when you save the file!

---

## 🛠 Project Details

- **React Native Version**: 0.87.0
- **React Version**: 19.2.3
- **Main Languages**: TypeScript, Kotlin (Android), Swift (iOS)
- **Engine**: Hermes (enabled by default)
- **Architecture**: New Architecture (Fabric/TurboModules) enabled

### Available Scripts

- `npm run android`: Runs the Android app.
- `npm run ios`: Runs the iOS app.
- `npm start`: Starts the Metro bundler.
- `npm test`: Runs unit tests using Jest.
- `npm run lint`: Runs ESLint to check for code quality issues.

## 🧪 Testing

This project comes with [Jest](https://jestjs.io/) and [React Test Renderer](https://reactjs.org/docs/test-renderer.html) configured.

To run tests:
```sh
npm test
```

## 📖 Learn More

To learn more about React Native, check out these resources:

- [React Native Website](https://reactnative.dev)
- [Learn the Basics](https://reactnative.dev/docs/getting-started)
- [Integration with Existing Apps](https://reactnative.dev/docs/integration-with-existing-apps)
- [Troubleshooting Guide](https://reactnative.dev/docs/troubleshooting)