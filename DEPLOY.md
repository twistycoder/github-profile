# Deployment Guide

## 1. Push to GitHub

Since I cannot access your GitHub account directly, please run the following commands in your terminal to push the code:

1.  **Create a new repository** on GitHub (e.g., `github-profile-generator`).
2.  **Run these commands** in your terminal:

```bash
# Replace <your-username> and <repo-name> with your details
git remote add origin https://github.com/<your-username>/<repo-name>.git
git branch -M main
git push -u origin main
```

## 2. Deploy to Vercel

The easiest way to deploy is using the Vercel CLI or Dashboard.

### Option A: Vercel CLI (Recommended)

1.  Run the deployment command:
    ```bash
    npx vercel
    ```
2.  Follow the prompts:
    - Set up and deploy? **Y**
    - Which scope? **(Select your account)**
    - Link to existing project? **N**
    - Project name? **github-profile**
    - Directory? **./**
    - Want to modify settings? **N**

### Option B: Vercel Dashboard

1.  Go to [vercel.com/new](https://vercel.com/new).
2.  Import your `github-profile-generator` repository.
3.  Click **Deploy**.

## Environment Variables

This project uses the GitHub API. For higher rate limits, you should create a GitHub Personal Access Token and add it to your Vercel project environment variables:

- **Key**: `GITHUB_TOKEN`
- **Value**: `your_github_pat_token`
