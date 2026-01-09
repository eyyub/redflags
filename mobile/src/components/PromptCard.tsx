import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Prompt } from '../types';
import { colors, spacing, borderRadius, typography, shadows } from '../utils/theme';

interface PromptCardProps {
  prompt: Prompt;
  onPress?: () => void;
}

export const PromptCard: React.FC<PromptCardProps> = ({ prompt, onPress }) => {
  const depthColors = {
    light: '#FFE5CC',
    medium: '#FFD4A3',
    deep: '#FFC17A',
  };

  return (
    <TouchableOpacity
      style={[
        styles.card,
        prompt.isCompleted && styles.completed,
      ]}
      onPress={onPress}
      disabled={!onPress}
      activeOpacity={onPress ? 0.7 : 1}
    >
      <View style={styles.header}>
        <View style={[styles.depthBadge, { backgroundColor: depthColors[prompt.depth] }]}>
          <Text style={styles.depthText}>{prompt.depth}</Text>
        </View>
        {prompt.isCompleted && (
          <Text style={styles.completedText}>✓ Completed</Text>
        )}
      </View>
      <Text style={styles.text}>{prompt.text}</Text>
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
  completed: {
    opacity: 0.6,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: spacing.sm,
  },
  depthBadge: {
    paddingHorizontal: spacing.sm,
    paddingVertical: 4,
    borderRadius: borderRadius.sm,
  },
  depthText: {
    fontSize: 12,
    fontFamily: typography.bodyMedium,
    color: colors.text,
    textTransform: 'capitalize',
  },
  completedText: {
    fontSize: 12,
    fontFamily: typography.bodyMedium,
    color: colors.sage,
  },
  text: {
    fontSize: 16,
    fontFamily: typography.body,
    color: colors.text,
    lineHeight: 24,
  },
});
