import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Dimensions,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { flags as mockFlags, debriefs, categories } from '../data/mockData';
import { colors, spacing, typography, shadows } from '../utils/theme';

const { width } = Dimensions.get('window');

export const InsightsScreen: React.FC = () => {
  // Calculate stats
  const redFlags = mockFlags.filter(f => f.type === 'red');
  const greenFlags = mockFlags.filter(f => f.type === 'green');
  const dealbreakers = mockFlags.filter(f => f.weight === 'dealbreaker');

  // Category breakdown
  const categoryStats = categories.map(cat => {
    const flagsInCategory = mockFlags.filter(f => f.category === cat.id);
    return {
      ...cat,
      count: flagsInCategory.length,
    };
  }).filter(c => c.count > 0);

  // Most triggered flags
  const flagTriggerCounts = mockFlags.map(flag => {
    const triggerCount = debriefs.filter(d =>
      d.triggeredFlagIds.includes(flag.id)
    ).length;
    return { flag, count: triggerCount };
  }).filter(f => f.count > 0).sort((a, b) => b.count - a.count).slice(0, 5);

  // Affirmations
  const affirmations = [
    "You're building clarity, not being picky",
    "Standards aren't walls, they're foundations",
    "You already know what you deserve",
  ];

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <ScrollView>
        <View style={styles.header}>
          <Text style={styles.title}>Your Insights</Text>
          <Text style={styles.subtitle}>
            Patterns, progress, and gentle reminders
          </Text>
        </View>

        {/* Affirmation Card */}
        <View style={styles.affirmationCard}>
          <Text style={styles.affirmationEmoji}>✨</Text>
          <Text style={styles.affirmationText}>
            {affirmations[Math.floor(Math.random() * affirmations.length)]}
          </Text>
        </View>

        {/* Standards Overview */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Your Standards</Text>
          <View style={styles.overviewGrid}>
            <View style={styles.overviewCard}>
              <Text style={styles.overviewNumber}>{mockFlags.length}</Text>
              <Text style={styles.overviewLabel}>Total Flags</Text>
            </View>
            <View style={styles.overviewCard}>
              <Text style={styles.overviewNumber}>{dealbreakers.length}</Text>
              <Text style={styles.overviewLabel}>Dealbreakers</Text>
            </View>
          </View>
          <View style={styles.flagTypeRow}>
            <View style={[styles.flagTypeCard, { borderLeftColor: colors.red }]}>
              <Text style={styles.flagTypeEmoji}>🚩</Text>
              <Text style={styles.flagTypeNumber}>{redFlags.length}</Text>
              <Text style={styles.flagTypeLabel}>Red Flags</Text>
            </View>
            <View style={[styles.flagTypeCard, { borderLeftColor: colors.green }]}>
              <Text style={styles.flagTypeEmoji}>✅</Text>
              <Text style={styles.flagTypeNumber}>{greenFlags.length}</Text>
              <Text style={styles.flagTypeLabel}>Green Flags</Text>
            </View>
          </View>
        </View>

        {/* Category Breakdown */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>By Category</Text>
          {categoryStats.map(cat => (
            <View key={cat.id} style={styles.categoryRow}>
              <Text style={styles.categoryEmoji}>{cat.emoji}</Text>
              <Text style={styles.categoryName}>{cat.name}</Text>
              <View style={styles.categoryBadge}>
                <Text style={styles.categoryCount}>{cat.count}</Text>
              </View>
            </View>
          ))}
        </View>

        {/* Most Triggered Flags */}
        {flagTriggerCounts.length > 0 && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Most Triggered in Dates</Text>
            <Text style={styles.sectionSubtitle}>
              Pay attention to what keeps coming up
            </Text>
            {flagTriggerCounts.map(({ flag, count }) => (
              <View key={flag.id} style={styles.triggeredCard}>
                <View style={styles.triggeredHeader}>
                  <Text style={styles.triggeredEmoji}>
                    {flag.type === 'red' ? '🚩' : '✅'}
                  </Text>
                  <Text style={styles.triggeredTitle}>{flag.title}</Text>
                </View>
                <Text style={styles.triggeredCount}>
                  Triggered {count} {count === 1 ? 'time' : 'times'}
                </Text>
              </View>
            ))}
          </View>
        )}

        {/* Growth Reminder */}
        <View style={styles.reminderCard}>
          <Text style={styles.reminderText}>
            Remember: You're not being too picky. You're being intentional about who gets access
            to your energy.
          </Text>
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
  affirmationCard: {
    backgroundColor: colors.terracotta,
    marginHorizontal: spacing.lg,
    marginBottom: spacing.lg,
    padding: spacing.lg,
    borderRadius: 16,
    alignItems: 'center',
    ...shadows.md,
  },
  affirmationEmoji: {
    fontSize: 40,
    marginBottom: spacing.sm,
  },
  affirmationText: {
    fontSize: 18,
    fontFamily: typography.heading,
    color: colors.textOnColor,
    textAlign: 'center',
    lineHeight: 28,
  },
  section: {
    paddingHorizontal: spacing.lg,
    marginBottom: spacing.lg,
  },
  sectionTitle: {
    fontSize: 20,
    fontFamily: typography.headingBold,
    color: colors.text,
    marginBottom: spacing.sm,
  },
  sectionSubtitle: {
    fontSize: 14,
    fontFamily: typography.body,
    color: colors.textLight,
    marginBottom: spacing.md,
  },
  overviewGrid: {
    flexDirection: 'row',
    gap: spacing.md,
    marginBottom: spacing.md,
  },
  overviewCard: {
    flex: 1,
    backgroundColor: colors.surface,
    padding: spacing.md,
    borderRadius: 12,
    alignItems: 'center',
    ...shadows.sm,
  },
  overviewNumber: {
    fontSize: 32,
    fontFamily: typography.headingBold,
    color: colors.text,
  },
  overviewLabel: {
    fontSize: 14,
    fontFamily: typography.body,
    color: colors.textLight,
    marginTop: spacing.xs,
  },
  flagTypeRow: {
    flexDirection: 'row',
    gap: spacing.md,
  },
  flagTypeCard: {
    flex: 1,
    backgroundColor: colors.surface,
    padding: spacing.md,
    borderRadius: 12,
    borderLeftWidth: 4,
    ...shadows.sm,
  },
  flagTypeEmoji: {
    fontSize: 24,
    marginBottom: spacing.xs,
  },
  flagTypeNumber: {
    fontSize: 24,
    fontFamily: typography.headingBold,
    color: colors.text,
  },
  flagTypeLabel: {
    fontSize: 14,
    fontFamily: typography.body,
    color: colors.textLight,
    marginTop: 2,
  },
  categoryRow: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.surface,
    padding: spacing.md,
    borderRadius: 12,
    marginBottom: spacing.sm,
    ...shadows.sm,
  },
  categoryEmoji: {
    fontSize: 20,
    marginRight: spacing.sm,
  },
  categoryName: {
    flex: 1,
    fontSize: 16,
    fontFamily: typography.body,
    color: colors.text,
  },
  categoryBadge: {
    backgroundColor: colors.terracotta,
    paddingHorizontal: spacing.sm,
    paddingVertical: 4,
    borderRadius: 12,
    minWidth: 32,
    alignItems: 'center',
  },
  categoryCount: {
    fontSize: 14,
    fontFamily: typography.bodyBold,
    color: colors.textOnColor,
  },
  triggeredCard: {
    backgroundColor: colors.surface,
    padding: spacing.md,
    borderRadius: 12,
    marginBottom: spacing.sm,
    ...shadows.sm,
  },
  triggeredHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: spacing.xs,
  },
  triggeredEmoji: {
    fontSize: 20,
    marginRight: spacing.sm,
  },
  triggeredTitle: {
    flex: 1,
    fontSize: 16,
    fontFamily: typography.bodySemiBold,
    color: colors.text,
  },
  triggeredCount: {
    fontSize: 14,
    fontFamily: typography.body,
    color: colors.textLight,
  },
  reminderCard: {
    backgroundColor: colors.sage,
    marginHorizontal: spacing.lg,
    marginBottom: spacing.xl,
    padding: spacing.lg,
    borderRadius: 16,
    ...shadows.sm,
  },
  reminderText: {
    fontSize: 16,
    fontFamily: typography.body,
    color: colors.textOnColor,
    textAlign: 'center',
    lineHeight: 24,
  },
});
