# 📱 Desktop vs Mobile Sections - Complete Guide

## 🎯 What You Discovered

Your original HTML file has **TWO different experiences**:
1. **Desktop version** - Full desktop layout (lines 1-6958)
2. **Mobile version** - Optimized mobile experience (lines 6959-7350 in `.cc-mob` div)

The CSS at lines 7353-7367 switches between them using:
```css
@media (max-width: 768px) {
  /* Hide desktop */
  body > *:not(.cc-mob) { display: none !important; }
  /* Show mobile */
  .cc-mob { display: block !important; }
}
```

---

## 📦 Complete Section List

I've now created **ALL sections** from both versions:

### ✅ Universal Sections (Work on Both Desktop & Mobile)

| Section File | Purpose | Desktop | Mobile |
|-------------|---------|---------|--------|
| `trust-bar.liquid` | Sticky top trust bar | ✅ | ✅ |
| `header.liquid` | Navigation (skip if using existing) | ✅ | ✅ |
| `product-carousel.liquid` | Product showcase | ✅ | ✅ |
| `goals-collection.liquid` | Collection links by benefit | ✅ | ✅ |
| `testimonials.liquid` | Customer reviews | ✅ | ✅ |
| `newsletter.liquid` | Email signup | ✅ | ✅ |
| `sticky-cta.liquid` | Bottom CTA on scroll | ✅ | ✅ |

### 🖥️ Desktop-Specific Sections

| Section File | Purpose | Used In |
|-------------|---------|---------|
| `hero.liquid` | Hero with animated product jar | Desktop only |

### 📱 Mobile-Specific Sections (NEW!)

| Section File | Purpose | Used In |
|-------------|---------|---------|
| `hero-mobile-carousel.liquid` | Auto-rotating hero carousel | Mobile only |
| `emotional-card.liquid` | "You don't need willpower" card | Mobile only |
| `unforgettable-moment.liquid` | Progressive storytelling reveal | Mobile only |

---

## 🎨 Approach Options

You have **3 ways** to use these sections:

### **Option 1: Responsive Sections (Recommended)**
Use the universal sections that adapt to screen size automatically.

**Best for:**
- Simplicity
- Easier maintenance
- One section, all devices

**Sections to use:**
- Trust Bar
- Product Carousel
- Goals Collection
- Testimonials
- Newsletter
- Sticky CTA

**How it works:**
All these sections have responsive CSS that adapts:
```css
@media (max-width: 768px) {
  /* Mobile styles */
}
```

---

### **Option 2: Separate Desktop & Mobile (Like Original)**
Recreate the original experience with different sections for desktop vs mobile.

**Best for:**
- Exact recreation of original
- Different content/messaging per device
- Advanced customization

**How to set up:**

#### A. Create Two Homepage Templates

**templates/index.desktop.json**
```json
{
  "sections": {
    "trust-bar": { "type": "trust-bar" },
    "header": { "type": "header" },
    "hero-desktop": { "type": "hero" },
    "products": { "type": "product-carousel" },
    "goals": { "type": "goals-collection" },
    "testimonials": { "type": "testimonials" },
    "newsletter": { "type": "newsletter" },
    "sticky-cta": { "type": "sticky-cta" }
  }
}
```

**templates/index.mobile.json**
```json
{
  "sections": {
    "header-mobile": { "type": "header" },
    "hero-mobile": { "type": "hero-mobile-carousel" },
    "emotional-card": { "type": "emotional-card" },
    "unforgettable": { "type": "unforgettable-moment" },
    "products": { "type": "product-carousel" },
    "goals": { "type": "goals-collection" },
    "testimonials": { "type": "testimonials" },
    "newsletter": { "type": "newsletter" },
    "sticky-cta": { "type": "sticky-cta" }
  }
}
```

#### B. Add Device Detection CSS

In your `theme.liquid` or section, add:
```liquid
<style>
  @media (max-width: 768px) {
    .desktop-only { display: none !important; }
  }
  @media (min-width: 769px) {
    .mobile-only { display: none !important; }
  }
</style>
```

#### C. Assign CSS Classes

Desktop sections: add `class="desktop-only"`
Mobile sections: add `class="mobile-only"`

---

### **Option 3: Mixed Approach (Best of Both)**
Use universal sections everywhere, but add mobile-specific storytelling sections.

**Best for:**
- Rich mobile experience
- Maintaining one set of core sections
- Adding mobile-specific emotional storytelling

**Setup:**
1. Use universal sections (Product Carousel, Goals, etc.)
2. Add mobile-specific sections with `mobile-only` class:
   - Emotional Card
   - Unforgettable Moment
   - Mobile Hero Carousel

**Example in theme editor:**
```
[Universal sections - show everywhere]
  Product Carousel
  Goals Collection
  Testimonials

[Mobile-specific - add .mobile-only class]
  Emotional Card
  Unforgettable Moment
```

---

## 🔍 Section Comparison

### Hero Sections

#### Desktop Hero (`hero.liquid`)
- Animated product jar visual
- Static content
- Two-column layout
- Trust badges below buttons

**Visual:**
```
[Text Content]  |  [Animated Jar Visual]
  Title          |      🥜
  Subtitle       |    Product
  Buttons        |      Jar
  Trust Badges   |  (breathing animation)
```

#### Mobile Hero Carousel (`hero-mobile-carousel.liquid`)
- Auto-rotating circle carousel
- Shows PB → 🌿 → 🌺 → 🦋
- Product icons below
- Single column

**Visual:**
```
        Title
      Subtitle
       Tagline

    [Rotating Carousel]
         PB ↻

    🦋  🌺  🌿

   [CTA Button]
```

---

### Mobile-Only Storytelling Sections

#### Emotional Card (`emotional-card.liquid`)
Progressive reveal card with benefits.

**Content:**
```
You don't need willpower.
You need better food.

✓ Stays with you longer
✓ No sugar highs or lows
✓ Feels good — physically & mentally
```

**Animation:**
1. Card fades in
2. Benefits appear one by one (0.2s, 0.6s, 1.0s delays)

---

#### Unforgettable Moment (`unforgettable-moment.liquid`)
Multi-step storytelling reveal.

**Sequence:**
1. **Silence 1** (0.2s): "You don't lack discipline."
2. **Silence 2** (1.4s): "You lack food that works with your body."
3. **Interruption** (2.8s): "Spike → Crash → Crave → Repeat"
4. **Resolution** (4.2s): "CutCraving was designed to interrupt cravings"
5. **CTA** (5.6s): "Start with one better choice"

**Total animation:** ~6 seconds of progressive storytelling

---

## 📋 Quick Decision Guide

**Choose Option 1 (Responsive) if:**
- ✅ You want simplicity
- ✅ Same content for all devices
- ✅ Easier to maintain

**Choose Option 2 (Separate) if:**
- ✅ You want exact original recreation
- ✅ Different messaging per device
- ✅ Mobile needs special storytelling

**Choose Option 3 (Mixed) if:**
- ✅ You want best of both
- ✅ Core sections universal
- ✅ Mobile gets extra storytelling

---

## 🚀 Implementation Steps

### For Option 1 (Responsive - Simplest):

1. Upload these 7 sections:
   - trust-bar
   - product-carousel
   - goals-collection
   - testimonials
   - newsletter
   - sticky-cta
   - hero (or hero-mobile-carousel)

2. Add to homepage via theme editor

3. Done! They auto-adapt to screen size.

---

### For Option 2 (Separate Desktop/Mobile):

1. Upload ALL 10 sections:
   - Universal: trust-bar, product-carousel, goals-collection, testimonials, newsletter, sticky-cta
   - Desktop: hero
   - Mobile: hero-mobile-carousel, emotional-card, unforgettable-moment

2. Create CSS classes in your theme:
```css
@media (max-width: 768px) {
  .desktop-only { display: none !important; }
}
@media (min-width: 769px) {
  .mobile-only { display: none !important; }
}
```

3. In theme editor, add sections:
   - **Desktop sections:** Add `desktop-only` class
   - **Mobile sections:** Add `mobile-only` class

4. Test on both devices!

---

### For Option 3 (Mixed):

1. Upload 10 sections (same as Option 2)

2. Add universal sections to homepage

3. Add mobile storytelling sections with `mobile-only` class:
   - Emotional Card
   - Unforgettable Moment

4. Optional: Use mobile hero carousel for more engaging mobile experience

---

## 📱 Section Order Recommendations

### Desktop Order:
```
1. Trust Bar
2. Header (your existing one)
3. Hero (with animated jar)
4. Product Carousel
5. Goals Collection
6. Testimonials
7. Newsletter
8. Sticky CTA
```

### Mobile Order:
```
1. Header
2. Hero Mobile Carousel
3. Emotional Card
4. Unforgettable Moment
5. Products
6. Goals
7. Testimonials
8. Newsletter
9. Sticky CTA
```

### Mixed (Recommended):
```
1. Trust Bar
2. Header
3. Hero (desktop) / Hero Mobile Carousel (mobile)
4. Emotional Card (mobile-only)
5. Unforgettable Moment (mobile-only)
6. Product Carousel
7. Goals Collection
8. Testimonials
9. Newsletter
10. Sticky CTA
```

---

## ⚙️ Customization Locations

All sections are **100% customizable** from Shopify admin:

**In Theme Editor:**
- Click any section
- Edit all text, colors, images
- Add/remove blocks
- Reorder sections

**Mobile-Specific Settings:**

**Hero Mobile Carousel:**
- Rotation speed (default: 2.5s)
- Carousel products (text + color)
- Product icons below

**Emotional Card:**
- Title and subtitle
- Benefits list (add unlimited)
- Animation triggers

**Unforgettable Moment:**
- All 5 reveal statements
- Value propositions (Fill, Calm, Steady)
- CTA button
- Timing is automatic (optimized)

---

## 🎯 My Recommendation

**Use Option 3 (Mixed):**

✅ **Why:**
- Universal sections work everywhere (easier)
- Mobile gets rich storytelling (like original)
- Desktop stays clean (like original)
- Easy to maintain
- Best user experience

✅ **How:**
1. Upload all 10 sections
2. Use universal sections as base
3. Add mobile storytelling with `.mobile-only`
4. Test both devices

✅ **Result:**
- Desktop: Clean, professional
- Mobile: Engaging, emotional storytelling
- One theme, two experiences

---

## 📊 File Checklist

**Universal Sections (7):**
- [ ] trust-bar.liquid
- [ ] product-carousel.liquid
- [ ] goals-collection.liquid
- [ ] testimonials.liquid
- [ ] newsletter.liquid
- [ ] sticky-cta.liquid
- [ ] header.liquid (skip if using existing)

**Desktop Sections (1):**
- [ ] hero.liquid

**Mobile Sections (3):**
- [ ] hero-mobile-carousel.liquid
- [ ] emotional-card.liquid
- [ ] unforgettable-moment.liquid

**Total: 10 sections** (or 9 if skipping header)

---

## 🔄 Migration Path

If you already uploaded the first 7 sections:

1. ✅ Keep those - they work great!
2. ✅ Add the 3 new mobile sections
3. ✅ Mark them as `.mobile-only`
4. ✅ Test on mobile - you'll see the storytelling!

**No changes needed to existing sections!**

---

## 📞 Quick Reference

| Need | Use This Section |
|------|------------------|
| Trust bar (top sticky) | `trust-bar.liquid` |
| Desktop hero | `hero.liquid` |
| Mobile hero | `hero-mobile-carousel.liquid` |
| Mobile emotional hook | `emotional-card.liquid` |
| Mobile storytelling | `unforgettable-moment.liquid` |
| Products showcase | `product-carousel.liquid` |
| Collection links | `goals-collection.liquid` |
| Reviews | `testimonials.liquid` |
| Email signup | `newsletter.liquid` |
| Bottom CTA | `sticky-cta.liquid` |

---

**You now have the complete toolkit for both desktop AND mobile experiences! 🎉**
