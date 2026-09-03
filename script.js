document.addEventListener('DOMContentLoaded', () => {
    // --- تفعيل زر تبديل الوضع (القمر / الشمس) ---
    const themeToggleBtn = document.getElementById('theme-toggle-btn');
    
    // التحقق من الوضع المحفوظ مسبقاً
    const currentTheme = localStorage.getItem('wael_marble_theme');
    if (currentTheme === 'dark') {
        document.body.classList.add('dark-mode');
        if (themeToggleBtn) {
            themeToggleBtn.innerHTML = '<i class="fas fa-sun"></i>';
        }
    } else {
        if (themeToggleBtn) {
            themeToggleBtn.innerHTML = '<i class="fas fa-moon"></i>';
        }
    }

    // الحدث عند الضغط على زر القمر/الشمس
    if (themeToggleBtn) {
        themeToggleBtn.addEventListener('click', () => {
            document.body.classList.toggle('dark-mode');
            
            if (document.body.classList.contains('dark-mode')) {
                localStorage.setItem('wael_marble_theme', 'dark');
                themeToggleBtn.innerHTML = '<i class="fas fa-sun"></i>';
            } else {
                localStorage.setItem('wael_marble_theme', 'light');
                themeToggleBtn.innerHTML = '<i class="fas fa-moon"></i>';
            }
        });
    }

    // --- بيانات المشاريع الافتراضية ---
    const defaultProjects = [
        {
            id: 1,
            title: "تشطيب سلالم فيلا فاخرة",
            type: "جلي وتلميع رخام سلالم",
            cover: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
            images: [
                "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
                "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=800&q=80",
                "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80",
                "https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&w=800&q=80",
                "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80",
                "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=800&q=80",
                "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=800&q=80",
                "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=800&q=80",
                "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=800&q=80",
                "https://images.unsplash.com/photo-1600573472550-8090b5e0745e?auto=format&fit=crop&w=800&q=80"
            ],
            videos: [
                "https://www.w3schools.com/html/mov_bbb.mp4",
                "https://www.w3schools.com/html/mov_bbb.mp4",
                "https://www.w3schools.com/html/mov_bbb.mp4",
                "https://www.w3schools.com/html/mov_bbb.mp4",
                "https://www.w3schools.com/html/mov_bbb.mp4",
                "https://www.w3schools.com/html/mov_bbb.mp4"
            ]
        },
        {
            id: 2,
            title: "جلي وتلميع أرضيات قصر",
            type: "رخام إيطالي طبيعي",
            cover: "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=800&q=80",
            images: [
                "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=800&q=80",
                "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
                "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80",
                "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80",
                "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=800&q=80",
                "https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&w=800&q=80",
                "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=800&q=80",
                "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=800&q=80",
                "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=800&q=80",
                "https://images.unsplash.com/photo-1600573472550-8090b5e0745e?auto=format&fit=crop&w=800&q=80"
            ],
            videos: [
                "https://www.w3schools.com/html/mov_bbb.mp4",
                "https://www.w3schools.com/html/mov_bbb.mp4",
                "https://www.w3schools.com/html/mov_bbb.mp4",
                "https://www.w3schools.com/html/mov_bbb.mp4",
                "https://www.w3schools.com/html/mov_bbb.mp4",
                "https://www.w3schools.com/html/mov_bbb.mp4"
            ]
        },
        {
            id: 3,
            title: "عزل وحماية رخام المطابخ",
            type: "معالجة الشقوق والبقع",
            cover: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80",
            images: [
                "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80",
                "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
                "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=800&q=80",
                "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80",
                "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=800&q=80",
                "https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&w=800&q=80",
                "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=800&q=80",
                "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=800&q=80",
                "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=800&q=80",
                "https://images.unsplash.com/photo-1600573472550-8090b5e0745e?auto=format&fit=crop&w=800&q=80"
            ],
            videos: [
                "https://www.w3schools.com/html/mov_bbb.mp4",
                "https://www.w3schools.com/html/mov_bbb.mp4",
                "https://www.w3schools.com/html/mov_bbb.mp4",
                "https://www.w3schools.com/html/mov_bbb.mp4",
                "https://www.w3schools.com/html/mov_bbb.mp4",
                "https://www.w3schools.com/html/mov_bbb.mp4"
            ]
        },
        {
            id: 4,
            title: "تلميع واجهات ومداخل العمارات",
            type: "رخام وجرانيت خارجي",
            cover: "https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&w=800&q=80",
            images: [
                "https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&w=800&q=80",
                "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
                "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=800&q=80",
                "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80",
                "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80",
                "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=800&q=80",
                "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=800&q=80",
                "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=800&q=80",
                "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=800&q=80",
                "https://images.unsplash.com/photo-1600573472550-8090b5e0745e?auto=format&fit=crop&w=800&q=80"
            ],
            videos: [
                "https://www.w3schools.com/html/mov_bbb.mp4",
                "https://www.w3schools.com/html/mov_bbb.mp4",
                "https://www.w3schools.com/html/mov_bbb.mp4",
                "https://www.w3schools.com/html/mov_bbb.mp4",
                "https://www.w3schools.com/html/mov_bbb.mp4",
                "https://www.w3schools.com/html/mov_bbb.mp4"
            ]
        }
    ];

    let projects = JSON.parse(localStorage.getItem('wael_marble_projects')) || defaultProjects;

    const portfolioGrid = document.getElementById('portfolio-grid');
    if (portfolioGrid) {
        portfolioGrid.innerHTML = '';
        projects.forEach((proj) => {
            const card = document.createElement('div');
            card.className = 'portfolio-item';
            card.innerHTML = `
                <div class="portfolio-img-box">
                    <img src="${proj.cover}" alt="${proj.title}">
                </div>
                <div class="portfolio-info">
                    <h3>${proj.title}</h3>
                    <span>${proj.type}</span>
                    <p style="color:var(--accent-honey); font-size:0.8rem; margin-top:6px;">عرض 10 صور و6 فيديوهات <i class="fas fa-arrow-left"></i></p>
                </div>
            `;
            card.addEventListener('click', () => {
                window.location.href = `project-details.html?id=${proj.id}`;
            });
            portfolioGrid.appendChild(card);
        });
    }

    const detTitle = document.getElementById('det-title');
    if (detTitle) {
        const urlParams = new URLSearchParams(window.location.search);
        const projId = urlParams.get('id');
        const currentProj = projects.find(p => p.id == projId) || projects[0];

        detTitle.textContent = currentProj.title;
        document.getElementById('det-type').textContent = currentProj.type;

        const imagesTab = document.getElementById('images-tab');
        if (imagesTab) {
            imagesTab.innerHTML = '';
            if (currentProj.images) {
                currentProj.images.forEach(img => {
                    imagesTab.innerHTML += `<div class="media-box"><img src="${img}" alt="صورة العمل"></div>`;
                });
            }
        }

        const videosTab = document.getElementById('videos-tab');
        if (videosTab) {
            videosTab.innerHTML = '';
            if (currentProj.videos) {
                currentProj.videos.forEach(vid => {
                    videosTab.innerHTML += `
                        <div class="media-box">
                            <section>
                                <video controls style="width:100%; height:180px; object-fit:cover; border-radius:8px;">
                                    <source src="${vid}" type="video/mp4">
                                    متصفحك لا يدعم تشغيل الفيديو.
                                </video>
                            </section>
                        </div>
                    `;
                });
            }
        }
    }
});

window.switchTab = function(tabName) {
    document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
    document.querySelectorAll('.tab-content').forEach(content => content.classList.remove('active'));

    if(tabName === 'images') {
        const btnImg = document.getElementById('btn-images-tab');
        const tabImg = document.getElementById('images-tab');
        if(btnImg) btnImg.classList.add('active');
        if(tabImg) tabImg.classList.add('active');
    } else {
        const btnVid = document.getElementById('btn-videos-tab');
        const tabVid = document.getElementById('videos-tab');
        if(btnVid) btnVid.classList.add('active');
        if(tabVid) tabVid.classList.add('active');
    }
}