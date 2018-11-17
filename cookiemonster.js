window.addEventListener("load", block, false);

function block() {
  let divs = document.getElementsByTagName("div");
  let ids = ["optanon", "didomi", "cookie", "privacy"];
  let cookieWords = ["cookie", "Cookie", "Privacy Policy"];
  let agreeWords = [
    "accept",
    "Accept",
    "agree",
    "Agree",
    "acknowledge",
    "Acknowledge",
    "consent",
    "Consent",
    "OK",
    "Yes",
    "Allow",
    "allow",
    "Sign up"
  ];
  for (let d of divs) {
    if (
      (cookieWords.some(s => d.textContent.includes(s)) &
        agreeWords.some(s => d.textContent.includes(s)) ||
        ids.some(s => d.id.includes(s))) &
      !d.outerHTML.includes("<form") &
      !d.outerHTML.includes("<input") &
      (d.textContent.length < 2000)
    ) {
      d.remove();
    }
  }
}

setTimeout(block, 2000);
