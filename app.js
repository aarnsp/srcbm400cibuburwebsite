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
                "nav.structure": "Struktur",
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
                "structure.eyebrow": "Hierarki Kepengurusan",
                "structure.title": "Struktur Organisasi SRC BM 400",
                "structure.subtitle": "Bagan kepemimpinan terintegrasi dari Pembina, Presidium, 8 Divisi strategis, hingga seluruh perwakilan anggota dewan siswa.",
                "structure.clickHint": "Klik pada kartu anggota untuk melihat profil & rincian tugas",
                "structure.tierAdvisor": "Dewan Pembina",
                "structure.tierPresidium": "Presidium & Pimpinan Utama",
                "structure.tierDivisions": "8 Divisi & Departemen Strategis",
                "structure.tierMembers": "Direktori Anggota SRC (Member of SRC)",
                "structure.searchPlaceholder": "Cari nama atau divisi anggota...",
                "structure.filterAll": "Semua",
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
                "nav.structure": "Structure",
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
                "structure.eyebrow": "Leadership Hierarchy",
                "structure.title": "SRC BM 400 Organizational Chart",
                "structure.subtitle": "Integrated governance hierarchy from Principal Advisor, Presidium executive board, 8 strategic divisions, to all active student council members.",
                "structure.clickHint": "Click any member card to view detailed profile & duties",
                "structure.tierAdvisor": "Advisory Board",
                "structure.tierPresidium": "Executive Presidium",
                "structure.tierDivisions": "8 Strategic Divisions",
                "structure.tierMembers": "SRC Member Directory",
                "structure.searchPlaceholder": "Search member name or division...",
                "structure.filterAll": "All",
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
            const memberSearchInput = document.getElementById('member-search-input');
            if (memberSearchInput) {
                memberSearchInput.placeholder = lang === 'en' ? 'Search member name or division...' : 'Cari nama atau divisi anggota...';
            }

            // Re-render structure hierarchy & members
            if (typeof window.renderStructureHierarchy === 'function') {
                window.renderStructureHierarchy();
            if (typeof window.initStructureWheelController === "function") window.initStructureWheelController();
            }
            if (typeof window.renderStructureFilterPills === 'function') {
                window.renderStructureFilterPills();
            }
            if (typeof window.filterStructureMembers === 'function') {
                window.filterStructureMembers();
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

        // ==========================================
        // ORGANIZATIONAL STRUCTURE DATA & HIERARCHY
        // ==========================================
        window.activeStructureDeptFilter = 'all';

        window.srcStructureData = {
            "advisor": {
                "id": "adv-1",
                "name": "<nama>",
                "role_id": "Pembina Utama SRC",
                "role_en": "Principal Advisor of SRC",
                "division_id": "Dewan Pembina",
                "division_en": "Advisory Board",
                "grade_id": "Kepala SMA Bakti Mulya 400",
                "grade_en": "Principal of SMA BM 400",
                "photo": "default-avatar.png",
                "bio_id": "Menuntun dan mengayomi regenerasi pemimpin dewan siswa dengan keteladanan akhlak mulia, integritas akademik, dan wawasan global berdaya saing.",
                "bio_en": "Guiding and mentoring the student council leadership with moral excellence, high integrity, and global competitiveness.",
                "responsibilities_id": [
                    "Pengarah dan pengawas utama kebijakan organisasi dewan siswa",
                    "Penyelarasan program kerja dewan dengan kalender kurikulum sekolah",
                    "Pembimbing etika kepemimpinan dan suksesi perwakilan murid"
                ],
                "responsibilities_en": [
                    "Principal advisor & overseer of SRC policies",
                    "Aligning council programs with the school curriculum calendar",
                    "Mentoring student leaders in integrity and leadership ethics"
                ],
                "contact": "pembina@srcbm400.sch.id",
                "badge": "Advisor"
            },
            "presidium": [
                {
                    "id": "pres-1",
                    "name": "<nama>",
                    "role_id": "Ketua Umum SRC",
                    "role_en": "President of SRC",
                    "division_id": "Presidium",
                    "division_en": "Presidium",
                    "grade_id": "Kelas XII MIPA 1",
                    "grade_en": "Grade 12 Natural Science",
                    "photo": "default-avatar.png",
                    "bio_id": "Memimpin SRC dengan semangat kolaborasi nyata, empati, dan menjadikan dewan wadah aspirasi inklusif bagi seluruh siswa SMA BM 400.",
                    "bio_en": "Leading the SRC through authentic collaboration, empathy, and providing an inclusive voice for all students.",
                    "responsibilities_id": [
                        "Penanggung jawab tertinggi seluruh operasional dan arah gerak dewan",
                        "Mengoordinasikan sinergi 8 divisi serta audiensi resmi dengan sekolah",
                        "Memimpin sidang umum, rapat pleno, dan evaluasi program berkala"
                    ],
                    "responsibilities_en": [
                        "Chief executive of SRC operations and strategic direction",
                        "Coordinating 8 divisions and institutional hearings with faculty",
                        "Leading general assemblies and periodic performance audits"
                    ],
                    "contact": "@azkafabian_",
                    "badge": "President"
                },
                {
                    "id": "pres-2",
                    "name": "<nama>",
                    "role_id": "Wakil Ketua Umum SRC",
                    "role_en": "Vice President of SRC",
                    "division_id": "Presidium",
                    "division_en": "Presidium",
                    "grade_id": "Kelas XI IPS 1",
                    "grade_en": "Grade 11 Social Studies",
                    "photo": "default-avatar.png",
                    "bio_id": "Mendampingi ketua umum dalam memantau efektivitas program kerja serta menjaga solidaritas dan sinergi internal dewan.",
                    "bio_en": "Supporting the President in program execution and fostering strong internal council camaraderie.",
                    "responsibilities_id": [
                        "Pengawasan internal kinerja dan keaktifan 8 departemen",
                        "Manajemen operasional harian dan kepanitiaan gabungan",
                        "Harmonisasi relasi antar-koordinator divisi dan anggota"
                    ],
                    "responsibilities_en": [
                        "Internal monitoring of divisional performance",
                        "Daily operational oversight and joint committee management",
                        "Fostering team harmony across all divisions"
                    ],
                    "contact": "@amandacheryl",
                    "badge": "Vice President"
                },
                {
                    "id": "pres-3",
                    "name": "<nama>",
                    "role_id": "Sekretaris Umum",
                    "role_en": "Secretary General",
                    "division_id": "Presidium",
                    "division_en": "Presidium",
                    "grade_id": "Kelas XI MIPA 2",
                    "grade_en": "Grade 11 Natural Science",
                    "photo": "default-avatar.png",
                    "bio_id": "Tata kelola administrasi yang rapi, transparan, dan terarsip digital adalah fondasi profesionalitas dan kredibilitas dewan.",
                    "bio_en": "Structured administration, digital archives, and official transparency form the core of council credibility.",
                    "responsibilities_id": [
                        "Penyusunan notula rapat, arsip digital, dan korespondensi resmi",
                        "Pengelolaan kalender master kegiatan dan audiensi siswa",
                        "Verifikasi administratif proposal kegiatan seluruh divisi"
                    ],
                    "responsibilities_en": [
                        "Drafting meeting minutes, digital archives, and official correspondence",
                        "Managing master calendar of activities and student hearings",
                        "Administrative vetting of activity proposals from divisions"
                    ],
                    "contact": "@clarissaaurelia",
                    "badge": "Secretary"
                },
                {
                    "id": "pres-4",
                    "name": "<nama>",
                    "role_id": "Bendahara Umum",
                    "role_en": "Treasurer General",
                    "division_id": "Presidium",
                    "division_en": "Presidium",
                    "grade_id": "Kelas XII IPS 2",
                    "grade_en": "Grade 12 Social Studies",
                    "photo": "default-avatar.png",
                    "bio_id": "Mewujudkan tata kelola perbendaharaan dewan yang transparan, akurat, dan dapat dipertanggungjawabkan kepada seluruh siswa.",
                    "bio_en": "Safeguarding SRC financial transparency, digital ledger accuracy, and publicly verifiable budgeting.",
                    "responsibilities_id": [
                        "Pengelolaan arus kas dewan dan sinkronisasi laporan keuangan online",
                        "Verifikasi RAB (Rencana Anggaran Biaya) seluruh kegiatan divisi",
                        "Penyusunan audit berkala bersama dewan pembina dan presidium"
                    ],
                    "responsibilities_en": [
                        "Managing council treasury and real-time ledger sync",
                        "Budget verification and auditing across all division proposals",
                        "Periodic financial reports and compliance audits"
                    ],
                    "contact": "@fakhriradit",
                    "badge": "Treasurer"
                }
            ],
            "departments": [
                {
                    "id": 1,
                    "name_id": "<departemens>",
                    "name_en": "<departemens>",
                    "icon": "fa-book-open-reader",
                    "coordinator": {
                        "id": "d1-head",
                        "name": "<nama>",
                        "role_id": "Koordinator Divisi",
                        "role_en": "Head Coordinator",
                        "division_id": "<departemens>",
                        "division_en": "<departemens>",
                        "grade_id": "Kelas XII MIPA 1",
                        "grade_en": "Grade 12 Natural Science",
                        "photo": "default-avatar.png",
                        "bio_id": "Menggairahkan budaya riset ilmiah, kelancaran berbahasa internasional, serta tutor sebaya bagi siswa.",
                        "bio_en": "Fostering academic inquiry, bilingual fluency, and peer tutoring among students.",
                        "responsibilities_id": [
                            "Koordinator Squad Tutor Sebaya",
                            "Pengembangan Mading & E-Literasi",
                            "Simulasi Ujian Sekolah"
                        ],
                        "responsibilities_en": [
                            "Peer Tutoring Coordinator",
                            "Literacy Wall & Digital Publication",
                            "Exam Prep Sessions"
                        ],
                        "contact": "@alyazahra_"
                    },
                    "coCoordinator": {
                        "id": "d1-cohead",
                        "name": "<nama>",
                        "role_id": "Wakil Koordinator",
                        "role_en": "Vice Coordinator",
                        "division_id": "<departemens>",
                        "division_en": "<departemens>",
                        "grade_id": "Kelas XI MIPA 3",
                        "grade_en": "Grade 11 Natural Science",
                        "photo": "default-avatar.png",
                        "bio_id": "Berdedikasi menghubungkan siswa dengan kompetisi olimpiade sains dan forum debat internasional.",
                        "bio_en": "Connecting students to science olympiads and international debate symposiums.",
                        "responsibilities_id": [
                            "Bimbingan Lomba Sains & Bahasa",
                            "Manajemen Jadwal Workshop",
                            "Koordinasi Klub Bahasa"
                        ],
                        "responsibilities_en": [
                            "Olympiad Coaching",
                            "Academic Workshop Schedules",
                            "Language Club Lead"
                        ],
                        "contact": "@kevinalvaro"
                    },
                    "members": [
                        {
                            "id": "d1-m1",
                            "name": "<nama>",
                            "grade_id": "Kelas XI MIPA 1",
                            "grade_en": "Grade 11 Natural Science",
                            "photo": "default-avatar.png"
                        },
                        {
                            "id": "d1-m2",
                            "name": "<nama>",
                            "grade_id": "Kelas X-A",
                            "grade_en": "Grade 10-A",
                            "photo": "default-avatar.png"
                        },
                        {
                            "id": "d1-m3",
                            "name": "<nama>",
                            "grade_id": "Kelas XI MIPA 2",
                            "grade_en": "Grade 11 Natural Science",
                            "photo": "default-avatar.png"
                        },
                        {
                            "id": "d1-m4",
                            "name": "<nama>",
                            "grade_id": "Kelas X-C",
                            "grade_en": "Grade 10-C",
                            "photo": "default-avatar.png"
                        },
                        {
                            "id": "d1-m5",
                            "name": "<nama>",
                            "grade_id": "Kelas XI IPS 2",
                            "grade_en": "Grade 11 Social Studies",
                            "photo": "default-avatar.png"
                        }
                    ]
                },
                {
                    "id": 2,
                    "name_id": "<departemens>",
                    "name_en": "<departemens>",
                    "icon": "fa-heart-pulse",
                    "coordinator": {
                        "id": "d2-head",
                        "name": "<nama>",
                        "role_id": "Koordinator Divisi",
                        "role_en": "Head Coordinator",
                        "division_id": "<departemens>",
                        "division_en": "<departemens>",
                        "grade_id": "Kelas XII IPS 1",
                        "grade_en": "Grade 12 Social Studies",
                        "photo": "default-avatar.png",
                        "bio_id": "Mengedepankan kesiapsiagaan medis sekolah dan pola hidup sehat bagi seluruh sivitas kampus.",
                        "bio_en": "Promoting campus medical emergency readiness and holistic healthy lifestyles.",
                        "responsibilities_id": [
                            "Penanggung Jawab UKS & PMR",
                            "Kampanye Kesehatan Mental & Fisik",
                            "Donor Darah Tahunan"
                        ],
                        "responsibilities_en": [
                            "School Clinic & Red Cross Lead",
                            "Mental & Physical Health Campaigns",
                            "Annual Blood Drive"
                        ],
                        "contact": "@farhanrizky"
                    },
                    "coCoordinator": {
                        "id": "d2-cohead",
                        "name": "<nama>",
                        "role_id": "Wakil Koordinator",
                        "role_en": "Vice Coordinator",
                        "division_id": "<departemens>",
                        "division_en": "<departemens>",
                        "grade_id": "Kelas XI MIPA 1",
                        "grade_en": "Grade 11 Natural Science",
                        "photo": "default-avatar.png",
                        "bio_id": "Memastikan ketersediaan perlengkapan P3K cepat tanggap di setiap sudut sekolah.",
                        "bio_en": "Ensuring high availability of rapid first aid equipment in every school sector.",
                        "responsibilities_id": [
                            "Pengawasan P3K Lapangan",
                            "Penyuluhan Gizi Remaja",
                            "Mitigasi Kesehatan Lingkungan"
                        ],
                        "responsibilities_en": [
                            "First Aid Field Monitoring",
                            "Adolescent Nutrition Guidance",
                            "Environmental Health"
                        ],
                        "contact": "@syifaandini"
                    },
                    "members": [
                        {
                            "id": "d2-m1",
                            "name": "<nama>",
                            "grade_id": "Kelas X-B",
                            "grade_en": "Grade 10-B",
                            "photo": "default-avatar.png"
                        },
                        {
                            "id": "d2-m2",
                            "name": "<nama>",
                            "grade_id": "Kelas XI MIPA 3",
                            "grade_en": "Grade 11 Natural Science",
                            "photo": "default-avatar.png"
                        },
                        {
                            "id": "d2-m3",
                            "name": "<nama>",
                            "grade_id": "Kelas XI IPS 1",
                            "grade_en": "Grade 11 Social Studies",
                            "photo": "default-avatar.png"
                        },
                        {
                            "id": "d2-m4",
                            "name": "<nama>",
                            "grade_id": "Kelas X-D",
                            "grade_en": "Grade 10-D",
                            "photo": "default-avatar.png"
                        },
                        {
                            "id": "d2-m5",
                            "name": "<nama>",
                            "grade_id": "Kelas XII IPS 2",
                            "grade_en": "Grade 12 Social Studies",
                            "photo": "default-avatar.png"
                        }
                    ]
                },
                {
                    "id": 3,
                    "name_id": "<departemens>",
                    "name_en": "<departemens>",
                    "icon": "fa-trophy",
                    "coordinator": {
                        "id": "d3-head",
                        "name": "<nama>",
                        "role_id": "Koordinator Divisi",
                        "role_en": "Head Coordinator",
                        "division_id": "<departemens>",
                        "division_en": "<departemens>",
                        "grade_id": "Kelas XII IPS 2",
                        "grade_en": "Grade 12 Social Studies",
                        "photo": "default-avatar.png",
                        "bio_id": "Menjadi wadah eksplorasi potensi seni, musik panggung, dan olahraga kompetitif berprestasi nasional.",
                        "bio_en": "Providing an empowering launchpad for performing arts, sports championships, and cultural stages.",
                        "responsibilities_id": [
                            "Ketua Pelaksana BM 400 Cup",
                            "Pentas Seni Tahunan",
                            "Kurasi Delegasi Lomba Eksternal"
                        ],
                        "responsibilities_en": [
                            "Lead BM 400 Cup Organizer",
                            "Annual Cultural Showcase",
                            "External Competition Delegation"
                        ],
                        "contact": "@nabilaputri"
                    },
                    "coCoordinator": {
                        "id": "d3-cohead",
                        "name": "<nama>",
                        "role_id": "Wakil Koordinator",
                        "role_en": "Vice Coordinator",
                        "division_id": "<departemens>",
                        "division_en": "<departemens>",
                        "grade_id": "Kelas XI IPS 2",
                        "grade_en": "Grade 11 Social Studies",
                        "photo": "default-avatar.png",
                        "bio_id": "Membangun atmosfer sportivitas tinggi dalam kompetisi basket, futsal, dan atletik antar-sekolah.",
                        "bio_en": "Championing high sportsmanship in basketball, futsal, and inter-school tournaments.",
                        "responsibilities_id": [
                            "Koordinator Turnamen Olahraga",
                            "Manajemen Ekstrakurikuler Seni",
                            "Apresiasi Prestasi Siswa"
                        ],
                        "responsibilities_en": [
                            "Sports Tournament Lead",
                            "Arts Club Coordinator",
                            "Student Merit Recognitions"
                        ],
                        "contact": "@rayhanmalik"
                    },
                    "members": [
                        {
                            "id": "d3-m1",
                            "name": "<nama>",
                            "grade_id": "Kelas XI MIPA 2",
                            "grade_en": "Grade 11 Natural Science",
                            "photo": "default-avatar.png"
                        },
                        {
                            "id": "d3-m2",
                            "name": "<nama>",
                            "grade_id": "Kelas X-B",
                            "grade_en": "Grade 10-B",
                            "photo": "default-avatar.png"
                        },
                        {
                            "id": "d3-m3",
                            "name": "<nama>",
                            "grade_id": "Kelas X-A",
                            "grade_en": "Grade 10-A",
                            "photo": "default-avatar.png"
                        },
                        {
                            "id": "d3-m4",
                            "name": "<nama>",
                            "grade_id": "Kelas XI IPS 1",
                            "grade_en": "Grade 11 Social Studies",
                            "photo": "default-avatar.png"
                        },
                        {
                            "id": "d3-m5",
                            "name": "<nama>",
                            "grade_id": "Kelas XI MIPA 1",
                            "grade_en": "Grade 11 Natural Science",
                            "photo": "default-avatar.png"
                        }
                    ]
                },
                {
                    "id": 4,
                    "name_id": "<departemens>",
                    "name_en": "<departemens>",
                    "icon": "fa-bullhorn",
                    "coordinator": {
                        "id": "d4-head",
                        "name": "<nama>",
                        "role_id": "Koordinator Divisi",
                        "role_en": "Head Coordinator",
                        "division_id": "<departemens>",
                        "division_en": "<departemens>",
                        "grade_id": "Kelas XII MIPA 2",
                        "grade_en": "Grade 12 Natural Science",
                        "photo": "default-avatar.png",
                        "bio_id": "Mengelola ekosistem digital resmi SRC, website responsif, dan komunikasi publik modern.",
                        "bio_en": "Overseeing SRC official digital ecosystem, responsive portals, and modern public communications.",
                        "responsibilities_id": [
                            "Pengembangan Portal Website SRC",
                            "Branding & Media Komunikasi",
                            "Siaran Live Event & Dokumentasi"
                        ],
                        "responsibilities_en": [
                            "SRC Web Portal Development",
                            "Branding & Public Relations",
                            "Live Broadcasts & Media"
                        ],
                        "contact": "@davinpratama"
                    },
                    "coCoordinator": {
                        "id": "d4-cohead",
                        "name": "<nama>",
                        "role_id": "Wakil Koordinator",
                        "role_en": "Vice Coordinator",
                        "division_id": "<departemens>",
                        "division_en": "<departemens>",
                        "grade_id": "Kelas XI MIPA 2",
                        "grade_en": "Grade 11 Natural Science",
                        "photo": "default-avatar.png",
                        "bio_id": "Kreativitas konten visual dan publikasi interaktif untuk memperluas jangkauan aspirasi murid.",
                        "bio_en": "Visual storytelling and engaging social broadcasts to elevate council transparency.",
                        "responsibilities_id": [
                            "Manajemen Konten Instagram & TikTok",
                            "Desain Grafis Publikasi",
                            "Kanal Interaksi Suara Siswa"
                        ],
                        "responsibilities_en": [
                            "Social Media Content Management",
                            "Graphic Design & Publishing",
                            "Student Interaction Channel"
                        ],
                        "contact": "@aurelherm"
                    },
                    "members": [
                        {
                            "id": "d4-m1",
                            "name": "<nama>",
                            "grade_id": "Kelas XI MIPA 3",
                            "grade_en": "Grade 11 Natural Science",
                            "photo": "default-avatar.png"
                        },
                        {
                            "id": "d4-m2",
                            "name": "<nama>",
                            "grade_id": "Kelas X-C",
                            "grade_en": "Grade 10-C",
                            "photo": "default-avatar.png"
                        },
                        {
                            "id": "d4-m3",
                            "name": "<nama>",
                            "grade_id": "Kelas X-B",
                            "grade_en": "Grade 10-B",
                            "photo": "default-avatar.png"
                        },
                        {
                            "id": "d4-m4",
                            "name": "<nama>",
                            "grade_id": "Kelas XI IPS 2",
                            "grade_en": "Grade 11 Social Studies",
                            "photo": "default-avatar.png"
                        },
                        {
                            "id": "d4-m5",
                            "name": "<nama>",
                            "grade_id": "Kelas X-A",
                            "grade_en": "Grade 10-A",
                            "photo": "default-avatar.png"
                        }
                    ]
                },
                {
                    "id": 5,
                    "name_id": "<departemens>",
                    "name_en": "<departemens>",
                    "icon": "fa-leaf",
                    "coordinator": {
                        "id": "d5-head",
                        "name": "<nama>",
                        "role_id": "Koordinator Divisi",
                        "role_en": "Head Coordinator",
                        "division_id": "<departemens>",
                        "division_en": "<departemens>",
                        "grade_id": "Kelas XII MIPA 1",
                        "grade_en": "Grade 12 Natural Science",
                        "photo": "default-avatar.png",
                        "bio_id": "Mewujudkan kampus hijau ramah lingkungan melalui pengurangan sampah plastik dan daur ulang kreatif.",
                        "bio_en": "Pioneering eco-campus initiatives through zero-plastic policies and creative upcycling.",
                        "responsibilities_id": [
                            "Gerakan Zero-Plastic Refill Station",
                            "Kampanye Eco-Brick & Kompos",
                            "Audit Kebersihan Kelas Berkala"
                        ],
                        "responsibilities_en": [
                            "Zero-Plastic Refill Station Lead",
                            "Eco-Brick & Compost Campaigns",
                            "Periodic Class Cleanliness Audits"
                        ],
                        "contact": "@sitirahma_"
                    },
                    "coCoordinator": {
                        "id": "d5-cohead",
                        "name": "<nama>",
                        "role_id": "Wakil Koordinator",
                        "role_en": "Vice Coordinator",
                        "division_id": "<departemens>",
                        "division_en": "<departemens>",
                        "grade_id": "Kelas XI IPS 1",
                        "grade_en": "Grade 11 Social Studies",
                        "photo": "default-avatar.png",
                        "bio_id": "Menggerakkan partisipasi aktif siswa dalam menjaga taman sekolah dan pengolahan sampah mandiri.",
                        "bio_en": "Mobilizing student engagement for school garden stewardship and waste separation.",
                        "responsibilities_id": [
                            "Pemilahan Sampah Organik/Anorganik",
                            "Aksi Jumat Bersih",
                            "Penghijauan Koridor Sekolah"
                        ],
                        "responsibilities_en": [
                            "Waste Sorting Oversight",
                            "Campus Clean Fridays",
                            "Corridor Greening Projects"
                        ],
                        "contact": "@bagasdwi"
                    },
                    "members": [
                        {
                            "id": "d5-m1",
                            "name": "<nama>",
                            "grade_id": "Kelas XI MIPA 2",
                            "grade_en": "Grade 11 Natural Science",
                            "photo": "default-avatar.png"
                        },
                        {
                            "id": "d5-m2",
                            "name": "<nama>",
                            "grade_id": "Kelas X-D",
                            "grade_en": "Grade 10-D",
                            "photo": "default-avatar.png"
                        },
                        {
                            "id": "d5-m3",
                            "name": "<nama>",
                            "grade_id": "Kelas X-B",
                            "grade_en": "Grade 10-B",
                            "photo": "default-avatar.png"
                        },
                        {
                            "id": "d5-m4",
                            "name": "<nama>",
                            "grade_id": "Kelas XI IPS 2",
                            "grade_en": "Grade 11 Social Studies",
                            "photo": "default-avatar.png"
                        },
                        {
                            "id": "d5-m5",
                            "name": "<nama>",
                            "grade_id": "Kelas XI MIPA 3",
                            "grade_en": "Grade 11 Natural Science",
                            "photo": "default-avatar.png"
                        }
                    ]
                },
                {
                    "id": 6,
                    "name_id": "<departemens>",
                    "name_en": "<departemens>",
                    "icon": "fa-hand-holding-heart",
                    "coordinator": {
                        "id": "d6-head",
                        "name": "<nama>",
                        "role_id": "Koordinator Divisi",
                        "role_en": "Head Coordinator",
                        "division_id": "<departemens>",
                        "division_en": "<departemens>",
                        "grade_id": "Kelas XII IPS 1",
                        "grade_en": "Grade 12 Social Studies",
                        "photo": "default-avatar.png",
                        "bio_id": "Menumbuhkan akhlakul karimah, keteladanan ibadah, dan empati sosial tinggi di kalangan pelajar.",
                        "bio_en": "Cultivating Islamic character, prayer leadership, and profound social empathy across student bodies.",
                        "responsibilities_id": [
                            "Peringatan Hari Besar Islam (PHBI)",
                            "Pengelolaan Kotak Infaq & Zakat",
                            "Bakti Sosial Peduli Sesama"
                        ],
                        "responsibilities_en": [
                            "Islamic Religious Commemorations",
                            "Charity & Infaq Management",
                            "Community Outreach & Care"
                        ],
                        "contact": "@mhaikal_"
                    },
                    "coCoordinator": {
                        "id": "d6-cohead",
                        "name": "<nama>",
                        "role_id": "Wakil Koordinator",
                        "role_en": "Vice Coordinator",
                        "division_id": "<departemens>",
                        "division_en": "<departemens>",
                        "grade_id": "Kelas XI MIPA 1",
                        "grade_en": "Grade 11 Natural Science",
                        "photo": "default-avatar.png",
                        "bio_id": "Menguatkan tali ukhuwah islamiyah dan toleransi harmonis di lingkungan sekolah Bakti Mulya 400.",
                        "bio_en": "Strengthening spiritual bonds and harmonic empathy within the Bakti Mulya 400 family.",
                        "responsibilities_id": [
                            "Kajian Rohani Remaja Berkala",
                            "Santunan Anak Yatim Kampus",
                            "Tadarus & Literasi Al-Qur'an"
                        ],
                        "responsibilities_en": [
                            "Youth Spiritual Seminars",
                            "Orphan Care Initiative",
                            "Quran Recitation & Study"
                        ],
                        "contact": "@fatimahazz"
                    },
                    "members": [
                        {
                            "id": "d6-m1",
                            "name": "<nama>",
                            "grade_id": "Kelas XI IPS 2",
                            "grade_en": "Grade 11 Social Studies",
                            "photo": "default-avatar.png"
                        },
                        {
                            "id": "d6-m2",
                            "name": "<nama>",
                            "grade_id": "Kelas X-A",
                            "grade_en": "Grade 10-A",
                            "photo": "default-avatar.png"
                        },
                        {
                            "id": "d6-m3",
                            "name": "<nama>",
                            "grade_id": "Kelas X-C",
                            "grade_en": "Grade 10-C",
                            "photo": "default-avatar.png"
                        },
                        {
                            "id": "d6-m4",
                            "name": "<nama>",
                            "grade_id": "Kelas XI MIPA 2",
                            "grade_en": "Grade 11 Natural Science",
                            "photo": "default-avatar.png"
                        },
                        {
                            "id": "d6-m5",
                            "name": "<nama>",
                            "grade_id": "Kelas XII MIPA 2",
                            "grade_en": "Grade 12 Natural Science",
                            "photo": "default-avatar.png"
                        }
                    ]
                },
                {
                    "id": 7,
                    "name_id": "<departemens>",
                    "name_en": "<departemens>",
                    "icon": "fa-store",
                    "coordinator": {
                        "id": "d7-head",
                        "name": "<nama>",
                        "role_id": "Koordinator Divisi",
                        "role_en": "Head Coordinator",
                        "division_id": "<departemens>",
                        "division_en": "<departemens>",
                        "grade_id": "Kelas XII IPS 2",
                        "grade_en": "Grade 12 Social Studies",
                        "photo": "default-avatar.png",
                        "bio_id": "Membangun jiwa entrepreneurship siswa lewat lini merchandise resmi dewan dan festival kreatif.",
                        "bio_en": "Cultivating entrepreneurial mindsets via official SRC merch lines and creative bazaars.",
                        "responsibilities_id": [
                            "Pengembangan Lini Official Merch SRC",
                            "Bazaar Kreatif Entrepreneur Pelajar",
                            "Manajemen Kas Kemitraan Usaha"
                        ],
                        "responsibilities_en": [
                            "Official SRC Merch Line",
                            "Student Creative Bazaar Festival",
                            "Venture Partner Treasury"
                        ],
                        "contact": "@keishaanin"
                    },
                    "coCoordinator": {
                        "id": "d7-cohead",
                        "name": "<nama>",
                        "role_id": "Wakil Koordinator",
                        "role_en": "Vice Coordinator",
                        "division_id": "<departemens>",
                        "division_en": "<departemens>",
                        "grade_id": "Kelas XI IPS 2",
                        "grade_en": "Grade 11 Social Studies",
                        "photo": "default-avatar.png",
                        "bio_id": "Mendorong inkubasi startup mini dan lokakarya bisnis praktis bagi siswa BM 400.",
                        "bio_en": "Inspiring mini startup incubations and hands-on business workshops for BM 400 youth.",
                        "responsibilities_id": [
                            "Workshop Literasi Finansial Pelajar",
                            "Riset Pasar Produk Merchandise",
                            "Logistik Stand Usaha Siswa"
                        ],
                        "responsibilities_en": [
                            "Student Financial Literacy Seminars",
                            "Merch Market Research",
                            "Vendor & Booth Logistics"
                        ],
                        "contact": "@jonathanb"
                    },
                    "members": [
                        {
                            "id": "d7-m1",
                            "name": "<nama>",
                            "grade_id": "Kelas XI MIPA 1",
                            "grade_en": "Grade 11 Natural Science",
                            "photo": "default-avatar.png"
                        },
                        {
                            "id": "d7-m2",
                            "name": "<nama>",
                            "grade_id": "Kelas X-B",
                            "grade_en": "Grade 10-B",
                            "photo": "default-avatar.png"
                        },
                        {
                            "id": "d7-m3",
                            "name": "<nama>",
                            "grade_id": "Kelas X-A",
                            "grade_en": "Grade 10-A",
                            "photo": "default-avatar.png"
                        },
                        {
                            "id": "d7-m4",
                            "name": "<nama>",
                            "grade_id": "Kelas XII IPS 1",
                            "grade_en": "Grade 12 Social Studies",
                            "photo": "default-avatar.png"
                        },
                        {
                            "id": "d7-m5",
                            "name": "<nama>",
                            "grade_id": "Kelas XI MIPA 3",
                            "grade_en": "Grade 11 Natural Science",
                            "photo": "default-avatar.png"
                        }
                    ]
                },
                {
                    "id": 8,
                    "name_id": "<departemens>",
                    "name_en": "<departemens>",
                    "icon": "fa-shield-halved",
                    "coordinator": {
                        "id": "d8-head",
                        "name": "<nama>",
                        "role_id": "Koordinator Divisi",
                        "role_en": "Head Coordinator",
                        "division_id": "<departemens>",
                        "division_en": "<departemens>",
                        "grade_id": "Kelas XII MIPA 2",
                        "grade_en": "Grade 12 Natural Science",
                        "photo": "default-avatar.png",
                        "bio_id": "Menegakkan ketertiban kampus yang kondusif, nyaman, dan mengawal komitmen anti-perundungan.",
                        "bio_en": "Ensuring an orderly, safe, and supportive school environment while upholding anti-bullying.",
                        "responsibilities_id": [
                            "Patroli Ketertiban Kampus",
                            "Satgas Anti-Bullying Ramah Siswa",
                            "Pengawalan Acara & Tamu Sekolah"
                        ],
                        "responsibilities_en": [
                            "Campus Discipline Patrol",
                            "Friendly Anti-Bullying Task Force",
                            "Event Safety & Guest Escorts"
                        ],
                        "contact": "@rizkyramadhan"
                    },
                    "coCoordinator": {
                        "id": "d8-cohead",
                        "name": "<nama>",
                        "role_id": "Wakil Koordinator",
                        "role_en": "Vice Coordinator",
                        "division_id": "<departemens>",
                        "division_en": "<departemens>",
                        "grade_id": "Kelas XI MIPA 3",
                        "grade_en": "Grade 11 Natural Science",
                        "photo": "default-avatar.png",
                        "bio_id": "Menciptakan ruang sekolah yang aman, saling menghargai, dan responsif terhadap pengaduan siswa.",
                        "bio_en": "Fostering an inclusive safe space with responsive student grievance handling.",
                        "responsibilities_id": [
                            "Pos Pengaduan & Perlindungan Teman Sebaya",
                            "Disiplin Ketepatan Waktu",
                            "Edukasi Keselamatan Siswa"
                        ],
                        "responsibilities_en": [
                            "Peer Safe-Reporting Desk",
                            "Punctuality & Discipline Coaching",
                            "Student Safety Education"
                        ],
                        "contact": "@taniamhr"
                    },
                    "members": [
                        {
                            "id": "d8-m1",
                            "name": "<nama>",
                            "grade_id": "Kelas XI IPS 1",
                            "grade_en": "Grade 11 Social Studies",
                            "photo": "default-avatar.png"
                        },
                        {
                            "id": "d8-m2",
                            "name": "<nama>",
                            "grade_id": "Kelas X-C",
                            "grade_en": "Grade 10-C",
                            "photo": "default-avatar.png"
                        },
                        {
                            "id": "d8-m3",
                            "name": "<nama>",
                            "grade_id": "Kelas X-A",
                            "grade_en": "Grade 10-A",
                            "photo": "default-avatar.png"
                        },
                        {
                            "id": "d8-m4",
                            "name": "<nama>",
                            "grade_id": "Kelas XI MIPA 1",
                            "grade_en": "Grade 11 Natural Science",
                            "photo": "default-avatar.png"
                        },
                        {
                            "id": "d8-m5",
                            "name": "<nama>",
                            "grade_id": "Kelas XII IPS 2",
                            "grade_en": "Grade 12 Social Studies",
                            "photo": "default-avatar.png"
                        }
                    ]
                }
            ]
        };

        window.getAllStructureMembers = function () {
            const isEn = window.currentLang === 'en';
            const data = window.srcStructureData;
            if (!data) return [];

            const list = [];

            // 1. Advisor
            if (data.advisor) {
                list.push({
                    id: data.advisor.id,
                    name: data.advisor.name,
                    role: isEn ? data.advisor.role_en : data.advisor.role_id,
                    division: isEn ? data.advisor.division_en : data.advisor.division_id,
                    divisionKey: 'advisor',
                    grade: isEn ? data.advisor.grade_en : data.advisor.grade_id,
                    photo: data.advisor.photo,
                    bio: isEn ? data.advisor.bio_en : data.advisor.bio_id,
                    responsibilities: isEn ? data.advisor.responsibilities_en : data.advisor.responsibilities_id,
                    contact: data.advisor.contact,
                    badge: data.advisor.badge || 'Advisor'
                });
            }

            // 2. Presidium
            (data.presidium || []).forEach(p => {
                list.push({
                    id: p.id,
                    name: p.name,
                    role: isEn ? p.role_en : p.role_id,
                    division: isEn ? p.division_en : p.division_id,
                    divisionKey: 'presidium',
                    grade: isEn ? p.grade_en : p.grade_id,
                    photo: p.photo,
                    bio: isEn ? p.bio_en : p.bio_id,
                    responsibilities: isEn ? p.responsibilities_en : p.responsibilities_id,
                    contact: p.contact,
                    badge: p.badge || 'Presidium'
                });
            });

            // 3. Departments Coordinators & Staff
            (data.departments || []).forEach(dept => {
                const deptName = isEn ? dept.name_en : dept.name_id;
                const deptKey = String(dept.id);

                // Coordinator
                if (dept.coordinator) {
                    list.push({
                        id: dept.coordinator.id,
                        name: dept.coordinator.name,
                        role: isEn ? dept.coordinator.role_en : dept.coordinator.role_id,
                        division: deptName,
                        divisionKey: deptKey,
                        grade: isEn ? dept.coordinator.grade_en : dept.coordinator.grade_id,
                        photo: dept.coordinator.photo,
                        bio: isEn ? dept.coordinator.bio_en : dept.coordinator.bio_id,
                        responsibilities: isEn ? dept.coordinator.responsibilities_en : dept.coordinator.responsibilities_id,
                        contact: dept.coordinator.contact,
                        badge: 'Coordinator'
                    });
                }

                // Co-Coordinator
                if (dept.coCoordinator) {
                    list.push({
                        id: dept.coCoordinator.id,
                        name: dept.coCoordinator.name,
                        role: isEn ? dept.coCoordinator.role_en : dept.coCoordinator.role_id,
                        division: deptName,
                        divisionKey: deptKey,
                        grade: isEn ? dept.coCoordinator.grade_en : dept.coCoordinator.grade_id,
                        photo: dept.coCoordinator.photo,
                        bio: isEn ? dept.coCoordinator.bio_en : dept.coCoordinator.bio_id,
                        responsibilities: isEn ? dept.coCoordinator.responsibilities_en : dept.coCoordinator.responsibilities_id,
                        contact: dept.coCoordinator.contact,
                        badge: 'Vice Coordinator'
                    });
                }

                // Staff
                (dept.members || []).forEach((m, idx) => {
                    list.push({
                        id: m.id,
                        name: m.name,
                        role: isEn ? 'Divisional Staff' : 'Staff Divisi',
                        division: deptName,
                        divisionKey: deptKey,
                        grade: isEn ? (m.grade_en || m.grade_id) : (m.grade_id || m.grade_en),
                        photo: m.photo,
                        bio: isEn ? `Dedicated member supporting ${deptName} initiatives with high enthusiasm and teamwork.` : `Anggota aktif yang berdedikasi mendukung seluruh program kerja ${deptName} secara solid dan bertanggung jawab.`,
                        responsibilities: isEn ? [
                            `Executing divisional action items for ${deptName}`,
                            "Student mobilization and on-site event logistics",
                            "Active contribution to council assemblies"
                        ] : [
                            `Pelaksana teknis agenda kerja divisi ${deptName}`,
                            "Mobilisasi siswa dan logistik kegiatan di lapangan",
                            "Kontribusi aktif dalam sidang dan evaluasi rutin"
                        ],
                        contact: `@${m.name.toLowerCase().replace(/[^a-z0-9]/g, '')}`,
                        badge: 'Staff'
                    });
                });
            });

            return list;
        };

        // ==========================================
        // SCROLL-DRIVEN PRESENTATION ENGINE (11 SEPARATE SLIDES)
        // ==========================================
        window.currentStructureSlide = 0;
        window.structureSlideTitles = [
            { id: "01 · Dewan Pembina SRC", en: "01 · SRC Advisory Board" },
            { id: "02 · Presidium & Pimpinan Utama", en: "02 · Executive Presidium" },
            { id: "03 · <departemens>", en: "03 · <departemens>" },
            { id: "04 · <departemens>", en: "04 · <departemens>" },
            { id: "05 · <departemens>", en: "05 · <departemens>" },
            { id: "06 · <departemens>", en: "06 · <departemens>" },
            { id: "07 · <departemens>", en: "07 · <departemens>" },
            { id: "08 · <departemens>", en: "08 · <departemens>" },
            { id: "09 · <departemens>", en: "09 · <departemens>" },
            { id: "10 · <departemens>", en: "10 · <departemens>" },
            { id: "11 · Member of SRC", en: "11 · Member of SRC" }
        ];

        window.renderStructureDotsBar = function () {
            const dotsBar = document.getElementById('struct-dots-bar');
            if (!dotsBar) return;
            const isEn = window.currentLang === 'en';

            dotsBar.innerHTML = window.structureSlideTitles.map((titleObj, idx) => {
                const title = isEn ? titleObj.en : titleObj.id;
                const isActive = (idx === window.currentStructureSlide);
                return `
                    <button type="button" onclick="window.goToStructureSlide(${idx})"
                        class="struct-step-dot w-2 sm:w-2.5 h-2 sm:h-2.5 rounded-full bg-slate-300 transition-all duration-300 flex-shrink-0 ${isActive ? 'active' : ''}"
                        title="${escapeHtml(title)}" aria-label="${escapeHtml(title)}">
                    </button>
                `;
            }).join('');
        };

        window.setStructureActiveSlide = function (targetIdx) {
            if (targetIdx < 0) targetIdx = 0;
            if (targetIdx > 10) targetIdx = 10;

            window.currentStructureSlide = targetIdx;

            // Update slide visibility classes for all 11 slides
            for (let i = 0; i < 11; i++) {
                const slide = document.getElementById(`struct-slide-${i}`);
                if (!slide) continue;
                slide.classList.remove('active', 'passed');
                if (i === targetIdx) {
                    slide.classList.add('active');
                } else if (i < targetIdx) {
                    slide.classList.add('passed');
                }
            }

            // Update dots
            const dots = document.querySelectorAll('.struct-step-dot');
            dots.forEach((dot, idx) => {
                dot.classList.toggle('active', idx === targetIdx);
            });

            // Update title text
            const titleEl = document.getElementById('structure-slide-title');
            if (titleEl) {
                const isEn = window.currentLang === 'en';
                const info = window.structureSlideTitles[targetIdx] || window.structureSlideTitles[0];
                titleEl.innerText = isEn ? info.en : info.id;
            }

            // Update bottom page counter
            const counterEl = document.getElementById('struct-page-counter');
            if (counterEl) {
                const isEn = window.currentLang === 'en';
                counterEl.innerText = isEn ? `Slide ${targetIdx + 1} of 11` : `Halaman ${targetIdx + 1} dari 11`;
            }
        };

        // Scroll to specific structure slide by calculating scroll progress inside #structure
        window.goToStructureSlide = function (targetIdx) {
            if (targetIdx < 0) targetIdx = 0;
            if (targetIdx > 10) targetIdx = 10;

            const sec = document.getElementById('structure');
            if (!sec) {
                window.setStructureActiveSlide(targetIdx);
                return;
            }

            const totalDist = sec.offsetHeight - window.innerHeight;
            if (totalDist <= 0) {
                window.setStructureActiveSlide(targetIdx);
                return;
            }

            const secTop = sec.getBoundingClientRect().top + (window.scrollY || window.pageYOffset || 0);
            const s10Threshold = 0.62;
            let targetProgress = 0;

            if (targetIdx < 10) {
                targetProgress = ((targetIdx + 0.5) / 10) * s10Threshold;
            } else {
                targetProgress = s10Threshold + 0.18;
            }

            const targetScrollY = secTop + targetProgress * totalDist;

            if (window.lenis) {
                window.lenis.scrollTo(targetScrollY, { duration: 0.8 });
            } else {
                window.scrollTo({ top: targetScrollY, behavior: 'smooth' });
            }
        };

        window.goToPrevStructureSlide = function () {
            if (window.currentStructureSlide <= 0) {
                const aboutEl = document.getElementById('about');
                if (aboutEl) {
                    if (window.lenis) {
                        window.lenis.scrollTo(aboutEl, { offset: -70, duration: 1.0 });
                    } else {
                        aboutEl.scrollIntoView({ behavior: 'smooth' });
                    }
                }
                return;
            }
            window.goToStructureSlide(window.currentStructureSlide - 1);
        };

        window.goToNextStructureSlide = function () {
            if (window.currentStructureSlide >= 10) {
                const finEl = document.getElementById('financial');
                if (finEl) {
                    if (window.lenis) {
                        window.lenis.scrollTo(finEl, { offset: -70, duration: 1.0 });
                    } else {
                        finEl.scrollIntoView({ behavior: 'smooth' });
                    }
                }
                return;
            }
            window.goToStructureSlide(window.currentStructureSlide + 1);
        };

        // Synchronize slide reveal with natural page scroll position
        window.syncStructureScroll = function () {
            const sec = document.getElementById('structure');
            if (!sec) return;

            const rect = sec.getBoundingClientRect();
            const totalDist = sec.offsetHeight - window.innerHeight;
            if (totalDist <= 0) return;

            const memberContainer = document.getElementById('member-of-src-container');
            const stageEl = document.getElementById('structure-stage');

            // Above section: show Slide 0
            if (rect.top > 0) {
                if (window.currentStructureSlide !== 0) {
                    window.setStructureActiveSlide(0);
                }
                if (memberContainer) memberContainer.style.transform = 'translate3d(0, 0, 0)';
                return;
            }

            // Below section: show Slide 10 at bottom of scroll
            if (rect.bottom <= window.innerHeight) {
                if (window.currentStructureSlide !== 10) {
                    window.setStructureActiveSlide(10);
                }
                if (memberContainer && stageEl) {
                    const maxScrollY = Math.max(0, memberContainer.offsetHeight - stageEl.offsetHeight + 32);
                    memberContainer.style.transform = `translate3d(0, -${maxScrollY.toFixed(1)}px, 0)`;
                }
                return;
            }

            // Pinned inside section: map scroll progress 0..1
            const scrolledDist = -rect.top;
            const progress = Math.max(0, Math.min(0.9999, scrolledDist / totalDist));

            // Section is lengthened specifically for Slide 10 (Member of SRC):
            // Slides 0 to 9 take the first 62% of scroll distance. Slide 10 takes the remaining 38%.
            const s10Threshold = 0.62;
            let targetSlide = 0;

            if (progress < s10Threshold) {
                targetSlide = Math.min(9, Math.floor((progress / s10Threshold) * 10));
                if (memberContainer) {
                    memberContainer.style.transform = 'translate3d(0, 0, 0)';
                }
            } else {
                targetSlide = 10;
                if (memberContainer && stageEl) {
                    const s10Progress = (progress - s10Threshold) / (1 - s10Threshold);
                    const maxScrollY = Math.max(0, memberContainer.offsetHeight - stageEl.offsetHeight + 32);
                    const currentY = -s10Progress * maxScrollY;
                    memberContainer.style.transform = `translate3d(0, ${currentY.toFixed(1)}px, 0)`;
                }
            }

            if (targetSlide !== window.currentStructureSlide) {
                window.setStructureActiveSlide(targetSlide);
            }
        };

        window.initStructureWheelController = function () {
            // Disabled wheel trapping - natural page scroll with Lenis powers the presentation reveal
        };

        // Render Structure Hierarchy (Advisor, Presidium & 8 Separate Department Slides)
        window.renderStructureHierarchy = function () {
            const isEn = window.currentLang === 'en';
            const data = window.srcStructureData;
            if (!data) return;

            // Verified Badge Icon (Matching User Brief)
            const verifiedBadgeSvg = `
                <svg class="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-600 fill-current inline-block flex-shrink-0" viewBox="0 0 24 24" aria-label="Verified">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C10.6 2 9.4 2.7 8.7 3.8C7.5 3.7 6.3 4.3 5.6 5.3C4.9 6.3 4.8 7.6 5.3 8.7C4.4 9.6 4 10.9 4.2 12.2C4.4 13.5 5.2 14.6 6.4 15.1C6.3 16.4 7 17.6 8.1 18.2C9.2 18.8 10.5 18.6 11.4 17.8C12.3 18.6 13.6 18.8 14.7 18.2C15.8 17.6 16.5 16.4 16.4 15.1C17.6 14.6 18.4 13.5 18.6 12.2C18.8 10.9 18.4 9.6 17.5 8.7C18 7.6 17.9 6.3 17.2 5.3C16.5 4.3 15.3 3.7 14.1 3.8C13.4 2.7 12.2 2 12 2ZM10.5 14.3L7.7 11.5L8.8 10.4L10.5 12.1L15.2 7.4L16.3 8.5L10.5 14.3Z"/>
                </svg>
            `;
            const verifiedBadgeSvgSm = `
                <svg class="w-2.5 h-2.5 sm:w-3 sm:h-3 text-emerald-600 fill-current inline-block flex-shrink-0" viewBox="0 0 24 24" aria-label="Verified">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C10.6 2 9.4 2.7 8.7 3.8C7.5 3.7 6.3 4.3 5.6 5.3C4.9 6.3 4.8 7.6 5.3 8.7C4.4 9.6 4 10.9 4.2 12.2C4.4 13.5 5.2 14.6 6.4 15.1C6.3 16.4 7 17.6 8.1 18.2C9.2 18.8 10.5 18.6 11.4 17.8C12.3 18.6 13.6 18.8 14.7 18.2C15.8 17.6 16.5 16.4 16.4 15.1C17.6 14.6 18.4 13.5 18.6 12.2C18.8 10.9 18.4 9.6 17.5 8.7C18 7.6 17.9 6.3 17.2 5.3C16.5 4.3 15.3 3.7 14.1 3.8C13.4 2.7 12.2 2 12 2ZM10.5 14.3L7.7 11.5L8.8 10.4L10.5 12.1L15.2 7.4L16.3 8.5L10.5 14.3Z"/>
                </svg>
            `;

            // Tier 1: Advisor (Matching Slide 0 in User Diagram: Left Card, Right Pills)
            const advContainer = document.getElementById('advisor-card-container');
            if (advContainer && data.advisor) {
                const adv = data.advisor;
                const role = isEn ? adv.role_en : adv.role_id;
                const grade = isEn ? adv.grade_en : adv.grade_id;
                const bio = isEn ? adv.bio_en : adv.bio_id;

                advContainer.innerHTML = `
                    <div class="chart-tree-canvas max-w-xl mx-auto">
                        <div class="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-10">
                            <!-- Left: Advisor Card with Modern Double-Bezel Design & Verified Badge -->
                            <div onclick="window.openMemberModal('${adv.id}')" class="chart-card w-48 sm:w-56 flex-shrink-0 cursor-pointer" style="animation-delay: 90ms;">
                                <div class="chart-card-inner">
                                    <div class="chart-card-photo-box">
                                        <img src="${adv.photo}" alt="${escapeHtml(adv.name)}" class="chart-card-img">
                                    </div>
                                    <div class="chart-card-body">
                                        <div class="chart-card-name-row">
                                            <span class="chart-card-name-text">${escapeHtml(adv.name)}</span>
                                            ${verifiedBadgeSvg}
                                        </div>
                                        <p class="chart-card-desc-text">${role} · ${escapeHtml(grade)}</p>
                                    </div>
                                </div>
                            </div>

                            <!-- Right: SRC Advisor Pill & Name Pill Stack -->
                            <div class="flex flex-col items-center sm:items-start text-center sm:text-left space-y-3">
                                <div class="chart-header-pill !text-base sm:!text-lg !py-2.5 !px-8 shadow-sm">
                                    <span>SRC Advisor</span>
                                </div>
                                <div class="chart-header-pill !text-sm sm:!text-base !py-2 !px-7 shadow-sm !bg-slate-50">
                                    <span>${escapeHtml(adv.name)}</span>
                                </div>
                                <div class="p-4 rounded-2xl bg-white/85 backdrop-blur-md border border-slate-200/90 text-xs text-slate-600 italic max-w-xs mt-2 shadow-xs leading-relaxed">
                                    "${escapeHtml(bio)}"
                                </div>
                                <span class="text-xs font-semibold text-brand-green">${escapeHtml(grade)}</span>
                            </div>
                        </div>
                    </div>
                `;
            }

            // Tier 2: Presidium (Matching Slide 1 in User Diagram: 4 cards with dashed connector tree & arrows)
            const presGrid = document.getElementById('presidium-cards-grid');
            if (presGrid && data.presidium) {
                const cardsHtml = data.presidium.map((p, pIdx) => {
                    const role = isEn ? p.role_en : p.role_id;
                    const cardDelay = 80 + (pIdx * 75);
                    return `
                        <div onclick="window.openMemberModal('${p.id}')" class="chart-card group min-w-0" style="animation-delay: ${cardDelay}ms;">
                            <div class="chart-card-inner">
                                <div class="chart-card-photo-box">
                                    <img src="${p.photo}" alt="${escapeHtml(p.name)}" class="chart-card-img">
                                </div>
                                <div class="chart-card-body">
                                    <div class="chart-card-name-row">
                                        <span class="chart-card-name-text">${escapeHtml(p.name)}</span>
                                        ${verifiedBadgeSvg}
                                    </div>
                                    <p class="chart-card-desc-text">${role}</p>
                                </div>
                            </div>
                        </div>
                    `;
                }).join('');

                presGrid.innerHTML = `
                    <div class="chart-tree-canvas max-w-4xl mx-auto">
                        <div class="text-center">
                            <div class="chart-header-pill">Presidium</div>
                        </div>

                        <!-- Dashed Connector lines with arrows (Clean Slate tone, no harsh black lines) -->
                        <svg class="w-full max-w-[640px] h-9 mx-auto fill-none my-1" stroke-width="2">
                            <defs>
                                <marker id="arrow-down-pres" viewBox="0 0 6 6" refX="3" refY="3" markerWidth="6" markerHeight="6" orient="auto">
                                    <polygon points="0,0 6,3 0,6" fill="#64748b" />
                                </marker>
                            </defs>
                            <!-- 1 Central dashed stem down from pill -->
                            <line x1="50%" y1="0" x2="50%" y2="16" stroke="#94a3b8" stroke-dasharray="4,4" />
                            <!-- Horizontal dashed connector -->
                            <line x1="12.5%" y1="16" x2="87.5%" y2="16" stroke="#94a3b8" stroke-dasharray="4,4" />
                            <!-- 4 drops with arrows into cards -->
                            <line x1="12.5%" y1="16" x2="12.5%" y2="34" stroke="#94a3b8" stroke-dasharray="4,4" marker-end="url(#arrow-down-pres)" />
                            <line x1="37.5%" y1="16" x2="37.5%" y2="34" stroke="#94a3b8" stroke-dasharray="4,4" marker-end="url(#arrow-down-pres)" />
                            <line x1="62.5%" y1="16" x2="62.5%" y2="34" stroke="#94a3b8" stroke-dasharray="4,4" marker-end="url(#arrow-down-pres)" />
                            <line x1="87.5%" y1="16" x2="87.5%" y2="34" stroke="#94a3b8" stroke-dasharray="4,4" marker-end="url(#arrow-down-pres)" />
                        </svg>

                        <div class="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 max-w-[760px] mx-auto">
                            ${cardsHtml}
                        </div>
                    </div>
                `;
            }

            // Tier 3: 8 Separate Department Slides (Matching Slides 2 to 9 in User Diagram)
            if (data.departments) {
                data.departments.forEach((dept, dIdx) => {
                    const slideIdx = dIdx + 2;
                    const container = document.getElementById(`dept-slide-container-${slideIdx}`);
                    if (!container) return;

                    const deptName = isEn ? dept.name_en : dept.name_id;
                    const coord = dept.coordinator;
                    const coCoord = dept.coCoordinator;
                    const coordRole = isEn ? coord.role_en : coord.role_id;
                    const coCoordRole = isEn ? coCoord.role_en : coCoord.role_id;
                    const members = dept.members || [];

                    const staffCardsHtml = members.map((m, mIdx) => {
                        const mDelay = 220 + (mIdx * 65);
                        return `
                            <div onclick="window.openMemberModal('${m.id}')" class="chart-card group min-w-0" style="animation-delay: ${mDelay}ms;">
                                <div class="chart-card-inner">
                                    <div class="chart-card-photo-box">
                                        <img src="${m.photo}" alt="${escapeHtml(m.name)}" class="chart-card-img">
                                    </div>
                                    <div class="chart-card-body">
                                        <div class="chart-card-name-row">
                                            <span class="chart-card-name-text">${escapeHtml(m.name)}</span>
                                            ${verifiedBadgeSvg}
                                        </div>
                                        <p class="chart-card-desc-text">${isEn ? 'Staff Member' : 'Staf Divisi'}</p>
                                    </div>
                                </div>
                            </div>
                        `;
                    }).join('');

                    container.innerHTML = `
                        <div class="chart-tree-canvas max-w-4xl mx-auto">
                            <!-- Top Department Pill -->
                            <div class="text-center">
                                <div class="chart-header-pill">
                                    <i class="fa-solid ${dept.icon} mr-1.5 text-brand-green"></i>
                                    <span>${escapeHtml(deptName)}</span>
                                </div>
                            </div>

                            <!-- Row 1: 2 Coordinator Cards centered side-by-side with staggered reveal -->
                            <div class="flex justify-center gap-4 sm:gap-6 max-w-md mx-auto mt-2">
                                <div onclick="window.openMemberModal('${coord.id}')" class="chart-card w-36 sm:w-44 group min-w-0" style="animation-delay: 85ms;">
                                    <div class="chart-card-inner">
                                        <div class="chart-card-photo-box">
                                            <img src="${coord.photo}" alt="${escapeHtml(coord.name)}" class="chart-card-img">
                                        </div>
                                        <div class="chart-card-body">
                                            <div class="chart-card-name-row">
                                                <span class="chart-card-name-text">${escapeHtml(coord.name)}</span>
                                                ${verifiedBadgeSvg}
                                            </div>
                                            <p class="chart-card-desc-text">${coordRole}</p>
                                        </div>
                                    </div>
                                </div>

                                <div onclick="window.openMemberModal('${coCoord.id}')" class="chart-card w-36 sm:w-44 group min-w-0" style="animation-delay: 155ms;">
                                    <div class="chart-card-inner">
                                        <div class="chart-card-photo-box">
                                            <img src="${coCoord.photo}" alt="${escapeHtml(coCoord.name)}" class="chart-card-img">
                                        </div>
                                        <div class="chart-card-body">
                                            <div class="chart-card-name-row">
                                                <span class="chart-card-name-text">${escapeHtml(coCoord.name)}</span>
                                                ${verifiedBadgeSvg}
                                            </div>
                                            <p class="chart-card-desc-text">${coCoordRole}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <!-- Tree lines from Coordinators to 5 Staff Cards (Clean Slate tone, no harsh black lines) -->
                            <svg class="w-full max-w-[640px] h-9 mx-auto fill-none my-1" stroke-width="2">
                                <defs>
                                    <marker id="arrow-dept-${slideIdx}" viewBox="0 0 6 6" refX="3" refY="3" markerWidth="6" markerHeight="6" orient="auto">
                                        <polygon points="0,0 6,3 0,6" fill="#64748b" />
                                    </marker>
                                </defs>
                                <line x1="38%" y1="0" x2="38%" y2="15" stroke="#94a3b8" stroke-dasharray="4,4" />
                                <line x1="62%" y1="0" x2="62%" y2="15" stroke="#94a3b8" stroke-dasharray="4,4" />
                                <line x1="38%" y1="15" x2="62%" y2="15" stroke="#94a3b8" stroke-dasharray="4,4" />
                                <line x1="50%" y1="15" x2="50%" y2="33" stroke="#94a3b8" stroke-dasharray="4,4" marker-end="url(#arrow-dept-${slideIdx})" />
                                <line x1="10%" y1="33" x2="90%" y2="33" stroke="#94a3b8" stroke-dasharray="4,4" />
                            </svg>

                            <!-- Row 2: 5 Staff Cards in a row with staggered cascade reveal -->
                            <div class="grid grid-cols-2 sm:grid-cols-5 gap-2.5 sm:gap-3.5 max-w-[760px] mx-auto">
                                ${staffCardsHtml}
                            </div>
                        </div>
                    `;
                });
            }

            // Tier 4: Member Of SRC (Matching Slide 10 in User Diagram: 8 columns x 5 rows = 40 cards, Full Width, Zero Horizontal Scroll)
            const memberContainer = document.getElementById('member-of-src-container');
            if (memberContainer && data.departments) {
                const staffList = [];
                data.departments.forEach(d => {
                    const deptTitle = isEn ? d.name_en.split('&')[0].trim() : d.name_id.split('&')[0].trim();
                    (d.members || []).forEach(m => {
                        staffList.push({
                            ...m,
                            deptLabel: deptTitle
                        });
                    });
                });

                const memberCardsHtml = staffList.map((m, sIdx) => {
                    const row = Math.floor(sIdx / 8);
                    const col = sIdx % 8;
                    const sDelay = 35 + (row * 35) + (col * 20);
                    return `
                        <div onclick="window.openMemberModal('${m.id}')" class="chart-card chart-card-member group min-w-0 w-full" style="animation-delay: ${sDelay}ms;">
                            <div class="chart-card-inner">
                                <div class="chart-card-photo-box">
                                    <img src="${m.photo}" alt="${escapeHtml(m.name)}" class="chart-card-img">
                                </div>
                                <div class="chart-card-body">
                                    <div class="chart-card-name-row">
                                        <span class="chart-card-name-text">${escapeHtml(m.name)}</span>
                                        ${verifiedBadgeSvgSm}
                                    </div>
                                    <p class="chart-card-desc-text">${escapeHtml(m.deptLabel || 'Member')}</p>
                                </div>
                            </div>
                        </div>
                    `;
                }).join('');

                memberContainer.innerHTML = `
                    <div class="chart-tree-canvas member-grid-full w-full max-w-7xl mx-auto px-1 sm:px-3">
                        <div class="text-center mb-3">
                            <div class="chart-header-pill">Member Of SRC</div>
                        </div>
                        <div class="grid grid-cols-4 sm:grid-cols-8 gap-2 sm:gap-2.5 lg:gap-3 w-full overflow-hidden p-1">
                            ${memberCardsHtml}
                        </div>
                    </div>
                `;
            }

            // Re-apply active slide visibility
            window.setStructureActiveSlide(window.currentStructureSlide || 0);
        };

        // Render Member Filter Pills (Tier 4)
        window.renderStructureFilterPills = function () {
            const container = document.getElementById('member-filter-pills');
            if (!container) return;
            const isEn = window.currentLang === 'en';

            const pills = [
                { id: 'all', label: isEn ? 'All Members' : 'Semua Anggota' },
                { id: 'presidium', label: 'Presidium' }
            ];

            (window.srcStructureData.departments || []).forEach(d => {
                pills.push({
                    id: String(d.id),
                    label: isEn ? d.name_en.split('&')[0].trim() : d.name_id.split('&')[0].trim()
                });
            });

            container.innerHTML = pills.map(p => {
                const isActive = (window.activeStructureDeptFilter === p.id);
                return `
                    <button type="button" onclick="window.setMemberDivisionFilter('${p.id}')"
                        class="px-3.5 py-1.5 rounded-full whitespace-nowrap transition-all font-semibold text-xs ${
                            isActive
                                ? 'bg-brand-green text-white shadow-xs'
                                : 'bg-white/80 text-slate-600 hover:bg-white hover:text-slate-900 border border-slate-200/80'
                        }">
                        ${escapeHtml(p.label)}
                    </button>
                `;
            }).join('');
        };

        // Set Division Filter for Tier 4
        window.setMemberDivisionFilter = function (filterId) {
            window.activeStructureDeptFilter = filterId;
            window.renderStructureFilterPills();
            window.filterStructureMembers();
        };

        // Filter and Render Members in Tier 4
        window.filterStructureMembers = function () {
            const query = (document.getElementById('member-search-input')?.value || '').toLowerCase().trim();
            const filterKey = window.activeStructureDeptFilter || 'all';
            const allMembers = window.getAllStructureMembers();

            const filtered = allMembers.filter(m => {
                // Division filter match
                if (filterKey !== 'all') {
                    if (filterKey === 'presidium' && m.divisionKey !== 'presidium') return false;
                    if (filterKey !== 'presidium' && m.divisionKey !== filterKey) return false;
                }

                // Query filter match
                if (query) {
                    const matchName = m.name.toLowerCase().includes(query);
                    const matchRole = m.role.toLowerCase().includes(query);
                    const matchDiv = m.division.toLowerCase().includes(query);
                    const matchGrade = (m.grade || '').toLowerCase().includes(query);
                    return matchName || matchRole || matchDiv || matchGrade;
                }

                return true;
            });

            const grid = document.getElementById('structure-members-grid');
            if (!grid) return;

            if (filtered.length === 0) {
                grid.innerHTML = `
                    <div class="col-span-full py-8 text-center text-slate-400">
                        <i class="fa-solid fa-user-slash text-2xl mb-2"></i>
                        <p class="text-xs font-semibold">Tidak ditemukan anggota yang sesuai kriteria pencarian.</p>
                    </div>
                `;
                return;
            }

            grid.innerHTML = filtered.map(m => {
                return `
                    <div onclick="window.openMemberModal('${m.id}')"
                        class="org-mini-card group">
                        <img src="${m.photo}" alt="${escapeHtml(m.name)}"
                            class="w-12 h-12 sm:w-14 sm:h-14 rounded-full mx-auto object-cover ring-2 ring-slate-100 group-hover:ring-emerald-400 mb-1.5 transition-all">
                        <div class="text-[11px] font-bold text-slate-800 group-hover:text-brand-green truncate leading-tight">
                            ${escapeHtml(m.name)}
                        </div>
                        <div class="text-[9px] font-extrabold uppercase text-brand-green truncate mt-0.5">
                            ${escapeHtml(m.role)}
                        </div>
                        <div class="text-[9px] text-slate-400 truncate">
                            ${escapeHtml(m.grade || '')}
                        </div>
                    </div>
                `;
            }).join('');
        };

        // Open Interactive Member Detail Modal (Popout Card)
        window.openMemberModal = function (memberId) {
            const allMembers = window.getAllStructureMembers();
            const member = allMembers.find(m => m.id === memberId);
            if (!member) return;

            const modal = document.getElementById('member-detail-modal');
            const content = document.getElementById('member-modal-content');
            if (!modal || !content) return;

            const isEn = window.currentLang === 'en';
            const verifiedBadgeSvg = `
                <svg class="w-4 h-4 text-emerald-600 fill-current inline-block flex-shrink-0" viewBox="0 0 24 24" aria-label="Verified">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C10.6 2 9.4 2.7 8.7 3.8C7.5 3.7 6.3 4.3 5.6 5.3C4.9 6.3 4.8 7.6 5.3 8.7C4.4 9.6 4 10.9 4.2 12.2C4.4 13.5 5.2 14.6 6.4 15.1C6.3 16.4 7 17.6 8.1 18.2C9.2 18.8 10.5 18.6 11.4 17.8C12.3 18.6 13.6 18.8 14.7 18.2C15.8 17.6 16.5 16.4 16.4 15.1C17.6 14.6 18.4 13.5 18.6 12.2C18.8 10.9 18.4 9.6 17.5 8.7C18 7.6 17.9 6.3 17.2 5.3C16.5 4.3 15.3 3.7 14.1 3.8C13.4 2.7 12.2 2 12 2ZM10.5 14.3L7.7 11.5L8.8 10.4L10.5 12.1L15.2 7.4L16.3 8.5L10.5 14.3Z"/>
                </svg>
            `;

            content.innerHTML = `
                <div class="modal-dialog-anim relative w-full max-w-2xl sm:max-w-3xl bg-white/95 backdrop-blur-2xl rounded-3xl sm:rounded-[32px] p-6 sm:p-8 shadow-2xl border border-white/90 text-left max-h-[90vh] overflow-y-auto">
                    <!-- Single Clean Close Button at Top-Right -->
                    <button onclick="window.closeMemberModal()"
                        class="absolute top-4 right-4 sm:top-5 sm:right-5 w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-500 hover:text-slate-800 flex items-center justify-center transition-colors shadow-xs z-20"
                        aria-label="Tutup Profile Modal">
                        <i class="fa-solid fa-xmark text-sm sm:text-base"></i>
                    </button>

                    <div class="flex flex-col sm:flex-row items-center sm:items-stretch gap-6 sm:gap-8">
                        <!-- Left: Avatar Card (Matching Sarah Swift Profile Card) -->
                        <div class="chart-card w-48 sm:w-56 flex-shrink-0 cursor-default shadow-md self-center sm:self-start">
                            <div class="chart-card-inner">
                                <div class="chart-card-photo-box">
                                    <img src="${member.photo}" alt="${escapeHtml(member.name)}" class="chart-card-img">
                                </div>
                                <div class="chart-card-body">
                                    <div class="chart-card-name-row">
                                        <span class="chart-card-name-text !text-sm">${escapeHtml(member.name)}</span>
                                        ${verifiedBadgeSvg}
                                    </div>
                                    <p class="chart-card-desc-text">${escapeHtml(member.role)}</p>
                                </div>
                            </div>
                        </div>

                        <!-- Right: Details Column (Spacious, Elegant Typography) -->
                        <div class="min-w-0 flex-1 flex flex-col justify-between space-y-4 text-left w-full">
                            <!-- Header Info -->
                            <div class="pr-8">
                                <div class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-emerald-50 text-brand-green border border-emerald-200/60 mb-2">
                                    <i class="fa-solid fa-shield-halved text-[10px]"></i>
                                    <span>${escapeHtml(member.division)}</span>
                                </div>
                                <h3 class="text-xl sm:text-2xl md:text-3xl font-serif font-bold text-slate-900 leading-tight">
                                    ${escapeHtml(member.name)}
                                </h3>
                                <div class="flex items-center gap-2 mt-1.5 text-xs sm:text-sm text-slate-500 font-medium">
                                    <span class="text-brand-green font-semibold">${escapeHtml(member.role)}</span>
                                    <span>•</span>
                                    <span>${escapeHtml(member.grade || 'Siswa BM 400')}</span>
                                </div>
                            </div>

                            <!-- Description Quote Box -->
                            <div class="p-4 rounded-2xl bg-slate-50/90 border border-slate-200/80 text-xs sm:text-sm text-slate-600 italic leading-relaxed">
                                "${escapeHtml(member.bio)}"
                            </div>

                            <!-- Tasks & Responsibilities -->
                            <div class="p-4 rounded-2xl bg-white border border-slate-200/80 shadow-xs space-y-2">
                                <div class="text-[10px] sm:text-xs font-extrabold uppercase tracking-wider text-slate-400">
                                    Tugas &amp; Tanggung Jawab
                                </div>
                                <ul class="space-y-1.5">
                                    ${(member.responsibilities || []).map(r => `
                                        <li class="flex items-start gap-2 text-xs sm:text-sm text-slate-700">
                                            <span class="text-brand-green font-bold flex-shrink-0">✔</span>
                                            <span>${escapeHtml(r)}</span>
                                        </li>
                                    `).join('')}
                                </ul>
                            </div>

                            <!-- WhatsApp Contact Action -->
                            ${member.whatsapp ? `
                                <div>
                                    <a href="https://wa.me/${member.whatsapp}" target="_blank" rel="noopener noreferrer"
                                        class="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs transition-colors shadow-sm">
                                        <i class="fa-brands fa-whatsapp text-sm"></i>
                                        <span>Hubungi via WhatsApp</span>
                                    </a>
                                </div>
                            ` : ''}
                        </div>
                    </div>
                </div>
            `;

            modal.classList.remove('hidden');
            document.body.style.overflow = 'hidden';

            // Dismiss with Escape key
            const escListener = (e) => {
                if (e.key === 'Escape') {
                    window.closeMemberModal();
                    document.removeEventListener('keydown', escListener);
                }
            };
            document.addEventListener('keydown', escListener);
        };

        // Close Member Detail Modal
        window.closeMemberModal = function () {
            const modal = document.getElementById('member-detail-modal');
            if (modal) {
                modal.classList.add('hidden');
                document.body.style.overflow = '';
            }
        };

        // Attach modal backdrop click dismissal
        document.addEventListener('DOMContentLoaded', () => {
            const memberModal = document.getElementById('member-detail-modal');
            if (memberModal) {
                memberModal.addEventListener('click', (e) => {
                    if (e.target === memberModal) {
                        window.closeMemberModal();
                    }
                });
            }
        });

        window.currentFinFilter = 'all';
        window.currentDeptFilter = 'all';

        // Sliding Pill Tracker
        window.updateSlidingPill = function (type) {
            const container = document.getElementById('financial-sliding-tabs');
            const pill = document.getElementById('financial-sliding-pill');
            const targetBtn = document.getElementById(`fin-tab-${type}`);
            if (!container || !pill || !targetBtn) return;

            pill.style.width = `${targetBtn.offsetWidth}px`;
            pill.style.transform = `translateX(${targetBtn.offsetLeft}px)`;
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
            const emptyState = document.getElementById('financial-empty-state');
            const tableWrapper = document.getElementById('financial-table-wrapper');
            const scrollHint = document.getElementById('financial-scroll-hint');
            if (!tbody) return;
            tbody.innerHTML = '';
            let currentTotal = 0, sumIncome = 0, sumExpense = 0;
            const isAdmin = Boolean(window.currentUser && window.currentUser.isAdmin);
            const isEn = window.currentLang === 'en';

            const filteredRecords = window.financialRecords.filter(record => {
                const income = Number(record.income || 0);
                const expense = Number(record.expense || 0);
                if (window.currentFinFilter === 'income' && income <= 0) return false;
                if (window.currentFinFilter === 'expense' && expense <= 0) return false;
                return true;
            });

            // Hitung total keseluruhan
            window.financialRecords.forEach(record => {
                const income = Number(record.income || 0);
                const expense = Number(record.expense || 0);
                sumIncome += income;
                sumExpense += expense;
                currentTotal += (income - expense);
            });

            if (filteredRecords.length === 0) {
                if (emptyState) {
                    emptyState.classList.remove('hidden');
                    const emptyTitle = document.getElementById('financial-empty-title');
                    const emptyDesc = document.getElementById('financial-empty-desc');
                    if (emptyTitle) {
                        emptyTitle.innerText = isEn ? 'No Financial Records Yet' : 'Belum Ada Transaksi Kas';
                    }
                    if (emptyDesc) {
                        emptyDesc.innerText = isEn
                            ? 'SRC cash flow, income, and expense records posted from the Member Dashboard will appear transparently here.'
                            : 'Catatan pemasukan & pengeluaran kas SRC yang diposting melalui Member Dashboard akan langsung tampil di sini secara transparan.';
                    }
                }
                if (tableWrapper) tableWrapper.classList.add('hidden');
                if (scrollHint) scrollHint.classList.add('hidden');
            } else {
                if (emptyState) emptyState.classList.add('hidden');
                if (tableWrapper) tableWrapper.classList.remove('hidden');
                if (scrollHint) scrollHint.classList.remove('hidden');

                filteredRecords.forEach((record, index) => {
                    const income = Number(record.income || 0);
                    const expense = Number(record.expense || 0);
                    const dateStr = isEn ? (record.date_en || record.date || record.date_id) : (record.date_id || record.date || record.date_en);
                    const remarksStr = isEn ? (record.remarks_en || record.remarks || record.remarks_id) : (record.remarks_id || record.remarks || record.remarks_en);
                    const deleteTitle = isEn ? "Delete" : "Hapus";

                    const tr = document.createElement('tr');
                    tr.className = "motion-fade-up hover:bg-slate-50 transition-colors border-b border-slate-100";
                    tr.style.transitionDelay = `${(index % 6) * 50}ms`;
                    tr.innerHTML = `
                        <td class="py-3 px-3 text-center font-bold text-slate-400 text-xs">${index + 1}</td>
                        <td class="py-3 px-4 font-semibold text-slate-800 text-xs sm:text-sm whitespace-nowrap">${escapeHtml(dateStr)}</td>
                        <td class="py-3 px-4 font-bold text-brand-green text-xs sm:text-sm whitespace-nowrap">+ Rp ${formatNumber(income)}</td>
                        <td class="py-3 px-4 font-bold text-red-500 text-xs sm:text-sm whitespace-nowrap">- Rp ${formatNumber(expense)}</td>
                        <td class="py-3 px-4 font-extrabold text-slate-900 text-xs sm:text-sm whitespace-nowrap">Rp ${formatNumber(currentTotal)}</td>
                        <td class="py-3 px-4 text-xs text-slate-600 max-w-xs break-words">${escapeHtml(remarksStr)}</td>
                        <td class="py-3 px-3 text-center">
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
                    if (typeof window.syncStructureScroll === 'function') {
                        window.syncStructureScroll();
                    }
                });
            }
            window.addEventListener('scroll', () => {
                if (typeof window.syncStructureScroll === 'function') {
                    window.syncStructureScroll();
                }
            }, { passive: true });
        }

        const navSectionIds = ['hero', 'about', 'structure', 'financial', 'departments', 'activity', 'blog', 'suggestion'];
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

            // Cascading Top-to-Bottom Structure Hierarchy Reveal
            document.querySelectorAll('.cascade-reveal-top').forEach((el, index) => {
                el.style.transitionDelay = `${(index % 6) * 110}ms`;
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
                { selector: '#structure [aria-hidden="true"]', speed: 0.08 },
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
            window.renderStructureHierarchy();
            window.renderStructureFilterPills();
            window.filterStructureMembers();
            if (typeof window.syncStructureScroll === 'function') {
                window.syncStructureScroll();
            }

            // Keyboard navigation when section is in view
            document.addEventListener('keydown', (e) => {
                const structureEl = document.getElementById('structure');
                if (!structureEl) return;
                const rect = structureEl.getBoundingClientRect();
                if (rect.top <= 120 && rect.bottom >= window.innerHeight * 0.4) {
                    if (e.key === 'ArrowDown' || e.key === 'ArrowRight') {
                        if (window.currentStructureSlide < 10) {
                            e.preventDefault();
                            window.goToNextStructureSlide();
                        }
                    } else if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') {
                        if (window.currentStructureSlide > 0) {
                            e.preventDefault();
                            window.goToPrevStructureSlide();
                        }
                    }
                }
            });
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
            if (window.innerWidth >= 1024) {
                const mobileMenu = document.getElementById('mobile-menu');
                if (mobileMenu && mobileMenu.classList.contains('menu-visible')) {
                    mobileMenu.classList.remove('menu-visible');
                    mobileMenu.classList.add('menu-hidden');
                }
            }
        });