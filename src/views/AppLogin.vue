<template>

    <div class="login-container">

      <div class="login-pict">
        <img src="/src/assets/img/login/login.png" alt="">
      </div>


      <div class="login-box">
        <form action="">
          <h2>Account Login</h2>
          <div  class="input-box">
            <input type="email" placeholder="Email" required>
          </div>

          <div class="input-box">
            <input type="password" placeholder="Password" required>
          </div>

          <div class="register-link">
            <p><input type="checkbox"> Remember me 
            <a href="#">Forget password?</a></p>

            <button type="submit" name="submit">Login</button>

            <p> Don't have an account? <a href="#"> Register</a></p>
            </div>
          
            <div class="opsion">
              <button><img src="/src/assets/img/icon/facebook.png" alt=""></button>
              <button><img src="/src/assets/img/icon/search.png" alt=""></button>
              <button><img src="/src/assets/img/icon/apple-logo.png" alt=""></button>
            </div>
          

        </form>
      </div>

      
    </div>

</template>

<style scoped>

.login-container{
display: flex;
align-items: center;
justify-content: center;
height: 100vh;
}
.login-pict{
  position: absolute;
  height: 100%;
  width: 100%;
}
.login-pict img{
  height: 740px;
  width: 1000px;
}

.login-box{
  display: flex;
  padding: 20px;
  margin-right: -1000px;
}

.login-box h2{
  font-size: 30px ;
  text-align: center;
  color: white;
}
.input-box input{
  position: relative;
  width: 100%;
  height: 30px;
  border: 5px solid #333;
  margin: 10px 0;
  outline: none;
  border-radius: 5px;
  color: black;
}
.input-box input::placeholder {
  color: black;
}

.register-link{
  font-size: 17px;
  text-align: center;
  margin: 25px 0;
}
.register-link p{
  color: white;
}
.register-link p a{
  color: #333;
  text-decoration: none;
  font-weight: 600;
}
.register-link p a:hover{
  text-decoration: underline;
}

.register-link button{
  position: relative;
  height: 30px;
  width: 80%;
  border-radius: 5px;
  background: #333;
  border: none;
  outline: none;
  margin: 20px 0;
  margin-left: 15px;
  color: white;
}
.opsion button{
  height: 30px;
  width: 30%;
  border-radius: 10px;
  margin: 10px 2px ;
} 
.opsion img{
height: 20px;
position: center;
}

</style>