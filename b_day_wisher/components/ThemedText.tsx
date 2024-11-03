// import { Text, type TextProps, StyleSheet } from 'react-native';

// import { useThemeColor } from '@/hooks/useThemeColor';

// export type ThemedTextProps = TextProps & {
//   lightColor?: string;
//   darkColor?: string;
//   type?: 'default' | 'title' | 'defaultSemiBold' | 'subtitle' | 'link';
// };

// export default function ThemedText({
//   style,
//   lightColor,
//   darkColor,
//   type = 'default',
//   ...rest
// }: ThemedTextProps) {
//   const color = useThemeColor({ light: lightColor, dark: darkColor }, 'text');

//   return (
//     <Text
//       style={[
//         { color },
//         type === 'default' ? styles.default : undefined,
//         type === 'title' ? styles.title : undefined,
//         type === 'defaultSemiBold' ? styles.defaultSemiBold : undefined,
//         type === 'subtitle' ? styles.subtitle : undefined,
//         type === 'link' ? styles.link : undefined,
//         style,
//       ]}
//       {...rest}
//     />
//   );
// }

// const styles = StyleSheet.create({
//   default: {
//     fontSize: 16,
//     lineHeight: 24,
//   },
//   defaultSemiBold: {
//     fontSize: 16,
//     lineHeight: 24,
//     fontWeight: '600',
//   },
//   title: {
//     fontSize: 32,
//     fontWeight: 'bold',
//     lineHeight: 32,
//   },
//   subtitle: {
//     fontSize: 20,
//     fontWeight: 'bold',
//   },
//   link: {
//     lineHeight: 30,
//     fontSize: 16,
//     color: '#0a7ea4',
//   },
// });





import React from 'react';
import { Text, TextStyle } from 'react-native';
import { useThemeColor } from '../hooks/useThemeColor';

type ThemedTextProps = {
  type?: 'default' | 'title' | 'link';
  style?: TextStyle;
  children: React.ReactNode;
};

const ThemedText: React.FC<ThemedTextProps> = ({ type = 'default', style, children }) => {
  const color = useThemeColor('text');
  const fontSize = type === 'title' ? 20 : 16;
  const fontWeight = type === 'title' ? 'bold' : 'normal';
  const textDecorationLine = type === 'link' ? 'underline' : 'none';

  return (
    <Text style={[{ color, fontSize, fontWeight, textDecorationLine }, style]}>
      {children}
    </Text>
  );
};

export default ThemedText;