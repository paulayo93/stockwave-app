import { Tabs } from 'expo-router';
import { View } from 'react-native';
import HomeIcon from '../../assets/icons/tabbar/home.svg';
import ChartIcon from '../../assets/icons/tabbar/chart.svg';
import ExchangeIcon from '../../assets/icons/tabbar/exchange.svg';
import StatsIcon from '../../assets/icons/tabbar/stats.svg';
import ProfileIcon from '../../assets/icons/tabbar/profile.svg';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: {
          height: 88,
          borderTopWidth: 0,
          elevation: 0,
          backgroundColor: '#ffffff',
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <HomeIcon fill={focused ? '#000000' : '#FFFFFF'} width={24} height={24} />
          ),
        }}
      />
      <Tabs.Screen
        name="portfolio"
        options={{
          tabBarIcon: ({ focused }) => (
            <ChartIcon fill={focused ? '#000000' : '#FFFFFF'} width={24} height={24} />
          ),
        }}
      />
      <Tabs.Screen
        name="exchange"
        options={{
          tabBarIcon: () => (
            <View className="-mt-2 h-12 w-12 items-center justify-center rounded-full bg-indigo-600 shadow-none  shadow-indigo-400">
              <ExchangeIcon fill="#ffffff" width={24} height={24} />
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="market"
        options={{
          tabBarIcon: ({ focused }) => (
            <StatsIcon fill={focused ? '#000000' : '#FFFFFF'} width={24} height={24} />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          tabBarIcon: ({ focused }) => (
            <ProfileIcon fill={focused ? '#000000' : '#FFFFFF'} width={24} height={24} />
          ),
        }}
      />
    </Tabs>
  );
}
