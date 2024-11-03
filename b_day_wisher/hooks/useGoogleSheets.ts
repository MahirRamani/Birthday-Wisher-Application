import { GoogleSpreadsheet } from 'google-spreadsheet';

// You'll need to set up your Google Sheets API credentials
const SPREADSHEET_ID = 'YOUR_SPREADSHEET_ID';
const CLIENT_EMAIL = 'YOUR_CLIENT_EMAIL';
const PRIVATE_KEY = 'YOUR_PRIVATE_KEY';

const doc = new GoogleSpreadsheet(SPREADSHEET_ID);

async function initializeGoogleSheets() {
  await doc.useServiceAccountAuth({
    client_email: CLIENT_EMAIL,
    private_key: PRIVATE_KEY,
  });
  await doc.loadInfo();
}

export async function fetchTodaysBirthdays() {
  await initializeGoogleSheets();
  const sheet = doc.sheetsByIndex[0]; // Assuming Sheet1 is the first sheet
  const rows = await sheet.getRows();
  const today = new Date();
  
  return rows.filter(row => {
    const birthdate = new Date(row.birthdate);
    return birthdate.getDate() === today.getDate() && 
           birthdate.getMonth() === today.getMonth();
  }).map(row => ({
    id: row.id,
    name: row.name,
    mobile: row.mobile,
    branch: row.branch,
    year: row.year,
  }));
}

export async function fetchBirthdaysByDate(date: Date) {
  await initializeGoogleSheets();
  const sheet = doc.sheetsByIndex[0]; // Assuming Sheet1 is the first sheet
  const rows = await sheet.getRows();
  
  return rows.filter(row => {
    const birthdate = new Date(row.birthdate);
    return birthdate.getDate() === date.getDate() && 
           birthdate.getMonth() === date.getMonth();
  }).map(row => ({
    id: row.id,
    name: row.name,
    mobile: row.mobile,
    branch: row.branch,
    year: row.year,
  }));
}

export async function saveToSheet2(student: {
  id: string;
  name: string;
  mobile: string;
  branch: string;
  year: string;
}) {
  await initializeGoogleSheets();
  const sheet = doc.sheetsByIndex[1]; // Assuming Sheet2 is the second sheet
  await sheet.addRow({
    id: student.id,
    name: student.name,
    mobile: student.mobile,
    branch: student.branch,
    year: student.year,
  });
}