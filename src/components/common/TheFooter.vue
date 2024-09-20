<script setup>
import { ref } from 'vue';
const copyRightYr = ref(new Date().getFullYear());
</script>

<template>
  <footer>
    <div class="footer__container">
      <p class="footer__copyright">© {{ copyRightYr }} 勤業眾信版權所有 保留一切權利</p>
      <p class="footer__statement">
        Deloitte 泛指Deloitte Touche Tohmatsu Limited（簡稱"DTTL"
        )，以及其一家或多家會員所。每一個會員所均為具有獨立法律地位之法律實體。Deloitte（"DTTL"
        )並不向客戶提供服務。請參閱
        <a
          class="footer__link"
          href="https://www2.deloitte.com/tw/tc/pages/about-deloitte/articles/about-deloitte.html"
          target="_blank"
          >關於勤業眾信</a
        >
        了解更多有關Deloitte及其會員所。
      </p>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
footer {
  margin-top: 2rem;
  /* padding-left: sidebar寬 */
  padding: 1rem 1rem 3rem 11rem;
  font-size: 0.75rem;
  background-color: #000;
  color: #fff;

  .footer__container {
    max-width: 1224px;
    margin: 0 auto;

    .footer__copyright {
      font-size: 1rem;
      margin-bottom: 0.5rem;
    }

    .footer__statement {
      line-height: 1.25rem;

      .footer__link {
        color: var(--color-link);
        text-decoration: none;
        font-weight: 700;
        font-size: 0.875rem;
      }
    }
  }
}
</style>
