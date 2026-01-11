# QENAI Website - Action Checklist

**Quick reference for remaining tasks**

---

## ✅ COMPLETED (No Action Needed)

- [x] Fixed story page timeline (now reflects 2025 founding)
- [x] Fixed all broken `#` links
- [x] Verified copyright year (2025)
- [x] Restored social media links with security attributes
- [x] All 15 pages are functional and responsive

---

## 🔴 CRITICAL (Must Do Before Launch)

- [ ] **Create Privacy Policy page** (legal requirement)
- [ ] **Create Terms of Service page** (legal requirement)
- [ ] **Replace 4 team member names** with real people + photos
  - Currently: Dr. Sarah Chen, Michael Rodriguez, Dr. Aisha Patel, James Kim
- [ ] **Verify or create social media accounts:**
  - [ ] linkedin.com/company/qenai
  - [ ] twitter.com/qenai
  - [ ] github.com/qenai

---

## 🟡 HIGH PRIORITY (Should Do Before Launch)

- [ ] **Replace generic "Trusted by" companies** (homepage)
  - Currently: Acme Corp, GlobalTech, Nebula AI, Vertex
  - Option 1: Real client names (get permission)
  - Option 2: Remove section temporarily
  - Option 3: Use real logos/names of partners

- [ ] **Replace 6 case study companies** with real clients or anonymize
  - Option: "Leading Healthcare Provider", "Global Bank", etc.

- [ ] **Replace 3 testimonials** with real quotes (get permission)

- [ ] **Upload 1 whitepaper, 1 ebook, 1 webinar** to resources section
  - Or disable download buttons until ready

---

## 🟢 NICE TO HAVE (Can Launch Without)

- [ ] Add 3-5 actual blog posts
- [ ] Add team member photos (professional headshots)
- [ ] Add company logos to "Trusted by" section
- [ ] Create video testimonials
- [ ] Add more resources (guides, templates, tools)

---

## 📋 FILE LOCATIONS FOR UPDATES

### To Replace Generic Names:

**Homepage Companies:**
```
File: /app/page.tsx
Lines: 67-70
```

**Team Members:**
```
File: /app/team/page.tsx
Lines: 6-31 (LEADERSHIP array)
```

**Case Studies:**
```
File: /app/cases/page.tsx
Lines: 8-84 (CASE_STUDIES array)
Lines: 200-214 (Testimonials)
```

### To Create Legal Pages:

**Create these new files:**
```
/app/privacy/page.tsx
/app/terms/page.tsx
```

**Update footer links:**
```
File: /components/Footer.tsx
Lines: 15-19 (FOOTER_LINKS.legal)
```

---

## 🚀 LAUNCH CHECKLIST

Before going live:

- [ ] All critical items completed
- [ ] Legal pages live and reviewed by lawyer
- [ ] Social media accounts created and linked
- [ ] All team names and photos are real
- [ ] No placeholder/generic content visible
- [ ] Test all forms (contact, assessment)
- [ ] Test all navigation links
- [ ] Test on mobile devices
- [ ] Run Lighthouse audit
- [ ] Set up analytics (Google Analytics, etc.)
- [ ] Set up error monitoring (Sentry, etc.)
- [ ] Configure domain and SSL
- [ ] Set up email (contact@qenai.ai)

---

## 📞 QUESTIONS?

**All pages are functional** - you can launch with generic content if needed, but it's highly recommended to replace placeholders for credibility.

**Priority order:**
1. Legal pages (required by law)
2. Real team info (builds trust)
3. Social media (for engagement)
4. Real case studies (proves value)
5. Everything else (nice to have)

---

**Last Updated:** January 1, 2026




