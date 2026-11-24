const animation = document.querySelector("video[data-autoplay-loop]");

if (animation) {
  const motionPreference = matchMedia("(prefers-reduced-motion: reduce)");
  const syncPlayback = () => {
    if (motionPreference.matches) {
      animation.pause();
    } else {
      // The native controls are available if the browser requires a gesture.
      animation.play().catch(() => {});
    }
  };

  motionPreference.addEventListener("change", syncPlayback);
  syncPlayback();
}
