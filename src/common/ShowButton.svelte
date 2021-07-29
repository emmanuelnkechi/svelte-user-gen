<script>
  export let setActive;
</script>

<div>
  <p class="show-users">Show Users</p>

  <div class="users-button-one">
    <div>
      <span>
        <button
          type="button"
          class="all-users"
          on:click={() => {
            setActive("all");
          }}
        >
          <i class="fa fa-users users-icon" aria-hidden="true" />
        </button>
      </span>

      <div class="user-text">All Users</div>
    </div>
    <div>
      <span>
        <button
          type="button"
          class="male-user"
          on:click={() => {
            setActive("male");
          }}
        >
          <i class="fa fa-male users-icon" aria-hidden="true" />
        </button>
      </span>
      <div class="user-text">Male Users</div>
    </div>
    <div>
      <span>
        <button
          type="button"
          class="female-user"
          on:click={() => {
            setActive("female");
          }}
        >
          <i class="fa fa-female users-icon" aria-hidden="true" />
        </button>
      </span>
      <div class="user-text">Female Users</div>
    </div>
  </div>
</div>

<style>
  .show-users {
    margin-top: 3rem;
    margin-bottom: 0;
    color: #fff;
    opacity: 0.7;
    letter-spacing: 0.5px;
    font-size: 1rem;
  }
  .users-button-one {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 2.5rem;
    text-align: center !important;
    margin-top: 3rem;
  }
  .all-users {
    background: #f935a9;
    padding: 1.8rem;
    box-shadow: 0px 3px 30px #00000029;
    border-radius: 28px;
    opacity: 1;
    outline: none;
    border: none;
    transition: all 0.3s;
    cursor: pointer;
  }
  .all-users:active {
    transform: scale(1.2);
  }
  .all-users:hover {
    transform: scale(1.2);
  }
  .users-icon {
    color: #fff !important;
    font-size: 2rem !important;
  }
  .fa-users {
    font-size: 2.5rem !important;
  }
  div.user-text {
    margin-top: 1rem;
    color: #fff;
    font-size: 0.8rem;
    font-weight: 300;
    letter-spacing: 0.2px;
    font-weight: 100 !important;
    opacity: 0.7;
  }
  .male-user:active {
    transform: scale(1.2);
  }
  .male-user:hover {
    transform: scale(1.2);
  }
  .male-user {
    background: #30bbb5;
    padding: 2rem;
    box-shadow: 0px 3px 30px #00000029;
    border-radius: 28px;
    opacity: 1;
    outline: none;
    border: none;
    transition: all 0.3s;
    cursor: pointer;
  }
  .female-user:active {
    transform: scale(1.2);
  }
  .female-user:hover {
    transform: scale(1.2);
  }
  .female-user {
    background: #7946c1;
    padding: 2rem;
    box-shadow: 0px 3px 30px #00000029;
    border-radius: 28px;
    opacity: 1;
    outline: none;
    border: none;
    transition: all 0.3s;
    cursor: pointer;
  }

  @media only screen and (max-width: 320px) {
    .users-button-one {
      gap: 1rem !important;
      margin-top: 1.5rem;
    }
  }

  @media only screen and (min-width: 321px) and (max-width: 768px) {
    .users-button-one {
      gap: 1rem !important;
      margin-top: 1.5rem;
    }
  }
</style>
