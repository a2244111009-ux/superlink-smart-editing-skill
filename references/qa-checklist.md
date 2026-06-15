# Render QA Checklist

Use this before telling the user a video is ready.

## Required Checks

1. **Audio-semantic sync**
   - For each sampled frame, write what the voice is saying and what the frame shows.
   - If they do not match, fix timing or rebuild the shot.

2. **Subtitle sync**
   - Subtitle must not appear before the speaker says the phrase.
   - If subtitles feel early across a section, apply global lag after the first failing timestamp.

3. **Storyboard compliance**
   - Compare each sampled frame with the storyboard row.
   - If the frame does not match the row, do not claim the storyboard was followed.

4. **Safe zones**
   - Keep top platform classification zone clear.
   - Keep bottom navigation/status area clear.
   - Keep right-side like/comment/share area clear.
   - Keep subtitle zone above platform controls.

5. **Layout**
   - Main visual block is horizontally centered as a whole.
   - Main content should sit in the upper-middle body area, not low vertical center.
   - No large unexplained empty area.
   - No text overlaps or tiny unreadable labels.

6. **Motion**
   - Every important spoken keyword has a visual response.
   - Motion points to the current information block.
   - Motion does not finish before the voice reaches the concept.
   - No repeated decorative bouncing.

7. **Assets**
   - Real products use real approved screenshots or recordings.
   - GPT Image 2/imagegen assets appear in final frames if claimed.
   - Rejected images, old draft frames, and fake official screenshots are absent.

8. **Technical**
   - HyperFrames inspect has no blocking layout issues.
   - MP4 renders successfully.
   - Contact sheets are generated for questioned sections.

## Contact Sheet Sampling

For a full video, sample:

```text
opening hook
every stage start
every stage densest frame
every transition
every user-flagged timestamp
final summary frame
```

If the user flags a section, extract the same timestamp set before and after revision so the difference is visible.

