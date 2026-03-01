# KhaiDev1012 Personal Website

A modern, immersive personal portfolio built with **Angular** that fuses **Glassmorphism**, **Anime aesthetics**, and **Real-time Data**. It showcases a dynamic Discord profile and interactive widgets.

## 🌟 Key Features

### 🔮 Core Experience

- **Dynamic Discord Profile Card**: Real-time integration via Lanyard API showing status, activities, Spotify listening, and badges.
- **Bento Grid Layout**: A modern, responsive grid architecture that organizes widgets elegantly.
- **Glassmorphism UI**: Frosted glass effects with sophisticated blurring and transparency.

### 🧩 Interactive Widgets

- **Shadow Terminal**: An aesthetic widget featuring a typewriter effect that cycles through iconic quotes (e.g., _The Eminence in Shadow_).
- **Tech Stack Marquee**: An infinite scrolling loop displaying your technology stack (Angular, React, Python, etc.) with hover glow effects.
- **Clock**: A stylized digital clock with visual effects.
- **Social Connect**: A consolidated hub for all your social media links.

### 🎨 Visual & Fun Elements

- **Ethereal Background**: Subtle, animated noise and shadow effects that give depth to the page.
- **Cursor Interaction**:
  - **Custom Cursor**: Replaces the default pointer for better immersion.
  - **Oneko (Cat)**: A pixel-art cat that chases your cursor across the screen.
- **Profile Search**: Built-in modal to search and view other Discord profiles.

## 📋 Tech Stack

- **Framework**: Angular 17+ (Standalone Components)
- **Styling**: SCSS (Sass), Tailwind CSS
- **APIs**: Lanyard (Discord Presence), Discord Assets
- **Performance**: Optimized bundle (<150KB), Custom Markdown Parser
- **Animations**: CSS Keyframes, TypeScript-driven logic

## 🚀 Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/TruongDuyKhai/KhaiDev1012-Site.git
   cd KhaiDev1012-Site
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Configure Environment**
   Open `src/environments/environment.ts` and set your Discord ID:

   ```typescript
   export const environment = {
     discordId: "YOUR_DISCORD_ID", // Your 18-digit Discord User ID
     webSocketUrl: "wss://api.lanyard.rest/socket",
     // ... other configs
   };
   ```

4. **Run Development Server**
   ```bash
   npm start
   ```
   Navigate to `http://localhost:4200/`.

## 🏗️ Project Structure

```
src/
├── app/
│   ├── components/
│   │   ├── card-profile/       # Main Discord profile card
│   │   ├── main/               # Bento Grid layout & Widgets
│   │   ├── clock/              # Glitch clock widget
│   │   ├── ethereal-shadow/    # Background effects
│   │   ├── neko/               # Cursor cat animation
│   │   ├── profile-viewer/     # Profile viewer page
│   │   └── search-modal/       # User search functionality
│   ├── services/
│   │   ├── lanyard.service.ts  # WebSocket connection to Lanyard
│   │   └── ...
│   └── models/                 # Interfaces (Discord, Profile, etc.)
└── assets/                     # Images, badges, videos
```

## 🔧 Customization

### Updating the Tech Stack

Navigate to `src/app/components/main/main.component.ts` and modify the `techStack` array. Note that we use FontAwesome icon objects:

```typescript
import { faAngular, faReact } from '@fortawesome/free-brands-svg-icons';

// ...

public techStack = [
  { name: 'Angular', icon: faAngular, color: '#dd0031' },
  { name: 'React', icon: faReact, color: '#61dafb' },
  // Add your technologies here...
];
```

### Changing Quotes (Shadow Widget)

In `main.component.ts`, update the `quotes` array to personalize the typewriter text:

```typescript
private quotes: string[] = [
  "Your custom quote here...",
  "Another cool phrase."
];
```

## 📄 License

This project is licensed under the **MIT License**.

---

<div align="center">
  <p>Built with 💜 by KhaiDev1012</p>
</div>
