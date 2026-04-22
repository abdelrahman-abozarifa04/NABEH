/* ===================================
   NABEH - Smart Education Assist
   Interactive JavaScript
   =================================== */

document.addEventListener('DOMContentLoaded', () => {
    // State
    let currentLang = 'ar';
    let currentTheme = localStorage.getItem('nabeh-theme') || 'light';

    // Elements
    const html = document.documentElement;
    const body = document.body;
    const header = document.getElementById('header');
    const themeToggle = document.getElementById('theme-toggle');
    const langToggle = document.getElementById('lang-toggle');
    const langText = document.getElementById('lang-text');
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const nav = document.getElementById('main-nav');
    const navLinks = document.querySelectorAll('.nav-link');
    const registerForm = document.getElementById('register-form');
    const fileUploadArea = document.getElementById('file-upload-area');
    const fileInput = document.getElementById('inst-logo');
    const filePreview = document.getElementById('file-preview');
    const previewImg = document.getElementById('preview-img');
    const fileRemove = document.getElementById('file-remove');
    const passwordToggle = document.getElementById('password-toggle');
    const passwordInput = document.getElementById('admin-password');
    const toast = document.getElementById('toast');
    const toastMessage = document.getElementById('toast-message');

    // ============ THEME ============
    function applyTheme(theme) {
        currentTheme = theme;
        html.setAttribute('data-theme', theme);
        localStorage.setItem('nabeh-theme', theme);
    }

    applyTheme(currentTheme);

    themeToggle.addEventListener('click', () => {
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';
        applyTheme(newTheme);
    });

    // ============ LANGUAGE ============
    function applyLanguage(lang) {
        currentLang = lang;
        html.setAttribute('lang', lang);
        html.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');
        langText.textContent = lang === 'ar' ? 'EN' : 'عربي';

        // Universal translation helper
        function translateElement(el, text) {
            if (!text) return;
            // If element has a <span> child, update the span
            const span = el.querySelector(':scope > span');
            if (span && !span.classList.contains('badge-dot')) {
                span.textContent = text;
                return;
            }
            // If element has no child elements, update textContent directly
            if (el.children.length === 0) {
                el.textContent = text;
                return;
            }
            // For elements like hero-badge DIV
            const innerSpan = el.querySelector('span:not(.badge-dot)');
            if (innerSpan) {
                innerSpan.textContent = text;
            }
        }

        // Update all elements with data-ar/data-en attributes
        document.querySelectorAll('[data-ar][data-en]').forEach(el => {
            const text = el.getAttribute(`data-${lang}`);
            if (text) translateElement(el, text);
        });

        // Update nav links text (these may not have data-en on itself but on the a tag)
        navLinks.forEach(link => {
            const text = link.getAttribute(`data-${lang}`);
            if (text) link.textContent = text;
        });

        // Update pricing features list items (li with svg + span children)
        document.querySelectorAll('.plan-features li').forEach(li => {
            const text = li.getAttribute(`data-${lang}`);
            if (text) {
                const span = li.querySelector('span');
                if (span) span.textContent = text;
            }
        });

        // Update form section titles (h3 with svg + span children)
        document.querySelectorAll('.form-section-title').forEach(title => {
            const text = title.getAttribute(`data-${lang}`);
            if (text) {
                const span = title.querySelector('span');
                if (span) span.textContent = text;
            }
        });

        // Update select options
        document.querySelectorAll('select option').forEach(opt => {
            const text = opt.getAttribute(`data-${lang}`);
            if (text) opt.textContent = text;
        });

        // Update hero title spans
        document.querySelectorAll('.hero-title span').forEach(span => {
            const text = span.getAttribute(`data-${lang}`);
            if (text) span.textContent = text;
        });
    }

    langToggle.addEventListener('click', () => {
        const newLang = currentLang === 'ar' ? 'en' : 'ar';
        applyLanguage(newLang);
    });

    // ============ HEADER SCROLL ============
    let lastScroll = 0;
    window.addEventListener('scroll', () => {
        const scroll = window.scrollY;
        if (scroll > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
        lastScroll = scroll;
    }, { passive: true });

    // ============ MOBILE MENU ============
    mobileMenuBtn.addEventListener('click', () => {
        mobileMenuBtn.classList.toggle('active');
        nav.classList.toggle('active');
        body.style.overflow = nav.classList.contains('active') ? 'hidden' : '';
    });

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenuBtn.classList.remove('active');
            nav.classList.remove('active');
            body.style.overflow = '';
        });
    });

    // ============ ACTIVE NAV LINK ============
    const sections = document.querySelectorAll('section[id]');

    function updateActiveNav() {
        const scrollY = window.scrollY + 100;
        sections.forEach(section => {
            const top = section.offsetTop;
            const height = section.offsetHeight;
            const id = section.getAttribute('id');
            const link = document.querySelector(`.nav-link[href="#${id}"]`);
            if (link) {
                if (scrollY >= top && scrollY < top + height) {
                    navLinks.forEach(l => l.classList.remove('active'));
                    link.classList.add('active');
                }
            }
        });
    }

    window.addEventListener('scroll', updateActiveNav, { passive: true });

    // ============ SCROLL ANIMATIONS ============
    const observerOptions = {
        threshold: 0.15,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const delay = entry.target.getAttribute('data-delay') || 0;
                setTimeout(() => {
                    entry.target.classList.add('visible');
                }, parseInt(delay));
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

    // ============ COUNTER ANIMATION ============
    function animateCounters() {
        document.querySelectorAll('.stat-number[data-count]').forEach(counter => {
            const target = parseInt(counter.getAttribute('data-count'));
            const duration = 2000;
            const start = performance.now();

            function update(now) {
                const elapsed = now - start;
                const progress = Math.min(elapsed / duration, 1);
                const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
                counter.textContent = Math.floor(eased * target);
                if (progress < 1) {
                    requestAnimationFrame(update);
                } else {
                    counter.textContent = target;
                }
            }

            requestAnimationFrame(update);
        });
    }

    // Trigger counter animation when stats section is visible
    const statsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounters();
                statsObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    const heroStats = document.querySelector('.hero-stats');
    if (heroStats) statsObserver.observe(heroStats);

    // ============ FILE UPLOAD ============
    fileUploadArea.addEventListener('click', () => {
        if (filePreview.style.display === 'none' || !filePreview.style.display) {
            fileInput.click();
        }
    });

    fileInput.addEventListener('change', (e) => {
        handleFile(e.target.files[0]);
    });

    fileUploadArea.addEventListener('dragover', (e) => {
        e.preventDefault();
        fileUploadArea.classList.add('dragover');
    });

    fileUploadArea.addEventListener('dragleave', () => {
        fileUploadArea.classList.remove('dragover');
    });

    fileUploadArea.addEventListener('drop', (e) => {
        e.preventDefault();
        fileUploadArea.classList.remove('dragover');
        const file = e.dataTransfer.files[0];
        if (file && file.type.startsWith('image/')) {
            fileInput.files = e.dataTransfer.files;
            handleFile(file);
        }
    });

    function handleFile(file) {
        if (!file) return;
        const reader = new FileReader();
        reader.onload = (e) => {
            previewImg.src = e.target.result;
            document.querySelector('.file-upload-content').style.display = 'none';
            filePreview.style.display = 'flex';
        };
        reader.readAsDataURL(file);
    }

    fileRemove.addEventListener('click', (e) => {
        e.stopPropagation();
        fileInput.value = '';
        previewImg.src = '';
        filePreview.style.display = 'none';
        document.querySelector('.file-upload-content').style.display = 'flex';
    });

    // ============ PASSWORD TOGGLE ============
    passwordToggle.addEventListener('click', () => {
        const isPassword = passwordInput.type === 'password';
        passwordInput.type = isPassword ? 'text' : 'password';
        passwordToggle.classList.toggle('active');
    });

    // ============ FORM SUBMISSION ============
    registerForm.addEventListener('submit', (e) => {
        e.preventDefault();

        // Basic validation check
        const requiredFields = registerForm.querySelectorAll('[required]');
        let allValid = true;

        requiredFields.forEach(field => {
            if (!field.value.trim()) {
                allValid = false;
                field.style.borderColor = '#ef4444';
                field.addEventListener('input', function handler() {
                    field.style.borderColor = '';
                    field.removeEventListener('input', handler);
                }, { once: true });
            }
        });

        // Email validation
        const emailFields = registerForm.querySelectorAll('input[type="email"]');
        emailFields.forEach(field => {
            if (field.value && !isValidEmail(field.value)) {
                allValid = false;
                field.style.borderColor = '#ef4444';
            }
        });

        if (!allValid) {
            showToast(currentLang === 'ar' ? 'يرجى ملء جميع الحقول المطلوبة بشكل صحيح' : 'Please fill in all required fields correctly', 'error');
            return;
        }

        // Simulate submission
        const submitBtn = document.getElementById('submit-btn');
        const originalText = submitBtn.querySelector('span').textContent;
        submitBtn.querySelector('span').textContent = currentLang === 'ar' ? 'جاري التسجيل...' : 'Registering...';
        submitBtn.disabled = true;
        submitBtn.style.opacity = '0.7';

        setTimeout(() => {
            submitBtn.querySelector('span').textContent = originalText;
            submitBtn.disabled = false;
            submitBtn.style.opacity = '1';
            showToast(currentLang === 'ar' ? 'تم التسجيل بنجاح! سنتواصل معك قريباً.' : 'Registration successful! We will contact you soon.');
            registerForm.reset();
            // Reset file upload
            previewImg.src = '';
            filePreview.style.display = 'none';
            document.querySelector('.file-upload-content').style.display = 'flex';
        }, 1500);
    });

    function isValidEmail(email) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }

    // ============ TOAST ============
    function showToast(message) {
        toastMessage.textContent = message;
        toast.classList.add('show');
        setTimeout(() => {
            toast.classList.remove('show');
        }, 4000);
    }

    // ============ SMOOTH SCROLL ============
    document.querySelectorAll('a[href^="#"]').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const target = document.querySelector(link.getAttribute('href'));
            if (target) {
                const offset = 80;
                const top = target.getBoundingClientRect().top + window.scrollY - offset;
                window.scrollTo({ top, behavior: 'smooth' });
            }
        });
    });

    // ============ INITIAL STATE ============
    // Apply initial language (Arabic by default)
    applyLanguage('ar');
});
