import './styles.scss';
import PageHeader from './header';
import BodyTabs from './body';
import PageFooter from './footer';
import BackTotopComp from './backToTopComp';

function App() {
  return (
    <div className="App">
      <PageHeader/>
      <section id='pageBody' className='bg-[#f9f9f9]'>
        <section className='intro-text px-2 md:px-0 py-10 bg-white border-y-[1px] border-y-stone-300'>
          <div className="container mx-auto text-center">
            <p className='text-[26px] leading-[28px]'><span className='font-semibold'>Assetwise</span> ร่วมกับ <span className='font-semibold'>สมาคมถ่ายภาพแห่งประเทศไทย ในพระบรมราชูปถัมภ์</span><br/>จัดโครงการประกวดภาพถ่าย</p>
            <h3 className='text-5xl font-semibold mt-4 mb-1'>“THE 2026 ASSETWISE <span className='text-primary'>PHOTO</span> CONTEST”</h3>
            <p className='text-[24px]'>ในหัวข้อ Happyscape ทิวทัศน์แห่งความสุข และ หัวข้อ A Joyful World โลกนี้น่าอยู่</p>
            <div className='h-7'></div>
          </div>
        </section>
        <BodyTabs/>
      </section>
      <BackTotopComp/>
      <PageFooter/>
    </div>
  );
}

export default App;
