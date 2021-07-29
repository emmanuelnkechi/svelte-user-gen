<script>
  let pathId = window.location.pathname[1];
  export let allUsers;
  const details = allUsers.filter((data) => data.id === parseInt(pathId));
</script>

<div>
  <div class="back-div-prof">
    <a href="/" class="back-link-prof">
      <span>
        <i class="fa fa-arrow-left" aria-hidden="true" />
      </span>{" "}
      <span class="result-link-prof">RESULTS</span>
    </a>
  </div>

  <div class="personal-info-profile-prof">
    <div class="circular-img-prof">
      <img src={details[0].img} class="img-prof" alt="" />
    </div>
    <div class="personal-text-prof">
      <h3 class="name-prof">
        <b>
          {details[0].title}
          {details[0].firstName}
          {details[0].lastName}
        </b>{" "}
        <span class="age-prof">{details[0].age}</span>
      </h3>
      <p class="address-prof">
        <i>
          {details[0].address}, {details[0].country}
        </i>
      </p>
      <div class="info-prof">
        <div class="email-div-prof">
          <span class="envelope-icon-prof">
            <i class="fa fa-envelope" aria-hidden="true" />
          </span>
          <span class="email-prof">{details[0].email}</span>
        </div>
        <div class="joined-div-prof">
          <span class="joined-prof">
            JOINED:{" "}
            {details[0].dob}
          </span>
        </div>
        <div class="phone-div-prof">
          <span class="phone-icon-prof">
            <i class="fa fa-phone" aria-hidden="true" />
          </span>
          <span class="phone-number-prof">{details[0].phoneNumber}</span>
        </div>
        <div class="second-phone-div-prof">
          <span class="second-phone-icon-prof">
            <i class="fa fa-mobile" aria-hidden="true" />
          </span>
          <span class="second-phone-number-prof">{details[0].phoneNumber}</span>
        </div>
        <div />
      </div>
    </div>
  </div>

  <div class="pagination-wrapper-prof">
    <div>
      <button class="second-download-button-prof" disabled>
        <span class="download-span-prof">
          <i class="fa fa-cloud-download" aria-hidden="true" />
        </span>
        <span class="download-text-prof">Download results</span>
      </button>
    </div>
    <div class="right-pagination-prof">
      <button class="second-left-arrow-pagination-prof" disabled>
        <span>
          <i class="fa fa-chevron-left" aria-hidden="true" />
        </span>
      </button>
      <button class="second-right-arrow-pagination-prof" disabled>
        <span>
          <i class="fa fa-chevron-right" aria-hidden="true" />
        </span>
      </button>
    </div>
  </div>
</div>

<style>
  .back-div-prof {
    margin-top: 2.5rem;
    margin-bottom: 2.5rem;
  }
  .back-link-prof {
    text-decoration: none;
  }
  .fa-arrow-left {
    color: #30bbb5;
    /* font-weight: 200; */
  }
  .result-link-prof {
    color: #262a41;
    opacity: 0.52;
    margin-left: 0.5rem;
  }

  .personal-info-profile-prof {
    animation: 1s ease-out 0s 1 slideInFromBottom;
    display: flex;
    flex-direction: row;
    gap: 3rem !important;
    margin: 1rem 0 7rem 0;
    border-radius: 18px;
  }
  @keyframes slideInFromBottom {
    0% {
      transform: translateY(100%);
    }
    100% {
      transform: translateY(0);
    }
  }

  h3.name-prof {
    margin-top: 0.8rem;
    margin-bottom: 0.8rem;
    color: #000 !important;
    opacity: 1 !important;
    font-weight: 600;
  }
  span.age-prof {
    font-weight: 200;
  }
  div.circular-img-prof {
    flex-basis: 20%;
  }
  .personal-text-prof {
    flex-basis: 80%;
    margin-left: 3rem;
  }
  .img-prof {
    width: 130px;
    height: 130px;
    object-fit: cover;
    border-radius: 100%;
    border: 6px solid #75d6d1;
  }
  div.personal-text-prof,
  p {
    font-weight: 500;
    font-size: 1rem;
    color: #262a41;
    opacity: 1;
    margin: 0;
  }

  .email-div-prof {
    width: 60%;
    background: #e6e7ec;
    border: 1px solid #e6e7ec;
    border-radius: 35px;
    padding: 0.5rem 0.6rem;
    margin-top: 1.5rem;
    text-align: center;
  }
  .joined-div-prof {
    padding: 0.5rem 0.6rem;
    width: 32%;
    margin-top: 1.5rem;
    background: #ecbfda 0% 0% no-repeat padding-box;
    border: 1px solid #e6e7ec;
    border-radius: 35px;
    text-align: center !important;
  }
  .joined-prof {
    color: #262a41;
    opacity: 0.7;
    font-size: 0.8rem;
    text-align: center !important;
  }
  .phone-div-prof {
    margin-top: 1.5rem;
  }
  .fa.fa-envelope {
    color: #babdd1;
  }
  .fa.fa-phone {
    color: #babdd1;
  }
  .fa.fa-mobile {
    color: #babdd1;
  }
  .envelope-icon-prof {
    margin-right: 0.4rem;
  }
  .email-prof {
    color: #262a41;
    opacity: 0.52;
    margin-right: 1rem;
    font-size: 0.8rem;
  }
  span.phone-number-prof {
    color: #262a41 !important;
    opacity: 0.7;
    font-size: 0.8rem;
    margin-left: 0.4rem;
  }
  .second-phone-div-prof {
    margin-top: 1.5rem;
  }
  span.second-phone-number-prof {
    color: #262a41 !important;
    opacity: 0.7;
    font-size: 0.8rem;
    margin-left: 0.4rem;
  }

  .second-download-button-prof {
    background: #7946c1;
    color: #fff;
    padding: 0.7rem 0.7rem;
    box-shadow: 0px 3px 6px #00000029;
    border-radius: 35px;
    opacity: 0.5;
    outline: none;
    border: none;
  }
  span.download-span-prof {
    margin-right: 0.8rem;
    font-size: 1rem;
  }
  span.download-text-prof {
    font-size: 0.9rem;
  }
  .second-left-arrow-pagination-prof {
    background: #e2e2ea;
    border-radius: 11px;
    opacity: 1;
    outline: none;
    border: none;
    padding: 0.7rem 0.7rem;
  }
  .second-right-arrow-pagination-prof {
    background: #262a41;
    color: #fff;
    box-shadow: 4px 5px 20px #0000001a;
    border-radius: 11px;
    opacity: 1;
    outline: none;
    border: none;
    margin-left: 0.3rem !important;
    padding: 0.7rem 0.7rem;
  }
  .pagination-wrapper-prof {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    margin-bottom: 1rem;
  }
  .right-pagination-prof {
    margin-left: auto !important;
  }

  @media only screen and (max-width: 320px) {
    .personal-info-profile-prof {
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
    .email-div-prof {
      width: 100%;
      background: #e6e7ec;
      border: 1px solid #e6e7ec;
      border-radius: 35px;
      padding: 0.5rem 0.6rem;
      margin-top: 1.5rem;
      text-align: center;
    }
    .joined-div-prof {
      padding: 0.5rem 0.6rem;
      width: 62%;
      margin-top: 1.5rem;
      background: #ecbfda 0% 0% no-repeat padding-box;
      border: 1px solid #e6e7ec;
      border-radius: 35px;
      text-align: center !important;
    }
    .email-div-prof {
      margin-top: 0.7rem !important;
    }
    .phone-div-prof {
      margin-top: 0.7rem !important;
    }
  }

  @media only screen and (min-width: 321px) and (max-width: 768px) {
    .personal-info-profile-prof {
      display: flex;
      flex-direction: column;
      justify-content: center !important;
      align-items: center;
    }
    .joined-div-prof {
      padding: 0.5rem 0.6rem;
      width: 62%;
      margin-top: 1.5rem;
      background: #ecbfda 0% 0% no-repeat padding-box;
      border: 1px solid #e6e7ec;
      border-radius: 35px;
      text-align: center !important;
    }
    .email-div-prof {
      width: 100%;
      background: #e6e7ec;
      border: 1px solid #e6e7ec;
      border-radius: 35px;
      padding: 0.5rem 0.6rem;
      margin-top: 1.5rem;
      text-align: center;
    }
    .email-div-prof {
      margin-top: 0.7rem !important;
    }
    .phone-div-prof {
      margin-top: 0.7rem !important;
    }
  }

  @media only screen and (min-width: 1024px) and (max-width: 1366px) {
    .personal-info-profile-prof {
      display: flex;
      flex-direction: row;
    }
    .email-div-prof {
      width: 80%;
      background: #e6e7ec;
      border: 1px solid #e6e7ec;
      border-radius: 35px;
      padding: 0.5rem 0.6rem;
      margin-top: 1.5rem;
      text-align: center;
    }
    .joined-div-prof {
      padding: 0.5rem 0.6rem;
      width: 62%;
      margin-top: 1.5rem;
      background: #ecbfda 0% 0% no-repeat padding-box;
      border: 1px solid #e6e7ec;
      border-radius: 35px;
      text-align: center !important;
    }
  }
</style>
