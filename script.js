document.addEventListener("DOMContentLoaded", () => {

  const stories = [
    {
      title: "Hẹn hò với nha sĩ",
      content: "Tý rung động một anh chàng nha sĩ trẻ...\nAnh nghĩ chúng ta nên dừng lại thôi...\nLàm gì có chuyện đó...\nNhưng em còn có 1 cái răng thôi..."
    },
    {
      title: "Đỡ đần",
      content: "Trong giờ học tiếng Việt...\nVì em học ngu nên ba mẹ...\nCô giáo ngẩn ngơ..."
    },
    {
      title:"Ai phát hiện ra Châu Mỹ",
      content:"Trong giờ địa lý...\nEm hãy chỉ cô biết đâu là châu Mỹ?\nThưa cô, đây ạ!\nTốt lắm!...\nThưa cô, bạn Tâm ạ."
    }
  ];

  const bookList = document.getElementById("book-list");

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

  renderList();

});
