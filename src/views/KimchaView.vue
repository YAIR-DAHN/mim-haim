<template>
  <div class="min-h-screen section-warm">
    <LogoHeader />

    <div class="container-custom py-8 md:py-12">
      <div class="max-w-4xl mx-auto">
        <!-- Hero Section -->
        <div class="text-center mb-12 card p-8 md:p-12 animate-fade-in">
          <div class="text-5xl mb-4 animate-float">💝</div>
          <h1 class="text-4xl md:text-5xl font-extrabold text-primary-800 mb-6 text-shadow">
            קמחא דפסחא
          </h1>
          <p class="text-lg md:text-xl text-gray-500 mb-8 max-w-2xl mx-auto">
            תרמו למצוות קמחא דפסחא וסייעו למשפחות נזקקות לחגוג את חג הפסח בכבוד
          </p>
        </div>

        <!-- הסבר על קמחא דפסחא -->
        <div class="card card-hover mb-8 animate-slide-up delay-100">
          <h2 class="text-2xl font-bold text-primary-800 mb-6 text-center">מעלת מצוות קמחא דפסחא</h2>
          <div class="text-base text-gray-600 space-y-4">
            <p class="leading-relaxed">
              מצוות קמחא דפסחא היא מנהג עתיק שהחל עוד בתקופת התלמוד. על פי מנהג זה, נהגו לחלק קמח לעניים לפני חג הפסח
              כדי שיוכלו להכין מצות ולחגוג את החג בכבוד.
            </p>
            <p class="leading-relaxed">
              בימינו, המנהג התרחב וכולל איסוף כספים וחלוקת מצרכי מזון, מצות, יין ושאר צרכי החג למשפחות נזקקות, כדי
              שיוכלו לקיים את מצוות החג ולשמוח בו כראוי.
            </p>
            <p class="leading-relaxed">
              מצווה זו נחשבת למצווה גדולה במיוחד, שכן היא משלבת בתוכה את מצוות הצדקה ומצוות שמחת החג. חכמינו ז"ל אמרו
              <span class="text-primary-700 font-semibold">"כל המשמח את העניים ביום טוב כאילו הקריב קרבן"</span>.
            </p>
            <div class="bg-primary-50/60 border-r-4 border-primary-400 p-4 rounded-xl my-6">
              <p class="leading-relaxed font-medium text-primary-900">
                תרומתכם תסייע למשפחות רבות לחגוג את חג הפסח בשמחה ובכבוד, ותזכו למצוות רבות.
              </p>
            </div>
            <div class="flex justify-center">
              <a href="https://did.li/Mim-Haim" target="_blank" class="btn-primary text-lg py-3 px-8">
                💝 תרמו עכשיו
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
                <br>
                
                <!-- כיתוב שניתן לתרום באשראי או בביט -->
                <span class="text-sm text-gray-500">ניתן לתרום באשראי או בביט</span>
              </a>
            </div>
          </div>
        </div>

        <!-- מודעת קמחא דפסחא -->
        <div class="card mb-8 text-center overflow-hidden animate-slide-up delay-200">
          <img src="../assets/images/kimha.jpeg" alt="קמחא דפסחא" class="max-w-full h-auto mx-auto rounded-xl">
        </div>

        <!-- טופס תרומה -->
        <div class="card mb-4" id="donation-form"></div>
        <!-- <div class="card mb-8 animate-slide-up delay-300">
          <h2 class="text-2xl font-bold text-primary-800 mb-6 text-center">תרמו עכשיו לקמחא דפסחא</h2>
          <p class="text-gray-500 mb-6 text-center text-sm">התרומות מוכרות לצורכי מס לפי סעיף 46</p>

          <div v-if="!showIframe" class="max-w-lg mx-auto">
            <form @submit.prevent="startDonation" class="space-y-5">
              <div>
                <label class="form-label">שם פרטי <span class="text-red-400">*</span></label>
                <input type="text" v-model="donationData.firstName" class="form-input" required>
              </div>
              <div>
                <label class="form-label">שם משפחה <span class="text-red-400">*</span></label>
                <input type="text" v-model="donationData.lastName" class="form-input" required>
              </div>
              <div>
                <label class="form-label">טלפון <span class="text-red-400">*</span></label>
                <input type="tel" v-model="donationData.phone" class="form-input" required pattern="^0[0-9]{8,9}$"
                  @input="validatePhone" :class="{ '!border-red-300 !ring-red-200': phoneError }">
                <span v-if="phoneError" class="text-red-400 text-sm mt-1 block">מספר טלפון לא תקין</span>
              </div>
              <div>
                <label class="form-label">דוא"ל</label>
                <input type="email" v-model="donationData.email" class="form-input" @input="validateEmail"
                  :class="{ '!border-red-300 !ring-red-200': emailError }">
                <div class="text-xs text-gray-400 mt-1 mr-1">
                  <span>קבלה תישלח לדואר האלקטרוני</span>
                  <span v-if="emailError" class="text-red-400 block">* כתובת מייל לא תקינה</span>
                </div>
              </div>
              <div>
                <label class="form-label">עיר</label>
                <input type="text" v-model="donationData.city" class="form-input">
              </div>
              <div>
                <label class="form-label">רחוב</label>
                <input type="text" v-model="donationData.street" class="form-input">
              </div>
              <div>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-3 mb-4">
                  <button type="button" class="py-3 px-4 border-2 rounded-xl text-base transition-all duration-300"
                    :class="donationData.amount === 600 ? 'bg-primary-50 border-primary-400 font-bold shadow-md text-primary-800' : 'border-gray-200 hover:border-primary-300 text-gray-700'"
                    @click="setAmount(600)">
                    🧺 סל מלא - ₪600
                  </button>
                  <button type="button" class="py-3 px-4 border-2 rounded-xl text-base transition-all duration-300"
                    :class="donationData.amount === 300 ? 'bg-primary-50 border-primary-400 font-bold shadow-md text-primary-800' : 'border-gray-200 hover:border-primary-300 text-gray-700'"
                    @click="setAmount(300)">
                    🧺 חצי סל - ₪300
                  </button>
                </div>
                <div class="text-center text-gray-400 mb-4 text-sm">- או -</div>
                <div class="grid grid-cols-2 md:grid-cols-4 gap-2 mb-4">
                  <button v-for="amount in [36, 54, 72, 118, 180, 360, 500, 1000]" :key="amount" type="button"
                    class="py-2.5 px-3 border-2 rounded-xl text-sm transition-all duration-300"
                    :class="donationData.amount === amount ? 'bg-primary-50 border-primary-400 font-bold shadow-md text-primary-800' : 'border-gray-200 hover:border-primary-300 text-gray-700'"
                    @click="setAmount(amount)">
                    ₪{{ amount }}
                  </button>
                </div>
                <label class="form-label">סכום תרומה <span class="text-red-400">*</span></label>
                <div class="text-center mb-4">
                  <div class="text-5xl font-extrabold text-primary-700 mb-1">
                    ₪{{ formattedAmount }}
                  </div>
                  <div class="text-gray-400 text-sm"
                    v-if="donationData.payments > 1 && donationData.paymentType === 'Ragil'">
                    {{ donationData.payments }} תשלומים של ₪{{ (donationData.amount / donationData.payments).toFixed(0)
                    }}
                  </div>
                </div>
                <div class="mt-3">
                  <label class="form-label">סכום אחר</label>
                  <input type="number" v-model.number="donationData.amount" class="form-input" min="1"
                    placeholder="הזן סכום לתרומה">
                </div>
              </div>

              <div>
                <label class="form-label">סוג תשלום</label>
                <div class="grid grid-cols-2 gap-3">
                  <button type="button"
                    class="w-full py-3 px-4 border-2 rounded-xl text-base transition-all duration-300"
                    :class="donationData.paymentType === 'Ragil' ? 'bg-primary-50 border-primary-400 font-bold text-primary-800' : 'border-gray-200 hover:border-primary-300 text-gray-700'"
                    @click="setPaymentType('Ragil')">
                    תרומה חד פעמית
                  </button>
                  <div>
                    <button type="button"
                      class="w-full py-3 px-4 border-2 rounded-xl text-base transition-all duration-300"
                      :class="donationData.paymentType === 'HK' ? 'bg-primary-50 border-primary-400 font-bold text-primary-800' : 'border-gray-200 hover:border-primary-300 text-gray-700'"
                      @click="setPaymentType('HK')">
                      הוראת קבע חודשית
                    </button>
                    <div v-if="donationData.paymentType === 'HK'" class="text-xs text-gray-400 mt-1 mr-1">
                      חיוב חודשי קבוע בכרטיס האשראי
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <label class="form-label">{{ donationData.paymentType === 'Ragil' ? 'מספר תשלומים' : 'משך הוראת הקבע'
                  }}</label>
                <select v-if="donationData.paymentType === 'Ragil'" v-model="donationData.payments" class="form-input">
                  <option value="1">תשלום אחד</option>
                  <option value="2">2 תשלומים</option>
                  <option value="3">3 תשלומים</option>
                  <option value="6">6 תשלומים</option>
                  <option value="12">12 תשלומים</option>
                </select>
                <select v-else v-model="donationData.hkPeriod" class="form-input">
                  <option :value="0">ללא הגבלה</option>
                  <option :value="3">3 חודשים</option>
                  <option :value="6">6 חודשים</option>
                  <option :value="12">שנה</option>
                  <option :value="24">שנתיים</option>
                  <option :value="36">3 שנים</option>
                  <option :value="60">5 שנים</option>
                </select>
              </div>
              <div>
                <label class="form-label">הקדשה (אופציונלי)</label>
                <textarea v-model="donationData.dedication" class="form-input" rows="2"
                  placeholder="לרפואת / לעילוי נשמת"></textarea>
              </div>

              <div class="text-center pt-2">
                <button type="submit" class="btn-primary text-lg py-3.5 px-10">
                  המשך לתשלום
                </button>
                <div class="mt-4">
                  <router-link to="/" class="text-primary-600 hover:text-primary-700 font-medium transition-colors">
                    חזרה לדף הבית
                  </router-link>
                </div>
              </div>
            </form>
          </div>

          <div v-else class="iframe-container">
            <div class="bg-primary-50/60 p-6 rounded-2xl mb-6 border border-primary-100/50">
              <h3 class="text-xl font-bold text-primary-800 mb-4 text-center">סיכום התרומה</h3>
              <div class="space-y-3 text-base">
                <div class="flex justify-between items-center">
                  <span class="text-gray-500">סכום התרומה:</span>
                  <span class="font-bold text-primary-700">₪{{ formattedAmount }}</span>
                </div>
                <div class="flex justify-between items-center">
                  <span class="text-gray-500">סוג תשלום:</span>
                  <span class="font-bold text-primary-700">{{ donationData.paymentType === 'Ragil' ? 'תשלום חד פעמי' :
                    'הוראת קבע חודשית' }}</span>
                </div>
                <div class="flex justify-between items-center"
                  v-if="donationData.paymentType === 'Ragil' && donationData.payments > 1">
                  <span class="text-gray-500">מספר תשלומים:</span>
                  <span class="font-bold text-primary-700">{{ donationData.payments }}</span>
                </div>
                <div class="flex justify-between items-center"
                  v-if="donationData.paymentType === 'Ragil' && donationData.payments > 1">
                  <span class="text-gray-500">סכום לתשלום:</span>
                  <span class="font-bold text-primary-700">₪{{ (donationData.amount / donationData.payments).toFixed(0)
                    }} × {{ donationData.payments }}</span>
                </div>
                <div class="flex justify-between items-center" v-if="donationData.paymentType === 'HK'">
                  <span class="text-gray-500">משך הוראת הקבע:</span>
                  <span class="font-bold text-primary-700">{{ donationData.hkPeriod === 0 ? 'ללא הגבלה' :
                    formatHkPeriod(donationData.hkPeriod) }}</span>
                </div>
                <div class="flex justify-between items-center" v-if="donationData.dedication">
                  <span class="text-gray-500">הקדשה:</span>
                  <span class="font-bold text-primary-700">{{ donationData.dedication }}</span>
                </div>
                <div class="border-t border-primary-200/50 mt-4 pt-4">
                  <div class="flex justify-between items-center text-lg">
                    <span class="font-bold text-primary-800">{{ donationData.paymentType === 'HK' ? 'סכום חודשי:' :
                      'סה"כ לתשלום:' }}</span>
                    <span class="font-bold text-primary-800">₪{{ formattedAmount }}</span>
                  </div>
                </div>
              </div>
            </div>

            <iframe v-if="iframeLoaded" ref="nedarimIframe" id="nedarimIframe"
              src="https://www.matara.pro/nedarimplus/iframe/" width="100%" style="height: 350px;" frameborder="0"
              allow="payment"></iframe>

            <div v-if="iframeLoaded && !isProcessingPayment" class="text-center mt-3 mb-8">
              <button type="button" @click="executePayment" class="btn-accent text-xl py-3.5 px-12"
                :disabled="isProcessingPayment">
                ✅ ביצוע תשלום
              </button>
            </div>

            <div v-if="!iframeLoaded" class="text-center py-8">
              <div class="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-primary-600"></div>
              <p class="mt-4 text-gray-500">טוען את עמוד התשלום...</p>
            </div>

            <div v-if="isProcessingPayment" class="text-center py-4">
              <div class="inline-block animate-spin rounded-full h-10 w-10 border-b-2 border-primary-600"></div>
              <p class="mt-2 text-gray-500 text-lg">מבצע חיוב, נא להמתין...</p>
            </div>
            <div v-if="paymentError" class="bg-red-50 p-4 rounded-xl mt-4 text-red-700 border border-red-200">
              <div class="font-bold mb-2 text-center">{{ paymentError }}</div>
              <div class="text-sm mt-4">
                <div class="font-semibold mb-1">פרטי תרומה:</div>
                <pre
                  class="bg-gray-50 p-2 rounded-lg overflow-auto text-xs border">{{ JSON.stringify(donationData, null, 2) }}</pre>
              </div>
            </div>

            <div v-if="paymentSuccess" class="bg-green-50 p-6 rounded-xl mt-6 text-center border border-green-200">
              <div class="text-5xl mb-4 animate-float">🎉</div>
              <h3 class="text-2xl font-bold text-green-700 mb-2">התשלום התקבל בהצלחה!</h3>
              <p class="text-gray-500 mb-4">תודה על תרומתך לקמחא דפסחא, קבלה נשלחה לדואר האלקטרוני.</p>

              <div class="py-4">
                <ShareButtons title="תרמתי כעת לקמחא דפסחא"
                  text="הצטרפו אלי לתרומה לקמחא דפסחא לפסח - כולל שערי ניסים" />
              </div>

              <div class="mt-4">
                <router-link to="/" class="text-primary-600 hover:text-primary-700 font-bold transition-colors">
                  חזרה לדף הבית
                </router-link>
              </div>
            </div>
          </div>
        </div> -->

        <div class="text-center card p-8" v-if="!showIframe">
          <h2 class="text-2xl font-bold text-primary-800 mb-4">כל תרומה חשובה</h2>
          <p class="text-lg text-gray-500 mb-6">
            אפילו תרומה קטנה יכולה לעשות הבדל גדול בחייה של משפחה
          </p>
          <ShareButtons title="שתפו עם חברים ומשפחה" text="מצוות קמחא דפסחא - כולל שערי ניסים" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import LogoHeader from '../components/LogoHeader.vue'
import ShareButtons from '../components/ShareButtons.vue'

export default {
  name: 'KimchaView',
  components: {
    LogoHeader,
    ShareButtons
  },
  data() {
    return {
      donationData: {
        firstName: '',
        lastName: '',
        phone: '',
        email: '',
        city: '',
        street: '',
        amount: 600,
        payments: '1',
        dedication: '',
        paymentType: 'Ragil',
        hkPeriod: 0
      },
      showIframe: false,
      iframeLoaded: false,
      nedarimConfiguration: {
        Mosad: '7001292',
        ApiValid: 'LgbGNqwumA',
        Currency: '1',
        PaymentType: 'Ragil',
      },
      animatingAmount: false,
      phoneError: false,
      targetAmount: 0,
      currentDisplayAmount: 0,
      paymentError: null,
      isProcessingPayment: false,
      paymentSuccess: false,
      paymentTimeout: null,
      emailError: false
    }
  },
  computed: {
    formattedAmount() {
      const amount = this.animatingAmount ? Math.floor(this.currentDisplayAmount) : this.donationData.amount;
      return amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
    }
  },
  mounted() {
    window.addEventListener('message', this.handlePostMessage);
    window.redirectToPayment = (url) => {
      console.log('מפנה לדף תשלום חיצוני:', url);
      window.open(url, '_blank');
    };
  },
  methods: {
    validatePhone() {
      const phoneRegex = /^0[0-9]{8,9}$/
      this.phoneError = !phoneRegex.test(this.donationData.phone)
    },
    validateEmail() {
      if (!this.donationData.email) {
        this.emailError = false;
        return;
      }
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      this.emailError = !emailRegex.test(this.donationData.email)
    },
    setPaymentType(type) {
      this.donationData.paymentType = type
      this.nedarimConfiguration.PaymentType = type
      if (type === 'HK') {
        this.donationData.payments = '1'
        if (this.donationData.hkPeriod === undefined) {
          this.donationData.hkPeriod = 0
        }
      }
    },
    setHkPeriod(period) {
      this.donationData.hkPeriod = period
    },
    startDonation() {
      this.validatePhone();
      if (this.donationData.email) {
        this.validateEmail();
      }

      if (this.phoneError) {
        alert('אנא הזן מספר טלפון תקין');
        return;
      }

      if (this.emailError) {
        alert('אנא הזן כתובת מייל תקינה');
        return;
      }

      this.showIframe = true;
      this.paymentError = null;
      this.isProcessingPayment = false;
      this.paymentSuccess = false;

      setTimeout(() => {
        this.iframeLoaded = true;
      }, 1000);
    },
    executePayment() {
      this.paymentError = null
      this.isProcessingPayment = true

      this.paymentTimeout = setTimeout(() => {
        if (this.isProcessingPayment) {
          this.isProcessingPayment = false;
          this.paymentError = 'לא התקבלה תשובה מהשרת. נסה שנית או פנה לתמיכה.';
          console.error('תם הזמן המוקצב לקבלת תשובה מהאייפריים');
        }
      }, 20000);

      this.postDataToIframe();
    },
    postDataToIframe() {
      if (!this.$refs.nedarimIframe) {
        console.error('האייפריים לא נמצא');
        this.isProcessingPayment = false;
        clearTimeout(this.paymentTimeout);
        this.paymentError = 'אירעה שגיאה בתהליך התשלום. נסה שנית.';
        return;
      }

      const iframeWindow = this.$refs.nedarimIframe.contentWindow;
      if (!iframeWindow) {
        console.error('לא ניתן לגשת לחלון האייפריים');
        this.isProcessingPayment = false;
        clearTimeout(this.paymentTimeout);
        this.paymentError = 'אירעה שגיאה בתהליך התשלום. נסה שנית.';
        return;
      }

      const donation = {
        Mosad: this.nedarimConfiguration.Mosad,
        ApiValid: this.nedarimConfiguration.ApiValid,
        Zeout: '',
        FirstName: this.donationData.firstName,
        LastName: this.donationData.lastName,
        Street: this.donationData.street || '',
        City: this.donationData.city || '',
        Phone: this.donationData.phone,
        Mail: this.donationData.email || '',
        PaymentType: this.donationData.paymentType,
        Amount: this.donationData.amount.toString(),
        Tashlumim: this.donationData.paymentType === 'HK' && this.donationData.hkPeriod === 0 ? '' : this.donationData.payments,
        Currency: this.nedarimConfiguration.Currency,
        Groupe: 'קמחא דפסחא',
        Comment: this.donationData.dedication || '',
        Param1: this.donationData.paymentType === 'HK' ?
          (this.donationData.hkPeriod > 0 ? this.formatHkPeriod(this.donationData.hkPeriod) : 'ללא הגבלה') : '',
        Param2: '',
        CallBack: '',
        CallBackMailError: ''
      };

      console.log('שולח נתונים לאייפרם:', donation);

      try {
        const message = {
          Name: 'FinishTransaction2',
          Value: donation
        };

        console.log('שולח הודעה לאייפריים:', message);
        iframeWindow.postMessage(message, 'https://www.matara.pro');
      } catch (error) {
        console.error('שגיאה בשליחת נתונים לאייפריים:', error);
        this.isProcessingPayment = false;
        clearTimeout(this.paymentTimeout);
        this.paymentError = 'אירעה שגיאה בתהליך התשלום: ' + error.message;
      }
    },

    handlePostMessage(event) {
      if (event.origin !== 'https://www.matara.pro') {
        return;
      }

      try {
        const data = event.data;
        console.log('התקבלה הודעה מהאייפרם:', data);

        if (data.Name === 'RedirectTo' || data.action === 'RedirectTo') {
          const url = data.Value || data.url;
          if (window.redirectToPayment && url) {
            window.redirectToPayment(url);
          }
        }

        if (data.Name === 'PaymentUpdate' || data.action === 'PaymentUpdate') {
          console.log('עדכון סטטוס תשלום:', data);
        }

        if (data.Name === 'TransactionResponse' || data.action === 'TransactionResponse') {
          const response = data.Value || data.Response;
          if (this.paymentTimeout) {
            clearTimeout(this.paymentTimeout);
          }
          this.handleTransactionResponse(response);
        }

        if (data.Name === 'Error' || data.action === 'Error') {
          const errorMsg = data.Value || data.ErrorMessage;
          if (this.paymentTimeout) {
            clearTimeout(this.paymentTimeout);
          }
          this.isProcessingPayment = false;
          this.paymentError = 'אירעה שגיאה: ' + errorMsg;
        }

        if (data.Name === 'ValidationError' || data.action === 'ValidationError') {
          const errors = data.Value || data.Errors;
          if (this.paymentTimeout) {
            clearTimeout(this.paymentTimeout);
          }
          this.isProcessingPayment = false;

          let errorMsg = 'נא לתקן את השגיאות הבאות:\n';
          if (Array.isArray(errors)) {
            errors.forEach(err => {
              errorMsg += `- ${err.FieldName}: ${err.ErrorMessage}\n`;
            });
          }

          this.paymentError = errorMsg;
          setTimeout(() => {
            this.showIframe = false;
          }, 3000);
        }
      } catch (error) {
        console.error('שגיאה בעיבוד הודעה מהאייפרם:', error, event.data);
        this.isProcessingPayment = false;
        if (this.paymentTimeout) {
          clearTimeout(this.paymentTimeout);
        }
        this.paymentError = 'אירעה שגיאה בעיבוד התשובה מהשרת';
      }
    },

    handleTransactionResponse(response) {
      console.log('מעבד תשובה מהאייפרם:', response);
      this.isProcessingPayment = false;

      if (response && (response.Status === 'True' || response.Status === 'OK')) {
        this.paymentSuccess = true;

        setTimeout(() => {
          this.$router.push({
            path: '/donation-success',
            query: {
              transactionId: response.TransactionId || response.Confirmation || 'unknown',
              amount: this.donationData.amount,
              type: this.donationData.paymentType,
              period: this.donationData.paymentType === 'HK' ?
                (this.donationData.hkPeriod === 0 ? 'ללא הגבלה' : this.formatHkPeriod(this.donationData.hkPeriod)) : '',
              payments: this.donationData.payments
            }
          });
        }, 2000);
      } else if (response && response.Status === 'Error') {
        this.paymentError = 'התשלום נכשל: ' + (response.Message || response.ErrorMessage || 'אירעה שגיאה בתהליך התשלום');
      } else {
        const errorMsg = response ?
          (response.Message || response.ErrorMessage || 'אירעה שגיאה בתהליך התשלום') :
          'התשלום נכשל ללא פרטי שגיאה';
        this.paymentError = 'התשלום נכשל: ' + errorMsg;
      }
    },
    setAmount(amount) {
      if (this.animatingAmount) return;

      this.animatingAmount = true;
      this.targetAmount = amount;
      this.currentDisplayAmount = this.donationData.amount;

      const duration = 800;
      const fps = 60;
      const steps = duration / (1000 / fps);

      let step = 0;
      const startValue = this.donationData.amount;
      const changeInValue = this.targetAmount - startValue;

      const animateAmount = () => {
        step++;
        const progress = 1 - Math.pow(1 - step / steps, 2);
        this.currentDisplayAmount = startValue + changeInValue * progress;

        if (step < steps) {
          requestAnimationFrame(animateAmount);
        } else {
          this.donationData.amount = this.targetAmount;
          this.currentDisplayAmount = this.targetAmount;
          this.animatingAmount = false;
        }
      };

      requestAnimationFrame(animateAmount);
    },
    formatHkPeriod(months) {
      if (months === 12) return 'שנה';
      if (months === 24) return 'שנתיים';
      if (months === 36) return '3 שנים';
      if (months === 60) return '5 שנים';
      return months + ' חודשים';
    }
  },
  beforeUnmount() {
    window.removeEventListener('message', this.handlePostMessage);
  }
}
</script>

<style scoped>
.iframe-container {
  width: 100%;
  min-height: 400px;
  position: relative;
}
</style>
