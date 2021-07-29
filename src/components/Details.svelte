<script>
  import WelcomeName from "../common/WelcomeName.svelte";
  import ShowButton from "../common/ShowButton.svelte";
  import UserHeading from "../common/UserHeading.svelte";
  import PersonalUserDetail from "../common/PersonalUserDetail.svelte";
  export let countryShow;
  export let handleCountryShow;
  export let setActive;
  export let allUsers;
</script>

<main id="container">
  <div class="wrapper">
    <div class="first-item">
      <div class="first-grid-wrapper">
        <WelcomeName />
        <ShowButton {setActive} />
      </div>
    </div>

    <div class="second-item second-border-wrap">
      <UserHeading {handleCountryShow} />
      <PersonalUserDetail {countryShow} {allUsers} />
    </div>
  </div>
</main>

<style>
  main {
    height: 100vh !important;
  }

  .wrapper {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    margin-bottom: 1rem;
  }
  .first-item {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    flex-basis: 50%;
    height: 100vh;
  }
  .first-grid-wrapper {
    font-style: 600;
  }
  .second-item {
    margin-top: 0.5rem !important;
    margin-bottom: 0.5rem !important;
    padding: 0.7rem 3rem 0.7rem 4rem;
  }
  .second-border-wrap {
    background: #f7f7ff 0% 0% no-repeat padding-box;
    border: 1px solid #707070;
    border-radius: 28px;
  }

  @media only screen and (max-width: 320px) {
    .wrapper {
      display: block;
    }
    .second-item {
      border: none;
      padding: 0.7rem 1rem 0.7rem 1rem;
      margin-right: 0px;
      border-radius: 0px;
    }
    .first-item {
      padding: 0.7rem 1rem 0.7rem 1rem;
    }
  }
  @media only screen and (min-width: 321px) and (max-width: 768px) {
    .wrapper {
      display: block;
    }
    .second-item {
      border: none;
      padding: 0.7rem 1rem 0.7rem 1rem;
      margin-right: 0px;
      border-radius: 0px;
    }
    .first-item {
      padding: 0.7rem 1rem 0.7rem 1rem;
    }
  }

  @media only screen and (min-width: 1024px) and (max-width: 1366px) {
    .first-item {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      justify-content: center;
      flex-basis: 50%;
    }
    .second-item {
      padding: 0.3rem 0.7rem 0.3rem 0.7rem;
    }
  }
</style>
