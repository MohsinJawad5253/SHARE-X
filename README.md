# File Sharing App - Home & QR Scanner Module

This update introduces the core UI for the Home Screen and implements a functional QR Scanner modal for device pairing and file transfers.

## 🚀 Key Changes

### 📱 Home Screen Enhancements
- **Home Layout**: Integrated `HomeHeader`, `SendRecieveButton`, `Options`, and `Misc` components into a cohesive scrollable view.
- **Send & Receive Buttons**: Added stylized buttons for quick navigation to sending and receiving screens.
- **Quick Options**: Implemented an options grid for selecting specific file types (Photos, Audio, Files, Contacts).
- **Branding & UI**: Added a `Misc` section featuring promotional banners and developer credits using custom text components.

### 🔍 QR Scanner & Bottom Navigation
- **AbsoluteQRBottom**: A persistent bottom navigation bar featuring a primary QR scan trigger and navigation to received files.
- **QR Scanner Modal**:
    - Built using `react-native-vision-camera`.
    - Handles camera permissions automatically.
    - Includes a shimmer loading effect during camera initialization.
    - Features a custom UI for code scanning with real-time feedback.
    - Implements logic to parse connection strings (TCP host/port).

### 🛠 Technical Updates
- **Navigation**: Registered `ReceiveScreen` and added logic for navigating between send/receive flows.
- **Permissions**: Integrated camera permission handling for Android/iOS.
- **Reanimated**: Leveraged `react-native-reanimated` for smooth UI transitions and loading states.
- **Security**: Updated `.gitignore` to exclude `tls_certs`.

## 📦 New Components

| Component | Description |
| :--- | :--- |
| `AbsoluteQRBottom` | Floating bottom tab bar with QR trigger. |
| `QRScannerModal` | Full-screen modal for scanning transfer codes. |
| `SendRecieveButton` | Primary action buttons for the home screen. |
| `Options` | Category-based file selection grid. |
| `Misc` | Decorative banners and application info. |

## 🔧 Setup Notes
- Ensure camera permissions are configured in `Info.plist` (iOS) and `AndroidManifest.xml` (Android) to support the QR Scanner.
- New dependencies: `react-native-vision-camera`, `react-native-reanimated`, `react-native-linear-gradient`.