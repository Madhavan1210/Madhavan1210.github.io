# Madhavan S - Academic & Research Portfolio Website

A clean, modern, and mobile-responsive academic portfolio website built specifically for **Madhavan S** (Ph.D. Research Scholar, Department of Civil Engineering, IIT Bombay). 

This website follows the design and structure style of academic sites like [geet-george.github.io](https://geet-george.github.io/) (iPortfolio inspired), customized with all data from your Curriculum Vitae.

---

## 🌟 Features Included

- **Header / Hero Section:** Dynamic typed text animation showcasing research domains (Satellite Altimetry, SAR, LiDAR, Deep Learning, HBIM) and key research metrics.
- **Fixed Sidebar Navigation:** Profile info, contact links (Email, GitHub, Google Scholar, ORCiD, LinkedIn), and smooth-scroll navigation.
- **Publication Engine (13 Publications):**
  - Interactive category filters: **All (13)**, **Peer-Reviewed Journals (8)**, **International Conferences (2)**, **National Abstracts (3)**, and **First Author (5)**.
  - Real-time search bar to search papers by title, topic, or author.
  - Interactive **BibTeX modal/accordions** for instant citation copying.
- **Education Timeline:** Complete chronological academic record (IIT Bombay Ph.D., IIRS-ISRO M.Tech, CIT Chennai B.E. with 1st Rank).
- **Academic Experience:** Board of Studies member and IIT Bombay Teaching Assistant roles.
- **Honors, Awards & Grants:** Riverathon 1.0 (₹50,000 award), IIRS Best Poster, FOSSEE Mapathon Champion, TNSCST Grant, etc.
- **Invited Talks & Community Services:** NIT Patna STTP lecture, CIPA talk, ISRS Life Membership, and ISPRS memberships.
- **Categorized Technical Skills & References:** Direct contact and mentor details.

---

## 🚀 How to View Locally

Simply open `index.html` in any web browser:
- **On Windows:** Double-click `index.html` or right-click and choose **Open with Google Chrome / Microsoft Edge**.

---

## 🌐 How to Publish to GitHub Pages (`Madhavan1210.github.io`)

Because your GitHub username is **`Madhavan1210`**, you can get the exact URL **`https://madhavan1210.github.io/`** completely free!

### Step 1: Create the GitHub Repository
1. Log in to [GitHub](https://github.com/).
2. Create a new repository named exactly:
   ```text
   Madhavan1210.github.io
   ```
3. Set it to **Public**.

### Step 2: Push the Files
Open your terminal or PowerShell inside this folder (`madhavan-portfolio`) and run:
```bash
git init
git add .
git commit -m "Initial academic portfolio website"
git branch -M main
git remote add origin https://github.com/Madhavan1210/Madhavan1210.github.io.git
git push -u origin main
```

### Step 3: That's It!
Within 1–2 minutes, your website will be live worldwide at:
👉 **`https://madhavan1210.github.io/`**

---

## 🎨 Quick Customizations

1. **Add Your Photo:**
   - Put your portrait photo inside an `assets/` folder as `assets/avatar.jpg`.
   - In `index.html`, replace:
     ```html
     <div class="profile-avatar"><span>MS</span></div>
     ```
     with:
     ```html
     <img src="assets/avatar.jpg" alt="Madhavan S" class="profile-avatar" style="object-fit: cover;">
     ```

2. **Add Your CV PDF:**
   - Save your PDF CV as `assets/Madhavan_S_CV.pdf`.
   - Update the download link in `index.html`:
     ```html
     <a href="assets/Madhavan_S_CV.pdf" download class="btn-sidebar-cv">
     ```
