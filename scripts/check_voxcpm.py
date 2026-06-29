#!/usr/bin/env python
import importlib.util
import sys


def main() -> int:
    missing = []
    for name in ["voxcpm", "soundfile", "torch"]:
        if importlib.util.find_spec(name) is None:
            missing.append(name)

    if missing:
        print("VOXCPM_NOT_READY")
        print("missing=" + ",".join(missing))
        print("install_hint=pip install voxcpm soundfile")
        return 1

    import torch

    print("VOXCPM_READY")
    print(f"python={sys.version.split()[0]}")
    print(f"torch={torch.__version__}")
    print(f"cuda_available={torch.cuda.is_available()}")
    if torch.cuda.is_available():
        print(f"cuda_device={torch.cuda.get_device_name(0)}")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
