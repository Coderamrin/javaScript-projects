const authorBtns = document.querySelectorAll(".author-item");
const reviewItems = document.querySelectorAll(".review-item");

authorBtns.forEach((btn) => {
  btn.addEventListener("click", function () {
    authorBtns.forEach((btn) => btn.classList.remove("active"));
    this.classList.add("active");

    reviewItems.forEach((item) => {
      if (item.classList.contains(btn.id)) {
        item.classList.remove("hidden");
        console.log(btn.id);
      } else {
        item.classList.add("hidden");
      }
    });
  });
});
