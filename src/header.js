import DBanner from './img/07062023_ASW_PhotoContest_Desktop-2730x1380-.jpeg';
import TBanner from './img/07062023_ASW_PhotoContest_Desktop-2730x1380-.jpeg';
import MBanner from './img/07062023_ASW_PhotoContest_Mobile-.jpeg';
//import { LazyLoadImage } from 'react-lazy-load-image-component';

function header () {
  return (
    <header id="pageHeader" className='lg:bg-[#333]'>
      <div className="top-links grid grid-cols-2 gap-2 text-[12px] md:text-[14px] lg:text-xl text-center py-1 md:absolute md:right-4 md:top-1 bg-white lg:px-2">
        <p><strong className='font-semibold'>รายละเอียด กติกา และส่งภาพ</strong> : <a href="http://www.rpst.or.th/" target="_blank" rel='noreferrer' title="">rpst.co.th</a></p>
        <p className='flex items-center justify-end md:justify-start'><strong className='font-semibold'>สอบถามข้อมูลเพิ่มเติม</strong> : 
          <a href="tel:0972500058" target="_blank" rel='noreferrer' title="สอบถามข้อมูลเพิ่มเติม" className='px-1'>
          <svg xmlns="http://www.w3.org/2000/svg" height="1.2rem" viewBox="0 0 512 512"><path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z"/></svg>
          </a>
          <a href="https://line.me/R/ti/p/@140zndde" title='Add Line@' className='px-1'><svg xmlns="http://www.w3.org/2000/svg" height="1.2rem" viewBox="0 0 512 512" fill='#06c755'><path d="M311 196.8v81.3c0 2.1-1.6 3.7-3.7 3.7h-13c-1.3 0-2.4-.7-3-1.5l-37.3-50.3v48.2c0 2.1-1.6 3.7-3.7 3.7h-13c-2.1 0-3.7-1.6-3.7-3.7V196.9c0-2.1 1.6-3.7 3.7-3.7h12.9c1.1 0 2.4 .6 3 1.6l37.3 50.3V196.9c0-2.1 1.6-3.7 3.7-3.7h13c2.1-.1 3.8 1.6 3.8 3.5zm-93.7-3.7h-13c-2.1 0-3.7 1.6-3.7 3.7v81.3c0 2.1 1.6 3.7 3.7 3.7h13c2.1 0 3.7-1.6 3.7-3.7V196.8c0-1.9-1.6-3.7-3.7-3.7zm-31.4 68.1H150.3V196.8c0-2.1-1.6-3.7-3.7-3.7h-13c-2.1 0-3.7 1.6-3.7 3.7v81.3c0 1 .3 1.8 1 2.5c.7 .6 1.5 1 2.5 1h52.2c2.1 0 3.7-1.6 3.7-3.7v-13c0-1.9-1.6-3.7-3.5-3.7zm193.7-68.1H327.3c-1.9 0-3.7 1.6-3.7 3.7v81.3c0 1.9 1.6 3.7 3.7 3.7h52.2c2.1 0 3.7-1.6 3.7-3.7V265c0-2.1-1.6-3.7-3.7-3.7H344V247.7h35.5c2.1 0 3.7-1.6 3.7-3.7V230.9c0-2.1-1.6-3.7-3.7-3.7H344V213.5h35.5c2.1 0 3.7-1.6 3.7-3.7v-13c-.1-1.9-1.7-3.7-3.7-3.7zM512 93.4V419.4c-.1 51.2-42.1 92.7-93.4 92.6H92.6C41.4 511.9-.1 469.8 0 418.6V92.6C.1 41.4 42.2-.1 93.4 0H419.4c51.2 .1 92.7 42.1 92.6 93.4zM441.6 233.5c0-83.4-83.7-151.3-186.4-151.3s-186.4 67.9-186.4 151.3c0 74.7 66.3 137.4 155.9 149.3c21.8 4.7 19.3 12.7 14.4 42.1c-.8 4.7-3.8 18.4 16.1 10.1s107.3-63.2 146.5-108.2c27-29.7 39.9-59.8 39.9-93.1z"/></svg></a>
        </p>
      </div>
      <picture>
        <source media='(max-width: 520px)' srcSet={MBanner}/>
        <source media='(max-width: 820px)' srcSet={TBanner}/>
        <img src={DBanner} alt="AssetWise Photos Contest Exhibition 2023" className='w-full mx-auto lg:w-auto xl:w-[1520px]'/>
      </picture>
    </header>
  );
}

export default header;