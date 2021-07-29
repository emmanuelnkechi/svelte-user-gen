<script></script>

<div>
  <h1 class="greeting">
    <span class="hello-text">Hello,</span>
    <span class="profile-name">
      <b>Emerald</b>
    </span>
  </h1>
  <p class="welcome-paragraph">
    Welcome to your dashboard, kindly sort through the user base
  </p>

  <form action="">
    <div class="has-search">
      <i class="fa fa-search form-feedback" aria-hidden="true" />
      <input type="text" class="form-element" placeholder="Find in list" />
    </div>
  </form>
</div>

<style>
  h1.greeting {
    color: #fff;
  }
  .hello-text {
    color: #fff;
    font-weight: 100;
    font-size: 2.4rem;
    opacity: 0.66;
  }
  .profile-name {
    font-size: 2rem;
    vertical-align: top;
  }
  .welcome-paragraph {
    color: #fff;
    font-size: 0.9rem;
    opacity: 0.66;
    font-weight: 300;
    letter-spacing: 1px;
  }
  .has-search .form-element {
    padding-left: 4rem !important;
  }
  .has-search {
    margin-top: 2rem;
  }
  .has-search .form-feedback {
    position: absolute;
    z-index: 2;
    display: block;
    text-align: center;
    pointer-events: none;
    color: #fff;
    opacity: 1;
    margin-top: 17px;
    margin-left: 1.7rem;
  }
  .form-element {
    width: 90% !important;
    height: 50px;
    background: #3c3f54 0% 0% no-repeat padding-box;
    border: 1px solid #3c3f54;
    border-radius: 20px;
    opacity: 1;
    outline: none;
    color: #fff;
  }
  .form-element::placeholder {
    color: #ffffff;
    opacity: 0.7;
  }

  @media only screen and (max-width: 320px) {
    p.welcome-paragraph {
      font-size: 1rem;
    }
    .form-element {
      width: 70% !important;
    }
  }

  @media only screen and (min-width: 321px) and (max-width: 768px) {
    p.welcome-paragraph {
      font-size: 1rem;
    }
    .form-element {
      width: 70% !important;
    }
  }
</style>
