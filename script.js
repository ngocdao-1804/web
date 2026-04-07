const stories = [
  {
    id: 1,
    title: "Truyện 1: Khu rừng bí ẩn",
    content: "Ngày xưa, trong một khu rừng sâu..."
  },
  {
    id: 2,
    title: "Truyện 2: Thành phố ánh sáng",
    content: "Một thành phố nơi ánh sáng không bao giờ tắt..."
  },
  {
    id: 3,
    title: "Truyện 3: Người du hành thời gian",
    content: "Anh ta có thể quay về quá khứ..."
  }
];

const bookList = document.getElementById("book-list");

// Hàm render
function renderList(data) {
  bookList.innerHTML = "";

  data.forEach(story => {
    const div = document.createElement("div");
    div.className = "book";
    div.innerText = story.title;

    div.onclick = () => openStory(story);

    bookList.appendChild(div);
  });
}

// Hiển thị ban đầu
renderList(stories);

// Tìm kiếm
function searchStory() {
  const keyword = document.getElementById("search").value.toLowerCase();

  const filtered = stories.filter(story =>
    story.title.toLowerCase().includes(keyword)
  );

  renderList(filtered);
}

// Mở truyện
function openStory(story) {
  document.getElementById("book-list").classList.add("hidden");
  document.getElementById("reader").classList.remove("hidden");

  document.getElementById("story-title").innerText = story.title;
  document.getElementById("story-content").innerText = story.content;
}

// Quay lại
function goBack() {
  document.getElementById("book-list").classList.remove("hidden");
  document.getElementById("reader").classList.add("hidden");
}
