<template>
    <header v-if="showHeader" class="header">
        <h2><img src="" alt="">Logo</h2>
        <ul>
            <li>
                <router-link to="">
                    <a href="">Futsal</a>
                </router-link>
            </li>

            <li>
                <router-link to="">
                    <a href="">Mini Soccer</a>
                </router-link>
            </li>

            <li>
                <router-link to="">
                    <a href="">Basket</a>
                </router-link>
            </li>

        </ul>

        <div class="user">
            <img src="" alt="">
        </div>
    </header>
</template>

<script>
export default {
    computed: {
        showHeader() {
            const currentPath = this.$route.path;
            return currentPath !== '/' && currentPath !== '/registration';
        },
    },
};  
</script>

<style scoped>
.header{
    background-image: linear-gradient(90deg, #5588ff, #3366ff);
    color: black;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index: 1000; 
    font-family: 'Montserrat', sans-serif;
}
.header ul{
  display: flex;
  justify-content: center;
  align-items: center;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
}
.header ul li{
  list-style: none;
  margin-left: 20px;
  font-size: 20px;
}
header ul li a{
  text-decoration: none;
  padding: 0px 10px;
  color: white;
  border-radius: 2px;
  font-weight: bold;
  
}

</style>