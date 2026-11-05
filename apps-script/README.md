# Connecting the interest form to a Google Sheet

The form on the site asks for **name**, **email**, and whether the person wants to join as an **attendee** or a **presenter**. Each submission is saved as a row in a Google Sheet you own. Setup takes about 10 minutes and is free.

1. Create a new Google Sheet (for example "Better Together 2027 sign-ups").
2. In the Sheet, open **Extensions → Apps Script**.
3. Delete the starter code, paste in everything from [`Code.gs`](Code.gs), and click **Save**.
4. Click **Deploy → New deployment**. Click the gear next to "Select type" and choose **Web app**.
   - Description: `Better Together form`
   - Execute as: **Me**
   - Who has access: **Anyone**
5. Click **Deploy**, approve the permissions with your Google account, and copy the **Web app URL** (it ends in `/exec`).
6. In `index.html`, find this line near the top of the main script and paste the URL between the quotes:

   ```js
   const SHEET_ENDPOINT = '';
   ```

7. Commit and publish the site, then submit a test entry. A `Responses` tab appears in the Sheet with the columns Timestamp, Name, Email, Joining as.

## Notes

- Until `SHEET_ENDPOINT` is set, the form shows a message asking people to email the chapter president instead, so nothing is lost.
- If you edit `Code.gs` later, use **Deploy → Manage deployments → Edit → Version: New version** so the same URL keeps working.
- You can turn on email alerts for new rows in the Sheet with **Tools → Notification settings**.
- Opening the web app URL in a browser shows `{"ok":true,...}`, which confirms it is deployed.
