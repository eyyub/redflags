import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { PromptCard } from '../components/PromptCard';
import { StarterPackCard } from '../components/StarterPackCard';
import { prompts, starterPacks } from '../data/mockData';
import { colors, spacing, typography } from '../utils/theme';

export const DiscoverScreen: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'prompts' | 'packs'>('prompts');

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <ScrollView>
        <View style={styles.header}>
          <Text style={styles.title}>Discover</Text>
          <Text style={styles.subtitle}>
            Reflection prompts and starter packs to help you articulate your standards
          </Text>
        </View>

        {/* Tabs */}
        <View style={styles.tabs}>
          <TouchableOpacity
            style={[styles.tab, activeTab === 'prompts' && styles.activeTab]}
            onPress={() => setActiveTab('prompts')}
          >
            <Text style={[styles.tabText, activeTab === 'prompts' && styles.activeTabText]}>
              💭 Prompts
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.tab, activeTab === 'packs' && styles.activeTab]}
            onPress={() => setActiveTab('packs')}
          >
            <Text style={[styles.tabText, activeTab === 'packs' && styles.activeTabText]}>
              ✨ Starter Packs
            </Text>
          </TouchableOpacity>
        </View>

        {/* Content */}
        <View style={styles.content}>
          {activeTab === 'prompts' ? (
            <>
              <View style={styles.sectionHeader}>
                <Text style={styles.sectionTitle}>Reflection Questions</Text>
                <Text style={styles.sectionSubtitle}>
                  Take your time. There are no wrong answers.
                </Text>
              </View>
              {prompts.map(prompt => (
                <PromptCard key={prompt.id} prompt={prompt} />
              ))}
            </>
          ) : (
            <>
              <View style={styles.sectionHeader}>
                <Text style={styles.sectionTitle}>Curated Collections</Text>
                <Text style={styles.sectionSubtitle}>
                  Pre-made flag lists to get you started
                </Text>
              </View>
              {starterPacks.map(pack => (
                <StarterPackCard key={pack.id} pack={pack} />
              ))}
            </>
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
  tabs: {
    flexDirection: 'row',
    paddingHorizontal: spacing.lg,
    gap: spacing.sm,
    marginBottom: spacing.lg,
  },
  tab: {
    flex: 1,
    paddingVertical: spacing.md,
    alignItems: 'center',
    borderRadius: 12,
    backgroundColor: colors.surface,
  },
  activeTab: {
    backgroundColor: colors.terracotta,
  },
  tabText: {
    fontSize: 16,
    fontFamily: typography.bodyMedium,
    color: colors.text,
  },
  activeTabText: {
    color: colors.textOnColor,
  },
  content: {
    paddingHorizontal: spacing.lg,
    paddingBottom: spacing.xl,
  },
  sectionHeader: {
    marginBottom: spacing.md,
  },
  sectionTitle: {
    fontSize: 20,
    fontFamily: typography.headingBold,
    color: colors.text,
    marginBottom: spacing.xs,
  },
  sectionSubtitle: {
    fontSize: 14,
    fontFamily: typography.body,
    color: colors.textLight,
  },
});
