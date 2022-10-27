const wbSlide1 = document.querySelector("#wbSlide1");
const wbSlide2 = document.querySelector("#wbSlide2");
const wbWebinarList = document.querySelector("#wbWebinarList");

const detailChangeTime = 1000;
const maxListHeightPercent = 50;
let listChangeTime = detailChangeTime;
let listGroup = [];

function groupList() {

  console.log(document.body.clientHeight);
  // const docHeight = document.getBoundingClientRect().height;
  let currentListHeight = 0;

  wbWebinarList.querySelectorAll("li").forEach((li) => {
    const height = li.clientHeight;
    console.log(height)
    console.log(parseInt(getComputedStyle(li).marginBottom));
    currentListHeight += height + parseInt(getComputedStyle(li).marginBottom);

  });

  // Measure from top
  // Get next LI height
  // If + height breaks boundary,
  // Add to next set - how do sets?
  // Apply class names? Limited by number!
  // No, needs to be JS to tie in.
  // Create a dictionary!!
  // Logic?
  // If new LI breaks clientY, start another group in array
  // This gives the count
  // 
}

function initList() {
  if (wbSlidesData.length > 0) wbWebinarList.innerHTML = "";
  wbSlidesData.forEach(webinar => {

    const li = document.createElement("li");
    const h2 = document.createElement("h2");
    const strong = document.createElement("strong");
    const h3 = document.createElement("h3");
    const time = document.createElement("time");
    const span = document.createElement("span");

    strong.textContent = webinar.title;
    h2.appendChild(strong);
    if (wbWebinarList.sub_title != "") {
      const subTitle = document.createTextNode(" - " + webinar.sub_title);
      h2.appendChild(subTitle);
    }
    h3.textContent = webinar.presenter;
    time.textContent = webinar.date;
    if (webinar.time != "") {
      span.textContent = " - " + webinar.time;
      time.appendChild(span);
    }
    li.appendChild(h2);
    li.appendChild(h3);
    li.appendChild(time);
    wbWebinarList.appendChild(li);
  });

  groupList();
}

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

initList();
// startGoToDetail();