<script>
  export let handleCountryShow;
</script>

<div>
  <h1 class="user-heading">All Users</h1>
  <small class="filter">Filter by</small>

  <form action="" class="form-for-info">
    <div class="form-elem">
      <div class="second-has-search">
        <i class="fa fa-search second-form-feedback" aria-hidden="true" />
        <input
          type="text"
          class="second-form-element"
          placeholder="Find in list"
        />
      </div>

      <div class="second-form-item">
        <select class="dropdown-div">
          <option value="">Country</option>
          <option class="country" value="AU"> AU </option>
          <option value="BR">BR</option>
          <option value="CA">CA</option>
          <option value="CH">CH</option>
          <option value="DE">DE</option>
          <option value="DK">DK</option>
          <option value="ES">ES</option>
          <option value="FI">FI</option>
          <option value="FR">FR</option>
          <option value="GB">GB</option>
          <option value="IE">IE</option>
          <option value="IR">IR</option>
          <option value="NO">NO</option>
          <option value="NL">NL</option>
          <option value="NZ">NZ</option>
          <option value="TR">TR</option>
          <option value="US">US</option>
        </select>
      </div>

      <div class="third-form-item">
        <label class="switch">
          <input type="checkbox" on:click={handleCountryShow} />
          <span class="slider round" />
        </label>
        <span class="toggle-text">show country</span>
      </div>
    </div>
  </form>
</div>

<style>
  .user-heading {
    margin: 0.8rem 0;
  }
  .filter {
    color: #262a41;
    opacity: 0.9;
  }
  .form-for-info {
    margin-top: 1rem;
  }
  .form-elem {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }
  .second-has-search .second-form-element {
    padding-left: 3.5rem !important;
  }
  .second-form-feedback {
    position: absolute;
    z-index: 2;
    display: block;
    text-align: center;
    pointer-events: none;
    color: #3c3f54;
    margin-top: 10px;
    margin-left: 1.7rem;
    opacity: 0.6;
  }
  .second-form-element {
    height: 30px;
    background: #e6e7ec;
    border: 1px solid #e6e7ec;
    border-radius: 20px;
    outline: none;
    color: #fff;
  }
  .second-form-element::placeholder {
    color: #3c3f54 !important;
    opacity: 0.6 !important;
  }
  .second-form-item {
    margin-left: 2.5rem;
  }
  .dropdown-div {
    background: #e6e7ec;
    border: 1px solid #e6e7ec;
    border-radius: 35px;
    padding: 0.5rem 0.6rem;
    color: #3c3f54 !important;
    opacity: 0.7 !important;
  }
  .country {
    color: #3c3f54 !important;
    opacity: 0.7 !important;
  }
  /* span.dropdown-span {
  margin-left: 1rem;
}
.dropdown-link {
  text-decoration: none !important;
  color: #000;
} */
  .third-form-item {
    margin-left: 2rem;
    display: flex;
    height: 40px;
    align-items: center;
  }
  .switch {
    position: relative;
    display: inline-block;
    width: 50px;
    height: 24px;
  }

  .switch input {
    opacity: 0;
    width: 0;
    height: 0;
  }
  .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #ccc;
    -webkit-transition: 0.4s;
    transition: 0.4s;
  }

  .slider:before {
    position: absolute;
    content: "";
    height: 18px;
    width: 18px;
    left: 4px;
    bottom: 4px;
    background-color: white;
    -webkit-transition: 0.4s;
    transition: 0.4s;
  }

  input:checked + .slider {
    background-color: #30bbb5;
  }

  input:focus + .slider {
    box-shadow: 0 0 1px #30bbb5;
  }

  input:checked + .slider:before {
    -webkit-transform: translateX(26px);
    -ms-transform: translateX(26px);
    transform: translateX(26px);
  }
  .toggle-text {
    margin-left: 0.3rem;
    color: #000000;
    opacity: 0.62;
  }

  .slider.round {
    border-radius: 34px;
  }

  .slider.round:before {
    border-radius: 50%;
  }

  @media only screen and (max-width: 280px) {
    .second-form-item {
      margin-top: 1rem;
    }
  }
  @media only screen and (max-width: 320px) {
    .second-form-item {
      margin-left: 0rem;
      margin-top: 1rem;
    }
    .third-form-item {
      margin-left: 1rem;
      margin-top: 1rem;
    }
  }

  @media only screen and (min-width: 321px) and (max-width: 768px) {
    .second-form-item {
      margin-left: 0rem !important;
      margin-top: 1rem;
      width: 40%;
    }
    /* .personal-info {
    display: flex;
    flex-direction: column;
  } */
    .form-elem {
      display: block !important;
    }
    .third-form-item {
      margin-left: 0rem;
    }
    /* .info {
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
  } */
  }

  @media only screen and (min-width: 768px) and (max-width: 1024px) {
    .form-elem {
      display: block !important;
    }
    .second-form-item {
      margin-left: 0rem !important;
      margin-top: 1rem;
      width: 30%;
    }
    .third-form-item {
      margin-left: 0rem;
    }
  }

  @media only screen and (min-width: 1024px) and (max-width: 1366px) {
    /* .info {
    display: block;
  }
  .arrow-div {
    margin-left: 0 !important;
    float: right;
  } */
  }
</style>
