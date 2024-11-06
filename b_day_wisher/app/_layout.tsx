// import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
// import { useFonts } from 'expo-font';
// import { Stack } from 'expo-router';
// import * as SplashScreen from 'expo-splash-screen';
// import { useEffect } from 'react';
// import 'react-native-reanimated';

// import { useColorScheme } from '@/hooks/useColorScheme';
// import {  View, Text } from 'react-native';

// // Prevent the splash screen from auto-hiding before asset loading is complete.
// SplashScreen.preventAutoHideAsync();

// export default function RootLayout() {
//   const colorScheme = useColorScheme();
//   const [loaded] = useFonts({
//     SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
//   });

//   useEffect(() => {
//     if (loaded) {
//       SplashScreen.hideAsync();
//     }
//   }, [loaded]);

//   if (!loaded) {
//     return null;
//   }

//   return (
//     <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
//       {/* <Stack>
//         <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
//         <Stack.Screen name="+not-found" />
//       </Stack> */}
//       <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//         <Text style={{ alignItems: 'center', textAlign: 'center', fontSize: 20, fontWeight: 'bold',color: 'red' }}>
//           Hello
//         </Text>
//       </View>
//     </ThemeProvider>
//   );
// }


// working
// import { Stack } from 'expo-router';
// import { useColorScheme } from 'react-native';
// import { PaperProvider } from 'react-native-paper';

// export default function RootLayout() {
//   const colorScheme = useColorScheme();

//   return (
//     <PaperProvider>
//       <Stack>
//         <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
//       </Stack>
//     </PaperProvider>
//   );
// }



// Basic Final
// import { Stack } from 'expo-router';
// import { useColorScheme } from 'react-native';

// export default function RootLayout() {
//   const colorScheme = useColorScheme();

//   return (
//     <Stack>
//       <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
//     </Stack>
//   );
// }



import { Stack } from 'expo-router';
import { useColorScheme } from 'react-native';
import Colors from '../constants/Colors';

export default function RootLayout() {
  const colorScheme = useColorScheme();

  return (
    <Stack>
      <Stack.Screen
        name="(tabs)"
        options={{
          headerStyle: {
            backgroundColor: Colors[colorScheme ?? 'light'].background,
          },
          headerTintColor: Colors[colorScheme ?? 'light'].text,
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          headerTitle: "B'DAY WISHER",
        }}
      />
    </Stack>
  );
}