<template>
  <section class="customer">
                <div class="container">
                    <a href="#">
                        <h3>FAQ</h3>
                        <p>STX건설 고객님들을 위해<br>
                            자주하시는 질문과 답변을 정리하였습니다.
                        </p>
                    </a>
                    <a href="#">
                        <h3>고객문의</h3>
                        <p>STX건설 고객상담은 고객만족<br>
                            서비스를 위하여 최선을 다하고 있습니다.
                        </p>
                    </a>
                </div>
            </section>
</template>

<script>
export default {

}
</script>

<style scoped>
.customer {
    position: relative;
    display: block;
    background: #f8f8f8;
}

.customer .container {
    padding-top: 60px;
    padding-bottom: 100px;
    overflow: hidden;
}


.customer a {
    position: relative;
    display: block;
    width: calc(50% - 1px);
    background: #fff;

    padding: 40px 50px;
}

.customer a:first-child {
    float: left;
    background: #fff url('@/assets/images/bg_faq.png') no-repeat;
    background-position: calc(100% - 40px) 50%;

}

.customer a:last-child {
    float: right;
    background: #fff url('@/assets/images/bg_custom.png') no-repeat;
    background-position: calc(100% - 40px) 50%;
}

.customer h3 {
    position: relative;
    display: block;
    font-size: 30px;
    font-weight: 500;
    color: #000;
    padding-bottom: 25px;
}

.customer p {
    position: relative;
    display: block;
}

</style>