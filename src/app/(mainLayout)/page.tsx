import HomeMain from '@/app/_component';
import MainIntro from '@/widgets/mainIntro/ui';

export default function Home() {
  return (
    <>
      <HomeMain />
      <MainIntro>
        <MainIntro.Title iconKey="home" title="Home" />
        <MainIntro.Image imgKey={'main'} />
        <MainIntro.Description title="This is the home page" />
      </MainIntro>
    </>
  );
}
