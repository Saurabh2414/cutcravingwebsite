# 🚀 Quick Installation Guide

## Step-by-Step Setup (5 minutes)

### 1️⃣ Upload Theme to Shopify

**Option A: ZIP Upload (Easiest)**
1. Compress the entire `shopify-theme` folder to `cutcraving-theme.zip`
2. Log into your Shopify admin
3. Go to **Online Store > Themes**
4. Click **Add theme** button (top right)
5. Select **Upload ZIP file**
6. Choose `cutcraving-theme.zip`
7. Wait for upload to complete
8. Click **Publish** or **Customize**

**Option B: Theme Kit (For Developers)**
```bash
# Install Theme Kit
brew tap shopify/shopify
brew install themekit

# Navigate to theme folder
cd shopify-theme

# Configure (get API credentials from Shopify Admin > Apps > Private App)
theme configure --password=YOUR_API_PASSWORD --store=yourstore.myshopify.com

# Deploy theme
theme deploy
```

---

### 2️⃣ Customize Your Homepage

1. In Shopify Admin, go to **Online Store > Themes**
2. Find "CutCraving Theme" and click **Customize**
3. You'll see all sections in the left sidebar

**Configure Each Section:**

#### Trust Bar
- Click "Trust Bar" section
- Click "Add block" to add trust items
- Edit highlighted text (e.g., "500+")
- Edit normal text (e.g., "Happy Customers")

#### Header
- Click "Header" section
- Edit "Logo Text" (default: CutCraving)
- Add navigation links:
  - Click "Add block"
  - Enter label (e.g., "Products")
  - Enter link (e.g., `/collections/all`)

#### Hero Section
- Edit main title and subtitle
- Set button links:
  - Primary button → `/pages/quiz` or `/collections/all`
  - Secondary button → `/products/peanut-butter`
- Customize product jar text
- Add trust badges below

#### Product Carousel
- **Automatic Products:**
  - Select "Product Collection" from dropdown
  - Choose number of products to show
- **Manual Products:**
  - Leave collection blank
  - Click "Add block" > "Manual Product"
  - Upload image, add title, description, link

#### Goals Section
- Add goal cards:
  - Click "Add block"
  - Set emoji icon (🏋️, 🌙, ⚡)
  - Enter goal text
  - Set link to collection

#### Testimonials
- Click "Add block" to add testimonials
- Enter quote, author name
- Optional: Add badge text

#### Newsletter
- Edit title and subtitle
- Customize button text
- Newsletter submissions auto-save to Customers

#### Sticky CTA
- Set CTA text (e.g., "Take the Quiz")
- Set link URL
- Set scroll trigger (when it appears)

---

### 3️⃣ Add Your Products

1. Go to **Products > Add product**

**For Peanut Butter:**
- Title: `100% Natural Peanut Butter`
- Description: `Made fresh weekly. No sugar, no oil, no additives.`
- Upload product images
- Set price
- Add to collection: `All`, `Protein`

**For Herbal Teas:**
- Title: `Chamomile Tea`
- Description: `Wind down naturally with premium chamomile flowers.`
- Upload product images
- Set price
- Add to collection: `All`, `Calm`

**Repeat for all products.**

---

### 4️⃣ Create Collections

1. Go to **Products > Collections**
2. Click **Create collection**

**Create these collections:**

| Collection Name | Type | Conditions |
|----------------|------|------------|
| All | Automatic | Product type is not empty |
| Protein | Manual | Add peanut butter products |
| Calm | Manual | Add chamomile, sleep teas |
| Focus | Manual | Add blue tea, focus products |

**Link collections to sections:**
- In theme editor, Product Carousel → select "All" collection
- In Goals section, link each goal to appropriate collection

---

### 5️⃣ Set Up Navigation

1. Go to **Online Store > Navigation**
2. Edit "Main menu":
   - Add link: **Products** → `/collections/all`
   - Add link: **About** → `/pages/about` (create page first)
   - Add link: **Contact** → `/pages/contact`

3. Create pages:
   - Go to **Online Store > Pages**
   - Create: About, Contact, FAQ, Shipping Policy

---

### 6️⃣ Configure Theme Settings

1. In theme editor, scroll to bottom of left sidebar
2. Click **Theme settings**

**Set Global Colors:**
- Primary Green: `#2D5F3F`
- Accent Brown: `#8B6F47`
- Background Beige: `#F5EDE4`

**Add Social Links:**
- Facebook URL
- Instagram URL
- Twitter URL

---

### 7️⃣ Final Checks Before Launch

**Test These:**
- [ ] All navigation links work
- [ ] Product carousel displays correctly
- [ ] "Add to Cart" buttons work
- [ ] Cart icon updates count
- [ ] Newsletter form submits successfully
- [ ] Sticky CTA appears on scroll
- [ ] Mobile responsiveness (test on phone)
- [ ] Checkout flow works end-to-end

**Set Up:**
- [ ] Shipping rates (Settings > Shipping and delivery)
- [ ] Payment providers (Settings > Payments)
- [ ] Taxes (Settings > Taxes and duties)
- [ ] Legal pages (Settings > Policies)
- [ ] Domain name (Settings > Domains)

---

### 8️⃣ Go Live! 🎉

1. In **Online Store > Themes**
2. Find "CutCraving Theme"
3. Click **Publish**
4. Your store is now live!

---

## 🆘 Common Issues

### "Sections not showing"
- Click "Add section" in theme editor
- Select the section you want
- Sections must be added to appear

### "Products not displaying"
- Ensure products are published (not draft)
- Check that collection is selected in Product Carousel settings

### "Images not loading"
- Upload images directly to products
- Use Shopify's image hosting (not external URLs)

### "Cart not working"
- Ensure products have variants with inventory
- Check browser console for errors

---

## 📹 Video Tutorial

Watch the full setup tutorial: [Coming Soon]

---

## 💡 Pro Tips

1. **Start with preset:** The theme includes default content - just replace text/images
2. **Use high-quality images:** At least 1200x1200px for products
3. **Test mobile first:** 60%+ of traffic is mobile
4. **Enable reviews:** Install Judge.me or Loox app
5. **Add urgency:** Use inventory counts, "Only X left!"
6. **Optimize images:** Use Shopify's built-in compression
7. **Set up abandoned cart:** Shopify does this automatically
8. **Use metafields:** Store extra product data (e.g., "Used by 500+ daily")

---

## 🎯 Next Steps After Launch

1. **Install apps:**
   - Judge.me (reviews)
   - Klaviyo (email marketing)
   - Google Analytics

2. **Set up marketing:**
   - Create Instagram account
   - Set up Facebook Pixel
   - Start email list building

3. **Optimize:**
   - Run Shopify speed test
   - Optimize images
   - Add product videos

4. **Scale:**
   - Add more products
   - Create blog for SEO
   - Run ads (Google, Facebook)

---

## 📞 Need Help?

- 📧 Email: support@cutcraving.com
- 📚 Full Documentation: See `README.md`
- 🎥 Video Tutorials: [Coming Soon]

---

**Your store is ready to sell! Good luck! 🚀🥜🌿**
