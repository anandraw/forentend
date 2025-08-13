function openContactModal() {
    document.getElementById('contactModal').style.display = 'flex';
}
function closeContactModal() {
    document.getElementById('contactModal').style.display = 'none';
}

// Handle form submission: send to backend to save in Excel
document.getElementById('contactForm').onsubmit = async function (e) {
    e.preventDefault();

    const form = e.target;
    const data = {
        name: form.name.value,
        email: form.email.value,
        contact: form.contact.value
    };

    const res = await fetch('https://myapp-backend-l2fx.onrender.com/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    });

    if (res.ok) {
        document.getElementById('formMsg').style.display = 'block';
        form.reset();
        setTimeout(closeContactModal, 1800);
    }
};


// animate counters
document.querySelectorAll('.num').forEach(el => {
    const target = parseFloat(el.getAttribute('data-target')) || 0;
    let cur = 0;
    const isFloat = (String(target).indexOf('.') > -1);
    const duration = 1400;
    const steps = Math.max(20, Math.round(duration / 16));
    const inc = target / steps;
    const fmt = v => isFloat ? Number(v).toFixed(1) : Math.round(v);
    const iv = setInterval(() => {
        cur += inc;
        if (cur >= target) { el.textContent = fmt(target); clearInterval(iv); }
        else el.textContent = fmt(cur);
    }, duration / steps);
});

// simple accessibility: pause marquee on hover
document.querySelectorAll('.marquee').forEach(m => {
    m.addEventListener('mouseenter', () => { m.querySelector('.track').style.animationPlayState = 'paused' })
    m.addEventListener('mouseleave', () => { m.querySelector('.track').style.animationPlayState = 'running' })
});