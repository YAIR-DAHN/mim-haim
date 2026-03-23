import { NextResponse } from 'next/server';

// סימולציה של שליחת הנתונים לגוגל שיטס
// בפרויקט אמיתי יש להחליף זאת בקוד שישלח את הנתונים ל-Web App של Google Apps Script

export async function POST(request: Request) {
  try {
    const formData = await request.json();
    
    // וידוא שכל השדות הנדרשים קיימים
    if (!formData.firstName || !formData.lastName || !formData.city || 
        !formData.street || !formData.houseNumber || !formData.chametzLocations || 
        !formData.authorization) {
      return NextResponse.json(
        { success: false, message: 'חסרים שדות חובה' },
        { status: 400 }
      );
    }
    
    // במימוש מלא, כאן יהיה הקוד שישלח את הנתונים ל-Google Apps Script
    // לדוגמה:
    // const response = await fetch('YOUR_GOOGLE_APPS_SCRIPT_WEB_APP_URL', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify(formData),
    // });
    // 
    // if (!response.ok) {
    //   throw new Error('שגיאה בשליחת הנתונים ל-Google Sheets');
    // }
    // 
    // const result = await response.json();
    
    // לצורך הדגמה, נחזיר תשובה חיובית
    console.log('Form data received:', formData);
    
    // עיכוב מלאכותי לסימולציית שליחת הנתונים
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    return NextResponse.json(
      { success: true, message: 'הנתונים נשלחו בהצלחה' },
      { status: 200 }
    );
    
  } catch (error) {
    console.error('Error processing form submission:', error);
    
    return NextResponse.json(
      { success: false, message: 'שגיאה בעיבוד הטופס' },
      { status: 500 }
    );
  }
} 