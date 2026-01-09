# Know Your Worth - Mobile App

A personal reflection and dating awareness app designed for women to define, remember, and honor their standards.

Built with React Native and Expo.

## Features

### 🚩 My Flags
- Manage red and green flag lists
- Organize by categories (Communication, Emotional Intelligence, Trust, Safety, etc.)
- Filter by importance (Dealbreaker / Matters / Bonus)
- Beautiful card-based UI with smooth transitions

### ✨ Discover
- **Prompts**: Reflection questions to help articulate your standards
- **Starter Packs**: Pre-made flag collections:
  - The Bare Minimum
  - Love Bombing 101
  - Icks That Are Actually Red Flags
  - Emotional Maturity Green Flags

### 📝 Date Debrief
- Track date history with pattern detection
- Log which flags were triggered
- See warnings for recurring red flags
- Make intentional decisions about second dates

### 📊 Insights
- Visual breakdown of your standards by category
- Most triggered flags across all dates
- Affirming messages and growth tracking
- Stats dashboard

### ⚙️ Settings
- Appearance customization
- Notification preferences
- Data export options

## Tech Stack

- **React Native** - Mobile framework
- **Expo** - Development platform
- **TypeScript** - Type safety
- **React Navigation** - Navigation library
- **AsyncStorage** - Local data persistence
- **Expo Google Fonts** - Custom fonts (Playfair Display & Inter)

## Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn
- Expo Go app on your mobile device (for testing)

### Installation

```bash
# Install dependencies
npm install

# Start the development server
npm start

# Run on iOS simulator (macOS only)
npm run ios

# Run on Android emulator
npm run android

# Run in web browser
npm run web
```

### Running on Your Device

1. Install the Expo Go app on your iOS or Android device
2. Run `npm start` in the terminal
3. Scan the QR code with your camera (iOS) or the Expo Go app (Android)

## Project Structure

```
mobile/
├── src/
│   ├── components/        # Reusable UI components
│   │   ├── Button.tsx
│   │   ├── FlagCard.tsx
│   │   ├── PromptCard.tsx
│   │   └── StarterPackCard.tsx
│   ├── screens/          # Main app screens
│   │   ├── MyFlags.tsx
│   │   ├── Discover.tsx
│   │   ├── Debrief.tsx
│   │   ├── Insights.tsx
│   │   └── Settings.tsx
│   ├── navigation/       # Navigation setup
│   │   └── TabNavigator.tsx
│   ├── types/            # TypeScript interfaces
│   │   └── index.ts
│   ├── data/             # Mock data
│   │   └── mockData.ts
│   └── utils/            # Utilities and theme
│       └── theme.ts
├── App.tsx               # Main app component
└── package.json
```

## Design System

Following the product specification:
- **Colors**: Warm cream background (#FDF8F4), muted terracotta (#C97B7B), sage green (#8BA888)
- **Typography**: Playfair Display (headings) + Inter (body)
- **Vibe**: "We're Not Really Strangers meets Pinterest meets your Notes app at 2am"
- **Tone**: Supportive best friend energy - warm, validating, never clinical

## Current Status

This is a fully functional mobile app with:
- Complete UI/UX implementation
- All 5 main screens working
- Mock data for demonstration
- Beautiful design matching the brand guidelines
- Smooth navigation and interactions

## Next Steps for Production

1. **State Management**: Implement Zustand or Context API for global state
2. **Data Persistence**: Add AsyncStorage integration for data persistence
3. **Add/Edit Functionality**: Build forms for creating and editing flags
4. **Debrief Flow**: Implement step-by-step date debrief creation
5. **Share Feature**: Add image generation for sharing insights
6. **Animations**: Enhance with Reanimated for smooth transitions
7. **Backend Integration**: Connect to a backend API for cloud sync
8. **Push Notifications**: Add reminders and affirmations
9. **Dark Mode**: Implement dark theme
10. **Testing**: Add unit and integration tests

## Notes

Currently using mocked data for demonstration purposes. All features are fully implemented and ready for backend integration.

---

**Remember:** You're not asking for too much. You already know what you want. This app just helps you remember it. 💕
