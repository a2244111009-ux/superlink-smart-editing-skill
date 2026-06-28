# Storyboard Table Standard

The storyboard table is the build contract. Every row must be executable and reviewable.

## Required Columns

```text
id
time_range
spoken_line
subtitle
stage
content_type
main_visual_object
visual_form
asset_source
tool
layout_region
keyword_timing
micro_motion_target
micro_motion_type
micro_motion_params
settled_state
entrance_motion
explanation_motion
emphasis_motion
exit_motion
forbidden_actions
acceptance_frame
```

## Column Rules

- `time_range`: exact start and end time from audio. Do not use vague labels like "around 1 minute".
- `spoken_line`: exact spoken content for this row.
- `subtitle`: exact subtitle on screen. It can be shorter than speech, but cannot change meaning.
- `content_type`: choose mechanism/explainer, practical case/避坑分享, recommendation/sales, or mixed. This controls visual form.
- `main_visual_object`: name the object the viewer should look at, such as "Jianying desktop timeline", "Codex chat input", "failed draft preview", "motion-vs-voice rhythm bars".
- `visual_form`: choose one: real screenshot, approved screen recording, HTML UI recreation, synthetic chat/form/backend/document scene, GPT Image 2 image, logo cutout, comparison card, flow timeline, diagnostic overlay, or kinetic type.
- `asset_source`: real source path/URL or generated asset name. If unknown, mark `needed`.
- `tool`: choose exact tool, such as HyperFrames HTML, GSAP, GPT Image 2/imagegen, screenshot crop, Whisper/transcribe, FFmpeg extract, or browser capture.
- `layout_region`: must reference the global control table region.
- `keyword_timing`: exact keyword and when motion should start relative to it, for example `keyword: "时间轴"; motion starts +0.25s after keyword`.
- `micro_motion_target`: exact object that responds to the keyword, such as "render preview card", "screenshot tile", "timeline tag", or "CTA button".
- `micro_motion_type`: choose a concrete micro-interaction such as glow, border scan, progress fill, card lift, icon pop, mask reveal, focus ring pulse, snap, strike/collapse, toggle switch, or completion pulse. See `micro-motion.md`.
- `micro_motion_params`: exact trigger, duration, easing, values, and peak/settled frames. Do not write vague words like "highlight" or "animate".
- `settled_state`: what the object looks like after the micro-motion ends.
- `entrance_motion`: how the object appears.
- `explanation_motion`: how the object explains the point while the voice continues.
- `emphasis_motion`: what lights, zooms, circles, crosses, scans, types, or moves at the key word.
- `exit_motion`: when and how it leaves or yields to the next shot.
- `forbidden_actions`: list anything rejected or misleading, such as fake official screenshot, old draft frame, generic flowchart, or repeated bounce.
- `acceptance_frame`: timestamp to inspect after render.

## Example Row

```text
id: S07
time_range: 46.13-53.36
spoken_line: 哪句话从几秒开始，哪句话到几秒结束，先对清楚。
subtitle: 先把每句话和时间轴对清楚
stage: 先对时间轴
main_visual_object: Jianying desktop timeline with voice waveform and aligned sentence tags
visual_form: real screenshot + HTML overlay
asset_source: real Jianying desktop screenshot
tool: screenshot crop + HyperFrames HTML + GSAP playhead
layout_region: main visual upper-middle, subtitle safe zone clear
keyword_timing: "时间轴" +0.25s playhead moves; "对清楚" +0.15s sentence tags snap into place
micro_motion_target: current sentence tag and time ruler
micro_motion_type: snap + focus ring pulse
micro_motion_params: tag snaps to playhead over 12 frames; time ruler cyan ring expands 1.0 -> 1.32 and fades over 10 frames
settled_state: current tag holds cyan border at 35% glow; playhead remains aligned with waveform
entrance_motion: screenshot slides in from 8px below with slight scale-up
explanation_motion: playhead travels across waveform while sentence tags appear one by one
emphasis_motion: current sentence tag glows and the time ruler gets a cyan ring
exit_motion: fade screenshot down before storyboard table enters
forbidden_actions: no mobile Jianying screenshot; no fake unrelated editor UI
acceptance_frame: 49s, 51s, 53s
```

## Anti-Patterns

- "HTML graphic" as the entire visual description.
- "Add highlight" without naming the exact target and keyword.
- "Keyword micro-motion" without trigger frame, duration, values, and settled state.
- Showing the future workflow while the voice is still discussing the failed misconception.
- Reusing a rejected frame because it already exists in assets.
- Writing a storyboard that cannot be judged from extracted frames.
- Turning a practical experience/避坑 story into a full mechanism explainer when the viewer needs real-world evidence such as chat, backend, form, account, or document states.
