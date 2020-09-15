<template>
  <div>
    <div class="welcome shadow">
      <div class="jumbutron">
        <h1>Welcome</h1>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipi
          sicing elit. Vitae obcaecati nulla earum magnam qu
          isquam veniam eius. Quia ipsa sint quod iusto volupta
          te similique assumenda vitae? Laudantium quibusdam la
          bore ipsum asperiores.
        </p>
        <div class="buttons">
          <router-link to="/login" class="btn-custom">Login</router-link>
          <router-link to="/register" class="btn-custom">Register</router-link>
        </div>
      </div>
    </div>

    <br />
    <br />
    <center>
      <div class="Advertising">
        <div class="paper">
          <div class="face face1">
            <div class="content">
              <img src="/images/fast.png" alt />
              <h3>fast</h3>
            </div>
          </div>
          <div class="face face2">
            <div class="content">
              <p>
                Lorem, ipjhntyehnrthtybhbtyhrthrta
                tjwykwtngfnvkjjhbifhvbfhdjakfdnsum.
                Lorem, ipjhntyehnrthtybhbtyhrthrta
                tjwykwtngfnvkjjhbifhvbfhdjakfdnsum
                Lorem, ipjhntyehnrthtybhbtyhrthrta
                tjwykwtngfnvkjjhbifhvbfhdjakfdnsum
              </p>
            </div>
          </div>
        </div>

        <div class="paper">
          <div class="face face1">
            <div class="content">
              <img src="/images/interactive.png" alt />
              <h3>interactive</h3>
            </div>
          </div>
          <div class="face face2">
            <div class="content">
              <p>
                Lorem, ipjhntyehnrthtybhbtyhrthrta
                tjwykwtngfnvkjjhbifhvbfhdjakfdnsum.
                Lorem, ipjhntyehnrthtybhbtyhrthrta
                tjwykwtngfnvkjjhbifhvbfhdjakfdnsum
                Lorem, ipjhntyehnrthtybhbtyhrthrta
                tjwykwtngfnvkjjhbifhvbfhdjakfdnsum
              </p>
            </div>
          </div>
        </div>

        <div class="paper">
          <div class="face face1">
            <div class="content">
              <img src="/images/secure.png" alt />

              <h3>secure</h3>
            </div>
          </div>
          <div class="face face2">
            <div class="content">
              <p>
                Lorem, ipjhntyehnrthtybhbtyhrthrta
                tjwykwtngfnvkjjhbifhvbfhdjakfdnsum.
                Lorem, ipjhntyehnrthtybhbtyhrthrta
                tjwykwtngfnvkjjhbifhvbfhdjakfdnsum
                Lorem, ipjhntyehnrthtybhbtyhrthrta
                tjwykwtngfnvkjjhbifhvbfhdjakfdnsum
              </p>
            </div>
          </div>
        </div>
      </div>
    </center>
  </div>
</template>

<script>
import Navbar from "./components/Navbar";
components: {
  Navbar;
}

export default {};
</script>


<style scoped>
.btn-custom {
  background: #f25f5c;
  padding: 10px 20px;
  border-radius: 2px;
  border: none;
  color: #fff;
}

a {
  text-decoration: none;
  color: rgb(0, 0, 0);
}
a:hover {
  text-decoration: none;
  color: #ff4e00;
}
a:active {
  text-decoration: none;
  color: #ec9f05;
}
input[type="submit"] {
  background: linear-gradient(45deg, #ec9f05, #ff4e00);
}

.gradient {
  background: linear-gradient(45deg, #fe5f75, #fc9842);
}
.gradient-2 {
  background: linear-gradient(180deg, #ec9f05, #ff4e00);
}
.gradient-2 {
  background: linear-gradient(45deg, #ec9f05, #ff4e00);
}

@media (min-width: 1100px) {
  .Advertising {
    width: 80%;
    position: relative;
    display: flex;
    justify-content: space-between;
  }
}
.Advertising.paper {
  position: relative;
}

.Advertising .paper .face {
  width: 320px;
  height: 200px;
  transition: 0.5s;
}

.Advertising .paper .face.face1 {
  position: relative;
  background: #ffffff;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
  transform: translateY(100px);
}

.Advertising .paper:hover .face.face1 {
  background: linear-gradient(45deg, #ec9f05, #ff4e00);
  transform: translateY(0);
}

.Advertising .paper .face.face2 {
  position: relative;
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  box-sizing: border-box;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  transform: translateY(-100px);
}
.Advertising .paper .face.face2 .content p {
  margin: 0;
  padding: 0;
}

.Advertising .paper .face.face2 .content a {
  margin: 15px 0 0;
  display: inline-block;
  text-decoration: none;
  font-weight: 900;
  color: #333;
  padding: 5px;
  border: 1px solid #333;
  margin: 0.5em;
}
.Advertising .paper .face.face2 .content a:hover {
  background: linear-gradient(45deg, #ec9f05, #ff4e00);
  color: #fff;
}
.Advertising .paper .face.face1 .content {
  transition: 0.5s;
}

.Advertising .paper:hover .face.face1 .content {
  opacity: 1;
}

.Advertising .paper .face.face1 .content img {
  max-width: 100px;
}

.Advertising .paper .face.face1 .content h3 {
  margin: 10px 0 0;
  padding: 0;
  color: #fff;
  text-align: center;
  font-size: 1.5em;
}
.Advertising .paper:hover .face.face2 {
  transform: translateY(0);
}

.welcome {
  text-align: center;
  background: linear-gradient(
    45deg,
    #f17c58,
    #e94584,
    #24aadb,
    #27dbb1,
    #ffdc18,
    #ff3706
  );
  padding: 1rem;
  border-radius: 6px;
  color: #78849e;
  width: 100%;
  border-radius: 10px;
}

.welcome .buttons a {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  margin: 0.5em;
}

.shadow {
  position: relative;
  margin: 200px auto 0;
  width: 50%;
  height: 50%;
  background: #ffffff;
  border-radius: 10px;
}

.shadow::before,
.shadow::after {
  content: "";
  position: absolute;
  top: -2px;
  left: -2px;
  background: linear-gradient(
    45deg,
    #fb0094,
    #0000ff,
    #00ff00,
    #ffff00,
    #ff0000,
    #fb0094,
    #0000ff,
    #00ff00,
    #ffff00,
    #ff0000
  );
  background-size: 400%;
  width: calc(100% + 4px);
  height: calc(100% + 4px);
  z-index: -1;
  animation: animate 20s linear infinite;
  border-radius: 10px;
}

.shadow::after {
  filter: blur(20px);
}

@keyframes animate {
  0% {
    background-position: 0 0;
  }

  50% {
    background-position: 400% 0;
  }

  100% {
    background-position: 0 0;
  }
}
</style>