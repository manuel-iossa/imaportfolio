    // ── Hamburger ──
    const ham = document.getElementById('ham');
    const navLinks = document.getElementById('navLinks');
    ham.addEventListener('click', () => navLinks.classList.toggle('open'));

    // ── Mobile dropdowns ──
    document.querySelectorAll('.dropdown-toggle').forEach(toggle => {
        toggle.addEventListener('click', e => {
            if (window.innerWidth <= 900) {
                e.preventDefault();
                toggle.parentElement.classList.toggle('open');
            }
        });
    });

    // ── book reveal ──
    const observer = new IntersectionObserver(entries => {
        entries.forEach((entry, i) => {
            if (entry.isIntersecting) {
                setTimeout(() => entry.target.classList.add('visible'), i * 60);
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.05 });

    document.querySelectorAll('.argomento-section').forEach(el => observer.observe(el));