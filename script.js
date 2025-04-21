// script.js

// Change the welcome text
document.getElementById("change-text-btn").addEventListener("click", () => {
    document.getElementById("welcome-text").textContent = "You just changed the text with JavaScript!";
    document.getElementById("welcome-text").style.color = "#2ecc71";
  });
  
  // Add or remove a box dynamically
  document.getElementById("toggle-box-btn").addEventListener("click", () => {
    const box = document.getElementById("dynamic-box");
    if (box.childElementCount === 0) {
      const newBox = document.createElement("div");
      newBox.style.width = "100%";
      newBox.style.height = "100px";
      newBox.style.background = "#3498db";
      newBox.style.borderRadius = "8px";
      newBox.style.marginTop = "1rem";
      newBox.textContent = "📦 This box was added dynamically!";
      newBox.style.color = "#fff";
      newBox.style.display = "flex";
      newBox.style.alignItems = "center";
      newBox.style.justifyContent = "center";
      box.appendChild(newBox);
    } else {
      box.innerHTML = "";
    }
  });
  