/**
 * Better Together interest form → Google Sheet.
 *
 * Paste this into Extensions → Apps Script on the Google Sheet that should
 * collect responses, then deploy it as a web app (see apps-script/README.md).
 * Each submission becomes one row: Timestamp | Name | Email | Joining as.
 */
const SHEET_NAME = 'Responses';
const HEADERS = ['Timestamp', 'Name', 'Email', 'Joining as'];
const ROLES = ['Attendee', 'Presenter'];

function doPost(e) {
  const p = (e && e.parameter) || {};

  // Silently drop bot submissions that fill the hidden honeypot field.
  if (p.website) return json_({ ok: true });

  const name = clean_(p.name, 120);
  const email = clean_(p.email, 160);
  const role = ROLES.indexOf(p.role) >= 0 ? p.role : '';
  if (!name || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || !role) {
    return json_({ ok: false, error: 'missing or invalid fields' });
  }

  const lock = LockService.getScriptLock();
  lock.waitLock(10000);
  try {
    const ss = SpreadsheetApp.getActiveSpreadsheet();
    const sheet = ss.getSheetByName(SHEET_NAME) || ss.insertSheet(SHEET_NAME);
    if (sheet.getLastRow() === 0) {
      sheet.appendRow(HEADERS);
      sheet.setFrozenRows(1);
    }
    sheet.appendRow([new Date(), name, email, role]);
  } finally {
    lock.releaseLock();
  }
  return json_({ ok: true });
}

// Lets you open the web app URL in a browser to check it is deployed.
function doGet() {
  return json_({ ok: true, message: 'Better Together form endpoint is live.' });
}

// Trim, cap length, and stop spreadsheet formula injection (=, +, -, @).
function clean_(value, max) {
  let v = String(value || '').trim().slice(0, max);
  if (/^[=+\-@]/.test(v)) v = "'" + v;
  return v;
}

function json_(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj))
    .setMimeType(ContentService.MimeType.JSON);
}
