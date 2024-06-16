import Head from '@/widgets/Sidebar/ui/Helper/ui/Head';
import QuestionList from '@/widgets/Sidebar/ui/Helper/ui/QuestionList';
import ShadowWrapper from '@/shared/UIKit/ShadowWrapper';

export default function Helper() {
  return (
    <ShadowWrapper>
      <Head />
      <QuestionList />
    </ShadowWrapper>
  );
}
