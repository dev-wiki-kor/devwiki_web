/**
 * Icon component
 * @constructor
 * svg use id로 아이콘을 가져온다.
 * 해당 아이콘 svg 파일은 서버 빌드시 생성된다.
 */

export default function Icon() {
  return (
    <svg>
      {/*<use href={`${href}${id}`} className={`${className ?? ''}`} />*/}
      {/*<title>{iconKey}</title>*/}
    </svg>
  );
}
