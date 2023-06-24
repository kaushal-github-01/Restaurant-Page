function menu() {
  const content = document.getElementById("content");

  const bodyBgImg = document.createElement("img");
  bodyBgImg.src = "./images/body-bg.jpg";
  bodyBgImg.alt = "bodyBgImg";
  bodyBgImg.id = "bodyBgImg";
  content.appendChild(bodyBgImg);

  const header = document.createElement("header");
  const logoimg = document.createElement("img");
  logoimg.src =
    "https://global-uploads.webflow.com/5e157548d6f7910beea4e2d6/63bec227e3a0e22bde8ac2b5_Screen%20Shot%202023-01-11%20at%208.16.34%20PM.png";
  logoimg.alt = "logoImg";
  logoimg.id = "logo";
  header.appendChild(logoimg);
  const headerAnchorTexts = ["Home", "Menu", "About", "Login"];
  const headerAnchorURLs = ["", "", "", ""];
  for (let i = 0; i < headerAnchorTexts.length; i++) {
    const headerAnchor = document.createElement("a");
    headerAnchor.href = headerAnchorURLs[i];
    headerAnchor.textContent = headerAnchorTexts[i];
    header.appendChild(headerAnchor);
  }

  // This here is main section.

  const mainSection = document.createElement("section");
  mainSection.setAttribute("class", "menu");

  // 1st Div
  const Starters = document.createElement("div");
  Starters.setAttribute("class", "starters");

  const Startersh3 = document.createElement("h3");
  Startersh3.textContent = "Starters";
  Starters.appendChild(Startersh3);
  const Startersul = document.createElement("ul");
  Starters.appendChild(Startersul);

  const Startersli1 = document.createElement("li");
  Startersul.appendChild(Startersli1);
  const Startersh41 = document.createElement("h4");
  Startersh41.textContent = "Bruschetta";
  Startersli1.appendChild(Startersh41);
  const Startersp1 = document.createElement("p");
  Startersp1.textContent =
    "Tomatoes, basil, garlic, and olive oil on toasted bread";
  Startersli1.appendChild(Startersp1);

  const Startersli2 = document.createElement("li");
  Startersul.appendChild(Startersli2);
  const Startersh42 = document.createElement("h4");
  Startersh42.textContent = "Caprese Salad";
  Startersli2.appendChild(Startersh42);
  const Startersp2 = document.createElement("p");
  Startersp2.textContent =
    "Buffalo mozzarella, tomatoes, basil, and balsamic glaze";
  Startersli2.appendChild(Startersp2);

  const Startersli3 = document.createElement("li");
  Startersul.appendChild(Startersli3);
  const Startersh43 = document.createElement("h4");
  Startersh43.textContent = "Spinach and Artichoke Dip";
  Startersli3.appendChild(Startersh43);
  const Startersp3 = document.createElement("p");
  Startersp3.textContent =
    "Creamy spinach and artichoke dip served with toasted baguette";
  Startersli3.appendChild(Startersp3);

  // 2nd Div
  const Main_Courses = document.createElement("div");
  Main_Courses.setAttribute("class", "main_courses");

  const Main_Coursesh3 = document.createElement("h3");
  Main_Coursesh3.textContent = "Main Courses";
  Main_Courses.appendChild(Main_Coursesh3);
  const Main_Coursesul = document.createElement("ul");
  Main_Courses.appendChild(Main_Coursesul);

  const Main_Coursesli1 = document.createElement("li");
  Main_Coursesul.appendChild(Main_Coursesli1);
  const Main_Coursesh41 = document.createElement("h4");
  Main_Coursesh41.textContent = "Grilled Salmon";
  Main_Coursesli1.appendChild(Main_Coursesh41);
  const Main_Coursesp1 = document.createElement("p");
  Main_Coursesp1.textContent =
    "Grilled salmon fillet with lemon butter sauce, served with roasted vegetables";
  Main_Coursesli1.appendChild(Main_Coursesp1);

  const Main_Coursesli2 = document.createElement("li");
  Main_Coursesul.appendChild(Main_Coursesli2);
  const Main_Coursesh42 = document.createElement("h4");
  Main_Coursesh42.textContent = "Filet Mignon";
  Main_Coursesli2.appendChild(Main_Coursesh42);
  const Main_Coursesp2 = document.createElement("p");
  Main_Coursesp2.textContent =
    "Tender filet mignon steak cooked to perfection, served with mashed potatoes and grilled asparagus";
  Main_Coursesli2.appendChild(Main_Coursesp2);

  const Main_Coursesli3 = document.createElement("li");
  Main_Coursesul.appendChild(Main_Coursesli3);
  const Main_Coursesh43 = document.createElement("h4");
  Main_Coursesh43.textContent = "Eggplant Parmesan";
  Main_Coursesli3.appendChild(Main_Coursesh43);
  const Main_Coursesp3 = document.createElement("p");
  Main_Coursesp3.textContent =
    "Breaded and baked eggplant topped with marinara sauce, mozzarella, and Parmesan cheese, served with spaghetti";
  Main_Coursesli3.appendChild(Main_Coursesp3);

  // 3rd Div
  const Desserts = document.createElement("div");
  Desserts.setAttribute("class", "desserts");

  const Dessertsh3 = document.createElement("h3");
  Dessertsh3.textContent = "Desserts";
  Desserts.appendChild(Dessertsh3);
  const Dessertsul = document.createElement("ul");
  Desserts.appendChild(Dessertsul);

  const Dessertsli1 = document.createElement("li");
  Dessertsul.appendChild(Dessertsli1);
  const Dessertsh41 = document.createElement("h4");
  Dessertsh41.textContent = "Tiramisu";
  Dessertsli1.appendChild(Dessertsh41);
  const Dessertsp1 = document.createElement("p");
  Dessertsp1.textContent =
    "Layers of espresso-soaked ladyfingers, mascarpone cream, and cocoa";
  Dessertsli1.appendChild(Dessertsp1);

  const Dessertsli2 = document.createElement("li");
  Dessertsul.appendChild(Dessertsli2);
  const Dessertsh42 = document.createElement("h4");
  Dessertsh42.textContent = "Chocolate Lava Cake";
  Dessertsli2.appendChild(Dessertsh42);
  const Dessertsp2 = document.createElement("p");
  Dessertsp2.textContent =
    "Warm chocolate cake with a molten chocolate center, served with vanilla ice cream";
  Dessertsli2.appendChild(Dessertsp2);

  const Dessertsli3 = document.createElement("li");
  Dessertsul.appendChild(Dessertsli3);
  const Dessertsh43 = document.createElement("h4");
  Dessertsh43.textContent = "Crème Brûlée";
  Dessertsli3.appendChild(Dessertsh43);
  const Dessertsp3 = document.createElement("p");
  Dessertsp3.textContent =
    "Classic vanilla custard with a caramelized sugar crust";
  Dessertsli3.appendChild(Dessertsp3);

  mainSection.appendChild(Starters);
  mainSection.appendChild(Main_Courses);
  mainSection.appendChild(Desserts);

  // This here is footer.

  const footer = document.createElement("footer");
  footer.textContent = "© The Dream Industries";

  content.appendChild(header);
  content.appendChild(mainSection);
  content.appendChild(footer);
}

export default menu;
