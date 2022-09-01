const form = document.getElementById("codeForm"),
  qr = document.getElementById("qrcode");

const showLoder = () => {
  document.getElementById("loder").style.display = "block";
};
const hideLoder = () => {
  document.getElementById("loder").style.display = "none";
};
hideLoder();

const qrCodeGen = (url, size, dColor, lColor) => {
  const qrcode = new QRCode(document.getElementById("qrcode"), {
    text: url,
    width: size,
    height: size,
    colorDark: dColor,
    colorLight: lColor,
    //   correctLevel: QRCode.CorrectLevel.H,
  });
};

form.onsubmit = (e) => {
  e.preventDefault();
  const url = document.getElementById("srcText").value,
    dColor = document.getElementById("dColor").value,
    lColor = document.getElementById("lColor").value,
    size = document.getElementById("size").value;
  if (url === "") {
    alert("Please enter a URL");
  } else {
    showLoder();
    setTimeout(() => {
      hideLoder();
      qrCodeGen(url, size, dColor, lColor);
    }, 1500);
  }
};
