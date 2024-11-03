// // This is a mock implementation. Replace with actual API calls or database queries.

// interface Birthday {
//     id: string;
//     name: string;
//     date: Date;
//     phone?: string;
//   }
  
//   const mockBirthdays: Birthday[] = [
//     { id: '1', name: 'John Doe', date: new Date(2024, 10, 27), phone: '1234567890' },
//     { id: '2', name: 'Jane Smith', date: new Date(2024, 10, 28), phone: '0987654321' },
//     { id: '3', name: 'Bob Johnson', date: new Date(1995, 5, 16), phone: '1122334455' },
//   ];
  
//   export function fetchTodayBirthdays(): Promise<Birthday[]> {
//     const today = new Date();
//     return Promise.resolve(mockBirthdays.filter(birthday =>
//       birthday.date.getDate() === today.getDate() &&
//         birthday.date.getMonth() === today.getMonth()
        
//     ));
// }
// console.log(new Date());
  
//   export function fetchTomorrowBirthdays(): Promise<Birthday[]> {
//     const tomorrow = new Date();
//     tomorrow.setDate(tomorrow.getDate() + 1);
//     return Promise.resolve(mockBirthdays.filter(birthday =>
//       birthday.date.getDate() === tomorrow.getDate() &&
//       birthday.date.getMonth() === tomorrow.getMonth()
//     ));
//   }
  
//   export function fetchBirthdaysByDate(date: Date): Promise<Birthday[]> {
//     return Promise.resolve(mockBirthdays.filter(birthday =>
//       birthday.date.getDate() === date.getDate() &&
//       birthday.date.getMonth() === date.getMonth()
//     ));
//   }





// interface Birthday {
//     id: string;
//     name: string;
//     date: Date;
//     phone?: string;
//   }
  
//   const mockBirthdays: Birthday[] = [
//     { id: '1', name: 'John Doe', date: new Date(2024, 9, 27), phone: '1234567890' },
//     { id: '2', name: 'Jane Smith', date: new Date(2024, 9, 28), phone: '0987654321' },
//     { id: '3', name: 'Bob Johnson', date: new Date(1995, 5, 16), phone: '1122334455' },
//   ];
  
//   function isSameMonthAndDay(date1: Date, date2: Date): boolean {
//     return date1.getMonth() === date2.getMonth() && date1.getDate() === date2.getDate();
//   }
  
// export function fetchTodayBirthdays(): Promise<Birthday[]> {
//     const today = new Date();
//     console.log('today:', today);
//     const todayBirthdays = mockBirthdays.filter(birthday =>
    
//         isSameMonthAndDay(birthday.date, today)
        
//     );
//     console.log('birthdays:', mockBirthdays);
//     console.log('Today\'s birthdays:', todayBirthdays);
//     return Promise.resolve(todayBirthdays);
//   }
  
//   export function fetchTomorrowBirthdays(): Promise<Birthday[]> {
//     const tomorrow = new Date();
//     tomorrow.setDate(tomorrow.getDate() + 1);
//     const tomorrowBirthdays = mockBirthdays.filter(birthday =>
//       isSameMonthAndDay(birthday.date, tomorrow)
//     );
//     console.log('Tomorrow\'s birthdays:', tomorrowBirthdays);
//     return Promise.resolve(tomorrowBirthdays);
//   }
  
//   export function fetchBirthdaysByDate(date: Date): Promise<Birthday[]> {
//     const birthdays = mockBirthdays.filter(birthday =>
//       isSameMonthAndDay(birthday.date, date)
//     );
//     console.log('Birthdays for', date, ':', birthdays);
//     return Promise.resolve(birthdays);
//   }



import { Birthday } from '../app/(tabs)/index';

// This is a mock implementation. Replace with actual API calls or database queries.
const mockBirthdays: Birthday[] = [
  { id: '1', name: 'John Doe', rollNumber: '001', phone: '1234567890', date: new Date(2024, 9, 29) },
  { id: '2', name: 'Jane Smith', rollNumber: '002', phone: '0987654321', date: new Date(2024, 9, 30) },
  { id: '3', name: 'Bob Johnson', rollNumber: '003', phone: '1122334455', date: new Date(1995, 5, 16) },
];

export function fetchTodayBirthdays(): Promise<Birthday[]> {
  const today = new Date();
  return Promise.resolve(mockBirthdays.filter(birthday => 
    birthday.date.getDate() === today.getDate() &&
    birthday.date.getMonth() === today.getMonth()
  ));
}

export function fetchTomorrowBirthdays(): Promise<Birthday[]> {
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  return Promise.resolve(mockBirthdays.filter(birthday =>
    birthday.date.getDate() === tomorrow.getDate() &&
    birthday.date.getMonth() === tomorrow.getMonth()
  ));
}

export function fetchBirthdaysByDate(date: Date): Promise<Birthday[]> {
  return Promise.resolve(mockBirthdays.filter(birthday =>
    birthday.date.getDate() === date.getDate() &&
    birthday.date.getMonth() === date.getMonth()
  ));
}

// // This URL should point to your deployed Google Apps Script web app
// const API_URL = "https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec"; // Replace with your script URL

// export async function fetchTodayBirthdays(): Promise<Birthday[]> {
//   const today = new Date();
//   const response = await fetch(`${API_URL}?action=getStudentDataByDate&date=${today.toISOString()}`);
  
//   if (!response.ok) {
//     throw new Error('Network response was not ok');
//   }

//   const data: Birthday[] = await response.json();
//   return data;
// }

// export async function fetchTomorrowBirthdays(): Promise<Birthday[]> {
//   const tomorrow = new Date();
//   tomorrow.setDate(tomorrow.getDate() + 1);
//   const response = await fetch(`${API_URL}?action=getStudentDataByDate&date=${tomorrow.toISOString()}`);
  
//   if (!response.ok) {
//     throw new Error('Network response was not ok');
//   }

//   const data: Birthday[] = await response.json();
//   return data;
// }

// export async function fetchBirthdaysByDate(date: Date): Promise<Birthday[]> {
//   const response = await fetch(`${API_URL}?action=getStudentDataByDate&date=${date.toISOString()}`);
  
//   if (!response.ok) {
//     throw new Error('Network response was not ok');
//   }

//   const data: Birthday[] = await response.json();
//   return data;
// }
