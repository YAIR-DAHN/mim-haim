<template>
  <div class="min-h-screen py-12 section-warm">
    <LogoHeader />

    <div class="container-custom">
      <div class="max-w-2xl mx-auto text-center">
        <div class="card p-10 animate-fade-in">
          <div class="text-center mb-8">
            <div class="text-5xl mb-4 animate-float">🎊</div>
            <h1 class="text-3xl md:text-4xl font-extrabold text-green-700 mb-4">
              התרומה התקבלה בהצלחה!
            </h1>
            <div class="text-base text-gray-500 animate-slide-up delay-100">
              <p class="mb-2">תודה על תרומתך הנדיבה לקמחא דפסחא.</p>
              <p>קבלה נשלחה לדואר האלקטרוני שלך.</p>
            </div>
          </div>

          <!-- פרטי התרומה -->
          <div class="bg-gray-50/60 rounded-2xl p-6 mb-8 border border-gray-100 text-right animate-slide-up delay-200">
            <h2 class="text-lg font-bold text-gray-800 mb-4">פרטי התרומה</h2>
            <div class="space-y-3">
              <div class="flex justify-between">
                <span class="text-gray-500">מספר עסקה:</span>
                <span class="font-medium text-gray-800">{{ $route.query.transactionId }}</span>
              </div>
              <div class="flex justify-between">
                <span class="text-gray-500">סכום:</span>
                <span class="font-bold text-primary-700">₪{{ formattedAmount }}</span>
              </div>
              <div v-if="$route.query.type === 'Ragil' && $route.query.payments > 1" class="flex justify-between">
                <span class="text-gray-500">תשלומים:</span>
                <span class="font-medium text-gray-800">{{ $route.query.payments }}</span>
              </div>
              <div v-if="$route.query.type === 'HK'" class="flex justify-between">
                <span class="text-gray-500">משך הוראת הקבע:</span>
                <span class="font-medium text-gray-800">{{ $route.query.period }}</span>
              </div>
            </div>
          </div>

          <!-- שיתוף -->
          <div class="bg-primary-50/40 rounded-2xl p-6 mb-8 border border-primary-100/30 animate-slide-up delay-300">
            <h2 class="text-lg font-bold text-gray-800 mb-3">שתפו את המצווה</h2>
            <p class="text-gray-500 mb-4 text-sm">שתפו את הזכות עם חברים ומשפחה ותסייעו למשפחות נזקקות</p>
            <ShareButtons title="תרמתי כעת לקמחא דפסחא" text="הצטרפו אלי לתרומה לקמחא דפסחא לפסח - המרכז הרוחני מים חיים"
              size="large" />
          </div>

          <div class="space-y-4 animate-slide-up delay-400">
            <router-link to="/" class="btn-primary text-lg py-3 px-8">
              חזרה לדף הבית
            </router-link>
            <div class="mt-4">
              <router-link to="/kimcha" class="text-primary-600 hover:text-primary-700 font-medium transition-colors">
                חזרה לעמוד קמחא דפסחא
              </router-link>
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
  name: 'DonationSuccessView',
  components: {
    LogoHeader,
    ShareButtons,
  },
  computed: {
    formattedAmount() {
      const amount = parseFloat(this.$route.query.amount) || 0;
      return amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
  }
}
</script>