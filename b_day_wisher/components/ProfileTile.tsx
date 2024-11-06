// Basic Final
// import React from 'react';
// import { View, StyleSheet, Linking, TouchableOpacity, Text, Alert } from 'react-native';
// import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
// import { Student } from '../app/(tabs)/index';

// interface ProfileTileProps {
//   student: Student;
//   index: number;
// }

// const colors = [
//   { dark: '#1e40af', light: '#3b82f6' },
//   { dark: '#b91c1c', light: '#ef4444' },
//   { dark: '#047857', light: '#10b981' },
//   { dark: '#7c2d12', light: '#f97316' },
//   { dark: '#6b21a8', light: '#a855f7' },
// ];

// export default function ProfileTile({ student, index }: ProfileTileProps) {
//   const color = colors[index % colors.length];

//   const handleCall = () => {
//     if (student.mobile && student.mobile.trim() !== '') {
//       const phoneNumber = student.mobile.replace(/\D/g, ''); // Remove non-digit characters
//       Linking.openURL(`tel:${phoneNumber}`).catch(err => console.error('An error occurred', err));
//     } else {
//       console.log('Phone number is not available');
//       Alert.alert('Error', 'Phone number is not available');
//     }
//   };

//   const handleWhatsApp = () => {
//     if (student.mobile && student.mobile.trim() !== '') {
//       const phoneNumber = student.mobile.replace(/\D/g, ''); // Remove non-digit characters
//       Linking.openURL(`whatsapp://send?phone=${phoneNumber}&text=Happy Birthday!`).catch(err => console.error('An error occurred', err));
//     } else {
//       console.log('Phone number is not available');
//       Alert.alert('Error', 'Phone number is not available');
//     }
//   };

//   return (
//     <View style={[styles.card, { backgroundColor: color.dark, borderColor: color.light }]}>
//       <View style={styles.content}>
//         <View style={styles.infoContainer}>
//           <Text style={styles.name}>{student.fullName}</Text>
//           <Text style={styles.info}>Roll: {student.roll}</Text>
//           <Text style={styles.info}>Room: {student.room}</Text>
//           <Text style={styles.info}>Birthdate: {new Date(student.birthdate).toLocaleDateString()}</Text>
//           <Text style={styles.info}>Mobile: {student.mobile || 'N/A'}</Text>
//           <Text style={styles.info}>Degree: {student.degree}</Text>
//           <Text style={styles.info}>Field of Study: {student.fieldOfStudy}</Text>
//         </View>
//         <View style={styles.iconContainer}>
//           <TouchableOpacity onPress={handleCall} style={styles.iconButton}>
//             <MaterialIcons name="call" size={24} color="white" />
//           </TouchableOpacity>
//           <TouchableOpacity onPress={handleWhatsApp} style={styles.iconButton}>
//             <MaterialCommunityIcons name="whatsapp" size={24} color="white" />
//           </TouchableOpacity>
//         </View>
//       </View>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   card: {
//     borderRadius: 8,
//     marginBottom: 16,
//     borderWidth: 2,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.1,
//     shadowRadius: 4,
//     elevation: 3,
//   },
//   content: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'flex-start',
//     padding: 16,
//   },
//   infoContainer: {
//     flex: 1,
//   },
//   name: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     color: 'white',
//     marginBottom: 4,
//   },
//   info: {
//     fontSize: 14,
//     color: 'rgba(255, 255, 255, 0.8)',
//     marginBottom: 2,
//   },
//   iconContainer: {
//     flexDirection: 'column',
//     justifyContent: 'center',
//     marginLeft: 16,
//   },
//   iconButton: {
//     padding: 8,
//     marginBottom: 8,
//     backgroundColor: 'rgba(255, 255, 255, 0.2)',
//     borderRadius: 20,
//   },
// });




// Final
// import React from 'react';
// import { View, StyleSheet, Linking, TouchableOpacity, Text, Alert } from 'react-native';
// import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
// import { Student } from '../app/(tabs)/index';

// interface ProfileTileProps {
//   student: Student;
//   index: number;
// }

// const colors = [
//   { dark: '#1e40af', light: '#3b82f6' },
//   { dark: '#b91c1c', light: '#ef4444' },
//   { dark: '#047857', light: '#10b981' },
//   { dark: '#7c2d12', light: '#f97316' },
//   { dark: '#6b21a8', light: '#a855f7' },
// ];

// export default function ProfileTile({ student, index }: ProfileTileProps) {
//   const color = colors[index % colors.length];

//   console.log('ProfileTile rendering with student:', student); // Add this line for debugging

//   const handleCall = () => {
//     console.log("call student.mobileNo", student.mobileNo);

//     // if (student.mobileNo && student.mobileNo.trim() !== '') {
//       if (student.mobileNo && (typeof student.mobileNo === 'string' || typeof student.mobileNo === 'number')) {
//         // const mobileNumber = student.mobileNo.replace(/\D/g, '');
//         const mobileNumber = student.mobileNo;
//         console.log("call to", mobileNumber);
//       Linking.openURL(`tel:${mobileNumber}`).catch(err => console.error('An error occurred', err));
//     } else {
//       console.log('Mobile number is not available');
//       Alert.alert('Error', 'Mobile number is not available');
//     }
//   };

//   const handleWhatsApp = () => {
//     console.log("whatsapp student.mobileNo", student.mobileNo);

//     // if (student.mobileNo && student.mobileNo.trim() !== '') {
//     //   const mobileNumber = student.mobileNo.replace(/\D/g, '');
//     if (student.mobileNo && (typeof student.mobileNo === 'string' || typeof student.mobileNo === 'number')) {
//       // const mobileNumber = student.mobileNo.replace(/\D/g, '');
//       const mobileNumber = student.mobileNo;
//       console.log("call to", mobileNumber);
//       Linking.openURL(`whatsapp://send?phone=${mobileNumber}&text=Happy Birthday!`).catch(err => console.error('An error occurred', err));
//     } else {
//       console.log('Mobile number is not available');
//       Alert.alert('Error', 'Mobile number is not available');
//     }
//   };

//   return (
//     <View style={[styles.card, { backgroundColor: color.dark, borderColor: color.light }]}>
//       <View style={styles.content}>
//         <View style={styles.infoContainer}>
//           <Text style={styles.name}>{student.fullName}</Text>
//           <Text style={styles.info}>Roll: {student.rollNo}</Text>
//           <Text style={styles.info}>Room: {student.roomNo}</Text>
//           <Text style={styles.info}>Birthdate: {new Date(student.birthDate).toLocaleDateString()}</Text>
//           <Text style={styles.info}>Mobile: {student.mobileNo || 'N/A'}</Text>
//           <Text style={styles.info}>Degree: {student.degree}</Text>
//           <Text style={styles.info}>Field of Study: {student.fieldOfStudy}</Text>
//         </View>
//         <View style={styles.iconContainer}>
//           <TouchableOpacity onPress={handleCall} style={styles.iconButton}>
//             <MaterialIcons name="call" size={24} color="white" />
//           </TouchableOpacity>
//           <TouchableOpacity onPress={handleWhatsApp} style={styles.iconButton}>
//             <MaterialCommunityIcons name="whatsapp" size={28} color="white" />
//           </TouchableOpacity>
//         </View>
//       </View>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   card: {
//     borderRadius: 8,
//     marginBottom: 16,
//     borderWidth: 2,
//     elevation: 3,
//   },
//   content: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'flex-start',
//     padding: 16,
//   },
//   infoContainer: {
//     flex: 1,
//   },
//   name: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     color: 'white',
//     marginBottom: 4,
//   },
//   info: {
//     fontSize: 14,
//     color: 'rgba(255, 255, 255, 0.8)',
//     marginBottom: 2,
//   },
//   iconContainer: {
//     flexDirection: 'column',
//     justifyContent: 'center',
//     marginLeft: 16,
//   },
//   iconButton: {
//     padding: 8,
//     marginBottom: 8,
//     backgroundColor: 'rgba(255, 255, 255, 0.2)',
//     borderRadius: 20,
//   },
// });






// v0
// import React, { useRef, useState } from 'react';
// import { View, StyleSheet, Linking, TouchableOpacity, Text, Alert, Animated, PanResponder, Dimensions } from 'react-native';
// import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
// import { Student } from '../app/(tabs)/index';

// interface ProfileTileProps {
//   student: Student;
//   index: number;
//   onSave: (student: Student) => void;
// }

// const SCREEN_WIDTH = Dimensions.get('window').width;
// const SWIPE_THRESHOLD = -100;

// const colors = [
//   { dark: '#1e40af', light: '#3b82f6' },
//   { dark: '#b91c1c', light: '#ef4444' },
//   { dark: '#047857', light: '#10b981' },
//   { dark: '#7c2d12', light: '#f97316' },
//   { dark: '#6b21a8', light: '#a855f7' },
// ];

// export default function ProfileTile({ student, index, onSave }: ProfileTileProps) {
//   const color = colors[index % colors.length];
//   const [isSaved, setIsSaved] = useState(false);

//   const position = useRef(new Animated.Value(0)).current;

//   const panResponder = PanResponder.create({
//     onStartShouldSetPanResponder: () => true,
//     onPanResponderMove: (_, gesture) => {
//       if (gesture.dx < 0) {
//         position.setValue(gesture.dx);
//       }
//     },
//     onPanResponderRelease: (_, gesture) => {
//       if (gesture.dx < SWIPE_THRESHOLD) {
//         Animated.spring(position, {
//           toValue: -100,
//           useNativeDriver: true,
//         }).start();
//       } else {
//         Animated.spring(position, {
//           toValue: 0,
//           useNativeDriver: true,
//         }).start();
//       }
//     },
//   });

//   const formatMobileNumber = (mobileNo: string | number | undefined): string => {
//     if (mobileNo === undefined) return '';
//     const stringMobile = typeof mobileNo === 'number' ? mobileNo.toString() : mobileNo;
//     const cleanedNumber = stringMobile.replace(/\D/g, '');
//     return cleanedNumber.startsWith('91') ? `+${cleanedNumber}` : cleanedNumber;
//   };

//   const handleCall = () => {
//     const mobileNumber = formatMobileNumber(student.mobileNo);
//     if (mobileNumber) {
//       Linking.openURL(`tel:${mobileNumber}`).catch(err => console.error('An error occurred', err));
//     } else {
//       Alert.alert('Error', 'Mobile number is not available');
//     }
//   };

//   const handleWhatsApp = () => {
//     const mobileNumber = formatMobileNumber(student.mobileNo);
//     if (mobileNumber) {
//       Linking.openURL(`whatsapp://send?phone=${mobileNumber}&text=Happy Birthday!`).catch(err => console.error('An error occurred', err));
//     } else {
//       Alert.alert('Error', 'Mobile number is not available');
//     }
//   };

//   const handleSave = () => {
//     onSave(student);
//     setIsSaved(true);
//     Alert.alert('Success', 'Student data saved successfully!');
//     Animated.spring(position, {
//       toValue: 0,
//       useNativeDriver: true,
//     }).start();
//   };

//   return (
//     <View style={styles.container}>
//       <Animated.View
//         style={[
//           styles.card,
//           { backgroundColor: color.dark, borderColor: color.light },
//           { transform: [{ translateX: position }] },
//         ]}
//         {...panResponder.panHandlers}
//       >
//         <View style={styles.content}>
//           <View style={styles.infoContainer}>
//             <Text style={styles.name}>{student.fullName}</Text>
//             <Text style={styles.info}>Roll: {student.rollNo}</Text>
//             <Text style={styles.info}>Room: {student.roomNo}</Text>
//             <Text style={styles.info}>Birthdate: {new Date(student.birthDate).toLocaleDateString()}</Text>
//             <Text style={styles.info}>Mobile: {formatMobileNumber(student.mobileNo) || 'N/A'}</Text>
//             <Text style={styles.info}>Degree: {student.degree}</Text>
//             <Text style={styles.info}>Field of Study: {student.fieldOfStudy}</Text>
//           </View>
//           <View style={styles.iconContainer}>
//             <TouchableOpacity onPress={handleCall} style={styles.iconButton}>
//               <MaterialIcons name="call" size={24} color="white" />
//             </TouchableOpacity>
//             <TouchableOpacity onPress={handleWhatsApp} style={styles.iconButton}>
//               <MaterialCommunityIcons name="whatsapp" size={28} color="white" />
//             </TouchableOpacity>
//           </View>
//         </View>
//       </Animated.View>
//       <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
//         <MaterialIcons name={isSaved ? "check" : "save"} size={24} color="white" />
//       </TouchableOpacity>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     marginBottom: 16,
//   },
//   card: {
//     borderRadius: 8,
//     borderWidth: 2,
//     elevation: 3,
//     zIndex: 1,
//   },
//   content: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'flex-start',
//     padding: 16,
//   },
//   infoContainer: {
//     flex: 1,
//   },
//   name: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     color: 'white',
//     marginBottom: 4,
//   },
//   info: {
//     fontSize: 14,
//     color: 'rgba(255, 255, 255, 0.8)',
//     marginBottom: 2,
//   },
//   iconContainer: {
//     flexDirection: 'column',
//     justifyContent: 'center',
//     marginLeft: 16,
//   },
//   iconButton: {
//     padding: 8,
//     marginBottom: 8,
//     backgroundColor: 'rgba(255, 255, 255, 0.2)',
//     borderRadius: 20,
//   },
//   saveButton: {
//     position: 'absolute',
//     right: 0,
//     top: 0,
//     bottom: 0,
//     width: 100,
//     backgroundColor: '#22c55e',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
// });






// chatGPT
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { GestureHandlerRootView, Swipeable } from 'react-native-gesture-handler';
import { saveStudentData } from '../hooks/useBirthdayData'; // Ensure correct import path
import { Student } from '../app/(tabs)/index'; // Ensure correct import path

interface ProfileTileProps {
  student: Student;
  index: number;
}

const ProfileTile: React.FC<ProfileTileProps> = ({ student, index }) => {
  const handleSave = async () => {
    try {
      await saveStudentData(student);
      Alert.alert('Save Success', `Data saved successfully for ${student.fullName}`);
    } catch (error: any) {
      console.error("Error saving data for student:", error.message);
      Alert.alert('Save Error', `An error occurred: ${error.message}`);
    }
  };

  const renderRightActions = () => (
    <TouchableOpacity style={styles.actionButton} onPress={handleSave}>
      <Text style={styles.actionText}>Save</Text>
    </TouchableOpacity>
  );

  return (
    <GestureHandlerRootView>
    <Swipeable renderRightActions={renderRightActions}>
      <View style={styles.card}>
        <Text style={styles.name}>{student.fullName}</Text>
        <Text style={styles.info}>Roll No: {student.rollNo}</Text>
        <Text style={styles.info}>Mobile: {student.mobileNo}</Text>
        {/* Add other student details as needed */}
      </View>
    </Swipeable>
    </GestureHandlerRootView>
  );
};

export default ProfileTile;

const styles = StyleSheet.create({
  card: {
    padding: 15,
    backgroundColor: '#f8f9fa',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  info: {
    fontSize: 14,
    color: '#555',
  },
  actionButton: {
    backgroundColor: '#0ea5e9',
    justifyContent: 'center',
    alignItems: 'center',
    width: 80,
    height: '100%',
  },
  actionText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
