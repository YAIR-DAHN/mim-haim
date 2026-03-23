import Link from 'next/link';

export default function Success() {
  return (
    <div className="py-16">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center">
          <div className="bg-green-50 rounded-full w-24 h-24 mx-auto mb-6 flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          
          <h1 className="text-4xl font-bold text-gray-800 mb-6">
            הטופס נשלח בהצלחה!
          </h1>
          
          <div className="card mb-8">
            <p className="text-xl text-gray-700 mb-6">
              תודה שמילאת את טופס מכירת החמץ. 
              הפרטים שלך התקבלו ויטופלו על ידי הרב, אשר ימכור את החמץ לפני חג הפסח.
            </p>
            
            <div className="bg-blue-50 p-6 rounded-lg border-r-4 border-blue-500 text-right mb-6">
              <h3 className="text-xl font-bold text-blue-800 mb-2">
                מה עכשיו?
              </h3>
              <ul className="list-disc list-inside text-gray-700 space-y-2 text-right">
                <li>החמץ שפירטת יימכר לגוי לפני הפסח</li>
                <li>בזמן החג, החמץ שנמכר שייך לגוי ואין להשתמש בו</li>
                <li>לאחר החג, החמץ יחזור לרשותך אוטומטית</li>
              </ul>
            </div>
            
            <div className="bg-yellow-50 p-6 rounded-lg border-r-4 border-yellow-500 text-right">
              <h3 className="text-xl font-bold text-yellow-800 mb-2">
                שימו לב
              </h3>
              <p className="text-gray-700">
                יש לוודא שהחמץ שנמכר מסומן היטב ואינו נגיש במהלך החג.
                אין צורך באישור נוסף - הטופס ששלחת מהווה אישור למכירת החמץ.
              </p>
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Link href="/" className="btn-primary">
              חזרה לדף הבית
            </Link>
            <Link href="/about" className="bg-white border-2 border-blue-600 text-blue-600 hover:bg-blue-50 font-bold py-2 px-4 rounded-md transition-all duration-200">
              מידע נוסף על מכירת חמץ
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
} 