console.log("hii");

const loading = document.createElement("div");
loading.style.height = "200px"
loading.style.width = "200px"
loading.innerText = "loading"
loading.style.backgroundColor = "pink"
loading.style.fontSize = "40px"
loading.style.paddingLeft = "40px"
loading.style.paddingTop = "100px"
loading.style.position = "fixed"
loading.style.top = "40vh"
loading.style.left = "50vw"

document.body.appendChild(loading);



const main = () => {
  console.log("2");
  const block = document.getElementsByClassName(
    "likes-you-paywall-explainer-cta"
  )[0];
  block.style.display = "none";

  const element = document.getElementsByClassName("r1HEI1d8cVFinFeIqQpA")[0];
  console.log(element);
  element.style.maxHeight = "initial";
  element.style.height = "initial";

  const images = document.getElementsByClassName("usercard-placeholder-thumb");

  const imageArray = Array.from(images);

  imageArray.map((photo, index) => {
    console.log(photo);
    photo.style.filter = "initial";
  });

  loading.style.display = "none"

};

setTimeout(main, 10000);

