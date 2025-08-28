<!DOCTYPE html>
<html lang="en" data-theme="dark">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Zahraa Magdi - Front-end Developer</title>
    <meta name="description" content="Front-end Developer specialized in React.js and JavaScript. Building dynamic, responsive web applications with clean UI and modern practices.">
    
    <!-- Open Graph -->
    <meta property="og:title" content="Zahraa Magdi - Front-end Developer">
    <meta property="og:description" content="Front-end Developer specialized in React.js and JavaScript">
    <meta property="og:type" content="website">
    
    <!-- Favicon placeholder -->
    <link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>👩‍💻</text></svg>">
    
    <!-- Google Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Sora:wght@400;500;600;700&display=swap" rel="stylesheet">
    
    <link rel="stylesheet" href="styles.css">
    
    <!-- Structured Data -->
    <script type="application/ld+json">
    {
        "@context": "https://schema.org",
        "@type": "Person",
        "name": "Zahraa Magdi",
        "jobTitle": "Front-end Developer",
        "url": "https://github.com/Zahra172",
        "sameAs": [
            "https://github.com/Zahra172",
            "https://linkedin.com/in/zahra-magdi17"
        ],
        "address": {
            "@type": "PostalAddress",
            "addressLocality": "Cairo",
            "addressCountry": "Egypt"
        }
    }
    </script>
</head>
<body>
    <!-- Animated Background -->
    <div class="animated-background">
        <div class="floating-shapes">
            <div class="shape shape-1"></div>
            <div class="shape shape-2"></div>
            <div class="shape shape-3"></div>
            <div class="shape shape-4"></div>
            <div class="shape shape-5"></div>
        </div>
    </div>

    <!-- Theme Toggle -->
    <button class="theme-toggle" aria-label="Toggle theme" title="Toggle theme">
        <span class="theme-icon">🌙</span>
    </button>

    <main>
        <!-- Hero Section -->
        <section class="hero" id="hero">
            <div class="container">
                <div class="hero-content fade-in">
                    <!-- Profile Picture Section -->
                    <div class="profile-section">
                        <div class="profile-picture-container">
                            <div class="profile-picture">
                                <div class="profile-placeholder">
                                    <span class="profile-initials">ZM</span>
                                </div>
                            </div>
                            <!-- Technology Icons Around Profile -->
                            <div class="tech-icons">
                                <div class="tech-icon" style="--delay: 0s">
                                    <span class="tech-emoji">⚛️</span>
                                    <span class="tech-tooltip">React</span>
                                </div>
                                <div class="tech-icon" style="--delay: 0.5s">
                                    <span class="tech-emoji">🎨</span>
                                    <span class="tech-tooltip">CSS3</span>
                                </div>
                                <div class="tech-icon" style="--delay: 1s">
                                    <span class="tech-emoji">📄</span>
                                    <span class="tech-tooltip">HTML5</span>
                                </div>
                                <div class="tech-icon" style="--delay: 1.5s">
                                    <span class="tech-emoji">⚡</span>
                                    <span class="tech-tooltip">JavaScript</span>
                                </div>
                                <div class="tech-icon" style="--delay: 2s">
                                    <span class="tech-emoji">🎯</span>
                                    <span class="tech-tooltip">Next.js</span>
                                </div>
                                <div class="tech-icon" style="--delay: 2.5s">
                                    <span class="tech-emoji">🎪</span>
                                    <span class="tech-tooltip">Tailwind</span>
                                </div>
                                <div class="tech-icon" style="--delay: 3s">
                                    <span class="tech-emoji">🔧</span>
                                    <span class="tech-tooltip">Git</span>
                                </div>
                                <div class="tech-icon" style="--delay: 3.5s">
                                    <span class="tech-emoji">🎨</span>
                                    <span class="tech-tooltip">Figma</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <h1 class="hero-title">Zahraa Magdi</h1>
                    <p class="hero-subtitle typewriter">Front-end Developer</p>
                    <p class="hero-bio">I build dynamic, responsive web apps with React.js and JavaScript. Passionate about clean UI, accessibility, and performance.</p>
                    <p class="hero-tagline">Building clean, fast, and accessible web experiences.</p>
                    
                    <div class="hero-cta">
                        <a href="#projects" class="btn btn-primary">View Projects</a>
                        <a href="#contact" class="btn btn-secondary">Contact Me</a>
                        <button class="btn btn-cv" onclick="downloadCV()">
                            <span class="btn-icon">📄</span>
                            Download CV
                        </button>
                    </div>
                </div>
            </div>
        </section>

        <!-- About Section -->
        <section class="section" id="about">
            <div class="container">
                <h2 class="section-title fade-in">About Me</h2>
                <div class="about-content fade-in">
                    <p>A Front-End Developer specialized in building dynamic and responsive web applications using React.js and JavaScript. Experienced in translating UI/UX designs into clean, maintainable code through hands-on personal and training-based projects. Passionate about seamless user experiences and modern development practices. Eager to learn new technologies and improve code quality.</p>
                </div>
            </div>
        </section>

        <!-- Skills Section -->
        <section class="section" id="skills">
            <div class="container">
                <h2 class="section-title fade-in">Skills</h2>
                <div class="skills-grid">
                    <div class="skill-category fade-in">
                        <h3 class="skill-category-title">Front-End</h3>
                        <div class="skill-tags">
                            <span class="skill-tag">HTML5</span>
                            <span class="skill-tag">CSS3</span>
                            <span class="skill-tag">JavaScript</span>
                            <span class="skill-tag">React.js</span>
                            <span class="skill-tag">Next.js</span>
                            <span class="skill-tag">Material UI</span>
                            <span class="skill-tag">Tailwind</span>
                            <span class="skill-tag">Bootstrap</span>
                            <span class="skill-tag">Responsive Design</span>
                            <span class="skill-tag">Unit Testing</span>
                            <span class="skill-tag">Agile</span>
                            <span class="skill-tag">OOP</span>
                        </div>
                    </div>
                    <div class="skill-category fade-in">
                        <h3 class="skill-category-title">Tools & Tech</h3>
                        <div class="skill-tags">
                            <span class="skill-tag">Figma</span>
                            <span class="skill-tag">UI/UX</span>
                            <span class="skill-tag">Git</span>
                            <span class="skill-tag">GitHub</span>
                            <span class="skill-tag">Postman</span>
                            <span class="skill-tag">Firebase</span>
                        </div>
                    </div>
                    <div class="skill-category fade-in">
                        <h3 class="skill-category-title">Personal</h3>
                        <div class="skill-tags">
                            <span class="skill-tag">Self-Learning</span>
                            <span class="skill-tag">Adaptability</span>
                            <span class="skill-tag">Innovation</span>
                            <span class="skill-tag">Teamwork</span>
                            <span class="skill-tag">Communication</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Projects Section -->
        <section class="section" id="projects">
            <div class="container">
                <h2 class="section-title fade-in">Projects</h2>
                <p class="section-subtitle fade-in">Explore selected work</p>
                
                <!-- Project Filters -->
                <div class="project-filters fade-in">
                    <button class="filter-btn active" data-filter="all">All</button>
                    <button class="filter-btn" data-filter="react">React</button>
                    <button class="filter-btn" data-filter="api">API</button>
                    <button class="filter-btn" data-filter="css">CSS</button>
                </div>

                <div class="projects-grid">
                    <article class="project-card fade-in" data-tags="react api">
                        <div class="project-content">
                            <h3 class="project-title">Blog Website</h3>
                            <p class="project-description">Blog app with auth, validation, and CRUD operations.</p>
                            <div class="project-tags">
                                <span class="project-tag">React.js</span>
                                <span class="project-tag">React Router</span>
                                <span class="project-tag">Formik</span>
                                <span class="project-tag">Material UI</span>
                                <span class="project-tag">Axios</span>
                            </div>
                            <button class="btn btn-outline project-details-btn" data-project="blog">Details</button>
                        </div>
                    </article>

                    <article class="project-card fade-in" data-tags="react api">
                        <div class="project-content">
                            <h3 class="project-title">Fresh-Cart Website</h3>
                            <p class="project-description">Simple e-commerce front with data fetching and caching.</p>
                            <div class="project-tags">
                                <span class="project-tag">HTML5</span>
                                <span class="project-tag">CSS3</span>
                                <span class="project-tag">Tailwind</span>
                                <span class="project-tag">React.js</span>
                                <span class="project-tag">React Query</span>
                            </div>
                            <button class="btn btn-outline project-details-btn" data-project="cart">Details</button>
                        </div>
                    </article>

                    <article class="project-card fade-in" data-tags="css api">
                        <div class="project-content">
                            <h3 class="project-title">Weather Website</h3>
                            <p class="project-description">City-based weather search with responsive UI.</p>
                            <div class="project-tags">
                                <span class="project-tag">HTML5</span>
                                <span class="project-tag">CSS3</span>
                                <span class="project-tag">JavaScript</span>
                                <span class="project-tag">Bootstrap 5</span>
                                <span class="project-tag">API</span>
                            </div>
                            <button class="btn btn-outline project-details-btn" data-project="weather">Details</button>
                        </div>
                    </article>
                </div>
            </div>
        </section>

        <!-- Experience Section -->
        <section class="section" id="experience">
            <div class="container">
                <h2 class="section-title fade-in">Experience</h2>
                <div class="timeline">
                    <div class="timeline-item fade-in">
                        <div class="timeline-marker"></div>
                        <div class="timeline-content">
                            <h3 class="timeline-title">Information Technology Institute (ITI)</h3>
                            <p class="timeline-subtitle">Intensive Training Program (Front-End & Cross-Platform Mobile Development)</p>
                            <p class="timeline-date">02/2025 – 07/2025, Zagazig</p>
                        </div>
                    </div>
                    <div class="timeline-item fade-in">
                        <div class="timeline-marker"></div>
                        <div class="timeline-content">
                            <h3 class="timeline-title">ITI</h3>
                            <p class="timeline-subtitle">UI/UX Design</p>
                            <p class="timeline-date">07/2022 – 08/2022, Ismaillia</p>
                        </div>
                    </div>
                    <div class="timeline-item fade-in">
                        <div class="timeline-marker"></div>
                        <div class="timeline-content">
                            <h3 class="timeline-title">Faculty of Computers and Informatics (SCU)</h3>
                            <p class="timeline-subtitle">Front-end development</p>
                            <p class="timeline-date">07/2021 – 08/2021, Ismaillia</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Education Section -->
        <section class="section" id="education">
            <div class="container">
                <h2 class="section-title fade-in">Education</h2>
                <div class="education-content">
                    <div class="education-item fade-in">
                        <h3 class="education-title">Bachelor in Computer Science and Informatics</h3>
                        <p class="education-institution">Suez Canal University</p>
                        <p class="education-date">09/2019 – 07/2023, Ismaillia</p>
                        <p class="education-grade">Grade: Very Good</p>
                        <p class="education-project">Graduation Project: "Hospital system" — Excellent (Role: UI/UX Designer)</p>
                    </div>
                    <div class="education-item fade-in">
                        <h3 class="education-title">Route Academy</h3>
                        <p class="education-date">01/2024 – 07/2024</p>
                        <p class="education-description">HTML5, CSS3, JavaScript (DOM/BOM/Web API), React.js, Bootstrap, Tailwind, AJAX, Material UI, Sass, jQuery</p>
                    </div>
                </div>
                
                <div class="languages fade-in">
                    <h3 class="languages-title">Languages</h3>
                    <div class="language-list">
                        <div class="language-item">
                            <span class="language-name">Arabic</span>
                            <span class="language-level">Native/Bilingual</span>
                        </div>
                        <div class="language-item">
                            <span class="language-name">English</span>
                            <span class="language-level">Conversational</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Contact Section -->
        <section class="section" id="contact">
            <div class="container">
                <h2 class="section-title fade-in">Contact</h2>
                <p class="section-subtitle fade-in">Let's build something great.</p>
                
                <div class="contact-content">
                    <div class="contact-form-container fade-in">
                        <form class="contact-form" id="contactForm">
                            <div class="form-group">
                                <label for="name" class="form-label">Name</label>
                                <input type="text" id="name" name="name" class="form-input" required>
                            </div>
                            <div class="form-group">
                                <label for="email" class="form-label">Email</label>
                                <input type="email" id="email" name="email" class="form-input" required>
                            </div>
                            <div class="form-group">
                                <label for="message" class="form-label">Message</label>
                                <textarea id="message" name="message" class="form-textarea" rows="5" required></textarea>
                            </div>
                            <button type="submit" class="btn btn-primary">Send Message</button>
                        </form>
                    </div>
                    
                    <div class="contact-info fade-in">
                        <div class="contact-item">
                            <span class="contact-icon">📧</span>
                            <a href="mailto:zahramagdi15@gmail.com" class="contact-link">zahramagdi15@gmail.com</a>
                        </div>
                        <div class="contact-item">
                            <span class="contact-icon">📱</span>
                            <a href="tel:+201013761845" class="contact-link">01013761845</a>
                        </div>
                        <div class="contact-item">
                            <span class="contact-icon">🐙</span>
                            <a href="https://github.com/Zahra172" target="_blank" rel="noopener noreferrer" class="contact-link">GitHub</a>
                        </div>
                        <div class="contact-item">
                            <span class="contact-icon">💼</span>
                            <a href="https://linkedin.com/in/zahra-magdi17" target="_blank" rel="noopener noreferrer" class="contact-link">LinkedIn</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main>

    <!-- Footer -->
    <footer class="footer">
        <div class="container">
            <div class="footer-content">
                <p>&copy; 2025 Zahraa Magdi. All rights reserved.</p>
                <div class="social-links">
                    <a href="https://github.com/Zahra172" target="_blank" rel="noopener noreferrer" aria-label="GitHub">🐙</a>
                    <a href="https://linkedin.com/in/zahra-magdi17" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">💼</a>
                </div>
            </div>
        </div>
    </footer>

    <!-- Project Modal -->
    <div class="modal" id="projectModal" role="dialog" aria-labelledby="modalTitle" aria-hidden="true">
        <div class="modal-content">
            <div class="modal-header">
                <h3 id="modalTitle" class="modal-title"></h3>
                <button class="modal-close" aria-label="Close modal">&times;</button>
            </div>
            <div class="modal-body">
                <p id="modalDescription"></p>
                <div id="modalTags" class="modal-tags"></div>
            </div>
        </div>
    </div>

    <!-- Toast Notification -->
    <div class="toast" id="toast" role="alert" aria-live="polite">
        <span class="toast-message"></span>
    </div>

    <script src="script.js"></script>
</body>
</html>
