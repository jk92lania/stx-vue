<template>
    <div class="main">
        <VisualView />
        <PartView />
        <NewsView />
        <CustomerView />
        <AboutView />
    </div>
</template>

<script>
    import VisualView from '@/components/VisualView.vue'
    import PartView from '@/components/PartView.vue'
    import NewsView from '@/components/NewsView.vue'
    import CustomerView from '@/components/CustomerView.vue'
    import AboutView from '@/components/AboutView.vue'
    export default {
        components: {
            VisualView,
            PartView,
            NewsView,
            CustomerView,
            AboutView
        }

    }
</script>

<style scoped>
.main {
    position: relative;
    display: block;
    padding-top: 80px;
}
</style>