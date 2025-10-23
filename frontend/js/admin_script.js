document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("addCandidateForm");
  const messageBox = document.getElementById("message");
  const list = document.getElementById("candidatesList");

  // Load existing candidates
  async function loadCandidates() {
    const res = await fetch("http://localhost:4000/candidates");
    const data = await res.json();

    // Group candidates by position
    const grouped = data.reduce((acc, c) => {
      if (!acc[c.position]) acc[c.position] = [];
      acc[c.position].push(c);
      return acc;
    }, {});

    list.innerHTML = Object.entries(grouped)
      .map(
        ([position, candidates]) => `
      <div class="position-group">
        <h3>${position}</h3>
        <div class="cand-row">
          ${candidates
            .map(
              (c) => `
              <div class="candidate-card">
                <img src="${c.image}" alt="${c.name}" />
                <p><strong>${c.name}</strong></p>
              </div>
            `
            )
            .join("")}
        </div>
      </div>
    `
      )
      .join("");
  }

  loadCandidates();

  // Handle Add Candidate
  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const formData = new FormData(form);

    const res = await fetch("http://localhost:4000/add-candidate", {
      method: "POST",
      body: formData,
    });

    const data = await res.json();

    if (res.ok) {
      messageBox.textContent = data.message;
      messageBox.className = "msg-box success";
      form.reset();
      loadCandidates();
    } else {
      messageBox.textContent = data.error || "Error adding candidate.";
      messageBox.className = "msg-box error";
    }

    document.addEventListener("click", async (e) => {
      if (e.target.classList.contains("delete-btn")) {
        const card = e.target.closest(".candidate-card");
        const id = card.dataset.id;

        if (confirm("Are you sure you want to delete this candidate?")) {
          const res = await fetch(`http://localhost:4000/candidates/${id}`, {
            method: "DELETE",
          });

          const data = await res.json();
          alert(data.message || data.error);

          if (res.ok) {
            card.remove(); // instantly remove from UI
          }
        }
      }
    });
  });
});
