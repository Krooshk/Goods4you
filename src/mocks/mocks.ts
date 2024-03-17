import { SnippetType, MemberType } from "../types/types";

const tapok = {
  price: 110,
  name: "Nike Air Force 1 '07 QS",
  img: "/src/assets/images/tapok.png",
};

const catalog: SnippetType[] = new Array(20);
catalog.fill(tapok);

export const members: MemberType[] = [
  {
    name: "Maxim",
    role: "Administrator",
    img: "/src/assets/images/members/Maxim.png",
  },
  {
    name: "Valera",
    role: "Hokkeist",
    img: "/src/assets/images/members/Valera.png",
  },
  {
    name: "Anastasyia",
    role: "Shef",
    img: "/src/assets/images/members/Anastasyia.png",
  },
  {
    name: "Evgeniy",
    role: "Pogromist",
    img: "/src/assets/images/members/Evgeniy.png",
  },
  {
    name: "Suzana",
    role: "Vahter",
    img: "/src/assets/images/members/Suzana.png",
  },
  {
    name: "Milana",
    role: "DevOps",
    img: "/src/assets/images/members/Milana.png",
  },
];

export default catalog;
