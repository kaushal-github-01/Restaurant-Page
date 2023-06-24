function about() {
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
  mainSection.setAttribute("class", "about");
  const mainSectionHeading = document.createElement("h2");
  mainSectionHeading.textContent = "About Us";
  mainSection.appendChild(mainSectionHeading);

  const aboutp1 = document.createElement("p");
  aboutp1.textContent =
    "The Savory Bistro is a culinary destination that combines the art of cooking with an exquisite dining experience. We are dedicated to providing our guests with exceptional food and a warm, inviting atmosphere.";
  mainSection.appendChild(aboutp1);
  const aboutp2 = document.createElement("p");
  aboutp2.textContent =
    "Our team of skilled chefs is passionate about using the freshest ingredients and innovative techniques to create memorable dishes. We believe in sourcing locally whenever possible, supporting local farmers and artisans.";
  mainSection.appendChild(aboutp2);
  const aboutp3 = document.createElement("p");
  aboutp3.textContent =
    " At The Savory Bistro, we offer a diverse menu that showcases a fusion of flavors from around the world. Each dish is carefully crafted to tantalize your taste buds and satisfy your cravings. From our savory starters to our indulgent desserts, every bite is a culinary delight.";
  mainSection.appendChild(aboutp3);
  const aboutp4 = document.createElement("p");
  aboutp4.textContent =
    "      We take pride in providing impeccable service to ensure that your dining experience is truly exceptional. Our knowledgeable staff is always ready to assist you in choosing the perfect dish and pairing it with a fine selection from our extensive wine list.";
  mainSection.appendChild(aboutp4);
  const aboutp5 = document.createElement("p");
  aboutp5.textContent =
    "Whether you're celebrating a special occasion or simply enjoying a night out, we invite you to join us at The Savory Bistro and embark on a culinary journey that will leave you wanting more.";
  mainSection.appendChild(aboutp5);

  const footer = document.createElement("footer");
  footer.textContent = "© The Dream Industries";

  content.appendChild(header);
  content.appendChild(mainSection);
  content.appendChild(footer);
}
export default about;
