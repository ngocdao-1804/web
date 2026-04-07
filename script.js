const stories = [
  {
    title: "Hẹn hò với nha sĩ",
    content: "Tý rung động một anh chàng nha sĩ trẻ, đẹp trai. Thế nên cô thường lấy nguyên do đi nhổ răng để lén lút đến gặp anh ta. Một hôm, chàng nha sĩ rầu rĩ nói:\nAnh nghĩ chúng ta nên dừng lại thôi, chắc chồng em cũng có thể đã bắt đầu nghi ngờ rồi.\nTý ngạc nhiên:\nLàm gì có chuyện đó, chúng ta đã hẹn hò được một năm nay rồi mà chồng em có nói gì đâu.\nChàng nha sĩ khẽ lắc đầu:\nNhưng em còn có 1 cái răng thôi, lần sau biết lấy nguyên do gì để đến gặp anh nữa chứ?"
  },
  {
    title: "Đỡ đần",
    content: "Trong giờ học tiếng Việt, cô giáo yêu cầu học sinh đặt câu có từ “đỡ đần”. Tèo giơ tay xung phong:\nVì em học ngu nên ba mẹ cho em đi học thêm để em đỡ đần ạ.\nCô giáo ngẩn ngơ một lúc rồi không biết phải nói gì tiếp."
  },
  {
    title:"Ai phát hiện ra Châu Mỹ"
    content:"Trong giờ địa lý, cô giáo gọi Tâm lên hỏi:

\nEm hãy chỉ cô biết đâu là châu Mỹ?

\nTâm chỉ vào bản đồ và trả lời:

\nThưa cô, đây ạ!

\nCô giáo gật đầu:

\nTốt lắm! Nào, giờ Tí hãy nói ai đã có công phát hiện ra châu Mỹ?

\nTí lập tức chỉ vào Tâm và nói:

\nThưa cô, bạn Tâm ạ."
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
