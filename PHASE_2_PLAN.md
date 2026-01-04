# Phase 2: Service Detail Pages Implementation Plan

## Overview
Implement 6 comprehensive service detail pages based on the PRD specifications. Each page will follow a structured template with detailed content, interactive elements, and clear CTAs.

---

## Pages to Create

### 1. `/services/audits` - AI Readiness & Workflow Audits
**PRD Section:** 3.3.1 (Lines 333-483)

**Key Content:**
- Hero: "Understand Before You Automate"
- Service Overview (200 words)
- Business Impact metrics
- 4 Phases: Discovery, Analysis, Strategic Roadmap, Presentation
- Process & Methodology (6 steps)
- Technology & Tools
- 4 Use Cases with before/after
- Pricing: $2,000 - $15,000 (3 tiers)
- Related Services

### 2. `/services/automation` - AI Automation Design & Deployment
**PRD Section:** 3.3.2 (Lines 484-785)

**Key Content:**
- Hero: "From Repetitive Tasks to Strategic Work"
- Service Overview (200 words)
- Business Impact: 50-80% time reduction, 400% ROI
- 5 Phases: Solution Design, Development, Testing, Deployment, Stabilization
- Technology: n8n, Make, Zapier, Python, AI models
- 5 Use Cases (Sales Pipeline, Onboarding, Invoice Processing, Marketing, Knowledge Management)
- Pricing: $5,000 - $100,000+ (4 tiers)
- Related Services

### 3. `/services/customer-experience` - AI-Powered Customer Experience Solutions
**PRD Section:** 3.3.3 (Lines 786-1041)

**Key Content:**
- Hero: "Delight Customers While Scaling Support"
- Service Overview (200 words)
- Business Impact: 70%+ inquiries handled by AI, 60-80% cost reduction
- 5 Phases: Customer Journey Mapping, Solution Design, Development, Testing, Launch
- Technology: RAG systems, Claude/GPT-4, Multi-channel deployment
- 4 Use Cases (E-commerce, Financial Services, SaaS, NGO)
- Pricing: $8,000 - $100,000+ (3 tiers)
- Related Services

### 4. `/services/knowledge-systems` - Productivity & Knowledge Systems
**PRD Section:** 3.3.4 (Lines 1042-1289)

**Key Content:**
- Hero: "Turn Organizational Knowledge Into Competitive Advantage"
- Service Overview (200 words)
- Business Impact: 70-80% time reduction in searches, 40-60% faster onboarding
- 5 Phases: Knowledge Audit, System Design, Development, Content Processing, Deployment
- Technology: RAG systems, Pinecone, Claude/GPT-4, Document processing
- 4 Use Cases (Professional Services, Tech Startup, NGO, Sales Team)
- Pricing: $12,000 - $120,000+ (3 tiers)
- Related Services

### 5. `/services/custom-models` - Custom AI Model Development & Fine-Tuning
**PRD Section:** 3.3.5 (Lines 1290-1553)

**Key Content:**
- Hero: "Purpose-Built AI For Your Exact Needs"
- Service Overview (200 words)
- Business Impact: 30-60% accuracy improvement, 95%+ brand consistency
- 6 Phases: Use Case Definition, Data Preparation, Model Selection, Training, Deployment, Evaluation
- Technology: GPT-4, Claude, Mistral, LoRA, RAG
- 4 Use Cases (Legal Document Analysis, Customer Service, Financial Analysis, Documentation Generation)
- Pricing: $25,000 - $250,000+ (3 tiers)
- Related Services

### 6. `/services/advisory` - Advisory & Capacity Building
**PRD Section:** 3.3.6 (Lines 1554-1596)

**Key Content:**
- Hero: "Strategic AI Guidance For Long-Term Success"
- Service Overview (200 words)
- Business Impact: Strategic clarity, risk reduction, team capability building
- Service Types: Executive AI Strategy Advisory, Technical Training, Change Management, Ongoing Advisory
- Engagement Models: Quarterly advisory, monthly check-ins, training programs
- Pricing: Custom (retainer-based)
- Related Services

---

## Common Page Structure (Template)

Each service page will follow this structure:

1. **Hero Section**
   - Service name as headline
   - Compelling tagline from PRD
   - Primary CTA: "Schedule Consultation" or "Book Audit"
   - Secondary CTA: "Request Proposal" or "Download Guide"

2. **Service Overview**
   - What it is (200 words from PRD)
   - Who it's for (bullet list)
   - Why it matters

3. **Business Impact**
   - Primary metrics (large numbers)
   - Secondary benefits
   - Visual: Charts or infographics using shadcn `chart` components

4. **What's Included**
   - Phases breakdown (using `tabs` or `accordion`)
   - Deliverables for each phase
   - Timeline estimates

5. **Process & Methodology**
   - Step-by-step approach (numbered cards or timeline)
   - Visual workflow diagram

6. **Technology & Tools**
   - Platforms and tools used
   - Integration capabilities
   - Display as `badge` components in organized sections

7. **Use Cases**
   - 3-4 detailed scenarios
   - Before/After comparison
   - Results and ROI
   - Display in `card` grid with expandable details

8. **Pricing & Engagement Models**
   - Investment ranges
   - Timeline expectations
   - Best for descriptions
   - Display in `card` grid or `tabs`

9. **Related Services**
   - Cross-sell to complementary services
   - Links to other service pages

10. **CTA Section**
    - Headline and subheadline
    - Primary CTA button
    - Secondary CTA button
    - Contact information

---

## Shadcn Components to Use

### Already Available:
- `card` - For sections, use cases, pricing tiers
- `badge` - For technology tags, pricing labels
- `separator` - For visual divisions
- `tabs` - For phases, pricing tiers, time periods
- `accordion` - For expandable sections (What's Included, Use Cases)
- `chart` - For ROI visualizations, impact metrics
- `button` - For CTAs
- `hover-card` - For interactive service previews

### May Need to Add:
- `timeline` - For process visualization (or use custom with `separator`)
- `progress` - For phase completion indicators
- `table` - For pricing comparison (if needed)

---

## Implementation Strategy

### Step 1: Create Service Page Template
- Create `/app/services/[slug]/page.tsx` dynamic route OR
- Create individual pages: `/app/services/audits/page.tsx`, etc.
- **Recommendation:** Individual pages for better SEO and content control

### Step 2: Extract Content from PRD
- Each service has 200-300 lines of detailed content
- Extract all sections systematically
- Organize into data structures or direct JSX

### Step 3: Build Reusable Components
- `ServiceHero` - Hero section component
- `ServiceOverview` - Overview section
- `BusinessImpact` - Metrics display
- `PhaseBreakdown` - Phases with tabs/accordion
- `UseCaseCard` - Use case display
- `PricingTier` - Pricing card
- `ServiceCTA` - CTA section

### Step 4: Implement Each Page
- Start with `/services/audits` (most detailed in PRD)
- Use as template for others
- Customize content per service

### Step 5: Add Navigation Links
- Update Header dropdown links (already done)
- Add breadcrumbs if needed
- Add related service links

---

## Content Organization

### Data Structure Example:
```typescript
const SERVICE_DATA = {
  hero: {
    title: "AI Readiness & Workflow Audits",
    tagline: "Understand Before You Automate",
    primaryCTA: "Schedule Your Audit",
    secondaryCTA: "Download Sample Report"
  },
  overview: {
    description: "...",
    whoFor: [...],
    whyMatters: "..."
  },
  impact: {
    primary: [...],
    secondary: [...]
  },
  phases: [...],
  process: [...],
  technology: [...],
  useCases: [...],
  pricing: [...],
  related: [...]
}
```

---

## Design Considerations

1. **Consistent Layout**: All service pages follow same structure
2. **Visual Hierarchy**: Use cards, separators, and spacing effectively
3. **Interactive Elements**: Tabs for phases, accordions for details
4. **Charts & Visualizations**: Use shadcn chart components for metrics
5. **Responsive Design**: Mobile-first, works on all screen sizes
6. **Accessibility**: All shadcn components are accessible by default

---

## Success Criteria

- ✅ All 6 service pages created and functional
- ✅ Content matches PRD specifications
- ✅ All navigation links work
- ✅ Charts and visualizations display correctly
- ✅ Mobile responsive
- ✅ Accessible (keyboard navigation, screen readers)
- ✅ Build succeeds with no errors
- ✅ SEO-friendly (proper headings, meta tags)

---

## Estimated Implementation Time

- **Service Page Template**: 2-3 hours
- **Each Service Page**: 3-4 hours (18-24 hours total)
- **Testing & Refinement**: 2-3 hours
- **Total**: ~25-30 hours

---

## Next Steps

1. Review PRD sections 3.3.1 through 3.3.6 in detail
2. Create service page template/structure
3. Implement first service page (`/services/audits`)
4. Use as template for remaining 5 pages
5. Test all navigation and links
6. Add any missing shadcn components
7. Final QA and polish

---

## Notes

- All content is in PRD (1,200+ lines of detailed specifications)
- Use shadcn components exclusively for UI
- Follow Rules.md guidelines (const functions, Tailwind classes, early returns)
- Ensure African market context is clear in examples
- Use real metrics from PRD (don't make up numbers)

---

**Status:** Ready for implementation  
**Dependencies:** Phase 1 complete, Header navigation updated  
**Blockers:** None


