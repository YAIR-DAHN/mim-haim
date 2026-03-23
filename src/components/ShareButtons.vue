<template>
  <div class="share-container">
    <div class="share-title" v-if="showTitle">
      <span>{{ title }}</span>
    </div>
    <div class="share-buttons">
      <button @click="shareOnWhatsapp" class="share-btn whatsapp" :class="size" aria-label="שתף בוואטסאפ">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="share-icon">
          <path fill-rule="evenodd" clip-rule="evenodd"
            d="M20.463 3.488C18.217 1.24 15.231 0.001 12.05 0 5.495 0 0.16 5.334 0.157 11.892c-0.001 2.096 0.546 4.142 1.588 5.945L0.057 24l6.304-1.654c1.737 0.948 3.699 1.447 5.689 1.447h0.005c6.554 0 11.89-5.335 11.893-11.893 0.002-3.177-1.234-6.165-3.48-8.413zM12.05 21.785h-0.004c-1.774 0-3.513-0.477-5.031-1.378l-0.361-0.214-3.741 0.981 0.999-3.648-0.235-0.374c-0.99-1.574-1.512-3.393-1.511-5.26 0.002-5.45 4.437-9.884 9.889-9.884 2.64 0.001 5.122 1.03 6.988 2.898 1.866 1.869 2.893 4.352 2.892 6.993-0.003 5.45-4.437 9.886-9.885 9.886zm5.43-7.403c-0.298-0.149-1.758-0.868-2.031-0.967-0.272-0.099-0.47-0.149-0.669 0.149-0.198 0.297-0.768 0.967-0.941 1.165-0.173 0.198-0.347 0.223-0.644 0.074-0.297-0.149-1.255-0.462-2.39-1.475-0.883-0.788-1.48-1.761-1.653-2.059-0.173-0.297-0.018-0.458 0.13-0.606 0.134-0.133 0.297-0.347 0.446-0.521 0.151-0.172 0.2-0.296 0.3-0.495 0.099-0.198 0.05-0.372-0.025-0.521-0.075-0.148-0.669-1.611-0.916-2.206-0.242-0.579-0.487-0.501-0.669-0.51l-0.57-0.01c-0.198 0-0.52 0.074-0.792 0.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c0.149 0.198 2.095 3.2 5.076 4.487 0.709 0.306 1.263 0.489 1.694 0.626 0.712 0.226 1.36 0.194 1.872 0.118 0.571-0.085 1.758-0.719 2.006-1.413 0.248-0.695 0.248-1.29 0.173-1.414-0.074-0.124-0.272-0.198-0.57-0.347z" />
        </svg>
      </button>
      <button @click="shareOnFacebook" class="share-btn facebook" :class="size" aria-label="שתף בפייסבוק">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="share-icon">
          <path
            d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
        </svg>
      </button>
      <button @click="shareByEmail" class="share-btn email" :class="size" aria-label="שתף באימייל">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="share-icon">
          <path
            d="M0 3v18h24v-18h-24zm21.518 2l-9.518 7.713-9.518-7.713h19.036zm-19.518 14v-11.817l10 8.104 10-8.104v11.817h-20z" />
        </svg>
      </button>
      <button @click="copyLink" class="share-btn copy" :class="size" aria-label="העתק קישור">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="share-icon">
          <path
            d="M16 1H4C2.9 1 2 1.9 2 3v14h2V3h12V1zm3 4H8C6.9 5 6 5.9 6 7v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z" />
        </svg>
      </button>
    </div>
    <transition name="fade">
      <div v-if="showCopiedMessage" class="copied-message">
        ✓ הקישור הועתק!
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'ShareButtons',
  props: {
    title: {
      type: String,
      default: 'שתף עם חברים'
    },
    text: {
      type: String,
      default: 'מכירת חמץ וקמחא דפסחא - כולל שערי ניסים'
    },
    url: {
      type: String,
      default: 'https://mehirat-hametz.vercel.app/'
    },
    size: {
      type: String,
      default: 'medium',
      validator: function (value) {
        return ['small', 'medium', 'large'].indexOf(value) !== -1;
      }
    },
    showTitle: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      showCopiedMessage: false
    };
  },
  methods: {
    shareOnWhatsapp() {
      const encodedText = encodeURIComponent(`${this.text} ${this.url}`);
      window.open(`https://wa.me/?text=${encodedText}`, '_blank');
    },
    shareOnFacebook() {
      const encodedUrl = encodeURIComponent(this.url);
      window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`, '_blank');
    },
    shareByEmail() {
      const subject = encodeURIComponent(this.text);
      const body = encodeURIComponent(`${this.text}\n${this.url}`);
      window.open(`mailto:?subject=${subject}&body=${body}`);
    },
    copyLink() {
      navigator.clipboard.writeText(this.url).then(() => {
        this.showCopiedMessage = true;
        setTimeout(() => {
          this.showCopiedMessage = false;
        }, 2000);
      });
    }
  }
};
</script>

<style scoped>
.share-container {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.75rem;
  padding: 0.75rem;
}

.share-title {
  font-weight: 600;
  color: #78716c;
  font-size: 0.9rem;
}

.share-buttons {
  display: flex;
  gap: 0.625rem;
  justify-content: center;
  flex-wrap: wrap;
}

.share-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 0.75rem;
  transition: all 0.25s ease;
  border: none;
  cursor: pointer;
  color: white;
  position: relative;
  overflow: hidden;
}

.share-btn:active {
  transform: scale(0.95);
}

.share-btn.small {
  width: 34px;
  height: 34px;
  border-radius: 0.625rem;
}

.share-btn.medium {
  width: 42px;
  height: 42px;
}

.share-btn.large {
  width: 50px;
  height: 50px;
}

.share-icon {
  width: 55%;
  height: 55%;
}

.whatsapp {
  background: linear-gradient(135deg, #25D366, #128C7E);
  box-shadow: 0 4px 12px rgba(37, 211, 102, 0.3);
}

.facebook {
  background: linear-gradient(135deg, #1877F2, #0d5fc7);
  box-shadow: 0 4px 12px rgba(24, 119, 242, 0.3);
}

.email {
  background: linear-gradient(135deg, #ea4335, #c5221f);
  box-shadow: 0 4px 12px rgba(234, 67, 53, 0.3);
}

.copy {
  background: linear-gradient(135deg, #78716c, #57534e);
  box-shadow: 0 4px 12px rgba(120, 113, 108, 0.3);
}

.copied-message {
  position: absolute;
  bottom: -28px;
  left: 50%;
  transform: translateX(-50%);
  background: #292524;
  color: white;
  padding: 0.35rem 0.875rem;
  border-radius: 0.5rem;
  font-size: 0.8rem;
  font-weight: 500;
  z-index: 10;
  white-space: nowrap;
}

.fade-enter-active,
.fade-leave-active {
  transition: all 0.2s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateX(-50%) translateY(4px);
}

@media (hover: hover) {
  .share-btn:hover {
    transform: translateY(-2px);
  }

  .whatsapp:hover {
    box-shadow: 0 8px 20px rgba(37, 211, 102, 0.35);
  }

  .facebook:hover {
    box-shadow: 0 8px 20px rgba(24, 119, 242, 0.35);
  }

  .email:hover {
    box-shadow: 0 8px 20px rgba(234, 67, 53, 0.35);
  }

  .copy:hover {
    box-shadow: 0 8px 20px rgba(120, 113, 108, 0.35);
  }
}
</style>