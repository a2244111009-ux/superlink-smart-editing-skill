# Keyword Micro-Motion Layer

Use this reference when a video feels structurally correct but visually flat, when the user mentions Uiverse, micro-interactions, polish, button/card/loader effects, or when building/revising voice-synced motion.

## Core Rule

Do not let keywords only change subtitles. A spoken keyword must trigger a visible micro-motion response in the current visual object.

```text
voice timeline -> spoken beat -> keyword frame -> semantic visual action -> micro-motion polish
```

A row is unfinished if it has a spoken keyword but no micro-motion target, trigger frame, duration, and settled state.

## Uiverse Translation

Use Uiverse as a micro-interaction vocabulary, not as a full layout source. Convert web interaction states into video timeline events:

```text
:hover        -> keyword-triggered emphasis
:active       -> confirmation beat
loader loop   -> process duration
toggle        -> before/after switch
card hover    -> current visual focus
button glow   -> CTA or keyword confirmation
```

Do not copy whole components blindly. Extract the motion grammar and rebuild it for the video style.

## Micro-Motion Vocabulary

Use one primary micro-motion per spoken beat:

```text
glow              keyword focus or successful match
border scan       activation, confirmation, CTA, render start
progress fill     rendering, searching, generating, alignment, completion
card lift         current object becomes important
icon pop          named icon/object appears
mask reveal       screenshot, evidence, or hidden detail appears
focus ring pulse  important point, warning, target area
snap              timeline/tag aligns to voice
strike/collapse   reject old method, not PPT, wrong answer
toggle switch     state change, before/after, off/on
completion pulse  render done, flow complete, CTA ready
```

## Timing Defaults

Micro-motion must normally start after the keyword begins, not before.

```text
keyword trigger lag: +2 to +6 frames
small icon pop: 8-14 frames
card lift: 12-20 frames
border scan: 18-30 frames
focus pulse: 8-12 frames
mask reveal: 12-24 frames
strike/collapse: 14-28 frames
exit fade: 8-15 frames
progress fill: match the spoken phrase duration
```

For short Douyin videos, avoid long looping motion. A loop is allowed only when the spoken meaning is a process such as splitting, searching, generating, rendering, analyzing, or waiting.

## Required Storyboard Fields

For every sentence or short phrase, define:

```text
keyword
keyword_frame
micro_motion_target
micro_motion_type
micro_motion_params
settled_state
acceptance_frames
```

Bad:

```text
micro_motion: highlight
```

Good:

```text
keyword: 渲染
keyword_frame: 508
micro_motion_target: render preview card
micro_motion_type: progress fill + border scan
micro_motion_params: progress fills 0-65% across frames 508-548; border scan runs left-to-right for 22 frames; completion dot pulses once for 10 frames
settled_state: render card holds at 65%, border glow fades to 25%
acceptance_frames: 508, 530, 552
```

## Beat Examples

```text
spoken: 该出现截图，就出现截图
keyword: 截图
micro_motion: screenshot card mask-reveals from center in 18 frames; cyan border scan follows for 20 frames
```

```text
spoken: 该出现图标，就出现图标
keyword: 图标
micro_motion: icon scales 0.82 -> 1.08 -> 1 over 14 frames; soft glow blooms for 10 frames then settles
```

```text
spoken: 该做转场，就做转场
keyword: 转场
micro_motion: previous visual wipes left while next visual reveals right; divider line glows for 16 frames
```

```text
spoken: 重点标注
keyword: 标注
micro_motion: focus ring expands 1.0 -> 1.35 while opacity fades 0.75 -> 0 over 12 frames; label border brightens
```

```text
spoken: 不是 PPT 模板
keyword: PPT
micro_motion: PPT card gets red diagonal strike over 16 frames, then collapses to 0.88 scale and fades
```

```text
spoken: 可复用的视频制作流程
keyword: 可复用
micro_motion: four process nodes connect one by one; each node emits one 10-frame completion pulse
```

## Constraints

- Use micro-motion to confirm meaning, not decorate empty space.
- Do not use more than one primary micro-motion per beat.
- Do not stack glow, bounce, scan, pulse, particles, and background movement on the same object.
- Keep micro-motion local to the object being discussed.
- Do not let the micro-motion pull attention away from the spoken keyword.
- If a frame already has dense text, prefer border scan, underline, mask, or subtle glow over pop/bounce.
- Avoid repeated bouncing; repeated bounce reads like a cheap template.

## QA

When checking a render, sample:

```text
keyword frame
micro-motion peak frame
settled frame
beat boundary frame
```

Reject the shot if:

```text
the keyword has no visual response
the response starts before the spoken keyword without intent
the micro-motion is too far from the current visual object
the motion continues after the voice has moved to the next idea
the effect is decorative and does not clarify the sentence
```
