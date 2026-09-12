# WebPort

A portfolio site for Noluthando Zuma, an aspiring network engineer — built with React + Vite + Tailwind CSS.

## Project structure

```
WebPort/
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
└── src/
    ├── main.jsx          # React entry point
    ├── App.jsx           # Assembles all page sections
    ├── index.css         # Global styles, fonts, animations
    └── components/
        ├── AmbientOrbs.jsx
        ├── NetworkBackground.jsx
        ├── Nav.jsx
        ├── Hero.jsx
        ├── About.jsx
        ├── Skills.jsx
        ├── Projects.jsx
        ├── Journey.jsx
        ├── Certifications.jsx
        ├── Contact.jsx
        └── Footer.jsx
```

## Getting started

```bash
npm install
npm run dev
```

Then open the local URL Vite prints (usually http://localhost:5173).

## Build for production

```bash
npm run build
npm run preview
```

## Notes

- Replace the placeholder profile image in `About.jsx` and the resume link (`/resume.pdf`) with your own.
- Contact details in `Contact.jsx` and `Footer.jsx` are placeholders — swap in your real email, LinkedIn, and GitHub.
- The contact form is front-end only right now (it just shows a "Message Sent" confirmation). Wire it up to a service like Formspree, EmailJS, or your own backend to actually receive messages.
