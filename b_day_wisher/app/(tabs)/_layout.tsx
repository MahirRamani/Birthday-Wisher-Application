// import { Tabs } from 'expo-router';
// import React from 'react';

// import { TabBarIcon } from '@/components/navigation/TabBarIcon';
// import { Colors } from '@/constants/Colors';
// import { useColorScheme } from '@/hooks/useColorScheme';

// export default function TabLayout() {
//   const colorScheme = useColorScheme();

//   return (
//     <Tabs
//       screenOptions={{
//         tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
//         headerShown: false,
//       }}>
//       <Tabs.Screen
//         name="index"
//         options={{
//           title: 'Home',
//           tabBarIcon: ({ color, focused }) => (
//             <TabBarIcon name={focused ? 'home' : 'home-outline'} color={color} />
//           ),
//         }}
//       />
//       <Tabs.Screen
//         name="explore"
//         options={{
//           title: 'Explore',
//           tabBarIcon: ({ color, focused }) => (
//             <TabBarIcon name={focused ? 'code-slash' : 'code-slash-outline'} color={color} />
//           ),
//         }}
//       />
//     </Tabs>
//   );
// }



// working
// import { Tabs } from 'expo-router';
// import { useColorScheme } from 'react-native';
// import {Colors} from '../../constants/Colors';
// import { Ionicons } from '@expo/vector-icons';

// export default function TabLayout() {
//   const colorScheme = useColorScheme();

//   return (
//     <Tabs
//       screenOptions={{
//         tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
//       }}>
//       <Tabs.Screen
//         name="index"
//         options={{
//           title: 'Home',
//           tabBarIcon: ({ color }) => <Ionicons name="home" size={24} color={color} />,
//         }}
//       />
//       <Tabs.Screen
//         name="explore"
//         options={{
//           title: 'Explore',
//           tabBarIcon: ({ color }) => <Ionicons name="search" size={24} color={color} />,
//         }}
//       />
//     </Tabs>
//   );
// }



// Basic Final
import { Tabs } from 'expo-router';
import { useColorScheme } from 'react-native';
import Colors from '../../constants/Colors';
import { MaterialIcons } from '@expo/vector-icons';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        tabBarInactiveTintColor: Colors[colorScheme ?? 'light'].tabIconDefault,
        tabBarStyle: {
          backgroundColor: Colors[colorScheme ?? 'light'].background,
          borderTopColor: Colors[colorScheme ?? 'light'].border,
        },
        headerShown: false,
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Birthdays',
          tabBarIcon: ({ color, size }) => <MaterialIcons name="cake" color={color} size={size} />,
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: 'Calendar',
          tabBarIcon: ({ color, size }) => <MaterialIcons name="calendar-today" color={color} size={size} />,
        }}
      />
    </Tabs>
  );
}





// import { Tabs } from 'expo-router';
// import { useColorScheme } from 'react-native';
// import Colors from '../../constants/Colors';
// import { MaterialIcons } from '@expo/vector-icons';

// export default function TabLayout() {
//   const colorScheme = useColorScheme();

//   return (
//     <Tabs
//       screenOptions={{
//         tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
//         tabBarInactiveTintColor: Colors[colorScheme ?? 'light'].tabIconDefault,
//         tabBarStyle: {
//           backgroundColor: Colors[colorScheme ?? 'light'].background,
//           borderTopColor: Colors[colorScheme ?? 'light'].border,
//         },
//         headerShown: false, // Hide the default header
//       }}>
//       <Tabs.Screen
//         name="index"
//         options={{
//           title: 'Birthdays',
//           tabBarLabel: () => null, // Remove the tab label
//           tabBarIcon: ({ color, size }) => <MaterialIcons name="cake" size={size} color={color} />,
//         }}
//       />
//       <Tabs.Screen
//         name="explore"
//         options={{
//           title: 'Calendar',
//           tabBarLabel: () => null, // Remove the tab label
//           tabBarIcon: ({ color, size }) => <MaterialIcons name="calendar-today" size={size} color={color} />,
//         }}
//       />
//     </Tabs>
//   );
// }