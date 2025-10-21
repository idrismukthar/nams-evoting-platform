document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("loginForm");
  const msgBox = document.getElementById("loginMessage");

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const matric = document.getElementById("matric").value.trim();
    const password = document.getElementById("password").value.trim();

    msgBox.textContent = "";
    msgBox.className = "";

    if (!matric || !password) {
      msgBox.textContent = "⚠️ Please fill in all fields.";
      msgBox.className = "error";
      return;
    }

    try {
      const res = await fetch("http://localhost:4000/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ matric, password }),
      });

      const data = await res.json();
      console.log("🧠 Login Response:", data);

      if (res.ok) {
        msgBox.textContent = data.message || "✅ Login successful!";
        msgBox.className = "success";

        // ✅ Save user details using consistent keys
        localStorage.setItem("user_matric", data.matric);
        localStorage.setItem("user_fullname", data.fullname);

        // Redirect to ballot after short delay
        setTimeout(() => {
          window.location.href = "ballot.html";
        }, 1200);
      } else {
        msgBox.textContent =
          data.error || "❌ Login failed. Check your details.";
        msgBox.className = "error";
      }
    } catch (err) {
      console.error("⚠️ Network error:", err);
      msgBox.textContent = "❌ Unable to connect to the server.";
      msgBox.className = "error";
    }
  });
});
