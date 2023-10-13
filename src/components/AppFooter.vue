<template>
    <footer v-if="showFooter" class="footer">
        <div class="information">
            <p> Contact Info</p>

            <div class="information-link">
                <p><img src="" alt="">Instagram</p>
                <p><img src="" alt="">Nomer WA</p>
                <p><img src="" alt="">Gmail</p>
                <p><img src="" alt="">Lokasi</p>
            </div>
        </div>
    </footer>
</template>

<script>
export default {
    computed: {
        showFooter() {
            const currentPath = this.$route.path;
            return currentPath !== '/' && currentPath !== '/registration';
        },
    },
};
</script>

<style scoped>
.footer {
    margin-top: 620px;
    color: white;
    background-image: linear-gradient( #5588ff, #3366ff);
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    font-family: 'Montserrat', sans-serif;
}
.information {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 20px;
    margin-left: 120px;
}
</style>

