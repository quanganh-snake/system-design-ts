type ColorKeys =
  | 'slate50' | 'slate100' | 'slate200' | 'slate300' | 'slate400' | 'slate500' | 'slate600' | 'slate700' | 'slate800' | 'slate900' | 'slate950'
  | 'gray50' | 'gray100' | 'gray200' | 'gray300' | 'gray400' | 'gray500' | 'gray600' | 'gray700' | 'gray800' | 'gray900' | 'gray950'
  | 'zinc50' | 'zinc100' | 'zinc200' | 'zinc300' | 'zinc400' | 'zinc500' | 'zinc600' | 'zinc700' | 'zinc800' | 'zinc900' | 'zinc950'
  | 'neutral50' | 'neutral100' | 'neutral200' | 'neutral300' | 'neutral400' | 'neutral500' | 'neutral600' | 'neutral700' | 'neutral800' | 'neutral900' | 'neutral950'
  | 'stone50' | 'stone100' | 'stone200' | 'stone300' | 'stone400' | 'stone500' | 'stone600' | 'stone700' | 'stone800' | 'stone900' | 'stone950'
  | 'red50' | 'red100' | 'red200' | 'red300' | 'red400' | 'red500' | 'red600' | 'red700' | 'red800' | 'red900' | 'red950'
  | 'orange50' | 'orange100' | 'orange200' | 'orange300' | 'orange400' | 'orange500' | 'orange600' | 'orange700' | 'orange800' | 'orange900' | 'orange950'
  | 'amber50' | 'amber100' | 'amber200' | 'amber300' | 'amber400' | 'amber500' | 'amber600' | 'amber700' | 'amber800' | 'amber900' | 'amber950'
  | 'yellow50' | 'yellow100' | 'yellow200' | 'yellow300' | 'yellow400' | 'yellow500' | 'yellow600' | 'yellow700' | 'yellow800' | 'yellow900' | 'yellow950'
  | 'lime50' | 'lime100' | 'lime200' | 'lime300' | 'lime400' | 'lime500' | 'lime600' | 'lime700' | 'lime800' | 'lime900' | 'lime950'
  | 'green50' | 'green100' | 'green200' | 'green300' | 'green400' | 'green500' | 'green600' | 'green700' | 'green800' | 'green900' | 'green950'
  | 'emerald50' | 'emerald100' | 'emerald200' | 'emerald300' | 'emerald400' | 'emerald500' | 'emerald600' | 'emerald700' | 'emerald800' | 'emerald900' | 'emerald950'
  | 'teal50' | 'teal100' | 'teal200' | 'teal300' | 'teal400' | 'teal500' | 'teal600' | 'teal700' | 'teal800' | 'teal900' | 'teal950'
  | 'cyan50' | 'cyan100' | 'cyan200' | 'cyan300' | 'cyan400' | 'cyan500' | 'cyan600' | 'cyan700' | 'cyan800' | 'cyan900' | 'cyan950'
  | 'sky50' | 'sky100' | 'sky200' | 'sky300' | 'sky400' | 'sky500' | 'sky600' | 'sky700' | 'sky800' | 'sky900' | 'sky950'
  | 'blue50' | 'blue100' | 'blue200' | 'blue300' | 'blue400' | 'blue500' | 'blue600' | 'blue700' | 'blue800' | 'blue900' | 'blue950'
  | 'indigo50' | 'indigo100' | 'indigo200' | 'indigo300' | 'indigo400' | 'indigo500' | 'indigo600' | 'indigo700' | 'indigo800' | 'indigo900' | 'indigo950'
  | 'violet50' | 'violet100' | 'violet200' | 'violet300' | 'violet400' | 'violet500' | 'violet600' | 'violet700' | 'violet800' | 'violet900' | 'violet950'
  | 'purple50' | 'purple100' | 'purple200' | 'purple300' | 'purple400' | 'purple500' | 'purple600' | 'purple700' | 'purple800' | 'purple900' | 'purple950'
  | 'fuchsia50' | 'fuchsia100' | 'fuchsia200' | 'fuchsia300' | 'fuchsia400' | 'fuchsia500' | 'fuchsia600' | 'fuchsia700' | 'fuchsia800' | 'fuchsia900' | 'fuchsia950'
  | 'pink50' | 'pink100' | 'pink200' | 'pink300' | 'pink400' | 'pink500' | 'pink600' | 'pink700' | 'pink800' | 'pink900' | 'pink950'
  | 'rose50' | 'rose100' | 'rose200' | 'rose300' | 'rose400' | 'rose500' | 'rose600' | 'rose700' | 'rose800' | 'rose900' | 'rose950';

type Colors = {
  [key in ColorKeys]: string;
};

export const COLORSTW: Colors = {
  // SLATE
  slate50: '#f8fafc',
  slate100: '#f1f5f9',
  slate200: '#e2e8f0',
  slate300: '#cbd5e1',
  slate400: '#94a3b8',
  slate500: '#64748b',
  slate600: '#475569',
  slate700: '#334155',
  slate800: '#1e293b',
  slate900: '#0f172a',
  slate950: '#020617',

  // Gray
  gray50: '#f9fafb',
  gray100: '#f3f4f6',
  gray200: '#e5e7eb',
  gray300: '#d1d5db',
  gray400: '#9ca3af',
  gray500: '#6b7280',
  gray600: '#4b5563',
  gray700: '#374151',
  gray800: '#1f2937',
  gray900: '#111827',
  gray950: '#030712',

  // Zinc
  zinc50: '#fafafa',
  zinc100: '#f4f4f5',
  zinc200: '#e4e4e7',
  zinc300: '#d4d4d8',
  zinc400: '#a1a1aa',
  zinc500: '#71717a',
  zinc600: '#52525b',
  zinc700: '#3f3f46',
  zinc800: '#27272a',
  zinc900: '#18181b',
  zinc950: '#09090b',

  // Neutral
  neutral50: '#fafafa',
  neutral100: '#f5f5f5',
  neutral200: '#e5e5e5',
  neutral300: '#d4d4d4',
  neutral400: '#a3a3a3',
  neutral500: '#737373',
  neutral600: '#525252',
  neutral700: '#404040',
  neutral800: '#262626',
  neutral900: '#171717',
  neutral950: '#0a0a0a',

  // Stone
  stone50: '#fafaf9',
  stone100: '#f5f5f4',
  stone200: '#e7e5e4',
  stone300: '#d6d3d1',
  stone400: '#a8a29e',
  stone500: '#78716c',
  stone600: '#57534e',
  stone700: '#44403c',
  stone800: '#292524',
  stone900: '#1c1917',
  stone950: '#0c0a09',

  // Red
  red50: '#fef2f2',
  red100: '#fee2e2',
  red200: '#fecaca',
  red300: '#fca5a5',
  red400: '#f87171',
  red500: '#ef4444',
  red600: '#dc2626',
  red700: '#b91c1c',
  red800: '#991b1b',
  red900: '#7f1d1d',
  red950: '#450a0a',

  // Orange
  orange50: '#fff7ed',
  orange100: '#ffedd5',
  orange200: '#fed7aa',
  orange300: '#fdba74',
  orange400: '#fb923c',
  orange500: '#f97316',
  orange600: '#ea580c',
  orange700: '#c2410c',
  orange800: '#9a3412',
  orange900: '#7c2d12',
  orange950: '#431407',

  // Amber
  amber50: '#fffbeb',
  amber100: '#fef3c7',
  amber200: '#fde68a',
  amber300: '#fcd34d',
  amber400: '#fbbf24',
  amber500: '#f59e0b',
  amber600: '#d97706',
  amber700: '#b45309',
  amber800: '#92400e',
  amber900: '#78350f',
  amber950: '#451a03',

  // Yellow
  yellow50: '#fefce8',
  yellow100: '#fef9c3',
  yellow200: '#fef08a',
  yellow300: '#fde047',
  yellow400: '#facc15',
  yellow500: '#eab308',
  yellow600: '#ca8a04',
  yellow700: '#a16207',
  yellow800: '#854d0e',
  yellow900: '#713f12',
  yellow950: '#422006',

  // Lime
  lime50: '#f7fee7',
  lime100: '#ecfccb',
  lime200: '#d9f99d',
  lime300: '#bef264',
  lime400: '#a3e635',
  lime500: '#84cc16',
  lime600: '#65a30d',
  lime700: '#4d7c0f',
  lime800: '#3f6212',
  lime900: '#365314',
  lime950: '#1a2e05',

  // Green
  green50: '#f0fdf4',
  green100: '#dcfce7',
  green200: '#bbf7d0',
  green300: '#86efac',
  green400: '#4ade80',
  green500: '#22c55e',
  green600: '#16a34a',
  green700: '#15803d',
  green800: '#166534',
  green900: '#14532d',
  green950: '#052e16',

  // Emerald
  emerald50: '#ecfdf5',
  emerald100: '#d1fae5',
  emerald200: '#a7f3d0',
  emerald300: '#6ee7b7',
  emerald400: '#34d399',
  emerald500: '#10b981',
  emerald600: '#059669',
  emerald700: '#047857',
  emerald800: '#065f46',
  emerald900: '#064e3b',
  emerald950: '#022c22',

  // Teal
  teal50: '#f0fdfa',
  teal100: '#ccfbf1',
  teal200: '#99f6e4',
  teal300: '#5eead4',
  teal400: '#2dd4bf',
  teal500: '#14b8a6',
  teal600: '#0d9488',
  teal700: '#0f766e',
  teal800: '#115e59',
  teal900: '#134e4a',
  teal950: '#042f2e',

  // Cyan
  cyan50: '#ecfeff',
  cyan100: '#cffafe',
  cyan200: '#a5f3fc',
  cyan300: '#67e8f9',
  cyan400: '#22d3ee',
  cyan500: '#06b6d4',
  cyan600: '#0891b2',
  cyan700: '#0e7490',
  cyan800: '#155e75',
  cyan900: '#164e63',
  cyan950: '#083344',

  // Sky
  sky50: '#f0f9ff',
  sky100: '#e0f2fe',
  sky200: '#bae6fd',
  sky300: '#7dd3fc',
  sky400: '#38bdf8',
  sky500: '#0ea5e9',
  sky600: '#0284c7',
  sky700: '#0369a1',
  sky800: '#075985',
  sky900: '#0c4a6e',
  sky950: '#082f49',

  // Blue
  blue50: '#eff6ff',
  blue100: '#dbeafe',
  blue200: '#bfdbfe',
  blue300: '#93c5fd',
  blue400: '#60a5fa',
  blue500: '#3b82f6',
  blue600: '#2563eb',
  blue700: '#1d4ed8',
  blue800: '#1e40af',
  blue900: '#1e3a8a',
  blue950: '#172554',

  // Indigo
  indigo50: '#eef2ff',
  indigo100: '#e0e7ff',
  indigo200: '#c7d2fe',
  indigo300: '#a5b4fc',
  indigo400: '#818cf8',
  indigo500: '#6366f1',
  indigo600: '#4f46e5',
  indigo700: '#4338ca',
  indigo800: '#3730a3',
  indigo900: '#312e81',
  indigo950: '#1e1b4b',

  // Violet
  violet50: '#f5f3ff',
  violet100: '#ede9fe',
  violet200: '#ddd6fe',
  violet300: '#c4b5fd',
  violet400: '#a78bfa',
  violet500: '#8b5cf6',
  violet600: '#7c3aed',
  violet700: '#6d28d9',
  violet800: '#5b21b6',
  violet900: '#4c1d95',
  violet950: '#2e1065',

  // Purple
  purple50: '#faf5ff',
  purple100: '#f3e8ff',
  purple200: '#e9d5ff',
  purple300: '#d8b4fe',
  purple400: '#c084fc',
  purple500: '#a855f7',
  purple600: '#9333ea',
  purple700: '#7e22ce',
  purple800: '#6b21a8',
  purple900: '#581c87',
  purple950: '#3b0764',

  // Fuchsia
  fuchsia50: '#fdf4ff',
  fuchsia100: '#fae8ff',
  fuchsia200: '#f5d0fe',
  fuchsia300: '#f0abfc',
  fuchsia400: '#e879f9',
  fuchsia500: '#d946ef',
  fuchsia600: '#c026d3',
  fuchsia700: '#a21caf',
  fuchsia800: '#86198f',
  fuchsia900: '#701a75',
  fuchsia950: '#4a044e',

  // Pink
  pink50: '#fdf2f8',
  pink100: '#fce7f3',
  pink200: '#fbcfe8',
  pink300: '#f9a8d4',
  pink400: '#f472b6',
  pink500: '#ec4899',
  pink600: '#db2777',
  pink700: '#be185d',
  pink800: '#9d174d',
  pink900: '#831843',
  pink950: '#500724',

  // Rose
  rose50: '#fff1f2',
  rose100: '#ffe4e6',
  rose200: '#fecdd3',
  rose300: '#fda4af',
  rose400: '#fb7185',
  rose500: '#f43f5e',
  rose600: '#e11d48',
  rose700: '#be123c',
  rose800: '#9f1239',
  rose900: '#881337',
  rose950: '#4c0519',
} as const