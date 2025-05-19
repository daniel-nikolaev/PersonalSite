window.addEventListener("DOMContentLoaded", () => {
    fetch("standard/navbar.html")
      .then(res => res.text())
      .then(html => {
        document.getElementById("navbar-placeholder").innerHTML = html;
      });
  
    fetch("standard/footer.html")
      .then(res => res.text())
      .then(html => {
        document.getElementById("footer-placeholder").innerHTML = html;
      });
  });
  