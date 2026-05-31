document.addEventListener('DOMContentLoaded', () => {

    // --- Copier email ---
    const copierBtn = document.getElementById("copier-mail");

    // Si le bouton existe sur la page → on active la fonctionnalité
    if (copierBtn) {
        copierBtn.addEventListener("click", () => {
            const email = "egautier263@gmail.com";
            navigator.clipboard.writeText(email)
                .then(() => alert("Adresse email copiée !"))
                .catch(err => console.error("Erreur lors de la copie :", err));
        });
    }
});

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('[data-fullscreen-only]').forEach(video => {
    const wrapper = video.closest('.video_grand_ecran');
    const button = wrapper ? wrapper.querySelector('.btn_grand_ecran') : null;

    const isFullscreen = () => {
      return document.fullscreenElement === video || document.webkitFullscreenElement === video;
    };

    const openFullscreenAndPlay = async () => {
      try {
        if (!isFullscreen()) {
          if (video.requestFullscreen) {
            await video.requestFullscreen();
          } else if (video.webkitRequestFullscreen) {
            video.webkitRequestFullscreen();
          }
        }
        await video.play();
      } catch (error) {
        console.error('Impossible de lancer la vidéo en grand écran :', error);
      }
    };

    if (button) {
      button.addEventListener('click', openFullscreenAndPlay);
    }

    video.addEventListener('play', () => {
      if (!isFullscreen()) {
        video.pause();
      }
    });

    const pauseOutsideFullscreen = () => {
      if (!isFullscreen() && !video.paused) {
        video.pause();
      }
    };

    document.addEventListener('fullscreenchange', pauseOutsideFullscreen);
    document.addEventListener('webkitfullscreenchange', pauseOutsideFullscreen);
  });
});

// Gestion Voir plus / Voir moins contenu compétences

    document.addEventListener('DOMContentLoaded', () => {

  // Voir plus / Voir moins
  document.querySelectorAll('.btn_deroulant').forEach(button => {
    button.addEventListener('click', () => {

      // On remonte au bloc parent
      const bloc = button.closest('.bloc_auto_eval');

      // On y cherche le texte caché
      const txt_cache = bloc.querySelector('.txt_cache');
      const fleche = button.querySelector('.fleche');

      const isHidden = window.getComputedStyle(txt_cache).display === "none";

      // Afficher / cacher
      txt_cache.style.display = isHidden ? "block" : "none";

      // Modifier la flèche
      fleche.textContent = isHidden ? "⬆️" : "⬇️";

      // Modifier le texte du bouton
      button.firstChild.textContent = isHidden ? "Voir moins " : "Voir plus ";
    });
  });

});
  // Gestion volets C1 et C2

  document.addEventListener('DOMContentLoaded', () => {

  document.querySelectorAll('.btn_volet').forEach(boutonVolet => {

    boutonVolet.addEventListener('click', () => {

      // On remonte au parent volet_C1 ou volet_C2
      const volet = boutonVolet.closest('.volet_C1, .volet_C2');

      const contenuVolet = volet.querySelector('.contenu_volet');
      const flecheVolet = boutonVolet.querySelector('.fleche_volet');

      const isHidden = window.getComputedStyle(contenuVolet).display === "none";

      // Afficher / cacher le volet
      contenuVolet.style.display = isHidden ? "block" : "none";

      // Changer la flèche de sens
      flecheVolet.textContent = isHidden ? "⬆️" : "⬇️";
    });

  });

});


