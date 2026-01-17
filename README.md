# Stockwave - Stock Market Tracker

A React Native mobile application built for the INITS Limited technical assessment.---

## Tech Stack

- **Framework:** Expo (React Native) with Expo Router (File-based navigation).
- **Styling:** NativeWind (Tailwind CSS for React Native).
- **Language:** TypeScript with strict type checking.
- **Icons & Graphics:** `react-native-svg` for resolution-independent assets.
- **Data Management:** React Context API with Custom Hooks.

---

## Key Architectural Decisions

### 1. Componentized Design Pattern

The UI is broken down into small, reusable components (e.g., `StockRow`, `IndexCard`, `MainChart`). This ensures a clear separation of concerns, making the codebase easier to test and maintain.

### 2. Performance-First Lists

Instead of using standard arrays and mapping, the app utilizes `FlatList` with the `ListHeaderComponent` pattern. This ensures:

- **Lazy Rendering:** Only items on screen are rendered.
- **Single Scroll Responder:** The entire screen scrolls as one unit without nested scroll warnings.
- **Memory Efficiency:** Optimized for large datasets of financial instruments.

### 3. State & Mock Data Management

Data is centralized in a `StockProvider` using the Context API.

- **Centralized Truth:** Components consume data via a `useMarketData` custom hook.
- **Mock Utility:** Includes a dynamic chart data generator to simulate market volatility for visualization.

### 4. Layout & Styling

- **Safe Areas:** Managed using `react-native-safe-area-context` to handle notches and home indicators across iOS and Android.
- **Typography:** Strict adherence to the Inter font family with defined weight variants for clear financial data hierarchy.

### 5. File-Based Routing

I chose Expo Router to align with modern Expo standards. This provides a clear project structure where the file system reflects the app's navigation flow (/ for the list and /stock/[id] for details).

### 6. Design System with NativeWind

I used NativeWind to implement the UI. This allowed for:

    Scannability: Rapid styling using utility classes.

    Consistency: Shared design tokens (colors/spacing) via tailwind.config.js.

    Performance: NativeWind compiles to standard React Native Stylesheets.

### 7. TypeScript Strategy

I avoided the use of any across the entire project. All components use defined interfaces for props, and the navigation system is fully typed to ensure that passing data between the list and detail screens is compile-time safe.

---

## Project Structure

- `app/` - Expo Router screens and layout definitions.
- `src/components/` - Atomic UI components split by feature (ui, screens).
- `src/context/` - Global state management using Context API.
- `src/hooks/` - Custom hooks for data fetching and business logic.
- `src/constants/` - Mock data and configuration.
- `src/types/` - Centralized TypeScript interfaces.
- `src/utils/` - Global formatters for currency and percentages.

---

## Getting Started

1. **Install dependencies:**

```bash
npm install

```

2. **Start the development server:**

```bash
npx expo start

```

3. **Run on a device/emulator:**
   Press `i` for iOS or `a` for Android.

4. To run on Physical Device: Scan the QR code with Expo Go app

---
