import { CSSProperties } from 'react';

/** Style 추론을 위하여.. */
type TStyleKey =
  | 'heading'
  | 'gray'
  | 'global'
  | 'sign'
  | 'profileImg'
  | 'footerCover'
  | 'footer'
  | 'skillKeywordBadge';

export const Style: Record<TStyleKey, CSSProperties> = {
  heading: {
    color: 'var(--resume-ink, #1c2532)',
  },

  gray: {
    color: 'var(--resume-muted, #526176)',
  },

  global: {
    fontFamily: "'Noto Sans KR', sans-serif",
    fontWeight: 400,
    wordWrap: 'break-word',
    wordBreak: 'keep-all',
  },

  sign: {
    fontFamily: "'Parisienne', cursive",
    fontSize: '1.5em',
  },

  profileImg: {
    maxHeight: '280px',
  },

  footerCover: {
    backgroundColor: '#f5f5f5',
    paddingLeft: 0,
    paddingRight: 0,
    marginTop: '50px',
    height: '80px',
  },

  footer: {
    // paddingTop: '10px',
  },

  skillKeywordBadge: {
    fontWeight: 400,
  },
};
