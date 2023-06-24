import homepage from "./homepage";
import menu from "./menu";

homepage();

let currentPage = "homepage";

const Home = content.children[1].children[1];
const Menu = content.children[1].children[2];
const About = content.children[1].children[3];
const Login = content.children[1].children[4];

Home.addEventListener("click", (e) => {
  e.preventDefault();
  if (currentPage !== "homepage") {
    currentPage = "homepage";
    content.innerHTML = "";
    homepage();
    attachEventListeners();
  }
});

Menu.addEventListener("click", (e) => {
  e.preventDefault();
  if (currentPage !== "menu") {
    currentPage = "menu";
    content.innerHTML = "";
    menu();
    attachEventListeners();
  }
});

function attachEventListeners() {
  const Home = content.children[1].children[1];
  const Menu = content.children[1].children[2];
  const About = content.children[1].children[3];
  const Login = content.children[1].children[4];

  Home.addEventListener("click", (e) => {
    e.preventDefault();
    if (currentPage !== "homepage") {
      currentPage = "homepage";
      content.innerHTML = "";
      homepage();
      attachEventListeners();
    }
  });

  Menu.addEventListener("click", (e) => {
    e.preventDefault();
    if (currentPage !== "menu") {
      currentPage = "menu";
      content.innerHTML = "";
      menu();
      attachEventListeners();
    }
  });

  About.addEventListener("click", (e) => {
    e.preventDefault();
    // if (currentPage !== "about") {
    //   currentPage = "about";
    //   content.innerHTML = "";
    //   about();
    //   attachEventListeners();
    // }
  });

  Login.addEventListener("click", (e) => {
    e.preventDefault();
    // if (currentPage !== "login") {
    //   currentPage = "login";
    //   content.innerHTML = "";
    //   login();
    //   attachEventListeners();
    // }
  });
}
