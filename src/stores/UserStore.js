import { writable } from "svelte/store";

const UserStore = writable([
  {
    id: 1,
    firstName: "Jann",
    lastName: "Böhringer",
    img: "/asset/svelte-user-one.jpeg",
    address: "1640 Kirchplatz, Ammerland",
    country: "Germany",
    email: "bohringer@example.com",
    phoneNumber: "0404-4589929",
    dob: "2018-01-15",
    gender: "male",
    age: 21,
    title: "Mr.",
  },
  {
    id: 2,
    firstName: "Jasmine",
    lastName: "Scott",
    img: "/asset/svelte-user-two.jpeg",
    address: "7323 Dundas Rd, Borden",
    country: "Canada",
    email: "jasmine.s@example.com",
    phoneNumber: "464-483-1316",
    dob: "2012-06-15",
    gender: "female",
    age: 30,
    title: "Mrs.",
  },
  {
    id: 3,
    firstName: "Ryan",
    lastName: "Sirko",
    img: "/asset/svelte-user-three.jpeg",
    address: "6255 Coastal, Clinton",
    country: "Canada",
    email: "ryan.s@example.com",
    phoneNumber: "486-030-2326",
    dob: "2010-08-10",
    gender: "male",
    age: 25,
    title: "Mr.",
  },
]);

export default UserStore;
