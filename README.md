# PortfolioAI - Stunning GitHub Portfolio Generator

**Turn your GitHub profile into a premium, interactive portfolio in seconds.**

PortfolioAI is a modern web application that generates a stunning developer portfolio from just a GitHub username. It features a deep space aesthetic, 3D interactive elements, and AI-powered insights to help you showcase your work like a pro.

![PortfolioAI Preview](https://github.com/user-attachments/assets/placeholder-image)

## 🚀 Features

### Phase 1: Immediate Impact

- **Zero Config**: Generate a site instantly with just your username.
- **Smart Theme System**: Automatically selects a theme (Cosmic, Emerald, Ocean, Sunset) based on your primary programming language.
- **Achievement System**: Earn badges like "Star Hunter", "Open Sourcerer", and "Polyglot" based on your stats.
- **Enhanced AI Coach**: Get actionable advice categorized by urgency and strategy to improve your GitHub presence.
- **Dynamic Metadata**: SEO-friendly OpenGraph images and Twitter cards generated on the fly.

### Phase 2: Advanced Interaction

- **3D Tilt Cards**: Premium hover effects on project cards using Framer Motion.
- **Resume Generator**: One-click PDF-ready resume generation based on your GitHub profile.
- **Activity Graph**: Visual contribution history.

### Phase 3: Innovation

- **Mint Portfolio**: Simulate minting your portfolio as an NFT on the blockchain.
- **Predictive Analytics**: AI-powered forecast of your future star growth and visitor trends.

## 🛠️ Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/) (App Router)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **UI Components**: [Shadcn/ui](https://ui.shadcn.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Data**: GitHub REST API

## 🏁 Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or pnpm

### Installation

1.  **Fork and Clone** the repository:

    ```bash
    git clone https://github.com/<your-username>/github-profile.git
    cd github-profile
    ```

2.  **Install Dependencies**:

    ```bash
    npm install
    ```

3.  **Set up Environment Variables** (Optional but recommended for higher API limits):
    Create a `.env.local` file in the root directory:

    ```env
    GITHUB_TOKEN=your_github_personal_access_token
    ```

4.  **Run Development Server**:
    ```bash
    npm run dev
    ```
    Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📂 Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── page.js             # Landing page
│   └── portfolio/[user]/   # Dynamic portfolio pages
├── components/             # React components
│   ├── Portfolio/          # Portfolio-specific components (Charts, Grid, etc.)
│   └── ui/                 # Reusable UI components (Shadcn)
├── lib/                    # Utilities and API logic
│   ├── github.js           # GitHub API fetching & analysis
│   └── themes.js           # Theme definitions
└── styles/                 # Global styles
```

## 🤝 Contributing

We welcome contributions! Whether it's fixing bugs, improving documentation, or proposing new features.

1.  Fork the Project
2.  Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3.  Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4.  Push to the Branch (`git push origin feature/AmazingFeature`)
5.  Open a Pull Request

## 📄 License

Distributed under the MIT License. See `LICENSE` for more information.

---

Built with ❤️ by Aravinth
