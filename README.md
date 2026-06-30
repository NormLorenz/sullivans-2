
# Sullivan Excavating, Inc.

This project is a modern, responsive website for Sullivan Excavating, Inc. It presents the company’s services, completed projects, client testimonials, and contact information through a polished single-page application experience.

SullivanExcavatingInc.com is the website for **Sullivan Excavating Inc**, a long‑established, family‑run excavation contractor serving **Stevens County and Spokane County, Washington**. Their site outlines their history, services, and customer testimonials.   [sullivanexcavatinginc.com](https://sullivanexcavatinginc.com/)

---

### ⭐ Key Takeaway  
They provide **site prep, foundations, trenching, demolition, grading, driveways, and erosion control**, with **free estimates** and a reputation for reliable, on‑time work.

---

### 🏗️ Services They Offer  
- **Site Preparation** — leveling building sites, road building, land clearing, demolition, drainage.   [sullivanexcavatinginc.com](https://sullivanexcavatinginc.com/)  
- **Foundation Excavation** — basements, crawlspaces, foundation digs.   [sullivanexcavatinginc.com](https://sullivanexcavatinginc.com/)  
- **Demolition** — residential and commercial tear‑downs with debris removal and backfill.   [sullivanexcavatinginc.com](https://sullivanexcavatinginc.com/)  
- **Utility Trenching** — water, sewer, drainage lines, permits, and utility coordination.   [sullivanexcavatinginc.com](https://sullivanexcavatinginc.com/)  
- **Land Clearing** — tree and stump removal.   [sullivanexcavatinginc.com](https://sullivanexcavatinginc.com/)  
- **Finish Grading** — topsoil, contouring, site cleanup.   [sullivanexcavatinginc.com](https://sullivanexcavatinginc.com/)  
- **Driveways & Roads** — gravel overlays, compaction, rural access improvements.   [sullivanexcavatinginc.com](https://sullivanexcavatinginc.com/)  
- **Erosion Control** — silt fences, French drains, drainage systems.   [sullivanexcavatinginc.com](https://sullivanexcavatinginc.com/)

---

### 👍 Reputation & Testimonials  
Customers highlight:  
- Work completed **on time** and **within cost estimates**  
- **High workmanship quality**  
- **Strong communication** and attention to customer needs  
  [sullivanexcavatinginc.com](https://sullivanexcavatinginc.com/)

---

### 📞 Contact Workflow  
Their site encourages reaching out directly for:  
- Free estimates  
- Project questions  
- Scheduling site visits  
  [sullivanexcavatinginc.com](https://sullivanexcavatinginc.com/)

---

## Project Summary

Sullivan Excavating, Inc. is built with:
- React and TypeScript
- Vite for development and builds
- React Router for multi-page navigation
- Lucide icons for visual elements
- A simple, professional layout designed for construction and excavation businesses

The site includes the following main sections:
- Home
- About
- Services
- Projects
- Testimonials
- Contact

## Development

Install dependencies:
```bash
npm install
```

Start the local development server:
```bash
npm run dev
```

Build the production bundle:
```bash
npm run build
```

Preview the production build locally:
```bash
npm run preview
```

## Google Firebase Deployment

This project is configured for Firebase Hosting.

### 1. Install Firebase CLI
If you do not already have the Firebase CLI installed, run:
```bash
npm install -g firebase-tools
```

### 2. Sign in to Firebase
```bash
firebase login
```

### 3. Initialize or confirm hosting
If this project has not been linked to Firebase yet, run:
```bash
firebase init hosting
```

When prompted:
- Select an existing Firebase project or create a new one
- Set the public directory to: `dist`
- Configure as a single-page app: `Yes`
- Do not overwrite existing files unless you intend to replace them

### 4. Deploy the site
Build the app and deploy:
```bash
npm run build
firebase deploy
```

After deployment, Firebase will provide a public hosting URL for the site.

## Notes

The Firebase hosting configuration is already set up in the project to serve the built app from the `dist` folder and route all requests to `index.html` for client-side navigation.

TODO: Determine where to display "success hinges on a passion for excellence" on the website

TODO: There seems to be a form factor issue with the image utilities-2.jpg

TODO: Remove Twilio CNAME's from DNS Records for sullivanexcavatinginc.com on SquareSpace 

TODO: You have it down below to so maybe put owner / operator there and delete the top one? What do you think?

TODO: On cell it cuts his face in half on top for some reason.

TODO: Determine how Erin's picture should be displayed when viewed on a cell-phone. 

TODO: 'Read Our Story' is yet to be implemented. Also I found that if you click on Read Our Story (near Erin's picture) it doesn't go anywhere. Could you write up something, otherwise we could just remove the button.

TODO: I'm not sure why but when you click on anything like contact, home, projects etc it doesn't go to the top as it should for some reason.