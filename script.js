document.addEventListener("DOMContentLoaded", function () {
  // Sign In Modal Toggle
  const signinContainer = document.getElementById("signin-container");
  const showSigninBtn = document.getElementById("show-signin");
  const closeSigninBtn = document.getElementById("close-signin");

  showSigninBtn.addEventListener("click", function (e) {
    e.preventDefault();
    signinContainer.style.display = "flex";
    document.body.style.overflow = "hidden";
  });

  closeSigninBtn.addEventListener("click", function () {
    signinContainer.style.display = "none";
    document.body.style.overflow = "auto";
  });

  // Close modal when clicking outside
  signinContainer.addEventListener("click", function (e) {
    if (e.target === signinContainer) {
      signinContainer.style.display = "none";
      document.body.style.overflow = "auto";
    }
  });

  // Form Submission
  const signinForm = document.getElementById("signin-form");

  signinForm.addEventListener("submit", function (e) {
    e.preventDefault();
    // Add your sign-in logic here
    alert("Sign In functionality would be implemented here");
  });

  // FAQ Toggle
  const faqQuestions = document.querySelectorAll(".faq-question");

  faqQuestions.forEach((question) => {
    question.addEventListener("click", function () {
      const answer = this.nextElementSibling;
      answer.classList.toggle("active");

      // Toggle the plus/minus icon
      const icon = this.querySelector("span");
      icon.textContent = answer.classList.contains("active") ? "×" : "+";
    });
  });

  // Sign Up Link in Sign In Modal
  const signupLink = document.getElementById("signup-link");

  signupLink.addEventListener("click", function (e) {
    e.preventDefault();
    signinContainer.style.display = "none";
    document.body.style.overflow = "auto";
    // Scroll to the signup form at the top
    window.scrollTo({
      top: document.querySelector(".hero").offsetTop,
      behavior: "smooth",
    });
  });
});
