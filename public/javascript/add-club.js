async function newFormHandler(event) {
  event.preventDefault();

  const name = document.querySelector('input[name="club-name"]').value;
  const genre = document.querySelector('input[name="club-genre"]').value;
  const description = document.querySelector('textarea[name="club-desc"]').value;

  const response = await fetch(`/api/bookclubs`, {
    method: "POST",
    body: JSON.stringify({
      name,
      genre,
      description
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

document.querySelector(".new-club-form").addEventListener("submit", newFormHandler);
