import HomeMain from '@/app/_component';
import MenuIcon from '@/shared/UIKit/Icon/menu/home';
import MainIntro from '@/widgets/mainIntro/ui';

export default function Home() {
  return (
    <>
      <MenuIcon iconKey="menu_home" />
      <HomeMain />
      <MainIntro>
        <MainIntro.Title iconKey="home" title="Home" />
        <MainIntro.Image imgKey={'main'} />
        <MainIntro.Description title="This is the home page" />
      </MainIntro>
    </>
  );
}
