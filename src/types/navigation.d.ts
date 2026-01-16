import { Href } from 'expo-router';

export type TabRoutes = Href<
  '/(tabs)/' | '/(tabs)/portfolio' | '/(tabs)/exchange' | '/(tabs)/market' | '/(tabs)/profile'
>;

declare global {
  namespace ReactNavigation {
    interface RootParamList {
      index: undefined;
      portfolio: undefined;
      exchange: undefined;
      market: undefined;
      profile: undefined;
    }
  }
}
