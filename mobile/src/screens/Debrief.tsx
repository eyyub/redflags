import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { debriefs, flags as mockFlags } from '../data/mockData';
import { colors, spacing, typography, shadows } from '../utils/theme';

export const DebriefScreen: React.FC = () => {
  const getVibeEmoji = (vibe: number) => {
    const emojis = ['😬', '😕', '😐', '😊', '🥰'];
    return emojis[vibe - 1];
  };

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
  };

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <ScrollView>
        <View style={styles.header}>
          <Text style={styles.title}>Date History</Text>
          <Text style={styles.subtitle}>
            Track patterns and trust your gut
          </Text>
        </View>

        {/* Stats */}
        <View style={styles.stats}>
          <View style={styles.statCard}>
            <Text style={styles.statNumber}>{debriefs.length}</Text>
            <Text style={styles.statLabel}>Total Dates</Text>
          </View>
          <View style={styles.statCard}>
            <Text style={styles.statNumber}>
              {debriefs.filter(d => d.wouldRecommendDate2).length}
            </Text>
            <Text style={styles.statLabel}>Would See Again</Text>
          </View>
        </View>

        {/* Debriefs List */}
        <View style={styles.content}>
          <Text style={styles.sectionTitle}>Recent Dates</Text>
          {debriefs.map(debrief => {
            const triggeredFlags = mockFlags.filter(f =>
              debrief.triggeredFlagIds.includes(f.id)
            );
            const redFlags = triggeredFlags.filter(f => f.type === 'red');
            const greenFlags = triggeredFlags.filter(f => f.type === 'green');

            return (
              <View key={debrief.id} style={styles.debriefCard}>
                <View style={styles.debriefHeader}>
                  <View>
                    <Text style={styles.debriefName}>
                      {debrief.personName}
                      {debrief.dateNumber && ` - Date ${debrief.dateNumber}`}
                    </Text>
                    <Text style={styles.debriefDate}>{formatDate(debrief.date)}</Text>
                  </View>
                  <Text style={styles.vibeEmoji}>{getVibeEmoji(debrief.overallVibe)}</Text>
                </View>

                {debrief.notes && (
                  <Text style={styles.notes}>{debrief.notes}</Text>
                )}

                <View style={styles.flagsSummary}>
                  {greenFlags.length > 0 && (
                    <View style={styles.flagCount}>
                      <Text style={styles.flagEmoji}>✅</Text>
                      <Text style={styles.flagCountText}>{greenFlags.length} green</Text>
                    </View>
                  )}
                  {redFlags.length > 0 && (
                    <View style={styles.flagCount}>
                      <Text style={styles.flagEmoji}>🚩</Text>
                      <Text style={styles.flagCountText}>{redFlags.length} red</Text>
                    </View>
                  )}
                </View>

                {redFlags.length >= 2 && debrief.wouldRecommendDate2 && (
                  <View style={styles.warning}>
                    <Text style={styles.warningText}>
                      ⚠️ Multiple red flags detected
                    </Text>
                  </View>
                )}
              </View>
            );
          })}
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
  stats: {
    flexDirection: 'row',
    paddingHorizontal: spacing.lg,
    gap: spacing.md,
    marginBottom: spacing.lg,
  },
  statCard: {
    flex: 1,
    backgroundColor: colors.surface,
    padding: spacing.md,
    borderRadius: 12,
    alignItems: 'center',
  },
  statNumber: {
    fontSize: 28,
    fontFamily: typography.headingBold,
    color: colors.text,
  },
  statLabel: {
    fontSize: 14,
    fontFamily: typography.body,
    color: colors.textLight,
    marginTop: spacing.xs,
    textAlign: 'center',
  },
  content: {
    paddingHorizontal: spacing.lg,
    paddingBottom: spacing.xl,
  },
  sectionTitle: {
    fontSize: 20,
    fontFamily: typography.headingBold,
    color: colors.text,
    marginBottom: spacing.md,
  },
  debriefCard: {
    backgroundColor: colors.surface,
    borderRadius: 12,
    padding: spacing.md,
    marginBottom: spacing.md,
    ...shadows.sm,
  },
  debriefHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: spacing.sm,
  },
  debriefName: {
    fontSize: 18,
    fontFamily: typography.headingBold,
    color: colors.text,
  },
  debriefDate: {
    fontSize: 14,
    fontFamily: typography.body,
    color: colors.textLight,
    marginTop: 2,
  },
  vibeEmoji: {
    fontSize: 32,
  },
  notes: {
    fontSize: 14,
    fontFamily: typography.body,
    color: colors.text,
    lineHeight: 20,
    marginBottom: spacing.sm,
  },
  flagsSummary: {
    flexDirection: 'row',
    gap: spacing.md,
    marginTop: spacing.xs,
  },
  flagCount: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.xs,
  },
  flagEmoji: {
    fontSize: 16,
  },
  flagCountText: {
    fontSize: 14,
    fontFamily: typography.bodyMedium,
    color: colors.text,
  },
  warning: {
    marginTop: spacing.sm,
    padding: spacing.sm,
    backgroundColor: '#FFE5CC',
    borderRadius: 8,
  },
  warningText: {
    fontSize: 14,
    fontFamily: typography.bodyMedium,
    color: colors.text,
  },
});
