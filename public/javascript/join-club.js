let submits = document.querySelectorAll(".join-btn");
for (btn of submits) {
  btn.addEventListener("click", JoinClubHandler);
}

async function JoinClubHandler(event) {
  let club_id = event.target.id;
  console.log(club_id);

  const response = await fetch(`/api/bookclubs/join`, {
    method: "POST",
    body: JSON.stringify({
      club_id,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (response.ok) {
    document.location.replace("/club");
  } else {
    alert(response.statusText);
  }
}
