let daily = document.getElementById("daily");
let weekly = document.getElementById("weekly");
let monthly = document.getElementById("monthly");
let hours = document.getElementById("hours");
let prevhrs = document.getElementById("prevhrs");
let all_bottom_class = document.getElementsByClassName("card_bottom");
// console.log(all_bottom_class);

let button = document.querySelectorAll(".btn");
// console.log(button);

//fetching data from api
button.forEach((btn) => {
  // console.log(btn);
  btn.addEventListener("click", (event) => {
    let activebtn = document.querySelector(".btn.active");
    activebtn.classList.remove("active");
    // console.log(event.target);
    event.target.classList.add("active");
  });
});

let fetchdata = async () => {
  let fetchApi = fetch("./data.json");
  let response = await fetchApi;
  let newresponse = await response.json();
  // console.log(newresponse);
  updateDataInPage(newresponse);
};
fetchdata();

function updateDataInPage(data) {
  // console.log(data);

  function getDaily() {
    for (let i = 0; i < all_bottom_class.length; i++) {
      // console.log(all_bottom_class[i]);
      all_bottom_class[i].innerHTML = `
                                      <p id="hours">${
                                        data[i].timeframes.daily.current + "hrs"
                                      }</p>
                                      <p id="prevhrs">${
                                        "Previous -" +
                                        data[i].timeframes.daily.previous +
                                        "hrs"
                                      }</p>
                                      `;
    }
  }

  function getWeekly() {
    for (let i = 0; i < all_bottom_class.length; i++) {
      // console.log(all_bottom_class[i]);
      all_bottom_class[i].innerHTML = `
                                      <p id="hours">${
                                        data[i].timeframes.weekly.current +
                                        "hrs"
                                      }</p>
                                      <p id="prevhrs">${
                                        "Previous -" +
                                        data[i].timeframes.weekly.previous +
                                        "hrs"
                                      }</p>
                                      `;
    }
  }

  function getMonthly() {
    for (let i = 0; i < all_bottom_class.length; i++) {
      // console.log(all_bottom_class[i]);
      all_bottom_class[i].innerHTML = `
                                      <p id="hours">${
                                        data[i].timeframes.monthly.current +
                                        "hrs"
                                      }</p>
                                      <p id="prevhrs">${
                                        "Previous -" +
                                        data[i].timeframes.monthly.previous +
                                        "hrs"
                                      }</p>
                                      `;
    }
  }
  //updated
  daily.addEventListener("click", getDaily);
  weekly.addEventListener("click", getWeekly);
  monthly.addEventListener("click", getMonthly);
}
