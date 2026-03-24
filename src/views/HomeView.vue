<template>
  <div class="min-h-screen section-warm">
    <LogoHeader />

    <div class="container-custom py-8 md:py-12">
      <div class="max-w-4xl mx-auto">
        <!-- Hero Section -->
        <div class="relative text-center mb-12 card card-hover p-8 md:p-12 overflow-hidden">
          <!-- Decorative elements -->
          <div class="absolute top-4 left-8 text-5xl opacity-20 animate-float">🌾</div>
          <div class="absolute bottom-4 right-8 text-4xl opacity-15 animate-float delay-300">🍞</div>

          <div class="relative z-10">
            <h1 class="text-4xl md:text-5xl font-extrabold text-primary-800 mb-6 text-shadow animate-fade-in">
              מכירת חמץ<br>מקוונת
            </h1>
            <p class="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto animate-slide-up delay-100">
              מכירת חמץ מקוונת, פשוטה ומהירה לפני חג הפסח. המתקיימת על ידי המרכז הרוחני מים חיים בנשיאות הרב ברק כהן
              שליט"א
            </p>
            <div class="flex flex-col md:flex-row gap-4 justify-center items-center animate-slide-up delay-200">
              <router-link to="/form" class="btn-primary text-lg py-3.5 px-10 w-full md:w-auto">
                🌾 למילוי טופס המכירה
              </router-link>
              <router-link to="/kimcha" class="btn-accent text-lg py-3.5 px-10 w-full md:w-auto">
                💝 תרומה לקמחא דפסחא
              </router-link>
              <button @click="showMoreInfo = true" class="btn-secondary text-lg py-3.5 px-10 w-full md:w-auto">
                מידע נוסף
              </button>
            </div>
          </div>

          <!-- כפתורי שיתוף -->
          <div class="mt-10 animate-slide-up delay-300">
            <ShareButtons title="שתפו חברים שעדיין לא עשו מכירת חמץ"
              text="מכירת חמץ מקוונת של המרכז הרוחני מים חיים - הזדרזו למלא את הטופס לפני פסח!" size="large" />
          </div>
        </div>

        <!-- איך זה עובד -->
        <div class="card card-hover mb-8 p-8">
          <h2 class="text-3xl font-bold text-primary-800 mb-8 text-center">איך זה עובד?</h2>
          <div class="grid md:grid-cols-3 gap-8">
            <div v-for="(step, i) in steps" :key="i" class="text-center animate-slide-up"
              :style="{ animationDelay: (i * 150) + 'ms' }">
              <div
                class="bg-gradient-to-br from-primary-100 to-primary-200/50 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-sm">
                <span class="text-2xl">{{ step.icon }}</span>
              </div>
              <h3 class="text-lg font-bold text-gray-800 mb-2">{{ step.title }}</h3>
              <p class="text-gray-500 text-sm leading-relaxed">{{ step.desc }}</p>
            </div>
          </div>
        </div>

        <!-- אזהרה -->
        <div class="bg-primary-50/80 backdrop-blur-sm border-r-4 border-primary-400 p-5 mb-8 rounded-xl shadow-sm">
          <p class="text-primary-900 text-base flex items-center gap-2">
            <span class="text-xl">⏰</span>
            <span><strong>חשוב לדעת:</strong> יש למלא את הטופס לא יאוחר מיום שלישי יג' ניסן תשפ"ו.</span>
          </p>
        </div>

        <!-- Call to Action -->
        <div class="text-center card card-hover p-8">
          <h2 class="text-3xl font-bold text-primary-800 mb-4 text-shadow">
            אל תחכו לרגע האחרון
          </h2>
          <p class="text-lg text-gray-600 mb-6">
            מלאו את הטופס עכשיו והבטיחו את מכירת החמץ שלכם לפני חג הפסח
          </p>
          <div class="mb-6">
            <router-link to="/form" class="btn-primary text-lg py-3 px-10">
              למילוי טופס המכירה
            </router-link>
          </div>

          <ShareButtons title="שתפו עם חברים ומשפחה"
            text="האם מילאתם כבר את טופס מכירת החמץ? לחצו כאן לטופס מכירת חמץ מקוון של המרכז הרוחני מים חיים" />
        </div>

        <!-- מידע נוסף - מודל -->
        <transition name="modal">
          <div v-if="showMoreInfo"
            class="fixed inset-0 bg-black/40 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            @click="showMoreInfo = false">
            <div class="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl" @click.stop>
              <div class="p-6 md:p-8">
                <div class="flex justify-between items-center mb-6">
                  <h2 class="text-2xl font-bold text-primary-800">מידע על מכירת חמץ</h2>
                  <button @click="showMoreInfo = false"
                    class="text-gray-400 hover:text-gray-600 p-1 rounded-lg hover:bg-gray-100 transition-all">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24"
                      stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>

                <div class="space-y-6">
                  <div>
                    <h3 class="text-xl font-bold text-primary-700 mb-2">מהי מכירת חמץ?</h3>
                    <p class="text-gray-600 leading-relaxed">
                      מכירת חמץ היא פתרון הלכתי לבעיית החמץ בפסח. על פי ההלכה היהודית, אסור ליהודי להחזיק חמץ ברשותו
                      במהלך חג הפסח. באמצעות מכירת החמץ לגוי, אנו מקיימים את המצווה ונמנעים מאיסור בל יראה ובל ימצא.
                    </p>
                  </div>

                  <div>
                    <h3 class="text-xl font-bold text-primary-700 mb-2">דוגמא לשטר הרשאה</h3>
                    <img src="../assets/images/tofes.png" alt="שטר הרשאה למכירת חמץ"
                      class="w-full h-auto rounded-xl shadow-md">
                  </div>

                  <div>
                    <h3 class="text-xl font-bold text-primary-700 mb-2">מועד אחרון למכירה</h3>
                    <p class="text-gray-600 leading-relaxed">
                      יש למלא את הטופס לא יאוחר מיום שלישי יג' ניסן תשפ"ו
                    </p>
                  </div>

                  <div class="text-center pt-4">
                    <router-link to="/form" class="btn-primary text-lg py-3 px-10">
                      למילוי טופס המכירה
                    </router-link>
                  </div>

                  <div class="pt-2">
                    <ShareButtons title="שתפו מידע זה" text="מידע חשוב על מכירת חמץ לפסח - המרכז הרוחני מים חיים"
                      size="small" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
import LogoHeader from '../components/LogoHeader.vue'
import ShareButtons from '../components/ShareButtons.vue'

export default {
  name: 'HomeView',
  components: {
    LogoHeader,
    ShareButtons
  },
  data() {
    return {
      showMoreInfo: false,
      steps: [
        {
          icon: '📝',
          title: 'מלאו את הטופס',
          desc: 'מלאו את הפרטים הנדרשים בטופס המכירה'
        },
        {
          icon: '🤝',
          title: 'מינוי הרב',
          desc: 'הרב יוסף שמעון פרטוש שליט"א ימונה כשליח למכירת החמץ'
        },
        {
          icon: '✅',
          title: 'מכירת החמץ',
          desc: 'הרב יבצע את מכירת החמץ לגוי בהתאם להלכה'
        }
      ]
    }
  }
}
</script>

<style scoped>
.modal-enter-active,
.modal-leave-active {
  transition: all 0.3s ease;
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}

.modal-enter-from>div,
.modal-leave-to>div {
  transform: scale(0.95) translateY(10px);
}
</style>