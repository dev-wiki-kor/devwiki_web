import * as stx from '@stylexjs/stylex';
import { stxP } from '@/shared/lib/util/stylex';
import Keyword from '@/shared/UIKit/Keyword';

export default function QuestionList() {
  return (
    <ul {...stxP(styles.ul)}>
      <QuestionItem />
      <QuestionItem />
      <QuestionItem />
    </ul>
  );
}

function QuestionItem() {
  return (
    <li {...stxP(styles.li)}>
      <Keyword keyWordType={'translate'} size={'sm'} />
      <p>JBOSS hibernate orm user guide - domain model ?</p>
      <div {...stxP(styles.info)}>
        <span># by ‘chichi’</span>
        <span>3 answer</span>
      </div>
    </li>
  );
}

const styles = stx.create({
  ul: {
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
    marginTop: '15px',
  },
  li: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    gap: '7px',
  },
  info: {
    fontSize: '12px',
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    color: '#939393',
  },
});
