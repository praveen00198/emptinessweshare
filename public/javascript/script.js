const menuBtn = document.getElementById('menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');

  menuBtn.addEventListener('click', () => {
    const isHidden = mobileMenu.classList.contains('hidden');
    if (isHidden) {
      mobileMenu.classList.remove('hidden');
      menuBtn.setAttribute('aria-expanded', 'true');
    } else {
      mobileMenu.classList.add('hidden');
      menuBtn.setAttribute('aria-expanded', 'false');
    }
  });


 document.addEventListener('DOMContentLoaded', function () {
    AOS.init();

    const menuBtn = document.getElementById('menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');

    menuBtn.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
    });
  });

   function toggleModal(show = true) {
    const modal = document.getElementById('sampleModal');
    modal.classList.toggle('hidden', !show);
  }

  // Attach event to Read Sample button
  document.addEventListener('DOMContentLoaded', () => {
    const sampleBtn = document.querySelector('.read-sample-btn');
    if (sampleBtn) {
      sampleBtn.addEventListener('click', () => toggleModal(true));
    }
  });



  function startCountdown(duration) {
    const timerEl = document.getElementById("timer");
    let endTime = Date.now() + duration * 1000;

    function updateTimer() {
      const remaining = Math.max(0, endTime - Date.now());
      const hours = String(Math.floor(remaining / 3600000)).padStart(2, '0');
      const mins = String(Math.floor((remaining % 3600000) / 60000)).padStart(2, '0');
      const secs = String(Math.floor((remaining % 60000) / 1000)).padStart(2, '0');
      timerEl.textContent = `${hours}:${mins}:${secs}`;
      if (remaining <= 0) clearInterval(interval);
    }

    updateTimer();
    const interval = setInterval(updateTimer, 1000);
  }

  // Start countdown on page load for 6 hours
  document.addEventListener("DOMContentLoaded", () => startCountdown(6 * 60 * 60));