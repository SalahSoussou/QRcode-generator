const form = document.getElementById("codeForm"),
  qr = document.getElementById("qrcode");

const showLoder = () => {
  document.getElementById("loder").style.display = "block";
};
const hideLoder = () => {
  document.getElementById("loder").style.display = "none";
};
hideLoder();

form.onsubmit = (e) => {
  e.preventDefault();
  const url = document.getElementById("srcText").value,
    size = document.getElementById("size").value;
  if (url === "") {
    alert("Please enter a URL");
  } else {
    showLoder();
  }
};
