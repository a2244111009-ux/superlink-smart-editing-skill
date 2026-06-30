# 超级链智能剪辑

英文名称：**Superlink Smart Editing**

原仓库/Skill 名称：`hyperframes-ai-video-workflow`

这是一个给 Codex 用的中文短视频生产 Skill。

它的目标不是让 AI 帮你写一段文案，而是让 Codex 按一套固定流程，把一个问题、一个口播音频、一个案例，自动做成可以发布的抖音/短视频口播视频。

适合做：

- AI 工具讲解视频
- 真实业务案例视频
- 合规避坑视频
- 律师、财税、外贸、认证、平台规则类解释视频
- 一个问题一个视频，比如“什么是劳动补偿金”“什么是劳动赔偿金”
- 有口播声音，需要自动配字幕、画面、动效、封面的视频

## 它能做什么

这个 Skill 会要求 Codex 按完整视频流程工作：

1. 自动找 AI 内容选题
2. 给选题打分并生成每日生产队列
3. 自动写中文口播文案
4. 用本地 VoxCPM 或克隆声音生成口播音频
5. 转写真实音频，得到逐句字幕时间轴
6. 按每一句话拆分镜
7. 找关键词，并给关键词安排微动效
8. 用 HyperFrames 或 Remotion 做画面
9. 用生图模型做封面
10. 导出竖屏 MP4
11. 检查字幕、音画同步、抖音安全区、画面居中和后半段质量

一句话说：  
**用户只要提出一个问题，Codex 要自动完成从文案到成片的整条链路。**

如果是日更账号，用户甚至不需要自己想题。Codex 会先生成 `topic-queue.md`，再按高分选题自动生产视频，用户只审核最终成片能不能发。

## 为什么做这个 Skill

普通 AI 做视频很容易变成 PPT：  
一页一页卡片、字幕和画面不贴、后半段静止、关键词没有反应、封面像截图。

这个 Skill 重点解决这些问题：

- 不是按段落做 PPT，而是按每一句口播做画面。
- 不是拍脑袋定时间，而是以真实音频转写时间轴为准。
- 不是堆文字，而是让关键词触发画面变化。
- 不是伪造截图，而是用业务对象、权限流、状态变化来解释机制。
- 不是 HTML 卡片做封面，而是用生图模型做强视觉封面。

## 安装方法

把整个仓库放到 Codex 的 skills 目录里。

常见位置：

```text
E:/CodexUserData/.codex/skills/hyperframes-ai-video-workflow
```

或者：

```text
C:/Users/你的用户名/.codex/skills/hyperframes-ai-video-workflow
```

目录里必须能看到：

```text
SKILL.md
references/
scripts/
assets/
agents/
```

放好以后，重新打开 Codex，或者开启新对话，让 Codex 能发现这个 Skill。

## 基础使用方式

在 Codex 里可以这样说：

```text
用 hyperframes-ai-video-workflow 这个 skill，帮我做一个 90 秒抖音视频：
题目是“什么是劳动补偿金？”
用中文口播，竖屏，最后要可发布 MP4。
```

也可以更简单：

```text
用这个 skill 做一个视频：什么是劳动赔偿金？
```

Codex 应该自动做：

- 写文案
- 生成声音
- 转写声音
- 做逐句分镜
- 做画面
- 做封面
- 导出视频

## 使用本地 VoxCPM 声音

这个 Skill 带了 VoxCPM 的检查和调用脚本。

先检查环境：

```bash
python scripts/check_voxcpm.py
```

如果没有安装，安装：

```bash
pip install voxcpm soundfile
```

生成声音：

```bash
python scripts/voxcpm_synthesize.py ^
  --text "这里放口播文案" ^
  --reference-audio "你的声音样本.wav" ^
  --out "outputs/narration.wav"
```

如果有声音样本对应的准确文字，效果通常更好：

```bash
python scripts/voxcpm_synthesize.py ^
  --text "这里放口播文案" ^
  --prompt-audio "你的声音样本.wav" ^
  --prompt-text "声音样本里实际说的话" ^
  --reference-audio "你的声音样本.wav" ^
  --out "outputs/narration.wav"
```

注意：生成完声音以后，必须再转写一次音频。字幕和画面时间轴要以真实音频为准，不能以原文案为准。

## 推荐工作流

### 0. 自动选题生产线

适合每天批量生产 AI 内容账号。

```text
帮我今天自动找 50 个 AI 内容选题，筛出 10 个，直接生成视频，我只审核成片。
```

Codex 应该读取：

```text
references/topic-engine.md
```

它会自动生成：

- 今日主线
- 50 个候选题
- 20 个入围题
- 10 个视频生产任务
- 每个题的分数、目标人群、爆点、视频类型、推荐时长
- 成片视频和发布文案

### 1. 一问一视频

适合用户只给一个问题：

```text
什么是劳动补偿金？
```

Codex 应该读取：

```text
references/one-question-autopilot.md
```

然后自动完成完整视频。

### 2. 真实业务案例口播

适合用户讲一个真实业务故事，比如：

```text
有个客户进口商许可证办下来了，但账号绑定在原中介员工名下，换服务商时登录不了后台。
```

Codex 应该读取：

```text
references/business-case-mouthpiece.md
```

这类视频不要伪造聊天截图，也不要伪造官方后台。要把看不见的业务机制做成：

- 业务对象
- 权限流
- 控制权变化
- 阻断状态
- 关键词动效

### 3. 复刻 V5 画面风格

仓库里放了 V5 的 Remotion 模板：

```text
assets/remotion-v5-template/
```

里面包含：

- `FdaLicenseV5Full.example.tsx`
- `FdaLicenseCover.example.tsx`
- `package.example.json`

做新行业时，不要照搬 FDA 内容。要复用的是：

- 竖屏布局
- 字幕安全区
- 主视觉区域
- 视觉延迟
- 关键词微动效
- 状态机式画面推进

## 文件结构

```text
SKILL.md
references/
  asset-and-style.md
  business-case-mouthpiece.md
  micro-motion.md
  motion-sync.md
  one-question-autopilot.md
  qa-checklist.md
  remotion.md
  storyboard-table.md
  topic-engine.md
  voxcpm-local-voice.md
scripts/
  check_voxcpm.py
  voxcpm_synthesize.py
assets/
  remotion-v5-template/
agents/
  openai.yaml
```

## 重要规则

使用这个 Skill 时，Codex 必须遵守：

- 音频是时间轴源头。
- 字幕必须是口播原话，不是总结。
- 每一句重要口播都要有画面响应。
- 关键词要有微动效。
- 画面通常比声音慢 `0.3s-0.6s`，不要抢在声音前面。
- 底部 20%-25% 不放重要信息，避免被抖音信息区挡住。
- 封面用生图模型做，不要用一堆 HTML 卡片拼封面。
- 不要生成假官方截图、假法院文书、假证书、假印章、假后台页面。
- 后半段不能退化成 PPT。

## 一个完整例子

用户输入：

```text
用这个 skill 做一个 90 秒视频：什么是劳动补偿金？
```

Codex 应该输出：

```text
outputs/
  labor-compensation/
    script.md
    narration.wav
    transcript.srt
    storyboard-table.md
    cover.png
    video.mp4
    qa-frames/
```

视频内容应该是：

- 开头直接告诉观众：补偿金不是所有离职都有。
- 用普通人能懂的话解释劳动补偿金。
- 用一个例子讲清楚什么时候有、什么时候没有。
- 对比劳动赔偿金，避免观众混淆。
- 结尾提醒具体案件看合同、解除原因和证据。

画面应该是：

- 一份劳动合同作为主视觉对象。
- 左边正常解除，右边违法解除。
- 关键词出现时有勾选、打叉、金额流动、责任转移等微动效。
- 最后用清单收束。

## 当前定位

这个仓库不是一个普通视频模板，也不是一个单独脚本。  
它是一个给 Codex 用的短视频生产 Skill。

真正的使用方式是：  
**让 Codex 读取这个 Skill，然后按里面的流程自动生产视频。**
