var responseAll = document.getElementById("responseWrapper");
var searchInput = document.getElementById("searchInput");
var question = document.getElementById("question");
function searchAPI() {
  responseAll.style.display = "flex";
  console.log(searchInput.value);
  question.innerText = searchInput.value;
  let asked = searchInput.value;
  let search = fetch(
    `https://google-search74.p.rapidapi.com/?query=${asked}&limit=40&related_keywords=true`,
    {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "76fbc6ae6emsh46851ddef1a7808p1731cdjsn83eaf099c9dd",
        "X-RapidAPI-Host": "google-search74.p.rapidapi.com",
      },
    }
  );
  // <div class="responses">
  //   <div id="title">Title</div>
  //   <div id="description">
  //     Description Lorem ipsum dolor sit, amet consectetur adipisicing elit.
  //     Tempore
  //   </div>
  //   <div id="url">
  //     <a href="url">URL</a>
  //   </div>
  // </div>;
  search
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      // console.log(data.results[2]);
      let arr = data.results;
      //  arr.forEach((result) => {
      //    console.log(result.title + "\n");
      //    console.log(result.url + "\n");
      //    console.log(result.description + "\n");
      //  });
      arr.forEach((result) => {
        responseAll.insertAdjacentHTML(
          "beforeend",
          `  <div class="responses">
            <div id="title">${result.title}</div>
            <div id="description">
              ${result.description}
            </div>
            <div id="url">
              <a href="url">${result.url}</a>
            </div>
          </div>`
        );
      });
    });
}

function hideResponse() {
  responseAll.style.display = "none";
  responseAll.innerHTML = ` <b style="font-size: 2rem;">Explore Quest</b>
            <span id="asked">
                <div id="question">${searchInput.value}</div>
                <i class="ri-close-circle-fill" id="cancleResponse" onclick="hideResponse()"></i>
            </span>
`;
}
