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

  const footer = document.createElement("footer");
  footer.textContent = "© The Dream Industries";

  content.appendChild(header);
  content.appendChild(footer);
}

export default menu;
