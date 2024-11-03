// import { View, type ViewProps } from 'react-native';

// import { useThemeColor } from '@/hooks/useThemeColor';

// export type ThemedViewProps = ViewProps & {
//   lightColor?: string;
//   darkColor?: string;
// };

// export default function ThemedView({ style, lightColor, darkColor, ...otherProps }: ThemedViewProps) {
//   const backgroundColor = useThemeColor({ light: lightColor, dark: darkColor }, 'background');

//   return <View style={[{ backgroundColor }, style]} {...otherProps} />;
// }






import React from 'react';
import { View, ViewStyle } from 'react-native';
import { useThemeColor } from '../hooks/useThemeColor';

type ThemedViewProps = {
  style?: ViewStyle;
  children: React.ReactNode;
};

const ThemedView: React.FC<ThemedViewProps> = ({ style, children }) => {
  const backgroundColor = useThemeColor('background');

  return (
    <View style={[{ backgroundColor }, style]}>
      {children}
    </View>
  );
};

export default ThemedView;