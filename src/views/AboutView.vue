<template>
  <div class="py-12">
    <div class="container-custom">
      <h1 class="text-4xl font-bold text-primary-700 mb-8 text-center">אודות מכירת חמץ</h1>
      
      <div class="max-w-4xl mx-auto">
        <div class="card mb-8">
          <h2 class="text-2xl font-bold text-gray-800 mb-4">מהי מכירת חמץ?</h2>
          <p class="text-lg text-gray-700 mb-4">
            מכירת חמץ היא פתרון הלכתי לבעיית החמץ בפסח. על פי ההלכה היהודית, אסור ליהודי להחזיק חמץ ברשותו במהלך חג הפסח. 
            כדי להימנע מהפסד כלכלי הכרוך בהשמדת כל החמץ, ההלכה מאפשרת למכור את החמץ לגוי לתקופת החג.
          </p>
          <p class="text-lg text-gray-700 mb-4">
            המכירה מתבצעת באמצעות הרב, אשר פועל כשליח של בעלי החמץ ומוכר את החמץ לגוי בהסכם משפטי תקף. לאחר סיום החג, הרב קונה בחזרה את החמץ עבור הבעלים המקוריים.
          </p>
        </div>
        
        <div class="card mb-8">
          <h2 class="text-2xl font-bold text-gray-800 mb-4">מהי חשיבות מכירת החמץ?</h2>
          <p class="text-lg text-gray-700 mb-4">
            מכירת חמץ היא מצווה חשובה המאפשרת לשמור על איסור "בל יראה ובל ימצא" - האיסור להחזיק חמץ ברשות היהודי בפסח.
          </p>
          <p class="text-lg text-gray-700 mb-4">
            כמו כן, המכירה מאפשרת ליהודים להימנע מהפסד כלכלי, במיוחד במקרים של עסקים, מפעלים, חנויות מזון ובתי מרקחת,
            שבהם מלאי גדול של מוצרים המכילים חמץ.
          </p>
        </div>
        
        <div class="card mb-8">
          <h2 class="text-2xl font-bold text-gray-800 mb-4">כיצד מתבצעת המכירה?</h2>
          <ol class="list-decimal list-inside space-y-3 text-lg text-gray-700 mb-4">
            <li>
              <strong>מינוי שליח</strong> - בעל החמץ ממנה את הרב כשליח למכור את החמץ עבורו.
            </li>
            <li>
              <strong>פירוט החמץ ומיקומו</strong> - יש לפרט את סוגי החמץ ואת המקומות בהם הם מאוחסנים.
            </li>
            <li>
              <strong>המכירה לגוי</strong> - הרב מוכר את כל החמץ לגוי בהסכם משפטי מחייב.
            </li>
            <li>
              <strong>החזרת החמץ</strong> - לאחר החג, הרב קונה בחזרה את החמץ עבור בעליו המקוריים.
            </li>
          </ol>
        </div>
        
        <div class="card mb-8">
          <h2 class="text-2xl font-bold text-gray-800 mb-4">נקודות חשובות למכירת חמץ</h2>
          <ul class="list-disc list-inside space-y-3 text-lg text-gray-700 mb-4">
            <li>
              יש להקפיד למכור את החמץ <strong>לפני זמן איסור החמץ</strong> בערב פסח.
            </li>
            <li>
              החמץ שנמכר צריך להיות <strong>מסומן ומופרד</strong> משאר המזון.
            </li>
            <li>
              בזמן החג, החמץ הנמכר <strong>שייך לגוי</strong> ואין להשתמש בו.
            </li>
            <li>
              בעלי עסקים צריכים לציין זאת בטופס המכירה ולקבל אישור מכירה.
            </li>
          </ul>
        </div>
        
        <div class="text-center">
          <router-link to="/form" class="btn-primary text-xl inline-block">
            למעבר לטופס המכירה
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AboutView',
}
</script> 