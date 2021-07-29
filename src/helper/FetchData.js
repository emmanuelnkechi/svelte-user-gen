import axios from "axios";

const getAllUsers = async (page, gender,country
) => {
    let param = {};
  if(page){
    param.page = page;
  }
  if(gender) {
    param.gender = gender;
  }
  if (country) {
    param.nat = country.toLowerCase();
  }
  return await axios
    .get("https://randomuser.me/api/", {
      params: {
        results: 3,
        ...param,
      },
    })
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      console.log(err);
    });
};

export default getAllUsers; 