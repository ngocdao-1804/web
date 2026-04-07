const stories = [
  {
    title: "Truyện 1",
    content: "Nội dung truyện 1..."
  },
  {
    title: "Truyện 2",
    content: "Nội dung truyện 2..."
  }
];

const bookList = document.getElementById("book-list");

// render
function renderList() {
  bookList.innerHTML = "";

  stories.forEach(story => {
    const div = document.createElement("div");
    div.className = "book";
    div.innerText = story.title;

    div.onclick = () => {
      document.getElementById("book-list").style.display = "none";
      document.getElementById("reader").classList.remove("hidden");

      document.getElementById("story-title").innerText = story.title;
      document.getElementById("story-content").innerText = story.content;
    };

    bookList.appendChild(div);
  });
}

// chạy
renderList();

// back
function goBack() {
  document.getElementById("book-list").style.display = "block";
  document.getElementById("reader").classList.add("hidden");
}
