// copy functionality
const copyIcon = document.querySelector(".copy-icon");

copyIcon.addEventListener("click", async () => {
  const input = document.querySelector(".link input");
  try {
    await navigator.clipboard.writeText(input.value);
    alert("Link Copied!");
  } catch (err) {
    alert("Failed to copy text: " + err);
  }
});

//display none when click X
const card = document.querySelector(".card");
const closeIcon = document.querySelector(".first-row span");

closeIcon.addEventListener("click", () => {
  card.style.display = "none";
});
