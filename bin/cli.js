#!/usr/bin/env node

/**
 * AI Chinese Music Toolkit (ai-chinese-music CLI)
 * Developed by VI AI for Good Foundation (唯爱AI公益基金会)
 * Open-source under MIT License.
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

const instruments = JSON.parse(fs.readFileSync(path.join(rootDir, 'data/instruments.json'), 'utf-8'));
const modes = JSON.parse(fs.readFileSync(path.join(rootDir, 'data/modes.json'), 'utf-8'));
const recipes = JSON.parse(fs.readFileSync(path.join(rootDir, 'data/recipes.json'), 'utf-8'));

const args = process.argv.slice(2);

console.log(`\x1b[36m
  ╔════════════════════════════════════════════════════════════════════╗
  ║    🎵 AI Chinese Music Creation Toolkit & Prompt Cookbook 🎼        ║
  ║    by VI AI for Good Foundation (唯爱AI公益基金会)                 ║
  ║    Official Portal: https://music.weiai.ai                         ║
  ╚════════════════════════════════════════════════════════════════════╝
\x1b[0m`);

if (args.includes('--help') || args.includes('-h') || args.length === 0) {
  console.log(`\x1b[1mUsage:\x1b[0m
  npx @viaiforgood/ai-chinese-music [command] [options]

\x1b[1mCommands:\x1b[0m
  \x1b[32m--list-recipes\x1b[0m         List all pre-built battle-tested prompt recipes
  \x1b[32m--recipe=<id>\x1b[0m          Output specific recipe with full Suno/Udio prompt & lyrics
  \x1b[32m--list-instruments\x1b[0m     List traditional Chinese instruments and prompt keywords
  \x1b[32m--search-inst=<name>\x1b[0m   Search instrument by Chinese or English name
  \x1b[32m--list-modes\x1b[0m           List the 5 pentatonic modes (宫商角徵羽) & prompt formulas

\x1b[1mExamples:\x1b[0m
  node bin/cli.js --recipe=desert-epic
  node bin/cli.js --search-inst=erhu
  node bin/cli.js --list-recipes
`);
  process.exit(0);
}

if (args.includes('--list-recipes')) {
  console.log('\x1b[33m=== 🌟 Battle-Tested Prompt Recipes ===\x1b[0m\n');
  recipes.forEach((r, idx) => {
    console.log(`  \x1b[32m${idx + 1}. [${r.id}]\x1b[0m \x1b[1m${r.name}\x1b[0m (${r.genre}, ${r.tempo} BPM)`);
  });
  console.log('\nRun `node bin/cli.js --recipe=<id>` to view full prompts and lyric structures.');
  process.exit(0);
}

const recipeArg = args.find(a => a.startsWith('--recipe='));
if (recipeArg) {
  const targetId = recipeArg.split('=')[1];
  const found = recipes.find(r => r.id === targetId);
  if (!found) {
    console.log(`\x1b[31mError: Recipe '${targetId}' not found. Run --list-recipes to see options.\x1b[0m`);
    process.exit(1);
  }
  console.log(`\x1b[33m=== Recipe: ${found.name} ===\x1b[0m`);
  console.log(`\x1b[1mGenre:\x1b[0m ${found.genre} | \x1b[1mMode:\x1b[0m ${found.mode} | \x1b[1mTempo:\x1b[0m ${found.tempo} BPM\n`);
  console.log(`\x1b[36m--- Suno v3.5/v4 Prompt (Style of Music) ---\x1b[0m`);
  console.log(found.sunoPrompt + '\n');
  console.log(`\x1b[35m--- Udio Prompt ---\x1b[0m`);
  console.log(found.udioPrompt + '\n');
  console.log(`\x1b[32m--- Structured Lyrics with Brackets ---\x1b[0m`);
  console.log(found.structureLyrics + '\n');
  process.exit(0);
}

if (args.includes('--list-instruments')) {
  console.log('\x1b[33m=== 🪕 Chinese Instruments Taxonomy ===\x1b[0m\n');
  instruments.forEach(inst => {
    console.log(`\x1b[32m• ${inst.name} (${inst.englishTerms[0]})\x1b[0m - \x1b[90m${inst.category}\x1b[0m`);
    console.log(`  Keywords: \x1b[36m${inst.promptKeywords}\x1b[0m`);
    console.log(`  Techniques: ${inst.playingTechniques.join(', ')}\n`);
  });
  process.exit(0);
}

const searchArg = args.find(a => a.startsWith('--search-inst='));
if (searchArg) {
  const query = searchArg.split('=')[1].toLowerCase();
  const matched = instruments.filter(inst => 
    inst.name.includes(query) || 
    inst.id.includes(query) || 
    inst.englishTerms.some(t => t.toLowerCase().includes(query))
  );

  if (matched.length === 0) {
    console.log(`\x1b[31mNo instruments matching '${query}' found.\x1b[0m`);
    process.exit(1);
  }

  matched.forEach(inst => {
    console.log(`\x1b[32m=== ${inst.name} (${inst.englishTerms.join(' / ')}) ===\x1b[0m`);
    console.log(`  Category: ${inst.category}`);
    console.log(`  Character: ${inst.soundCharacter}`);
    console.log(`  Prompt Keywords: \x1b[36m${inst.promptKeywords}\x1b[0m`);
    console.log(`  Techniques: ${inst.playingTechniques.join(', ')}\n`);
  });
  process.exit(0);
}

if (args.includes('--list-modes')) {
  console.log('\x1b[33m=== 🎵 The Five Pentatonic Modes (五声调式) ===\x1b[0m\n');
  modes.forEach(m => {
    console.log(`\x1b[32m• ${m.name}\x1b[0m (${m.westernEquivalent})`);
    console.log(`  Notes: ${m.notes} | Mood: ${m.mood}`);
    console.log(`  Keywords: \x1b[36m${m.promptKeywords}\x1b[0m\n`);
  });
  process.exit(0);
}
