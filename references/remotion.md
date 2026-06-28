# Remotion Routing Rules

Use this reference when this video workflow is implemented in Remotion.

## When To Choose Remotion

Choose Remotion when:

- The user explicitly asks for Remotion.
- The repo already has a Remotion app.
- The video needs reusable React scene components, typed props, or data-driven composition.
- Frame-accurate timeline logic is easier than DOM/GSAP timelines.
- A complex render needs deterministic React state instead of browser-side imperative animation.

Keep HyperFrames as the default when the existing project is HyperFrames and the task only needs HTML/GSAP motion, quick overlays, or the established HyperFrames render path.

## Core Rules

- Drive animation with `useCurrentFrame()`, `useVideoConfig()`, `interpolate()`, `spring()`, and `Sequence`.
- Do not use CSS transitions, CSS animations, or Tailwind animation classes for timeline-critical motion.
- Put video, image, and audio assets in `public/` and reference them with `staticFile()`.
- Use Remotion media components for video, image, and audio instead of raw browser tags when rendering media.
- Define width, height, fps, and duration in the root `Composition`.
- Use `calculateMetadata()` when duration, dimensions, or props depend on media or external data.
- Keep subtitle and visual-event timing driven by the same transcript timecodes.

## Douyin Video Defaults

- Use `width={1080}`, `height={1920}`, `fps={30}` unless the user specifies another format.
- Reserve bottom platform space and right-side interaction space before designing overlays.
- Put essential explanation inside the visual subject area, not in the Douyin bottom UI zone.
- Prefer one strong visual state change per sentence or short phrase.

## Real Footage Overlay Direction

For real-footage explainers:

- Treat footage as the main image, not as a background behind labels.
- First apply edit decisions: shot choice, crop, speed, color, contrast, and camera motion.
- Then add restrained overlays: local highlight, mask reveal, tracking line, heat/pressure glow, data particles, or short labels.
- Avoid large arrows, large solid circles, big boxes, generic HUD clutter, and full-line explanatory text inside the footage.
- Keep overlay color semantics stable: cyan/blue for structure/data, orange for heat/fuel/warning, green for telemetry/improvement.

## Validation

Before showing a Remotion render:

- Render or inspect at least one frame from each dense visual state.
- Check text overflow and safe zones on vertical output.
- Check that media referenced through `staticFile()` appears in the final render.
- Check that frame timing matches transcript timing, not guessed durations.
