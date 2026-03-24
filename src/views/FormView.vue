<template>
  <div class="min-h-screen py-12 section-warm">
    <LogoHeader />

    <div class="container-custom">
      <div class="text-center mb-8 card p-8 max-w-4xl mx-auto animate-fade-in">
        <h1 class="text-3xl md:text-4xl font-extrabold text-primary-800 mb-4 text-shadow">טופס מכירת חמץ</h1>
        <p class="text-base text-gray-500">מלאו את הטופס הבא לביצוע מכירת חמץ כהלכה</p>
      </div>

      <div class="max-w-2xl mx-auto">
        <form @submit.prevent="handleSubmit" class="space-y-6">
          <!-- פרטים אישיים -->
          <div class="card card-hover animate-slide-up delay-100">
            <h2 class="text-xl font-bold text-primary-800 mb-4 flex items-center gap-2">
              <span class="text-lg">👤</span> פרטים אישיים
            </h2>
            <div class="space-y-4">
              <div>
                <label class="form-label">שם פרטי <span class="text-red-400">*</span></label>
                <input type="text" v-model="formData.firstName" class="form-input" required>
              </div>
              <div>
                <label class="form-label">שם משפחה <span class="text-red-400">*</span></label>
                <input type="text" v-model="formData.lastName" class="form-input" required>
              </div>
              <div>
                <label class="form-label">טלפון</label>
                <input type="tel" v-model="formData.phone" class="form-input">
              </div>
              <div>
                <label class="form-label">סוג מקום המכירה</label>
                <select v-model="formData.locationType" class="form-input">
                  <option value="">נא בחרו</option>
                  <option value="home">בית</option>
                  <option value="store">חנות</option>
                  <option value="factory">מפעל</option>
                  <option value="other">אחר</option>
                </select>
              </div>
            </div>
          </div>

          <!-- כתובת -->
          <div class="card card-hover animate-slide-up delay-200">
            <h2 class="text-xl font-bold text-primary-800 mb-4 flex items-center gap-2">
              <span class="text-lg">📍</span> כתובת
            </h2>
            <div class="space-y-4">
              <div>
                <label class="form-label">עיר מגורים <span class="text-red-400">*</span></label>
                <input type="text" v-model="formData.city" class="form-input" required>
              </div>
              <div>
                <label class="form-label">רחוב <span class="text-red-400">*</span></label>
                <input type="text" v-model="formData.street" class="form-input" required>
              </div>
              <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label class="form-label">מספר בית <span class="text-red-400">*</span></label>
                  <input type="number" v-model="formData.houseNumber" class="form-input">
                </div>
                <div>
                  <label class="form-label">כניסה</label>
                  <input type="text" v-model="formData.entrance" class="form-input">
                </div>
                <div>
                  <label class="form-label">קומה</label>
                  <input type="text" v-model="formData.floor" class="form-input">
                </div>
              </div>
              <div>
                <label class="form-label">מספר דירה</label>
                <input type="number" v-model="formData.apartmentNumber" class="form-input">
              </div>
            </div>
          </div>

          <!-- פרטי החמץ -->
          <div class="card card-hover animate-slide-up delay-300">
            <h2 class="text-xl font-bold text-primary-800 mb-4 flex items-center gap-2">
              <span class="text-lg">🍞</span> מיקום החמץ
            </h2>
            <div class="space-y-4">
              <div>
                <label class="form-label">פירוט המקומות בהם נמצא החמץ <span class="text-red-400">*</span></label>
                <p class="text-sm text-gray-400 mb-2">
                  בשדה זה כתבו את המקומות בהם נמצא החמץ למכירה, לדוגמא "ארונות מטבח עליונים", "מחסן", "ארון שירות"
                  וכדו'. אם המקומות מסומנים ניתן לכתוב "במקומות המסומנים"
                </p>
                <textarea v-model="formData.hametzLocations" class="form-input h-32" required></textarea>
              </div>
            </div>
          </div>

          <!-- אישורים -->
          <div class="card card-hover animate-slide-up delay-400">
            <h2 class="text-xl font-bold text-primary-800 mb-4 flex items-center gap-2">
              <span class="text-lg">✍️</span> אישור מינוי שליחות
            </h2>
            <div class="space-y-4">
              <div class="bg-primary-50/60 border-r-4 border-primary-400 p-4 rounded-xl">
                <p class="text-gray-700 leading-relaxed text-sm">
                  אני הח"מ נותן כוח ורשות להרב יוסף שמעון פרטוש שליט"א ועושה אותו שליח ומורשה במקומי לעשות מכירת חמץ לכל
                  מיני חמץ ותערובות חמץ שלי ביום יד' ניסן תשפ"ו. ניתן לראות את נוסח השליחות המלא בהמשך הטופס
                </p>
              </div>
              <div class="flex items-start bg-gray-50/60 p-3 rounded-xl border border-gray-100">
                <input type="checkbox" v-model="formData.confirmations.rabbi"
                  class="mt-1 h-5 w-5 text-primary-600 rounded transition duration-200" required>
                <label class="mr-3 text-gray-700 font-medium">
                  אני מאשר את מינוי השליחות <span class="text-red-400">*</span>
                </label>
              </div>
            </div>
          </div>

          <!-- הודעת שגיאה -->
          <transition name="fade">
            <div v-if="error" class="bg-red-50 border border-red-200 text-red-700 px-5 py-4 rounded-xl shadow-sm"
              role="alert">
              <div class="flex items-center gap-2">
                <span class="text-lg">⚠️</span>
                <div>
                  <strong class="font-bold">שגיאה!</strong>
                  <span class="block sm:inline"> {{ error }}</span>
                </div>
              </div>
            </div>
          </transition>

          <!-- הודעת הצלחה -->
          <transition name="fade">
            <div v-if="success"
              class="bg-green-50 border border-green-200 text-green-700 px-5 py-4 rounded-xl shadow-sm" role="alert">
              <div class="flex items-center gap-2">
                <span class="text-lg">✅</span>
                <div>
                  <strong class="font-bold">הצלחה!</strong>
                  <span class="block sm:inline"> {{ success }}</span>
                </div>
              </div>
            </div>
          </transition>

          <div class="text-center py-4">
            <button type="submit" class="btn-primary text-lg py-3.5 px-10" :disabled="isSubmitting"
              :class="{ 'opacity-60 cursor-not-allowed': isSubmitting }">
              <span v-if="isSubmitting" class="loading-spinner ml-2"></span>
              {{ isSubmitting ? 'שולח...' : '🌾 שליחת הטופס' }}
            </button>
            <div class="mt-4">
              <router-link to="/" class="text-primary-600 hover:text-primary-700 font-medium transition-colors">
                חזרה לדף הבית
              </router-link>
            </div>
          </div>

          <!-- תרומה לקמחא דפסחא -->
          <div class="text-center card p-6 mt-4">
            <h3 class="text-xl font-bold text-primary-800 mb-3">מעוניינים לתרום לקמחא דפסחא?</h3>
            <p class="text-gray-500 mb-5">
              המרכז הרוחני מים חיים מחלק מאות סלי מזון לקראת חג הפסח, באו ליטול חלק!
            </p>
            <router-link to="/kimcha" class="btn-accent text-lg py-3 px-8">
              💝 לתרומה לקמחא דפסחא
            </router-link>

            <div class="mt-6">
              <ShareButtons title="שתפו עם חברים ומשפחה" text="מכירת חמץ און-ליין וקמחא דפסחא - המרכז הרוחני מים חיים"
                size="medium" />
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import LogoHeader from '../components/LogoHeader.vue'
import ShareButtons from '../components/ShareButtons.vue'

export default {
  name: 'FormView',
  components: {
    LogoHeader,
    ShareButtons
  },
  data() {
    return {
      formData: {
        firstName: '',
        lastName: '',
        phone: '',
        locationType: 'home',
        city: '',
        street: '',
        houseNumber: '',
        entrance: '',
        floor: '',
        apartmentNumber: '',
        hametzLocations: '',
        confirmations: {
          rabbi: false
        }
      },
      isSubmitting: false,
      error: null,
      success: null,
      GOOGLE_SCRIPT_URL: 'https://script.google.com/macros/s/AKfycbzsaryE3ryPTZR2BRblDq_lgpdi6zr5O-DcZm9xojPGLgBI_KK1Risy6dK6Fpk6f61b/exec'
    }
  },
  methods: {
    async handleSubmit() {
      this.error = null;
      this.success = null;
      this.isSubmitting = true;

      try {
        const response = await fetch(this.GOOGLE_SCRIPT_URL, {
          method: 'POST',
          headers: {
            'Content-Type': 'text/plain',
          },
          body: JSON.stringify(this.formData)
        });

        if (!response.ok) {
          throw new Error(`שגיאת שרת: ${response.status}`);
        }

        const result = await response.json();

        if (result.status === 'success') {
          this.success = 'הטופס נשלח בהצלחה!';
          this.resetForm();

          setTimeout(() => {
            this.$router.push('/success');
          }, 2000);
        } else {
          throw new Error(result.message || 'אירעה שגיאה בשמירת הנתונים');
        }

      } catch (error) {
        console.error('Error:', error);
        this.error = 'אירעה שגיאה בשליחת הטופס. אנא נסו שוב מאוחר יותר.';
      } finally {
        this.isSubmitting = false;
      }
    },

    resetForm() {
      this.formData = {
        firstName: '',
        lastName: '',
        phone: '',
        locationType: '',
        city: '',
        street: '',
        houseNumber: '',
        entrance: '',
        floor: '',
        apartmentNumber: '',
        hametzLocations: '',
        confirmations: {
          rabbi: false
        }
      };
    }
  }
}
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: all 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateY(-4px);
}

.loading-spinner {
  width: 18px;
  height: 18px;
  border: 3px solid #ffffff;
  border-radius: 50%;
  border-top-color: transparent;
  animation: spin 0.8s linear infinite;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}
</style>