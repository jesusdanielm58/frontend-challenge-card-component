<script setup>
</script>

<template>
  <div class="card">
    <div class="card-header">
      <img src="../assets/illustration-hero.svg" alt="hero" class="hero">
    </div>
    <div class="card-body">
      <h1>Order summary</h1>
      <p class="acentuado">You can now listen to millions of songs, audibooks, and poadcast on any device anywhere you like!</p>
      <div class="song">
        <img src="../assets/icon-music.svg" alt="music-icon">
        <div>
          <p class="plan">Annual Plan</p>
          <p class="cost acentuado">$59.99/year</p>
        </div>
          <a href="#" class="change">Change</a>
      </div>
      <button>Proceed to payment</button>
      <a href="#" class="cancel">Cancel Order</a>
    </div>
  </div>

</template>

<style scoped lang="scss">
.card{
  background-color:white;
  width: 90%;
  max-width: 450px;
  margin:auto;
  border-radius: 20px;
  overflow: hidden;
  .hero{
    width: 100%;
  }
  .card-body{
    padding:30px;
    text-align: center;
    font-family: "Red Hat Display";
    h1{
      font-size: 1.5rem;
      font-weight: 900;
      margin-bottom: 20px;
    }
    .song{
      background-color:$neutral1;
      display: flex;
      justify-content: flex-start;
      gap:20px;
      align-items: center;
      padding:20px 20px;
      border-radius: 10px;
      margin:20px 0;
      font-size: .9rem;
      .plan{
        font-weight: 900;
      }
    }
    .acentuado{
      color:$neutral2;
      font-weight: 500;
    }
    .change{
      color:$secondary;
      margin-left:auto;
      font-weight: 700;
      &:hover{
        color: lighten($secondary, 15%);
      }
    }
    button{
      display:block;
      width:100%;
      background-color:$secondary;
      color:white;
      border:none;
      outline: none;
      padding:17px 0;
      border-radius: 10px;
      cursor:pointer;
      font-weight: 900;
      margin-bottom: 20px;
      box-shadow: 0px 15px 20px -15px #000000d1;
      &:hover{
        background-color:lighten($secondary, 15%);
      }
    }
    .cancel{
      text-decoration: none;
      color:$neutral2;
      font-weight: 900;
      &:hover{
        color:darken($neutral2,20%)
      }
    }

  }
}

</style>
