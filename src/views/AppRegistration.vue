<template>
    <div class="registration-container">
        <div class="registration-box">
            <form action="">
                <button><router-link to="/" ><img src="../assets/img/background/Asset 2.svg" alt=""></router-link></button>
                <h2>Create Account</h2>
                <div class="input-box">
                    <input type="text" placeholder="Fullname">
                </div>

                <div class="input-box">
                    <input type="text" placeholder="Email">
                </div>

                <div class="input-box">
                    <input type="text" placeholder="Phone Number">
                </div>

                <div class="input-box">
                    <input type="text" placeholder="Password">
                </div>

                <div class="input-box">
                    <input type="text" placeholder="Confirm Password">
                </div>

                <div class="option">
                    <P><input type="checkbox"> Agree to Terms and Condition</P>

                    <button type="submit" name="Sign in"> Sign in</button>
                </div>
            </form>

        </div>

    </div>
</template>

<style scoped>
.registration-container{
  position: relative;
  height: 100vh;
  display: flex;
  justify-content: center; 
  align-items: center; 
  background: url('/src/assets/img/background/background.png') no-repeat center center fixed;
  background-size: cover; 
  font-family: 'Montserrat', sans-serif;
}
.registration-box{
  background-color: white;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.5);
  border-radius: 20px;
  max-width: 90%;
  padding: 20px 70px;
  margin-right: -800px;
}
.registration-box button img{
  height: 18px;
}
.registration-box button{
  position: flex;
  border-radius: 10px;
  height: 30px;
  width: 25%;
}
.registration-box h2{
  font-size: 30px;
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
.option{
  font-size: 17px;
  text-align: center;
  margin: 25px 0;
}
.option p{
  color:black;
}
.option button{
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
</style>