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
            <h3 className='text-5xl font-semibold mt-4 mb-1'>“THE 2025 ASSETWISE <span className='text-[#105596]'>PHOTO</span> CONTEST”</h3>
            <p className='text-[24px]'>ในหัวข้อ "Forwarding Happiness"</p>
            <div className='h-7'></div>
            <p className='text-[24px] leading-[26px]'><strong className='text-[26px]'>AssetWise ฉลองครอบรอบ 20 ปี</strong> <br/>ในฐานะผู้สร้าง "บ้าน" ตามแนวคิด We Build Happiness เพราะรากฐานของบ้านที่อบอุ่น <br/>เป็นสารตั้งต้นทำให้เราส่งต่อความสุขนั้นให้ผู้อื่นได้ไม่รู้จบ</p>
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
