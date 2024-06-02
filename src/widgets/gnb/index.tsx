import * as stylex from '@stylexjs/stylex';

export default function Gnb() {
  const a = '';

  return <div {...stylex.props(styles.container)}></div>;
}

const styles = stylex.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  button: {
    margin: '10px',
  },
});
