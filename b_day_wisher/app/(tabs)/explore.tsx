// import Ionicons from '@expo/vector-icons/Ionicons';
// import { StyleSheet, Image, Platform } from 'react-native';

// import { Collapsible } from '@/components/Collapsible';
// import { ExternalLink } from '@/components/ExternalLink';
// import ParallaxScrollView from '@/components/ParallaxScrollView';
// import { ThemedText } from '@/components/ThemedText';
// import { ThemedView } from '@/components/ThemedView';

// export default function TabTwoScreen() {
//   return (
//     <ParallaxScrollView
//       headerBackgroundColor={{ light: '#D0D0D0', dark: '#353636' }}
//       headerImage={<Ionicons size={310} name="code-slash" style={styles.headerImage} />}>
//       <ThemedView style={styles.titleContainer}>
//         <ThemedText type="title">Explore</ThemedText>
//       </ThemedView>
//       <ThemedText>This app includes example code to help you get started.</ThemedText>
//       <Collapsible title="File-based routing">
//         <ThemedText>
//           This app has two screens:{' '}
//           <ThemedText type="defaultSemiBold">app/(tabs)/index.tsx</ThemedText> and{' '}
//           <ThemedText type="defaultSemiBold">app/(tabs)/explore.tsx</ThemedText>
//         </ThemedText>
//         <ThemedText>
//           The layout file in <ThemedText type="defaultSemiBold">app/(tabs)/_layout.tsx</ThemedText>{' '}
//           sets up the tab navigator.
//         </ThemedText>
//         <ExternalLink href="https://docs.expo.dev/router/introduction">
//           <ThemedText type="link">Learn more</ThemedText>
//         </ExternalLink>
//       </Collapsible>
//       <Collapsible title="Android, iOS, and web support">
//         <ThemedText>
//           You can open this project on Android, iOS, and the web. To open the web version, press{' '}
//           <ThemedText type="defaultSemiBold">w</ThemedText> in the terminal running this project.
//         </ThemedText>
//       </Collapsible>
//       <Collapsible title="Images">
//         <ThemedText>
//           For static images, you can use the <ThemedText type="defaultSemiBold">@2x</ThemedText> and{' '}
//           <ThemedText type="defaultSemiBold">@3x</ThemedText> suffixes to provide files for
//           different screen densities
//         </ThemedText>
//         <Image source={require('@/assets/images/react-logo.png')} style={{ alignSelf: 'center' }} />
//         <ExternalLink href="https://reactnative.dev/docs/images">
//           <ThemedText type="link">Learn more</ThemedText>
//         </ExternalLink>
//       </Collapsible>
//       <Collapsible title="Custom fonts">
//         <ThemedText>
//           Open <ThemedText type="defaultSemiBold">app/_layout.tsx</ThemedText> to see how to load{' '}
//           <ThemedText style={{ fontFamily: 'SpaceMono' }}>
//             custom fonts such as this one.
//           </ThemedText>
//         </ThemedText>
//         <ExternalLink href="https://docs.expo.dev/versions/latest/sdk/font">
//           <ThemedText type="link">Learn more</ThemedText>
//         </ExternalLink>
//       </Collapsible>
//       <Collapsible title="Light and dark mode components">
//         <ThemedText>
//           This template has light and dark mode support. The{' '}
//           <ThemedText type="defaultSemiBold">useColorScheme()</ThemedText> hook lets you inspect
//           what the user's current color scheme is, and so you can adjust UI colors accordingly.
//         </ThemedText>
//         <ExternalLink href="https://docs.expo.dev/develop/user-interface/color-themes/">
//           <ThemedText type="link">Learn more</ThemedText>
//         </ExternalLink>
//       </Collapsible>
//       <Collapsible title="Animations">
//         <ThemedText>
//           This template includes an example of an animated component. The{' '}
//           <ThemedText type="defaultSemiBold">components/HelloWave.tsx</ThemedText> component uses
//           the powerful <ThemedText type="defaultSemiBold">react-native-reanimated</ThemedText> library
//           to create a waving hand animation.
//         </ThemedText>
//         {Platform.select({
//           ios: (
//             <ThemedText>
//               The <ThemedText type="defaultSemiBold">components/ParallaxScrollView.tsx</ThemedText>{' '}
//               component provides a parallax effect for the header image.
//             </ThemedText>
//           ),
//         })}
//       </Collapsible>
//     </ParallaxScrollView>
//   );
// }

// const styles = StyleSheet.create({
//   headerImage: {
//     color: '#808080',
//     bottom: -90,
//     left: -35,
//     position: 'absolute',
//   },
//   titleContainer: {
//     flexDirection: 'row',
//     gap: 8,
//   },
// });



// working
// import React, { useState } from 'react';
// import { StyleSheet, FlatList } from 'react-native';
// import Text from '../../components/ThemedText';
// import View from '../../components/ThemedView';
// import DateTimePicker, { DateTimePickerEvent } from '@react-native-community/datetimepicker';
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

// export default function ExploreScreen() {
//   const [date, setDate] = useState<Date>(new Date());
//   const [students, setStudents] = useState<Student[]>([]);

//   const onChange = (event: DateTimePickerEvent, selectedDate?: Date) => {
//     const currentDate = selectedDate || date;
//     setDate(currentDate);
//     // Fetch students with birthdays on the selected date
//     // For now, we'll just use the mock data
//     setStudents(mockData);
//   };

//   const handleSaveProfile = (id: string) => {
//     // Save profile to Sheet 2
//     console.log('Saving profile:', id);
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Explore Birthdays</Text>
//       <DateTimePicker
//         testID="dateTimePicker"
//         value={date}
//         mode="date"
//         display="default"
//         onChange={onChange}
//       />
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





// import React, { useState } from 'react';
// import { StyleSheet, FlatList } from 'react-native';
// import Text from '../../components/ThemedText';
// import View from '../../components/ThemedView';
// import Collapsible from '../../components/Collapsible';
// import ProfileTile from '../../components/ProfileTile';
// import { fetchBirthdaysByDate } from '../../hooks/useBirthdayData';
// import DateTimePicker from '@react-native-community/datetimepicker';

// interface Birthday {
//   id: string;
//   name: string;
//   date: Date;
// }

// export default function ExploreScreen() {
//   const [selectedDate, setSelectedDate] = useState(new Date());
//   const [birthdays, setBirthdays] = useState<Birthday[]>([]);

//   const handleDateChange = async (event: any, date?: Date) => {
//     if (date) {
//       setSelectedDate(date);
//       const birthdaysForDate = await fetchBirthdaysByDate(date);
//       setBirthdays(birthdaysForDate);
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <Collapsible title="Select Date">
//         <DateTimePicker
//           value={selectedDate}
//           mode="date"
//           display="default"
//           onChange={handleDateChange}
//         />
//       </Collapsible>
//       <FlatList
//         data={birthdays}
//         renderItem={({ item }) => <ProfileTile birthday={item} />}
//         keyExtractor={(item) => item.id}
//         ListEmptyComponent={<Text>No birthdays on this date</Text>}
//       />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 20,
//   },
// });


// UI
// import React, { useState } from 'react';
// import { StyleSheet } from 'react-native';
// import  Text  from '../../components/ThemedText';
// import View from '../../components/ThemedView';
// import { ScrollView } from '../../components/ThemedScrollView';
// import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
// import { Button } from '@/components/ui/button';
// import { Calendar } from '@/components/ui/calendar';
// import { fetchBirthdaysByDate } from '../../hooks/useBirthdayData';
// import { Search, Gift, CalendarDays } from 'lucide-react';

// interface Birthday {
//   id: string;
//   name: string;
//   date: Date;
//   phone?: string;
// }

// export default function ExploreScreen() {
//   const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date());
//   const [birthdays, setBirthdays] = useState<Birthday[]>([]);

//   const handleDateSelect = async (date: Date | undefined) => {
//     if (date) {
//       setSelectedDate(date);
//       const birthdaysForDate = await fetchBirthdaysByDate(date);
//       setBirthdays(birthdaysForDate);
//     }
//   };

//   return (
//     <ScrollView >
//       <View >
//         <Search  />
//         <Text >Explore Birthdays</Text>
//       </View>
//       <Card >
//         <CardHeader>
//           <CardTitle >
//             <CalendarDays  />
//             <Text >Select Date</Text>
//           </CardTitle>
//         </CardHeader>
//         <CardContent>
//           <Calendar
//             mode="single"
//             selected={selectedDate}
//             onSelect={handleDateSelect}
//           />
//         </CardContent>
//       </Card>
//       <Card>
//         <CardHeader>
//           <CardTitle >
//             <Gift />
//             <Text >Birthdays on Selected Date</Text>
//           </CardTitle>
//         </CardHeader>
//         <CardContent>
//           {birthdays.length > 0 ? (
//             birthdays.map((birthday) => (
//               <View key={birthday.id} >
//                 <Text >{birthday.name}</Text>
//                 <Button size="sm" variant="outline">
//                   <Gift  />
//                   Wish
//                 </Button>
//               </View>
//             ))
//           ) : (
//             <Text >No birthdays on this date</Text>
//           )}
//         </CardContent>
//       </Card>
//     </ScrollView>
//   );
// }







// ^
// import React, { useState } from 'react';
// import { StyleSheet, View, FlatList, Text } from 'react-native';
// import { Card, CardContent, CardHeader, CardTitle, Button } from '../../components/CustomComponents';
// import ProfileTile from '../../components/ProfileTile';
// import { fetchBirthdaysByDate } from '../../hooks/useBirthdayData';
// import DateTimePicker, { DateTimePickerEvent } from '@react-native-community/datetimepicker';
// import { Birthday } from './index';

// export default function ExploreScreen() {
//   const [selectedDate, setSelectedDate] = useState<Date>(new Date());
//   const [birthdays, setBirthdays] = useState<Birthday[]>([]);

//   const handleDateSelect = async (event: DateTimePickerEvent, date?: Date) => {
//     if (event.type === 'set' && date) {
//       setSelectedDate(date);
//       const birthdaysForDate = await fetchBirthdaysByDate(date);
//       setBirthdays(birthdaysForDate);
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <FlatList
//         data={birthdays}
//         ListHeaderComponent={
//           <>
//             <View style={styles.header}>
//               <Text style={styles.headerText}>Explore Birthdays</Text>
//             </View>
//             <Card>
//               <CardHeader>
//                 <CardTitle>Select Date</CardTitle>
//               </CardHeader>
//               <CardContent>
//                 <DateTimePicker
//                   value={selectedDate}
//                   mode="date"
//                   display="default"
//                   onChange={handleDateSelect}
//                 />
//               </CardContent>
//             </Card>
//             <Card>
//               <CardHeader>
//                 <CardTitle>Birthdays on Selected Date</CardTitle>
//               </CardHeader>
//             </Card>
//           </>
//         }
//         renderItem={({ item, index }) => <ProfileTile birthday={item} index={index} />}
//         keyExtractor={(item) => item.id}
//         ListEmptyComponent={<Text style={styles.emptyText}>No birthdays on this date</Text>}
//       />
//     </View>
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
//   emptyText: {
//     color: '#64748b',
//     fontStyle: 'italic',
//   },
// });






// ^ visualized list
// import React, { useState } from 'react';
// import { StyleSheet, View, FlatList, Text, TouchableOpacity } from 'react-native';
// import { Card, CardContent, CardHeader, CardTitle, CustomScrollView } from '../../components/CustomComponents';
// import ProfileTile from '../../components/ProfileTile';
// import { fetchBirthdaysByDate } from '../../hooks/useBirthdayData';
// import DateTimePicker from '@react-native-community/datetimepicker';
// import { MaterialIcons } from '@expo/vector-icons';
// import { Birthday } from './index';

// export default function ExploreScreen() {
//   const [selectedDate, setSelectedDate] = useState<Date | null>(null);
//   const [birthdays, setBirthdays] = useState<Birthday[]>([]);
//   const [showDatePicker, setShowDatePicker] = useState(false);

//   const handleDateSelect = async (event: any, date?: Date) => {
//     setShowDatePicker(false);
//     if (date) {
//       setSelectedDate(date);
//       const birthdaysForDate = await fetchBirthdaysByDate(date);
//       setBirthdays(birthdaysForDate);
//     }
//   };

//   const formattedDate = selectedDate
//     ? selectedDate.toLocaleDateString()
//     : 'No date selected';

//   return (
//     <CustomScrollView style={styles.container}>
//       <View style={styles.header}>
//         <Text style={styles.headerText}>Explore Birthdays</Text>
//       </View>
//       <Card>
//         <CardHeader style={styles.centered}>
//           <CardTitle>Select Date</CardTitle>
//         </CardHeader>
//         <CardContent style={styles.centered}>
//           <TouchableOpacity onPress={() => setShowDatePicker(true)}>
//             <MaterialIcons name="calendar-today" size={24} color="#0ea5e9" />
//           </TouchableOpacity>
//           <Text style={styles.dateText}>{formattedDate}</Text>
//         </CardContent>
//       </Card>
//       <Card>
//         <CardHeader style={styles.centered}>
//           <CardTitle>{selectedDate ? `${formattedDate}'s Birthdays` : 'Birthdays on Selected Date'}</CardTitle>
//         </CardHeader>
//         <CardContent style={styles.centered}>
//           <FlatList
//             data={birthdays}
//             renderItem={({ item, index }) => <ProfileTile birthday={item} index={index} />}
//             keyExtractor={(item) => item.id}
//             ListEmptyComponent={
//               <Text style={styles.emptyText}>
//                 {selectedDate ? 'No birthdays for selected date' : 'x select a date'}
//               </Text>
//             }
//           />
//         </CardContent>
//       </Card>
//       {showDatePicker && (
//         <DateTimePicker
//           value={selectedDate || new Date()}
//           mode="date"
//           display="default"
//           onChange={handleDateSelect}
//         />
//       )}
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
//   centered: {
//     alignItems: 'center',
//   },
//   dateText: {
//     fontSize: 16,
//     marginTop: 8,
//     color: '#0ea5e9',
//     fontWeight: '600',
//   },
//   emptyText: {
//     fontSize: 16,
//     color: '#64748b',
//     fontStyle: 'italic',
//     textAlign: 'center',
//     marginTop: 20,
//   },
// });






// Basic Final
import React, { useState } from 'react';
import { StyleSheet, View, FlatList, Text, TouchableOpacity } from 'react-native';
import { Card, CardContent, CardHeader, CardTitle } from '../../components/CustomComponents';
import ProfileTile from '../../components/ProfileTile';
import { fetchBirthdaysByDate } from '../../hooks/useBirthdayData';
import DateTimePicker from '@react-native-community/datetimepicker';
import { MaterialIcons } from '@expo/vector-icons';
import { Student } from './index';

export default function ExploreScreen() {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [birthdays, setBirthdays] = useState<Student[]>([]);
  const [showDatePicker, setShowDatePicker] = useState(false);

  const handleDateSelect = async (event: any, date?: Date) => {
    setShowDatePicker(false);
    if (date) {
      setSelectedDate(date);
      const birthdaysForDate = await fetchBirthdaysByDate(date);
      setBirthdays(birthdaysForDate);
    }
  };

  const formattedDate = selectedDate
    ? selectedDate.toLocaleDateString()
    : 'No date selected';

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Explore Birthdays</Text>
      </View>
      <Card style={styles.fullWidthCard}>
        <CardHeader style={styles.centered}>
          <CardTitle>Select Date</CardTitle>
        </CardHeader>
        <CardContent style={styles.centered}>
          <TouchableOpacity onPress={() => setShowDatePicker(true)}>
            <MaterialIcons name="calendar-today" size={24} color="#0ea5e9" />
          </TouchableOpacity>
          <Text style={styles.dateText}>{formattedDate}</Text>
        </CardContent>
      </Card>
      <Card style={styles.fullWidthCard}>
        <CardHeader >
          <CardTitle>{selectedDate ? `${formattedDate}'s Birthdays` : 'Birthdays on Selected Date'}</CardTitle>
        </CardHeader>
        <CardContent >
          <FlatList
            contentContainerStyle={styles.flatListContainer}
            data={birthdays}
            renderItem={({ item, index }) => <ProfileTile student={item} index={index} />}
            keyExtractor={(item) => item.rollNo}
            ListEmptyComponent={
              <Text style={styles.emptyText}>
                {selectedDate ? 'No birthdays for selected date' : 'Please select a date'}
              </Text>
            }
          />
        </CardContent>
      </Card>
      {showDatePicker && (
        <DateTimePicker
          value={selectedDate || new Date()}
          mode="date"
          display="default"
          onChange={handleDateSelect}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  flatListContainer: {
    paddingHorizontal: 0, // Remove padding if necessary
    // alignItems: 'center', // Center items in the FlatList if needed
  },
  container: {
    flex: 1,
    backgroundColor: '#f1f5f9',
    padding: 16,
  },
  header: {
    alignItems: 'center',
    marginBottom: 24,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#0ea5e9',
  },
  centered: {
    alignItems: 'center',
    margin: 0,
    padding: 0,
  },
  fullWidthCard: {
    width: '100%', // Ensure full width for cards
  },
  profileTile: {
    width: '100%', // Set the desired width for ProfileTile
    marginVertical: 8, // Optional: Add vertical spacing between tiles
  },
  dateText: {
    fontSize: 16,
    marginTop: 8,
    color: '#0ea5e9',
    fontWeight: '600',
  },
  emptyText: {
    fontSize: 16,
    color: '#64748b',
    fontStyle: 'italic',
    textAlign: 'center',
    marginTop: 20,
  },
});
