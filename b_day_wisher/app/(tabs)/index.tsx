// Basic Final
import React, { useState, useEffect } from 'react';
import { StyleSheet, View, FlatList, Text } from 'react-native';
import ProfileTile from '../../components/ProfileTile';
import { fetchTodayBirthdays, fetchTomorrowBirthdays } from '../../hooks/useBirthdayData';
import { MaterialIcons } from '@expo/vector-icons';

export interface Student {
  rollNo: string;
  roomNo: string;
  fullName: string;
  birthDate: Date;
  mobileNo: string;
  degree: string;
  fieldOfStudy: string;
}

export default function HomeScreen() {
  const [todayBirthdays, setTodayBirthdays] = useState<Student[]>([]);
  const [tomorrowBirthdays, setTomorrowBirthdays] = useState<Student[]>([]);

  useEffect(() => {
    loadBirthdays();
  }, []);

  const loadBirthdays = async () => {
    try {
      const today = await fetchTodayBirthdays();
      const tomorrow = await fetchTomorrowBirthdays();
      setTodayBirthdays(today);
      
      console.log("today", today);

      setTomorrowBirthdays(tomorrow);

      console.log("tomorrow", tomorrow);

    } catch (error) {
      console.error('Error fetching birthdays:', error);
    }
  };

  const renderSectionHeader = (title: string) => (
    <View style={styles.sectionHeader}>
      <Text style={styles.sectionTitle}>{title}</Text>
    </View>
  );

  const allBirthdays = [
    { title: "Today's Birthdays", data: todayBirthdays },
    { title: "Tomorrow's Birthdays", data: tomorrowBirthdays },
  ];

  console.log("allBirthdays", allBirthdays);

  {allBirthdays.map((section, sectionIndex) => (
    <View key={`section-${sectionIndex}`}>
      {renderSectionHeader(section.title)}
      {section.data.map((student, index) => (
        <ProfileTile key={student.rollNo} student={student} index={index} />
      ))}
    </View>
  ))}
  

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
            {item.data.map((student, index) => (
              <ProfileTile key={`${student.rollNo}`}  student={student} index={index} />
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



// *
// import React, { useState, useEffect } from 'react';
// import { StyleSheet, View, FlatList, Text, ActivityIndicator } from 'react-native';
// import ProfileTile from '../../components/ProfileTile';
// import { fetchTodayBirthdays, fetchTomorrowBirthdays } from '../../hooks/useBirthdayData';
// import { MaterialIcons } from '@expo/vector-icons';

// export interface Student {
//   id: string;
//   roll: string;
//   room: string;
//   fullName: string;
//   birthdate: Date;
//   mobile: string;
//   degree: string;
//   fieldOfStudy: string;
// }

// export default function HomeScreen() {
//   const [todayBirthdays, setTodayBirthdays] = useState<Student[]>([]);
//   const [tomorrowBirthdays, setTomorrowBirthdays] = useState<Student[]>([]);
//   const [isLoading, setIsLoading] = useState(true);
//   const [error, setError] = useState<string | null>(null);

//   useEffect(() => {
//     loadBirthdays();
//   }, []);

//   const loadBirthdays = async () => {
//     try {
//       setIsLoading(true);
//       setError(null);
//       const today = await fetchTodayBirthdays();
//       const tomorrow = await fetchTomorrowBirthdays();
//       console.log('Today birthdays:', today);
//       console.log('Tomorrow birthdays:', tomorrow);
//       setTodayBirthdays(today);
//       setTomorrowBirthdays(tomorrow);
//     } catch (error) {
//       console.error('Error fetching birthdays:', error);
//       setError('Failed to load birthdays. Please try again.');
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const renderSectionHeader = (title: string) => (
//     <View style={styles.sectionHeader}>
//       <Text style={styles.sectionTitle}>{title}</Text>
//     </View>
//   );

//   const allBirthdays = [
//     { title: "Today's Birthdays", data: todayBirthdays },
//     { title: "Tomorrow's Birthdays", data: tomorrowBirthdays },
//   ];

//   console.log("allBirthdays", JSON.stringify(allBirthdays, null, 2));

//   const renderItem = ({ item, index: sectionIndex }: { item: { title: string; data: Student[] }, index: number }) => (
//     <View key={`section-${sectionIndex}`}>
//       {renderSectionHeader(item.title)}
//       {item.data.map((student, index) => (
//         <ProfileTile 
//           key={`${sectionIndex}-${student.id}-${index}`} 
//           student={student} 
//           index={index} 
//         />
//       ))}
//     </View>
//   );

//   if (isLoading) {
//     return (
//       <View style={[styles.container, styles.centered]}>
//         <ActivityIndicator size="large" color="#0ea5e9" />
//       </View>
//     );
//   }

//   if (error) {
//     return (
//       <View style={[styles.container, styles.centered]}>
//         <Text style={styles.errorText}>{error}</Text>
//       </View>
//     );
//   }

//   return (
//     <View style={styles.container}>
//       <View style={styles.header}>
//         <MaterialIcons name="cake" size={48} color="#0ea5e9" />
//         <Text style={styles.headerText}>Birthdays</Text>
//       </View>
//       <FlatList
//         data={allBirthdays}
//         renderItem={renderItem}
//         keyExtractor={(item, index) => `section-${index}`}
//         ListHeaderComponent={<View style={styles.separator} />}
//         ItemSeparatorComponent={() => <View style={styles.separator} />}
//         ListEmptyComponent={<Text style={styles.emptyText}>No birthdays found</Text>}
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
//   centered: {
//     justifyContent: 'center',
//     alignItems: 'center',
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
//   sectionHeader: {
//     backgroundColor: '#e2e8f0',
//     padding: 8,
//     marginTop: 16,
//     marginBottom: 8,
//     borderRadius: 4,
//   },
//   sectionTitle: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     color: '#334155',
//   },
//   separator: {
//     height: 1,
//     backgroundColor: '#cbd5e1',
//     marginVertical: 8,
//   },
//   emptyText: {
//     color: '#64748b',
//     fontStyle: 'italic',
//     textAlign: 'center',
//     marginTop: 24,
//   },
//   errorText: {
//     color: '#ef4444',
//     fontSize: 16,
//     textAlign: 'center',
//   },
// });