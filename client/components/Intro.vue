<template lang="pug">
  section.intro
    .intro-wrapper
      .logo-wrapper
        img(src="~/static/logo.svg")

    .intro-wrapper
      p.text
        span B
        span A
        span R
        span N
        span A
        span R
        span D
    .login-button-wrapper
      a(href="https://discordapp.com/api/oauth2/authorize?client_id=595951033662963735&redirect_uri=https%3A%2F%2Fwhipple-app.herokuapp.com%2Fapi%2Flogin&response_type=code&scope=identify%20email").discord-login
        .floating-button
          img(src="~/static/discord-logo.svg")
</template>

<script>
export default {
  data() {
    return {

    }
  }
}
</script>

<style lang="scss">
  .intro {
    width: 100vw;
    height: 100vh;

    .intro-wrapper {
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      text-align: center;

      .text {
        position: relative;
        color: #fafafa;
        font-size: 30px;
        letter-spacing: 2px;
        animation: disappear .5s ease forwards;
        animation-delay: 6s;

        @keyframes disappear {
          from {transform: rotateX(0deg)}
          to   {transform: rotateX(90deg)}
        }

        &:after {
          content: "";
          position: absolute;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
          height: 0px;
          width: 0px;
          background-color: white;
          animation: spinOut 1s ease forwards;
          animation-delay: 5s;
        }

        @keyframes spinOut {
          0% {height: 0px; width: 1px;}
          50% {height: 100%; width: 1px}
          100% {
            height: 100%;
            width: 100%;
          }
        }

        span {
          display: inline-block;
          transform: rotateX(90deg);
          animation: spinIn .2s ease forwards;

          &:nth-child(1) {
            animation-delay: 0s;
          }

          @for $i from 1 through 7 {
            &:nth-child(#{$i}) {
              animation-delay: #{4 + $i * 0.05}s;
            }
          }
        }

        @keyframes spinIn {
          from {transform: rotateX(90deg);}
          to   {transform: rotateX(0deg);}
        }
      }

      .logo-wrapper {
        animation: blinkIn 1s ease;

        @keyframes blinkIn {
          0% {opacity: 0}
          4% {opacity: 0;}
          5% {opacity: .8;}
          7% {opacity: 0;}
          10% {opacity: 0;}
          19% {opacity: 0;}
          20% {opacity: 1;}
          22% {opacity: 0;}
          48% {opacity: 0;}
          49% {opacity: 1;}
          51% {opacity: 0;}
          68% {opacity: 0;}
          69% {opacity: 1;}
          71% {opacity: 0;}
          81% {opacity: 0;}
          82% {opacity: 1;}
          83% {opacity: 0;}
          97% {opacity: 0;}
          98% {opacity: 1;}
          100% {opacity: 1;}
        }

        img {
          position: relative;
          object-fit: contain;
          width: 120px;
          animation: flyOff 2s ease-in-out forwards;
          animation-delay: 1.5s;
          filter: drop-shadow(0px 0px 2px #fafafa);
        }

        @keyframes flyOff {
          0% {transform: translate(0px, 0px)}
          30% {transform: translate(-20px, 20px)}
          80% {transform: translate(45px, -45px); opacity: 1;}
          95% {opacity: 0;}
          100% {transform: translate(-300px, 300px); opacity: 0}
        }
      }
    }

    .login-button-wrapper {
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      text-align: center;

      .discord-login {
        position: relative;
        display: block;
        transform: scale(0);
        animation: buttonFadeIn 1s ease forwards;
        animation-delay: 6.5s;

        .floating-button {
          position: relative;
          box-sizing: border-box;
          padding: 8px 12px;
          border-radius: 5px;
          color: #fafafa;
          background-color: #23272A;

          img {
            position: relative;
            vertical-align: top;
            object-fit: contain;
            min-width: 140px;
          }
        }
      }
    }

    @keyframes buttonFadeIn {
      from {transform: rotateZ(0deg) scale(0)}
      to   {transform: rotateZ(1080deg) scale(1)}
    }
  }
</style>
