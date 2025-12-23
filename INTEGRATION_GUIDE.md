# 🔧 Integration Guide: Adding CutCraving Sections to Existing Theme

## ✅ Your Existing Theme is PERFECT

Your `theme.liquid` is already using Shopify 2.0 sections architecture, so the sections I created will work seamlessly without any changes to your theme.liquid!

---

## 📦 What You Have Now

**Existing Theme Structure:**
```
your-theme/
├── layout/
│   └── theme.liquid  ← Keep this! Don't touch!
├── sections/
│   └── (your existing sections)
├── assets/
│   ├── cc-unforgettable.css
│   ├── cc-unforgettable.js
│   └── (other assets)
```

**New Sections I Created:**
```
shopify-theme/sections/
├── trust-bar.liquid
├── header.liquid  ← Might conflict with yours
├── hero.liquid
├── product-carousel.liquid
├── goals-collection.liquid
├── testimonials.liquid
├── newsletter.liquid
└── sticky-cta.liquid
```

---

## 🚀 Integration Steps (5 Minutes)

### Step 1: Upload Section Files

**Option A: Shopify Admin**
1. Go to **Online Store > Themes**
2. Click **Actions > Edit code** on your current theme
3. In left sidebar, find **Sections** folder
4. For each section file I created:
   - Click **Add a new section**
   - Name it (e.g., `cc-hero`, `cc-product-carousel`)
   - Copy-paste the content from my files
   - Save

**Option B: Theme Kit**
```bash
# Copy section files to your existing theme
cp shopify-theme/sections/hero.liquid your-theme/sections/cc-hero.liquid
cp shopify-theme/sections/product-carousel.liquid your-theme/sections/cc-product-carousel.liquid
cp shopify-theme/sections/goals-collection.liquid your-theme/sections/cc-goals.liquid
cp shopify-theme/sections/testimonials.liquid your-theme/sections/cc-testimonials.liquid
cp shopify-theme/sections/newsletter.liquid your-theme/sections/cc-newsletter.liquid
cp shopify-theme/sections/sticky-cta.liquid your-theme/sections/cc-sticky-cta.liquid
cp shopify-theme/sections/trust-bar.liquid your-theme/sections/cc-trust-bar.liquid
```

**Note:** I prefixed with `cc-` to avoid conflicts with your existing sections.

---

### Step 2: Handle CSS Integration

You already have `cc-unforgettable.css`. You have 3 options:

**Option A: Merge CSS (Recommended)**
Add the CSS from my `shopify-theme/assets/theme.css` to your existing `cc-unforgettable.css`:

1. Go to **Online Store > Themes > Actions > Edit code**
2. Open `assets/cc-unforgettable.css`
3. At the bottom, add a comment:
```css
/* ============================================
   CUTCRAVING MODULAR SECTIONS CSS
   ============================================ */
```
4. Copy the relevant section styles from `shopify-theme/assets/theme.css`
5. Save

**Option B: Separate CSS File**
Upload my CSS as a separate file:
1. Create new asset: `assets/cc-sections.css`
2. Copy content from `shopify-theme/assets/theme.css`
3. In your `theme.liquid`, after line 285 (after cc-unforgettable.css), add:
```liquid
{{ 'cc-sections.css' | asset_url | stylesheet_tag }}
```

**Option C: Inline in Sections**
Each section already has its styles in `<style>` tags, so you can actually skip this step! The sections will work as-is.

---

### Step 3: Add Sections to Your Homepage

1. Go to **Online Store > Themes > Customize**
2. On the homepage, click **Add section**
3. Find your new sections (they'll appear in the list):
   - CC Hero
   - CC Product Carousel
   - CC Goals Collection
   - CC Testimonials
   - CC Newsletter
   - CC Sticky CTA
4. Add them in the order you want
5. Customize content for each section
6. **Save**

---

### Step 4: Configure Section Content

For each section you added:

#### CC Hero Section
- Edit title: "100% Natural Peanut Butter & Herbal Teas"
- Set primary button link → `/collections/all`
- Set secondary button link → `/products/peanut-butter`
- Upload/adjust product jar text
- Add trust badges

#### CC Product Carousel
- **IMPORTANT:** Select your product collection from dropdown
- Or add manual product blocks
- Set button text

#### CC Goals Collection
- Add goal blocks
- Set emojis and links to your collections

#### CC Testimonials
- Add testimonial blocks
- Enter quotes and author names

#### CC Newsletter
- Customize text
- Form automatically connects to Shopify customers

#### CC Sticky CTA
- Set CTA text and link
- Adjust scroll trigger

---

## ⚠️ Important: Don't Replace Header

I created a `header.liquid` section, but you likely already have a header in your theme. **Skip this section** and keep your existing header.

If you want to use my trust bar (the sticky top bar), add `cc-trust-bar.liquid` separately.

---

## 🎨 CSS Variables Compatibility

Your theme already uses CSS variables in the inline `{% style %}` block (lines 142-280 of your theme.liquid). My sections use their own scoped styles, so there's **no conflict**.

If you want my sections to inherit your theme colors:

1. Open each section file
2. Replace hardcoded colors with your theme variables:

**Example in `cc-hero.liquid`:**
```liquid
<!-- BEFORE -->
background: {{ section.settings.primary_button_bg }};

<!-- AFTER (using your theme vars) -->
background: rgb(var(--color-button));
```

But this is **optional** - sections work fine with their own color settings.

---

## 📱 JavaScript Integration

You already have `cc-unforgettable.js`. My sections include some inline JavaScript for:
- Sticky CTA scroll trigger
- Product carousel interactions

These are isolated and won't conflict. If you want to merge:

**Option A: Keep Separate (Easiest)**
Sections work as-is with inline scripts.

**Option B: Merge into cc-unforgettable.js**
Copy the relevant JavaScript from my section files to your main JS file.

---

## ✅ Testing Checklist

After adding sections:

- [ ] Visit homepage in incognito
- [ ] Test on mobile
- [ ] Check that existing sections still work
- [ ] Verify cart functionality
- [ ] Test newsletter signup
- [ ] Check page load speed (Shopify speed test)
- [ ] Verify SEO (your existing meta tags still work)

---

## 🔄 Section Ordering

In the Shopify theme editor, you can drag and drop sections to reorder them. Recommended order:

1. Your existing header (keep it!)
2. CC Trust Bar (optional - sticky top bar)
3. CC Hero
4. CC Product Carousel
5. CC Goals Collection
6. CC Testimonials
7. CC Newsletter
8. Your existing footer (keep it!)
9. CC Sticky CTA (appears on scroll)

---

## 🎯 Quick Start Checklist

**5-Minute Setup:**
1. ✅ Copy 7 section files to your theme (exclude header.liquid)
2. ✅ In theme editor, add sections to homepage
3. ✅ Customize content for each section
4. ✅ Link Product Carousel to your collection
5. ✅ Set all button URLs
6. ✅ Save and preview

**That's it!** Your existing theme stays intact, and you get modular sections.

---

## 💡 Pro Tips

### Use Different Layouts
You can create a new template just for the CutCraving style:

1. Go to **Templates**
2. Add new template: `index.cutcraving.json`
3. Add all my sections there
4. Keep your existing homepage as-is
5. Switch between them in theme settings

### Collection-Specific Landing Pages
Use my sections on collection pages:

1. Create `templates/collection.cutcraving.json`
2. Add CC Hero, CC Product Carousel, CC Testimonials
3. Apply to specific collections

### A/B Testing
Keep both styles:
- Your existing homepage
- New homepage with my sections
- Test which converts better

---

## 🆘 Troubleshooting

### "Section doesn't appear in list"
- Make sure you saved the section file
- Refresh the theme editor
- Check for syntax errors in the liquid file

### "Styles look wrong"
- My sections have inline styles, so they should work
- If using your theme colors, ensure CSS variables are set
- Check browser console for errors

### "Conflicts with existing sections"
- Rename my sections with `cc-` prefix
- Use scoped CSS classes
- Keep sections separate in the editor

---

## 📊 What This Gives You

**With Zero Changes to theme.liquid, you get:**
- ✅ 7 new modular sections
- ✅ All customizable from admin
- ✅ Drag-and-drop reordering
- ✅ No code needed to edit content
- ✅ Works alongside your existing theme
- ✅ Your SEO/performance stays intact

---

## 🎉 Final Notes

Your existing theme.liquid is excellent (clean SEO, proper schema, optimized performance). By adding my sections as **additions** rather than replacements, you get:

1. **Best of both worlds** - Your optimized foundation + new modular sections
2. **No risk** - Existing theme untouched
3. **Flexible** - Use my sections on specific pages only
4. **Reversible** - Remove sections anytime

**Next Steps:**
1. Upload section files (5 min)
2. Add to homepage via theme editor (5 min)
3. Customize content (15 min)
4. Test and launch! 🚀

Your theme is production-ready with these additions!
