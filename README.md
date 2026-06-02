# Abbas Asif Butt — Portfolio

A modern dark-themed Next.js portfolio with 7 project case studies, animated stats, slide-in panels, CV overlay, and full mobile responsiveness.

## 🚀 Getting Started

### 1. Install dependencies
```bash
npm install
```

### 2. Run development server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000)

### 3. Build for production
```bash
npm run build
npm start
```

## 📁 Project Structure

```
src/
├── app/
│   ├── layout.tsx       # Root layout with metadata & fonts
│   └── page.tsx         # Main page
├── components/
│   ├── sections/
│   │   ├── Hero.tsx
│   │   ├── Marquee.tsx
│   │   ├── Stats.tsx
│   │   ├── Projects.tsx
│   │   ├── About.tsx
│   │   ├── FAQ.tsx
│   │   └── Contact.tsx
│   ├── ui/
│   │   ├── Tag.tsx
│   │   └── CaseStudyPanel.tsx
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   └── CV.tsx
├── context/
│   └── CVContext.tsx     # Global CV open/close state
├── data/
│   └── projects.ts       # All 7 projects data
└── styles/
    └── globals.css
public/
├── babystore.png
├── strokesisters.png
├── salemfive.png
├── gspac.png
├── seri.png
├── gonatural.png
└── stockai.png
```

## 🌐 Deploy to Vercel

```bash
npx vercel
```

Or connect your GitHub repo to [vercel.com](https://vercel.com) for automatic deployments.

## ✏️ Customising

- **Projects**: Edit `src/data/projects.ts`
- **Personal info**: Update `src/components/sections/Hero.tsx`, `About.tsx`, `Contact.tsx`
- **CV**: Edit `src/components/CV.tsx`
- **Colors**: Update CSS variables in `src/styles/globals.css`
