<template>
  <footer class="bg-gray-800 text-white py-8">
    <div class="container-custom">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 class="text-xl font-bold mb-3">מכירת חמץ אונליין</h3>
          <p class="text-gray-300">
            המערכת המתקדמת ביותר למכירת חמץ באופן מקוון. פשוט, קל ומהיר.
          </p>
        </div>
        
        <div>
          <h3 class="text-xl font-bold mb-3">קישורים מהירים</h3>
          <ul class="space-y-2">
            <li>
              <router-link to="/" class="text-gray-300 hover:text-white">
                דף הבית
              </router-link>
            </li>
            <li>
              <router-link to="/about" class="text-gray-300 hover:text-white">
                אודות
              </router-link>
            </li>
            <li>
              <router-link to="/form" class="text-gray-300 hover:text-white">
                טופס מכירה
              </router-link>
            </li>
          </ul>
        </div>
        
        <div>
          <h3 class="text-xl font-bold mb-3">יצירת קשר</h3>
          <p class="text-gray-300">
            לשאלות ובירורים נוספים:
            <br />
            <a href="mailto:contact@hametz-sale.com" class="hover:text-white">
              contact@hametz-sale.com
            </a>
          </p>
        </div>
      </div>
      
      <div class="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
        <p>© {{ currentYear }} מכירת חמץ אונליין. כל הזכויות שמורות.</p>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
  computed: {
    currentYear() {
      return new Date().getFullYear();
    }
  }
}
</script> 