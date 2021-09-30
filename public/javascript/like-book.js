let bookInfo = document.querySelector('article[class^="bookInfo"');
let likeBtn = document.querySelector('p[class^="likeBtn"');
async function LikeBookHandler(event) {
  let book_id = event.target.id;
  const response = await fetch("/api/books/upvote", {
    method: "POST",
    body: JSON.stringify({
      book_id,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (response.ok) {
    return;
  } else {
    alert("This book does not exist");
  }
}

likeBtn.addEventListener("click", LikeBookHandler);
