# ⚡ Quick Integration - 3 Steps Only

## Your Situation
- ✅ You have an existing Shopify theme with `theme.liquid`
- ✅ You want to ADD my modular sections
- ✅ You DON'T want to change your existing theme.liquid

**Perfect! Here's the 3-step process:**

---

## Step 1: Upload Section Files (2 minutes)

Go to **Shopify Admin > Online Store > Themes > Actions > Edit code**

Click **Sections** folder, then for each file below:
1. Click **Add a new section**
2. Name it exactly as shown
3. Copy the entire content from my file
4. Click **Save**

**Files to upload:**

| My File | Upload As | Status |
|---------|-----------|--------|
| `shopify-theme/sections/trust-bar.liquid` | `cc-trust-bar` | ✅ Upload |
| `shopify-theme/sections/hero.liquid` | `cc-hero` | ✅ Upload |
| `shopify-theme/sections/product-carousel.liquid` | `cc-products` | ✅ Upload |
| `shopify-theme/sections/goals-collection.liquid` | `cc-goals` | ✅ Upload |
| `shopify-theme/sections/testimonials.liquid` | `cc-testimonials` | ✅ Upload |
| `shopify-theme/sections/newsletter.liquid` | `cc-newsletter` | ✅ Upload |
| `shopify-theme/sections/sticky-cta.liquid` | `cc-sticky-cta` | ✅ Upload |
| ~~`shopify-theme/sections/header.liquid`~~ | ~~Don't upload~~ | ❌ Skip (you have your own header) |

**7 sections total** (excluding header)

---

## Step 2: Add Sections to Homepage (3 minutes)

1. Go to **Online Store > Themes > Customize**
2. You'll see your existing homepage
3. Click **Add section** (anywhere on the page)
4. Search for "cc-" to find your new sections
5. Add them in this order:

```
[Keep your existing header]
  ↓
Add: CC Trust Bar (optional sticky top bar)
  ↓
Add: CC Hero
  ↓
Add: CC Products
  ↓
Add: CC Goals
  ↓
Add: CC Testimonials
  ↓
Add: CC Newsletter
  ↓
[Keep your existing footer]
  ↓
Add: CC Sticky CTA (last - appears on scroll)
```

6. **Drag and drop** to reorder if needed
7. Click **Save**

---

## Step 3: Customize Content (5 minutes)

Click on each section and edit:

### CC Hero
- Title: "100% Natural Peanut Butter"
- Primary button link: `/collections/all`
- Secondary button link: `/products/peanut-butter`
- Add trust badges (edit each block)

### CC Products
- **Select collection** from dropdown (automatic products!)
- OR add manual products
- Set button text: "Explore"

### CC Goals
- Click "Add block" for each goal
- Set emoji, text, and link to collection

### CC Testimonials
- Add testimonial blocks
- Enter quotes and names

### CC Newsletter
- Edit title and subtitle
- Form auto-connects to Shopify!

### CC Sticky CTA
- Set text: "Shop Now" or "Take Quiz"
- Set link URL
- Adjust scroll trigger (default: 300px)

### CC Trust Bar
- Add trust items
- Edit highlighted vs normal text
- Choose icons (emojis)

---

## ✅ Done!

That's it! Your sections are live. Your existing `theme.liquid` is **untouched**.

---

## 🎨 Optional: Merge CSS

If you want to consolidate styles, add this to your `assets/cc-unforgettable.css`:

**At the bottom of cc-unforgettable.css, add:**

```css
/* ============================================
   CC MODULAR SECTIONS - GLOBAL STYLES
   From shopify-theme/assets/theme.css
   ============================================ */

/* Copy the CSS from shopify-theme/assets/theme.css here if you want */
/* OR skip this - sections have inline styles that work fine! */
```

**But this is optional!** Sections work without this.

---

## 📱 What You Get

After these 3 steps:
- ✅ 7 new modular sections live
- ✅ All customizable from admin
- ✅ No coding required
- ✅ Existing theme untouched
- ✅ Can reorder/remove anytime
- ✅ Works on mobile, tablet, desktop

---

## 🆘 Need Help?

**Sections don't appear?**
- Refresh theme editor
- Check sections are saved

**Want different colors?**
- Click each section
- Scroll to color settings
- Use color picker

**Want to remove a section?**
- In theme editor, click section
- Click "Remove section"

---

## 🎯 Next Steps

1. ✅ Test on mobile
2. ✅ Preview before publishing
3. ✅ Publish when ready!

**Your modular homepage is ready! 🚀**
