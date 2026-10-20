window.currentUser = null;

        // ==========================================
        // MULTI-LANGUAGE SYSTEM (ID / EN)
        // ==========================================
        window.currentLang = localStorage.getItem('src_lang') || 'id';

        window.i18nTranslations = {
            id: {
                "nav.home": "Home",
                "nav.about": "About",
                "nav.aboutUs": "About Us",
                "nav.financial": "Financial",
                "nav.financialReport": "Financial Report",
                "nav.departments": "Departments",
                "nav.activity": "Activity",
                "nav.blog": "Blog",
                "nav.blogJournal": "Blog Journal",
                "nav.feedback": "Feedback",
                "nav.signIn": "Sign In",
                "hero.eyebrow": "A Brighter Tomorrow Awaits",
                "hero.schoolBadge": "SMA Bakti Mulya 400 Cibubur · Cambridge International",
                "hero.subtitle": "Temukan peluang kepemimpinan, pengalaman kampus bermakna, dan cara tumbuh bersama yang lebih cerah di SMA Bakti Mulya 400.",
                "hero.ctaExplore": "Jelajahi Divisi",
                "hero.ctaFinancial": "Laporan Keuangan",
                "about.eyebrow": "Tentang Dewan Kami",
                "about.title": "Visi & Misi SRC BM400 Cibubur",
                "about.visiTitle": "Visi",
                "about.visiDesc": "Mewujudkan Generasi Pemimpin Berwawasan Global, Berkarakter Islami, dan Berdampak Nyata",
                "about.misiTitle": "Misi",
                "about.misiDesc": "Menyuarakan Aspirasi Siswa secara Inklusif, Mengembangkan Potensi Kepemimpinan Berdaya Saing Global, Memperkuat Sinergi Sivitas Akademika Bakti Mulya 400, dan Menjadi Katalisator Perubahan Positif.",
                "financial.eyebrow": "Transparansi & Akuntabilitas",
                "financial.title": "Laporan Keuangan Bulanan",
                "financial.subtitle": "Transparansi arus kas, laporan berkala, dan rekapitulasi dana program SRC.",
                "financial.totalIncome": "Total Pemasukan",
                "financial.verifiedIncome": "Pemasukan Terverifikasi",
                "financial.totalExpense": "Total Pengeluaran",
                "financial.operationalExpense": "Pengeluaran Operasional",
                "financial.netBalance": "Saldo Bersih",
                "financial.currentBalance": "Saldo Kas SRC Terkini",
                "financial.tabAll": "Semua",
                "financial.tabIncome": "Pemasukan",
                "financial.tabExpense": "Pengeluaran",
                "financial.addTransaction": "Tambah Transaksi",
                "table.date": "Tanggal",
                "table.income": "Pemasukan",
                "table.expense": "Pengeluaran",
                "table.balance": "Saldo",
                "table.description": "Keterangan",
                "table.action": "Aksi",
                "departments.eyebrow": "Divisi Kami",
                "departments.title": "Laporan Kerja Departemen SRC",
                "departments.subtitle": "Tim berdedikasi yang bekerja bersama menciptakan lingkungan sekolah yang lebih positif dan bersahabat.",
                "departments.tabAll": "Semua Divisi",
                "departments.tabAcademic": "Akademik & Bakat",
                "departments.tabSocial": "Sosial & Lingkungan",
                "departments.tabOperations": "Operasional & Humas",
                "activity.eyebrow": "SRC Life & Moments",
                "activity.title": "Momen Aktivitas Siswa SRC",
                "activity.subtitle": "Momen kepemimpinan, persahabatan, kreativitas, dan kepedulian yang terekam dalam agenda SMA Bakti Mulya 400.",
                "blog.eyebrow": "Cerita, Berita & Wawasan",
                "blog.title": "Jurnal SRC & Berita Sekolah",
                "blog.subtitle": "Ikuti perkembangan terbaru, program siswa, dan liputan kegiatan SMA Bakti Mulya 400.",
                "blog.viewMore": "Lihat Artikel Lainnya",
                "blog.readMore": "Baca Selengkapnya",
                "blog.art1Title": "Pelantikan Resmi Kabinet SRC BM 400: Membawa Semangat Kolaborasi & Empati",
                "blog.art1Desc": "Upacara pelantikan dewan perwakilan siswa SMA Bakti Mulya 400 periode 2026/2027 berlangsung khidmat dengan komitmen transparansi serta penguatan program kemanusiaan.",
                "blog.art2Title": "Gerakan Zero-Plastic Refill Station di Lingkungan Kampus Cibubur",
                "blog.art2Desc": "Langkah nyata kepedulian lingkungan sekolah melalui penambahan 6 dispenser air minum gratis berkualitas tinggi untuk mengurangi sampah botol plastik sekali pakai.",
                "blog.art3Title": "Road to BM 400 Cup: Pendaftaran Kompetisi Olahraga & Seni Antar SMA Dibuka",
                "blog.art3Desc": "Ajang tahunan bergengsi basket, futsal, debat bahasa Inggris, dan seni panggung kembali hadir mengundang puluhan SMA se-Jabodetabek.",
                "feedback.eyebrow": "Suara Siswa",
                "feedback.title": "Punya Saran atau Ide?",
                "feedback.subtitle": "Sampaikan aspirasimu untuk membantu membangun lingkungan sekolah yang lebih baik.",
                "feedback.labelName": "Nama Lengkap Siswa",
                "feedback.labelDept": "Target Departemen",
                "feedback.labelMessage": "Pesan Aspirasi",
                "feedback.btnSubmit": "Kirim Aspirasi",
                "footer.copyright": "© 2026 Student Representative Council · SMA Bakti Mulya 400 Cibubur",
                "footer.developer": "Dikembangkan oleh RaditNex"
            },
            en: {
                "nav.home": "Home",
                "nav.about": "About",
                "nav.aboutUs": "About Us",
                "nav.financial": "Financial",
                "nav.financialReport": "Financial Report",
                "nav.departments": "Departments",
                "nav.activity": "Activity",
                "nav.blog": "Blog",
                "nav.blogJournal": "Blog Journal",
                "nav.feedback": "Feedback",
                "nav.signIn": "Sign In",
                "hero.eyebrow": "A Brighter Tomorrow Awaits",
                "hero.schoolBadge": "SMA Bakti Mulya 400 Cibubur · Cambridge International",
                "hero.subtitle": "Discover leadership opportunities, meaningful campus experiences, and a kinder, brighter way to grow together at SMA Bakti Mulya 400.",
                "hero.ctaExplore": "Explore Divisions",
                "hero.ctaFinancial": "Financial Report",
                "about.eyebrow": "About Our Council",
                "about.title": "Vision & Mission SRC BM400 Cibubur",
                "about.visiTitle": "Vision",
                "about.visiDesc": "Cultivating Global-Minded Leaders with Islamic Character and Real-World Impact.",
                "about.misiTitle": "Mission",
                "about.misiDesc": "Championing Student Voices Inclusively, Empowering Globally Competitive Leadership, Strengthening Bakti Mulya 400 Synergies, and Acting as Catalysts for Positive Change.",
                "financial.eyebrow": "Transparency & Accountability",
                "financial.title": "Monthly Financial Report",
                "financial.subtitle": "Cash flow transparency, periodic statements, and program budget tracking.",
                "financial.totalIncome": "Total Income",
                "financial.verifiedIncome": "Verified Income",
                "financial.totalExpense": "Total Expense",
                "financial.operationalExpense": "Operational Expense",
                "financial.netBalance": "Net Balance",
                "financial.currentBalance": "Current SRC Treasury Balance",
                "financial.tabAll": "All",
                "financial.tabIncome": "Income",
                "financial.tabExpense": "Expense",
                "financial.addTransaction": "Add Transaction",
                "table.date": "Date",
                "table.income": "Income",
                "table.expense": "Expense",
                "table.balance": "Balance",
                "table.description": "Description",
                "table.action": "Action",
                "departments.eyebrow": "Our Divisions",
                "departments.title": "SRC Departments Work Report",
                "departments.subtitle": "Dedicated teams working together to create a brighter, kinder school environment.",
                "departments.tabAll": "All Divisions",
                "departments.tabAcademic": "Academic & Talent",
                "departments.tabSocial": "Social & Environment",
                "departments.tabOperations": "Operations & PR",
                "activity.eyebrow": "SRC Life & Moments",
                "activity.title": "SRC Student Activity Moments",
                "activity.subtitle": "Moments of leadership, friendship, creativity, and service captured during SMA Bakti Mulya 400 events.",
                "blog.eyebrow": "Stories, Press & Insights",
                "blog.title": "SRC Journal & Campus News",
                "blog.subtitle": "Stay up to date with the latest initiatives, inspiring student stories, and event coverage from SMA Bakti Mulya 400.",
                "blog.viewMore": "View More Articles",
                "blog.readMore": "Read More",
                "blog.art1Title": "Official Inauguration of SRC Cabinet: Fostering Collaboration & Empathy",
                "blog.art1Desc": "The inauguration of SMA Bakti Mulya 400 Student Representative Council for 2026/2027 was held solemnly with strong commitments to transparency and community programs.",
                "blog.art2Title": "Zero-Plastic Refill Station Movement Across Cibubur Campus",
                "blog.art2Desc": "A concrete environmental step introducing 6 premium free water refill stations to drastically curb single-use plastic bottles.",
                "blog.art3Title": "Road to BM 400 Cup: Inter-High School Sports & Arts Registration Open",
                "blog.art3Desc": "The prestigious annual competition featuring basketball, futsal, English debate, and musical stage arts welcomes schools across Greater Jakarta.",
                "feedback.eyebrow": "Student Voice",
                "feedback.title": "Have a Suggestion?",
                "feedback.subtitle": "Share your ideas to help us build a brighter school environment.",
                "feedback.labelName": "Student Full Name",
                "feedback.labelDept": "Target Department",
                "feedback.labelMessage": "Your Aspiration",
                "feedback.btnSubmit": "Send Aspiration",
                "footer.copyright": "© 2026 Student Representative Council · SMA Bakti Mulya 400 Cibubur",
                "footer.developer": "Developed By RaditNex"
            }
        };

        window.applyLanguage = function (lang) {
            window.currentLang = lang;
            localStorage.setItem('src_lang', lang);
            document.documentElement.lang = lang;

            const indicator = document.getElementById('lang-indicator');
            if (indicator) {
                // Show the other language
                indicator.innerText = lang === 'id' ? 'EN' : 'ID';
            }

            const dict = window.i18nTranslations[lang] || window.i18nTranslations['id'];
            document.querySelectorAll('[data-i18n]').forEach(el => {
                const key = el.getAttribute('data-i18n');
                if (dict[key]) {
                    el.innerText = dict[key];
                }
            });

            // Update placeholder inputs
            const nameInput = document.getElementById('fb-name');
            if (nameInput) {
                nameInput.placeholder = lang === 'en' ? 'Your name' : 'Nama Anda';
            }
            const msgInput = document.getElementById('fb-msg');
            if (msgInput) {
                msgInput.placeholder = lang === 'en' ? 'Write your idea here...' : 'Tuliskan ide atau saran Anda di sini...';
            }

            // Re-render departments with language-adjusted summaries if needed
            if (typeof window.renderDepartments === 'function') {
                window.renderDepartments();
            }

            // Re-render financial table with active language remarks and date format
            if (typeof window.renderFinancialTable === 'function') {
                window.renderFinancialTable();
            }

            // Re-sync sliding pill indicator
            setTimeout(() => {
                if (typeof window.updateSlidingPill === 'function') {
                    window.updateSlidingPill(window.currentFinFilter || 'all');
                }
            }, 60);
        };

        window.toggleLanguage = function () {
            const nextLang = window.currentLang === 'id' ? 'en' : 'id';
            window.applyLanguage(nextLang);
            const msg = nextLang === 'en' ? 'Language switched to English' : 'Bahasa dialihkan ke Bahasa Indonesia';
            if (typeof showToast === 'function') {
                showToast(msg, 'info');
            }
        };

        // Rekapitulasi Kas Finansial (Bersih tanpa dummy, sinkron live via Google Sheets & Cloud)
        window.financialRecords = [];

        window.departmentsData = [
            { 
                id: 1, 
                name_id: "Akademik, Bahasa & Literasi",
                name_en: "Academic, Languages & Literacy", 
                icon: "fa-book-open-reader", 
                head: "Alya Zahra", 
                summary_id: "Mengembangkan prestasi akademik siswa dan program bimbingan belajar sebaya.",
                summary_en: "Fostering academic excellence, language fluency, and peer-tutoring.", 
                programs_id: ["Mading Literasi", "Squad Tutor"],
                programs_en: ["Literacy Wall", "Tutoring Squad"] 
            },
            { 
                id: 2, 
                name_id: "Kesehatan & Keselamatan",
                name_en: "Health & Safety", 
                icon: "fa-heart-pulse", 
                head: "Farhan Rizky", 
                summary_id: "Mengawasi PMR dan kesiapsiagaan darurat pertolongan pertama sekolah.",
                summary_en: "Overseeing Red Cross (PMR) and school emergency readiness.", 
                programs_id: ["Donor Darah", "P3K Cepat"],
                programs_en: ["Blood Donation", "First Aid"] 
            },
            { 
                id: 3, 
                name_id: "Bakat & Prestasi",
                name_en: "Talent & Achievement", 
                icon: "fa-trophy", 
                head: "Nabila Putri", 
                summary_id: "Menjaring bakat siswa dalam bidang seni, pertunjukan panggung, dan olahraga.",
                summary_en: "Scouting and coaching student talents in arts, stage performance, and sports.", 
                programs_id: ["BM 400 Cup", "Pencarian Bakat"],
                programs_en: ["BM 400 Cup", "Talent Search"] 
            },
            { 
                id: 4, 
                name_id: "Humas, Teknologi & Informasi",
                name_en: "PR, Tech & Information", 
                icon: "fa-bullhorn", 
                head: "Davin Pratama", 
                summary_id: "Mengelola situs web resmi dewan dan siaran konten media sosial.",
                summary_en: "Managing official council website, digital media broadcast, and public relations.", 
                programs_id: ["Portal Web", "E-Majalah"],
                programs_en: ["Web Portal", "E-Magazine"] 
            },
            { 
                id: 5, 
                name_id: "Lingkungan & Kebersihan",
                name_en: "Environment & Cleanliness", 
                icon: "fa-leaf", 
                head: "Siti Rahma", 
                summary_id: "Memelopori inisiatif sekolah ramah lingkungan dan pengurangan sampah plastik.",
                summary_en: "Spearheading eco-school initiatives and single-use plastic reduction.", 
                programs_id: ["Zero-Plastik", "Eco-Brick"],
                programs_en: ["Zero-Plastic", "Eco-Brick"] 
            },
            { 
                id: 6, 
                name_id: "Keagamaan & Sosial",
                name_en: "Religion & Social", 
                icon: "fa-hand-holding-heart", 
                head: "M. Haikal", 
                summary_id: "Menyelenggarakan kegiatan keagamaan berkala dan kotak kepedulian sosial.",
                summary_en: "Organizing school religious commemorations and community charity drives.", 
                programs_id: ["Maulid Nabi", "Kotak Infaq"],
                programs_en: ["Maulid Nabi", "Charity Box"] 
            },
            { 
                id: 7, 
                name_id: "Kewirausahaan",
                name_en: "Entrepreneurship", 
                icon: "fa-store", 
                head: "Keisha Anindya", 
                summary_id: "Membangun jiwa kewirausahaan siswa melalui bazaar kreatif dan merchandise.",
                summary_en: "Cultivating business mindset via creative bazaars and school merchandise.", 
                programs_id: ["Merchandise", "Bazaar Siswa"],
                programs_en: ["Merch Line", "Student Bazaar"] 
            },
            { 
                id: 8, 
                name_id: "Keamanan & Kedisiplinan",
                name_en: "Security & Discipline", 
                icon: "fa-shield-halved", 
                head: "Rizky Ramadhan", 
                summary_id: "Memastikan penegakan ketertiban, keamanan kampus, serta anti-perundungan.",
                summary_en: "Ensuring campus safety enforcement, discipline, and anti-bullying culture.", 
                programs_id: ["Patroli Sekolah", "Anti-Bullying"],
                programs_en: ["Safety Patrol", "Anti-Bullying"] 
            }
        ];

        window.currentFinFilter = 'all';
        window.currentDeptFilter = 'all';

        // Sliding Pill Tracker
        window.updateSlidingPill = function (type) {
            const container = document.getElementById('financial-sliding-tabs');
            const pill = document.getElementById('financial-sliding-pill');
            const targetBtn = document.getElementById(`fin-tab-${type}`);
            if (!container || !pill || !targetBtn) return;

            const containerRect = container.getBoundingClientRect();
            const btnRect = targetBtn.getBoundingClientRect();
            const leftOffset = btnRect.left - containerRect.left;

            pill.style.width = `${btnRect.width}px`;
            pill.style.transform = `translateX(${leftOffset}px)`;
        };

        window.filterFinancialType = function (type) {
            window.currentFinFilter = type;
            const tabs = ['all', 'income', 'expense'];
            tabs.forEach(t => {
                const btn = document.getElementById(`fin-tab-${t}`);
                if (!btn) return;
                const isActive = (t === type);
                btn.classList.toggle('active', isActive);
                btn.setAttribute('aria-selected', isActive ? 'true' : 'false');
            });
            window.updateSlidingPill(type);
            window.renderFinancialTable();
        };

        window.filterDepartments = function (category) {
            window.currentDeptFilter = category;
            const tabs = ['all', 'academic', 'social', 'operations'];
            tabs.forEach(t => {
                const btn = document.getElementById(`dept-tab-${t}`);
                if (!btn) return;
                const isActive = (t === category);
                btn.classList.toggle('active', isActive);
                btn.setAttribute('aria-selected', isActive ? 'true' : 'false');
            });
            window.renderDepartments();
        };

        window.setQuickTopic = function (topic) {
            const msgInput = document.getElementById('fb-msg');
            if (msgInput) {
                msgInput.value = `[${topic}]: `;
                msgInput.focus();
                showToast(`Topik "${topic}" dipilih`, "info");
            }
        };

        window.renderFinancialTable = function () {
            const tbody = document.getElementById('financial-table-body');
            if (!tbody) return;
            tbody.innerHTML = '';
            let currentTotal = 0, sumIncome = 0, sumExpense = 0;
            const isAdmin = Boolean(window.currentUser && window.currentUser.isAdmin);
            const isEn = window.currentLang === 'en';

            if (window.financialRecords.length === 0) {
                const tr = document.createElement('tr');
                tr.innerHTML = `
                    <td colspan="7" class="py-12 px-6 text-center text-slate-400">
                        <div class="flex flex-col items-center justify-center space-y-2">
                            <i class="fa-solid fa-receipt text-3xl text-slate-300"></i>
                            <span class="text-sm font-semibold">${isEn ? 'No financial records yet. Add records from the SRC Member Dashboard.' : 'Belum ada catatan transaksi kas. Tambahkan melalui Dashboard Member SRC.'}</span>
                        </div>
                    </td>
                `;
                tbody.appendChild(tr);
            } else {
                window.financialRecords.forEach((record, index) => {
                    const income = Number(record.income || 0);
                    const expense = Number(record.expense || 0);
                    sumIncome += income;
                    sumExpense += expense;
                    currentTotal += (income - expense);

                    if (window.currentFinFilter === 'income' && income <= 0) return;
                    if (window.currentFinFilter === 'expense' && expense <= 0) return;

                    const dateStr = isEn ? (record.date_en || record.date || record.date_id) : (record.date_id || record.date || record.date_en);
                    const remarksStr = isEn ? (record.remarks_en || record.remarks || record.remarks_id) : (record.remarks_id || record.remarks || record.remarks_en);
                    const deleteTitle = isEn ? "Delete" : "Hapus";

                    const tr = document.createElement('tr');
                    tr.className = "motion-fade-up hover:bg-slate-50 transition-colors border-b border-slate-100";
                    tr.style.transitionDelay = `${(index % 6) * 50}ms`;
                    tr.innerHTML = `
                        <td class="py-4 px-4 text-center font-bold text-slate-400 text-xs">${index + 1}</td>
                        <td class="py-4 px-6 font-semibold text-slate-800">${escapeHtml(dateStr)}</td>
                        <td class="py-4 px-6 font-bold text-brand-green">+ Rp ${formatNumber(income)}</td>
                        <td class="py-4 px-6 font-bold text-red-500">- Rp ${formatNumber(expense)}</td>
                        <td class="py-4 px-6 font-extrabold text-slate-900">Rp ${formatNumber(currentTotal)}</td>
                        <td class="py-4 px-6 text-xs text-slate-600">${escapeHtml(remarksStr)}</td>
                        <td class="py-4 px-4 text-center">
                            ${isAdmin ? `<button onclick="deleteFinancialRecord(${index})" class="p-2 text-red-500 hover:bg-red-50 rounded-lg transition-colors" title="${deleteTitle}"><i class="fa-solid fa-trash"></i></button>` : `<span class="text-xs text-slate-300">-</span>`}
                        </td>
                    `;
                    tbody.appendChild(tr);
                });
            }

            document.getElementById('stat-income').innerText = `Rp ${formatNumber(sumIncome)}`;
            document.getElementById('stat-expense').innerText = `Rp ${formatNumber(sumExpense)}`;
            document.getElementById('stat-total').innerText = `Rp ${formatNumber(currentTotal)}`;

            if (typeof initMotionScrollAnimations === 'function') {
                setTimeout(initMotionScrollAnimations, 40);
            }
        };

        // Render Kartu Departemen
        window.renderDepartments = function () {
            const grid = document.getElementById('departments-grid');
            if (!grid) return;
            grid.innerHTML = '';
            const isAdmin = Boolean(window.currentUser && window.currentUser.isAdmin);
            const isEn = window.currentLang === 'en';

            const stockImages = [
                "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=600&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=600&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=600&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=600&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=600&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1593113589914-07599018dd2c?q=80&w=600&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=600&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1582139329536-e7284fece509?q=80&w=600&auto=format&fit=crop"
            ];

            const deptCategories = {
                1: 'academic',
                2: 'social',
                3: 'academic',
                4: 'operations',
                5: 'social',
                6: 'social',
                7: 'operations',
                8: 'operations'
            };

            const filteredDepts = window.departmentsData.filter(dept => {
                if (window.currentDeptFilter === 'all') return true;
                return deptCategories[dept.id] === window.currentDeptFilter;
            });

            const deptThemes = {
                1: { border: "rgba(48, 180, 87, 0.7)" },
                2: { border: "rgba(244, 63, 94, 0.65)" },
                3: { border: "rgba(255, 242, 0, 0.7)" },
                4: { border: "rgba(6, 182, 212, 0.65)" },
                5: { border: "rgba(34, 197, 94, 0.7)" },
                6: { border: "rgba(168, 85, 247, 0.65)" },
                7: { border: "rgba(245, 158, 11, 0.7)" },
                8: { border: "rgba(59, 130, 246, 0.65)" }
            };

            filteredDepts.forEach((dept, index) => {
                const card = document.createElement('div');
                const theme = deptThemes[dept.id] || { border: "rgba(255, 242, 0, 0.7)" };

                card.className = "motion-fade-scale interactive-hover-lift spotlight-card spotlight-border-only relative rounded-3xl p-[1px] max-w-sm mx-auto w-full bg-slate-700/60 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl cursor-default overflow-hidden group";
                card.style.setProperty('--spotlight-border-color', theme.border);
                card.style.transitionDelay = `${(index % 4) * 90}ms`;

                const imgUrl = stockImages[(dept.id - 1) % stockImages.length];
                const deptName = isEn ? (dept.name_en || dept.name) : (dept.name_id || dept.name);
                const deptSummary = isEn ? (dept.summary_en || dept.summary) : (dept.summary_id || dept.summary);
                const deptPrograms = isEn ? (dept.programs_en || dept.programs || []) : (dept.programs_id || dept.programs || []);
                const leadLabel = isEn ? "Lead" : "Ketua";
                const editReportLabel = isEn ? "Edit Report" : "Edit Laporan";

                card.innerHTML = `
                    <div class="pointer-events-none absolute inset-0 rounded-3xl opacity-0 transition-opacity duration-300 group-hover:opacity-100 z-0" style="background: radial-gradient(280px circle at var(--mouse-x, -500px) var(--mouse-y, -500px), var(--spotlight-border-color), transparent 70%);"></div>

                    <div class="relative z-10 h-full w-full rounded-[calc(1.5rem-1px)] bg-slate-900/98 backdrop-blur-md overflow-hidden text-white flex flex-col justify-between">
                        <div>
                            <div class="relative overflow-hidden rounded-t-[calc(1.5rem-1px)]">
                                <img src="${imgUrl}" alt="${escapeHtml(deptName)}" class="h-[250px] w-full rounded-t-[calc(1.5rem-1px)] group-hover:scale-105 transition-all duration-500 object-cover object-top" />
                                <div class="absolute bottom-0 z-10 h-48 w-full bg-gradient-to-t pointer-events-none from-slate-900 via-slate-900/80 to-transparent"></div>
                            </div>
                            
                            <div class="px-5 pb-5 relative z-20 -mt-8">
                                <h3 class="font-bold text-lg leading-tight mb-2 border-b border-slate-700/80 pb-3 flex items-center gap-2">
                                    <i class="fa-solid ${dept.icon || 'fa-users'} text-brand-green text-sm"></i>
                                    <span>${escapeHtml(deptName)}</span>
                                </h3>
                                
                                <div class="flex items-center gap-2 mt-3 text-slate-300">
                                    <i class="fa-solid fa-user-tie text-brand-green text-xs"></i>
                                    <p class="text-xs font-semibold text-slate-200">${leadLabel}: ${escapeHtml(dept.head)}</p>
                                </div>
                                
                                <p class="text-xs text-slate-400 mt-2 leading-relaxed line-clamp-3">
                                    ${escapeHtml(deptSummary)}
                                </p>

                                <div class="mt-4 flex flex-wrap gap-1.5">
                                    ${deptPrograms.map(p => `
                                        <span class="text-[10px] font-semibold px-2 py-0.5 rounded-md bg-slate-800 text-slate-300 border border-slate-700">
                                            ${escapeHtml(p)}
                                        </span>
                                    `).join('')}
                                </div>
                            </div>
                        </div>

                        ${isAdmin ? `
                            <div class="px-5 pb-5 pt-2 border-t border-slate-800 flex justify-end">
                                <button onclick="openEditDeptModal(${dept.id - 1})" class="text-xs font-bold text-bmyellow hover:text-white flex items-center gap-1 transition-colors relative z-40">
                                    <i class="fa-solid fa-pen-to-square"></i> ${editReportLabel}
                                </button>
                            </div>
                        ` : ''}
                    </div>
                `;
                grid.appendChild(card);
            });

            if (typeof initJahedSpotlightCards === 'function') initJahedSpotlightCards();
            if (typeof initMotionScrollAnimations === 'function') {
                setTimeout(initMotionScrollAnimations, 40);
            }
        };

        function handleAddNewRow() {
            if (!window.currentUser || !window.currentUser.isAdmin) {
                openAuthModal();
                showToast('Login sebagai admin diperlukan untuk menambah transaksi.', 'error');
                return;
            }
            document.getElementById('fin-record-index').value = "-1";
            document.getElementById('fin-date').value = new Intl.DateTimeFormat('id-ID', { day: '2-digit', month: 'short', year: 'numeric' }).format(new Date());
            document.getElementById('fin-income').value = "0";
            document.getElementById('fin-expense').value = "0";
            document.getElementById('fin-remarks').value = "";
            document.getElementById('financial-modal').classList.remove('hidden');
        }

        function saveFinancialRecord(e) {
            e.preventDefault();
            const date = document.getElementById('fin-date').value.trim();
            const income = parseFloat(document.getElementById('fin-income').value) || 0;
            const expense = parseFloat(document.getElementById('fin-expense').value) || 0;
            const remarks = document.getElementById('fin-remarks').value.trim();

            if (!date || !remarks) {
                showToast("Tanggal dan deskripsi wajib diisi!", "error");
                return;
            }

            window.financialRecords.push({ date, income, expense, remarks });
            if (typeof window.saveCloudFinancial === 'function') window.saveCloudFinancial(window.financialRecords);
            window.renderFinancialTable();
            closeFinancialModal();
            showToast('Transaksi berhasil ditambahkan!', 'success');
        }

        function deleteFinancialRecord(index) {
            if (!window.currentUser || !window.currentUser.isAdmin) return;
            if (confirm("Apakah Anda yakin ingin menghapus data transaksi ini?")) {
                window.financialRecords.splice(index, 1);
                if (typeof window.saveCloudFinancial === 'function') window.saveCloudFinancial(window.financialRecords);
                window.renderFinancialTable();
                showToast('Transaksi telah dihapus.', 'info');
            }
        }

        function openEditDeptModal(index) {
            if (!window.currentUser || !window.currentUser.isAdmin) return;
            const dept = window.departmentsData[index];
            if (!dept) return;
            document.getElementById('dept-index').value = index;
            document.getElementById('dept-head').value = dept.head;
            document.getElementById('dept-status').value = dept.status;
            document.getElementById('dept-summary').value = dept.summary;
            document.getElementById('dept-programs').value = dept.programs.join(', ');
            document.getElementById('dept-modal').classList.remove('hidden');
        }

        function saveDeptReport(e) {
            e.preventDefault();
            const idx = parseInt(document.getElementById('dept-index').value);
            if (idx >= 0 && idx < window.departmentsData.length) {
                window.departmentsData[idx].head = document.getElementById('dept-head').value.trim();
                window.departmentsData[idx].status = document.getElementById('dept-status').value;
                window.departmentsData[idx].summary = document.getElementById('dept-summary').value.trim();
                window.departmentsData[idx].programs = document.getElementById('dept-programs').value
                    .split(',')
                    .map(s => s.trim())
                    .filter(s => s.length > 0);

                if (typeof window.saveCloudDepts === 'function') window.saveCloudDepts(window.departmentsData);
                window.renderDepartments();
                closeDeptModal();
                showToast('Laporan departemen berhasil diperbarui!', 'success');
            }
        }

        function updateAuthUI() {
            const adminNoticeBar = document.getElementById('admin-notice-bar');
            const userBadge = document.getElementById('user-status-badge');
            const emailDisplay = document.getElementById('user-email-display');
            const roleDot = document.getElementById('user-role-dot');
            const authBtnText = document.getElementById('auth-btn-text');
            const authBtnTrigger = document.getElementById('auth-btn-trigger');
            const addTransBtn = document.getElementById('add-trans-btn');

            if (window.currentUser) {
                userBadge.classList.remove('hidden');
                userBadge.classList.add('flex');
                emailDisplay.innerText = window.currentUser.name || window.currentUser.email;

                if (window.currentUser.isAdmin) {
                    if (adminNoticeBar) adminNoticeBar.classList.remove('hidden');
                    if (addTransBtn) addTransBtn.classList.remove('hidden');
                    roleDot.className = "w-2 h-2 rounded-full bg-brand-green animate-pulse";
                    authBtnText.innerText = "Admin Area";
                } else {
                    if (adminNoticeBar) adminNoticeBar.classList.add('hidden');
                    if (addTransBtn) addTransBtn.classList.add('hidden');
                    roleDot.className = "w-2 h-2 rounded-full bg-blue-500";
                    authBtnText.innerText = "Akun Saya";
                }
            } else {
                if (adminNoticeBar) adminNoticeBar.classList.add('hidden');
                userBadge.classList.add('hidden');
                userBadge.classList.remove('flex');
                if (addTransBtn) addTransBtn.classList.add('hidden');
                authBtnText.innerText = "Sign In";
            }
        }

        // Modal Helpers with Smooth Spring Transitions (AnimatePresence-style)
        function animateOpenModal(modalId) {
            const el = document.getElementById(modalId);
            if (!el) return;
            el.classList.remove('hidden');
            requestAnimationFrame(() => {
                el.classList.add('is-open');
            });
        }

        function animateCloseModal(modalId) {
            const el = document.getElementById(modalId);
            if (!el) return;
            el.classList.remove('is-open');
            setTimeout(() => {
                if (!el.classList.contains('is-open')) {
                    el.classList.add('hidden');
                }
            }, 300);
        }

        function openAuthModal() { animateOpenModal('auth-modal'); }
        function closeAuthModal() { animateCloseModal('auth-modal'); }
        function closeFinancialModal() { animateCloseModal('financial-modal'); }
        function closeDeptModal() { animateCloseModal('dept-modal'); }

        function submitFeedback(e) {
            e.preventDefault();
            const name = document.getElementById('fb-name').value.trim();
            const dept = document.getElementById('fb-dept').value;
            const msg = document.getElementById('fb-msg').value.trim();

            if (!name || !msg) {
                showToast('Nama dan pesan aspirasi wajib diisi.', 'error');
                return;
            }

            // Sync to Google Sheets (Feedback Sheet: [NO, Student Full Name, Target Departement, Aspiration])
            if (window.SRCSheetsSync && typeof window.SRCSheetsSync.addFeedback === 'function') {
                window.SRCSheetsSync.addFeedback({
                    fullName: name,
                    targetDepartment: dept,
                    aspiration: msg
                });
            }

            showToast(`Terima kasih, ${name}! Aspirasi Anda telah diteruskan ke ${dept}.`, 'success');
            document.getElementById('feedback-form').reset();
        }

        function formatNumber(num) {
            return new Intl.NumberFormat('id-ID').format(num);
        }

        function escapeHtml(str) {
            if (!str) return '';
            return String(str)
                .replace(/&/g, "&amp;")
                .replace(/</g, "&lt;")
                .replace(/>/g, "&gt;")
                .replace(/"/g, "&quot;")
                .replace(/'/g, "&#039;");
        }

        // Lenis Smooth Scroll
        let lenis = null;
        function initLenisSmoothScroll() {
            if (typeof Lenis === 'undefined') return;
            lenis = new Lenis({
                duration: 1.25,
                easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
                orientation: 'vertical',
                gestureOrientation: 'vertical',
                smoothWheel: true,
                wheelMultiplier: 1.0,
                touchMultiplier: 1.8,
                infinite: false,
            });

            function raf(time) {
                lenis.raf(time);
                requestAnimationFrame(raf);
            }
            requestAnimationFrame(raf);
            window.lenis = lenis;

            if (lenis) {
                lenis.on('scroll', () => {
                    syncActiveNavbarSection();
                });
            }
        }

        const navSectionIds = ['hero', 'about', 'financial', 'departments', 'blog', 'activity', 'suggestion'];
        let activeNavSectionId = 'hero';

        function syncActiveNavbarSection() {
            const scrollY = window.scrollY || window.pageYOffset || 0;
            let currentSection = navSectionIds[0];

            // Bottom of page check
            if ((window.innerHeight + scrollY) >= (document.documentElement.scrollHeight - 70)) {
                currentSection = navSectionIds[navSectionIds.length - 1];
            } else {
                // Check section closest to the upper-third of viewport
                const focusPoint = 140; // slightly below sticky navbar
                for (let i = 0; i < navSectionIds.length; i++) {
                    const secId = navSectionIds[i];
                    const el = document.getElementById(secId);
                    if (!el) continue;

                    const rect = el.getBoundingClientRect();
                    if (rect.top <= focusPoint && rect.bottom > focusPoint) {
                        currentSection = secId;
                        break;
                    }
                }
            }

            if (currentSection === activeNavSectionId) return;
            activeNavSectionId = currentSection;
            updateNavbarStyles(currentSection);
        }

        function updateNavbarStyles(activeId) {
            // Desktop links
            document.querySelectorAll('.nav-desktop-link').forEach(link => {
                const target = link.getAttribute('data-nav-link');
                if (target === activeId) {
                    link.className = 'nav-desktop-link text-brand-green font-semibold border-b-2 border-brand-green pb-0.5 transition-all';
                } else {
                    link.className = 'nav-desktop-link text-slate-700 hover:text-brand-green transition-colors pb-0.5 border-b-2 border-transparent';
                }
            });

            // Mobile links
            document.querySelectorAll('.nav-mobile-link').forEach(link => {
                const target = link.getAttribute('data-nav-link');
                if (target === activeId) {
                    link.className = 'nav-mobile-link block px-4 py-3 rounded-xl bg-emerald-50 text-brand-green font-bold transition-colors';
                } else {
                    link.className = 'nav-mobile-link block px-4 py-3 rounded-xl hover:bg-white/50 font-medium text-slate-800 transition-colors';
                }
            });
        }

        function initNavbarScrollSpy() {
            // Attach smooth scroll intercept to nav links
            document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                anchor.addEventListener('click', function (e) {
                    const href = this.getAttribute('href');
                    if (!href || href === '#') return;
                    const targetId = href.substring(1);
                    const targetEl = document.getElementById(targetId);
                    if (targetEl) {
                        e.preventDefault();
                        scrollToSection(targetId);
                        activeNavSectionId = targetId;
                        updateNavbarStyles(targetId);
                    }
                });
            });

            window.addEventListener('scroll', syncActiveNavbarSection, { passive: true });
            syncActiveNavbarSection();
        }

        function scrollToSection(id) {
            const el = document.getElementById(id);
            if (!el) return;
            if (window.lenis) {
                window.lenis.scrollTo(el, { offset: -70, duration: 1.2 });
            } else {
                const top = el.getBoundingClientRect().top + window.pageYOffset - 70;
                window.scrollTo({ top, behavior: 'smooth' });
            }
        }

        function toggleMobileMenu() {
            const menu = document.getElementById('mobile-menu');
            if (!menu) return;
            const isVisible = menu.classList.contains('menu-visible');
            if (isVisible) {
                menu.classList.remove('menu-visible');
                menu.classList.add('menu-hidden');
            } else {
                menu.classList.remove('menu-hidden');
                menu.classList.add('menu-visible');
            }
        }

        function switchAuthTab(tab) {
            const loginForm = document.getElementById('login-form');
            const regForm = document.getElementById('register-form');
            const loginBtn = document.getElementById('tab-login-btn');
            const regBtn = document.getElementById('tab-register-btn');
            if (tab === 'login') {
                loginForm.classList.remove('hidden');
                regForm.classList.add('hidden');
                loginBtn.className = 'flex-1 py-3 text-center font-bold text-brand-green border-b-2 border-brand-green';
                regBtn.className = 'flex-1 py-3 text-center font-bold text-slate-400 border-b-2 border-transparent hover:text-slate-600';
            } else {
                loginForm.classList.add('hidden');
                regForm.classList.remove('hidden');
                regBtn.className = 'flex-1 py-3 text-center font-bold text-brand-green border-b-2 border-brand-green';
                loginBtn.className = 'flex-1 py-3 text-center font-bold text-slate-400 border-b-2 border-transparent hover:text-slate-600';
            }
        }

        function showToast(msg, type = 'success') {
            const toast = document.getElementById('toast');
            const icon = document.getElementById('toast-icon');
            document.getElementById('toast-message').innerText = msg;

            if (type === 'error') {
                icon.className = "fa-solid fa-circle-exclamation text-red-400 text-xl";
            } else if (type === 'info') {
                icon.className = "fa-solid fa-circle-info text-blue-400 text-xl";
            } else {
                icon.className = "fa-solid fa-circle-check text-bmyellow text-xl";
            }

            toast.classList.remove('translate-y-24', 'opacity-0');
            clearTimeout(toast._timeout);
            toast._timeout = setTimeout(() => {
                toast.classList.add('translate-y-24', 'opacity-0');
            }, 3200);
        }

        // Spotlight Tracker
        function initJahedSpotlightCards() {
            const cards = document.querySelectorAll('.spotlight-card');
            cards.forEach(card => {
                if (card._hasJahedSpotlight) return;
                card._hasJahedSpotlight = true;

                card.addEventListener('mousemove', (e) => {
                    const rect = card.getBoundingClientRect();
                    const x = e.clientX - rect.left;
                    const y = e.clientY - rect.top;
                    card.style.setProperty('--mouse-x', `${x}px`);
                    card.style.setProperty('--mouse-y', `${y}px`);
                });

                card.addEventListener('mouseleave', () => {
                    card.style.setProperty('--mouse-x', `-500px`);
                    card.style.setProperty('--mouse-y', `-500px`);
                });
            });
        }

        // Polaroid Carousel Controller
        let polaroidCurrentOffset = 0;
        let polaroidAutoplayInterval = null;
        let isPolaroidAutoplaying = true;
        let isPolaroidDragging = false;
        let polaroidStartX = 0;
        let polaroidStartOffset = 0;
        let polaroidVelocity = 0;
        let polaroidLastX = 0;
        let polaroidLastTime = 0;

        function updatePolaroidTransform(swingAngle = 0) {
            const track = document.getElementById('polaroid-track');
            const wrapper = document.getElementById('polaroid-carousel-container');
            if (!track || !wrapper) return;

            const maxOffset = 0;
            const minOffset = Math.min(0, wrapper.clientWidth - track.scrollWidth - 30);

            polaroidCurrentOffset = Math.max(minOffset, Math.min(maxOffset, polaroidCurrentOffset));
            track.style.transform = `translateX(${polaroidCurrentOffset}px)`;

            const cards = track.querySelectorAll('.polaroid-card');
            cards.forEach((card, idx) => {
                const baseRot = (idx % 2 === 0) ? -2.2 : 2.2;
                const dynamicRot = baseRot + (swingAngle * 0.4);
                card.style.transform = `rotate(${dynamicRot}deg)`;
            });
        }

        window.polaroidNext = function () {
            const cardWidth = 278;
            polaroidCurrentOffset -= cardWidth;
            updatePolaroidTransform(6);
            setTimeout(() => updatePolaroidTransform(0), 400);
        };

        window.polaroidPrev = function () {
            const cardWidth = 278;
            polaroidCurrentOffset += cardWidth;
            updatePolaroidTransform(-6);
            setTimeout(() => updatePolaroidTransform(0), 400);
        };

        window.togglePolaroidAutoplay = function () {
            isPolaroidAutoplaying = !isPolaroidAutoplaying;
            const btn = document.getElementById('btn-polaroid-autoplay');
            const txt = document.getElementById('txt-polaroid-autoplay');

            if (isPolaroidAutoplaying) {
                btn.className = "px-3.5 py-2 rounded-full bg-emerald-50 text-emerald-800 hover:bg-emerald-100 text-xs font-bold border border-emerald-300 shadow-sm flex items-center gap-1.5 transition-all";
                btn.innerHTML = '<i class="fa-solid fa-pause text-[10px]"></i> <span>Autoplay</span>';
                startPolaroidAutoplay();
                showToast("Polaroid Autoplay: Aktif", "info");
            } else {
                btn.className = "px-3.5 py-2 rounded-full bg-white hover:bg-slate-50 text-slate-700 text-xs font-bold border border-slate-300 shadow-sm flex items-center gap-1.5 transition-all";
                btn.innerHTML = '<i class="fa-solid fa-play text-[10px]"></i> <span>Autoplay</span>';
                stopPolaroidAutoplay();
                showToast("Polaroid Autoplay: Nonaktif", "info");
            }
        };

        function startPolaroidAutoplay() {
            stopPolaroidAutoplay();
            polaroidAutoplayInterval = setInterval(() => {
                const track = document.getElementById('polaroid-track');
                const wrapper = document.getElementById('polaroid-carousel-container');
                if (!track || !wrapper) return;
                const minOffset = Math.min(0, wrapper.clientWidth - track.scrollWidth - 30);
                if (polaroidCurrentOffset <= minOffset + 50) {
                    polaroidCurrentOffset = 0;
                    updatePolaroidTransform(0);
                } else {
                    window.polaroidNext();
                }
            }, 3500);
        }

        function stopPolaroidAutoplay() {
            if (polaroidAutoplayInterval) clearInterval(polaroidAutoplayInterval);
            polaroidAutoplayInterval = null;
        }

        function initPolaroidCarousel() {
            const track = document.getElementById('polaroid-track');
            const wrapper = document.getElementById('polaroid-carousel-container');
            if (!track || !wrapper) return;

            track.addEventListener('mousedown', (e) => {
                isPolaroidDragging = true;
                polaroidStartX = e.clientX;
                polaroidStartOffset = polaroidCurrentOffset;
                polaroidLastX = e.clientX;
                polaroidLastTime = performance.now();
                track.classList.add('is-dragging');
                stopPolaroidAutoplay();
            });

            window.addEventListener('mousemove', (e) => {
                if (!isPolaroidDragging) return;
                const deltaX = e.clientX - polaroidStartX;
                const now = performance.now();
                const timeDiff = now - polaroidLastTime || 1;
                polaroidVelocity = (e.clientX - polaroidLastX) / timeDiff;
                polaroidLastX = e.clientX;
                polaroidLastTime = now;

                polaroidCurrentOffset = polaroidStartOffset + deltaX;
                const swing = Math.max(-15, Math.min(15, -polaroidVelocity * 8));
                updatePolaroidTransform(swing);
            });

            window.addEventListener('mouseup', () => {
                if (!isPolaroidDragging) return;
                isPolaroidDragging = false;
                track.classList.remove('is-dragging');
                updatePolaroidTransform(0);
                if (isPolaroidAutoplaying) startPolaroidAutoplay();
            });

            track.addEventListener('touchstart', (e) => {
                isPolaroidDragging = true;
                polaroidStartX = e.touches[0].clientX;
                polaroidStartOffset = polaroidCurrentOffset;
                stopPolaroidAutoplay();
            }, { passive: true });

            track.addEventListener('touchmove', (e) => {
                if (!isPolaroidDragging) return;
                const deltaX = e.touches[0].clientX - polaroidStartX;
                polaroidCurrentOffset = polaroidStartOffset + deltaX;
                updatePolaroidTransform(-3);
            }, { passive: true });

            track.addEventListener('touchend', () => {
                isPolaroidDragging = false;
                updatePolaroidTransform(0);
                if (isPolaroidAutoplaying) startPolaroidAutoplay();
            });

            // Mouse wheel horizontal scroll support
            wrapper.addEventListener('wheel', (e) => {
                const delta = e.deltaX !== 0 ? e.deltaX : e.deltaY;
                if (Math.abs(delta) > 5) {
                    stopPolaroidAutoplay();
                    polaroidCurrentOffset -= delta * 0.9;
                    const swing = Math.max(-12, Math.min(12, -delta * 0.15));
                    updatePolaroidTransform(swing);
                    clearTimeout(wrapper._wheelTimeout);
                    wrapper._wheelTimeout = setTimeout(() => {
                        updatePolaroidTransform(0);
                        if (isPolaroidAutoplaying) startPolaroidAutoplay();
                    }, 400);
                }
            }, { passive: true });

            updatePolaroidTransform(0);
            if (isPolaroidAutoplaying) startPolaroidAutoplay();
        }

        // Motion Scroll In/Out Engine
        let motionObserver = null;

        function initMotionScrollAnimations() {
            const upSelectors = [
                '#hero h1',
                '#hero p',
                '#about h2',
                '#about p',
                '#financial h2',
                '#financial .glass-panel',
                '#financial table tbody tr',
                '#departments h2',
                '#departments .coss-tabs-list',
                '#activity h2',
                '#activity p',
                '#polaroid-carousel-container',
                '#blog h2',
                '#blog p',
                '#blog-more-btn',
                '#suggestion h2',
                '#suggestion p',
                '#suggestion form'
            ];

            const scaleSelectors = [
                '#about .glossy-card',
                '#about .spotlight-card',
                '#financial .spotlight-card',
                '#departments-grid > div',
                '#blog article',
                '.polaroid-card'
            ];

            const leftSelectors = [
                '#hero .motion-fade-left',
                '#about > div > div:first-child',
                '#financial-header-title',
                '#departments > div > div:first-child',
                '#blog > div > div:first-child'
            ];

            const rightSelectors = [
                '#hero .motion-fade-right'
            ];

            const maskSelectors = [
                '.cinematic-mask-reveal'
            ];

            if (!motionObserver) {
                motionObserver = new IntersectionObserver((entries) => {
                    entries.forEach(entry => {
                        if (entry.isIntersecting) {
                            entry.target.classList.add('in-view');
                        } else {
                            // Do not un-reveal elements inside #hero once revealed
                            if (entry.target.closest('#hero')) return;
                            const rect = entry.target.getBoundingClientRect();
                            if (rect.top > window.innerHeight || rect.bottom < 0) {
                                entry.target.classList.remove('in-view');
                            }
                        }
                    });
                }, {
                    root: null,
                    threshold: 0.05,
                    rootMargin: '0px 0px -20px 0px'
                });
            }

            document.querySelectorAll(maskSelectors.join(', ')).forEach((el) => {
                if (!el.dataset.observed) {
                    el.dataset.observed = 'true';
                    motionObserver.observe(el);
                }
            });

            document.querySelectorAll(upSelectors.join(', ')).forEach((el, index) => {
                if (!el.classList.contains('motion-fade-scale') && !el.classList.contains('motion-fade-left') && !el.classList.contains('cinematic-mask-reveal')) {
                    el.classList.add('motion-fade-up');
                }
                el.style.transitionDelay = `${(index % 5) * 60}ms`;
                if (!el.dataset.observed) {
                    el.dataset.observed = 'true';
                    motionObserver.observe(el);
                }
            });

            document.querySelectorAll(scaleSelectors.join(', ')).forEach((el, index) => {
                el.classList.remove('motion-fade-up');
                el.classList.add('motion-fade-scale');
                el.style.transitionDelay = `${(index % 4) * 80}ms`;
                if (!el.dataset.observed) {
                    el.dataset.observed = 'true';
                    motionObserver.observe(el);
                }
            });

            document.querySelectorAll(leftSelectors.join(', ')).forEach((el, index) => {
                el.classList.add('motion-fade-left');
                el.style.transitionDelay = `${index * 90}ms`;
                if (!el.dataset.observed) {
                    el.dataset.observed = 'true';
                    motionObserver.observe(el);
                }
            });

            document.querySelectorAll(rightSelectors.join(', ')).forEach((el, index) => {
                el.classList.add('motion-fade-right');
                el.style.transitionDelay = `${index * 90}ms`;
                if (!el.dataset.observed) {
                    el.dataset.observed = 'true';
                    motionObserver.observe(el);
                }
            });

            // Immediately reveal all #hero elements
            document.querySelectorAll('#hero .motion-fade-up, #hero .motion-fade-scale, #hero .motion-fade-left, #hero .motion-fade-right, #hero .cinematic-mask-reveal, #hero h1, #hero p').forEach(el => {
                el.classList.add('in-view');
            });
        }

        // Cinematic Scroll Parallax Depth Engine (Framer useScroll / useTransform equivalent)
        function initScrollParallaxDepth() {
            const parallaxElements = [
                { selector: '#hero [aria-hidden="true"]', speed: 0.12 },
                { selector: '#about [aria-hidden="true"]', speed: -0.09 },
                { selector: '#financial [aria-hidden="true"]', speed: 0.1 },
                { selector: '#hero .glossy-card', speed: -0.04 }
            ];

            let ticking = false;
            function updateParallax() {
                const scrollY = window.scrollY || window.pageYOffset || 0;
                parallaxElements.forEach(({ selector, speed }) => {
                    const els = document.querySelectorAll(selector);
                    els.forEach(el => {
                        const yOffset = scrollY * speed;
                        el.style.transform = `translate3d(0, ${yOffset.toFixed(1)}px, 0)`;
                    });
                });
                ticking = false;
            }

            window.addEventListener('scroll', () => {
                if (!ticking) {
                    requestAnimationFrame(updateParallax);
                    ticking = true;
                }
            }, { passive: true });
        }

        window.addEventListener('DOMContentLoaded', () => {
            if (typeof window.applyLanguage === 'function') {
                window.applyLanguage(window.currentLang || 'id');
            }
            initLenisSmoothScroll();
            initNavbarScrollSpy();
            initMotionScrollAnimations();
            initScrollParallaxDepth();
            window.renderFinancialTable();
            window.renderDepartments();
            initJahedSpotlightCards();
            initPolaroidCarousel();
            setTimeout(() => {
                window.updateSlidingPill(window.currentFinFilter || 'all');
                initMotionScrollAnimations();
                syncActiveNavbarSection();
            }, 100);
        });

        window.addEventListener('resize', () => {
            window.updateSlidingPill(window.currentFinFilter || 'all');
            updatePolaroidTransform(0);
        });