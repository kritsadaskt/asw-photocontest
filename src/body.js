import { Tab, Transition } from '@headlessui/react';
import itemsGroup from './awards.json';
import 'animate.css';
import { useState } from 'react';
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry";
import { LazyLoadImage } from 'react-lazy-load-image-component';

function BodyTabs () {
  const [slidePath, setSlidePath] = useState('');
  const [lightboxName, setLightboxName] = useState('');
  const [lightboxImgName, setLightboxImgName] = useState('');
  const [lightboxDesc, setLightboxDesc] = useState('');
  const [lightboxState, setLightboxState] = useState(false);

  //console.log(lightboxState);

  function slideClickHandle(item, i, imgUrl) {
    // console.log(slidePath);
    //console.log(item);
    setSlidePath(imgUrl);
    setLightboxName( () => item.prefix+' '+item.name+' '+item.lastname );
    setLightboxImgName(item.imageName);
    setLightboxDesc(item.imageDesc);
    setLightboxState(true);
  }

  function closeLightboxHandle(event) {
    //console.log(event);
    setLightboxState(false)
  }
  return (
    <Tab.Group defaultIndex={0}>
      <div className="container mx-auto">
      <Tab.List className='justify-center text-md md:text-2xl lg:text-4xl font-semibold leading-none grid grid-cols-2 py-[15px]'>
        { itemsGroup.map((item, i)=> (
          <Tab key={i} className='uppercase whitespace-pre-line text-[#6d6e71] hover:text-[#333] ui-selected:text-[#333] xl:px-[20%] xl:py-[20px] font-gotham first:border-r-4 border-[#58595b] focus-visible:outline-0 cursor-pointer'>
            {item.contestLabel}
            <p className='font-DBHeavent font-normal leading-[0.8] md:leading-tight text-[14px] md:text-[20px] mt-1 md:mt-0 md:text-2xl'>หมวด {item.contestDesc}</p>
          </Tab>
        ))}
      </Tab.List>
      </div>
      <Tab.Panels className='bg-white'>
        { itemsGroup.map((contestGroup, i) => (
          <Tab.Panel key={i}>
            <Transition show enter="transition-opacity duration-500" className="winnerBox bg-[#dce5e7]">
              <div className="container mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-5 xl:grid-cols-5 gap-0 md:gap-3 lg:gap-2 xl:gap-4">
                  <div className="details col-span-2 px-3 xl:px-0 pt-5 xl:pt-10">
                    <h2 className='text-[3rem] xl:text-[5rem] leading-[.75] font-bold text-[#e8501d] pb-4 lg:pb-6'>รางวัลชนะเลิศ</h2>
                    <h3 className='text-[2rem] xl:text-[2.6rem] leading-[.75] font-semibold pb-4 lg:pb-6'>เงินสด 100,000 บาท<br/>พร้อมถ้วยรางวัลเกียรติยศ</h3>
                    <h3 className='text-4xl md:text-[2rem] leading-[.9] pr-8 whitespace-pre-line uppercase font-gotham'>{contestGroup.contestName}</h3>
                    <p className='text-xl md:text-2xl mb-3 lg:mb-5'>{contestGroup.contestDesc}</p>
                    <p className='text-xl lg:text-2xl lg:leading-[.8]'><span className='font-semibold inline-block w-auto lg:w-[85px]'>ศิลปิน</span> {contestGroup.winner.prefix+' '+contestGroup.winner.name+' '+contestGroup.winner.lastname}</p>
                    <p className='text-xl lg:text-2xl'><span className='font-semibold inline-block w-auto lg:w-[85px]'>ชื่อภาพ</span> {contestGroup.winner.imageName}</p>
                    <p className='text-xl lg:text-2xl leading-tight lg:leading-[.9] mb-5'><span className='font-semibold'>คำบรรยาย</span> {contestGroup.winner.imageDesc}</p>
                  </div>
                  <div className="image-thumb md:col-span-3 xl:col-span-3">
                    <LazyLoadImage alt={contestGroup.winner.imageName + ' โดย ' + contestGroup.winner.prefix+contestGroup.winner.name+' '+contestGroup.winner.lastname} src={'https://assetwise.co.th/photocontest/'+ contestGroup.key +'/awards/'+ contestGroup.winner.url+'.jpg'} />
                  </div>
                </div>
              </div>
            </Transition>
            {/* ----- Lightbox ---- */}
            { lightboxState ? 
              <div onClick={closeLightboxHandle} className='fixed flex flex-col justify-center bg-stone-800/95 w-full h-full z-30 top-0 left-0'>
                <button className='w-[40px] h-auto p-3 absolute top-3 right-5' onClick={closeLightboxHandle}>
                  <svg className='fill-white' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z"/></svg>
                </button>
                <LazyLoadImage className='align-center h-auto lg:h-4/5 mx-auto mb-3 justify-center' src={ slidePath } alt='' />
                <div className='w-4/5 lg:w-3/5 mx-auto'>
                  <p className='text-2xl text-center font-semibold text-white'>ชื่อภาพ "{lightboxImgName}"</p>
                  <p className='text-xl text-center font-semibold text-white'>ศิลปิน : {lightboxName}</p>
                  <p className='text-[16px] leading-tight md:text-xl text-center text-slate-200'>{lightboxDesc}</p>
                </div>
              </div> : null
            }
            <div className="container mx-auto py-2 px-3 md:py-10 xl:px-0 xl:py-16">
              <p className='font-semibold text-[2rem] leading-4 lg:text-[2.5rem]'>รางวัลยอดเยี่ยม จำนวน 10 รางวัล</p>
              <hr className='border border-black mt-4 mb-3'/>
              <div className="awards-listed pb-5">
                <p className='text-xl lg:text-2xl mb-4'>ภายใต้หัวข้อ {contestGroup.contestDesc}</p>

                <ResponsiveMasonry >
                  <Masonry gutter='10px'>
                  {contestGroup.awards.map((item,i) => (
                    <LazyLoadImage alt={item.imageName + ' โดย ' + item.prefix+item.name+' '+item.lastname} key={i} className={'cursor-pointer hover:opacity-80 transition-all'} src={ contestGroup.path + '/awards/thumbs/' + item.url +'.jpg' } onClick={ () => slideClickHandle(item, i, contestGroup.path + '/awards/' + item.url +'.jpg')} />
                  ))}
                  </Masonry>
                </ResponsiveMasonry>
              </div>

              <div className="awards-listed pt-10 pb-5">
                <p className='font-semibold text-[2rem] leading-4 lg:text-[2.5rem]'>ภาพที่ผ่านเข้ารอบ</p>
                <hr className='border border-black mt-4 mb-5'/>
                <p className='text-xl lg:text-2xl mb-4'>ภายใต้หัวข้อ {contestGroup.contestDesc}</p>
                <ResponsiveMasonry >
                  <Masonry gutter='10px'>
                  {contestGroup.participant.map((item,i) => (
                    <LazyLoadImage alt={item.imageName + ' โดย ' + item.prefix+item.name+' '+item.lastname} key={i} className={'cursor-pointer hover:opacity-80 transition-all'} src={ contestGroup.path + '/participant/thumbs/' + item.url +'.jpg' } onClick={ () => slideClickHandle(item, i, contestGroup.path + '/participant/' + item.url +'.jpg')} />
                  ))}
                  </Masonry>
                </ResponsiveMasonry>
              </div>
            </div>
          </Tab.Panel>
        ))}
      </Tab.Panels>
    </Tab.Group>
  )
}

export default BodyTabs;