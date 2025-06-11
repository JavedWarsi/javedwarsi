 // Dynamic typing effect
                        const phrases = [
                            "Full Stack Developer",
                            "Android App Enthusiast",
                            "Network Management Expert",
                            "Open Source Contributor"
                        ];
                        let currentPhrase = 0, currentChar = 0, isDeleting = false;

                        function typeEffect() {
                            const typedText = document.getElementById('typed-text');
                            const cursor = document.getElementById('typed-cursor');
                            let phrase = phrases[currentPhrase];

                            if (isDeleting) {
                                typedText.textContent = phrase.substring(0, currentChar--);
                            } else {
                                typedText.textContent = phrase.substring(0, currentChar++);
                            }

                            if (!isDeleting && currentChar > phrase.length) {
                                isDeleting = true;
                                setTimeout(typeEffect, 1200);
                            } else if (isDeleting && currentChar < 0) {
                                isDeleting = false;
                                currentPhrase = (currentPhrase + 1) % phrases.length;
                                setTimeout(typeEffect, 400);
                            } else {
                                setTimeout(typeEffect, isDeleting ? 50 : 100);
                            }
                        }

                        document.addEventListener('DOMContentLoaded', () => {
                            typeEffect();
                            // Optional: blinking cursor
                            setInterval(() => {
                                const cursor = document.getElementById('typed-cursor');
                                if (cursor) cursor.style.opacity = cursor.style.opacity === '0' ? '1' : '0';
                            }, 500);
                        });