type TTheme = 'dark' | 'light';

declare global {
  interface Window {
    __theme: TTheme;
    __onThemeChange: (theme: TTheme) => void;
    __setPreferredTheme: (theme: TTheme) => void;
  }
}

function initDarkMode() {
  function setTheme(newTheme: TTheme) {
    window.__theme = newTheme;
    window.__onThemeChange(newTheme);
    preferredTheme = newTheme;
    setLocalTheme(newTheme);
    setRootTheme(newTheme);
  }

  function setRootTheme(theme: TTheme) {
    const html = document.querySelector('html')!;
    html.setAttribute('data-theme', theme);
  }

  function getLocalTheme() {
    try {
      return localStorage?.getItem('theme') ?? '';
    } catch (e) {
      console.error(e);
    }
    return '';
  }

  function setLocalTheme(theme: TTheme) {
    try {
      localStorage.setItem('theme', theme);
    } catch (e) {
      console.error(e);
    }
  }

  function getSystemTheme() {
    return window.matchMedia('(prefers-color-scheme: dark)').matches
      ? 'dark'
      : 'light';
  }

  // 시스템 변경 이벤트 추적
  function systemListener() {
    const preferDarkMode = window.matchMedia('(prefers-color-scheme: dark)');
    preferDarkMode.addEventListener('change', (e) => {
      setTheme(e.matches ? 'dark' : 'light');
    });
  }

  // 컴포넌트에서 스크립트 콜백 함수 설정
  window.__onThemeChange = function () {};

  // 컴포넌트에서 사용을 하기위해 전역함수로 설정
  window.__setPreferredTheme = function (newTheme: TTheme) {
    setTheme(newTheme);
  };

  systemListener();

  let preferredTheme = (getLocalTheme() || getSystemTheme()) as TTheme;
  setTheme(preferredTheme);
}

export function DarkMode() {
  return (
    <script
      id="dark-mode"
      dangerouslySetInnerHTML={{
        __html: `(${initDarkMode.toString()})()`,
      }}
    />
  );
}
