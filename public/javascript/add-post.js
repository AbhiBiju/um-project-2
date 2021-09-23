async function newFormHandler(event) {
  event.preventDefault();

  const book_name = document.querySelector('input[name="book-name"]').value;
  const book_author = document.querySelector('input[name="book-author"]').value;
  const price = document.querySelector('input[name="book-price"]').value;
  const content = document.querySelector('textarea[name="content"]').value;

  const response = await fetch(`/api/posts`, {
    method: "POST",
    body: JSON.stringify({
      book_name,
      book_author,
      price,
      content
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (response.ok) {
    document.location.replace("/dashboard");
  } else {
    alert(response.statusText);
  }
}

document.querySelector(".new-post-form").addEventListener("submit", newFormHandler);
