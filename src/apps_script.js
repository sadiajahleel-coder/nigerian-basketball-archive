// Google Apps Script — paste ALL of this into script.google.com
// After saving, go to Deploy → Manage Deployments → edit → New Version → Deploy

const SHEET_ID = SpreadsheetApp.getActiveSpreadsheet();

function handleRequest(e) {
  try {
    const params = e.parameter;
    const formType = params.formType;
    const timestamp = new Date().toISOString();

    if (formType === "signup") {
      const sheet = SHEET_ID.getSheetByName("Sign-ups") || SHEET_ID.getSheets()[0];
      sheet.appendRow([timestamp, params.name, params.email, params.organisation, params.role]);
    } else if (formType === "contribution") {
      const sheet = SHEET_ID.getSheetByName("Contributions") || SHEET_ID.getSheets()[1];
      sheet.appendRow([timestamp, params.contributorName, params.email, params.type, params.year, params.details, params.fileLink]);
    }

    return ContentService.createTextOutput(JSON.stringify({ status: "ok" }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService.createTextOutput(JSON.stringify({ status: "error", message: err.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet(e) {
  return handleRequest(e);
}

function doPost(e) {
  return handleRequest(e);
}
