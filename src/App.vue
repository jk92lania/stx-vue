<template>
  <div class="wrap">
        <transition name="fade">
            <ModalView v-if="modal_active" @close-modal="hideModal"/>
        </transition>  
        <!-- 상단 -->
        <HeaderView/>
        <!--// 상단 -->
        <!-- 메인 -->
        <router-view />
        <!--// 메인 -->
        <!-- 하단 -->
        <FooterView />
        <!--// 하단 -->
    </div>
</template>

<script>
import ModalView from '@/components/ModalView.vue'
import HeaderView from '@/components/HeaderView.vue'
import FooterView from '@/components/FooterView.vue'
import { ref } from 'vue'

export default {
  components : {
    ModalView,
    HeaderView,
    FooterView
  },
  setup() {
      const modal_active = ref(true);
      const hideModal = () => {
          modal_active.value = false;
      };
    return {
        modal_active,
        hideModal
    }
  }
}
</script>

<style>

@charset 'utf-8';
@import url('@/assets/css/notosanskr/NotoSansKR.css');
@import url('@/assets/css/reset.css');

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    /* outline-style: none; */
}

a {
    color: #333;
    text-decoration: none;
}

li {
    list-style: none;
}

img {
    border: 0;
    vertical-align: middle;
}

html {
    font-size: 16px;
    overflow-x: hidden;
}

body {
    font-family: 'Noto Sans KR';
    font-size: 1rem;
    font-weight: 200;
    line-height: 1.15;
    letter-spacing: 0;
    color: #444;
}

/* 공통 */
.container {
    position: relative;
    display: block;
    width: 1200px;
    margin: 0 auto;
    word-break: break-all;
}

.clearfix::after {
    content: '';
    position: relative;
    display: block;
    width: 100%;
    clear: both;
}

/* //공통 */
.wrap {
    position: relative;
    display: block;
    min-width: 1200px;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

</style>
