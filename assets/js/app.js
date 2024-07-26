const url = document.getElementById("url");
const btn = document.getElementById("btn");
let QRCodeDiv = document.getElementById("qrcode");
const loading = document.getElementById("loading");

btn.onclick = () => {
  QRCodeDiv.innerHTML = "";
  QRCodeDiv.classList.remove("p-8", "rounded-md", "border");

  // check input value is false or true
  if (!url.value) {
    return false;
  }

  const img = document.createElement("img");
  img.classList.add("mx-auto");

  // show loading
  loading.classList.remove("hidden");

  /***
   * Use API
   * website: https://goqr.me/api/
   * Free API
   */
  img.src = `https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=${url.value}`;

  // when image is loaded hide loading
  img.onload = () => {
    // hide loading
    loading.classList.add("hidden");

    // add padding and border to div
    QRCodeDiv.classList.add("p-8", "rounded-md", "border");

    // append image to div
    QRCodeDiv.appendChild(img);
  };
};
