import MainInfo from '../mainInfo/MainInfo';
import {
  costsInfoOption,
  incomsInfoOption,
  balanceInfoOption,
} from '../../data/mainInfoOptions.json';
import StatisticBtns from '../statisticBtns/StatisticBtns';

function MainPage(props) {
  return (
    <>
      <main>
        <MainInfo title={'Расходы'} options={costsInfoOption} />
        <MainInfo title={'Доходы'} options={incomsInfoOption} />
        <MainInfo title={'Баланс'} options={balanceInfoOption} />
        <StatisticBtns />
      </main>
    </>
  );
}

export default MainPage;
