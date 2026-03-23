// תצורת API עבור שליחת הנתונים לגוגל שיטס

type FormData = {
  firstName: string;
  lastName: string;
  phone: string;
  placeType: 'home' | 'store' | 'factory' | 'other';
  city: string;
  street: string;
  houseNumber: string;
  entrance: string;
  floor: string;
  apartmentNumber: string;
  chametzLocations: string;
  authorization: boolean;
};

// חלק זה משמש את צד הלקוח - Client Side
export async function submitToGoogleSheets(formData: FormData): Promise<boolean> {
  try {
    const response = await fetch('/api/submit-form', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const data = await response.json();
    return data.success;
  } catch (error) {
    console.error('Error submitting form:', error);
    throw error;
  }
}

// להלן קוד ה-Google Apps Script שצריך להוסיף לגוגל שיטס:
/*
// קוד Google Apps Script עבור שמירת הנתונים בגיליון
// יש להעתיק את הקוד הזה ל-Google Apps Script ולהגדיר Web App

// זה הסקריפט שיש להריץ בגוגל שיטס

function doPost(e) {
  try {
    // פענוח הנתונים שהתקבלו
    const data = JSON.parse(e.postData.contents);
    
    // פתיחת הגיליון - יש להחליף את המזהה בגיליון האמיתי שלך
    const ss = SpreadsheetApp.openById("YOUR_SPREADSHEET_ID_HERE");
    const sheet = ss.getSheetByName("Form Responses") || ss.getSheets()[0];
    
    // הכנת השורה לכתיבה
    const row = [
      new Date(), // תאריך ושעת הגשה
      data.firstName,
      data.lastName,
      data.phone || "",
      getPlaceTypeInHebrew(data.placeType),
      data.city,
      data.street,
      data.houseNumber,
      data.entrance || "",
      data.floor || "",
      data.apartmentNumber || "",
      data.chametzLocations,
      data.authorization ? "כן" : "לא"
    ];
    
    // הוספת השורה לגיליון
    sheet.appendRow(row);
    
    // החזרת תשובה חיובית
    return ContentService.createTextOutput(JSON.stringify({
      success: true,
      message: "Form data saved successfully"
    })).setMimeType(ContentService.MimeType.JSON);
    
  } catch (error) {
    // טיפול בשגיאות
    return ContentService.createTextOutput(JSON.stringify({
      success: false,
      message: "Error saving form data: " + error.toString()
    })).setMimeType(ContentService.MimeType.JSON);
  }
}

// פונקציה להמרת סוג המקום לעברית
function getPlaceTypeInHebrew(type) {
  switch(type) {
    case "home": return "בית פרטי";
    case "store": return "חנות";
    case "factory": return "מפעל";
    case "other": return "אחר";
    default: return type;
  }
}

// פונקציה לבדיקת תקינות הדפלויימנט
function doGet() {
  return ContentService.createTextOutput(JSON.stringify({
    status: "ok",
    message: "The web app is deployed correctly"
  })).setMimeType(ContentService.MimeType.JSON);
}

// הגדרת הכותרות בעת יצירת הגיליון בפעם הראשונה
function setupSheet() {
  const ss = SpreadsheetApp.openById("YOUR_SPREADSHEET_ID_HERE");
  let sheet = ss.getSheetByName("Form Responses");
  
  if (!sheet) {
    sheet = ss.insertSheet("Form Responses");
  }
  
  // הגדרת הכותרות
  const headers = [
    "תאריך הגשה",
    "שם פרטי",
    "שם משפחה",
    "טלפון",
    "סוג מקום המכירה",
    "עיר",
    "רחוב",
    "מספר בית",
    "כניסה",
    "קומה",
    "מספר דירה",
    "מיקום החמץ",
    "אישור מינוי שליחות"
  ];
  
  sheet.getRange(1, 1, 1, headers.length).setValues([headers]);
  sheet.setFrozenRows(1);
}
*/ 