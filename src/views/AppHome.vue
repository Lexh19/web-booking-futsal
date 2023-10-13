<template>
    <div class="home">

    <div class="recommendation">
        <h2>Rekomendasi</h2>
    </div>

        <div class="home-box">
            <img src="../assets/img/arrow 2.svg" alt="">
            <div class="input-home">
                <img src="../assets/img/home/forza.svg" alt="">
                <div class="text-container">
                    <p> Futsal </p>
                    <h2> Forza Futsal </h2>
                    <p> Sleman <a>3 Lapangan </a></p>
                    <p> Mulai dari </p>
                    <h3> Rp.110,000 <a>/Jam</a></h3>
                </div>
            </div>

            <div class="input-home">
                <img src="../assets/img/home/forza.svg" alt="">
                <div class="text-container">
                    <p> Futsal </p>
                    <h2> Forza Futsal </h2>
                    <p> Sleman <a>3 Lapangan </a></p>
                    <p> Mulai dari </p>
                    <h3> Rp.110,000 <a>/Jam</a></h3>
                </div>
            </div>

            <div class="input-home">
                <img src="../assets/img/home/forza.svg" alt="">
                <div class="text-container">
                    <p> Futsal </p>
                    <h2> Forza Futsal </h2>
                    <p> Sleman <a>3 Lapangan </a></p>
                    <p> Mulai dari </p>
                    <h3> Rp.110,000 <a>/Jam</a></h3>
                </div>
            </div>

            <div class="input-home">
                <img src="../assets/img/home/forza.svg" alt="">
                <div class="text-container">
                    <p> Futsal </p>
                    <h2> Forza Futsal </h2>
                    <p> Sleman <a>3 Lapangan </a></p>
                    <p> Mulai dari </p>
                    <h3> Rp.110,000 <a>/Jam</a></h3>
                </div>
            </div>
            <img src="../assets/img/arrow 1.svg" alt="">
        </div>
    </div>
   
</template>


<style scoped>
.home{
    position: relative;
    height: 100vh;
    background-color: white;
    background-size: cover;
    margin-top: 80px; 
    font-family: 'Montserrat', sans-serif;
    padding: 0px 0px 100px 0px;
}
.home-box{
  display: flex;
  width: 100%;
  height: 70%;
}
.home-box img{
  height: 70px;
  margin-top: 15%;

}
.recommendation {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px 0px 30px;
  background-color: #ffa600fa; 
  box-shadow: 2px 3px 9px rgba(0, 0, 0, 0.5);
  border-radius: 20px;
  width: 200px;
  height: 50px;
}
.recommendation h2{
  color: white;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
}
.input-home{
  border-radius: 20px;
  margin-left: 20px;
  margin: 50px 40px;
  background-color: white;
  box-shadow: 3px 3px 9px rgba(0, 2, 0, 0.5);
}
.input-home img{
  height: 50%;
  border-radius: 18px;
  display: flex;
  margin: 10px 0px;
  box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.5);
}
.text-container{
    margin: 10px 10px;
}
</style>

