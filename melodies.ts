export type MelodyType = {
  [key: string]: string[]
}

const melodies = {
  自分強化: ["白白", "紫紫"],
  "攻撃力強化【小】": ["白赤赤", "紫赤黄", "黄紫赤", "赤黄紫"],
  "攻撃力強化【大】": ["紫赤空紫", "紫赤緑紫"],
  "体力増加【小】": ["赤青白", "紫緑紫"],
  "体力増加【大】": ["赤青赤紫", "紫橙橙赤"],
  "スタミナ減少無効【小】": ["白空青", "白黄青", "白空青", "白緑青"],
  "スタミナ減少無効【大】": ["紫緑青緑", "紫空青空", "紫黄青", "紫橙青橙"],
  風圧無効: ["青青赤", "青青緑", "青青空"],
  風圧完全無効: ["青青黄紫", "青青橙"],
  "防御力強化【小】": ["白青青"],
  "防御力強化【大】": ["紫青青紫"],
  "攻撃力&防御力強化【小】": ["橙青紫青"],
  "会心力UP&体力回復【小】": ["緑橙紫橙"],
  千里眼: ["白青空", "紫青空"],
  "体力回復【小】": ["白緑白", "紫緑紫"],
  "体力回復【大】": ["緑緑紫空"],
  "体力回復【小】＆解毒": ["空青白青", "緑青白青"],
  "体力回復【中】＆解毒": ["緑青紫青"],
  "体力回復【中】&消臭": ["緑白空空", "紫緑紫"],
  "回復速度【小】": ["緑緑白赤", "緑緑黄"],
  "回復速度【大】": ["緑緑赤紫"],
  耐だるま状態: ["空空空"],
  寒さ無効: ["空赤空"],
  暑さ無効: ["赤赤空"],
  "聴覚保護【小】": ["空空赤白", "空空緑白", "空空赤紫"],
  "聴覚保護【大】": ["空空緑紫", "橙橙緑紫"],
  "聴覚保護【小】&風圧軽減": ["紫黄橙黄"],
  麻痺無効: ["空黄白", "空黄紫"],
  気絶無効: ["空青紫"],
  耐震: ["空空黄"],
  "火属性防御強化【小】": ["黄赤白"],
  "火属性防御強化【大】": ["黄赤紫"],
  "水属性防御強化【小】": ["黄空白"],
  "水属性防御強化【大】": ["黄空紫"],
  "雷属性防御強化【小】": ["黄緑白"],
  "雷属性防御強化【大】": ["黄緑紫"],
  "氷属性防御強化【小】": ["黄青白"],
  "氷属性防御強化【大】": ["黄青紫"],
  "龍属性防御強化【小】": ["白黄空"],
  "龍属性防御強化【大】": ["紫黄空"],
  全属性耐性強化: ["黄橙空"],
  属性やられ無効: ["橙黄黄橙"],
  高周波: ["黄黄黄"],
  属性攻撃力強化: ["黄空黄空", "紫緑黄緑"],
  精霊王の加護: ["緑黄紫黄", "紫橙紫空"],
  全旋律効果延長: ["橙赤橙"],
  のけぞり無効: ["赤橙赤紫"],
  状態異常攻撃強化: ["空橙橙紫"],
  全状態異常無効: ["空紫橙橙"]
} as MelodyType

export default melodies
