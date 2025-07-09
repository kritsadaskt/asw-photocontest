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
        <section className='intro-text py-10 bg-white border-y-[1px] border-y-stone-300'>
          <div className="container mx-auto text-center">
            <p className='text-[24px] leading-[26px]'><span className='font-semibold'>Assetwise</span> ร่วมกับ <span className='font-semibold'>สมาคมถ่ายภาพแห่งประเทศไทย ในพระบรมราชูปถัมภ์</span> <br className='hidden md:block' />จัดโครงการประกวดภาพถ่าย</p>
            <h1 className='text-3xl font-semibold font-gotham mt-4'>“The 2024 ASSETWISE <span className='text-[#e8501d]'>PHOTO</span> CONTEST”</h1>
            <h2 className='text-3xl font-semibold font-db mb-4'>ในหัวข้อ “Your Home-Town Happiness”<br/>ภาพถ่ายสะท้อนความสุขจากภูมิลำเนา</h2>
            <p className='text-[18px] md:leading-5 lg:text-[24px] lg:leading-[26px]'>
              ถ่ายทอดความคิดสร้างสรรค์ทางการถ่ายภาพและส่งต่อเรื่องราวแห่งความสุขที่บ้านเกิด<br className='hidden md:block'/>หรือ สถานที่ที่ประทับใจในทุกจังหวัดทั่วทุกภูมิภาคของประเทศไทย
            </p>
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
