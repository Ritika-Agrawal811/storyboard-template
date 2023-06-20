function videoAsset(title, description) {
  const assetContainer = document.createElement("article");

  assetContainer.innerHTML = `
    <header>
      <h4>
        ${title}
        <span class="info-btn flex-center">i</span>
      </h4>
      <div class="asset-description flex-center">
        <p>
          <span class="fw-600">Description:</span> ${description}
        </p>
      </div>
    </header>
    <main>
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/TiMRwri1xJ8"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
    </main>`;

  assetContainer.classList.add("asset-card");

  return assetContainer;
}

function threadBuilderAsset(title, description) {
  const assetContainer = document.createElement("article");

  assetContainer.innerHTML = `
    <header>
      <h4>
        ${title}
        <span class="info-btn flex-center">i</span>
      </h4>
      <div class="asset-description flex-center">
        <p>
          <span class="fw-600">Description:</span> ${description}
        </p>
      </div>
    </header>
    <main>
      <section class="thread-container">
        <h3 class="fw-700 bg-light-pink">
          <i class="fa-solid fa-angle-up"></i>Thread A
        </h3>
        <fieldset class="container flex-center sub-thread-container">
          <div class="thread-div">
            <label>Sub thread 1</label>
            <input type="text" placeholder="Enter Text here" />
          </div>
          <div class="thread-div">
            <label>Sub Interpretation 1</label>
            <input type="text" placeholder="Enter Text here" />
          </div>
        </fieldset>
        <div class="container sub-thread-options-container flex-center">
          <div>
            <img src="assets/bulb.svg" alt="notification icon" />
            <img src="assets/message.svg" alt="message icon" />
            <img src="assets/question.svg" alt="question icon" />
            <img src="assets/hint.svg" alt="hint icon" />
          </div>
          <div>
            <select class="fw-600">
              <option>Select Categ</option>
            </select>
            <select class="fw-600">
              <option>Select Proces</option>
            </select>
          </div>
        </div>

        <div class="container sub-thread-container">
          <button class="btn sub-thread-btn">
            <i class="fa-solid fa-plus"></i>Sub-thread
          </button>
        </div>

        <fieldset class="container sub-thread-container thread-summary">
          <div class="thread-div">
            <label>Summary for Thread A</label>
            <input type="text" placeholder="Enter Text here" />
          </div>
        </fieldset>
      </section>
    </main>
  `;

  assetContainer.classList.add("asset-card");

  return assetContainer;
}

function articleAsset(title, description) {
  const assetContainer = document.createElement("article");

  assetContainer.innerHTML = `
  <header>
    <h4>
      ${title}
      <span class="info-btn flex-center">i</span>
    </h4>
    <div class="asset-description flex-center">
      <p>
        <span class="fw-600">Description:</span> ${description}
      </p>
    </div>
  </header>
  <main>
    <section class="thread-container article-container">
      <div class="container sub-thread-container">
        <label class="fw-600">Title</label>
        <input type="text" />
      </div>

      <div class="container sub-thread-container">
        <label class="fw-600">Content</label>
        <div class="editor">
          <ul class="menu">
            <li>File</li>
            <li>Edit</li>
            <li>View</li>
            <li>Insert</li>
            <li>Format</li>
            <li>Tools</li>
            <li>Table</li>
            <li>Help</li>
          </ul>
          <div class="editing-options">
            <img src="assets/left-arrow.svg" alt="left icon" />
            <img src="assets/right-arrow.svg" alt="right icon" />
            <img src="assets/fullscreen.svg" alt="fullscreen icon" />
            <span>Paragraph</span>
            <i class="fa-solid fa-ellipsis"></i>
          </div>
          <input type="text" />
        </div>
      </div>
    </section>
  </main>
    `;

  assetContainer.classList.add("asset-card");

  return assetContainer;
}

function methodAsset(title, description) {
  const assetContainer = document.createElement("article");

  assetContainer.innerHTML = `
        <header>
        <h4>
            ${title}
            <span class="info-btn flex-center">i</span>
        </h4>
        <div class="asset-description flex-center">
            <p>
            <span class="fw-600">Description:</span>${description}
            </p>
        </div>
        </header>
        <main>
        <section class="thread-container">
            <div class="w-90 container thread-chain">
            <h3 class="fw-700 bg-whitish-gray">
                <i class="fa-solid fa-angle-up"></i>Introduction
            </h3>
            <p>The 4SA Method , How to bring a idea into progress ?</p>
            <button class="see-more-btn fw-600">See More</button>
            </div>

            <div class="w-90 container thread-chain">
            <h3 class="fw-700 border-gray">
                <i class="fa-solid fa-angle-up"></i>Thread A
            </h3>
            <p>
                How are you going to develop your stratergy ? Which method
                are you going to use to develop a stratergy ? What if the
                project is lengthy?
            </p>
            <button class="see-more-btn fw-600">See More</button>

            <h3 class="fw-700 border-gray shift-end w-90">Example 1</h3>
            <p class="shift-end w-90">
                You have a concept , How will you put into progress?
            </p>
            </div>
        </section>
        </main>
      `;

  assetContainer.classList.add("asset-card");

  return assetContainer;
}
