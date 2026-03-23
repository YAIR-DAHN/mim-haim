function doPost(e) {
  try {
    // פתיחת הגיליון לפי שמו
    const ss = SpreadsheetApp.getActiveSpreadsheet();
    const sheet = ss.getSheetByName('גיליון1') || ss.getActiveSheet();
    
    // קבלת הנתונים מהבקשה
    const data = JSON.parse(e.postData.contents);
    
    // יצירת מערך עם הנתונים בסדר הרצוי
    const rowData = [
      new Date(), // תאריך ושעת המילוי
      data.firstName,
      data.lastName,
      data.phone,
      data.locationType,
      data.city,
      data.street,
      data.houseNumber,
      data.entrance,
      data.floor,
      data.apartmentNumber,
      data.hametzLocations
    ];
    
    // הוספת השורה לגיליון
    sheet.appendRow(rowData);
    
    // החזרת תשובה חיובית
    return ContentService.createTextOutput(JSON.stringify({
      'status': 'success',
      'message': 'הנתונים נשמרו בהצלחה'
    }))
    .setMimeType(ContentService.MimeType.JSON);
    
  } catch(error) {
    // החזרת הודעת שגיאה במקרה של כשל
    return ContentService.createTextOutput(JSON.stringify({
      'status': 'error',
      'message': error.toString()
    }))
    .setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet(e) {
  return ContentService.createTextOutput('שירות זה מקבל רק בקשות POST');
}