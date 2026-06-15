---
name: hyperframes-ai-video-workflow
description: Make Chinese Douyin/TikTok-style AI explainer videos from spoken audio, script, screenshots, or product demos using Codex and HyperFrames. Use when the user asks to turn口播素材 into a polished video, write a video production rule, build a global control table, create a sentence-level storyboard, plan or implement HyperFrames animation, sync subtitles and motion to voice, imitate reference video motion language, or QA a rendered short video.
---

# HyperFrames AI Video Workflow

Use this skill for the user's Codex + HyperFrames short-video production workflow. The goal is not to make "subtitles plus cards"; the goal is a speech-driven visual explanation system where every important spoken point has a matching visual action.

## Core Rule

The storyboard is an acceptance checklist, not a creative reference.

Before building or revising a video, lock these four layers:

1. Audio and script timing.
2. Global control table.
3. Sentence-level storyboard.
4. Render-frame QA.

Do not skip from script to HTML. Do not patch isolated coordinates when the real problem is layout, timing, or visual language.

## Required Workflow

1. **Ingest**
   - Inputs may include口播音频, script, original video, reference videos, screenshots, product pages, or prior drafts.
   - Audio is the source of truth for timing.
   - If real desktop screenshots are needed, ask the user before capturing. Never silently screenshot the user's active desktop.
   - If the user rejected a draft frame, asset, color style, or visual idea, mark it forbidden and do not reuse it.

2. **Transcribe and align**
   - Use Whisper-like tooling or HyperFrames transcribe to get timecodes.
   - Segment by spoken sentence or short phrase, not by paragraph.
   - Subtitles must not appear before the spoken phrase. Default subtitle entry is slightly after voice onset, not before it.
   - If the user says subtitles or motion feel fast, treat it as a global sync issue first, then tune individual nodes.

3. **Create a global control table**
   - Split the full video into stages before making detailed shots.
   - For each stage, define: time range, narrative purpose, main visual region, top progress/process band, subtitle safe zone, bottom platform-safe zone, and right-side Douyin interaction safe zone.
   - Main content is horizontally centered as a whole visual block. Do not judge centering from one card alone.
   - Keep the main subject in the upper-middle content zone, not vertically centered on the whole phone frame.

4. **Write a sentence-level storyboard**
   - One row per spoken sentence or short phrase.
   - Each row must include exact time, spoken line, subtitle, visual object, asset source, layout region, keyword timing, motion plan, forbidden actions, and acceptance frame.
   - Visuals must explain the current spoken meaning. Do not put a generic flowchart on screen when the voice is talking about a product UI, a failed draft, or a comparison.
   - See `references/storyboard-table.md`.

5. **Choose asset source per row**
   - Real product/software UI: use real screenshots or approved screen recordings.
   - Official logos or icons: use real source assets when possible, then cut out or clean with GPT Image 2/image editing if needed. Do not fake official marks.
   - Abstract concepts, atmosphere, cover images, or metaphor visuals: use GPT Image 2/imagegen.
   - Code/HTML graphics: use for flows, timelines, comparisons, diagnostics, cards, captions, and motion diagrams.
   - Generated images must appear in the final video. If they are only saved but invisible, they do not count.

6. **Define visual identity before HTML**
   - Create or read `DESIGN.md`.
   - For this user's AI-video series, default to premium dark cinematic tech: deep black canvas, cool cyan/blue accents, restrained violet, small warm warning accents only when semantically needed.
   - Avoid muddy dark green, dark red, dark orange, cheap PPT templates, dense dashboards, generic sci-fi clutter, and repeated bouncing cards.

7. **Build with HyperFrames**
   - Build each scene's settled hero frame first, then animate into and out of it.
   - Use GSAP motion with semantic purpose: typing, cursor movement, zoom, mask reveal, scan, drag, timeline playhead, diagnostic mark, layered comparison, or flow execution.
   - Do not use motion as decoration. Motion must guide attention to the exact information block the voice is discussing.
   - For implementation details, use the HyperFrames and GSAP skills when available.

8. **Sync motion to voice**
   - Motion should normally land shortly after the keyword is spoken, not before.
   - If a visual anticipates speech, it must be intentional and brief.
   - When the user says "字幕和动效比声音快", first apply a global post-point lag to subtitle and visual events, then re-check frames.
   - Important rule: visual timing and subtitle timing must be reviewed together.
   - See `references/motion-sync.md`.

9. **Render and QA**
   - Run HyperFrames inspect before rendering.
   - Render MP4.
   - Extract frames at every stage boundary and at dense frames inside each stage.
   - QA must check: semantic match to voice, subtitle timing, Douyin safe zones, horizontal centering, visual hierarchy, rejected assets, and generated-image usage.
   - Show the user the video inline when possible, plus contact sheets for the questioned section.
   - See `references/qa-checklist.md`.

## Revision Rules

- If the user says the whole visual language is wrong, discard that visual system. Do not patch colors and reuse the same structure.
- If the user says "没有按照分镜表", compare the rendered frame against the storyboard row. Fix the storyboard or rebuild the scene; do not improvise.
- If a shot fails twice, rebuild that shot from the storyboard table.
- If the user asks "先不要改", analyze only and do not edit files.
- If a real screenshot is needed, tell the user before capturing.

## Output Expectations

For a new production, provide these artifacts before final rendering:

```text
global-control-table.md
storyboard-table.md
asset-plan.md
DESIGN.md
HyperFrames source
rendered MP4
frame QA contact sheets
```

For a quick test, produce only the requested duration, then validate that section before expanding to the full video.

