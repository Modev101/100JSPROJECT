      const targetDate = new Date(2026, 0, 15);

      function pad(n) {
        return String(n).padStart(2, "0");
      }

      function update(unit, value) {
        const card = document.querySelector(`[data-unit="${unit}"]`);
        const span = card.querySelector("span");

        if (span.textContent === value) return;

        card.classList.add("flip-animate");

        setTimeout(() => {
          span.textContent = value;
        }, 300);

        card.addEventListener(
          "animationend",
          () => card.classList.remove("flip-animate"),
          { once: true }
        );
      }

      function tick() {
        const now = new Date();
        const diff = targetDate - now;
        if (diff <= 0) return;

        update("days", pad(Math.floor(diff / 86400000)));
        update("hours", pad(Math.floor((diff / 3600000) % 24)));
        update("minutes", pad(Math.floor((diff / 60000) % 60)));
        update("seconds", pad(Math.floor((diff / 1000) % 60)));
      }

      tick();
      setInterval(tick, 1000);