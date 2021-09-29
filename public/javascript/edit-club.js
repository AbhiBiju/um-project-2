async function editFormHandler(event) {
  event.preventDefault();

  const title = document.querySelector('input[name="title"]').value.trim();
  const author = document.querySelector('input[name="author"]').value.trim();
  const review = document.querySelector('textarea[name="review"]').value.trim();

  const id = window.location.toString().split("/")[window.location.toString().split("/").length - 1];
  const response = await fetch(`/api/posts/${id}`, {
    method: "PUT",
    body: JSON.stringify({
      title,
      author,
      review,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (response.ok) {
    document.location.replace("/dashboard/");
  } else {
    alert(response.statusText);
  }
}

document.querySelector(".edit-book-form").addEventListener("submit", editFormHandler);
