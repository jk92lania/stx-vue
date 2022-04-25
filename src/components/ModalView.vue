<template>
    <div class="modal">
        <div class="modal-wrap">
            <img :src="require('@/assets/images/warning_icon.png')" alt="경고">
            <b>
                이 사이트는 스터디용으로 제작되었으며 리소스는 원저작자에게 있습니다.
                본 사이트는 Chrome에 최적화 되어있습니다.
            </b>
            <a href="http://www.stxconst.co.kr/" target="_blank" class="modal-origin">
                원사이트는 http://www.stxconst.co.kr/입니다.
                <img :src="require('@/assets/images/original.png')" alt="원사이트">
            </a>
            <div class="modal-desc">
                본 사이트에서 메뉴 디자인을 위해 <em>html의 ul, css의 positon relative와 absolute, transform</em>을 사용하는 법을 배워 나갔습니다.
                <br>
                <em>background을 통한 색상이나 이미지, 그라데이션</em>을 넣는 방법에 대해 알게 되었습니다.
                <br>
                원사이트와 달리 <em>favicon 추가, js을 통한 메뉴 구성이 변경</em>되었습니다.
            </div>
            <div class="modal-close" @click="closeModal">닫기</div>
        </div>
    </div>
    
</template>

<script>
import { getCurrentInstance } from 'vue';
export default {
    emits : ['close-modal'],
    setup() {
        const { emit } = getCurrentInstance();
        const closeModal = () => {
            emit('close-modal');
        }
        return {
            closeModal
        }
    }
}
</script>

<style>
.modal {
    position: fixed;
    left: 0;
    top: 0;
    display: block;
    width: 100vw;
    height: 100vh;

    background-color: rgba(0, 0, 0, 0.5);
    z-index: 99999;
}

.modal-wrap {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    display: block;
    width: 50%;
    max-height: 1600px;

    background-color: #fff;
    border-radius: 18px;
    overflow: hidden;
    text-align: center;
    padding: 20px;
}

.modal-wrap img {
    width: 100px;
    height: 100px;
}

.modal-wrap b {
    position: relative;
    display: block;

    font-size: 16px;
    font-weight: 600;
    line-height: 20px;
    padding: 40px 30px 0px;
}

.modal-origin {
    position: relative;
    display: inline-block;

    font-size: 16px;
    font-weight: 600;
    line-height: 20px;

    color: #000;
    margin: 10px 0 20px;
    cursor: pointer;
    transition: color 0.3s;
}

.modal-origin:hover {
    color: #0084ff;
}

.modal-origin img {
    width: 20px;
    height: 20px;
    transition: all 0.3s;
}

.modal-origin:hover img {
    filter: opacity(0.5) drop-shadow(0 0 0 #0084ff);
}

.modal-desc {
    position: relative;
    display: block;

    font-size: 15px;
    color: #333;
    padding: 0 30px;
}

.modal-desc em {
    color: #0084ff;
}

.modal-close {
    position: relative;
    display: inline-block;

    background-color: #000;
    color: #fff;
    border-radius: 10px;
    border: 1px solid #000;
    font-size: 16px;
    padding: 10px 20px;
    margin: 20px 0px;
    z-index: 1;
    cursor: pointer;
}



</style>