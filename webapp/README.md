# Know Your Worth - Dating App Webapp

A personal reflection and dating awareness app designed for women to define, remember, and honor their standards.

## Overview

This is a fully functional webapp prototype built with React, TypeScript, and Tailwind CSS. It demonstrates the complete feature set from the product document with mocked data.

## Features

### 🚩 My Flags
- Red and green flag lists with categories and weights
- Organized by importance (Dealbreaker / Matters / Bonus)
- Beautiful card-based UI with smooth transitions

### ✨ Discover
- **Prompts**: Reflection questions organized by category to help articulate your standards
- **Starter Packs**: Pre-made flag collections you can browse and add:
  - The Bare Minimum
  - Love Bombing 101
  - Icks That Are Actually Red Flags
  - Emotional Maturity Green Flags

### 📝 Date Debrief
- Review history of past dates
- Track which flags were triggered
- See patterns per person and overall
- Pattern warnings for recurring red flags

### 📊 Insights
- Visual breakdown of your standards by category
- Most triggered flags across all dates
- Affirming messages and growth tracking
- Stats dashboard

### ⚙️ Settings
- Appearance customization
- Category management
- Data export options

## Design System

Following the product specification:
- **Colors**: Warm cream background (#FDF8F4), muted terracotta (#C97B7B), sage green (#8BA888)
- **Typography**: Playfair Display (headings) + Inter (body)
- **Vibe**: "We're Not Really Strangers meets Pinterest meets your Notes app at 2am"
- **Tone**: Supportive best friend energy - warm, validating, never clinical

## Getting Started

### Prerequisites
- Node.js (v18 or higher recommended)
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

The app will be available at `http://localhost:5173`

## Tech Stack

- **React 19** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **Tailwind CSS v4** - Styling
- **Google Fonts** - Playfair Display & Inter

## Project Structure

```
webapp/
├── src/
│   ├── components/        # Reusable UI components
│   │   ├── Button.tsx
│   │   ├── FlagCard.tsx
│   │   └── TabBar.tsx
│   ├── screens/          # Main app screens
│   │   ├── MyFlags.tsx
│   │   ├── Discover.tsx
│   │   ├── Debrief.tsx
│   │   ├── Insights.tsx
│   │   └── Settings.tsx
│   ├── types.ts          # TypeScript interfaces
│   ├── mockData.ts       # Sample data
│   ├── App.tsx           # Main app component
│   └── index.css         # Global styles & design system
├── package.json
└── vite.config.ts
```

## Mocked Data

The app includes comprehensive sample data:
- 16 flags (8 red, 8 green) across various categories
- 18 reflection prompts
- 4 starter packs with curated flags
- 4 date debriefs showing different scenarios

## Next Steps for Production

To convert this prototype into a production app:

1. **State Management**: Add Zustand for persistent state
2. **Local Storage**: Implement AsyncStorage or similar for data persistence
3. **Add/Edit Functionality**: Build forms for creating and editing flags
4. **Debrief Flow**: Implement the step-by-step date debrief process
5. **Share Feature**: Add image generation for sharing
6. **Animations**: Enhance with Framer Motion or similar
7. **Mobile Optimization**: Convert to React Native with Expo for native apps
8. **Dark Mode**: Complete dark mode theme implementation

## Notes

This is a prototype for UI/UX review. All data is mocked and no changes persist on refresh. The design follows the product document specifications while remaining flexible for iteration based on user feedback.
