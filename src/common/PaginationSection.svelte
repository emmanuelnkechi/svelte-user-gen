<script>
  import UserStore from "../stores/UserStore";
  import fileDownload from "js-file-download";

  const jsonToCsv = (data) => {
    const headers = Object.keys(data[0]);
    const csvRows = [];
    csvRows.push(headers.join(","));

    for (const row of data) {
      const values = headers.map((header) => {
        const escapedQoute = ("" + row[header]).replace(/"/g, '\\"');
        return `"${escapedQoute}"`;
      });
      csvRows.push(values.join(","));
    }
    return csvRows.join("\n");
  };

  const formattedData = $UserStore.map((userData) => ({
    Fullname: `${userData.firstName} ${userData.lastName}`,
    Gender: userData.gender,
    Dob: userData.dob,
    Email: userData.email,
    Phone: userData.phoneNumber,
    Cell: userData.phoneNumber,
    Address: `${userData.address}  ${userData.country}`,
  }));

  const download = () => {
    console.log(jsonToCsv(formattedData));
    const data = jsonToCsv(formattedData);
    let blob = new Blob([data], { type: "text/csv" });
    fileDownload(blob, "user.csv");
  };
</script>

<div class="pagination-wrapper">
  <div on:click={download}>
    <button class="download-button">
      <span class="download-span">
        <i class="fa fa-cloud" aria-hidden="true" />
      </span>
      <span class="download-text">Download results</span>
    </button>
  </div>
  <div class="right-pagination">
    <button class="left-arrow-pagination">
      <span>
        <i class="fa fa-chevron-left" aria-hidden="true" />
      </span>
    </button>
    <button class="right-arrow-pagination">
      <span>
        <i class="fa fa-chevron-right" aria-hidden="true" />
      </span>
    </button>
  </div>
</div>

<style>
  .pagination-wrapper {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    margin-top: 3rem;
    margin-bottom: 1rem;
  }
  .download-button {
    background: #7946c1;
    color: #fff;
    padding: 0.7rem 0.7rem;
    box-shadow: 0px 3px 6px #00000029;
    border-radius: 35px;
    opacity: 1;
    outline: none;
    border: none;
    cursor: pointer;
  }
  span.download-span {
    margin-right: 0.8rem;
    font-size: 1rem;
  }
  span.download-text {
    font-size: 0.9rem;
  }
  .right-pagination {
    margin-left: auto !important;
  }
  .left-arrow-pagination {
    background: #e2e2ea;
    cursor: pointer;
    border-radius: 11px;
    opacity: 1;
    outline: none;
    border: none;
    padding: 0.7rem 0.7rem;
  }
  .right-arrow-pagination {
    background: #262a41;
    cursor: pointer;
    color: #fff;
    box-shadow: 4px 5px 20px #0000001a;
    border-radius: 11px;
    opacity: 1;
    outline: none;
    border: none;
    margin-left: 0.3rem !important;
    padding: 0.7rem 0.7rem;
  }
</style>
