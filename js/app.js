const form = document.getElementById("codeForm"),
  qr = document.getElementById("qrcode");

const showLoder = () => {
  document.getElementById("loder").style.display = "block";
};
const hideLoder = () => {
  document.getElementById("loder").style.display = "none";
};

hideLoder();

const showrResult = () => {
  document.getElementById("animation").style.display = "none";
  document.getElementById("result").style.display = "block";
};
const hideResult = () => {
  document.getElementById("animation").style.display = "block";
  document.getElementById("result").style.display = "none";
};
hideResult();
const qrCodeGen = (url, size, dColor, lColor) => {
  const qrcode = new QRCode(qr, {
    text: url,
    width: size,
    height: size,
    colorDark: dColor,
    colorLight: lColor,
    //   correctLevel: QRCode.CorrectLevel.H,
  });
};

const saveImg = (imgUrl) => {
  const link = document.createElement("a");
  link.id = "saveBtn";
  link.href = imgUrl;
  link.download = "qrcode";
  link.innerHTML = "Download Image";
  result.appendChild(link);
};

form.onsubmit = (e) => {
  e.preventDefault();
  qr.innerHTML = "";
  // clear old btn
  if (document.getElementById("saveBtn")) saveBtn.remove();
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
      showrResult();
      qrCodeGen(url, size, dColor, lColor);
      setTimeout(() => {
        const saveUrl = qr.querySelector("img").src;
        saveImg(saveUrl);
      }, 300);
    }, 1500);
  }
};
