import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
        import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";
        import { getFirestore, doc, setDoc, getDoc, onSnapshot } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";

        const firebaseConfig = {
            apiKey: "AIzaSyDC8wOsmzea2s9_meSO7_oMCF7sdURCaUE",
            authDomain: "srchsbm400cibubur.firebaseapp.com",
            databaseURL: "https://srchsbm400cibubur-default-rtdb.firebaseio.com",
            projectId: "srchsbm400cibubur",
            storageBucket: "srchsbm400cibubur.firebasestorage.app",
            messagingSenderId: "447256160718",
            appId: "1:447256160718:web:0079d02eabc210fce4e39f",
            measurementId: "G-6TSSRCDF5P"
        };

        const appId = 'srchsbm400cibubur';
        let db = null;
        let auth = null;
        window.cloudSyncEnabled = false;

        let unsubFin = null;
        let unsubDepts = null;

        function updateCloudBadge(isOnline) {
            const badge = document.getElementById('cloud-status-badge');
            const text = document.getElementById('cloud-status-text');
            if (!badge || !text) return;
            if (isOnline) {
                text.innerText = "Cloud Live";
                badge.className = "hidden lg:flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-[10px] font-bold border border-emerald-200";
            } else {
                text.innerText = "Local Mode";
                badge.className = "hidden lg:flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-50 text-amber-700 text-[10px] font-bold border border-amber-200";
            }
        }

        async function initCloudFirebase() {
            try {
                const app = initializeApp(firebaseConfig);
                auth = getAuth(app);
                db = getFirestore(app);

                window.cloudSyncEnabled = true;
                updateCloudBadge(true);

                onAuthStateChanged(auth, async (user) => {
                    if (user) {
                        let userRole = 'viewer';
                        let userName = user.displayName || user.email.split('@')[0];
                        try {
                            const userDoc = await getDoc(doc(db, "users", user.uid));
                            if (userDoc.exists()) {
                                const data = userDoc.data();
                                userRole = data.role || 'viewer';
                                if (data.name) userName = data.name;
                            }
                        } catch (e) {
                            console.warn("Gagal membaca role pengguna, menggunakan viewer:", e);
                        }

                        window.currentUser = {
                            uid: user.uid,
                            name: userName,
                            email: user.email,
                            role: userRole,
                            isAdmin: (userRole === 'admin')
                        };
                    } else {
                        window.currentUser = null;
                    }

                    updateAuthUI();
                    window.renderFinancialTable();
                    window.renderDepartments();
                });

                const finDocRef = doc(db, 'artifacts', appId, 'public', 'data', 'financial_data', 'records');
                const deptsDocRef = doc(db, 'artifacts', appId, 'public', 'data', 'departments_data', 'reports');

                if (unsubFin) unsubFin();
                unsubFin = onSnapshot(finDocRef, (snap) => {
                    if (snap.exists() && Array.isArray(snap.data().records)) {
                        window.financialRecords = snap.data().records;
                        window.renderFinancialTable();
                    }
                }, (err) => console.error("Koneksi data keuangan error:", err));

                if (unsubDepts) unsubDepts();
                unsubDepts = onSnapshot(deptsDocRef, (snap) => {
                    if (snap.exists() && Array.isArray(snap.data().departments)) {
                        window.departmentsData = snap.data().departments;
                        window.renderDepartments();
                    }
                }, (err) => console.error("Koneksi data divisi error:", err));

            } catch (err) {
                console.warn("Inisialisasi Firebase gagal, beralih ke mode offline:", err);
                updateCloudBadge(false);
            }
        }

        window.handleFirebaseLogin = async function (e) {
            e.preventDefault();
            const emailInput = document.getElementById('login-email');
            const passwordInput = document.getElementById('login-password');
            const email = emailInput.value.trim();
            const password = passwordInput.value;

            if (!email || !password) {
                showToast("Email dan password wajib diisi", "error");
                return;
            }

            try {
                await signInWithEmailAndPassword(auth, email, password);
                closeAuthModal();
                showToast("Berhasil masuk ke akun SRC!", "success");
                loginForm.reset();
            } catch (err) {
                let msg = "Gagal login: Periksa kembali email dan password Anda.";
                if (err.code === 'auth/user-not-found' || err.code === 'auth/wrong-password' || err.code === 'auth/invalid-credential') {
                    msg = "Email atau password tidak sesuai!";
                } else if (err.code === 'auth/too-many-requests') {
                    msg = "Terlalu banyak percobaan. Silakan coba beberapa saat lagi.";
                }
                showToast(msg, "error");
            }
        };

        window.handleFirebaseRegister = async function (e) {
            e.preventDefault();
            const name = document.getElementById('reg-name').value.trim();
            const email = document.getElementById('reg-email').value.trim();
            const password = document.getElementById('reg-password').value;
            const role = document.getElementById('reg-role').value;

            if (!name || !email || password.length < 6) {
                showToast("Mohon isi form dengan benar (password minimal 6 karakter)", "error");
                return;
            }

            try {
                const userCredential = await createUserWithEmailAndPassword(auth, email, password);
                const user = userCredential.user;

                // Simpan profil tanpa password plaintext
                await setDoc(doc(db, "users", user.uid), {
                    name,
                    email,
                    role: (role === 'admin' ? 'admin' : 'viewer'),
                    createdAt: new Date().toISOString()
                });

                // Sync to Google Sheets (Users Sheet: [No, User ID, Full Name, Name, Class, Depart, Password, Last Login IP])
                if (window.SRCSheetsSync && typeof window.SRCSheetsSync.logUserRegistration === 'function') {
                    window.SRCSheetsSync.logUserRegistration({
                        uid: user.uid,
                        fullName: name,
                        name: name,
                        class: "SMA BM 400",
                        depart: role === 'admin' ? 'Executive / Admin' : 'Member',
                        password: "●●●●●●●●",
                        lastLoginIp: "Web Browser Client"
                    });
                }

                closeAuthModal();
                showToast("Akun berhasil didaftarkan dan dicatat!", "success");
                registerForm.reset();
            } catch (error) {
                let msg = "Gagal registrasi: " + error.message;
                if (error.code === 'auth/email-already-in-use') {
                    msg = "Email ini sudah terdaftar!";
                }
                showToast(msg, "error");
            }
        };

        window.handleLogout = async function () {
            try {
                window.currentUser = null;
                await signOut(auth);
                updateAuthUI();
                window.renderFinancialTable();
                window.renderDepartments();
                showToast("Berhasil logout dari sistem", "info");
            } catch (error) {
                showToast("Gagal logout: " + error.message, "error");
            }
        };

        window.saveCloudFinancial = async function (data) {
            if (window.cloudSyncEnabled && db) {
                try {
                    await setDoc(doc(db, 'artifacts', appId, 'public', 'data', 'financial_data', 'records'), {
                        records: data,
                        updatedAt: new Date().toISOString()
                    });
                } catch (e) {
                    console.error("Gagal menyimpan ke cloud:", e);
                }
            }
        };

        window.saveCloudDepts = async function (data) {
            if (window.cloudSyncEnabled && db) {
                try {
                    await setDoc(doc(db, 'artifacts', appId, 'public', 'data', 'departments_data', 'reports'), {
                        departments: data,
                        updatedAt: new Date().toISOString()
                    });
                } catch (e) {
                    console.error("Gagal menyimpan ke cloud:", e);
                }
            }
        };

        window.addEventListener('DOMContentLoaded', initCloudFirebase);