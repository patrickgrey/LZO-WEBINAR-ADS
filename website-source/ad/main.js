const wbSlide1 = document.querySelector("#wbSlide1");
const wbSlide2 = document.querySelector("#wbSlide2");
let listChangeTime = 1000;
let detailChangeTime = listChangeTime;

function startGoToDetail() {
  setTimeout(function () {
    wbSlide1.style.left = "-100%";
    wbSlide2.style.left = "0%";
    startGoToList();
  }, listChangeTime)
}

function startGoToList() {
  setTimeout(function () {
    wbSlide1.style.left = "0%";
    wbSlide2.style.left = "100%";
    startGoToDetail();
  }, detailChangeTime)
}

// startGoToDetail();