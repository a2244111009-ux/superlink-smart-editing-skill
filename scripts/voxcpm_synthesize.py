#!/usr/bin/env python
import argparse
from pathlib import Path


def parse_args():
    parser = argparse.ArgumentParser(description="Generate narration audio with VoxCPM.")
    parser.add_argument("--text", required=True, help="Text to synthesize.")
    parser.add_argument("--out", required=True, help="Output wav path.")
    parser.add_argument("--model", default="openbmb/VoxCPM2", help="HF/model path.")
    parser.add_argument("--reference-audio", help="Reference voice wav/mp3 path.")
    parser.add_argument("--prompt-audio", help="Prompt audio for ultimate cloning.")
    parser.add_argument("--prompt-text", help="Exact transcript of prompt audio.")
    parser.add_argument("--control", help="Optional voice style control text.")
    parser.add_argument("--cfg", type=float, default=2.0)
    parser.add_argument("--timesteps", type=int, default=10)
    parser.add_argument("--seed", type=int, default=42)
    return parser.parse_args()


def main():
    args = parse_args()

    try:
        from voxcpm import VoxCPM
        import soundfile as sf
    except Exception as exc:
        raise SystemExit(
            "VoxCPM is not installed or cannot be imported. "
            "Install it first with: pip install voxcpm soundfile\n"
            f"Import error: {exc}"
        )

    text = args.text
    if args.control:
        text = f"({args.control}){text}"

    model = VoxCPM.from_pretrained(args.model, load_denoiser=False)
    kwargs = {
        "text": text,
        "cfg_value": args.cfg,
        "inference_timesteps": args.timesteps,
        "seed": args.seed,
    }

    if args.reference_audio:
        kwargs["reference_wav_path"] = args.reference_audio
    if args.prompt_audio:
        kwargs["prompt_wav_path"] = args.prompt_audio
    if args.prompt_text:
        kwargs["prompt_text"] = args.prompt_text

    wav = model.generate(**kwargs)
    out = Path(args.out)
    out.parent.mkdir(parents=True, exist_ok=True)
    sf.write(str(out), wav, model.tts_model.sample_rate)
    print(str(out))


if __name__ == "__main__":
    main()
