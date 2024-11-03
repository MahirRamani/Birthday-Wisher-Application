// import { Image, StyleSheet, Platform } from 'react-native';

// import { HelloWave } from '@/components/HelloWave';
// import ParallaxScrollView from '@/components/ParallaxScrollView';
// import { ThemedText } from '@/components/ThemedText';
// import { ThemedView } from '@/components/ThemedView';

// export default function HomeScreen() {
//   return (
//     <ParallaxScrollView
//       headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
//       headerImage={
//         <Image
//           source={require('@/assets/images/partial-react-logo.png')}
//           style={styles.reactLogo}
//         />
//       }>
//       <ThemedView style={styles.titleContainer}>
//         <ThemedText type="title">Welcome!</ThemedText>
//         <HelloWave />
//       </ThemedView>
//       <ThemedView style={styles.stepContainer}>
//         <ThemedText type="subtitle">Step 1: Try it</ThemedText>
//         <ThemedText>
//           Edit <ThemedText type="defaultSemiBold">app/(tabs)/index.tsx</ThemedText> to see changes.
//           Press{' '}
//           <ThemedText type="defaultSemiBold">
//             {Platform.select({ ios: 'cmd + d', android: 'cmd + m' })}
//           </ThemedText>{' '}
//           to open developer tools.
//         </ThemedText>
//       </ThemedView>
//       <ThemedView style={styles.stepContainer}>
//         <ThemedText type="subtitle">Step 2: Explore</ThemedText>
//         <ThemedText>
//           Tap the Explore tab to learn more about what's included in this starter app.
//         </ThemedText>
//       </ThemedView>
//       <ThemedView style={styles.stepContainer}>
//         <ThemedText type="subtitle">Step 3: Get a fresh start</ThemedText>
//         <ThemedText>
//           When you're ready, run{' '}
//           <ThemedText type="defaultSemiBold">npm run reset-project</ThemedText> to get a fresh{' '}
//           <ThemedText type="defaultSemiBold">app</ThemedText> directory. This will move the current{' '}
//           <ThemedText type="defaultSemiBold">app</ThemedText> to{' '}
//           <ThemedText type="defaultSemiBold">app-example</ThemedText>.
//         </ThemedText>
//       </ThemedView>
//     </ParallaxScrollView>
//   );
// }

// const styles = StyleSheet.create({
//   titleContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     gap: 8,
//   },
//   stepContainer: {
//     gap: 8,
//     marginBottom: 8,
//   },
//   reactLogo: {
//     height: 178,
//     width: 290,
//     bottom: 0,
//     left: 0,
//     position: 'absolute',
//   },
// });





// working
// import React, { useState, useEffect } from 'react';
// import { StyleSheet, FlatList } from 'react-native';
// import Text from '../../components/ThemedText';
// import View from '../../components/ThemedView';
// import ProfileTile from '../../components/ProfileTile';

// interface Student {
//   id: string;
//   name: string;
//   mobile: string;
//   branch: string;
//   year: string;
// }

// // Mock data - replace this with actual data from Google Sheets
// const mockData: Student[] = [
//   { id: '1', name: 'John Doe', mobile: '8160264792', branch: 'CS', year: '3' },
//   { id: '2', name: 'Jane Smith', mobile: '0987654321', branch: 'EE', year: '2' },
// ];

// export default function HomeScreen() {
//   const [students, setStudents] = useState<Student[]>(mockData);

//   useEffect(() => {
//     // Fetch data from Google Sheets here
//     // For now, we're using mock data
//   }, []);
  

//   const handleSaveProfile = (id: string) => {
//     // Save profile to Sheet 2
//     console.log('Saving profile:', id);
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Today's Birthdays</Text>
//       <FlatList
//         data={students}
//         keyExtractor={(item) => item.id}
//         renderItem={({ item }) => (
//           <ProfileTile
//             student={item}
//             onSave={() => handleSaveProfile(item.id)}
//           />
//         )}
//       />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   title: {
//     fontSize: 20,
//     fontWeight: 'bold',
//     marginVertical: 20,
//   },
// });






// import React, { useState, useEffect } from 'react';
// import { StyleSheet, FlatList, View } from 'react-native';
// import  Text  from '../../components/ThemedText';
// import  ThemedView  from '../../components/ThemedView';
// import ParallaxScrollView from '../../components/ParallaxScrollView';
// import ProfileTile from '../../components/ProfileTile';
// import { fetchTodayBirthdays, fetchTomorrowBirthdays } from '../../hooks/useBirthdayData';

// interface Birthday {
//   id: string;
//   name: string;
//   date: Date;
// }

// export default function HomeScreen() {
//   const [todayBirthdays, setTodayBirthdays] = useState<Birthday[]>([]);
//   const [tomorrowBirthdays, setTomorrowBirthdays] = useState<Birthday[]>([]);

//   useEffect(() => {
//     loadBirthdays();
//   }, []);

//   const loadBirthdays = async () => {
//     const today = await fetchTodayBirthdays();
//     const tomorrow = await fetchTomorrowBirthdays();
//     setTodayBirthdays(today);
//     setTomorrowBirthdays(tomorrow);
//   };

//   const renderItem = ({ item }: { item: Birthday }) => (
//     <ProfileTile birthday={item} />
//   );

//   return (
//     <ParallaxScrollView
//       headerImage={require('../../assets/images/react-logo.png')}
//       headerBackgroundColor="#3498db"
//       headerHeight={200}
//       renderHeaderContent={() => (
//         <View style={styles.headerContent}>
//           <Text style={styles.headerText}>Birthday Wisher</Text>
//         </View>
//       )}
//     >
//       <ThemedView style={styles.container}>
//         <Text style={styles.sectionTitle}>Today's Birthdays</Text>
//         <FlatList
//           data={todayBirthdays}
//           renderItem={renderItem}
//           keyExtractor={(item) => item.id}
//           ListEmptyComponent={<Text>No birthdays today</Text>}
//         />
//         <View style={styles.separator} />
//         <Text style={styles.sectionTitle}>Tomorrow's Birthdays</Text>
//         <FlatList
//           data={tomorrowBirthdays}
//           renderItem={renderItem}
//           keyExtractor={(item) => item.id}
//           ListEmptyComponent={<Text>No birthdays tomorrow</Text>}
//         />
//       </ThemedView>
//     </ParallaxScrollView>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 20,
//   },
//   headerContent: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   headerText: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     color: 'white',
//   },
//   sectionTitle: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     marginBottom: 10,
//   },
//   separator: {
//     height: 1,
//     backgroundColor: '#ccc',
//     marginVertical: 20,
//   },
// });




// import React, { useState, useEffect } from 'react';
// import { StyleSheet, FlatList, View } from 'react-native';
// import Text  from '../../components/ThemedText';
// import  ThemedView from '../../components/ThemedView';
// import ParallaxScrollView from '../../components/ParallaxScrollView';
// import ProfileTile from '../../components/ProfileTile';
// import { fetchTodayBirthdays, fetchTomorrowBirthdays } from '../../hooks/useBirthdayData';

// interface Birthday {
//   id: string;
//   name: string;
//   date: Date;
//   phone?: string;
// }

// export default function HomeScreen() {
//   const [todayBirthdays, setTodayBirthdays] = useState<Birthday[]>([]);
//   const [tomorrowBirthdays, setTomorrowBirthdays] = useState<Birthday[]>([]);

//   useEffect(() => {
//     loadBirthdays();
//   }, []);

//   const loadBirthdays = async () => {
//     try {
//       const today = await fetchTodayBirthdays();
//       const tomorrow = await fetchTomorrowBirthdays();
//       console.log('Fetched today\'s birthdays:', today);
//       console.log('Fetched tomorrow\'s birthdays:', tomorrow);
//       setTodayBirthdays(today);
//       setTomorrowBirthdays(tomorrow);
//     } catch (error) {
//       console.error('Error fetching birthdays:', error);
//     }
//   };

//   const renderItem = ({ item }: { item: Birthday }) => (
//     <ProfileTile birthday={item} />
//   );

//   return (
//     <ParallaxScrollView
//       headerImage={require('../../assets/images/adaptive-icon.png')}
//       headerBackgroundColor="#3498db"
//       headerHeight={200}
//       renderHeaderContent={() => (
//         <View style={styles.headerContent}>
//           <Text style={styles.headerText}>Birthday Wisher</Text>
//         </View>
//       )}
//     >
//       <ThemedView style={styles.container}>
//         <Text style={styles.sectionTitle}>Today's Birthdays</Text>
//         <FlatList
//           data={todayBirthdays}
//           renderItem={renderItem}
//           keyExtractor={(item) => item.id}
//           ListEmptyComponent={<Text>No birthdays today</Text>}
//         />
//         <View style={styles.separator} />
//         <Text style={styles.sectionTitle}>Tomorrow's Birthdays</Text>
//         <FlatList
//           data={tomorrowBirthdays}
//           renderItem={renderItem}
//           keyExtractor={(item) => item.id}
//           ListEmptyComponent={<Text>No birthdays tomorrow</Text>}
//         />
//       </ThemedView>
//     </ParallaxScrollView>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 20,
//   },
//   headerContent: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   headerText: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     color: 'white',
//   },
//   sectionTitle: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     marginBottom: 10,
//   },
//   separator: {
//     height: 1,
//     backgroundColor: '#ccc',
//     marginVertical: 20,
//   },
// });


// UI
// import React, { useState, useEffect } from 'react';
// import { StyleSheet } from 'react-native';
// import  Text  from '../../components/ThemedText';
// import  View  from '../../components/ThemedView';
// import { ScrollView } from '@/components/ui/scroll-view';
// import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
// import { Button } from '@/components/ui/button';
// import { fetchTodayBirthdays, fetchTomorrowBirthdays } from '../../hooks/useBirthdayData';
// import { Gift, Calendar, Cake } from 'lucide-react';

// interface Birthday {
//   id: string;
//   name: string;
//   date: Date;
//   phone?: string;
// }

// export default function HomeScreen() {
//   const [todayBirthdays, setTodayBirthdays] = useState<Birthday[]>([]);
//   const [tomorrowBirthdays, setTomorrowBirthdays] = useState<Birthday[]>([]);

//   useEffect(() => {
//     loadBirthdays();
//   }, []);

//   const loadBirthdays = async () => {
//     try {
//       const today = await fetchTodayBirthdays();
//       const tomorrow = await fetchTomorrowBirthdays();
//       setTodayBirthdays(today);
//       setTomorrowBirthdays(tomorrow);
//     } catch (error) {
//       console.error('Error fetching birthdays:', error);
//     }
//   };

//   const renderBirthdayList = (birthdays: Birthday[], title: string, icon: React.ReactNode) => (
//     <Card className="mb-4">
//       <CardHeader>
//         <CardTitle className="flex items-center text-primary">
//           {icon}
//           <Text >{title}</Text>
//         </CardTitle>
//       </CardHeader>
//       <CardContent>
//         {birthdays.length > 0 ? (
//           birthdays.map((birthday) => (
//             <View key={birthday.id} >
//               <Text >{birthday.name}</Text>
//               <Button size="sm" variant="outline">
//                 <Gift  />
//                 Wish
//               </Button>
//             </View>
//           ))
//         ) : (
//           <Text >No birthdays</Text>
//         )}
//       </CardContent>
//     </Card>
//   );

//   return (
//     <ScrollView >
//       <View >
//         <Cake />
//         <Text >Birthday Wisher</Text>
//       </View>
//       {renderBirthdayList(todayBirthdays, "Today's Birthdays", <Gift />)}
//       {renderBirthdayList(tomorrowBirthdays, "Tomorrow's Birthdays", <Calendar  />)}
//     </ScrollView>
//   );
// }






// import React, { useState, useEffect } from 'react';
// import { StyleSheet, View, Text } from 'react-native';
// import { Card, CardContent, CardHeader, CardTitle, Button, CustomScrollView } from '../../components/CustomComponents';
// import { fetchTodayBirthdays, fetchTomorrowBirthdays } from '../../hooks/useBirthdayData';

// interface Birthday {
//   id: string;
//   name: string;
//   date: Date;
//   phone?: string;
// }

// export default function HomeScreen() {
//   const [todayBirthdays, setTodayBirthdays] = useState<Birthday[]>([]);
//   const [tomorrowBirthdays, setTomorrowBirthdays] = useState<Birthday[]>([]);

//   useEffect(() => {
//     loadBirthdays();
//   }, []);

//   const loadBirthdays = async () => {
//     try {
//       const today = await fetchTodayBirthdays();
//       const tomorrow = await fetchTomorrowBirthdays();
//       setTodayBirthdays(today);
//       setTomorrowBirthdays(tomorrow);
//     } catch (error) {
//       console.error('Error fetching birthdays:', error);
//     }
//   };

//   const renderBirthdayList = (birthdays: Birthday[], title: string) => (
//     <Card>
//       <CardHeader>
//         <CardTitle>{title}</CardTitle>
//       </CardHeader>
//       <CardContent>
//         {birthdays.length > 0 ? (
//           birthdays.map((birthday) => (
//             <View key={birthday.id} style={styles.birthdayItem}>
//               <Text style={styles.birthdayName}>{birthday.name}</Text>
//               <Button onPress={() => console.log(`Wish ${birthday.name}`)}>
//                 Wish
//               </Button>
//             </View>
//           ))
//         ) : (
//           <Text style={styles.noBirthdays}>No birthdays</Text>
//         )}
//       </CardContent>
//     </Card>
//   );

//   return (
//     <CustomScrollView style={styles.container}>
//       <View style={styles.header}>
//         <Text style={styles.headerText}>Birthday Wisher</Text>
//       </View>
//       {renderBirthdayList(todayBirthdays, "Today's Birthdays")}
//       {renderBirthdayList(tomorrowBirthdays, "Tomorrow's Birthdays")}
//     </CustomScrollView>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#f1f5f9',
//     padding: 16,
//   },
//   header: {
//     alignItems: 'center',
//     marginBottom: 24,
//   },
//   headerText: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     color: '#0ea5e9',
//   },
//   birthdayItem: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     marginBottom: 8,
//   },
//   birthdayName: {
//     fontSize: 16,
//     fontWeight: '600',
//   },
//   noBirthdays: {
//     color: '#64748b',
//   },
// });

// 2
// import React, { useState, useEffect } from 'react';
// import { StyleSheet, View, FlatList, Text } from 'react-native';
// import { CustomScrollView } from '../../components/CustomComponents';
// import ProfileTile from '../../components/ProfileTile';
// import { fetchTodayBirthdays, fetchTomorrowBirthdays } from '../../hooks/useBirthdayData';
// import { Cake } from 'lucide-react';

// interface Birthday {
//   id: string;
//   name: string;
//   date: Date;
//   phone?: string;
// }

// export default function HomeScreen() {
//   const [todayBirthdays, setTodayBirthdays] = useState<Birthday[]>([]);
//   const [tomorrowBirthdays, setTomorrowBirthdays] = useState<Birthday[]>([]);

//   useEffect(() => {
//     loadBirthdays();
//   }, []);

//   const loadBirthdays = async () => {
//     try {
//       const today = await fetchTodayBirthdays();
//       const tomorrow = await fetchTomorrowBirthdays();
//       setTodayBirthdays(today);
//       setTomorrowBirthdays(tomorrow);
//     } catch (error) {
//       console.error('Error fetching birthdays:', error);
//     }
//   };

//   const renderBirthdayList = (birthdays: Birthday[], title: string) => (
//     <View style={styles.card}>
//       <View style={styles.cardHeader}>
//         <Text style={styles.cardTitle}>{title}</Text>
//       </View>
//       <View style={styles.cardContent}>
//         <FlatList
//           data={birthdays}
//           renderItem={({ item }) => <ProfileTile birthday={item} />}
//           keyExtractor={(item) => item.id}
//           ListEmptyComponent={<Text style={styles.emptyText}>No birthdays</Text>}
//         />
//       </View>
//     </View>
//   );

//   return (
//     <CustomScrollView style={styles.container}>
//       <View style={styles.header}>
//         <Cake size={48} color="#0ea5e9" />
//         <Text style={styles.headerText}>Birthday Wisher</Text>
//       </View>
//       {renderBirthdayList(todayBirthdays, "Today's Birthdays")}
//       {renderBirthdayList(tomorrowBirthdays, "Tomorrow's Birthdays")}
//     </CustomScrollView>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#f1f5f9',
//     padding: 16,
//   },
//   header: {
//     alignItems: 'center',
//     marginBottom: 24,
//   },
//   headerText: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     color: '#0ea5e9',
//     marginTop: 8,
//   },
//   card: {
//     backgroundColor: 'white',
//     borderRadius: 8,
//     marginBottom: 16,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.1,
//     shadowRadius: 4,
//     elevation: 3,
//   },
//   cardHeader: {
//     padding: 16,
//     borderBottomWidth: 1,
//     borderBottomColor: '#e2e8f0',
//   },
//   cardTitle: {
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
//   cardContent: {
//     padding: 16,
//   },
//   emptyText: {
//     color: '#64748b',
//   },
// });

// import React, { useState, useEffect } from 'react';
// import { StyleSheet, View, FlatList, Text } from 'react-native';
// import { CustomScrollView } from '../../components/CustomComponents';
// import ProfileTile from '../../components/ProfileTile';
// import { fetchTodayBirthdays, fetchTomorrowBirthdays } from '../../hooks/useBirthdayData';
// import Icon from 'react-native-vector-icons/MaterialIcons';

// export interface Birthday {
//   id: string;
//   name: string;
//   rollNumber: string;
//   phone: string;
//   date: Date;
// }

// export default function HomeScreen() {
//   const [todayBirthdays, setTodayBirthdays] = useState<Birthday[]>([]);
//   const [tomorrowBirthdays, setTomorrowBirthdays] = useState<Birthday[]>([]);

//   useEffect(() => {
//     loadBirthdays();
//   }, []);

//   const loadBirthdays = async () => {
//     try {
//       const today = await fetchTodayBirthdays();
//       const tomorrow = await fetchTomorrowBirthdays();
//       setTodayBirthdays(today);
//       setTomorrowBirthdays(tomorrow);
//     } catch (error) {
//       console.error('Error fetching birthdays:', error);
//     }
//   };

//   const renderBirthdayList = (birthdays: Birthday[], title: string) => (
//     <View style={styles.section}>
//       <Text style={styles.sectionTitle}>{title}</Text>
//       <FlatList
//         data={birthdays}
//         renderItem={({ item, index }) => <ProfileTile birthday={item} index={index} />}
//         keyExtractor={(item) => item.id}
//         ListEmptyComponent={<Text style={styles.emptyText}>No birthdays</Text>}
//       />
//     </View>
//   );

//   return (
//     <CustomScrollView style={styles.container}>
//       <View style={styles.header}>
//         <Icon name="cake" size={48} color="#0ea5e9" />
//         <Text style={styles.headerText}>Birthdays</Text>
//       </View>
//       {renderBirthdayList(todayBirthdays, "Today's Birthdays")}
//       <View style={styles.separator} />
//       {renderBirthdayList(tomorrowBirthdays, "Tomorrow's Birthdays")}
//     </CustomScrollView>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#f1f5f9',
//     padding: 16,
//   },
//   header: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginBottom: 24,
//   },
//   headerText: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     color: '#0ea5e9',
//     marginLeft: 12,
//   },
//   section: {
//     marginBottom: 16,
//   },
//   sectionTitle: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     marginBottom: 8,
//     color: '#334155',
//   },
//   separator: {
//     height: 1,
//     backgroundColor: '#cbd5e1',
//     marginVertical: 16,
//   },
//   emptyText: {
//     color: '#64748b',
//     fontStyle: 'italic',
//   },
// });






import React, { useState, useEffect } from 'react';
import { StyleSheet, View, FlatList, Text } from 'react-native';
import ProfileTile from '../../components/ProfileTile';
import { fetchTodayBirthdays, fetchTomorrowBirthdays } from '../../hooks/useBirthdayData';
import { MaterialIcons } from '@expo/vector-icons';

export interface Birthday {
  id: string;
  name: string;
  rollNumber: string;
  phone: string;
  date: Date;
}

export default function HomeScreen() {
  const [todayBirthdays, setTodayBirthdays] = useState<Birthday[]>([]);
  const [tomorrowBirthdays, setTomorrowBirthdays] = useState<Birthday[]>([]);

  useEffect(() => {
    loadBirthdays();
  }, []);

  const loadBirthdays = async () => {
    try {
      const today = await fetchTodayBirthdays();
      const tomorrow = await fetchTomorrowBirthdays();
      setTodayBirthdays(today);
      setTomorrowBirthdays(tomorrow);
    } catch (error) {
      console.error('Error fetching birthdays:', error);
    }
  };

  const renderItem = ({ item, index }: { item: Birthday; index: number }) => (
    <ProfileTile birthday={item} index={index} />
  );

  const renderSectionHeader = (title: string) => (
    <View style={styles.sectionHeader}>
      <Text style={styles.sectionTitle}>{title}</Text>
    </View>
  );

  const allBirthdays = [
    { title: "Today's Birthdays", data: todayBirthdays },
    { title: "Tomorrow's Birthdays", data: tomorrowBirthdays },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <MaterialIcons name="cake" size={48} color="#0ea5e9" />
        <Text style={styles.headerText}>Birthdays</Text>
      </View>
      <FlatList
        data={allBirthdays}
        renderItem={({ item }) => (
          <>
            {renderSectionHeader(item.title)}
            {item.data.map((birthday, index) => (
              <ProfileTile key={birthday.id} birthday={birthday} index={index} />
            ))}
          </>
        )}
        keyExtractor={(item, index) => `section-${index}`}
        ListHeaderComponent={<View style={styles.separator} />}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
        ListEmptyComponent={<Text style={styles.emptyText}>No birthdays found</Text>}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f1f5f9',
    padding: 16,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 24,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#0ea5e9',
    marginLeft: 12,
  },
  sectionHeader: {
    backgroundColor: '#e2e8f0',
    padding: 8,
    marginTop: 16,
    marginBottom: 8,
    borderRadius: 4,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#334155',
  },
  separator: {
    height: 1,
    backgroundColor: '#cbd5e1',
    marginVertical: 8,
  },
  emptyText: {
    color: '#64748b',
    fontStyle: 'italic',
    textAlign: 'center',
    marginTop: 24,
  },
});