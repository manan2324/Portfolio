# Manan's Portfolio

A modern, responsive portfolio website built with Next.js, showcasing my projects, skills, and professional experience as a Full Stack Developer.

## 🚀 Features

- Responsive design with Tailwind CSS
- Project showcase with live demos and GitHub links
- Skills section (MERN Stack, Next.js, etc.)
- Functional contact form with email integration
- Resume download button

## 🛠️ Tech Stack

Next.js 15 • Tailwind CSS • Lucide React • Nodemailer

## ⚙️ Installation & Setup

1. **Clone and install:**
```bash
git clone https://github.com/manan2324/manan-portfolio.git
cd manan-portfolio
npm install
```

2. **Configure email (optional):**
   - Create `.env.local` file:
   ```
   EMAIL_USER=your-email@gmail.com
   EMAIL_PASS=your-gmail-app-password
   ```

3. **Run development server:**
```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000)

## 🎨 Customization

- **Projects:** Edit `projects_data` in `src/components/Project.js`
- **Skills:** Edit `skills_data` in `src/components/About.js`
- **Resume:** Add `Manan_resume.pdf` to `public` folder
- **Contact Email:** Update recipient in `src/app/api/send-email/route.js`

## 🚀 Deployment

Deploy to [Vercel](https://vercel.com):
1. Push to GitHub
2. Import repository to Vercel
3. Add environment variables (`EMAIL_USER`, `EMAIL_PASS`)
4. Deploy

## 📧 Contact

**Email:** patelmanan5656@gmail.com  
**GitHub:** [@manan2324](https://github.com/manan2324)

---

Built with ❤️ by Manan Patel
