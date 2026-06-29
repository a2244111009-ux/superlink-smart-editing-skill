---
name: hyperframes-ai-video-workflow
description: Make Chinese Douyin/TikTok-style AI explainer, practical experience, case-based, recommendation, legal, business-case, and workflow videos from a single question, spoken audio, scripts, screenshots, product demos, real footage, HyperFrames, Remotion, or local VoxCPM voice generation. Use when the user asks to turn口播素材 into a polished video, automatically create a one-question-to-video workflow, write scripts, generate cloned narration, choose the right visual form for a content type, write a video production rule, build a global control table, create a sentence-level storyboard, plan or implement HyperFrames or Remotion animation, sync subtitles and motion to voice, imitate reference video motion language, or QA a rendered short video.
---

# 超级链智能剪辑

英文名称：**Superlink Smart Editing**

Skill 标识：`hyperframes-ai-video-workflow`

Use this skill for the user's Codex + HyperFrames/Remotion short-video production workflow. The goal is not to make "subtitles plus cards"; the goal is a speech-driven visual explanation system where every important spoken point has a matching visual action.

## Core Rule

The storyboard is an acceptance checklist, not a creative reference.

Before building or revising a video, lock these four layers:

1. Audio and script timing.
2. Global control table.
3. Sentence-level storyboard.
4. Render-frame QA.

Do not skip from script to HTML. Do not patch isolated coordinates when the real problem is layout, timing, or visual language.

## Content Fit Gate

Before storyboarding, classify the script. Do not force every口播 into the same visual form.

- **Mechanism/explainer/science/product-workflow videos**: use strong visual演绎, controlled diagrams, object transformations, process animation, and keyword-triggered micro-motion.
- **Practical experience/case/避坑分享 videos**: use a real-world evidence flow. Prefer chat records, form fields, backend login screens, account/permission states, document snippets, call notes, and screen-recording-like movement. Keep abstract机制动画 rare and only use it to clarify one hidden relation.
- **Recommendation/sales videos**: use product proof, before/after, user scenario, result evidence, and CTA rhythm.

If the first sample feels like a PPT, abstract lecture, or software demo for a story that should feel like a real case, stop and redesign the visual form before rendering more duration.

## Required Workflow

If the user gives only one topic/question and wants a complete video, first read `references/one-question-autopilot.md`. If local narration or cloned voice is needed, also read `references/voxcpm-local-voice.md`.

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
   - First write the `content_type` and `visual_form_strategy` at the top of the table.
   - For practical experience/避坑分享, the main visual should feel like evidence from the real situation, not a general education diagram.
   - Split the full video into stages before making detailed shots.
   - For each stage, define: time range, narrative purpose, main visual region, top progress/process band, subtitle safe zone, bottom platform-safe zone, and right-side Douyin interaction safe zone.
   - Main content is horizontally centered as a whole visual block. Do not judge centering from one card alone.
   - Keep the main subject in the upper-middle content zone, not vertically centered on the whole phone frame.

4. **Write a sentence-level storyboard**
   - One row per spoken sentence or short phrase.
   - Each row must include exact time, spoken line, subtitle, visual object, asset source, layout region, keyword timing, keyword-triggered micro-motion, motion parameters, forbidden actions, and acceptance frame.
   - Visuals must explain the current spoken meaning. Do not put a generic flowchart on screen when the voice is talking about a product UI, a failed draft, or a comparison.
   - See `references/storyboard-table.md`.

5. **Choose asset source per row**
   - Real product/software UI: use real screenshots or approved screen recordings.
   - Practical experience/避坑分享: use approved screenshots if available; otherwise use clearly synthetic recreations of chats, forms, account states, documents, or backend pages. Do not fake official proof.
   - Official logos or icons: use real source assets when possible, then cut out or clean with GPT Image 2/image editing if needed. Do not fake official marks.
   - Abstract concepts, atmosphere, cover images, or metaphor visuals: use GPT Image 2/imagegen.
   - Code/HTML graphics: use for flows, timelines, comparisons, diagnostics, cards, captions, and motion diagrams.
   - Generated images must appear in the final video. If they are only saved but invisible, they do not count.

6. **Define visual identity before HTML**
   - Create or read `DESIGN.md`.
   - For this user's AI-video series, default to premium dark cinematic tech: deep black canvas, cool cyan/blue accents, restrained violet, small warm warning accents only when semantically needed.
   - Avoid muddy dark green, dark red, dark orange, cheap PPT templates, dense dashboards, generic sci-fi clutter, and repeated bouncing cards.

7. **Build with HyperFrames or Remotion**
   - Build each scene's settled hero frame first, then animate into and out of it.
   - Default to HyperFrames when the project is already HyperFrames, when GSAP/HTML composition is enough, or when using the existing HyperFrames preview/render workflow.
   - Use Remotion when the user explicitly asks for Remotion, when React component structure is better for reusable scenes, when frame-accurate composition logic matters, or when the project already contains a Remotion app.
   - For Remotion implementation rules, read `references/remotion.md`.
   - Use GSAP or Remotion frame-driven motion with semantic purpose: typing, cursor movement, zoom, mask reveal, scan, drag, timeline playhead, diagnostic mark, layered comparison, or flow execution.
   - Do not use motion as decoration. Motion must guide attention to the exact information block the voice is discussing.
   - For implementation details, use the HyperFrames, GSAP, or Remotion skills when available.

8. **Sync motion to voice**
   - Motion should normally land shortly after the keyword is spoken, not before.
   - If a visual anticipates speech, it must be intentional and brief.
   - Every important keyword should trigger a visible micro-motion response, such as glow, border scan, progress fill, icon pop, mask reveal, focus pulse, strike, snap, or completion pulse.
   - Do not accept a storyboard row that only says "highlight" or "animate"; name the exact target, trigger frame, duration, easing, and settled state.
   - When the user says "字幕和动效比声音快", first apply a global post-point lag to subtitle and visual events, then re-check frames.
   - Important rule: visual timing and subtitle timing must be reviewed together.
   - See `references/motion-sync.md`.
   - For keyword-triggered micro-interactions and Uiverse-style motion vocabulary, read `references/micro-motion.md`.

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
Remotion source when Remotion is selected
rendered MP4
frame QA contact sheets
```

For a quick test, produce only the requested duration, then validate that section before expanding to the full video.

## Detailed References And Assets

- `references/storyboard-table.md`: sentence-level storyboard table format.
- `references/motion-sync.md`: subtitle and motion timing rules.
- `references/micro-motion.md`: keyword-triggered micro-motion vocabulary.
- `references/qa-checklist.md`: render-frame QA checklist.
- `references/remotion.md`: Remotion production rules.
- `references/asset-and-style.md`: asset and visual style rules.
- `references/business-case-mouthpiece.md`: Chinese real-business-case口播 workflow for service stories, compliance traps, licensing/account/control-right issues, and cases without screenshots, backend evidence, or chat logs.
- `references/one-question-autopilot.md`: one-question-to-video workflow; Codex writes the script, generates narration, transcribes audio, builds storyboard, makes visuals, creates cover, exports MP4, and QA checks.
- `references/voxcpm-local-voice.md`: local VoxCPM setup, cloned voice generation, style voice fallback, and failure handling.
- `scripts/check_voxcpm.py`: checks whether local VoxCPM dependencies are available.
- `scripts/voxcpm_synthesize.py`: generates narration with VoxCPM from text and optional user reference voice.
- `assets/remotion-v5-template/`: V5 Remotion template assets for business-case videos. Reuse the layout, subtitle layer, safe zones, visual delay, and keyword-motion structure; replace the FDA content with the current industry topic.
