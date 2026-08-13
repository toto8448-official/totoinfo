(function() {
    // ──────────────────────────────────────
    // CONFIGURATION — Edit these values
    // ──────────────────────────────────────

    // Profile picture URL — replace with your actual image link
    const PROFILE_PICTURE_URL =
        'https://images.unsplash.com/photo-1518020382113-a7e8fc38eac9?w=200&h=200&fit=crop&crop=face&auto=format&q=80';

    // Email for Gmail contact
    const EMAIL = 'toto.biglefttoe@gmail.com';

    // ──────────────────────────────────────
    // Apply configuration
    // ──────────────────────────────────────

    const profilePic = document.getElementById('profilePic');
    const avatarFallback = document.getElementById('avatarFallback');

    // Set profile picture
    if (PROFILE_PICTURE_URL && PROFILE_PICTURE_URL.trim() !== '') {
        profilePic.src = PROFILE_PICTURE_URL.trim();
        // The onload/onerror handlers in HTML manage visibility fallback
    } else {
        profilePic.style.display = 'none';
        avatarFallback.style.display = 'flex';
    }

    // Set Gmail contact link
    const contactLink = document.getElementById('contactLink');
    const email = EMAIL.trim();
    if (email) {
        contactLink.href = 'mailto:' + email;
        contactLink.title = 'Send email to ' + email;
    } else {
        contactLink.href = '#';
        contactLink.title = 'Email not configured';
        contactLink.addEventListener('click', function(e) {
            e.preventDefault();
            alert('Email address not configured. Please update the EMAIL variable in script.js.');
        });
    }

    // Optional logging (can be removed)
    console.log('🌐 toto\'s page loaded');
    console.log('📷 Profile picture:', PROFILE_PICTURE_URL || '(none — using fallback)');
    console.log('📧 Contact email:', email || '(not set)');
})();
