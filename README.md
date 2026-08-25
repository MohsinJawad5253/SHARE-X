# ShareX - Data & Communication Module

This update introduces core infrastructure for data persistence, state management for large file transfers, and secure TCP communication within a React Native environment.

## New Features

### 1. Data Persistence & Storage
- **MMKV Integration**: Implemented a high-performance key-value storage solution using `react-native-mmkv`.
- **Encrypted Storage**: Secure storage instance configured with an encryption key for sensitive data.
- **MMKV Wrapper**: A clean interface (`mmkvStorage`) providing `setItem`, `getItem`, and `removeItem` methods for easier consumption.

### 2. State Management (Chunk Store)
- **Zustand Store**: Added a specialized `useChunkStore` for managing large data transfers.
- **Chunk Tracking**: Capability to track file IDs, names, total chunk counts, and raw data buffers (`Buffer[]`).
- **State Handling**: Includes functions to set and reset both global chunk stores and current active chunk sets.

### 3. Networking & TCP Communication
- **TCP Provider**: Introduced a `TCPProvider` context to manage socket connections across the application.
- **Secure Communication**: Implemented `TcpSocket.createTLSServer` for encrypted data transmission using TLS certificates.
- **Transmission Analytics**: State hooks added to track:
  - Total sent and received bytes.
  - Lists of sent and received files.
  - Connection status and device metadata.
- **Optimized Throughput**: Configured high water marks (`1024 * 1024 * 1`) and `setNoDelay` for improved performance during large file transfers.

## Technical Details

### Technologies Used
| Module | Technology |
| :--- | :--- |
| State Management | [Zustand](https://github.com/pmndrs/zustand) |
| Local Storage | [react-native-mmkv](https://github.com/mrousavy/react-native-mmkv) |
| Networking | [react-native-tcp-socket](https://github.com/Raphael-R-Alves/react-native-tcp-socket) |
| Buffer Handling | `buffer` |

### File Structure
- `src/db/storage.tsx`: MMKV instance and storage abstraction.
- `src/db/chunkStore.tsx`: Zustand store for file chunking logic.
- `src/service/TCPProvider.tsx`: Context provider for TLS-encrypted TCP socket management.

## Getting Started

### Prerequisites
Ensure you have the required TLS certificates in `tls_certs/server-keystore.p12` for the TCP server to initialize correctly.

### Example Usage

**Storage:**
```typescript
import { mmkvStorage } from './src/db/storage';

mmkvStorage.setItem('user_pref', 'dark_mode');
```

**TCP Hook:**
```typescript
const { startServer, isConnected } = useTCP();

useEffect(() => {
  startServer(8080);
}, []);
```

**Chunk Store:**
```typescript
const { setChunkStore } = useChunkStore();

setChunkStore({
  id: '123',
  name: 'video.mp4',
  totalChunks: 10,
  chunkArray: []
});
```
