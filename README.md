# StockWave - Stock Tracking App

A modern React Native stock tracking application built with Expo, TypeScript, and TailwindCSS (NativeWind).

## Features

- Real-time stock price tracking (mock data)
- Interactive stock charts
- Wishlist functionality
- Responsive mobile UI
- Modern design with TailwindCSS
- Detailed stock information
- Market indices (S&P 500, DOW)

## Tech Stack

- **React Native** - Mobile framework
- **Expo** - Development platform
- **TypeScript** - Type safety
- **Expo Router** - File-based navigation
- **NativeWind** - TailwindCSS for React Native
- **React Native SVG** - Chart rendering
- **React Native Reanimated** - Animations

## Installation ef

1. Clone the repository
2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npx expo start
```

4. Run on your preferred platform:
    - Press `i` for iOS simulator
    - Press `a` for Android emulator
    - Scan QR code with Expo Go app on your device

## Project Structure

# TODO: Add Project Structure

## Key Components

### Screens

- **Home**: Portfolio overview, market indices, wishlist preview, and stock list
- **Stock Detail**: Comprehensive stock information with charts and statistics
- **Wishlist**: Favorite stocks quick access

### Data Management

- Mock data with realistic chart generation
- Type-safe interfaces
- Utility functions for formatting

## Design Decisions

- **Expo Router**: Chosen for file-based routing and type-safe navigation
- **NativeWind**: Enables rapid UI development with familiar TailwindCSS syntax
- **Component Architecture**: Focused on reusability and separation of concerns
- **Mock Data**: Generates realistic chart data for demonstration
- **TypeScript**: Ensures type safety across the application
- **No Comments**: Clean, self-documenting code following best practices

## Development

### Available Scripts

- `npm start` - Start Expo development server
- `npm run android` - Run on Android
- `npm run ios` - Run on iOS
- `npm run web` - Run on web
- `npm run reset` - Clear cache and restart

### Adding New Stocks

Edit `data/mockData.ts` and add new stock objects to the `mockStocks` array.

### Customizing Styles

Modify `tailwind.config.js` to update the design system colors and theme.

## Mock Data

The app uses generated mock data including:

- Stock prices and historical data
- Market indices (S&P 500, DOW)
- Portfolio value and performance
- Chart data with realistic fluctuations

## Future Enhancements

- Real API integration
- User authentication
- Portfolio management
- Real-time updates
- News integration
- Advanced charting options
- Stock search functionality

## Requirements

- Node.js 18+
- npm or yarn
- iOS Simulator (Mac) or Android Emulator
- Expo Go app for physical device testing

## License

MIT
