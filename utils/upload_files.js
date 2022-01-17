const form = new FormData();
form.append("file", "");

fetch("https://api.nftport.xyz/v0/files", {
  method: "POST",
  headers: {
    "Content-Type": "multipart/form-data",
    Authorization: "",
    "content-type": "multipart/form-data; boundary=---011000010111000001101001",
  },
})
  .then((response) => {
    console.log(response);
  })
  .catch((err) => {
    console.error(err);
  });
