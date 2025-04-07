document.addEventListener("DOMContentLoaded", () => {
  const cookieConsent = document.getElementById("cookieConsent");
  const acceptButton = document.getElementById("btnAcceptCookies");

  // Verifica se o consentimento já foi dado
  if (!localStorage.getItem("cookiesAccepted")) {
    cookieConsent.classList.remove("hide");
  }

  // Registra o consentimento ao clicar no botão
  acceptButton.addEventListener("click", () => {
    localStorage.setItem("cookiesAccepted", "true");
    cookieConsent.classList.add("hide");
  });
});