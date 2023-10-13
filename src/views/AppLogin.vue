<template>
    <div class="login-container">
      <div class="login-box">
        <form action="">
          <h2>User Login</h2>
          <div class="input-box">
            <input type="email" placeholder="Email" required>
          </div>

          <div class="input-box">
            <input type="password" placeholder="Password" required>
          </div>

          <div class="register-link">
            <router-link to="home"><p><input type="checkbox"> Remember me 
            <a href="#">Forget password?</a></p></router-link>

            <button type="submit" name="submit">Login</button>

            <router-link to="/registration">
              <p> Don't have an account? <a href="#"> Register</a></p>
            </router-link>
          </div>
          
          <div class="option">
            <p>Or Log In With: </p>
            <button><img src="/src/assets/img/icon/facebook.png" alt=""></button>
            <button><img src="/src/assets/img/icon/search.png" alt=""></button>
          </div>
          

        </form>
      </div>
    </div>

</template>


<style scoped>

.login-container{
  position: relative;
  height: 100vh;
  display: flex;
  justify-content: center; 
  align-items: center; 
  background: url('/src/assets/img/background/background.png') no-repeat center center fixed;
  background-size: cover; 
  font-family: 'Montserrat', sans-serif;
} 

.login-box{
  background-color: white;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.5);
  border-radius: 20px;
  max-width: 90%;
  padding: 20px 50px;
  margin-right: -800px;
}


.login-box h2{
  font-size: 30px ;
  text-align: center;
  color: black;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
}
.input-box input{
  position: relative;
  width: 100%;
  height: 30px;
  border: 3px solid #333;
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
  color:black;
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
  box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
}
.option p{
  text-align: center;
}
.option button{
  height: 30px;
  width: 25%;
  border-radius: 10px;
  margin: 5px -25px ;
  margin-left: 50px;
  box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
} 
.option img{
height: 20px;
position: center;
}

</style>