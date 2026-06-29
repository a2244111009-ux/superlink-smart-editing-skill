import React from 'react';
import {AbsoluteFill} from 'remotion';

const ink = '#09142a';
const muted = '#64748b';
const blue = '#2775ff';
const green = '#20c878';
const red = '#e83b4f';
const dark = '#111827';

export const FdaLicenseCover = () => (
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
          'radial-gradient(circle at 14% 10%, rgba(39,117,255,0.22), transparent 34%), radial-gradient(circle at 86% 74%, rgba(32,200,120,0.16), transparent 32%), linear-gradient(180deg, #edf4fb 0%, #d8e5ef 100%)',
      }}
    />
    <div
      style={{
        position: 'absolute',
        left: 54,
        top: 54,
        right: 54,
        bottom: 330,
        borderRadius: 42,
        background: 'rgba(243,248,253,0.86)',
        border: '1px solid rgba(16,24,39,0.1)',
        boxShadow: '0 40px 120px rgba(22,34,55,0.22)',
      }}
    />

    <div style={{position: 'absolute', left: 92, top: 92, color: muted, fontSize: 27, fontWeight: 900}}>
      泰国 FDA 进口商许可证避坑
    </div>

    <div style={{position: 'absolute', left: 88, top: 154, width: 900}}>
      <div style={{fontSize: 92, lineHeight: 1.02, fontWeight: 1000, color: ink, letterSpacing: 0}}>
        证办下来了
      </div>
      <div style={{marginTop: 16, fontSize: 92, lineHeight: 1.02, fontWeight: 1000, color: ink, letterSpacing: 0}}>
        账号不是你的
      </div>
    </div>

    <div
      style={{
        position: 'absolute',
        left: 92,
        top: 392,
        display: 'flex',
        alignItems: 'center',
        gap: 18,
      }}
    >
      <div
        style={{
          borderRadius: 999,
          background: '#fff1f3',
          border: `3px solid ${red}`,
          color: red,
          padding: '14px 24px',
          fontSize: 34,
          fontWeight: 1000,
        }}
      >
        控制权风险
      </div>
      <div
        style={{
          borderRadius: 999,
          background: '#eaf3ff',
          border: `3px solid ${blue}`,
          color: blue,
          padding: '14px 24px',
          fontSize: 34,
          fontWeight: 1000,
        }}
      >
        老板必看
      </div>
    </div>

    <div
      style={{
        position: 'absolute',
        left: 100,
        top: 540,
        width: 880,
        height: 520,
        borderRadius: 34,
        background: 'white',
        border: '1px solid rgba(16,24,39,0.1)',
        boxShadow: '0 30px 80px rgba(15,23,42,0.14)',
      }}
    >
      <div style={{position: 'absolute', left: 44, top: 34, color: muted, fontSize: 28, fontWeight: 900}}>
        业务档案
      </div>
      <div style={{position: 'absolute', left: 44, top: 82, color: ink, fontSize: 50, fontWeight: 1000}}>
        进口商许可证
      </div>
      <div
        style={{
          position: 'absolute',
          right: 54,
          top: 72,
          borderRadius: 12,
          border: `4px solid ${green}`,
          color: green,
          padding: '10px 18px',
          fontSize: 30,
          fontWeight: 1000,
          transform: 'rotate(-5deg)',
        }}
      >
        已办理
      </div>

      {[
        ['主体', 'A 公司', ink],
        ['业务', '化妆品 / 泰国 FDA', blue],
        ['许可证状态', '已办好', green],
        ['后台账号', '不在老板手里', red],
      ].map(([label, value, color], i) => (
        <div key={label} style={{position: 'absolute', left: 54, top: 176 + i * 68, display: 'flex', alignItems: 'center'}}>
          <div style={{width: 188, color: muted, fontSize: 28, fontWeight: 900}}>{label}</div>
          <div style={{color, fontSize: 30, fontWeight: 1000}}>{value}</div>
        </div>
      ))}

      <div
        style={{
          position: 'absolute',
          right: 52,
          bottom: 54,
          width: 300,
          height: 88,
          borderRadius: 24,
          background: '#fff1f3',
          border: `3px solid ${red}`,
          color: red,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: 34,
          fontWeight: 1000,
        }}
      >
        登录失败
      </div>
    </div>

    <div
      style={{
        position: 'absolute',
        left: 126,
        top: 1004,
        width: 828,
        height: 326,
        borderRadius: 34,
        background: dark,
        boxShadow: '0 36px 90px rgba(15,23,42,0.28)',
      }}
    >
      <div style={{position: 'absolute', left: 46, top: 38, color: 'rgba(255,255,255,0.54)', fontSize: 28, fontWeight: 900}}>
        问题不在证
      </div>
      <div style={{position: 'absolute', left: 46, top: 92, color: 'white', fontSize: 58, lineHeight: 1.12, fontWeight: 1000}}>
        真正要问的是：
      </div>
      <div
        style={{
          position: 'absolute',
          left: 46,
          right: 46,
          bottom: 42,
          height: 100,
          borderRadius: 26,
          background: 'rgba(232,59,79,0.13)',
          border: `3px solid ${red}`,
          color: 'white',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '0 32px',
          fontSize: 40,
          fontWeight: 1000,
        }}
      >
        <span>账号谁控制？</span>
        <span style={{color: red, fontSize: 54}}>!</span>
      </div>
    </div>

    <div
      style={{
        position: 'absolute',
        left: 114,
        top: 1390,
        right: 114,
        height: 118,
        borderRadius: 30,
        background: '#ffffff',
        border: `3px solid ${green}`,
        color: ink,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        fontSize: 40,
        lineHeight: 1.18,
        fontWeight: 1000,
        boxShadow: '0 22px 56px rgba(15,23,42,0.12)',
      }}
    >
      企业负责人必须是你能控制的泰国人
    </div>
  </AbsoluteFill>
);
