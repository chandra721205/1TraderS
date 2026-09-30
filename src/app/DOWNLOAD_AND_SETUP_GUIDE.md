# 📥 TRADIE Dashboard - Complete Download & Setup Guide

**Project:** tradie_code  
**Version:** 1.0  
**For:** Teachers and Students  
**Platform:** Figma Make Web Prototype v1

---

## 🎯 **STEP 1: Download from Figma Make**

### **Option A: Export Project (Recommended)**

1. **Look for the Export button** in Figma Make:
   - **Top right corner**: Look for 📦 "Export" or ⬇️ "Download" button
   - **Menu bar**: Click the ☰ menu icon → "Export Project"
   - **File menu**: File → Export → Download as ZIP

2. **Click the Export/Download button**

3. **Save the file**:
   - File name: `tradie_code.zip`
   - Location: Your Downloads folder
   - The ZIP will contain all 73 files (69 original + 4 new config files)

### **Option B: Share & Download (Alternative)**

1. Click **"Share"** button in Figma Make
2. Enable **"Anyone with link can view"**
3. Click **"Copy link"**
4. Open the link in a new tab
5. Look for download option on the shared page

### **Option C: Code View Download**

1. Click **"</> Code"** or **"View Code"** button
2. Look for **"Download"** or **"Export code"** option
3. Select **"Download as ZIP"**

---

## 📦 **STEP 2: Extract the Downloaded Files**

### **Windows:**
1. Locate `tradie_code.zip` in Downloads folder
2. Right-click → **"Extract All..."**
3. Choose destination (e.g., `C:\Users\YourName\Projects\`)
4. Click **"Extract"**

### **Mac:**
1. Locate `tradie_code.zip` in Downloads folder
2. Double-click to extract
3. Move the extracted folder to desired location

### **Linux:**
```bash
cd ~/Downloads
unzip tradie_code.zip -d ~/Projects/
cd ~/Projects/tradie_code
```

---

## 🗂️ **STEP 3: Reorganize File Structure**

⚠️ **IMPORTANT:** After extraction, you need to move files to the correct structure for Vite to work.

### **Current Structure (After Download):**
```
tradie_code/
├── App.tsx                    ← NEED TO MOVE
├── components/                ← NEED TO MOVE
├── contexts/                  ← NEED TO MOVE
├── styles/                    ← NEED TO MOVE
├── package.json              ✓ Keep here
├── index.html                ✓ Keep here
├── vite.config.ts            ✓ Keep here
├── tsconfig.json             ✓ Keep here
└── Documentation files       ✓ Keep here
```

### **Target Structure (What You Need):**
```
tradie_code/
├── package.json              ✓ Root level
├── index.html                ✓ Root level
├── vite.config.ts            ✓ Root level
├── tsconfig.json             ✓ Root level
├── tsconfig.node.json        ✓ Root level
├── .gitignore                ✓ Root level
│
├── src/                      ← CREATE THIS FOLDER
│   ├── main.tsx              ✓ Entry point
│   ├── App.tsx               ← MOVE HERE
│   ├── components/           ← MOVE HERE
│   ├── contexts/             ← MOVE HERE
│   └── styles/               ← MOVE HERE
│
└── DOCS/                     ← OPTIONAL: Organize docs
    ├── README.md
    ├── PACKAGE_MANIFEST.md
    ├── TRADIE_Dashboard_Documentation.md
    ├── TRADIE_Training_Presentation.md
    ├── TRADIE_Video_Tutorial_Scripts.md
    └── COMPLETE_CODE_REFERENCE.md
```

### **How to Reorganize:**

**Step 3.1: Create `/src` folder**
```bash
# In the tradie_code directory
mkdir src
```

**Step 3.2: Move files to `/src`**
```bash
# Move main application files
mv App.tsx src/
mv components src/
mv contexts src/
mv styles src/

# main.tsx is already in src/ (created automatically)
```

**Step 3.3: Optional - Organize documentation**
```bash
# Create docs folder (optional)
mkdir DOCS
mv *.md DOCS/
mv README.md ./ # Keep README in root
```

### **Final Correct Structure:**
```
tradie_code/
│
├── 📄 package.json
├── 📄 index.html
├── 📄 vite.config.ts
├── 📄 tsconfig.json
├── 📄 tsconfig.node.json
├── 📄 .gitignore
├── 📄 README.md
│
├── 📁 src/
│   ├── main.tsx
│   ├── App.tsx
│   ├── components/
│   │   ├── DashboardLayout.tsx
│   │   ├── LoginScreen.tsx
│   │   ├── figma/
│   │   │   └── ImageWithFallback.tsx
│   │   ├── screens/ (8 files)
│   │   └── ui/ (47 files)
│   ├── contexts/
│   │   └── RoleContext.tsx
│   └── styles/
│       └── globals.css
│
├── 📁 DOCS/ (optional)
│   ├── PACKAGE_MANIFEST.md
│   ├── TRADIE_Dashboard_Documentation.md
│   ├── TRADIE_Training_Presentation.md
│   ├── TRADIE_Video_Tutorial_Scripts.md
│   └── COMPLETE_CODE_REFERENCE.md
│
└── 📁 node_modules/ (will be created after npm install)
```

---

## 🚀 **STEP 4: Install Dependencies**

### **Prerequisites Check:**
```bash
# Check Node.js version (must be 18+)
node --version
# Should show: v18.x.x or higher

# Check npm version (must be 8+)
npm --version
# Should show: 8.x.x or higher
```

### **If Node.js is not installed:**
- Download from: https://nodejs.org/
- Choose **LTS version** (recommended)
- Install and restart terminal

### **Install Project Dependencies:**
```bash
# Navigate to project folder
cd tradie_code

# Install all dependencies
npm install

# This will take 2-3 minutes
# You'll see progress for ~100+ packages
```

**Expected output:**
```
added 342 packages in 2m
12 packages are looking for funding
```

---

## ▶️ **STEP 5: Run the Application**

### **Start Development Server:**
```bash
npm run dev
```

**Expected output:**
```
  VITE v6.0.3  ready in 800 ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
  ➜  press h + enter to show help
```

### **Open in Browser:**
1. **Automatic:** Browser should open automatically
2. **Manual:** Open http://localhost:5173 in your browser

### **What You Should See:**
✅ TRADIE Login Screen  
✅ Gradient background (#F7FAFC → #D9F2FF)  
✅ Gold TRADIE logo/text (#D4AF37)  
✅ Login form with email/mobile/OTP options  
✅ No errors in browser console

---

## ✅ **STEP 6: Verify Installation**

### **Checklist:**

**Visual Verification:**
- [ ] Login screen displays correctly
- [ ] Gradient background visible
- [ ] All buttons clickable
- [ ] No console errors (press F12 to check)

**Functional Verification:**
- [ ] Can select login method (Email/Mobile/OTP)
- [ ] Can enter credentials
- [ ] Can select role from dropdown
- [ ] Can click "Login" button

**Post-Login Verification:**
1. Enter any email (e.g., `teacher@tradie.com`)
2. Enter any password (e.g., `password123`)
3. Select role: **Trader**
4. Click **"Login"**
5. Should see dashboard with:
   - [ ] Sidebar navigation (left)
   - [ ] Top header with role indicator
   - [ ] Dashboard cards/KPIs
   - [ ] Charts visible

**Test Navigation:**
- [ ] Click "AI Insights" in sidebar → AI screen loads
- [ ] Click "Transactions" → Transaction center loads
- [ ] Click "Financial" → Financial overview loads
- [ ] Click role switcher → Can change roles

---

## 🔧 **Troubleshooting Common Issues**

### **Issue 1: `npm install` fails**

**Error:** `EACCES: permission denied`

**Solution:**
```bash
# Clear npm cache
npm cache clean --force

# Try again
npm install
```

**Error:** `Cannot find module`

**Solution:**
```bash
# Delete node_modules and lock file
rm -rf node_modules package-lock.json

# Reinstall
npm install
```

---

### **Issue 2: `npm run dev` fails**

**Error:** `Cannot find module 'vite'`

**Solution:**
```bash
# Install vite explicitly
npm install -D vite

# Then try again
npm run dev
```

**Error:** `Port 5173 already in use`

**Solution:**
```bash
# Option 1: Kill the process
npx kill-port 5173

# Option 2: Use different port
npm run dev -- --port 3000
```

---

### **Issue 3: White screen / Nothing displays**

**Possible causes:**
1. Files not in `/src` folder
2. Import paths wrong
3. Missing dependencies

**Solution:**
```bash
# 1. Check file structure
ls -la src/
# Should show: App.tsx, components/, contexts/, styles/

# 2. Check main.tsx exists
cat src/main.tsx
# Should import App and globals.css

# 3. Reinstall
rm -rf node_modules
npm install
npm run dev
```

---

### **Issue 4: TypeScript errors**

**Error:** `Cannot find module '@/...'`

**Solution:**
Check that `vite.config.ts` has the alias configuration:
```typescript
resolve: {
  alias: {
    '@': path.resolve(__dirname, './src'),
  },
}
```

---

### **Issue 5: Styles not applying**

**Solution:**
1. Check `src/styles/globals.css` exists
2. Verify it's imported in `src/main.tsx`:
   ```typescript
   import './styles/globals.css'
   ```
3. Clear browser cache (Ctrl+Shift+R / Cmd+Shift+R)

---

## 📚 **STEP 7: Share with Students**

### **For Teachers:**

**Option 1: Share ZIP file**
1. Create a clean copy of the working project
2. Delete `node_modules` folder (reduces size)
3. Zip the entire folder
4. Share via:
   - Google Drive / OneDrive
   - Learning Management System (LMS)
   - Email (if < 25 MB)
   - GitHub repository

**Option 2: GitHub Repository**
```bash
# Initialize git
git init

# Add files
git add .

# Commit
git commit -m "Initial commit - TRADIE Dashboard v1.0"

# Create repo on GitHub
# Then push
git remote add origin <your-repo-url>
git push -u origin main
```

**Option 3: Cloud Drive**
1. Upload to Google Drive
2. Set permissions: "Anyone with link can view"
3. Share link with students

### **For Students - Setup Instructions:**

**Provide students with:**
1. ✅ The ZIP file or GitHub link
2. ✅ This DOWNLOAD_AND_SETUP_GUIDE.md
3. ✅ README.md for reference
4. ✅ TRADIE_Dashboard_Documentation.md

**Student checklist:**
```
□ Download Node.js (if not installed)
□ Download project ZIP
□ Extract to working folder
□ Reorganize to /src structure
□ Run: npm install
□ Run: npm run dev
□ Open: http://localhost:5173
□ Login and explore
□ Read documentation
```

---

## 🎓 **Next Steps After Setup**

### **For Teachers:**

**Week 1 Preparation:**
1. Run the app yourself first
2. Explore all 8 features
3. Review TRADIE_Training_Presentation.md
4. Prepare lecture slides
5. Create first assignment

**Suggested First Lesson:**
1. Show working application (15 min)
2. Explain project structure (20 min)
3. Walk through LoginScreen.tsx code (20 min)
4. Students: Run locally (30 min)
5. Q&A (15 min)

### **For Students:**

**First Session Tasks:**
1. ✅ Get application running
2. ✅ Explore all features by logging in
3. ✅ Try different roles (Trader, Buyer, etc.)
4. ✅ Read README.md
5. ✅ Browse file structure
6. ✅ Make a small change (e.g., change a color)

**Study Materials Order:**
1. README.md (overview)
2. TRADIE_Dashboard_Documentation.md (features)
3. Code files (App.tsx, LoginScreen.tsx, etc.)
4. TRADIE_Training_Presentation.md (concepts)

---

## 📊 **Project Statistics**

**After successful setup, you'll have:**
- ✅ **73 files** total
- ✅ **~350 dependencies** installed
- ✅ **~200 MB** node_modules folder
- ✅ **8 feature screens** working
- ✅ **6 user roles** switchable
- ✅ **47 UI components** available
- ✅ **Full TypeScript** support
- ✅ **Hot reload** enabled

---

## 🎯 **Success Criteria**

You've successfully set up the project when:

✅ `npm install` completes without errors  
✅ `npm run dev` starts the server  
✅ Browser shows TRADIE login screen  
✅ Can login with any credentials  
✅ Dashboard displays with charts  
✅ Sidebar navigation works  
✅ Can switch between roles  
✅ All 8 screens accessible  
✅ No console errors  
✅ Hot reload works (changes reflect immediately)

---

## 🆘 **Need Help?**

### **Common Questions:**

**Q: Where are the files downloaded?**
A: Usually in your Downloads folder, named `tradie_code.zip` or similar.

**Q: Do I need to buy anything?**
A: No! All dependencies are free and open-source.

**Q: Can I modify the code?**
A: Yes! That's the whole point. Experiment, break things, learn!

**Q: What if I break something?**
A: Just re-download the original ZIP and start fresh.

**Q: Can I deploy this online?**
A: Yes! See deployment section in README.md for instructions.

**Q: Is this real data?**
A: No, all data is mock/sample data for educational purposes.

### **Support Resources:**

**Included Documentation:**
- README.md - Complete guide
- PACKAGE_MANIFEST.md - File inventory
- TRADIE_Dashboard_Documentation.md - Feature guide
- COMPLETE_CODE_REFERENCE.md - Code reference

**External Resources:**
- React: https://react.dev
- Vite: https://vitejs.dev
- TypeScript: https://www.typescriptlang.org
- Tailwind CSS: https://tailwindcss.com

**Community Help:**
- Stack Overflow (tag: react, vite, typescript)
- React Discord
- GitHub Discussions (if repo created)

---

## 📋 **Quick Reference Commands**

```bash
# Installation
npm install                    # Install dependencies
npm install --force           # Force reinstall if issues

# Development
npm run dev                   # Start dev server
npm run dev -- --port 3000   # Use different port

# Building
npm run build                # Build for production
npm run preview              # Preview production build

# Utilities
npm run lint                 # Check code quality
npm run type-check           # Check TypeScript errors

# Maintenance
npm cache clean --force      # Clear npm cache
rm -rf node_modules          # Delete dependencies
npm outdated                 # Check for updates
npm update                   # Update packages
```

---

## 🎉 **You're Ready!**

Congratulations! You now have:
- ✅ Complete TRADIE Dashboard project
- ✅ All documentation files
- ✅ Working development environment
- ✅ Teaching materials ready
- ✅ Ready to code and learn!

**For Teachers:**
Start planning your curriculum using the 10-week guide in README.md!

**For Students:**
Start exploring the code and building your web development skills!

---

## 📝 **Checklist Summary**

### **Complete Setup Checklist:**

**Download Phase:**
- [ ] Located Export/Download button in Figma Make
- [ ] Downloaded tradie_code.zip
- [ ] Extracted to working directory

**Reorganization Phase:**
- [ ] Created `/src` folder
- [ ] Moved App.tsx to `/src`
- [ ] Moved components/ to `/src`
- [ ] Moved contexts/ to `/src`
- [ ] Moved styles/ to `/src`
- [ ] Verified main.tsx is in `/src`

**Installation Phase:**
- [ ] Node.js installed (v18+)
- [ ] Navigated to project folder
- [ ] Ran `npm install`
- [ ] No errors during installation

**Verification Phase:**
- [ ] Ran `npm run dev`
- [ ] Server started successfully
- [ ] Browser opened automatically
- [ ] Login screen visible
- [ ] No console errors
- [ ] Can login successfully
- [ ] Dashboard displays correctly
- [ ] Navigation works

**Documentation Phase:**
- [ ] README.md reviewed
- [ ] Documentation files accessible
- [ ] Know where to find help

**Ready to Teach/Learn:**
- [ ] Application running smoothly
- [ ] Comfortable with file structure
- [ ] Know how to restart server
- [ ] Know how to make changes
- [ ] Ready for first lesson!

---

**Version:** 1.0  
**Last Updated:** October 28, 2025  
**Next Steps:** Read README.md for curriculum and teaching guide

**Happy Coding! 🚀**
