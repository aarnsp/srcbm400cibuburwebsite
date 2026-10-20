/**
 * =========================================================================
 * GOOGLE SHEETS SYNC CLIENT SERVICE FOR SRC BM 400 CIBUBUR
 * =========================================================================
 * Modul ini menangani pengiriman data dari form dashboard & website
 * langsung ke Google Sheets Apps Script Webhook secara real-time.
 */
const GOOGLE_SCRIPT_WEBHOOK_URL = "https://script.google.com/macros/s/AKfycbzbvOUcPoAfwJXZbQhMwhPwKjGQ7z49kqGfQqS5_HB62hIjv8Yb21xPRs9RnFwu8EWJag/exec";

window.SRCSheetsSync = {
    // URL Webhook permanen di-hardcode langsung ke Google Apps Script Deployment
    getWebhookUrl() {
        return GOOGLE_SCRIPT_WEBHOOK_URL;
    },

    setWebhookUrl(url) {
        // Tetap kompatibel jika dipanggil
        console.log("[GoogleSheetsSync] Webhook URL permanen:", GOOGLE_SCRIPT_WEBHOOK_URL);
    },

    /**
     * Kirim payload ke Google Apps Script Webhook
     * Menggunakan fetch dengan mode no-cors atau cors standar
     */
    async sendToSpreadsheet(action, data) {
        const webhookUrl = this.getWebhookUrl();
        if (!webhookUrl) {
            console.info(`[GoogleSheetsSync] Webhook URL belum dikonfigurasi. Data (${action}) disimpan di memori/Cloud Firebase.`);
            return { status: "local_only", message: "Webhook URL belum dikonfigurasi" };
        }

        const payload = {
            action: action,
            data: data,
            timestamp: new Date().toISOString()
        };

        try {
            // Gunakan text/plain untuk menghindari preflight OPTIONS CORS issue di Google Apps Script
            const response = await fetch(webhookUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'text/plain;charset=utf-8'
                },
                body: JSON.stringify(payload)
            });

            const result = await response.json();
            console.log(`[GoogleSheetsSync] Success ${action}:`, result);
            return result;
        } catch (error) {
            // Fallback: Apps Script sering merespon redirect 302 yang menghasilkan cors error di browser,
            // namun baris tetap berhasil ditulis ke Spreadsheet.
            console.warn(`[GoogleSheetsSync] Network note for ${action}:`, error);
            return { status: "sent", message: "Terkirim ke antrean Google Sheets" };
        }
    },

    /**
     * 1. Sheet: Users
     * Kolom: [No, User ID, Full Name, Name, Class, Depart, Password, Last Login IP]
     */
    async logUserRegistration(user) {
        return await this.sendToSpreadsheet("addUser", {
            userId: user.uid || "USER-" + Date.now().toString().slice(-4),
            fullName: user.fullName || user.name || "",
            name: user.name || (user.email ? user.email.split('@')[0] : "Member"),
            class: user.class || "SMA Bakti Mulya 400",
            depart: user.depart || "General SRC",
            password: "●●●●●●●●",
            lastLoginIp: "Web Browser Client"
        });
    },

    /**
     * 2. Sheet: Activity
     * Kolom: [No, Time/Date, Added By, Image URL, Title (EN), Description (EN), Title (ID), Description (ID)]
     */
    async addMoment(moment) {
        return await this.sendToSpreadsheet("addActivity", {
            dateTime: moment.dateTime || new Date().toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' }),
            addedBy: moment.addedBy || "SRC Member",
            imageUrl: moment.imageUrl || "",
            titleEn: moment.titleEn || moment.title || "",
            descEn: moment.descEn || moment.desc || "",
            titleId: moment.titleId || moment.title || "",
            descId: moment.descId || moment.desc || "",
            userId: moment.userId || "MBR"
        });
    },

    /**
     * 3. Sheet: Blog
     * Kolom: [No, Time/Date, Added By, Image URL, Title (EN), Description (EN), Blog (EN), Title (ID), Description (ID), Blog (ID)]
     */
    async addBlogArticle(article) {
        return await this.sendToSpreadsheet("addBlog", {
            dateTime: article.dateTime || new Date().toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' }),
            addedBy: article.addedBy || "Divisi PR & Tech",
            imageUrl: article.imageUrl || "",
            titleEn: article.titleEn || article.title || "",
            descEn: article.descEn || article.summary || "",
            blogEn: article.blogEn || article.content || "",
            titleId: article.titleId || article.title || "",
            descId: article.descId || article.summary || "",
            blogId: article.blogId || article.content || "",
            userId: article.userId || "MBR"
        });
    },

    /**
     * 4. Sheet: Financial
     * Kolom: [No, Time/Date, Income, Expense, Total, Description (EN), Description (ID), Depart]
     */
    async addFinancialTransaction(tx) {
        return await this.sendToSpreadsheet("addFinancial", {
            dateTime: tx.dateTime || tx.date || new Date().toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' }),
            income: Number(tx.income || 0),
            expense: Number(tx.expense || 0),
            descEn: tx.descEn || tx.remarks_en || tx.remarks || "",
            descId: tx.descId || tx.remarks_id || tx.remarks || "",
            depart: tx.depart || "General Treasury",
            addedBy: tx.addedBy || "Treasurer",
            userId: tx.userId || "TREASURER"
        });
    },

    /**
     * 5. Sheet: Feedback
     * Kolom: [NO, Student Full Name, Target Departement, Aspiration]
     */
    async addFeedback(feedback) {
        return await this.sendToSpreadsheet("addFeedback", {
            fullName: feedback.fullName || "Anonymous",
            targetDepartment: feedback.targetDepartment || "General SRC",
            aspiration: feedback.aspiration || ""
        });
    },

    /**
     * 6. Sheet: AuditLog
     * Kolom: [No, Date/Time, User ID, Name, Activity]
     */
    async logAudit(userId, name, activity) {
        return await this.sendToSpreadsheet("addAudit", {
            userId: userId || "ANON",
            name: name || "User",
            activity: activity
        });
    }
};
