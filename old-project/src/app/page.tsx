import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-blue-50 to-white py-20">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-blue-700 mb-6">
            מכירת חמץ אונליין
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-3xl mx-auto">
            מכירת חמץ מקוונת, פשוטה ומהירה לפני חג הפסח, למהדרין.
          </p>
          <div className="flex flex-col md:flex-row justify-center gap-4">
            <Link href="/form" className="btn-primary text-xl py-3 px-8">
              למילוי הטופס
            </Link>
            <Link href="/about" className="bg-white border-2 border-blue-600 text-blue-600 hover:bg-blue-50 font-bold py-3 px-8 rounded-md transition-all duration-200 text-xl">
              מידע נוסף
            </Link>
          </div>
        </div>
      </section>

      {/* תיאור קצר */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                מה היא מכירת חמץ?
              </h2>
              <p className="text-lg text-gray-700 mb-4">
                לפני חג הפסח, חל איסור חמור על יהודים להחזיק חמץ ברשותם. כדי להימנע מהפסד כלכלי של השמדת כל החמץ, ההלכה מאפשרת למכור את החמץ לגוי.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                באמצעות טופס מקוון זה, אתם ממנים את הרב כשליח למכור את החמץ שלכם לגוי לתקופת החג, ולקנותו בחזרה בסוף החג.
              </p>
              <div className="bg-blue-50 p-6 rounded-lg border-r-4 border-blue-500">
                <h3 className="text-xl font-bold text-blue-800 mb-2">
                  שימו לב!
                </h3>
                <p className="text-gray-700">
                  ניתן למלא את הטופס עד יום א׳, ערב בדיקת חמץ, בשעה 17:00. טפסים שישלחו לאחר מכן לא יקלטו!
                </p>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="relative w-full max-w-md h-80 rounded-lg shadow-lg overflow-hidden">
                {/* כאן אפשר להוסיף תמונה קשורה */}
                <div className="absolute inset-0 bg-blue-100 flex items-center justify-center">
                  <span className="text-blue-500 text-xl font-bold">תמונה של חג הפסח</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* איך זה עובד */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            איך זה עובד?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="card text-center">
              <div className="bg-blue-100 w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center">
                <span className="text-blue-600 text-2xl font-bold">1</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">
                מילוי הטופס
              </h3>
              <p className="text-gray-600">
                מלאו את הטופס המקוון עם פרטיכם האישיים ומיקום החמץ ברשותכם.
              </p>
            </div>
            <div className="card text-center">
              <div className="bg-blue-100 w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center">
                <span className="text-blue-600 text-2xl font-bold">2</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">
                מינוי שליחות
              </h3>
              <p className="text-gray-600">
                אישור הטופס מהווה מינוי הרב כשליח למכור את החמץ שלכם לגוי.
              </p>
            </div>
            <div className="card text-center">
              <div className="bg-blue-100 w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center">
                <span className="text-blue-600 text-2xl font-bold">3</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">
                מכירת החמץ
              </h3>
              <p className="text-gray-600">
                הרב מוכר את החמץ לגוי לפני כניסת החג וקונה אותו בחזרה בתום החג.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* קריאה לפעולה */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            הזמן לפעול הוא עכשיו!
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            אל תחכו לרגע האחרון. מלאו את טופס מכירת החמץ היום והבטיחו שהחמץ שלכם ימכר כהלכה לפני פסח.
          </p>
          <Link href="/form" className="bg-white text-blue-600 hover:bg-blue-50 font-bold py-3 px-8 rounded-md transition-all duration-200 text-xl">
            למילוי הטופס
          </Link>
        </div>
      </section>
    </div>
  );
}
