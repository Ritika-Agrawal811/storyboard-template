// Fetching data

async function fetchAssetsData() {
  let response = await fetch("data.json").then((res) => res.json());

  return response;
}

let data = fetchAssetsData();

const assetContainer = document.getElementById("assetContainer");

data
  .then((res) => {
    let assets = res.tasks[0].assets;

    for (let asset of assets) {
      let assetTitle = asset["asset_title"];
      let assetDescription = asset["asset_description"];

      let assetType = asset["asset_type"];
      let assetContent = asset["asset_content_type"];

      if (assetContent === "video") {
        let assetCard = videoAsset(assetTitle, assetDescription);
        assetContainer.append(assetCard);
      } else if (assetContent === "threadbuilder") {
        let assetCard = threadBuilderAsset(assetTitle, assetDescription);
        assetContainer.append(assetCard);
      } else if (assetContent === "article") {
        if (assetType === "input_asset") {
          let assetCard = articleAsset(assetTitle, assetDescription);
          assetContainer.append(assetCard);
        } else {
          let assetCard = methodAsset(assetTitle, assetDescription);
          assetContainer.append(assetCard);
        }
      }
    }

    const infoBtnArray = document.getElementsByClassName("info-btn");

    for (let btn of infoBtnArray) {
      btn.addEventListener("click", collapseDescription);
    }
  })
  .catch((err) => console.error("Error while getting data", err));

function collapseDescription(event) {
  let parent = event.target.offsetParent;
  let descriptionDiv = parent.nextElementSibling;

  descriptionDiv.classList.toggle("collapse");
}
