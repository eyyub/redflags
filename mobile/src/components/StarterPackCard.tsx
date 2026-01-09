import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { StarterPack } from '../types';
import { colors, spacing, borderRadius, typography, shadows } from '../utils/theme';

interface StarterPackCardProps {
  pack: StarterPack;
  onPress?: () => void;
}

export const StarterPackCard: React.FC<StarterPackCardProps> = ({ pack, onPress }) => {
  const redCount = pack.flags.filter(f => f.type === 'red').length;
  const greenCount = pack.flags.filter(f => f.type === 'green').length;

  return (
    <TouchableOpacity
      style={styles.card}
      onPress={onPress}
      disabled={!onPress}
      activeOpacity={onPress ? 0.7 : 1}
    >
      <Text style={styles.title}>{pack.name}</Text>
      <Text style={styles.description}>{pack.description}</Text>
      <View style={styles.stats}>
        {greenCount > 0 && (
          <View style={styles.statItem}>
            <Text style={styles.statEmoji}>✅</Text>
            <Text style={styles.statText}>{greenCount}</Text>
          </View>
        )}
        {redCount > 0 && (
          <View style={styles.statItem}>
            <Text style={styles.statEmoji}>🚩</Text>
            <Text style={styles.statText}>{redCount}</Text>
          </View>
        )}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.surface,
    borderRadius: borderRadius.md,
    padding: spacing.md,
    marginBottom: spacing.md,
    ...shadows.sm,
  },
  title: {
    fontSize: 18,
    fontFamily: typography.headingBold,
    color: colors.text,
    marginBottom: spacing.xs,
  },
  description: {
    fontSize: 14,
    fontFamily: typography.body,
    color: colors.textLight,
    lineHeight: 20,
    marginBottom: spacing.sm,
  },
  stats: {
    flexDirection: 'row',
    gap: spacing.md,
  },
  statItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.xs,
  },
  statEmoji: {
    fontSize: 16,
  },
  statText: {
    fontSize: 14,
    fontFamily: typography.bodyMedium,
    color: colors.text,
  },
});
