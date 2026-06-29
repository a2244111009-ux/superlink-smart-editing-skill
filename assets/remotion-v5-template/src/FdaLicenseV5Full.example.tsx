import React from 'react';
import {
  AbsoluteFill,
  Audio,
  Easing,
  interpolate,
  staticFile,
  useCurrentFrame,
} from 'remotion';

const FPS = 30;
const DURATION = 2825;
const VISUAL_DELAY = 0.55;
const clamp = {extrapolateLeft: 'clamp' as const, extrapolateRight: 'clamp' as const};
const ease = {...clamp, easing: Easing.bezier(0.16, 1, 0.3, 1)};

const ink = '#101827';
const muted = '#697386';
const blue = '#2775ff';
const green = '#20c878';
const red = '#e83b4f';
const amber = '#f5a623';
const dark = '#111827';

const sec = (s: number) => Math.round(s * FPS);
const visualFrame = (frame: number) => Math.max(0, frame - sec(VISUAL_DELAY));
const a = (frame: number, at: number, len = 14) => interpolate(frame, [sec(at), sec(at) + len], [0, 1], ease);
const between = (frame: number, start: number, end: number, fade = 12) => {
  const on = interpolate(frame, [sec(start), sec(start) + fade], [0, 1], ease);
  const off = interpolate(frame, [sec(end) - fade, sec(end)], [1, 0], clamp);
  return Math.min(on, off);
};
const pop = (frame: number, at: number, len = 14) =>
  interpolate(frame, [sec(at), sec(at) + len * 0.55, sec(at) + len], [0, 1.08, 1], clamp);
const slideY = (frame: number, at: number, distance = 18) => (1 - a(frame, at, 16)) * distance;
const pulse = (frame: number, at: number, len = 18) => {
  const p = interpolate(frame, [sec(at), sec(at) + len / 2, sec(at) + len], [0, 1, 0], clamp);
  return p;
};

const beats = [
  {end: 1.44, text: '前两天有个老板找到我'},
  {end: 3.44, text: '说他想重新办泰国 FDA'},
  {end: 4.56, text: '他是做化妆品的'},
  {end: 6.6, text: '之前已经办过进口商许可证'},
  {end: 8.88, text: '但是跟原来的中介合作得不太顺利'},
  {end: 10.36, text: '所以想换一家继续做'},
  {end: 11.08, text: '我就问他'},
  {end: 13.12, text: '你那个进口商许可证的系统账号'},
  {end: 14.2, text: '在不在自己手里'},
  {end: 15.16, text: '他一下就懵了'},
  {end: 16.48, text: '问我什么账号'},
  {end: 17.16, text: '我说'},
  {end: 19.2, text: '办泰国进口商许可证的时候'},
  {end: 21.32, text: '系统里必须有一个企业负责人'},
  {end: 23.36, text: '这个企业负责人必须是泰国人'},
  {end: 24.64, text: '因为后续登录系统'},
  {end: 25.68, text: '申请 FDA'},
  {end: 26.52, text: '修改资料'},
  {end: 28.64, text: '都要用这个人的泰国身份信息'},
  {end: 30.96, text: '然后我让他回去问原来的中介'},
  {end: 32.04, text: '结果跟我猜的一样'},
  {end: 33.52, text: '原来的中介告诉他'},
  {end: 34.36, text: '这个账号'},
  {end: 36.76, text: '是用他们公司员工的信息注册的'},
  {end: 38.04, text: '涉及员工个人资料'},
  {end: 38.8, text: '不能给他'},
  {end: 39.72, text: '这就很麻烦了'},
  {end: 40.8, text: '因为表面上看'},
  {end: 43.36, text: '进口商许可证确实是用他的公司申请下来的'},
  {end: 45.24, text: '但后台真正能登录'},
  {end: 46.0, text: '能操作'},
  {end: 46.84, text: '能变更的人'},
  {end: 48.56, text: '其实是原来中介的员工'},
  {end: 49.2, text: '也就是说'},
  {end: 51.0, text: '他现在想换服务商就会被卡住'},
  {end: 53.08, text: '新的服务商想继续帮他申请 FDA'},
  {end: 54.04, text: '要先登录系统'},
  {end: 55.0, text: '但是他没有账号'},
  {end: 56.68, text: '如果他想自己去变更企业负责人'},
  {end: 59.08, text: '也需要原来的企业负责人同意'},
  {end: 60.36, text: '如果对方不配合'},
  {end: 62.08, text: '常规情况下就很难处理'},
  {end: 63.92, text: '所以很多老板不是证没办下来'},
  {end: 65.16, text: '而是证办下来了以后'},
  {end: 66.84, text: '才发现控制权不在自己手里'},
  {end: 69.24, text: '我一般帮客户办这类进口商许可证的时候'},
  {end: 71.12, text: '都会提前确认企业负责人'},
  {end: 73.72, text: '这个人一定要是客户自己能控制的泰国人'},
  {end: 75.4, text: '而不是中介公司的员工'},
  {end: 76.04, text: '只有这样'},
  {end: 77.84, text: '以后老板才可以自己登录系统'},
  {end: 78.92, text: '要申请 FDA'},
  {end: 79.88, text: '给自己安排'},
  {end: 80.84, text: '要换服务商'},
  {end: 82.48, text: '也不用看原来中介的脸色'},
  {end: 84.28, text: '就算以后合作关系变了'},
  {end: 85.56, text: '许可证的后台控制权'},
  {end: 86.6, text: '也还在自己手里'},
  {end: 89.32, text: '所以各位老板办泰国进口商许可证的时候'},
  {end: 91.04, text: '不要只问证能不能办下来'},
  {end: 91.92, text: '一定要清楚'},
  {end: 92.92, text: '证是你的'},
  {end: 94.2, text: '账号也必须是你能控制的'},
];

const caption = (t: number) => beats.find((beat) => t < beat.end)?.text ?? beats[beats.length - 1].text;

const Shell = () => {
  const frame = useCurrentFrame();
  const sweep = interpolate(frame, [0, DURATION], [-180, 1120], clamp);
  const progress = interpolate(frame, [0, DURATION], [0, 1], clamp);
  return (
    <AbsoluteFill
      style={{
        background: '#dfe7f1',
        fontFamily: 'Microsoft YaHei UI, PingFang SC, Arial, sans-serif',
        overflow: 'hidden',
      }}
    >
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background:
            'radial-gradient(circle at 10% 8%, rgba(39,117,255,0.18), transparent 30%), radial-gradient(circle at 88% 70%, rgba(32,200,120,0.13), transparent 30%), linear-gradient(180deg, #e8eef7 0%, #d7e1ec 100%)',
        }}
      />
      <div
        style={{
          position: 'absolute',
          left: sweep,
          top: 0,
          width: 160,
          height: 1920,
          background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.34), transparent)',
          transform: 'skewX(-12deg)',
        }}
      />
      <div
        style={{
          position: 'absolute',
          left: 54,
          top: 54,
          right: 54,
          bottom: 520,
          borderRadius: 36,
          background: 'rgba(238,244,251,0.82)',
          boxShadow: '0 32px 100px rgba(22,34,55,0.2)',
          border: '1px solid rgba(16,24,39,0.1)',
        }}
      />
      <div style={{position: 'absolute', left: 96, top: 88, color: muted, fontSize: 22, fontWeight: 800}}>
        CASE REPLAY / 无截图独立复盘
      </div>
      <div style={{position: 'absolute', left: 96, top: 128, color: ink, fontSize: 40, fontWeight: 950}}>
        泰国 FDA 进口商许可证
      </div>
      <div style={{position: 'absolute', left: 96, top: 182, width: 888, height: 6, borderRadius: 999, background: 'rgba(16,24,39,0.08)', overflow: 'hidden'}}>
        <div style={{width: `${progress * 100}%`, height: '100%', background: `linear-gradient(90deg, ${blue}, ${green})`}} />
      </div>
    </AbsoluteFill>
  );
};

const Card = ({
  children,
  x = 104,
  y = 224,
  w = 872,
  h = 520,
  darkMode = false,
  style = {},
}: {
  children: React.ReactNode;
  x?: number;
  y?: number;
  w?: number;
  h?: number;
  darkMode?: boolean;
  style?: React.CSSProperties;
}) => (
  <div
    style={{
      position: 'absolute',
      left: x,
      top: y,
      width: w,
      height: h,
      borderRadius: 28,
      background: darkMode ? dark : 'linear-gradient(180deg, #ffffff 0%, #f8fbff 100%)',
      border: '1px solid rgba(16,24,39,0.1)',
      boxShadow: '0 28px 80px rgba(16,24,39,0.16)',
      color: darkMode ? 'white' : ink,
      overflow: 'hidden',
      ...style,
    }}
  >
    {children}
  </div>
);

const Pill = ({children, color = blue, mutedBg = false}: {children: React.ReactNode; color?: string; mutedBg?: boolean}) => (
  <div
    style={{
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 999,
      padding: '10px 18px',
      background: mutedBg ? 'rgba(105,115,134,0.1)' : `${color}18`,
      border: `2px solid ${color}`,
      color,
      fontSize: 24,
      lineHeight: 1,
      fontWeight: 950,
    }}
  >
    {children}
  </div>
);

const Stamp = ({frame, at = 4.6, text = '已办理', color = green}: {frame: number; at?: number; text?: string; color?: string}) => {
  const s = pop(frame, at, 14);
  return (
    <div
      style={{
        position: 'absolute',
        right: 52,
        top: 70,
        width: 176,
        height: 76,
        borderRadius: 12,
        border: `5px solid ${color}`,
        color,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 34,
        fontWeight: 950,
        transform: `scale(${s}) rotate(-6deg)`,
        opacity: s > 0 ? 1 : 0,
        boxShadow: `0 0 24px ${color}40`,
      }}
    >
      {text}
    </div>
  );
};

const LicenseCard = ({frame, compact = false, risk = false}: {frame: number; compact?: boolean; risk?: boolean}) => {
  const o = compact ? 0.36 : between(frame, 0.1, 16.0, 12);
  const scale = compact ? 0.76 : 1;
  const y = compact ? 214 : 198 + slideY(frame, 0.15, 18);
  const scan = pulse(frame, 2.2, 18);
  const field = a(frame, 3.6, 10);
  const fail = risk ? 1 : a(frame, 11.15, 8);
  return (
    <div
      style={{
        position: 'absolute',
        left: compact ? 82 : 104,
        top: y,
        width: 872,
        height: 448,
        transform: `scale(${scale})`,
        transformOrigin: 'left top',
        opacity: o,
        pointerEvents: 'none',
      }}
    >
      <Card x={0} y={0} w={872} h={448}>
        <div style={{position: 'absolute', left: 0, top: 0, width: 16, height: '100%', background: blue}} />
        <div style={{position: 'absolute', left: 48, top: 38, color: muted, fontSize: 24, fontWeight: 850}}>
          业务档案
        </div>
        <div
          style={{
            position: 'absolute',
            left: 48,
            top: 82,
            color: ink,
            fontSize: 50,
            fontWeight: 950,
            textShadow: scan > 0 ? `0 0 ${20 * scan}px rgba(39,117,255,0.35)` : 'none',
          }}
        >
          进口商许可证
        </div>
        <div style={{position: 'absolute', left: 48, top: 168, display: 'grid', gridTemplateColumns: '190px 1fr', rowGap: 28, columnGap: 28, fontSize: 28, fontWeight: 850}}>
          <div style={{color: muted}}>主体</div>
          <div style={{color: ink}}>A 公司</div>
          <div style={{color: muted}}>业务</div>
          <div style={{color: field > 0 ? blue : ink, fontWeight: 950}}>化妆品 / 泰国 FDA</div>
          <div style={{color: muted}}>许可证状态</div>
          <div style={{color: green, fontWeight: 950}}>已办好</div>
          <div style={{color: muted}}>后台登录</div>
          <div style={{color: fail > 0 ? red : muted, fontWeight: 950}}>{fail > 0 ? '失败' : '待核实'}</div>
        </div>
        <Stamp frame={frame} />
        <div style={{position: 'absolute', right: 54, top: 206, opacity: field}}>
          <Pill color={blue}>化妆品</Pill>
        </div>
        <div
          style={{
            position: 'absolute',
            right: 54,
            bottom: 42,
            padding: '14px 20px',
            borderRadius: 999,
            background: `rgba(232,59,79,${0.08 + fail * 0.12})`,
            border: `2px solid rgba(232,59,79,${0.15 + fail * 0.8})`,
            color: fail > 0 ? red : 'rgba(105,115,134,0.65)',
            fontSize: 24,
            fontWeight: 950,
          }}
        >
          控制权：{fail > 0 ? '不明' : '待核实'}
        </div>
      </Card>
    </div>
  );
};

const CallBar = ({frame}: {frame: number}) => {
  const o = between(frame, 3.3, 10.4, 12);
  const ring = Math.sin(frame * 0.72) * a(frame, 3.45, 8);
  const b = a(frame, 6.8, 10);
  const d = a(frame, 8.8, 10);
  return (
    <div
      style={{
        position: 'absolute',
        left: 112,
        top: 760,
        width: 856,
        height: 132,
        borderRadius: 26,
        background: dark,
        color: 'white',
        boxShadow: '0 24px 70px rgba(17,24,39,0.24)',
        opacity: o,
        transform: `translateY(${(1 - o) * 18}px)`,
      }}
    >
      <div style={{position: 'absolute', left: 32, top: 28, width: 72, height: 72, borderRadius: 999, background: green, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 34, transform: `rotate(${ring * 5}deg)`}}>
        ☎
      </div>
      <div style={{position: 'absolute', left: 128, top: 26, fontSize: 24, color: 'rgba(255,255,255,0.58)', fontWeight: 850}}>来电咨询</div>
      <div style={{position: 'absolute', left: 128, top: 62, fontSize: 34, fontWeight: 950}}>化妆品老板：想换服务商继续办 FDA</div>
      <div style={{position: 'absolute', right: 34, top: 42, fontSize: 26, color: green, fontWeight: 950}}>通话中</div>
      <div style={{position: 'absolute', left: 128, bottom: -64, display: 'flex', gap: 16}}>
        <div style={{opacity: b}}><Pill color={red}>原中介 B：不顺</Pill></div>
        <div style={{opacity: d, transform: `scale(${1 + pulse(frame, 8.8, 16) * 0.05})`}}><Pill color={green}>新服务商 D</Pill></div>
      </div>
    </div>
  );
};

const LoginPanel = ({frame, disabled = false}: {frame: number; disabled?: boolean}) => {
  const o = disabled ? between(frame, 54.8, 60.8, 10) : between(frame, 10.3, 16.1, 12);
  const focus = disabled ? 0 : pulse(frame, 11.2, 22);
  const fail = disabled ? 1 : a(frame, 13.8, 8);
  const shake = Math.sin(frame * 1.8) * fail * 7;
  return (
    <div style={{opacity: o, transform: `translateY(${(1 - o) * 24}px)`}}>
      <Card x={120} y={650} w={840} h={470}>
        <div style={{height: 72, background: '#f0f4f9', borderBottom: '1px solid rgba(16,24,39,0.08)'}}>
          <div style={{position: 'absolute', left: 32, top: 22, color: ink, fontSize: 25, fontWeight: 950}}>进口商许可证后台</div>
          <div style={{position: 'absolute', right: 28, top: 24, color: fail ? red : muted, fontSize: 22, fontWeight: 850}}>{fail ? '登录失败' : '模拟操作'}</div>
        </div>
        <div style={{position: 'absolute', left: 52, top: 122, color: muted, fontSize: 24, fontWeight: 850}}>系统账号</div>
        <div
          style={{
            position: 'absolute',
            left: 52 + shake,
            top: 158,
            width: 556,
            height: 72,
            borderRadius: 18,
            border: `3px solid ${fail ? red : blue}`,
            background: '#f8fafc',
            boxShadow: `0 0 ${18 + focus * 28}px ${fail ? 'rgba(232,59,79,0.22)' : 'rgba(39,117,255,0.24)'}`,
          }}
        >
          <div style={{position: 'absolute', left: 24, top: 19, width: 4, height: 34, background: fail ? red : blue, opacity: frame % 22 < 11 ? 1 : 0.2}} />
          {disabled && <div style={{position: 'absolute', left: 42, top: 19, color: red, fontSize: 28, fontWeight: 950}}>未掌握账号</div>}
        </div>
        <div style={{position: 'absolute', left: 52, top: 258, color: muted, fontSize: 24, fontWeight: 850}}>密码</div>
        <div style={{position: 'absolute', left: 52, top: 294, width: 556, height: 72, borderRadius: 18, border: '1px solid rgba(16,24,39,0.12)', background: '#f8fafc'}} />
        <div style={{position: 'absolute', right: 56 + shake, top: 172, width: 150, height: 150, borderRadius: 28, background: fail ? '#fff1f3' : '#edf5ff', border: `2px solid ${fail ? red : blue}`, display: 'flex', alignItems: 'center', justifyContent: 'center', color: fail ? red : blue, fontSize: 72, fontWeight: 950}}>
          {fail ? '!' : '钥'}
        </div>
        <div style={{position: 'absolute', right: 56, bottom: 42, width: 222, height: 64, borderRadius: 18, background: fail ? red : blue, color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 28, fontWeight: 950}}>
          {fail ? '登录不了' : '登录后台'}
        </div>
      </Card>
    </div>
  );
};

const QuestionBubble = ({frame}: {frame: number}) => {
  const main = between(frame, 13.9, 20.5, 10);
  const shrink = a(frame, 16.6, 10);
  return (
    <div
      style={{
        position: 'absolute',
        left: 150 - shrink * 42,
        top: 1198 - shrink * 860,
        width: 780 - shrink * 420,
        height: 132 - shrink * 30,
        borderRadius: 30,
        background: '#fff7e6',
        border: `2px solid ${amber}`,
        color: ink,
        opacity: main,
        transform: `scale(${pop(frame, 14.0, 12) || 1})`,
        boxShadow: '0 22px 60px rgba(245,166,35,0.22)',
      }}
    >
      <div style={{position: 'absolute', left: 28, top: 22, color: '#9a6700', fontSize: 22, fontWeight: 850}}>客户反应</div>
      <div style={{position: 'absolute', left: 28, top: 58, fontSize: shrink > 0.5 ? 28 : 42, fontWeight: 950}}>什么账号？</div>
      <div style={{position: 'absolute', right: 28, top: 26, fontSize: shrink > 0.5 ? 42 : 62, fontWeight: 950, color: amber}}>?</div>
    </div>
  );
};

const ResponsibleScene = ({frame}: {frame: number}) => {
  const o = between(frame, 16.4, 30.3, 12);
  const field = a(frame, 18.6, 12);
  const id = a(frame, 23.2, 12);
  const buttons = a(frame, 25.6, 12);
  const p2 = a(frame, 26.6, 12);
  const p3 = a(frame, 27.8, 12);
  return (
    <div style={{opacity: o}}>
      <Card x={118} y={282} w={844} h={700}>
        <div style={{position: 'absolute', left: 44, top: 34, color: muted, fontSize: 24, fontWeight: 850}}>账号真正指向</div>
        <div style={{position: 'absolute', left: 44, top: 84, color: ink, fontSize: 42, fontWeight: 950}}>企业负责人账号</div>
        <div style={{position: 'absolute', left: 44, top: 164, width: 756, height: 104, borderRadius: 24, background: '#eef6ff', border: `3px solid ${blue}`, opacity: field, transform: `translateY(${(1 - field) * 20}px)`}}>
          <div style={{position: 'absolute', left: 26, top: 18, color: muted, fontSize: 22, fontWeight: 850}}>进口商许可证字段</div>
          <div style={{position: 'absolute', left: 26, top: 54, color: blue, fontSize: 34, fontWeight: 950}}>企业负责人账号</div>
        </div>
        <div style={{position: 'absolute', left: 44, top: 316, width: 340, height: 172, borderRadius: 26, background: '#fff', border: `2px solid ${green}`, opacity: id, transform: `translateX(${(1 - id) * 40}px)`}}>
          <div style={{position: 'absolute', left: 28, top: 24, color: muted, fontSize: 22, fontWeight: 850}}>登录条件</div>
          <div style={{position: 'absolute', left: 28, top: 64, color: green, fontSize: 38, fontWeight: 950}}>泰国人</div>
          <div style={{position: 'absolute', left: 28, top: 116, color: ink, fontSize: 28, fontWeight: 950}}>Thai ID</div>
        </div>
        <div style={{position: 'absolute', right: 68, top: 346, width: 250, height: 112, borderRadius: 24, background: dark, color: 'white', opacity: id, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 38, fontWeight: 950}}>
          钥匙 → 登录
        </div>
        <div style={{position: 'absolute', left: 44, top: 542, display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 18, width: 756, opacity: buttons}}>
          {[
            ['登录系统', buttons],
            ['申请 FDA', p2],
            ['修改资料', p3],
          ].map(([label, op]) => (
            <div key={label as string} style={{height: 88, borderRadius: 22, background: `${blue}12`, border: `2px solid rgba(39,117,255,${0.18 + Number(op) * 0.72})`, color: blue, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 28, fontWeight: 950}}>
              {label}
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
};

const RequestAndReply = ({frame}: {frame: number}) => {
  const request = between(frame, 30.2, 33.3, 8);
  const reply = between(frame, 33.2, 39.5, 10);
  const underline = a(frame, 35.0, 10);
  const stamp = pop(frame, 36.8, 12);
  return (
    <>
      <div style={{opacity: request, transform: `translateY(${(1 - request) * 16}px)`}}>
        <Card x={120} y={390} w={840} h={360}>
          <div style={{position: 'absolute', left: 44, top: 44, color: ink, fontSize: 34, fontWeight: 950}}>A 老板去找原中介要账号</div>
          <div style={{position: 'absolute', left: 68, top: 150, width: 250, height: 86, borderRadius: 24, background: '#eef6ff', border: `2px solid ${blue}`, color: blue, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 34, fontWeight: 950}}>A 老板</div>
          <div style={{position: 'absolute', left: 350, top: 176, width: 136, height: 8, borderRadius: 999, background: blue}} />
          <div style={{position: 'absolute', right: 68, top: 150, width: 250, height: 86, borderRadius: 24, background: '#fff1f3', border: `2px solid ${red}`, color: red, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 34, fontWeight: 950}}>中介 B</div>
          <div style={{position: 'absolute', left: 300, bottom: 40, color: muted, fontSize: 26, fontWeight: 850}}>发送请求：把账号给我</div>
        </Card>
      </div>
      <div style={{opacity: reply, transform: `translateY(${(1 - reply) * 18}px)`}}>
        <Card x={120} y={296} w={840} h={520} darkMode>
          <div style={{position: 'absolute', left: 34, top: 30, width: 70, height: 70, borderRadius: 999, background: red, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 34, fontWeight: 950}}>B</div>
          <div style={{position: 'absolute', left: 126, top: 34, color: 'rgba(255,255,255,0.58)', fontSize: 24, fontWeight: 850}}>原中介回复</div>
          <div style={{position: 'absolute', left: 126, top: 86, right: 46, color: 'white', fontSize: 38, lineHeight: 1.25, fontWeight: 950}}>账号是我们员工的信息，不能给你。</div>
          <div style={{position: 'absolute', left: 126, top: 202, width: 380 * underline, height: 6, borderRadius: 999, background: red}} />
          <div style={{position: 'absolute', left: 126, top: 300, width: 560, height: 82, borderRadius: 20, background: 'rgba(232,59,79,0.12)', border: `2px solid ${red}`, color: red, display: 'flex', alignItems: 'center', paddingLeft: 24, fontSize: 30, fontWeight: 950}}>企业负责人：中介员工 C</div>
          <div style={{position: 'absolute', right: 54, bottom: 54, width: 180, height: 76, borderRadius: 14, border: `5px solid ${red}`, color: red, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 34, fontWeight: 950, transform: `scale(${stamp}) rotate(-5deg)`, opacity: stamp}}>拒绝</div>
        </Card>
      </div>
    </>
  );
};

const OwnershipScene = ({frame}: {frame: number}) => {
  const o = between(frame, 39.0, 49.5, 10);
  const c = a(frame, 43.8, 10);
  const key = a(frame, 47.0, 18);
  return (
    <div style={{opacity: o}}>
      <Card x={90} y={308} w={900} h={558}>
        <div style={{position: 'absolute', left: 42, top: 34, color: muted, fontSize: 24, fontWeight: 850}}>名义归属 vs 实际控制</div>
        <div style={{position: 'absolute', left: 54, top: 112, width: 336, height: 250, borderRadius: 28, background: '#eef6ff', border: `3px solid ${blue}`}}>
          <div style={{position: 'absolute', left: 28, top: 28, color: muted, fontSize: 22, fontWeight: 850}}>证照主体</div>
          <div style={{position: 'absolute', left: 28, top: 82, color: blue, fontSize: 52, fontWeight: 950}}>A 公司</div>
          <div style={{position: 'absolute', left: 28, bottom: 34, color: green, fontSize: 30, fontWeight: 950}}>证是它申请的 ✓</div>
        </div>
        <div style={{position: 'absolute', right: 54, top: 112, width: 336, height: 250, borderRadius: 28, background: '#fff1f3', border: `3px solid ${red}`, opacity: c, transform: `translateX(${(1 - c) * 30}px)`}}>
          <div style={{position: 'absolute', left: 28, top: 28, color: muted, fontSize: 22, fontWeight: 850}}>后台控制</div>
          <div style={{position: 'absolute', left: 28, top: 82, color: red, fontSize: 52, fontWeight: 950}}>员工 C</div>
          <div style={{position: 'absolute', left: 28, bottom: 34, color: red, fontSize: 30, fontWeight: 950}}>能登录 / 操作 / 变更</div>
        </div>
        <div style={{position: 'absolute', left: 396 + key * 166, top: 204, width: 112, height: 72, borderRadius: 18, background: amber, color: '#3c2700', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 34, fontWeight: 950, boxShadow: '0 20px 42px rgba(245,166,35,0.24)'}}>钥匙</div>
      </Card>
    </div>
  );
};

const SwitchScene = ({frame}: {frame: number}) => {
  const o = between(frame, 49.2, 63.9, 10);
  const noAccount = a(frame, 52.9, 10);
  const disabled = a(frame, 55.0, 10);
  const change = a(frame, 56.1, 12);
  const wait = a(frame, 58.6, 10);
  const buttons = [
    ['登录系统', a(frame, 53.8, 10)],
    ['申请 FDA', a(frame, 54.7, 10)],
    ['修改资料', a(frame, 55.4, 10)],
  ];
  return (
    <div style={{opacity: o}}>
      <Card x={110} y={270} w={860} h={742}>
        <div style={{height: 74, background: '#eef4fb', borderBottom: '1px solid rgba(16,24,39,0.08)'}}>
          <div style={{position: 'absolute', left: 32, top: 22, color: ink, fontSize: 27, fontWeight: 950}}>换服务商测试</div>
          <div style={{position: 'absolute', right: 32, top: 23, color: noAccount ? red : muted, fontSize: 24, fontWeight: 950}}>{noAccount ? '被卡住' : '准备接手'}</div>
        </div>
        <div style={{position: 'absolute', left: 54, top: 130, width: 320, height: 90, borderRadius: 22, background: '#eef6ff', border: `2px solid ${blue}`, color: blue, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 31, fontWeight: 950}}>D：继续办 FDA</div>
        <div style={{position: 'absolute', right: 54, top: 130, width: 330, height: 90, borderRadius: 22, background: '#fff1f3', border: `2px solid ${red}`, color: red, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 31, fontWeight: 950, opacity: noAccount}}>没有账号</div>
        <div style={{position: 'absolute', left: 54, top: 276, display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 16, width: 752}}>
          {buttons.map(([label, off]) => (
            <div key={label as string} style={{height: 86, borderRadius: 22, background: Number(off) > 0 ? '#eef1f5' : `${blue}12`, border: `2px solid ${Number(off) > 0 ? 'rgba(105,115,134,0.2)' : blue}`, color: Number(off) > 0 ? muted : blue, display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center', fontSize: 27, fontWeight: 950}}>
              {label}
            </div>
          ))}
        </div>
        <div style={{position: 'absolute', left: 54, right: 54, top: 420, height: 150, borderRadius: 26, background: 'rgba(232,59,79,0.08)', border: `2px solid rgba(232,59,79,${0.2 + change * 0.7})`, color: red, opacity: change}}>
          <div style={{position: 'absolute', left: 28, top: 24, fontSize: 24, fontWeight: 850}}>企业负责人变更申请</div>
          <div style={{position: 'absolute', left: 28, top: 68, fontSize: 34, fontWeight: 950}}>等待当前负责人 C 确认</div>
          <div style={{position: 'absolute', right: 30, top: 50, fontSize: 42, fontWeight: 950, opacity: 0.5 + wait * 0.5}}>卡住</div>
        </div>
        <div style={{position: 'absolute', left: 54, bottom: 42, color: disabled ? red : muted, fontSize: 26, fontWeight: 950}}>没有账号 = 后台无法独立操作</div>
      </Card>
    </div>
  );
};

const RiskAndCorrect = ({frame}: {frame: number}) => {
  const o = between(frame, 63.8, 76.2, 10);
  const greenMode = a(frame, 69.2, 14);
  const correct = a(frame, 71.1, 12);
  const cross = a(frame, 75.4, 10);
  const rows = greenMode > 0.5
    ? [['企业负责人', '客户可控'], ['身份条件', '泰国人'], ['错误选项', '中介员工']]
    : [['证办下来了', '不等于安全'], ['后台控制权', '不在自己手里'], ['后续申请', '会被卡住']];
  return (
    <div style={{opacity: o}}>
      <Card x={112} y={288} w={856} h={620}>
        <div style={{position: 'absolute', left: 42, top: 34, color: ink, fontSize: 36, fontWeight: 950}}>
          {greenMode > 0.5 ? (correct > 0.5 ? '正确做法' : '核心判断') : '问题本质'}
        </div>
        <div style={{position: 'absolute', right: 42, top: 34}}>
          <Pill color={greenMode > 0.5 ? green : red}>{greenMode > 0.5 ? '控制权' : '风险'}</Pill>
        </div>
        <div style={{position: 'absolute', left: 54, right: 54, top: 122, display: 'grid', gap: 24}}>
          {rows.map(([label, value], i) => {
            const rowO = a(frame, greenMode > 0.5 ? 69.7 + i * 0.75 : 63.75 + i * 0.55, 8);
            const color = greenMode > 0.5 && !(label === '错误选项') ? green : red;
            return (
              <div key={label} style={{position: 'relative', height: 104, borderRadius: 24, background: `${color}12`, border: `2px solid ${color}`, opacity: rowO, transform: `translateY(${(1 - rowO) * 14}px)`}}>
                <div style={{position: 'absolute', left: 28, top: 18, color: muted, fontSize: 22, fontWeight: 850}}>{label}</div>
                <div style={{position: 'absolute', left: 28, top: 52, color, fontSize: 34, fontWeight: 950}}>{value}</div>
                <div style={{position: 'absolute', right: 32, top: 32, color, fontSize: 40, fontWeight: 950}}>{greenMode > 0.5 && label !== '错误选项' ? '✓' : '!'}</div>
                {label === '错误选项' && (
                  <div style={{position: 'absolute', left: 24, right: 24, top: 54, height: 5, borderRadius: 999, background: red, transform: `scaleX(${cross})`, transformOrigin: 'left center'}} />
                )}
              </div>
            );
          })}
        </div>
      </Card>
    </div>
  );
};

const BenefitsAndFinal = ({frame}: {frame: number}) => {
  const benefit = between(frame, 76.0, 89.6, 10);
  const final = a(frame, 89.3, 14);
  const checks = [
    ['自己登录系统', a(frame, 77.8, 10)],
    ['自己申请 FDA', a(frame, 78.9, 10)],
    ['自己换服务商', a(frame, 80.8, 10)],
  ];
  return (
    <>
      <div style={{opacity: benefit}}>
        <Card x={112} y={300} w={856} h={560}>
          <div style={{position: 'absolute', left: 42, top: 36, color: ink, fontSize: 36, fontWeight: 950}}>只有这样，老板才可自己操作</div>
          <div style={{position: 'absolute', left: 54, right: 54, top: 130, display: 'grid', gap: 26}}>
            {checks.map(([label, op]) => (
              <div key={label as string} style={{height: 98, borderRadius: 24, background: 'rgba(32,200,120,0.08)', border: `2px solid rgba(32,200,120,${0.25 + Number(op) * 0.65})`, color: green, display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 34px', fontSize: 34, fontWeight: 950, opacity: Number(op)}}>
                <span>{label}</span>
                <span>✓</span>
              </div>
            ))}
          </div>
        </Card>
      </div>
      <div style={{opacity: final}}>
        <Card x={112} y={300} w={856} h={560} darkMode>
          <div style={{position: 'absolute', left: 48, top: 48, color: 'rgba(255,255,255,0.58)', fontSize: 24, fontWeight: 850}}>最后提醒</div>
          <div style={{position: 'absolute', left: 48, right: 48, top: 108, color: 'white', fontSize: 44, lineHeight: 1.22, fontWeight: 950}}>办泰国 FDA 之前，一定先问清楚</div>
          {[
            ['证是你的', a(frame, 91.1, 10)],
            ['账号你能控制', a(frame, 91.8, 10)],
          ].map(([label, op], i) => (
            <div key={label as string} style={{position: 'absolute', left: 48, right: 48, top: 250 + i * 118, height: 86, borderRadius: 24, background: 'rgba(255,255,255,0.08)', border: `1px solid rgba(255,255,255,${0.14 + Number(op) * 0.28})`, display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 28px', opacity: Number(op)}}>
              <span style={{fontSize: 32, fontWeight: 950}}>{label}</span>
              <span style={{fontSize: 36, fontWeight: 950, color: green}}>✓</span>
            </div>
          ))}
          <div style={{position: 'absolute', left: 48, right: 48, bottom: 44, height: 6, borderRadius: 999, background: red, transform: `scaleX(${a(frame, 93.6, 12)})`, transformOrigin: 'left center'}} />
        </Card>
      </div>
    </>
  );
};

const Caption = () => {
  const frame = useCurrentFrame();
  const t = frame / FPS;
  const text = caption(t);
  return (
    <div style={{position: 'absolute', left: 86, right: 86, bottom: 390, display: 'flex', justifyContent: 'center'}}>
      <div
        style={{
          maxWidth: 900,
          borderRadius: 18,
          background: 'rgba(16,24,39,0.92)',
          color: 'white',
          padding: '18px 24px',
          fontSize: text.length > 30 ? 31 : text.length > 22 ? 34 : 38,
          lineHeight: 1.22,
          fontWeight: 950,
          textAlign: 'center',
          boxShadow: '0 18px 50px rgba(16,24,39,0.24)',
        }}
      >
        {text}
      </div>
    </div>
  );
};

const Scene = () => {
  const frame = useCurrentFrame();
  const t = frame / FPS;
  const vf = visualFrame(frame);
  const tv = vf / FPS;
  const keep = VISUAL_DELAY;
  return (
    <>
      {t < 16.4 + keep && <LicenseCard frame={vf} compact={tv >= 10.3} />}
      {t >= 10.3 && t < 16.4 + keep && <LoginPanel frame={vf} />}
      {t < 10.4 + keep && <CallBar frame={vf} />}
      {t >= 13.4 && t < 20.5 + keep && <QuestionBubble frame={vf} />}
      {t >= 16.4 && t < 30.3 + keep && <ResponsibleScene frame={vf} />}
      {t >= 30.2 && t < 39.5 + keep && <RequestAndReply frame={vf} />}
      {t >= 39.0 && t < 49.5 + keep && <OwnershipScene frame={vf} />}
      {t >= 49.2 && t < 63.9 + keep && <SwitchScene frame={vf} />}
      {t >= 63.8 && t < 76.2 + keep && <RiskAndCorrect frame={vf} />}
      {t >= 76.0 && <BenefitsAndFinal frame={vf} />}
    </>
  );
};

export const FdaLicenseV5Full = () => (
  <AbsoluteFill>
    <Audio src={staticFile('audio/fda-license-myvoice-1.2x.mp3')} />
    <Shell />
    <Scene />
    <Caption />
  </AbsoluteFill>
);
