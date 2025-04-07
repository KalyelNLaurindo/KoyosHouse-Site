document.addEventListener('DOMContentLoaded', () => {
  const cookieConsent = document.getElementById('cookieConsent');
  const btnAccept = document.getElementById('btnAcceptCookies');

  // Verifica se o consentimento já foi aceito
  if (!localStorage.getItem('cookieConsentAccepted')) {
    cookieConsent.classList.remove('hide'); // Mostra o banner
  }

  // Aceita o consentimento e salva no localStorage
  btnAccept.addEventListener('click', () => {
    localStorage.setItem('cookieConsentAccepted', 'true');
    cookieConsent.classList.add('hide'); // Esconde o banner
  });
});