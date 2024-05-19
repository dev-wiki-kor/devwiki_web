import * as stx from '@stylexjs/stylex';
import { text } from '@/app/_styles/globalTokens.stylex';

export default function WelcomeMsg() {
  return (
    <div {...stx.props(styles.container)}>
      <p {...stx.props(styles.msgTitle)}>
        <b {...stx.props(styles.bold)}>Dev Wiki</b>는 한국 개발자를 위한 정보
        공유 커뮤니티 입니다.
      </p>
      <p {...stx.props(styles.msgContent)}>
        엔지니어링에 대해 자유롭게 질문하고 정보를 공유해주세요!
      </p>
      <button {...stx.props(styles.button, styles.loginButton)}>로그인</button>
      <button {...stx.props(styles.button, styles.signUpButton)}>
        회원가입
      </button>
    </div>
  );
}

const styles = stx.create({
  container: {
    height: '282px',
    padding: '20px 16px',
    border: '1px solid #fff',
    boxShadow: '0px 4px 4px 0px #0000000D',
  },
  msgTitle: {
    fontSize: '14px',
    fontWeight: '500',
    color: '#222',
    lineHeight: '28px',
  },
  bold: {
    fontSize: '18px',
    fontWeight: '700',
  },
  msgContent: {
    fontSize: '14px',
    fontWeight: '400',
    lineHeight: '21px',
    marginTop: '16px',
  },
  button: {
    fontSize: text.p,
    lineHeight: '24px',
    fontWeight: '500',
    width: '100%',
    height: '35px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '5px',
    border: '1px solid #5584AC',
  },
  loginButton: {
    color: '#fff',
    backgroundColor: '#5584AC',
    marginTop: '16px',
  },
  signUpButton: {
    marginTop: '10px',
    color: '#5584AC',
    backgroundColor: '#fff',
  },
});
