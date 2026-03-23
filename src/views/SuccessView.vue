<template>
  <div class="min-h-screen py-12 section-warm">
    <LogoHeader />

    <div class="container-custom">
      <div class="max-w-2xl mx-auto text-center">
        <div class="card p-10 animate-fade-in">
          <!-- Celebration -->
          <div class="text-6xl mb-6 animate-float">🎉</div>
          <h1 class="text-3xl md:text-4xl font-extrabold text-primary-800 mb-4 text-shadow">הטופס נשלח בהצלחה!</h1>
          <p class="text-lg text-gray-500 mb-8">
            תודה שמילאת את טופס מכירת החמץ. הפרטים נשמרו במערכת.
          </p>

          <!-- שיתוף -->
          <div class="mb-8 animate-slide-up delay-200">
            <ShareButtons title="שתפו את טופס מכירת החמץ"
              text="מילאתי את טופס מכירת החמץ של כולל שערי ניסים. גם אתם יכולים למלא בקלות ובמהירות!" size="large" />
          </div>

          <!-- תרומה לקמחא דפסחא -->
          <div class="p-6 bg-primary-50/60 rounded-2xl mb-8 border border-primary-100/50 animate-slide-up delay-300">
            <h2 class="text-xl font-bold text-primary-800 mb-2">מעוניינים לתרום לקמחא דפסחא?</h2>
            <p class="text-gray-500 mb-4">
              בתרומתכם תוכלו לסייע למשפחות נזקקות לחגוג את חג הפסח בכבוד
            </p>
            <router-link to="/kimcha" class="btn-accent text-lg py-3 px-8">
              💝 לתרומה לקמחא דפסחא
            </router-link>
          </div>

          <div class="space-y-4 animate-slide-up delay-400">
            <router-link to="/" class="btn-primary text-lg py-3 px-8">
              חזרה לדף הבית
            </router-link>
            <div class="mt-4">
              <a href="https://63863ecdd7031.site123.me/" target="_blank"
                class="text-primary-600 hover:text-primary-700 font-medium transition-colors">
                לאתר הראשי של הארגון
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import LogoHeader from '../components/LogoHeader.vue'
import ShareButtons from '../components/ShareButtons.vue'

export default {
  name: 'SuccessView',
  components: {
    LogoHeader,
    ShareButtons
  }
}
</script>