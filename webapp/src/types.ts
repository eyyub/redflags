export interface Flag {
  id: string;
  type: 'red' | 'green';
  title: string;
  note?: string;
  category: string;
  weight: 'dealbreaker' | 'matters' | 'bonus';
  createdAt: Date;
  updatedAt: Date;
}

export interface Category {
  id: string;
  name: string;
  emoji: string;
  isDefault: boolean;
}

export interface Debrief {
  id: string;
  personName?: string;
  dateNumber?: number;
  date: Date;
  overallVibe: 1 | 2 | 3 | 4 | 5;
  triggeredFlagIds: string[];
  notes?: string;
  wouldRecommendDate2?: boolean;
  createdAt: Date;
}

export interface Prompt {
  id: string;
  text: string;
  category: string;
  depth: 'light' | 'medium' | 'deep';
  isCompleted: boolean;
}

export interface StarterPack {
  id: string;
  name: string;
  description: string;
  flags: Omit<Flag, 'id' | 'createdAt' | 'updatedAt'>[];
}
