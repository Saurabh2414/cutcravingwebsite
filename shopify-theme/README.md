# CutCraving Shopify Theme

A fully modular, customizable Shopify theme for CutCraving's natural peanut butter and herbal tea products.

## 🚀 Installation

### Method 1: Theme Kit (Recommended)

1. Install Shopify Theme Kit:
```bash
brew tap shopify/shopify
brew install themekit
```

2. Configure theme kit:
```bash
cd shopify-theme
theme configure --password=[your-api-password] --store=[your-store.myshopify.com] --themeid=[theme-id]
```

3. Deploy the theme:
```bash
theme deploy
```

### Method 2: Manual Upload (ZIP)

1. Compress the `shopify-theme` folder into a ZIP file
2. In Shopify Admin, go to **Online Store > Themes**
3. Click **Add theme > Upload ZIP file**
4. Select your ZIP file and upload
5. Once uploaded, click **Customize** to edit your theme

### Method 3: GitHub Integration

1. Push this theme to a GitHub repository
2. In Shopify Admin, connect your GitHub account
3. Import theme from GitHub repository

---

## 📁 Theme Structure

```
shopify-theme/
├── layout/
│   └── theme.liquid          # Main theme wrapper
├── sections/
│   ├── trust-bar.liquid      # Top sticky trust bar
│   ├── header.liquid         # Navigation header
│   ├── hero.liquid           # Hero section with product jar
│   ├── product-carousel.liquid  # Product showcase
│   ├── goals-collection.liquid  # Collection links by goal
│   ├── testimonials.liquid   # Customer reviews
│   ├── newsletter.liquid     # Email signup form
│   └── sticky-cta.liquid     # Bottom sticky CTA
├── templates/
│   └── index.liquid          # Homepage template
├── assets/
│   ├── theme.css             # Global styles
│   └── theme.js              # Theme JavaScript
├── config/
│   ├── settings_schema.json  # Theme settings definition
│   └── settings_data.json    # Default theme configuration
└── snippets/
    └── (reusable components)
```

---

## 🎨 Customization Guide

### All sections are 100% customizable from the Shopify admin dashboard!

### 1. Trust Bar Section
**Location:** Top of page (sticky)
**Customizable:**
- Add/remove trust items
- Change icons (emojis)
- Edit highlighted vs normal text
- Customize colors

**How to customize:**
1. Go to **Online Store > Themes > Customize**
2. Select "Trust Bar" section
3. Add blocks to add more trust items
4. Edit text and colors for each item

### 2. Header Section
**Customizable:**
- Logo text and size
- Logo color
- Navigation links (add/remove/reorder)
- Cart button text and icon
- All button colors

**How to customize:**
1. Click on the header section
2. Edit "Logo Text" field
3. Add navigation links using "Add block"
4. Drag blocks to reorder menu items

### 3. Hero Section
**Customizable:**
- Background gradient colors
- Main title and subtitle
- Description text
- Primary & secondary button (text, links, colors)
- Product jar details (brand, percentage, product name)
- Trust badges below buttons

**How to customize:**
1. Select "Hero Section"
2. Edit all text fields
3. Change button links to your product/collection pages
4. Customize colors
5. Add/remove trust badges

### 4. Product Carousel
**Customizable:**
- Section title
- Product collection (pulls products automatically!)
- Number of products to show
- Button text and colors
- Bottom tagline

**Two modes:**
- **Automatic:** Select a collection and products auto-populate
- **Manual:** Add individual product blocks with custom images/links

**How to customize:**
1. Select "Product Carousel" section
2. Choose a collection from dropdown (or leave blank for manual)
3. If manual: Add "Manual Product" blocks
4. Upload images, add titles, descriptions, and links

### 5. Goals / Collection Links
**Customizable:**
- Section title
- Add unlimited goal cards
- Custom icon (emoji) per goal
- Goal text
- Link URL (to collections or pages)
- All colors

**How to customize:**
1. Select "Goals Section"
2. Add "Goal Link" blocks
3. Set emoji icon, text, and link for each
4. Reorder by dragging blocks

### 6. Testimonials
**Customizable:**
- Section title and subtitle
- Add multiple testimonial cards
- Quote text
- Author name
- Optional badge (e.g., "Protein & Fitness")
- All colors

**How to customize:**
1. Select "Testimonials" section
2. Add "Testimonial" blocks
3. Enter quote, author, and optional badge text

### 7. Newsletter Signup
**Customizable:**
- Title and subtitle
- Email placeholder text
- Button text
- Success message
- All colors (background, input, button)

**Note:** Automatically integrates with Shopify customer database

### 8. Sticky CTA
**Customizable:**
- CTA text
- Link URL
- Left and right icons
- Trigger scroll distance (when it appears)
- Button colors

**How to customize:**
1. Select "Sticky CTA" section
2. Edit text and link
3. Set scroll trigger (default: 300px)

---

## 🔄 Reordering Sections

All sections can be reordered via drag-and-drop in the theme editor:

1. Click **Online Store > Themes > Customize**
2. On the left sidebar, hover over any section
3. Drag the ⋮⋮ handle to reorder
4. Click **Save**

---

## 🛒 Setting Up Products

### Step 1: Create Collections

1. Go to **Products > Collections**
2. Create these collections:
   - **All** (automatic: all products)
   - **Protein** (manual: peanut butter products)
   - **Calm** (manual: chamomile, sleep teas)
   - **Focus** (manual: blue tea, focus products)

### Step 2: Add Products

1. Go to **Products > Add product**
2. Fill in:
   - Title
   - Description
   - Images
   - Price
   - Inventory
3. Assign to appropriate collections
4. Add tags for filtering (optional)

### Step 3: Link Sections to Collections

1. In theme editor, select "Product Carousel"
2. In "Product Collection" dropdown, select your collection
3. Products will automatically populate!

---

## 🎯 Customizing URLs

All links can be customized from the theme editor. Here's where to update common links:

| Link Type | Section | Setting Name |
|-----------|---------|--------------|
| Primary CTA | Hero Section | "Primary Button Link" |
| Secondary CTA | Hero Section | "Secondary Button Link" |
| Product Links | Product Carousel | Select collection or manual links |
| Goal Links | Goals Section | "Link URL" for each block |
| Sticky CTA | Sticky CTA | "CTA Link" |
| Navigation | Header | "Link" for each nav item |

---

## 🖼️ Adding Product Images

### Option 1: Product Images (Recommended)
1. Add images to your products in **Products > [Product Name]**
2. The theme will automatically pull the featured image

### Option 2: Manual Images in Sections
1. In theme editor, go to section
2. Click "Add block" > "Manual Product"
3. Click "Select image" or "Explore free images"
4. Upload or choose image

---

## 🎨 Changing Colors Globally

### Theme-Wide Colors:
1. Go to **Theme Settings** (bottom of left sidebar)
2. Select **Colors**
3. Change:
   - Primary Green
   - Accent Brown
   - Background Beige
   - Text colors

### Section-Specific Colors:
Each section has its own color settings for granular control.

---

## 📱 Mobile Optimization

This theme is **fully responsive** and optimized for:
- Mobile phones (< 768px)
- Tablets (768px - 1024px)
- Desktop (> 1024px)

All sections automatically adapt to screen size.

---

## ✅ Pre-Launch Checklist

Before going live, ensure:

- [ ] All product images uploaded
- [ ] Collections created and products assigned
- [ ] Navigation links point to correct pages
- [ ] Hero section buttons link to quiz/shop pages
- [ ] Newsletter form tested
- [ ] Cart functionality works
- [ ] Test checkout flow end-to-end
- [ ] Mobile responsiveness checked
- [ ] Page speed tested (aim for 50+ score)
- [ ] Legal pages created (Privacy, Terms, Refund)
- [ ] Favicon uploaded
- [ ] Social media links added
- [ ] Google Analytics connected

---

## 🔧 Advanced Customization

### Adding Custom CSS

1. Go to **Online Store > Themes**
2. Click **Actions > Edit code**
3. Find `assets/theme.css`
4. Add your custom CSS at the bottom

### Adding Custom JavaScript

1. Edit code as above
2. Find `assets/theme.js`
3. Add custom scripts at the bottom

### Creating New Sections

1. In code editor, go to **Sections**
2. Click **Add a new section**
3. Copy structure from existing section
4. Add your schema for customization

---

## 🆘 Troubleshooting

### Products not showing in carousel?
- Ensure collection is selected in section settings
- Check that products are published and in the collection

### Newsletter form not working?
- The form uses Shopify's built-in customer form
- Subscribers will appear in **Customers** with "newsletter" tag

### Sticky CTA not appearing?
- Check "Trigger scroll" setting (default 300px)
- Scroll down the page past the trigger point

### Cart count not updating?
- Clear browser cache
- Check browser console for JavaScript errors

---

## 📊 Analytics Integration

### Google Analytics 4

Add to `layout/theme.liquid` before `</head>`:

```liquid
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

Replace `G-XXXXXXXXXX` with your GA4 measurement ID.

---

## 🔌 Recommended Apps

Enhance your store with these Shopify apps:

1. **Judge.me Product Reviews** - Customer reviews
2. **Klaviyo** - Email marketing automation
3. **Loox** - Photo reviews
4. **ReConvert** - Post-purchase upsells
5. **PageFly** - Additional page builder
6. **Bold Subscriptions** - Recurring orders

---

## 📞 Support

For theme support:
- Email: support@cutcraving.com
- Documentation: https://cutcraving.com/docs

---

## 📄 License

This theme is proprietary to CutCraving. All rights reserved.

---

## 🎉 You're Ready!

Your theme is now fully set up and customizable. Head to the Shopify admin and start customizing your store!

**Enjoy building with the CutCraving theme! 🥜🌿**
