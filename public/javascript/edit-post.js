async function editFormHandler(event) {
  event.preventDefault();

  const name = document.querySelector('input[name="book-name"]').value.trim();
  const author = document.querySelector('input[name="book-author"]').value.trim();
  const price = document.querySelector('input[name="book-price"]').value.trim();
  const content = document.querySelector('textarea[name="content"]').value.trim();

  const id = window.location.toString().split("/")[window.location.toString().split("/").length - 1];
  const response = await fetch(`/api/posts/${id}`, {
    method: "PUT",
    body: JSON.stringify({
      name,
      author,
      price,
      content
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

document.querySelector(".edit-post-form").addEventListener("submit", editFormHandler);
