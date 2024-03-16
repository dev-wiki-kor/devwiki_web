/* eslint-disable no-underscore-dangle */
export type TTheme = 'dark' | 'light';

function initDarkMode() {
  function setTheme(newTheme: TTheme) {
    window.__theme = newTheme;
    window.__onThemeChange(newTheme);
    preferredTheme = newTheme;
    setCookieTheme(newTheme);
    setRootTheme(newTheme);
  }

  function setRootTheme(theme: TTheme) {
    const body = document.querySelector('body')!;
    body.setAttribute('data-theme', theme);
  }

  function getCookieTheme() {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; theme=`);
    if (parts.length === 2) return parts.pop()?.split(';')[0];
    return null;
  }

  function setCookieTheme(theme: TTheme) {
    const updatedCookie = `${encodeURIComponent('theme')}=${encodeURIComponent(theme)}`;
    document.cookie = `${updatedCookie}; path=/`;
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

  let preferredTheme = (getCookieTheme() || getSystemTheme()) as TTheme;
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
