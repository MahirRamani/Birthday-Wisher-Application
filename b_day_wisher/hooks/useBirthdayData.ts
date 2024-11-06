// Final
// import { Student } from '../app/(tabs)/index';

// // This URL should point to your deployed Google Apps Script web app
// const API_URL = "https://script.google.com/macros/s/AKfycbzD4ZwuntdTpDmjYKk62ycQtxSRuyehTv-a-RFX52_-qdfBv-bMAlaFDIOj7_qe0AXj/exec"; // Replace with your script URL

// export async function fetchTodayBirthdays(): Promise<Student[]> {
//   console.log("fetchTodayBirthdays called");

//   const today = new Date();
//   const response = await fetch(`${API_URL}?action=getStudentDataByDate&date=${today.toISOString()}`);

//   if (!response.ok) {
//     throw new Error('Network response was not ok');
//   }

//   const data: Student[] = await response.json();
//   console.log("fetchTodayBirthdays data:", data);

//   return data;
// }

// export async function fetchTomorrowBirthdays(): Promise<Student[]> {
//   console.log("fetchTomorrowBirthdays called");

//   const tomorrow = new Date();
//   tomorrow.setDate(tomorrow.getDate() + 1);
//   const response = await fetch(`${API_URL}?action=getStudentDataByDate&date=${tomorrow.toISOString()}`);

//   if (!response.ok) {
//     throw new Error('Network response was not ok');
//   }

//   const data: Student[] = await response.json();
//   console.log("fetchTomorrowBirthdays data:", data);

//   return data;
// }

// export async function fetchBirthdaysByDate(date: Date): Promise<Student[]> {
//   const response = await fetch(`${API_URL}?action=getStudentDataByDate&date=${date.toISOString()}`);

//   if (!response.ok) {
//     throw new Error('Network response was not ok');
//   }

//   const data: Student[] = await response.json();
//   return data;
// }


import { Student } from '../app/(tabs)/index';

const API_URL = 'https://script.google.com/macros/s/AKfycbzHBe3Fy5ER2_1lijp-Mcyqe3OM7qp6FPkScauZvDoWGcb9kkQ31DmRWBu0yBTFC_XP/exec';

// Utility function to map JSON data to the Student interface without the `id` field
function mapJsonToStudent(data: any[]): Student[] {
  return data.map(item => ({
    rollNo: item['Roll'],
    roomNo: item['Room'],
    fullName: item['Full Name'],
    birthDate: new Date(item['Birthdate']),
    mobileNo: item['Mobile'],
    degree: item['Degree'],
    fieldOfStudy: item['Field Of Study']
  }));
}

// Fetch today's birthdays
export async function fetchTodayBirthdays(): Promise<Student[]> {
  console.log("fetchTodayBirthdays called");

  const today = new Date();
  const response = await fetch(`${API_URL}?action=getStudentDataByDate&date=${today.toISOString()}`);

  if (!response.ok) {
    throw new Error('Network response was not ok');
  }

  const rawData = await response.json();
  console.log("fetchTodayBirthdays raw data:", rawData);

  const data = mapJsonToStudent(rawData);
  console.log("fetchTodayBirthdays mapped data:", data);

  return data;
}

// Fetch tomorrow's birthdays
export async function fetchTomorrowBirthdays(): Promise<Student[]> {
  console.log("fetchTomorrowBirthdays called");

  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const response = await fetch(`${API_URL}?action=getStudentDataByDate&date=${tomorrow.toISOString()}`);

  if (!response.ok) {
    throw new Error('Network response was not ok');
  }

  const rawData = await response.json();
  console.log("fetchTomorrowBirthdays raw data:", rawData);

  const data = mapJsonToStudent(rawData);
  console.log("fetchTomorrowBirthdays mapped data:", data);

  return data;
}

// Fetch birthdays by a specific date
export async function fetchBirthdaysByDate(date: Date): Promise<Student[]> {
  console.log("fetchBirthdaysByDate called for date:", date);

  const response = await fetch(`${API_URL}?action=getStudentDataByDate&date=${date.toISOString()}`);

  if (!response.ok) {
    throw new Error('Network response was not ok');
  }

  const rawData = await response.json();
  console.log("fetchBirthdaysByDate raw data:", rawData);

  const data = mapJsonToStudent(rawData);
  console.log("fetchBirthdaysByDate mapped data:", data);

  return data;
}



export async function saveStudentData(student: Student): Promise<void> {
  try {
    console.log("Saving data:", student);

    const response = await fetch(`${API_URL}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(student),
    });

    const result = await response.json(); // Parse the response as JSON

    console.log("Response JSON:", result); // Logs the parsed JSON data

    if (!result.success) {
      throw new Error(result.message || "Failed to save data");
    }

    console.log("Data saved successfully:", result.message); // If success is true, log success
  } catch (error: any) {
    console.error("Error saving data:", error.message); // Log the error message
    throw error;
  }
}
