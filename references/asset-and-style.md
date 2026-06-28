# Asset And Style Rules

## Real Versus Generated

Use real screenshots or screen recordings when the video mentions:

- Jianying/CapCut desktop editing UI.
- Codex/ChatGPT conversation UI.
- HyperFrames studio, preview, render, or project UI.
- Official product pages, GitHub repos, dashboards, API docs, or logos.
- Practical case evidence that the user can safely provide: chat records, backend pages, form fields, account pages, payment/order records, contracts, or call notes.

Use synthetic recreations when the video needs:

- A privacy-safe version of a real practical case.
- A chat, form, login page, permission panel, document snippet, or backend page that illustrates the user's real story but must not expose private data.
- A screen-recording-like sequence where cursor, input focus, field lock, account rejection, or permission transfer is the main point.

Use GPT Image 2/imagegen when the video needs:

- Cover image.
- Atmospheric AI/cinematic background.
- Abstract metaphor.
- Cleaned cutout or background removal for a logo/user-provided asset.
- Concept image that is not pretending to be a real official page.

Do not create fake official screenshots, fake social posts, fake news pages, fake logos, or fake endorsements.

## Content Type Fit

Match the visual form to the口播 type before choosing assets.

```text
mechanism/explainer: controlled diagrams, object transformations, process animation
practical experience/case: real-world evidence flow, chat/form/backend/document scenes
recommendation/sales: product proof, before/after, scenario, result evidence
```

For practical experience or避坑分享, avoid making the whole video a beautiful mechanism animation. The viewer should feel "this is a real situation I might face", not "this is an abstract system demo".

Default practical-case visual stack:

```text
main layer: phone chat, backend login, form field, permission panel, document/card
motion layer: cursor, typing, field focus, lock, reject stamp, transfer arrow, permission switch
support layer: small labels and callouts attached to the exact field/object
rare layer: simple transparent mechanism overlay only when the hidden relation must be explained
```

## Screenshot Safety

Before capturing the user's desktop:

1. Tell the user what screen/app you need.
2. Ask them to stop using the computer or switch to the target window.
3. Capture only the target area.
4. Crop or mask irrelevant history and private content.

## Default Visual Style

For this user's AI workflow videos:

```text
canvas: dark cinematic, near-black
primary accent: cyan/ice blue
secondary accent: restrained violet/blue
warning accent: red/pink only for mistakes or negation
success/process accent: clean green only in small amounts
typography: large, bold, clean Chinese labels
composition: spacious, layered, no cheap PPT feel
```

Avoid muddy dark green, brown/orange, dark red, random gradients, overfilled dashboards, and purely decorative sci-fi UI.

## Visual Language From References

When imitating reference videos:

- Extract motion principles, not just colors.
- Look for: real UI zoom, cursor path, typing, input-send-reply sequence, mask transitions, layered glass panels, focus rings, timeline movement, and smooth camera scaling.
- Rebuild the storyboard before coding.
- The first deliverable after studying references should be a revised storyboard, not another render.
