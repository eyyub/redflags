import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { FlagCard } from '../components/FlagCard';
import { flags as mockFlags, categories } from '../data/mockData';
import { colors, spacing, typography } from '../utils/theme';

export const MyFlagsScreen: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'all' | 'red' | 'green'>('all');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const filteredFlags = mockFlags.filter(flag => {
    if (activeTab !== 'all' && flag.type !== activeTab) return false;
    if (selectedCategory && flag.category !== selectedCategory) return false;
    return true;
  });

  const redFlags = mockFlags.filter(f => f.type === 'red');
  const greenFlags = mockFlags.filter(f => f.type === 'green');

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <ScrollView>
        <View style={styles.header}>
          <Text style={styles.title}>My Standards</Text>
          <Text style={styles.subtitle}>
            You're not asking for too much. You already know what you want.
          </Text>
        </View>

        {/* Stats */}
        <View style={styles.stats}>
          <View style={styles.statCard}>
            <Text style={styles.statNumber}>{redFlags.length}</Text>
            <Text style={styles.statLabel}>🚩 Red Flags</Text>
          </View>
          <View style={styles.statCard}>
            <Text style={styles.statNumber}>{greenFlags.length}</Text>
            <Text style={styles.statLabel}>✅ Green Flags</Text>
          </View>
        </View>

        {/* Filter Tabs */}
        <View style={styles.tabs}>
          <TouchableOpacity
            style={[styles.tab, activeTab === 'all' && styles.activeTab]}
            onPress={() => setActiveTab('all')}
          >
            <Text style={[styles.tabText, activeTab === 'all' && styles.activeTabText]}>
              All
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.tab, activeTab === 'red' && styles.activeTab]}
            onPress={() => setActiveTab('red')}
          >
            <Text style={[styles.tabText, activeTab === 'red' && styles.activeTabText]}>
              Red Flags
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.tab, activeTab === 'green' && styles.activeTab]}
            onPress={() => setActiveTab('green')}
          >
            <Text style={[styles.tabText, activeTab === 'green' && styles.activeTabText]}>
              Green Flags
            </Text>
          </TouchableOpacity>
        </View>

        {/* Category Pills */}
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.categoryScroll}
          contentContainerStyle={styles.categoryContent}
        >
          <TouchableOpacity
            style={[styles.categoryPill, !selectedCategory && styles.activePill]}
            onPress={() => setSelectedCategory(null)}
          >
            <Text style={[styles.pillText, !selectedCategory && styles.activePillText]}>
              All
            </Text>
          </TouchableOpacity>
          {categories.map(cat => (
            <TouchableOpacity
              key={cat.id}
              style={[styles.categoryPill, selectedCategory === cat.id && styles.activePill]}
              onPress={() => setSelectedCategory(cat.id)}
            >
              <Text style={styles.pillText}>
                {cat.emoji} {cat.name}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>

        {/* Flags List */}
        <View style={styles.flagsList}>
          {filteredFlags.length === 0 ? (
            <View style={styles.emptyState}>
              <Text style={styles.emptyText}>No flags yet</Text>
              <Text style={styles.emptySubtext}>
                Start building your standards in the Discover tab
              </Text>
            </View>
          ) : (
            filteredFlags.map(flag => (
              <FlagCard key={flag.id} flag={flag} />
            ))
          )}
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
  },
  tabs: {
    flexDirection: 'row',
    paddingHorizontal: spacing.lg,
    gap: spacing.sm,
    marginBottom: spacing.md,
  },
  tab: {
    flex: 1,
    paddingVertical: spacing.sm,
    alignItems: 'center',
    borderRadius: 8,
    backgroundColor: colors.surface,
  },
  activeTab: {
    backgroundColor: colors.terracotta,
  },
  tabText: {
    fontSize: 14,
    fontFamily: typography.bodyMedium,
    color: colors.text,
  },
  activeTabText: {
    color: colors.textOnColor,
  },
  categoryScroll: {
    marginBottom: spacing.md,
  },
  categoryContent: {
    paddingHorizontal: spacing.lg,
    gap: spacing.sm,
  },
  categoryPill: {
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.xs,
    borderRadius: 20,
    backgroundColor: colors.surface,
    marginRight: spacing.sm,
  },
  activePill: {
    backgroundColor: colors.sage,
  },
  pillText: {
    fontSize: 14,
    fontFamily: typography.body,
    color: colors.text,
  },
  activePillText: {
    color: colors.textOnColor,
  },
  flagsList: {
    paddingHorizontal: spacing.lg,
    paddingBottom: spacing.xl,
  },
  emptyState: {
    alignItems: 'center',
    paddingVertical: spacing.xxl,
  },
  emptyText: {
    fontSize: 18,
    fontFamily: typography.headingBold,
    color: colors.text,
    marginBottom: spacing.xs,
  },
  emptySubtext: {
    fontSize: 14,
    fontFamily: typography.body,
    color: colors.textLight,
    textAlign: 'center',
  },
});
