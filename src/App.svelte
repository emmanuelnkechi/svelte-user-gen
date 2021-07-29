<script>
  import Details from "./components/Details.svelte";
  import Home from "./components/Home.svelte";
  import UserStore from "./stores/UserStore";
  import router from "page";

  let active = "all";
  let allUsers = [];
  const unsub = UserStore.subscribe((data) => (allUsers = data));
  const setActive = (item) => {
    active = item;

    if (active === "all") {
      const unsub = UserStore.subscribe((data) => (allUsers = data));
    }
    if (active === "male") {
      const unsub = UserStore.subscribe((data) => {
        let newD = data.filter((x) => x.gender === "male");
        allUsers = newD;
      });
    }
    if (active === "female") {
      const unsub = UserStore.subscribe((data) => {
        let newD = data.filter((x) => x.gender === "female");
        allUsers = newD;
      });
    }
  };

  let page;
  let params;
  let countryShow = false;

  router("/", () => (page = Home));
  router(
    "/:id",
    (ctx, next) => {
      params = ctx.params;
      next();
    },
    () => (page = Details)
  );
  router.start();

  const handleCountryShow = () => {
    countryShow = !countryShow;
  };
</script>

<link
  rel="stylesheet"
  href="https://use.fontawesome.com/releases/v5.5.0/css/all.css"
  integrity="sha384- 
 B4dIYHKNBt8Bc12p+WXckhzcICo0wtJAoU8YZTY5qE0Id1GSseTk6S+L3BlXeVIU"
  crossorigin="anonymous"
/>

<!-- <svelte:component this={page} params="{params}" /> -->
{#if page === Home}
  <Home {countryShow} {handleCountryShow} {active} {allUsers} {setActive} />
{/if}

{#if page === Details}
  <Details
    {params}
    {countryShow}
    {handleCountryShow}
    {active}
    {setActive}
    {allUsers}
  />
{/if}

<style>
</style>
