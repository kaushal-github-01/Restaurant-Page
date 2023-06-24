function homepage() {
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

  const mainSection = document.createElement("section");
  const mainSectionHeading = document.createElement("h1");
  mainSectionHeading.textContent = "Welcome to The Savory Bistro!";
  const mainSectionp1 = document.createElement("p");
  mainSectionp1.textContent =
    " Welcome to The Savory Bistro, where we serve delicious meals made with the finest ingredients. Our experienced chefs are passionate about creating unique culinary experiences that will delight your taste buds.";
  const mainSectionp2 = document.createElement("p");
  mainSectionp2.textContent =
    "At The Savory Bistro, we believe in using locally sourced, organic ingredients to bring out the best flavors in our dishes. From appetizers to desserts, our menu offers a wide variety of options to cater to every palate.";
  const mainSectionp3 = document.createElement("p");
  mainSectionp3.textContent =
    "Whether you're looking for an intimate dinner for two or planning a special event, our restaurant provides a warm and inviting atmosphere for a memorable dining experience. Join us for a celebration of flavors and exceptional service.";

  mainSection.appendChild(mainSectionHeading);
  mainSection.appendChild(mainSectionp1);
  mainSection.appendChild(mainSectionp2);
  mainSection.appendChild(mainSectionp3);

  const footer = document.createElement("footer");
  footer.textContent = "© The Dream Industries";

  content.appendChild(header);
  content.appendChild(mainSection);
  content.appendChild(footer);
}

export default homepage;
