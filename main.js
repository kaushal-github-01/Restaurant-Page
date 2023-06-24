(() => {
  "use strict";
  !(function () {
    const e = document.getElementById("content"),
      t = document.createElement("img");
    (t.src = "./images/body-bg.jpg"),
      (t.alt = "bodyBgImg"),
      (t.id = "bodyBgImg"),
      e.appendChild(t);
    const n = document.createElement("header"),
      o = document.createElement("img");
    (o.src =
      "https://global-uploads.webflow.com/5e157548d6f7910beea4e2d6/63bec227e3a0e22bde8ac2b5_Screen%20Shot%202023-01-11%20at%208.16.34%20PM.png"),
      (o.alt = "logoImg"),
      (o.id = "logo"),
      n.appendChild(o);
    const a = ["Home", "Menu", "About", "Login"],
      r = ["", "", "", ""];
    for (let e = 0; e < a.length; e++) {
      const t = document.createElement("a");
      (t.href = r[e]), (t.textContent = a[e]), n.appendChild(t);
    }
    const i = document.createElement("section"),
      d = document.createElement("h1");
    d.textContent = "Welcome to The Savory Bistro!";
    const c = document.createElement("p");
    c.textContent =
      " Welcome to The Savory Bistro, where we serve delicious meals made with the finest ingredients. Our experienced chefs are passionate about creating unique culinary experiences that will delight your taste buds.";
    const s = document.createElement("p");
    s.textContent =
      "At The Savory Bistro, we believe in using locally sourced, organic ingredients to bring out the best flavors in our dishes. From appetizers to desserts, our menu offers a wide variety of options to cater to every palate.";
    const l = document.createElement("p");
    (l.textContent =
      "Whether you're looking for an intimate dinner for two or planning a special event, our restaurant provides a warm and inviting atmosphere for a memorable dining experience. Join us for a celebration of flavors and exceptional service."),
      i.appendChild(d),
      i.appendChild(c),
      i.appendChild(s),
      i.appendChild(l);
    const m = document.createElement("footer");
    (m.textContent = "© The Dream Industries"),
      e.appendChild(n),
      e.appendChild(i),
      e.appendChild(m);
  })();
})();
