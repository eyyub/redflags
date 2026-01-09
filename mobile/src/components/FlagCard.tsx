import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Flag } from '../types';
import { colors, spacing, borderRadius, typography, shadows } from '../utils/theme';

interface FlagCardProps {
  flag: Flag;
  onPress?: () => void;
}

export const FlagCard: React.FC<FlagCardProps> = ({ flag, onPress }) => {
  const isRed = flag.type === 'red';
  const borderColor = isRed ? colors.red : colors.green;

  const weightLabels = {
    dealbreaker: 'Dealbreaker',
    matters: 'Matters',
    bonus: 'Bonus',
  };

  return (
    <TouchableOpacity
      style={[styles.card, { borderLeftColor: borderColor }]}
      onPress={onPress}
      disabled={!onPress}
      activeOpacity={onPress ? 0.7 : 1}
    >
      <View style={styles.header}>
        <View style={styles.titleRow}>
          <Text style={styles.emoji}>{isRed ? '🚩' : '✅'}</Text>
          <Text style={styles.title}>{flag.title}</Text>
        </View>
        <View style={[styles.badge, { backgroundColor: isRed ? colors.red : colors.green }]}>
          <Text style={styles.badgeText}>{weightLabels[flag.weight]}</Text>
        </View>
      </View>
      {flag.note && <Text style={styles.note}>{flag.note}</Text>}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.surface,
    borderRadius: borderRadius.md,
    padding: spacing.md,
    marginBottom: spacing.md,
    borderLeftWidth: 4,
    ...shadows.sm,
  },
  header: {
    marginBottom: spacing.xs,
  },
  titleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: spacing.xs,
  },
  emoji: {
    fontSize: 20,
    marginRight: spacing.sm,
  },
  title: {
    flex: 1,
    fontSize: 16,
    fontFamily: typography.bodySemiBold,
    color: colors.text,
  },
  badge: {
    alignSelf: 'flex-start',
    paddingHorizontal: spacing.sm,
    paddingVertical: 4,
    borderRadius: borderRadius.sm,
  },
  badgeText: {
    fontSize: 12,
    fontFamily: typography.bodyMedium,
    color: colors.textOnColor,
  },
  note: {
    fontSize: 14,
    fontFamily: typography.body,
    color: colors.textLight,
    lineHeight: 20,
    marginTop: spacing.xs,
  },
});
