import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Switch,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { colors, spacing, typography, shadows } from '../utils/theme';

export const SettingsScreen: React.FC = () => {
  const [notificationsEnabled, setNotificationsEnabled] = React.useState(true);
  const [darkModeEnabled, setDarkModeEnabled] = React.useState(false);

  const settingsSections = [
    {
      title: 'Preferences',
      items: [
        {
          label: 'Notifications',
          value: notificationsEnabled,
          onToggle: setNotificationsEnabled,
          type: 'toggle' as const,
        },
        {
          label: 'Dark Mode',
          value: darkModeEnabled,
          onToggle: setDarkModeEnabled,
          type: 'toggle' as const,
        },
      ],
    },
    {
      title: 'Data',
      items: [
        {
          label: 'Export My Data',
          type: 'button' as const,
          onPress: () => console.log('Export data'),
        },
        {
          label: 'Manage Categories',
          type: 'button' as const,
          onPress: () => console.log('Manage categories'),
        },
      ],
    },
    {
      title: 'About',
      items: [
        {
          label: 'Privacy Policy',
          type: 'button' as const,
          onPress: () => console.log('Privacy'),
        },
        {
          label: 'Terms of Service',
          type: 'button' as const,
          onPress: () => console.log('Terms'),
        },
        {
          label: 'Version',
          value: '1.0.0',
          type: 'text' as const,
        },
      ],
    },
  ];

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <ScrollView>
        <View style={styles.header}>
          <Text style={styles.title}>Settings</Text>
          <Text style={styles.subtitle}>
            Customize your experience
          </Text>
        </View>

        <View style={styles.content}>
          {settingsSections.map((section, sectionIndex) => (
            <View key={sectionIndex} style={styles.section}>
              <Text style={styles.sectionTitle}>{section.title}</Text>
              <View style={styles.sectionContent}>
                {section.items.map((item, itemIndex) => (
                  <View
                    key={itemIndex}
                    style={[
                      styles.settingRow,
                      itemIndex === section.items.length - 1 && styles.lastRow,
                    ]}
                  >
                    <Text style={styles.settingLabel}>{item.label}</Text>
                    {item.type === 'toggle' && (
                      <Switch
                        value={item.value as boolean}
                        onValueChange={item.onToggle}
                        trackColor={{
                          false: colors.lightGray,
                          true: colors.sage,
                        }}
                        thumbColor={colors.surface}
                      />
                    )}
                    {item.type === 'button' && (
                      <TouchableOpacity onPress={item.onPress}>
                        <Text style={styles.settingAction}>→</Text>
                      </TouchableOpacity>
                    )}
                    {item.type === 'text' && (
                      <Text style={styles.settingValue}>{item.value as string}</Text>
                    )}
                  </View>
                ))}
              </View>
            </View>
          ))}

          {/* Quote */}
          <View style={styles.quoteCard}>
            <Text style={styles.quoteText}>
              "You're not asking for too much. You already know what you want. This app just helps
              you remember it."
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  header: {
    padding: spacing.lg,
  },
  title: {
    fontSize: 32,
    fontFamily: typography.headingBold,
    color: colors.text,
    marginBottom: spacing.xs,
  },
  subtitle: {
    fontSize: 16,
    fontFamily: typography.body,
    color: colors.textLight,
    lineHeight: 24,
  },
  content: {
    paddingHorizontal: spacing.lg,
    paddingBottom: spacing.xl,
  },
  section: {
    marginBottom: spacing.lg,
  },
  sectionTitle: {
    fontSize: 14,
    fontFamily: typography.bodyBold,
    color: colors.textLight,
    textTransform: 'uppercase',
    letterSpacing: 0.5,
    marginBottom: spacing.sm,
  },
  sectionContent: {
    backgroundColor: colors.surface,
    borderRadius: 12,
    overflow: 'hidden',
    ...shadows.sm,
  },
  settingRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: spacing.md,
    borderBottomWidth: 1,
    borderBottomColor: colors.lightGray,
  },
  lastRow: {
    borderBottomWidth: 0,
  },
  settingLabel: {
    fontSize: 16,
    fontFamily: typography.body,
    color: colors.text,
  },
  settingAction: {
    fontSize: 20,
    color: colors.textLight,
  },
  settingValue: {
    fontSize: 16,
    fontFamily: typography.body,
    color: colors.textLight,
  },
  quoteCard: {
    backgroundColor: colors.terracotta,
    padding: spacing.lg,
    borderRadius: 16,
    marginTop: spacing.lg,
    ...shadows.md,
  },
  quoteText: {
    fontSize: 16,
    fontFamily: typography.heading,
    color: colors.textOnColor,
    textAlign: 'center',
    lineHeight: 24,
  },
});
