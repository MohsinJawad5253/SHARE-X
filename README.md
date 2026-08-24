# Project Title: React Native File Sharing App

This project is a React Native application designed for seamless local file sharing, featuring a modern UI and robust file handling capabilities. This update introduces the dedicated `ReceiveScreen`, UI improvements, and bug fixes across various components.

## 🚀 Recent Changes

### 📱 New Features & UI Components
- **ReceiveScreen Implementation**: Added a full-featured `ReceiveScreen.tsx` replacing the previous placeholder. 
    - Integrates `LinearGradient` for a polished background.
    - Includes a scan animation using `LottieView`.
    - Features a QR Code generation trigger for receiving files via hotspot.
- **BreakerText Component**: Introduced a new reusable UI component `BreakerText.tsx` to display text with horizontal dividers (e.g., "— or —"), enhancing layout styling.

### 🔧 Bug Fixes & Refactoring
- **Clean Imports**: Removed unused `View` and `Text` imports in `CustomText.tsx` and `Options.tsx` to optimize code quality.
- **Syntax Fixes**: Removed a stray backslash in the `Options.tsx` container view.
- **Path Handling**: Updated error logging in `ReceivedFileScreen.tsx` for better debugging when opening files via `ReactNativeBlobUtil`.
- **Styling Updates**: 
    - Adjusted `profileImage` dimensions in `sendStyles.tsx` from `50x50` to `60x60` for better visibility in scanning animations.
    - Refined spacing and alignment in the receive screen info containers.

## 📂 Project Structure Updates
- **src/screens/ReceiveScreen.tsx**: Now a TypeScript-based functional component.
- **src/components/ui/BreakerText.tsx**: Added to the global component library.

## 🛠 Tech Stack
- **Framework**: React Native
- **Styling**: Styled Components / StyleSheet, React Native Linear Gradient
- **Animations**: Lottie for React Native
- **Utilities**: 
    - `react-native-device-info`
    - `react-native-blob-util`
    - `react-native-responsive-fontsize`

## 📸 Component Preview
- **ReceiveScreen**: Displays a scanning animation, device info, and a "Show QR" button to facilitate incoming file transfers.
- **BreakerText**: A simple divider used to separate different action paths (like "Nearby" vs "QR Code").

## 🚦 Getting Started
1. Install dependencies: `npm install` or `yarn install`.
2. Ensure you have the required assets in `src/assets/animations/` and `src/assets/images/`.
3. Run the app: `npx react-native run-android` or `npx react-native run-ios`.