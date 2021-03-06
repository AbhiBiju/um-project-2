async function newFormHandler(event) {
  event.preventDefault();

  const title = document.querySelector('input[name="title"]').value;
  const author = document.querySelector('input[name="author"]').value;
  const review = document.querySelector('textarea[name="review"]').value;

  const response = await fetch(`/api/books`, {
    method: "POST",
    body: JSON.stringify({
      title,
      author,
      review
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

document.querySelector(".new-book-form").addEventListener("submit", newFormHandler);
