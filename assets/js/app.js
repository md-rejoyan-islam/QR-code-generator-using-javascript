const url = document.getElementById("url");
const btn = document.getElementById("btn");
let QRCodeDiv = document.getElementById("qrcode");

btn.onclick = () => {
  QRCodeDiv.innerHTML = "";
  QRCodeDiv.classList.remove("p-8");
  QRCodeDiv.parentElement.classList.remove(
    "my-3",
    "px-4",
    "border",
    "rounded-md"
  );
  // check input value is false or true
  if (!url.value) {
    return false;
  }
  QRCodeDiv.classList.add("p-8");
  const img = document.createElement("img");
  img.classList.add("mx-auto");

  /***
   * Use API
   * website: https://goqr.me/api/
   * Free API
   */
  img.src = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${url.value}`;
  QRCodeDiv.appendChild(img);
};
