// Google Apps Script — paste into script.google.com and deploy as web app
// Allow: "Anyone" to execute

const SHEET_ID = SpreadsheetApp.getActiveSpreadsheet();

function doPost(e) {
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
  return ContentService.createTextOutput("Nigeria Basketball Archive — Form endpoint active.")
    .setMimeType(ContentService.MimeType.TEXT);
}
