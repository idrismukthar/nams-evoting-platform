document.addEventListener("DOMContentLoaded", async () => {
  const grid = document.getElementById("candidates-grid");
  const submitBtn = document.getElementById("submitVoteBtn");
  const msgBox = document.getElementById("vote-message");
  const matric = localStorage.getItem("matric");

  if (!matric) {
    alert("You must log in first!");
    window.location.href = "login.html";
    return;
  }

  // Load candidates from server
  const res = await fetch("http://localhost:4000/candidates");
  const candidates = await res.json();

  // Group by position
  const grouped = {};
  candidates.forEach((c) => {
    if (!grouped[c.position]) grouped[c.position] = [];
    grouped[c.position].push(c);
  });

  // Display candidates
  grid.innerHTML = "";
  for (const [position, people] of Object.entries(grouped)) {
    const section = document.createElement("div");
    section.innerHTML = `<h3>${position.toUpperCase()}</h3>`;

    const cards = people
      .map(
        (c) => `
      <div class="card">
        <img src="http://localhost:4000/uploads/${c.image}" class="card-media">
        <div class="card-body">
          <h4 class="card-heading">${c.name}</h4>
          <label>
            <input type="radio" name="${position}" value="${c.id}">
            Vote
          </label>
        </div>
      </div>
    `
      )
      .join("");

    section.innerHTML += `<div class="card-grid">${cards}</div>`;
    grid.appendChild(section);
  }

  // Submit votes
  submitBtn.addEventListener("click", async () => {
    const votes = [];

    Object.keys(grouped).forEach((pos) => {
      const selected = document.querySelector(`input[name="${pos}"]:checked`);
      if (selected) {
        votes.push({
          candidate_id: selected.value,
          position: pos,
        });
      }
    });

    if (votes.length === 0) {
      msgBox.textContent = "❌ Please select at least one candidate.";
      msgBox.className = "error";
      return;
    }

    const res = await fetch("http://localhost:4000/submitVote", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ matric, votes }),
    });

    const data = await res.json();

    msgBox.textContent = data.message || data.error;
    msgBox.className = res.ok ? "success" : "error";

    if (res.ok) {
      setTimeout(() => {
        window.location.href = "results.html";
      }, 2000);
    }
  });
});
