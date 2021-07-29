<script>
  export let countryShow;
  export let allUsers;
</script>

<div class="personal-info-wrap">
  {#each allUsers as user (user.id)}
    <div class="personal-info">
      <div class="circular-img">
        <img class="img" src={user.img} alt="" />
      </div>
      <div class="personal-text">
        <h3 class="name">{user.firstName} {user.lastName}</h3>
        <p class="address">
          <i> {user.address} </i>
          {#if countryShow}
            <i class="countryShow">{user.country}</i>
          {/if}
        </p>
        <div class="info">
          <div class="email-div">
            <span class="envelope-icon">
              <i class="fa fa-envelope" aria-hidden="true" />
            </span>
            <span class="email">{user.email}</span>
          </div>
          <div class="phone-div">
            <span class="phone-icon">
              <i class="fa fa-phone" aria-hidden="true" />
            </span>
            <span class="phone-number">{user.phoneNumber}</span>
          </div>
          <div>
            <a href={user.id} class="arrow-div">
              <span>
                <i class="fa fa-arrow-right" aria-hidden="true" />
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  {/each}
</div>

<style>
  .personal-info-wrap {
    animation: 1s ease-out 0s 1 slideInFromTop;
  }
  @keyframes slideInFromTop {
    0% {
      transform: translateY(-5%);
      opacity: 0;
    }
    100% {
      transform: translateY(0);
    }
  }

  .personal-info {
    display: flex;
    flex-direction: row;
    gap: 3rem !important;
    background: #fcfcff;
    padding: 1rem;
    margin: 1rem 0;
    box-shadow: 10px 10px 40px #0000000d;
    border-radius: 18px;
    opacity: 1;
  }
  div.circular-img {
    flex-basis: 20%;
  }
  .img {
    width: 90px;
    height: 90px;
    object-fit: cover;
    border-radius: 100%;
    border: 6px solid #75d6d1;
  }
  .personal-text {
    flex-basis: 80%;
    margin-left: 3rem;
  }
  div.personal-text,
  p {
    font-weight: 500;
    font-size: 1rem;
    color: #262a41;
    opacity: 1;
    margin: 0;
  }
  h3.name {
    margin-top: 0.8rem;
    margin-bottom: 0.8rem;
    color: #000 !important;
    opacity: 1 !important;
  }
  .info {
    display: grid;
    grid-template-columns: auto auto auto;
    margin-top: 1rem;
    margin-bottom: 1rem;
  }
  .countryShow {
    color: #262a41;
    margin-top: 0.3rem;
    font-style: bold;
    font-weight: 700;
  }
  .envelope-icon {
    margin-right: 0.4rem;
  }
  .fa.fa-envelope {
    color: #babdd1;
  }
  .email {
    color: #262a41;
    opacity: 0.52;
    margin-right: 1rem;
    font-size: 0.8rem;
  }
  span.phone-number {
    color: #262a41 !important;
    opacity: 0.7;
    font-size: 0.8rem;
    margin-left: 0.3rem;
    min-width: 8rem;
    display: inline-block;
  }
  .fa.fa-phone {
    color: #babdd1;
  }

  .arrow-div {
    color: #fff;
    background: #30bbb5;
    border-radius: 13px;
    padding: 1rem;
    opacity: 1;
    cursor: pointer;
    text-align: center;
    box-shadow: 2px 10px 30px #30bbb574;
    outline: none;
    border: none;
  }

  /* .loader {
    border: 16px solid #f3f3f3;
    border-radius: 50%;
    border-top: 16px solid #3498db;
    width: 120px;
    height: 120px;
    -webkit-animation: spin 2s linear infinite;
    animation: spin 2s linear infinite;
  } */

  @-webkit-keyframes spin {
    0% {
      -webkit-transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
    }
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  @media only screen and (max-width: 320px) {
    .personal-info {
      display: flex;
      flex-direction: column;
    }
    .info {
      display: block;
    }
    .email-div {
      margin-top: 0.7rem !important;
    }
    .phone-div {
      margin-top: 0.7rem !important;
    }
    .arrow-div {
      margin-left: 0 !important;
      float: right;
    }
  }

  @media only screen and (min-width: 321px) and (max-width: 768px) {
    .personal-info {
      display: flex;
      flex-direction: column;
    }

    .info {
      display: block;
    }
    .email-div {
      margin-top: 0.7rem !important;
    }
    .phone-div {
      margin-top: 0.7rem !important;
    }
    .arrow-div {
      margin-left: 0 !important;
      float: right;
    }
  }

  @media only screen and (min-width: 1024px) and (max-width: 1366px) {
    .info {
      display: block;
    }
    .arrow-div {
      margin-left: 0 !important;
      float: right;
    }
  }
</style>
