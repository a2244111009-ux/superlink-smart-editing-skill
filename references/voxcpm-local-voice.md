# VoxCPM 本地声音标准块

这个标准块用于让 Codex 自动部署、检查和调用 VoxCPM，为口播视频生成本地声音。

## 使用原则

- 优先使用本地已有 VoxCPM 环境。
- 不要重复下载大模型，除非本机没有可用模型。
- 如果用户有克隆声音，优先使用用户声音。
- 生成完音频后必须转写，字幕和画面时间轴以真实音频为准。

## 环境检查

先运行：

```bash
python scripts/check_voxcpm.py
```

如果输出 `VOXCPM_READY`，可以直接生成声音。

如果输出 `VOXCPM_NOT_READY`，再安装：

```bash
pip install voxcpm soundfile
```

VoxCPM 官方仓库说明：VoxCPM2 支持 30 种语言、可控声音克隆、48kHz 输出，并可通过 `pip install voxcpm` 安装。官方 README 同时给出了 Python API、CLI、Web Demo 和生产部署方式。

## 生成用户克隆声音

优先方式：

```bash
python scripts/voxcpm_synthesize.py \
  --text "要生成的口播文案" \
  --reference-audio "path/to/user_voice.wav" \
  --out "outputs/narration.wav"
```

如果有参考音频对应的准确文字，用更强的方式：

```bash
python scripts/voxcpm_synthesize.py \
  --text "要生成的口播文案" \
  --prompt-audio "path/to/user_voice.wav" \
  --prompt-text "参考音频的准确文字" \
  --reference-audio "path/to/user_voice.wav" \
  --out "outputs/narration.wav"
```

## 没有克隆声音时

使用声音描述控制风格：

```bash
python scripts/voxcpm_synthesize.py \
  --text "要生成的口播文案" \
  --control "沉稳、清楚、可信、中文男声、语速适中" \
  --out "outputs/narration.wav"
```

## 生成后的处理

音频生成后必须做三件事：

1. 转写音频，得到真实字幕时间轴。
2. 根据真实时间轴重做逐句分镜。
3. 如果音频太慢或太快，优先重生成音频，不要直接乱拉画面时间。

## 失败处理

如果显存不足：

- 优先关闭其他占显存软件。
- 尝试 CPU 或更低参数，但要提醒速度会慢。
- 不要删用户模型和声音文件。

如果克隆不像：

- 检查参考音频是否干净。
- 参考音频最好 10-30 秒，只有一个人声。
- 如果有参考音频文字，必须传 `--prompt-text`。

如果节奏不像真人口播：

- 把长句拆短。
- 在文案里加入自然停顿。
- 用 control 指定“口播感、自然停顿、不要朗诵腔”。
