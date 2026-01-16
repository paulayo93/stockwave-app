import { FC } from 'react';
import { View, Text } from 'react-native';

const AnalyticsScreen: FC = () => {
  return (
    <View className="p-safe  flex-1 border-2 border-red-500 bg-white">
      <Text className="text-blue text-bold text-sm leading-tight">In tab Screen</Text>
    </View>
  );
};

export default AnalyticsScreen;
