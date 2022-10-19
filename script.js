const btn = document.getElementById("btn");
const noteInput = document.getElementById("note-textarea");
const main = document.getElementById("main");
const container = document.getElementById("container");

// Add Note Btn
btn.addEventListener("click", () => {
  value = noteInput.value;

  const btnRemove = document.createElement("button");
  btnRemove.id = "btnRemove";
  btnRemove.innerHTML = "X";

  const note = document.createElement("grid");
  note.id = "note";
  note.innerHTML = "<p>" + value + "</p>";
  const noteDiv = (note.innerHTML = "<p>" + value + "</p>");

  const btnViewBtn = document.createElement("button");
  btnViewBtn.id = "btnView";
  btnViewBtn.innerHTML = "View Detail";

  note.appendChild(btnRemove);
  note.appendChild(btnViewBtn);
  container.appendChild(note);

  // Remove Note btn
  btnRemove.addEventListener("click", () => {
    note.remove();
  });

  //Active Modal
  btnViewBtn.addEventListener("click", () => {
    activeModal("modal-container");
    const modalContainer = document.getElementById("modal-container");
    const modal = document.getElementById("modal");
    modal.innerHTML =
      '<div class="modal" id="modal"><p>' +
      noteDiv +
      '<button class="btn-close" id="close-modal">' +
      "X" +
      "</button>" +
      "</p></div>";

    // Close Modal
    const closeModalBtn = document.getElementById("close-modal");
    closeModalBtn.addEventListener("click", () => {
      modalContainer.classList.remove("active");
    });
    modalContainer.addEventListener("click", () => {
      modalContainer.classList.remove("active");
    });
  });

  // Function Active Modal
  function activeModal(modalID) {
    const modal = document.getElementById(modalID);
    modal.classList.add("active");
  }
});
