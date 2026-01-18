fetch("/data.json")
  .then((response) => response.json())
  .then((data) => {
    const div = document.createElement("div");
    div.innerHTML = `    <div class="flex flex-col items-center justify-center gap-1">
      <!-- FIRST CARD -->
      <div
        class="flex flex-col-reverse lg:flex-row lg:items-center items-start justify-center max-w-3xl lg:space-x-7 mt-20 bg-white rounded-lg py-3 px-5 relative"
      >
        <!-- VOTE BUTTON -->
        <div
          class="vote-box flex lg:flex-col items-center justify-center bg-[#c3c4ef7e] lg:space-y-2 rounded-lg p-2 space-x-3 mt-5 lg:mt-0 lg:space-x-0"
        >
          <i
            class="fa-solid fa-plus cursor-pointer text-[#5457b6] hover:opacity-70"
          ></i>
          <span id="voteNum" class="text-[#5457b6] font-semibold text-lg"
            >${data.comments[0].score}</span
          >
          <i
            class="fa-solid fa-minus cursor-pointer text-[#5457b6] hover:opacity-70"
          ></i>
        </div>
        <!-- MAIN CONTENT -->
        <div class="flex flex-col items-center justify-center space-y-3">
          <div class="flex justify-between w-full items-center">
            <div class="flex items-center space-x-4">
              <img
                src="${data.comments[0].user.image.png}"
                alt="${data.comments[0].user.username}"
                class="w-12"
              />
              <h1 class="font-semibold">${data.comments[0].user.username}</h1>
              <h2 class="text-[#67727e] lg:font-semibold text-sm lg:text-base">
                ${data.comments[0].createdAt}
              </h2>
            </div>
            <div
              id="reply1"
              class="text-[#5457b6] hover:opacity-70 cursor-pointer lg:static absolute bottom-5 right-5"
            >
              <i class="fa-solid fa-reply"></i>
              <span class="text-lg font-semibold">Reply</span>
            </div>
          </div>
          <div>
            <p class="text-[#67727e]">
              ${data.comments[0].content}
            </p>
          </div>
        </div>
      </div>

      <!-- REPLY CARD -->
      <div id="firstcard" class="w-full"></div>
      <div id="firstcardreply" class="w-full"></div>
      <!-- SECOND CARD -->
      <div
        id="markcomment"
        class="flex flex-col-reverse lg:flex-row lg:items-center items-start justify-center max-w-3xl lg:space-x-7 mt-2 bg-white rounded-lg py-3 px-5 relative"
      >
        <!-- VOTE BUTTON -->
        <div
          class="vote-box flex lg:flex-col items-center justify-center bg-[#c3c4ef7e] lg:space-y-2 rounded-lg p-2 space-x-3 mt-5 lg:mt-0 lg:space-x-0"
        >
          <i
            class="fa-solid fa-plus cursor-pointer text-[#5457b6] hover:opacity-70"
          ></i>
          <span id="voteNum" class="text-[#5457b6] font-semibold text-lg"
            >${data.comments[1].score}</span
          >
          <i
            class="fa-solid fa-minus cursor-pointer text-[#5457b6] hover:opacity-70"
          ></i>
        </div>
        <!-- MAIN CONTENT -->
        <div class="flex flex-col items-center justify-center space-y-3">
          <div class="flex justify-between w-full items-center">
            <div class="flex items-center space-x-4">
              <img
                src="${data.comments[1].user.image.png}"
                alt="${data.comments[1].user.username}"
                class="w-12"
              />
              <h1 class="font-semibold">${data.comments[1].user.username}</h1>
              <h2 class="text-[#67727e] lg:font-semibold text-sm lg:text-base">
                ${data.comments[1].createdAt}
              </h2>
            </div>
            <div
              id="reply2"
              class="text-[#5457b6] hover:opacity-70 cursor-pointer lg:static absolute bottom-5 right-5"
            >
              <i class="fa-solid fa-reply"></i>
              <span class="text-lg font-semibold">Reply</span>
            </div>
          </div>
          <div>
            <p class="text-[#67727e]">
              ${data.comments[1].content}
            </p>
          </div>
        </div>
      </div>
      <!-- SECOND CARD REPLIES-->
      <div
        class="lg:pr-8 lg:pl-6 lg:ml-16 lg:max-w-3xl border-l-gray-300 border-l-2 w-full"
      >
        <!-- FIRST CARD -->
        <div
          class="flex flex-col-reverse lg:flex-row lg:items-center items-start justify-center max-w-3xl lg:space-x-7 bg-white rounded-lg py-3 mt-2 px-5 relative"
        >
          <!-- VOTE BUTTON -->
          <div
            class="vote-box flex lg:flex-col items-center justify-center bg-[#c3c4ef7e] lg:space-y-2 rounded-lg p-2 space-x-3 mt-5 lg:mt-0 lg:space-x-0"
          >
            <i
              class="fa-solid fa-plus cursor-pointer text-[#5457b6] hover:opacity-70"
            ></i>
            <span id="voteNum" class="text-[#5457b6] font-semibold text-lg"
              >${data.comments[1].replies[0].score}</span
            >
            <i
              class="fa-solid fa-minus cursor-pointer text-[#5457b6] hover:opacity-70"
            ></i>
          </div>
          <!-- MAIN CONTENT -->
          <div class="flex flex-col items-center justify-center space-y-3">
            <div class="flex justify-between w-full items-center">
              <div class="flex items-center space-x-4">
                <img
                  src="${data.comments[1].replies[0].user.image.png}"
                  alt="${data.comments[1].replies[0].user.username}"
                  class="w-12"
                />
                <h1 class="font-semibold">${data.comments[1].replies[0].user.username}</h1>
                <h2
                  class="text-[#67727e] lg:font-semibold text-sm lg:text-base"
                >
                  ${data.comments[1].replies[0].createdAt}
                </h2>
              </div>
              <div
                id="reply3"
                class="text-[#5457b6] hover:opacity-70 cursor-pointer lg:static absolute bottom-5 right-5"
              >
                <i class="fa-solid fa-reply"></i>
                <span class="text-lg font-semibold">Reply</span>
              </div>
            </div>
            <div>
              <p class="text-[#67727e]">
                <a href="#markcomment">
                  <span class="text-[#5457b6] font-semibold">@maxblagun</span>
                </a>
                ${data.comments[1].replies[0].content}
              </p>
            </div>
          </div>
        </div>

        <!-- REPLY CARD -->
        <div id="secondcard" class="w-full"></div>
        <div id="secondcardreply" class="w-full"></div>

        <!-- SECOND REPLY CARD -->
      </div>
      <div id="addcomment" class="w-full"></div>
      <!-- ADD COMMENT CARD -->
      <div
        id="addcommentdiv"
        class="mb-10 flex items-center justify-center max-w-3xl w-full space-x-7 mt-2"
      >
        <div
          class="flex flex-col lg:flex-row space-y-3 lg:space-y-0 items-center bg-white w-full p-4 rounded-lg lg:space-x-4"
        >
          <img src="${data.currentUser.image.png}" class="w-12" />
          <input
            type="text"
            placeholder="Add a comment..."
            class="flex-1 border border-black py-3 px-4 rounded-lg"
            autocorrect="off"
            autocomplete="off"
          />
          <button
            id="sendbtn"
            class="bg-[#5457b6] hover:opacity-70 text-white px-4 py-2 rounded-lg"
          >
            SEND
          </button>
        </div>
      </div>
    </div>`;
    document.body.appendChild(div);
    const firstcard = document.getElementById("firstcard");
    const reply1 = document.getElementById("reply1");

    reply1.addEventListener("click", () => {
      if (firstcard.querySelector(".reply-card")) return;

      const div = document.createElement("div");
      div.className = "reply-card";

      div.innerHTML = `
  <div
    class="flex flex-col lg:flex-row space-y-3 lg:space-y-0 max-w-3xl mx-auto items-center mt-2 bg-white p-4 rounded-lg lg:space-x-4"
  >
    <img src="${data.currentUser.image.png}" class="w-12" />
    <input
      type="text"
      class="flex-1 border border-black py-3 px-4 rounded-lg"
    />
    <button
      class="bg-[#5457b6] hover:opacity-70 text-white px-4 py-2 rounded-lg"
    >
      REPLY
    </button>
  </div>
`;

      firstcard.appendChild(div);
      const input = div.querySelector("input");
      const button = div.querySelector("button");
      const firstcardreply = document.getElementById("firstcardreply");
      button.addEventListener("click", () => {
        const replytext = input.value;
        if (replytext === "") return;
        firstcard.querySelector(".reply-card").remove();
        const div2 = document.createElement("div");
        div2.innerHTML = `
    <div class="flex flex-col-reverse lg:flex-row lg:items-center justify-center mx-auto mt-2 max-w-3xl lg:space-x-7 bg-white rounded-lg py-3 px-5">
      <!-- MAIN CONTENT -->
      <div class="flex flex-col items-center justify-center space-y-3 w-full relative">
        <div class="flex justify-between w-full items-center">
          <div class="flex items-center space-x-4">
            <img src="${data.currentUser.image.png}" alt="${data.currentUser.username}" class="w-12" />
            <h1 class="font-semibold">${data.currentUser.username}</h1>
            <span class="bg-[#5457b6] font-semibold px-2 rounded-md text-white">you</span>
            <h2 class="text-[#67727e] lg:font-semibold text-sm lg:text-base">2 days ago</h2>
          </div>
          <div class="flex space-x-4 lg:static absolute bottom-2">
            <div id="delete" class="hover:opacity-70 cursor-pointer">
              <i class="fa-solid fa-trash text-red-500"></i>
              <span class="text-lg font-semibold text-red-500">Delete</span>
            </div>
            <div id="edit" class="hover:opacity-70 cursor-pointer">
              <i class="fa-solid fa-edit text-[#5457b6]"></i>
              <span class="text-lg font-semibold text-[#5457b6]">Edit</span>
            </div>
          </div>
        </div>
        <div class="w-full">
          <p class="text-[#67727e] pl-3 py-2  mb-7">${replytext}</p>
        </div>
        <div class="w-full flex justify-end">
          <button class="update-btn bg-[#5457b6] hover:opacity-70 text-white px-4 py-2 rounded-lg hidden">UPDATE</button>
        </div>
      </div>
    </div>
    `;
        firstcardreply.appendChild(div2);
        const edit = div2.querySelector("#edit");
        const paragraph = div2.querySelector("p");
        const update = div2.querySelector(".update-btn");

        edit.addEventListener("click", () => {
          paragraph.contentEditable = "true";
          paragraph.focus();
          update.classList.remove("hidden");
        });

        update.addEventListener("click", () => {
          paragraph.contentEditable = "false";
          update.classList.add("hidden");
        });
        const deletebtn = div2.querySelector("#delete");
        deletebtn.addEventListener("click", () => {
          const div3 = document.createElement("div");
          div3.innerHTML = `      <div
        id="overlay"
        class="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
      >
        <div class="bg-white rounded-lg p-5 shadow-xl">
          <h1 class="font-semibold text-xl mb-3">Delete comment</h1>
          <p class="text-[#67727e]">
            Are you sure you want to delete this <br />
            comment? This will remove the comment <br />
            and can't be undone.
          </p>
          <div
            class="text-white flex items-center justify-center space-x-3 mt-5"
          >
            <button
              id="cancelbtn"
              class="bg-[#67727e] rounded-md py-2 px-3 hover:opacity-70"
            >
              NO, CANCEL
            </button>
            <button
              id="deletebtn"
              class="bg-red-500 rounded-md py-2 px-3 hover:opacity-70"
            >
              YES, DELETE
            </button>
          </div>
        </div>
      </div>`;

          const deletebtn = div3.querySelector("#deletebtn");
          const cancelbtn = div3.querySelector("#cancelbtn");
          deletebtn.addEventListener("click", () => {
            div3.remove();
            div2.remove();
          });
          cancelbtn.addEventListener("click", () => {
            div3.remove();
          });
          document.body.appendChild(div3);
        });
      });
    });

    const secondcard = document.getElementById("secondcard");
    const reply23 = [
      document.getElementById("reply2"),
      document.getElementById("reply3"),
    ];

    reply23.forEach((btn) => {
      btn.addEventListener("click", () => {
        if (secondcard.querySelector(".reply-card2")) return;

        const div = document.createElement("div");
        div.className = "reply-card2";

        div.innerHTML = `
  <div
    class="flex flex-col lg:flex-row space-y-3 lg:space-y-0 max-w-3xl mx-auto items-center mt-2 bg-white p-4 rounded-lg lg:space-x-4"
  >
    <img src="${data.currentUser.image.png}" class="w-12" />
    <input
      type="text"
      class="flex-1 border border-black py-3 px-4 rounded-lg"
    />
    <button
      class="bg-[#5457b6] hover:opacity-70 text-white px-4 py-2 rounded-lg"
    >
      REPLY
    </button>
  </div>
`;

        secondcard.appendChild(div);
        const input = div.querySelector("input");
        const button = div.querySelector("button");
        const secondcardreply = document.getElementById("secondcardreply");
        button.addEventListener("click", () => {
          const replytext = input.value;
          if (replytext === "") return;
          secondcard.querySelector(".reply-card2").remove();
          const div2 = document.createElement("div");
          div2.innerHTML = `
    <div class="flex flex-col-reverse lg:flex-row lg:items-center justify-center mx-auto mt-2 max-w-3xl lg:space-x-7 bg-white rounded-lg py-3 px-5">
      <!-- MAIN CONTENT -->
      <div class="flex flex-col items-center justify-center space-y-3 w-full relative">
        <div class="flex justify-between w-full items-center">
          <div class="flex items-center space-x-4">
            <img src="${data.currentUser.image.png}" alt="${data.currentUser.username}" class="w-12" />
            <h1 class="font-semibold">${data.currentUser.username}</h1>
            <span class="bg-[#5457b6] font-semibold px-2 rounded-md text-white">you</span>
            <h2 class="text-[#67727e] lg:font-semibold text-sm lg:text-base">2 days ago</h2>
          </div>
          <div class="flex space-x-4 lg:static absolute bottom-2">
            <div id="delete" class="hover:opacity-70 cursor-pointer">
              <i class="fa-solid fa-trash text-red-500"></i>
              <span class="text-lg font-semibold text-red-500">Delete</span>
            </div>
            <div id="edit" class="hover:opacity-70 cursor-pointer">
              <i class="fa-solid fa-edit text-[#5457b6]"></i>
              <span class="text-lg font-semibold text-[#5457b6]">Edit</span>
            </div>
          </div>
        </div>
        <div class="w-full">
          <p class="text-[#67727e] pl-3 py-2  mb-7">${replytext}</p>
        </div>
        <div class="w-full flex justify-end">
          <button class="update-btn bg-[#5457b6] hover:opacity-70 text-white px-4 py-2 rounded-lg hidden">UPDATE</button>
        </div>
      </div>
    </div>
    `;

          secondcardreply.appendChild(div2);
          const edit = div2.querySelector("#edit");
          const paragraph = div2.querySelector("p");
          const update = div2.querySelector(".update-btn");

          edit.addEventListener("click", () => {
            paragraph.contentEditable = "true";
            paragraph.focus();
            update.classList.remove("hidden");
          });

          update.addEventListener("click", () => {
            paragraph.contentEditable = "false";
            update.classList.add("hidden");
          });
          const deletebtn = div2.querySelector("#delete");
          deletebtn.addEventListener("click", () => {
            const div3 = document.createElement("div");
            div3.innerHTML = `      <div
        id="overlay"
        class="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
      >
        <div class="bg-white rounded-lg p-5 shadow-xl">
          <h1 class="font-semibold text-xl mb-3">Delete comment</h1>
          <p class="text-[#67727e]">
            Are you sure you want to delete this <br />
            comment? This will remove the comment <br />
            and can't be undone.
          </p>
          <div
            class="text-white flex items-center justify-center space-x-3 mt-5"
          >
            <button
              id="cancelbtn"
              class="bg-[#67727e] rounded-md py-2 px-3 hover:opacity-70"
            >
              NO, CANCEL
            </button>
            <button
              id="deletebtn"
              class="bg-red-500 rounded-md py-2 px-3 hover:opacity-70"
            >
              YES, DELETE
            </button>
          </div>
        </div>
      </div>`;
            const deletebtn = div3.querySelector("#deletebtn");
            const cancelbtn = div3.querySelector("#cancelbtn");
            deletebtn.addEventListener("click", () => {
              div3.remove();
              div2.remove();
            });
            cancelbtn.addEventListener("click", () => {
              div3.remove();
            });
            document.body.appendChild(div3);
          });
        });
      });
    });

    const plusbtn = document.querySelectorAll(".fa-plus");
    const minusbtn = document.querySelectorAll(".fa-minus");
    const voteNum = document.querySelectorAll("#voteNum");

    const voteState = Array(voteNum.length).fill(0);

    plusbtn.forEach((btn, index) => {
      btn.addEventListener("click", () => {
        if (voteState[index] === 1) {
          voteNum[index].textContent--;
          voteState[index] = 0;
          btn.classList.remove("active");
        } else if (voteState[index] === -1) {
          voteNum[index].textContent = Number(voteNum[index].textContent) + 2;
          voteState[index] = 1;
          btn.classList.add("active");
          minusbtn[index].classList.remove("active");
        } else {
          voteNum[index].textContent = Number(voteNum[index].textContent) + 1;
          voteState[index] = 1;
          btn.classList.add("active");
        }
      });
    });

    minusbtn.forEach((btn, index) => {
      btn.addEventListener("click", () => {
        if (voteState[index] === -1) {
          voteNum[index].textContent++;
          voteState[index] = 0;
          btn.classList.remove("active");
        } else if (voteState[index] === 1) {
          voteNum[index].textContent = Number(voteNum[index].textContent) - 2;
          voteState[index] = -1;
          btn.classList.add("active");
          plusbtn[index].classList.remove("active");
        } else {
          voteNum[index].textContent = Number(voteNum[index].textContent) - 1;
          voteState[index] = -1;
          btn.classList.add("active");
        }
      });
    });

    const sendbtn = document.getElementById("sendbtn");
    const addcomment = document.getElementById("addcomment");
    const addcommentdiv = document.getElementById("addcommentdiv");

    sendbtn.addEventListener("click", () => {
      const div = document.createElement("div");
      const input = addcommentdiv.querySelector("input");
      const replytext = input.value;
      if (replytext === "") return;

      div.innerHTML = `
    <div class="flex flex-col-reverse lg:flex-row lg:items-center justify-center mx-auto mt-2 max-w-3xl lg:space-x-7 bg-white rounded-lg py-3 px-5">
      <!-- MAIN CONTENT -->
      <div class="flex flex-col items-center justify-center space-y-3 w-full relative">
        <div class="flex justify-between w-full items-center">
          <div class="flex items-center space-x-4">
            <img src="${data.currentUser.image.png}" alt="${data.currentUser.username}" class="w-12" />
            <h1 class="font-semibold">${data.currentUser.username}</h1>
            <span class="bg-[#5457b6] font-semibold px-2 rounded-md text-white">you</span>
            <h2 class="text-[#67727e] lg:font-semibold text-sm lg:text-base">2 days ago</h2>
          </div>
          <div class="flex space-x-4 lg:static absolute bottom-2">
            <div id="delete" class="hover:opacity-70 cursor-pointer">
              <i class="fa-solid fa-trash text-red-500"></i>
              <span class="text-lg font-semibold text-red-500">Delete</span>
            </div>
            <div id="edit" class="hover:opacity-70 cursor-pointer">
              <i class="fa-solid fa-edit text-[#5457b6]"></i>
              <span class="text-lg font-semibold text-[#5457b6]">Edit</span>
            </div>
          </div>
        </div>
        <div class="w-full">
          <p class="text-[#67727e] pl-3 py-2 mb-7">${replytext}</p>
        </div>
        <div class="w-full flex justify-end">
          <button class="update-btn bg-[#5457b6] hover:opacity-70 text-white px-4 py-2 rounded-lg hidden">UPDATE</button>
        </div>
      </div>
    </div>
  `;

      addcomment.appendChild(div);
      input.value = "";

      const deletebtn = div.querySelector("#delete");
      deletebtn.addEventListener("click", () => {
        const div2 = document.createElement("div");
        div2.innerHTML = `
      <div id="overlay" class="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
        <div class="bg-white rounded-lg p-5 shadow-xl">
          <h1 class="font-semibold text-xl mb-3">Delete comment</h1>
          <p class="text-[#67727e]">
            Are you sure you want to delete this <br />
            comment? This will remove the comment <br />
            and can't be undone.
          </p>
          <div class="text-white flex items-center justify-center space-x-3 mt-5">
            <button id="cancelbtn" class="bg-[#67727e] rounded-md py-2 px-3 hover:opacity-70">NO, CANCEL</button>
            <button id="deletebtn" class="bg-red-500 rounded-md py-2 px-3 hover:opacity-70">YES, DELETE</button>
          </div>
        </div>
      </div>`;

        const confirmDelete = div2.querySelector("#deletebtn");
        const cancelDelete = div2.querySelector("#cancelbtn");

        confirmDelete.addEventListener("click", () => {
          div.remove();
          div2.remove();
        });
        cancelDelete.addEventListener("click", () => div2.remove());

        document.body.appendChild(div2);
      });

      const editbtn = div.querySelector("#edit");
      const updatebtn = div.querySelector(".update-btn");
      const commentText = div.querySelector("p");

      editbtn.addEventListener("click", () => {
        commentText.contentEditable = "true";
        commentText.focus();
        updatebtn.classList.remove("hidden");
      });

      updatebtn.addEventListener("click", () => {
        commentText.contentEditable = "false";
        updatebtn.classList.add("hidden");
      });
    });
  })
  .catch(console.error);
