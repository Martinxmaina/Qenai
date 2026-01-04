# QENAI Website - Issues Report

**Date:** January 1, 2026  
**Agency Founded:** 2025

---

## 🔴 CRITICAL ISSUES

### 1. Broken Links (# placeholders)

#### Blog Page (`/app/blog/page.tsx`)
- **Line 90**: "Read Article" button → `href="#"`

#### Resources Page (`/app/resources/page.tsx`)
- **Line 79**: "Download" button (Whitepapers) → `href="#"`
- **Line 91**: "Download" button (eBooks) → `href="#"`
- **Line 122**: "Watch" button (Webinars) → `href="#"`
- **Line 141**: "Use Tool" buttons (Free Tools) → All `href="#"`

#### Contact Page (`/app/contact/page.tsx`)
- **Line 126**: LinkedIn social link → `href="#"`
- **Line 133**: Twitter/X social link → `href="#"`
- **Line 140**: GitHub social link → `href="#"`

---

## ⚠️ GENERIC/PLACEHOLDER CONTENT

### Home Page (`/app/page.tsx`)
- **Lines 67-70**: Trusted companies section
  - "Acme Corp" → Generic placeholder
  - "GlobalTech" → Generic placeholder
  - "Nebula AI" → Generic placeholder
  - "Vertex" → Generic placeholder

### Team Page (`/app/team/page.tsx`)
**Leadership Team (Lines 6-31):**
- Dr. Sarah Chen (Former DeepMind, PhD MIT)
- Michael Rodriguez (Ex-VP Stripe)
- Dr. Aisha Patel (Stanford faculty)
- James Kim (Previously Airbnb)

**All names and credentials are generic placeholders**

### Case Studies Page (`/app/cases/page.tsx`)
**Company Names (Lines 8-84):**
- GlobalHealth Systems → Generic
- TechBank International → Generic
- RetailCo → Generic
- ManufacturePro → Generic
- LogisticsPlus → Generic
- EnergyGrid Corp → Generic

**Testimonials (Lines 200-214):**
- Dr. Emily Zhang, CTO GlobalHealth Systems → Generic
- James Rodriguez, VP Security TechBank → Generic
- Sarah Kim, COO RetailCo → Generic

---

## 🔧 TIMELINE INCONSISTENCIES

### Story Page (`/app/story/page.tsx`)
**Current Timeline:** Shows founding in **2018**  
**Required:** Should show founding in **2025** (agency formed in 2025)

**Lines 8-34** - Milestones need updating:
```javascript
Current:
- 2018: Founded QENAI
- 2020: QENAI Core v1.0
- 2022: $40M Raised
- 2023: London & Tokyo Offices

Should be:
- 2025: Founded QENAI (current year)
- Future milestones adjusted accordingly
```

**Line 38**: Stats show "6+ Years of Innovation" → Should be "0-1 Years" or "Founded 2025"

**Line 74**: Text says "In 2018" → Should say "In 2025"

---

## 📋 MISSING PAGES

### Legal Pages (Referenced in Footer)
1. **Privacy Policy** → Currently redirects to `/contact`
2. **Terms of Service** → Currently redirects to `/contact`
3. **Security Policy** → Currently redirects to `/technology`

These should either:
- Have dedicated pages created
- Be marked as `href="#"` placeholders
- Link to a "Coming Soon" page

---

## 🌐 SOCIAL MEDIA LINKS

### Footer (`/components/Footer.tsx`)
- **Line 43**: LinkedIn → `https://linkedin.com/company/qenai` (may not exist)
- **Line 52**: Twitter/X → `https://twitter.com/qenai` (may not exist)

**Recommendation:** Replace with actual social media URLs or use `href="#"` placeholders

---

## 📅 COPYRIGHT YEAR

### Footer (`/components/Footer.tsx`)
- **Line 123**: Shows "© 2024 QENAI Inc."
- **Should be:** "© 2025 QENAI Inc." (agency founded 2025, current year 2026)

---

## ✅ WORKING LINKS (Verified)

### Navigation
- All header navigation links → ✅ Working
- Footer company links → ✅ Working
- CTA buttons to `/contact`, `/audit`, `/dashboard` → ✅ Working

### Internal Page Links
- `/solutions` → ✅ Working
- `/technology` → ✅ Working
- `/cases` → ✅ Working
- `/resources` → ✅ Working
- `/blog` → ✅ Working
- `/faq` → ✅ Working
- `/story` → ✅ Working
- `/values` → ✅ Working
- `/team` → ✅ Working
- `/contact` → ✅ Working
- `/audit` → ✅ Working
- `/assessment` → ✅ Working
- `/dashboard` → ✅ Working

---

## 🎯 PRIORITY FIXES

### High Priority
1. ✅ Fix Story page timeline (2025 founding)
2. ✅ Fix copyright year to 2025
3. ✅ Replace generic company names on homepage
4. ✅ Fix broken # links in Blog/Resources/Contact pages

### Medium Priority
5. ⚠️ Replace placeholder team member names
6. ⚠️ Replace case study company names
7. ⚠️ Update social media links

### Low Priority
8. ⚠️ Create or link proper legal pages
9. ⚠️ Add real company logos/images

---

## 📝 RECOMMENDATIONS

1. **Brand Assets**: Replace all generic company names with real client names (with permission)
2. **Team Photos**: Add actual team member photos and credentials
3. **Legal Pages**: Create Privacy Policy and Terms of Service pages
4. **Social Media**: Set up official QENAI social media accounts before launch
5. **Blog Content**: Add actual blog posts with real content
6. **Resources**: Upload actual whitepapers, eBooks, and webinar recordings

---

**Report Generated:** January 1, 2026  
**Next Review:** After fixes implemented


