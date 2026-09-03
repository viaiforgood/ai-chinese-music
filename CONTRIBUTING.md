# Contributing to AI Chinese Music Toolkit

Thank you for your interest in contributing to the **AI Chinese Music Creation Toolkit & Prompt Cookbook**!

This project is maintained by **VI AI for Good Foundation (唯爱AI公益基金会)** as an open standard to help global musicians, composers, and AI enthusiasts create authentic, expressive Chinese Music (華樂) using generative AI (Suno, Udio, Stable Audio, MusicGen).

## How You Can Contribute

1. **Submit New Prompt Recipes**:
   - Add entries into `data/recipes.json` with tested `sunoPrompt`, `udioPrompt`, and sample lyric structures.
2. **Expand Chinese Instrument Descriptors**:
   - Add regional or minority Chinese instruments (e.g., Morin Khuur / 马头琴, Bawu / 巴乌, Hulusi / 葫芦丝, Rawap / 热瓦普) to `data/instruments.json`.
3. **Refine Pentatonic Scale Prompts**:
   - Improve English keyword mappings for Gong, Shang, Jiao, Zhi, Yu modes in `data/modes.json`.
4. **Tool Integrations**:
   - Web UI widgets, DAW extensions, or ComfyUI custom nodes.

## Pull Request Guidelines

- Ensure JSON files are valid and formatted with 2 spaces.
- Test your changes using `node bin/cli.js --list-recipes`.
- Keep acoustic descriptors accurate to traditional Chinese performance practice.
