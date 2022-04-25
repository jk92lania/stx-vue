<template>
    <header class="header" :class="[gnb_active ? 'header-active': '']">
            <div class="header-bg"></div>
            <div class="nav-bg"></div>
            <div class="container">
                <router-link :to="{name:'Home'}" title="STX 건설" class="logo">
                    <img :src="require('@/assets/images/logo.png')" alt="STX 건설"></router-link>
                <!-- <router-link :to="{name:'Home'}" title="STX 건설" class="logo" @click.prevent="click_logo"><img :src="require('@/assets/images/logo.png')" alt="STX 건설"></router-link> -->
                <nav class="nav">
                    <ul class="gnb clearfix" ref="ref_gnb" @mouseenter="overFn" @mouseleave="leaveFn" v-html="menu_html">
                        
                    </ul>
                </nav>
                <div class="language">
                    <ul class="language-list">
                        <li>
                            <a href="#" class="language-no">eng</a>
                        </li>
                        <li>
                            <a href="#">kor</a>
                        </li>
                    </ul>
                </div>
            </div>
    </header>
</template>

<script>
import { onMounted, ref } from 'vue';
import {useRouter} from 'vue-router';
import $ from 'jquery';

export default {
    
    setup() {
        // 태그 참조 저장
        const ref_header = ref(null);
        const ref_gnb = ref(null);
        // gnb 마우스 오버 보관
        const gnb_active = ref(false);
        // mouseenter시 실행할 함수
        const overFn = () => {
            gnb_active.value = true;
        }
        // mouseleave시 실행할 함수
        const leaveFn = () => {
            gnb_active.value = false;

        }
        const menu_html = ref('');

        // logo click
        const router = useRouter();
        const click_logo = () => {
            router.push({
                name : 'Home'
            });
        }


        onMounted(()=>{
            // menu_html.value = "<li>안녕</li>"
            function MakeMenu(_mainmenu, _mainlink, _submenu, _sublink){
                this.mainmenu = _mainmenu;
                this.mainlink = _mainlink;
                this.submenu = _submenu;
                this.sublink = _sublink;
            }

            let menu_data = [
                new MakeMenu('회사소개', 'Home', '인사말,STX건설,기업문화,STX건설연혁,조직안내,윤리경영,안전·환경·품질경영,찾아오시는 길', '#,#,#,#,#,#,#,#'),
                new MakeMenu('사업분야', 'Company', '건축사업,주택사업,토목사업,플랜트/공작기계사업,해외사업', '#,#,#,#,#'),
                new MakeMenu('사회공헌', 'Bussiness', '나눔의생각,주요활동분야,활동현황', '#,#,#'),
                new MakeMenu('홍보센터', 'Cb', '홍보동영상,홍보브로슈어,STX건설뉴스', '#,#,#'),
                new MakeMenu('고객지원', 'CS', '자주묻는질문, 고객문의', '#,#'),
                new MakeMenu('채용정보', 'Job', '채용안내, 채용공고, 채용FAQ', '#,#,#')

            ];

            let menu_total = menu_data.length;
            let menu_li = '';
            for(let i = 0; i < menu_total; i++){
                menu_li += '<li>';

                let temp = menu_data[i];
                
                let cate = `<a href="${temp.mainlink}" class="menutag">${temp.mainmenu}</a>`;
                // let cate = `<router-link v-bind:to="{name:'${temp.mainlink}'}" class="gnb-link">${temp.mainmenu}</router-link>`;
                // let cate = `<a href="${temp.mainlink}">${temp.mainmenu}</a>`;
                
                // submenu
                cate += '<ul class=submenu>';
                let temp_sub = (temp.submenu).split(',');
                let temp_sub_link = (temp.sublink).split(',');
                let temp_sub_lis = '';
                for(let j = 0; j < temp_sub.length; j++){
                    temp_sub_lis += `<li><a href="${temp_sub_link[j]}">${temp_sub[j]}</a></li>`;
                }
                
                cate += temp_sub_lis;
                cate += '</ul>';

                menu_li += cate;
                menu_li += '</li>';
            }
            // 최종 출력
            // menu_html.value = menu_li;
            $('.gnb').html(menu_li);
            // 메뉴 태그 연결
                $.each( $('.menutag'), function(){
                    $(this).click(function(e){
                        e.preventDefault();
                        let name = $(this).attr('href');
                        router.push({
                            name
                        });
                    });
                });
        });
        return {
            ref_header,
            ref_gnb,
            gnb_active,
            
            overFn,
            leaveFn,

            menu_html,
            click_logo
        }
    }

}
</script>

<style>
.header {
    position: fixed;
    left: 0;
    top: 0;
    display: block;
    width: 100%;
    height: 80px;
    /* background: #fff; */
    /* border-bottom: 1px solid rgba(255, 255, 255, 0.4); */

    z-index: 999;
    overflow: hidden;
    box-shadow: 0px 0px 7px 0px rgb(0 0 0 / 20%);
    -webkit-box-shadow: 0px 0px 7px 0px rgb(0 0 0 / 20%);
    transition: all 0.3s;
}

.header:hover {
    height: 410px;
}

.header .container {
    height: 100%;
}

.logo {
    position: absolute;
    right: 100%;
    top: 40px;
    /* 보이는 내용물만 옮겨라. */
    transform: translate(-150px, -50%);
    display: block;

    /* margin-right: 290px; */
}

.nav {
    position: absolute;
    left: 50%;
    top: 0;
    transform: translateX(-50%);
    display: block;
    width: calc(176px * 5 + 74px);
    /* height: 0px; */
    height: 348px;
    /* overflow: hidden; */
    transition: height 0.3s;
}

.nav:hover {
    /* height: 348px; */
}

.gnb {
    position: relative;
    display: block;
}

.gnb>li {
    position: relative;
    display: block;
    width: 176px;
    float: left;
    text-align: left;
}

.gnb>li:last-child {
    width: 74px;
}

.gnb-link {
    position: relative;
    display: inline-block;
    font-size: 19px;
    font-weight: 500;
    color: #000;

    padding: 26px 0;
    cursor: pointer;
}

.gnb>li>a {
    position: relative;
    display: inline-block;
    font-size: 19px;
    font-weight: 500;
    color: #000;

    padding: 26px 0;
    cursor: pointer;
}

.gnb>li:hover>.gnb-link {
    color: red;
}

.gnb>li>a:hover {
    color: red;
}

.submenu {
    position: relative;
    display: block;

    padding-top: 44px;
    /* height: 0; */
    height: 348px;
    overflow: hidden;
    transition: height 0.3s;
}

.nav:hover .submenu {
    /* height: 348px; */
}

.submenu li {
    position: relative;
    display: block;
    line-height: 28.8px;
}

.submenu li a {
    position: relative;
    display: inline-block;

    color: #fff;
    font-size: 15px;
    cursor: pointer;
}

.header-bg {
    position: absolute;
    left: 0;
    top: 0px;
    display: block;
    width: 100vw;
    height: 80px;

    background-color: #fff;
    /* z-index: -1; */
}
.nav-bg {
    position: absolute;
    left: 0;
    top: 80px;
    display: block;
    width: 100vw;
    height: 100%;

    background-color: rgba(0, 0, 0, 0.6);
    /* z-index: -1; */
}



.language {
    position: absolute;
    left: 100%;
    top: 50%;
    transform: translate(150px, -50%);
    display: block;

    /* margin-left: 290px; */
}

.language-list {
    position: relative;
    display: block;
    white-space: nowrap;
    font-size: 0;
}

.language-list>li {
    position: relative;
    display: inline-block;
    margin-left: 24px;
}

.language-list>li:first-child {
    margin-left: 0;
}

.language-list>li:last-child::before {
    content: ' ';
    position: absolute;
    left: -12px;
    top: 50%;
    transform: translateY(-50%);
    display: block;
    width: 1px;
    height: 11px;
    background-color: #999;
}



.language-list>li>a {
    position: relative;
    display: block;

    color: #000;
    font-size: 15px;
    font-weight: 500;
    text-transform: uppercase;
}

.language-no {
    color: #888 !important;
}


</style>