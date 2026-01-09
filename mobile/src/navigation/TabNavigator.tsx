import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MyFlagsScreen } from '../screens/MyFlags';
import { DiscoverScreen } from '../screens/Discover';
import { DebriefScreen } from '../screens/Debrief';
import { InsightsScreen } from '../screens/Insights';
import { SettingsScreen } from '../screens/Settings';
import { colors, typography } from '../utils/theme';

const Tab = createBottomTabNavigator();

export const TabNavigator: React.FC = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: colors.terracotta,
        tabBarInactiveTintColor: colors.gray,
        tabBarStyle: {
          backgroundColor: colors.surface,
          borderTopColor: colors.lightGray,
          borderTopWidth: 1,
          paddingBottom: 8,
          paddingTop: 8,
          height: 60,
        },
        tabBarLabelStyle: {
          fontFamily: typography.bodyMedium,
          fontSize: 12,
        },
      }}
    >
      <Tab.Screen
        name="MyFlags"
        component={MyFlagsScreen}
        options={{
          tabBarLabel: 'My Flags',
          tabBarIcon: ({ color }) => <TabIcon emoji="🚩" color={color} />,
        }}
      />
      <Tab.Screen
        name="Discover"
        component={DiscoverScreen}
        options={{
          tabBarLabel: 'Discover',
          tabBarIcon: ({ color }) => <TabIcon emoji="✨" color={color} />,
        }}
      />
      <Tab.Screen
        name="Debrief"
        component={DebriefScreen}
        options={{
          tabBarLabel: 'Dates',
          tabBarIcon: ({ color }) => <TabIcon emoji="📝" color={color} />,
        }}
      />
      <Tab.Screen
        name="Insights"
        component={InsightsScreen}
        options={{
          tabBarLabel: 'Insights',
          tabBarIcon: ({ color }) => <TabIcon emoji="📊" color={color} />,
        }}
      />
      <Tab.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          tabBarLabel: 'Settings',
          tabBarIcon: ({ color }) => <TabIcon emoji="⚙️" color={color} />,
        }}
      />
    </Tab.Navigator>
  );
};

const TabIcon: React.FC<{ emoji: string; color: string }> = ({ emoji }) => {
  return <Text style={{ fontSize: 24 }}>{emoji}</Text>;
};

import { Text } from 'react-native';
