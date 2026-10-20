/**
 * =========================================================================
 * GOOGLE APPS SCRIPT WEBHOOK FOR SRC BM 400 CIBUBUR
 * =========================================================================
 * Script ini dipasang di Google Sheets: Extensions > Apps Script
 * Deploy sebagai: Web App (Execute as: Me, Who has access: Anyone)
 *
 * Mendukung 6 Sheet sesuai struktur:
 * 1. Users: [No, User ID, Full Name, Name, Class, Depart, Password, Last Login IP]
 * 2. Activity: [No, Time/Date, Added By, Image URL, Title (EN), Description (EN), Title (ID), Description (ID)]
 * 3. Blog: [No, Time/Date, Added By, Image URL, Title (EN), Description (EN), Blog (EN), Title (ID), Description (ID), Blog (ID)]
 * 4. Financial: [No, Time/Date, Income, Expense, Total, Description (EN), Description (ID), Depart]
 * 5. Feedback: [NO, Student Full Name, Target Departement, Aspiration]
 * 6. AuditLog: [No, Date/Time, User ID, Name, Activity]
 * =========================================================================
 */

function setupSpreadsheetSheets() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  
  const sheetDefinitions = {
    "Users": ["No", "User ID", "Full Name", "Name", "Class", "Depart", "Password", "Last Login IP"],
    "Activity": ["No", "Time/Date", "Added By", "Image URL", "Title (EN)", "Description (EN)", "Title (ID)", "Description (ID)"],
    "Blog": ["No", "Time/Date", "Added By", "Image URL", "Title (EN)", "Description (EN)", "Blog (EN)", "Title (ID)", "Description (ID)", "Blog (ID)"],
    "Financial": ["No", "Time/Date", "Income", "Expense", "Total", "Description (EN)", "Description (ID)", "Depart"],
    "Feedback": ["NO", "Student Full Name", "Target Departement", "Aspiration"],
    "AuditLog": ["No", "Date/Time", "User ID", "Name", "Activity"]
  };

  for (const [name, headers] of Object.entries(sheetDefinitions)) {
    let sheet = ss.getSheetByName(name);
    if (!sheet) {
      sheet = ss.insertSheet(name);
    }
    if (sheet.getLastRow() === 0) {
      sheet.appendRow(headers);
      const headerRange = sheet.getRange(1, 1, 1, headers.length);
      headerRange.setFontWeight("bold");
      headerRange.setBackground("#1a3d2d");
      headerRange.setFontColor("#ffffff");
      sheet.setFrozenRows(1);
    }
  }
}

function doPost(e) {
  const lock = LockService.getScriptLock();
  try {
    lock.waitLock(10000);
  } catch (err) {
    return ContentService.createTextOutput(JSON.stringify({
      status: "error",
      message: "Server busy, please try again."
    })).setMimeType(ContentService.MimeType.JSON);
  }

  try {
    const rawData = e.postData.contents;
    const payload = JSON.parse(rawData);
    const action = payload.action;
    const data = payload.data || {};
    const ss = SpreadsheetApp.getActiveSpreadsheet();
    const timestamp = Utilities.formatDate(new Date(), "Asia/Jakarta", "dd MMM yyyy, HH:mm:ss");

    let result = { status: "success", message: "Data saved successfully" };

    switch (action) {
      // ----------------------------------------------------
      // 1. ADD / SYNC USER
      // ----------------------------------------------------
      case "addUser": {
        const sheet = getOrCreateSheet(ss, "Users", ["No", "User ID", "Full Name", "Name", "Class", "Depart", "Password", "Last Login IP"]);
        const nextNo = getNextSequenceNumber(sheet);
        sheet.appendRow([
          nextNo,
          data.userId || "",
          data.fullName || "",
          data.name || "",
          data.class || "",
          data.depart || "",
          data.password || "********",
          data.lastLoginIp || "Web Client"
        ]);
        logAudit(ss, data.userId || "SYS", data.name || "System", "Registered new member: " + (data.fullName || ""));
        break;
      }

      // ----------------------------------------------------
      // 2. ADD ACTIVITY / MOMENT
      // ----------------------------------------------------
      case "addActivity": {
        const sheet = getOrCreateSheet(ss, "Activity", ["No", "Time/Date", "Added By", "Image URL", "Title (EN)", "Description (EN)", "Title (ID)", "Description (ID)"]);
        const nextNo = getNextSequenceNumber(sheet);
        sheet.appendRow([
          nextNo,
          data.dateTime || timestamp,
          data.addedBy || "Member",
          data.imageUrl || "",
          data.titleEn || "",
          data.descEn || "",
          data.titleId || "",
          data.descId || ""
        ]);
        logAudit(ss, data.userId || "MBR", data.addedBy || "Member", "Added Polaroid Moment: " + (data.titleEn || data.titleId || ""));
        break;
      }

      // ----------------------------------------------------
      // 3. ADD BLOG ARTICLE
      // ----------------------------------------------------
      case "addBlog": {
        const sheet = getOrCreateSheet(ss, "Blog", ["No", "Time/Date", "Added By", "Image URL", "Title (EN)", "Description (EN)", "Blog (EN)", "Title (ID)", "Description (ID)", "Blog (ID)"]);
        const nextNo = getNextSequenceNumber(sheet);
        sheet.appendRow([
          nextNo,
          data.dateTime || timestamp,
          data.addedBy || "Member",
          data.imageUrl || "",
          data.titleEn || "",
          data.descEn || "",
          data.blogEn || "",
          data.titleId || "",
          data.descId || "",
          data.blogId || ""
        ]);
        logAudit(ss, data.userId || "MBR", data.addedBy || "Member", "Published Blog Article: " + (data.titleEn || data.titleId || ""));
        break;
      }

      // ----------------------------------------------------
      // 4. ADD FINANCIAL TRANSACTION
      // ----------------------------------------------------
      case "addFinancial": {
        const sheet = getOrCreateSheet(ss, "Financial", ["No", "Time/Date", "Income", "Expense", "Total", "Description (EN)", "Description (ID)", "Depart"]);
        const nextNo = getNextSequenceNumber(sheet);
        const income = Number(data.income || 0);
        const expense = Number(data.expense || 0);

        // Hitung total saldo berjalan
        let lastBalance = 0;
        const lastRow = sheet.getLastRow();
        if (lastRow > 1) {
          const prevTotal = Number(sheet.getRange(lastRow, 5).getValue() || 0);
          lastBalance = isNaN(prevTotal) ? 0 : prevTotal;
        }
        const newBalance = lastBalance + income - expense;

        sheet.appendRow([
          nextNo,
          data.dateTime || timestamp,
          income,
          expense,
          newBalance,
          data.descEn || "",
          data.descId || "",
          data.depart || "General SRC"
        ]);
        logAudit(ss, data.userId || "TREASURER", data.addedBy || "Treasurer", `Added Financial Record: +${income} / -${expense} (${data.descId || data.descEn || ""})`);
        result.totalBalance = newBalance;
        break;
      }

      // ----------------------------------------------------
      // 5. ADD FEEDBACK / ASPIRATION
      // ----------------------------------------------------
      case "addFeedback": {
        const sheet = getOrCreateSheet(ss, "Feedback", ["NO", "Student Full Name", "Target Departement", "Aspiration"]);
        const nextNo = getNextSequenceNumber(sheet);
        sheet.appendRow([
          nextNo,
          data.fullName || "Anonymous",
          data.targetDepartment || "General SRC",
          data.aspiration || ""
        ]);
        logAudit(ss, "PUBLIC", data.fullName || "Student", "Submitted Aspiration to: " + (data.targetDepartment || ""));
        break;
      }

      // ----------------------------------------------------
      // 6. RECORD AUDIT LOG DIRECTLY
      // ----------------------------------------------------
      case "addAudit": {
        logAudit(ss, data.userId || "SYS", data.name || "System", data.activity || "Action performed");
        break;
      }

      default:
        result = { status: "error", message: "Unknown action: " + action };
    }

    return ContentService.createTextOutput(JSON.stringify(result)).setMimeType(ContentService.MimeType.JSON);

  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({
      status: "error",
      message: error.toString()
    })).setMimeType(ContentService.MimeType.JSON);
  } finally {
    lock.releaseLock();
  }
}

function doGet(e) {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const action = (e.parameter && e.parameter.action) ? e.parameter.action : "getAll";

  try {
    let result = { status: "success" };

    if (action === "getFinancial") {
      result.data = getSheetRowsAsJson(ss, "Financial");
    } else if (action === "getBlog") {
      result.data = getSheetRowsAsJson(ss, "Blog");
    } else if (action === "getActivity") {
      result.data = getSheetRowsAsJson(ss, "Activity");
    } else if (action === "getFeedback") {
      result.data = getSheetRowsAsJson(ss, "Feedback");
    } else {
      result.data = {
        financial: getSheetRowsAsJson(ss, "Financial"),
        blog: getSheetRowsAsJson(ss, "Blog"),
        activity: getSheetRowsAsJson(ss, "Activity"),
        feedback: getSheetRowsAsJson(ss, "Feedback")
      };
    }

    return ContentService.createTextOutput(JSON.stringify(result)).setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService.createTextOutput(JSON.stringify({
      status: "error",
      message: err.toString()
    })).setMimeType(ContentService.MimeType.JSON);
  }
}

// --------------------------------------------------------
// HELPER UTILITIES
// --------------------------------------------------------
function getOrCreateSheet(ss, name, headers) {
  let sheet = ss.getSheetByName(name);
  if (!sheet) {
    sheet = ss.insertSheet(name);
    sheet.appendRow(headers);
    const headerRange = sheet.getRange(1, 1, 1, headers.length);
    headerRange.setFontWeight("bold");
    headerRange.setBackground("#1a3d2d");
    headerRange.setFontColor("#ffffff");
    sheet.setFrozenRows(1);
  }
  return sheet;
}

function getNextSequenceNumber(sheet) {
  const lastRow = sheet.getLastRow();
  return lastRow <= 1 ? 1 : lastRow;
}

function logAudit(ss, userId, name, activity) {
  try {
    const sheet = getOrCreateSheet(ss, "AuditLog", ["No", "Date/Time", "User ID", "Name", "Activity"]);
    const nextNo = getNextSequenceNumber(sheet);
    const timestamp = Utilities.formatDate(new Date(), "Asia/Jakarta", "dd MMM yyyy, HH:mm:ss");
    sheet.appendRow([
      nextNo,
      timestamp,
      userId,
      name,
      activity
    ]);
  } catch (e) {
    console.error("Audit log failed:", e);
  }
}

function getSheetRowsAsJson(ss, sheetName) {
  const sheet = ss.getSheetByName(sheetName);
  if (!sheet || sheet.getLastRow() <= 1) return [];

  const values = sheet.getDataRange().getValues();
  const headers = values[0];
  const rows = values.slice(1);

  return rows.map(row => {
    let obj = {};
    headers.forEach((header, i) => {
      obj[header] = row[i];
    });
    return obj;
  });
}
