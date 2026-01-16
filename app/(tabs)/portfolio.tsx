import { FC } from 'react';
import { View, Text } from 'react-native';

const PortfolioScreen: FC = () => {
  return (
    <View className="p-safe flex-1 bg-white">
      <Text className="text-blue text-bold text-sm leading-tight">In tab Screen</Text>
    </View>
  );
};

export default PortfolioScreen;
