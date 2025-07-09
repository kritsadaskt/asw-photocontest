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
            <p className='text-[24px] leading-[26px]'><span className='font-semibold'>Assetwise</span> ร่วมกับ <span className='font-semibold'>สมาคมถ่ายภาพแห่งประเทศไทย ในพระบรมราชูปถัมภ์</span> <br className='hidden md:block' />และ <span className='font-semibold'>Colorful Bangkok 2022</span> <br className='md:hidden' />จัดโครงการประกวดภาพถ่าย</p>
            <h3 className='text-3xl font-semibold font-gotham my-4'>“ASSETWISE <span className='text-[#e8501d]'>PHOTO</span> CONTEST 2022”</h3>
            <p className='text-[18px] md:leading-5 lg:text-[24px] lg:leading-[26px]'>เพื่อนำเสนอมุมมองแห่งความสุขและทัศนียภาพของกรุงเทพฯ<br/>ผ่านภาพถ่ายผู้คน วิถีชีวิต เมือง และวัฒนธรรม<br className='md:hidden'/>รวมถึงยังเปิดโอกาสให้สังคมได้มองเห็นมุมมองที่แปลกใหม่ <br/>ความสุขและความสวยงามในการดำเนินชีวิตที่ซ่อนอยู่ <br className='md:hidden'/>กับผู้คนในพื้นที่ต่างๆของประเทศไทย <br/>ผ่านผลงานภาพถ่ายที่จะส่งต่อความสุขได้อย่างน่าประทับใจ</p>
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
