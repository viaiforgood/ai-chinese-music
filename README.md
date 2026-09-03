# 🎼 AI Chinese Music Toolkit (華樂 AI 創作開源工具箱)

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](./CONTRIBUTING.md)
[![Platform: Suno & Udio](https://img.shields.io/badge/Models-Suno_v3.5%2Fv4_%7C_Udio-blue.svg)](https://suno.com)
[![Web Portal: music.weiai.ai](https://img.shields.io/badge/Portal-music.weiai.ai-emerald.svg)](https://music.weiai.ai)
[![Short Link: music.vi.fyi](https://img.shields.io/badge/Short_Link-music.vi.fyi-cyan.svg)](https://music.vi.fyi)
[![Contest: chinesemusic.ai](https://img.shields.io/badge/Contest-chinesemusic.ai-orange.svg)](https://chinesemusic.ai)

> **以人赋灵，以算铸乐；传承华韵，共谱新声。**  
> 🌐 **在线互动工坊**：[https://music.weiai.ai](https://music.weiai.ai) ｜ [https://music.vi.fyi](https://music.vi.fyi) *(测试版: [mu.weiai.ai](https://mu.weiai.ai))*  
> 🏆 **官方大赛直达**：[https://chinesemusic.ai](https://chinesemusic.ai)

---

## 🤝 聯合主辦與戰略夥伴 (Organizers & Partners)

本項目與唯愛 AI 音樂學苑由以下機構聯合呈獻與深度協同：
* 🏛️ **唯愛AI公益基金會 (VI AI for Good Foundation 501(c)(3))** ｜ [viaiforgood.org](https://viaiforgood.org)
* 🏛️ **北卡浙大校友會 (北美浙大校友會北卡分會 · ZJUAANC)** ｜ [zjuaanc.org](https://zjuaanc.org)
* 🏛️ **北加高校聯盟 (北美高校聯盟北加州分會 · NACUAANC)** ｜ [nacuaanc.org](https://nacuaanc.org)
* 🚀 **北美高校聯盟 (NACUAA) 人工智能創業公益俱樂部** ｜ [nacuaa.ai](https://nacuaa.ai) / [ai.nacuaa.org](https://ai.nacuaa.org)

---

## 📖 項目簡介 (Overview)

**AI Chinese Music Toolkit** 是由 **唯愛AI公益基金會** 攜手 **北卡浙大校友會 (北美浙大校友會北卡分會 · ZJUAANC)**、**北加高校聯盟 (NACUAANC)** 及 **北美高校聯盟人工智能創業公益俱樂部** 共同發起的開源華樂生成式 AI 創作指南與 Prompt 工程庫。

由於主流音樂生成大模型（Suno、Udio、MusicGen 等）多以西方流行樂語料為基準訓練，在生成純正中國五聲調式（華樂/國風）時常出現“塑料民樂感”、“樂器打架”或“調式不純”等問題。本項目旨在建立首個**開源標準化的華樂 AI 提示詞工程詞典、五聲調式提示詞公式、30+ 實戰爆款配方與 CLI 工具**。

---

## ⚡ 快速開始 (Quick Start)

無需安裝任何依賴，直接通過 Node.js 運行開源 CLI：

```bash
# 查看所有已驗證的實戰配方
node bin/cli.js --list-recipes

# 輸出指定配方的完整 Suno/Udio 提示詞與曲式標籤
node bin/cli.js --recipe=desert-epic

# 檢索特定樂器的標準英文提示詞 (如二胡)
node bin/cli.js --search-inst=erhu

# 瀏覽五聲調式 (宮商角徵羽) 提示詞公式
node bin/cli.js --list-modes
```

---

## 🪕 華樂樂器提示詞大典 (Instruments Taxonomy)

本庫收錄 40+ 款中國傳統民族樂器的標準英語提示詞、聲學特徵與演奏技巧描述：

| 樂器分類 | 樂器 (中文) | 英文標準提示詞 (English Terms) | 核心聲學修飾詞 (Acoustic Keywords) |
| :--- | :--- | :--- | :--- |
| **彈撥樂器** | **古箏** | `Guzheng`, `Chinese Zither` | `virtuosic guzheng plucks, cascading arpeggios, rapid glissando, shimmering harp-like runs` |
| **彈撥樂器** | **琵琶** | `Pipa`, `Chinese Lute` | `sharp dynamic pipa tremolo, passionate martial plucking, percussive fret slap` |
| **彈撥樂器** | **古琴** | `Guqin`, `Seven-string zither` | `deep meditative guqin resonance, low acoustic timbre, sliding harmonics, spacious silence` |
| **彈撥樂器** | **中阮/大阮**| `Zhongruan`, `Moon guitar` | `warm woody zhongruan acoustic chords, mellow mid-range groove, rhythmic comping` |
| **彈撥樂器** | **揚琴** | `Yangqin`, `Hammered dulcimer` | `bright crystalline yangqin hammer strikes, fast rhythmic cascades, metallic resonance` |
| **拉弦樂器** | **二胡** | `Erhu`, `Two-string Chinese fiddle`| `soulful weeping erhu melody, emotional crying violin timbre, expressive portamento slides` |
| **拉弦樂器** | **高胡** | `Gaohu`, `Cantonese fiddle` | `bright piercing gaohu lead, shimmering soaring high-register melodies` |
| **拉弦樂器** | **中胡** | `Zhonghu`, `Chinese viola fiddle` | `deep warm zhonghu string swell, velvety low-mid violin resonance` |
| **吹管樂器** | **竹笛** | `Dizi`, `Chinese bamboo flute` | `airy agile bamboo dizi flute trills, distinctive buzzing membrane timbre, soaring folk melody` |
| **吹管樂器** | **簫/洞簫** | `Xiao`, `Vertical end-blown flute` | `deep haunting xiao flute, breathy atmospheric woodwind, ethereal solitary tone` |
| **吹管樂器** | **嗩吶** | `Suona`, `Chinese double-reed horn`| `explosive piercing suona lead, triumphant festive brass reed, thrilling high crescendo` |
| **吹管樂器** | **笙** | `Sheng`, `Chinese mouth organ` | `ancient harmonic sheng chords, shimmering mouth organ pads, celestial organ-like polyphony` |
| **吹管樂器** | **塤** | `Xun`, `Ancient clay ocarina` | `ancient primordial clay xun resonance, sorrowful hollow whistling, earthen primitive wind` |
| **打擊樂器** | **編鐘** | `Bianzhong`, `Bronze chime bells` | `ancient ceremonial bianzhong bronze chime bells, majestic sacred bell tolls` |
| **打擊樂器** | **堂鼓/戰鼓**| `Tanggu`, `Chinese war drums` | `thunderous deep Chinese war drums, galloping martial rhythm, visceral low-end impact` |
| **現代融合** | **808重低音**| `808 Sub Bass`, `Trap beats` | `distorted 808 sub bass, tight punchy drums, modern beat production` |

---

## 🎵 五聲調式提示詞指南 (Pentatonic Modes Prompting)

在 Suno 与 Udio 中，加入特定調式與情緒關鍵詞可有效約束 AI 旋律走向：

```text
• 宮調式 (Gong Mode - 1 2 3 5 6):
  "Gong pentatonic mode, major pentatonic Chinese scale, bright imperial grandeur, uplifting harmonious"
  适合：宫廷礼乐、盛典华章、庄严国风交响。

• 商調式 (Shang Mode - 2 3 5 6 1):
  "Shang mode pentatonic, heroic minor flavor, martial resolute drive, crying desert wind, heroic and tragic"
  适合：边塞史诗、战场战歌、热血武侠。

• 角調式 (Jiao Mode - 3 5 6 1 2):
  "Jiao mode Chinese scale, organic pastoral warmth, tender springtime melody, gentle woodwind breeze"
  适合：田园春意、清丽民谣、舒缓叙事。

• 徵調式 (Zhi Mode - 5 6 1 2 3):
  "Zhi mode pentatonic, celebratory uplifting pulse, joyous folk festival, radiant fireworks melody"
  适合：民俗节庆、欢快律动、流行国风。

• 羽調式 (Yu Mode - 6 1 2 3 5):
  "Yu mode minor pentatonic, melancholic ancient soul, misty water reflection, ethereal sorrowful beauty"
  适合：江南烟雨、禅意静思、凄美情歌。
```

---

## 🏷️ 曲式結構標籤標準 (Song Structure Tags)

在歌詞中合理使用結構控制符，能精準引導 AI 分段爆發：

```text
[Intro - Ethereal Guzheng & Solitary Xiao Flute]
[Verse 1 - Low strings, storytelling tone, acoustic guitar]
[Pre-Chorus - Rising drum roll, tension building]
[Chorus - Full orchestral crescendo, driving beat, powerful vocal hook]
[Instrumental Solo - Blazing Pipa and Erhu duel]
[Bridge - Tempo slowdown, emotional vulnerability, soft piano]
[Drop - Full 808 Bass and War Drums Impact]
[Outro - Fading guqin harmonics, rain ambient fade out]
```

---

## 📁 項目架構 (Repository Structure)

```text
ai-chinese-music/
├── bin/
│   └── cli.js                  # 零依賴開源 CLI 工具
├── data/
│   ├── instruments.json        # 40+ 款民族樂器提示詞數據庫
│   ├── modes.json              # 五聲調式提示詞公式庫
│   └── recipes.json            # 實戰爆款提示詞與曲式歌詞配方
├── CONTRIBUTING.md             # 社區貢獻指南
├── LICENSE                     # MIT 開源許可證
├── package.json
└── README.md
```

---

## 🤝 貢獻與反饋 (Contributing)

歡迎全球華樂音樂人、作曲家、音頻工程師與 AI 研究員共同完善本項目！
請參閱 [CONTRIBUTING.md](./CONTRIBUTING.md) 提交您的 Prompt 配方與樂器映射。

---

## ⚖️ 開源許可證 (License)

本項目基於 **MIT License** 協議開源。
