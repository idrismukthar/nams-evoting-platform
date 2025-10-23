document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("registration-form");
  const msgBox = document.getElementById("form-message");

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    // Get form values
    const fullname = document.getElementById("name").value.trim();
    const matric = document.getElementById("matric-no").value.trim();
    const password = document.getElementById("password").value.trim();

    // Reset message
    msgBox.textContent = "";
    msgBox.className = "";

    // Validate inputs
    if (!fullname || !matric || !password) {
      msgBox.textContent = "⚠️ Please fill in all fields.";
      msgBox.style.color = "red";
      return;
    }

    try {
      const res = await fetch("http://localhost:4000/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ fullname, matric, password }),
      });

      const data = await res.json();
      console.log("🧠 Signup Response:", data);

      if (res.ok) {
        msgBox.textContent = data.message || "✅ Registration successful!";
        msgBox.style.color = "green";

        // ✅ Automatically save user info for session continuity
        localStorage.setItem("user_matric", data.matric || matric);
        localStorage.setItem("user_fullname", data.fullname || fullname);

        // Redirect to ballot after delay
        setTimeout(() => {
          window.location.href = "ballot.html";
        }, 1500);
      } else {
        msgBox.textContent = data.error || "❌ Registration failed.";
        msgBox.style.color = "red";
      }
    } catch (err) {
      console.error("⚠️ Network Error:", err);
      msgBox.textContent = "❌ Unable to connect to server.";
      msgBox.style.color = "red";
    }
  });
});
