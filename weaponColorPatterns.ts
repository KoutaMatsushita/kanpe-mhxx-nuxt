
const patterns = [
  "白赤青",
  "白赤黄",
  "白赤緑",
  "白赤空",
  "白青緑",
  "白青空",
  "白青黄",
  "白緑空",
  "白緑黄",
  "白空黄",
  "紫赤青",
  "紫赤緑",
  "紫赤空",
  "紫赤黄",
  "紫青緑",
  "紫青空",
  "紫青黄",
  "紫緑空",
  "紫緑黄",
  "紫空黄",
  "紫橙赤",
  "紫橙青",
  "紫橙緑",
  "紫空橙",
  "紫橙黄"
] as const

export type ColorPatterns = typeof patterns[number]

export default patterns
