    (function(){
        'use strict';

        /* =========================================================
           بيانات المعرض — أضف صورك هنا فقط، لا حاجة لتعديل أي كود آخر
           كل فئة تدعم أي عدد من الصور (2، 5، 10 ...) بدون قيود
        ========================================================= */
        const galleryData = [
            {
                title: "كيكات",
                cover: "img/cake/photo_1_2026-09-09_06-29-38.jpg",
                images: [
                    "img/cake/photo_1_2026-09-09_06-29-38.jpg",
                    "img/cake/photo_2_2026-09-09_06-29-38.jpg",
                    "img/cake/photo_5_2026-09-09_06-29-38.jpg",
                    "img/cake/photo_8_2026-09-09_06-29-38.jpg",
                    "img/cake/photo_9_2026-09-09_06-29-38.jpg",
                    "img/cake/photo_10_2026-09-09_06-29-38.jpg",
                    "img/cake/photo_11_2026-09-09_06-29-38.jpg",
                    "img/cake/photo_15_2026-09-09_06-29-38.jpg",
                    "img/cake/photo_16_2026-09-09_06-29-38.jpg",
                    "img/cake/photo_21_2026-09-09_06-29-38.jpg",
                    "img/cake/photo_24_2026-09-09_06-29-38.jpg",
                    "img/cake/photo_26_2026-09-09_06-29-38.jpg",
                    "img/cake/photo_32_2026-09-09_06-29-38.jpg",
                    "img/cake/photo_35_2026-09-09_06-29-38.jpg",
                    "img/cake/photo_36_2026-09-09_06-29-38.jpg",
                    "img/cake/photo_38_2026-09-09_06-29-12.jpg",
                    "img/cake/photo_39_2026-09-09_06-29-12.jpg",
                    "img/cake/photo_50_2026-09-09_06-29-12.jpg"
                ]
            },
            {
                title: "حلويات تقليدية",
                cover: "img/tradition/photo_23_2026-09-09_06-29-38.jpg",
                images: [
                    "img/tradition/photo_23_2026-09-09_06-29-38.jpg",
                    "img/tradition/photo_30_2026-09-09_06-29-38.jpg",
                    "img/tradition/photo_31_2026-09-09_06-29-38.jpg",
                    "img/tradition/photo_40_2026-09-09_06-29-12.jpg",
                    "img/tradition/photo_42_2026-09-09_06-29-12.jpg",
                    "img/tradition/photo_43_2026-09-09_06-29-12.jpg",
                    "img/tradition/photo_44_2026-09-09_06-29-12.jpg",
                    "img/tradition/photo_45_2026-09-09_06-29-12.jpg",
                    "img/tradition/photo_46_2026-09-09_06-29-12.jpg",
                    "img/tradition/photo_47_2026-09-09_06-29-12.jpg",
                    "img/tradition/photo_48_2026-09-09_06-29-12.jpg",
                    "img/tradition/photo_49_2026-09-09_06-29-38.jpg",
                    "img/tradition/photo_53_2026-09-09_06-29-12.jpg",
                    "img/tradition/photo_54_2026-09-09_06-29-12.jpg"
                ]
            },
            {
                title: "مملحات",
                cover: "img/Salted snacks/photo_12_2026-09-09_06-29-38.jpg",
                images: [
                    "img/Salted snacks/photo_12_2026-09-09_06-29-38.jpg",
                    "img/Salted snacks/photo_17_2026-09-09_06-29-38.jpg",
                    "img/Salted snacks/photo_18_2026-09-09_06-29-38.jpg",
                    "img/Salted snacks/photo_19_2026-09-09_06-29-38.jpg",
                    "img/Salted snacks/photo_34_2026-09-09_06-29-38.jpg",
                    "img/Salted snacks/photo_3_2026-09-09_06-29-38.jpg",
                    "img/Salted snacks/photo_41_2026-09-09_06-29-12.jpg",
                    "img/Salted snacks/photo_52_2026-09-09_06-29-12.jpg",
                    "img/Salted snacks/photo_55_2026-09-09_06-29-12.jpg",
                    "img/Salted snacks/photo_6_2026-09-09_06-29-38.jpg",
                    "img/Salted snacks/photo_7_2026-09-09_06-29-38.jpg"
                ]
            },
            {
                title: "تحليات",
                cover: "img/dessert/photo_13_2026-09-09_06-29-38.jpg",
                images: [
                    "img/dessert/photo_13_2026-09-09_06-29-38.jpg",
                    "img/dessert/photo_14_2026-09-09_06-29-38.jpg",
                    "img/dessert/photo_20_2026-09-09_06-29-38.jpg",
                    "img/dessert/photo_22_2026-09-09_06-29-38.jpg",
                    "img/dessert/photo_25_2026-09-09_06-29-38.jpg",
                    "img/dessert/photo_27_2026-09-09_06-29-38.jpg",
                    "img/dessert/photo_28_2026-09-09_06-29-38.jpg",
                    "img/dessert/photo_29_2026-09-09_06-29-38.jpg",
                    "img/dessert/photo_33_2026-09-09_06-29-38.jpg",
                    "img/dessert/photo_34_2026-09-09_06-29-38.jpg",
                    "img/dessert/photo_37_2026-09-09_06-29-38.jpg",
                    "img/dessert/photo_4_2026-09-09_06-29-38.jpg",
                    "img/dessert/photo_51_2026-09-09_06-29-12.jpg"
                ]
            }
        ];

        function $(sel, ctx){ return (ctx || document).querySelector(sel); }
        function $all(sel, ctx){ return Array.prototype.slice.call((ctx || document).querySelectorAll(sel)); }

        /* ---------- سنة الحقوق ---------- */
        function initYear(){
            const el = document.getElementById('year');
            if(el) el.textContent = new Date().getFullYear();
        }

        /* ---------- قائمة الهاتف ---------- */
        function initMobileMenu(){
            const btn = document.getElementById('menuToggle');
            const menu = document.getElementById('mobileMenu');
            const icon = document.getElementById('hamburgerIcon');
            if(!btn || !menu) return;

            function closeMenu(){
                menu.style.maxHeight = '0px';
                icon.classList.remove('is-open');
                btn.setAttribute('aria-expanded', 'false');
                btn.setAttribute('aria-label', 'فتح القائمة');
            }
            function openMenu(){
                icon.classList.add('is-open');
                btn.setAttribute('aria-expanded', 'true');
                btn.setAttribute('aria-label', 'إغلاق القائمة');
                menu.style.maxHeight = menu.scrollHeight + 'px';
            }

            btn.addEventListener('click', function(){
                const isOpen = btn.getAttribute('aria-expanded') === 'true';
                isOpen ? closeMenu() : openMenu();
            });

            $all('#mobileMenu a').forEach(function(link){
                link.addEventListener('click', closeMenu);
            });

            window.addEventListener('resize', function(){
                if(window.innerWidth >= 768) closeMenu();
            });
        }

        /* ---------- تأثير الشريط العلوي عند التمرير ---------- */
        function initNavScroll(){
            const nav = document.getElementById('navWrap');
            if(!nav) return;
            function onScroll(){
                nav.classList.toggle('is-scrolled', window.scrollY > 12);
            }
            onScroll();
            window.addEventListener('scroll', onScroll, { passive: true });
        }

        /* ---------- التمرير السلس ---------- */
        function initSmoothScroll(){
            $all('a[href^="#"]').forEach(function(a){
                a.addEventListener('click', function(e){
                    const id = a.getAttribute('href');
                    if(!id || id.length < 2) return;
                    const target = document.querySelector(id);
                    if(!target) return;
                    e.preventDefault();
                    target.scrollIntoView({ behavior: 'smooth' });
                });
            });
        }

        /* ---------- تفعيل الرابط الحالي في القائمة ---------- */
        function initScrollSpy(){
            const links = $all('.nav-link[data-nav-link]');
            if(!links.length || !('IntersectionObserver' in window)) return;
            const map = new Map();
            links.forEach(function(l){
                const sec = document.querySelector(l.getAttribute('href'));
                if(sec) map.set(sec, l);
            });
            const spy = new IntersectionObserver(function(entries){
                entries.forEach(function(entry){
                    const link = map.get(entry.target);
                    if(!link || !entry.isIntersecting) return;
                    links.forEach(function(l){ l.classList.remove('is-active'); });
                    link.classList.add('is-active');
                });
            }, { rootMargin: '-45% 0px -50% 0px' });
            map.forEach(function(link, sec){ spy.observe(sec); });
        }

        /* ---------- ظهور العناصر عند التمرير ---------- */
        function initReveal(){
            const items = $all('.reveal');
            if(!('IntersectionObserver' in window)){
                items.forEach(function(el){ el.classList.add('is-visible'); });
                return;
            }
            const io = new IntersectionObserver(function(entries){
                entries.forEach(function(entry){
                    if(entry.isIntersecting){
                        entry.target.classList.add('is-visible');
                        io.unobserve(entry.target);
                    }
                });
            }, { threshold: 0.15 });
            items.forEach(function(el){ io.observe(el); });
        }

        /* ---------- بناء بطاقات المعرض من galleryData ---------- */
        function initPortfolio(){
            const grid = document.getElementById('portfolioGrid');
            if(!grid) return;

            grid.innerHTML = galleryData.map(function(cat, i){
                return (
                    '<button type="button" class="portfolio-card reveal" style="--i:' + i + '" data-index="' + i + '" aria-label="مشاهدة أعمال ' + cat.title + '">' +
                        '<img src="' + cat.cover + '" alt="' + cat.title + ' - Gateaux Cookie" loading="lazy" decoding="async">' +
                        '<div class="portfolio-fallback" style="display:none" aria-hidden="true">' +
                            '<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="text-white/70"><path d="M4 16l4.5-6 3.5 4.5L15.5 9 20 16"/><rect x="3" y="4" width="18" height="16" rx="3"/></svg>' +
                        '</div>' +
                        '<span class="portfolio-count">' + cat.images.length + ' صور</span>' +
                        '<div class="portfolio-overlay">' +
                            '<h3 class="text-white font-bold text-base md:text-lg mb-1">' + cat.title + '</h3>' +
                            '<span class="portfolio-cta">مشاهدة الأعمال' +
                                '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 6l-6 6 6 6"/></svg>' +
                            '</span>' +
                        '</div>' +
                    '</button>'
                );
            }).join('');

            $all('.portfolio-card', grid).forEach(function(card){
                const img = card.querySelector('img');
                const fallback = card.querySelector('.portfolio-fallback');
                img.addEventListener('error', function(){
                    img.style.display = 'none';
                    fallback.style.display = 'flex';
                });
                card.addEventListener('click', function(){
                    openModal(Number(card.dataset.index), card);
                });
            });
        }

        /* ---------- النافذة المنبثقة (Lightbox) ---------- */
        const modalState = { index: 0, category: null, lastFocused: null };
        const modalEls = {};

        function initModal(){
            modalEls.backdrop = document.getElementById('galleryModal');
            modalEls.panel = document.getElementById('modalPanel');
            modalEls.title = document.getElementById('modalTitle');
            modalEls.image = document.getElementById('modalImage');
            modalEls.fallback = document.getElementById('modalImageFallback');
            modalEls.fallbackText = document.getElementById('modalFallbackText');
            modalEls.counter = document.getElementById('modalCounter');
            modalEls.dots = document.getElementById('modalDots');
            modalEls.closeBtn = document.getElementById('modalCloseBtn');
            modalEls.prevBtn = document.getElementById('modalPrevBtn');
            modalEls.nextBtn = document.getElementById('modalNextBtn');
            modalEls.imageWrap = document.getElementById('modalImageWrap');

            if(!modalEls.backdrop) return;

            modalEls.closeBtn.addEventListener('click', closeModal);
            modalEls.prevBtn.addEventListener('click', prevImage);
            modalEls.nextBtn.addEventListener('click', nextImage);
            modalEls.image.addEventListener('error', function(){
                modalEls.image.style.display = 'none';
                modalEls.fallback.style.display = 'flex';
            });

            modalEls.backdrop.addEventListener('click', function(e){
                if(e.target === modalEls.backdrop) closeModal();
            });

            document.addEventListener('keydown', function(e){
                if(!modalEls.backdrop.classList.contains('is-open')) return;
                if(e.key === 'Escape') closeModal();
                else if(e.key === 'ArrowRight') prevImage();
                else if(e.key === 'ArrowLeft') nextImage();
                else if(e.key === 'Tab') trapFocus(e);
            });

            let touchStartX = 0;
            modalEls.imageWrap.addEventListener('touchstart', function(e){
                touchStartX = e.changedTouches[0].clientX;
            }, { passive: true });
            modalEls.imageWrap.addEventListener('touchend', function(e){
                const delta = e.changedTouches[0].clientX - touchStartX;
                if(Math.abs(delta) < 40) return;
                if(delta < 0) nextImage(); else prevImage();
            }, { passive: true });
        }

        function openModal(index, triggerEl){
            const cat = galleryData[index];
            if(!cat) return;
            modalState.category = cat;
            modalState.index = 0;
            modalState.lastFocused = triggerEl || document.activeElement;

            modalEls.title.textContent = cat.title;
            modalEls.fallbackText.textContent = cat.title;
            renderDots();
            showImage(0);

            modalEls.backdrop.classList.add('is-open');
            document.documentElement.style.overflow = 'hidden';
            modalEls.closeBtn.focus();
        }

        function closeModal(){
            modalEls.backdrop.classList.remove('is-open');
            document.documentElement.style.overflow = '';
            if(modalState.lastFocused && typeof modalState.lastFocused.focus === 'function'){
                modalState.lastFocused.focus();
            }
        }

        function renderDots(){
            const cat = modalState.category;
            modalEls.dots.innerHTML = cat.images.map(function(_, i){
                return '<button type="button" class="modal-dot" data-i="' + i + '" aria-label="الانتقال إلى الصورة ' + (i + 1) + '"></button>';
            }).join('');
            $all('.modal-dot', modalEls.dots).forEach(function(dot){
                dot.addEventListener('click', function(){ showImage(Number(dot.dataset.i)); });
            });
        }

        function showImage(i){
            const cat = modalState.category;
            const total = cat.images.length;
            modalState.index = (i + total) % total;
            const src = cat.images[modalState.index];

            modalEls.image.style.display = '';
            modalEls.fallback.style.display = 'none';
            modalEls.image.src = src;
            modalEls.image.alt = cat.title + ' - صورة ' + (modalState.index + 1);
            modalEls.counter.textContent = (modalState.index + 1) + ' / ' + total;

            $all('.modal-dot', modalEls.dots).forEach(function(d, idx){
                d.classList.toggle('is-active', idx === modalState.index);
            });
        }

        function nextImage(){ showImage(modalState.index + 1); }
        function prevImage(){ showImage(modalState.index - 1); }

        function trapFocus(e){
            const focusables = $all('button, [href], input, [tabindex]:not([tabindex="-1"])', modalEls.panel)
                .filter(function(el){ return !el.disabled && el.offsetParent !== null; });
            if(!focusables.length) return;
            const first = focusables[0];
            const last = focusables[focusables.length - 1];
            if(e.shiftKey && document.activeElement === first){
                e.preventDefault(); last.focus();
            } else if(!e.shiftKey && document.activeElement === last){
                e.preventDefault(); first.focus();
            }
        }

        /* ---------- التشغيل ---------- */
        document.addEventListener('DOMContentLoaded', function(){
            initYear();
            initMobileMenu();
            initNavScroll();
            initSmoothScroll();
            initScrollSpy();
            initPortfolio();
            initReveal();
            initModal();
        });
    })();
