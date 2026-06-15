# Motion And Subtitle Sync

Motion is not decoration. Motion exists to pull attention to the information block currently owned by the voice.

## Timing Defaults

- Subtitle entry: start at or slightly after voice onset.
- Main visual entry: 0.10s to 0.40s after the spoken concept begins.
- Keyword emphasis: 0.10s to 0.30s after the keyword.
- Scene transition: should not hide the previous idea before the voice finishes it.
- Exit: start after the final word or during a natural pause, not before the point lands.

## When Things Feel Fast

If the user says字幕,动效, or画面比声音快:

1. Do not patch one card first.
2. Identify the first timestamp where fastness appears.
3. Apply a global lag to subtitle and visual events after that point.
4. Re-render a test version.
5. Extract the same frames before and after the lag.
6. Only then tune individual nodes.

Recommended first test:

```text
post_sync_point: first failing timestamp
lag: +0.6s to +1.0s
scope: subtitles + visual timeline events
```

## Keyword-Driven Motion Types

- "打开剪映": show real desktop Jianying UI, cursor enters, timeline or import zone is highlighted.
- "给 Codex": show Codex/ChatGPT workspace, typing animation, send click, response rows.
- "自动剪完不是我想要的": show failed draft preview, red cross or diagnostic marks, not the final process.
- "对时间轴": waveform, time ruler, playhead, sentence tags snapping into place.
- "做分镜": table rows appear one by one, preview card changes with each row.
- "动效什么时候进来": motion rule board, enter/stay/emphasis/exit track, but transition to engineering UI once the voice says HyperFrames.
- "HyperFrames 加工视频": real HyperFrames/project UI, layers, render line, cursor, preview/export.
- "节奏不对/挡住/信息太挤": each phrase gets its own pulse, marker, or diagnostic correction at the spoken keyword.
- "像 PPT": show flat page-flip or static cards first, then contrast with layered motion/problem panel.
- "不是一键，是流程": show final process map, not a generic slogan.

## Motion Quality

Prefer:

- Smooth easing, masks, real UI zooms, cursor paths, progressive reveals, and linked motion between related elements.
- One attention target at a time.
- Motion that continues while the voice explains the idea.

Avoid:

- Repeated pop-in/pop-out.
- Every element bouncing.
- Generic cards unrelated to the sentence.
- Animations that finish before the voice reaches the concept.
- Empty frames where the main subject is missing.

