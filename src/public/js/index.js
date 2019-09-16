(function() {
  const btnPost = document.querySelector("#btnPost");
  const onPostClick = e => {
    axios.post("/hello").then(res => {
      console.log(res);
    });
  };
  btnPost.addEventListener("click", onPostClick);
})();
