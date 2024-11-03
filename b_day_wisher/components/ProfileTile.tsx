// import React from 'react';
// import { View, Text, StyleSheet, Linking } from 'react-native';
// import { Button, Card } from 'react-native-paper';

// interface Student {
//   id: string;
//   name: string;
//   mobile: string;
//   branch: string;
//   year: string;
// }

// interface ProfileTileProps {
//   student: Student;
//   onSave: () => void;
// }

// export default function ProfileTile({ student, onSave }: ProfileTileProps) {
//   const handleCall = () => {
//     Linking.openURL(`tel:${student.mobile}`);
//   };

//   const handleWhatsApp = () => {
//     Linking.openURL(`whatsapp://send?phone=${student.mobile}&text=Happy Birthday bro`);
//   };

//   return (
//     <Card style={styles.card}>
//       <Card.Content>
//         <Text style={styles.name}>{student.name}</Text>
//         <Text>Mobile: {student.mobile}</Text>
//         <Text>Branch: {student.branch}</Text>
//         <Text>Year: {student.year}</Text>
//       </Card.Content>
//       <Card.Actions>
//         <Button onPress={handleCall}>Call</Button>
//         <Button onPress={handleWhatsApp}>WhatsApp</Button>
//         <Button onPress={onSave}>Save</Button>
//       </Card.Actions>
//     </Card>
//   );
// }

// const styles = StyleSheet.create({
//   card: {
//     margin: 10,
//   },
//   name: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     marginBottom: 5,
//   },
// });


// working
// import React from 'react';
// import { StyleSheet, Linking } from 'react-native';
// import { Button, Card, Paragraph } from 'react-native-paper';
// import  Text  from './ThemedText';

// interface Student {
//   id: string;
//   name: string;
//   mobile: string;
//   branch: string;
//   year: string;
// }

// interface ProfileTileProps {
//   student: Student;
//   onSave: () => void;
// }

// export default function ProfileTile({ student, onSave }: ProfileTileProps) {
//   const handleCall = () => {
//     Linking.openURL(`tel:${student.mobile}`);
//   };

//   const handleWhatsApp = () => {
//     Linking.openURL(`whatsapp://send?phone=${student.mobile}&text=Happy Birthday bro`);
//   };

//   return (
//     <Card style={styles.card}>
//       <Card.Content>
//         <Text style={styles.name}>{student.name}</Text>
//         <Paragraph>Mobile: {student.mobile}</Paragraph>
//         <Paragraph>Branch: {student.branch}</Paragraph>
//         <Paragraph>Year: {student.year}</Paragraph>
//       </Card.Content>
//       <Card.Actions style={styles.buttonContainer}>
//         <Button onPress={handleCall}>Call</Button>
//         <Button onPress={handleWhatsApp}>WhatsApp</Button>
//         <Button onPress={onSave}>Save</Button>
//       </Card.Actions>
//     </Card>
//   );
// }

// const styles = StyleSheet.create({
//   card: {
//     margin: 8,
//     width: '90%',
//     alignSelf: 'center',
//   },
//   name: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     marginBottom: 5,
//   },
//   buttonContainer: {
//     justifyContent: 'space-between',
//   },
// });





// ^
// import React from 'react';
// import { View, StyleSheet, Linking, TouchableOpacity, Text } from 'react-native';
// import { MaterialIcons } from '@expo/vector-icons';
// import { Birthday } from '../app/(tabs)/index';

// interface ProfileTileProps {
//   birthday: Birthday;
//   index: number;
// }

// const colors = [
//   { dark: '#1e40af', light: '#3b82f6' },
//   { dark: '#b91c1c', light: '#ef4444' },
//   { dark: '#047857', light: '#10b981' },
//   { dark: '#7c2d12', light: '#f97316' },
//   { dark: '#6b21a8', light: '#a855f7' },
// ];

// export default function ProfileTile({ birthday, index }: ProfileTileProps) {
//   const color = colors[index % colors.length];

//   const handleCall = () => {
//     Linking.openURL(`tel:${birthday.phone}`);
//   };

//   const handleWhatsApp = () => {
//     Linking.openURL(`whatsapp://send?phone=${birthday.phone}&text=Happy Birthday!`);
//   };

//   return (
//     <View style={[styles.card, { backgroundColor: color.dark, borderColor: color.light }]}>
//       <View style={styles.content}>
//         <View>
//           <Text style={styles.name}>{birthday.name}</Text>
//           <Text style={styles.info}>Roll No: {birthday.rollNumber}</Text>
//           <Text style={styles.info}>Mobile: {birthday.phone}</Text>
//         </View>
//         <View style={styles.iconContainer}>
//           <TouchableOpacity onPress={handleCall} style={styles.iconButton}>
//             <MaterialIcons name="call" size={24} color="white" />
//           </TouchableOpacity>
//           <TouchableOpacity onPress={handleWhatsApp} style={styles.iconButton}>
//             <MaterialIcons  name="chat" size={24} color="white" />
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
//     alignItems: 'center',
//     padding: 16,
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
//     flexDirection: 'row',
//   },
//   iconButton: {
//     padding: 8,
//     marginLeft: 8,
//     backgroundColor: 'rgba(255, 255, 255, 0.2)',
//     borderRadius: 20,
//   },
// });






import React from 'react';
import { View, StyleSheet, Linking, TouchableOpacity, Text } from 'react-native';
import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import { Birthday } from '../app/(tabs)/index';

interface ProfileTileProps {
  birthday: Birthday;
  index: number;
  style?: object; // Make style optional
}

const colors = [
  { dark: '#1e40af', light: '#3b82f6' },
  { dark: '#b91c1c', light: '#ef4444' },
  { dark: '#047857', light: '#10b981' },
  { dark: '#7c2d12', light: '#f97316' },
  { dark: '#6b21a8', light: '#a855f7' },
];

export default function ProfileTile({ birthday, index, style }: ProfileTileProps) {
  const color = colors[index % colors.length];

  const handleCall = () => {
    Linking.openURL(`tel:${birthday.phone}`);
  };

  const handleWhatsApp = () => {
    Linking.openURL(`whatsapp://send?phone=${birthday.phone}&text=Happy Birthday!`);
  };

  return (
    <View style={[styles.card, { backgroundColor: color.dark, borderColor: color.light }]}>
      <View style={styles.content}>
        <View>
          <Text style={styles.name}>{birthday.name}</Text>
          <Text style={styles.info}>Roll No: {birthday.rollNumber}</Text>
          <Text style={styles.info}>Mobile: {birthday.phone}</Text>
        </View>
        <View style={styles.iconContainer}>
          <TouchableOpacity onPress={handleCall} style={styles.iconButton}>
            <MaterialIcons name="call" size={26} color="white" />
          </TouchableOpacity>
          <TouchableOpacity onPress={handleWhatsApp} style={styles.iconButton}>
            <MaterialCommunityIcons name="whatsapp" size={26} color="white" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 8,
    marginBottom: 16,
    borderWidth: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    width: '100%', // Ensure the card takes full width of the ProfileTile
    padding: 16, // Add padding if needed
  },
  content: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    // padding: 16,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 4,
  },
  info: {
    fontSize: 14,
    color: 'rgba(255, 255, 255, 0.8)',
    marginBottom: 2,
  },
  iconContainer: {
    flexDirection: 'row',
  },
  iconButton: {
    padding: 8,
    marginLeft: 8,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    borderRadius: 20,
  },
});
