const juries = [
  {
    'name': 'คุณกรมเชษฐ์ วิพันธ์พงษ์',
    'th-pos': 'ประธานเจ้าหน้าที่บริหาร บริษัท แอสเซทไวส์ จำกัด (มหาชน)',
    'en-txt': 'Kromchet Vipanpong, Chief Executive Officer, AssetWise Public Company Limited'
  },
  {
    'name': 'คุณตุลย์ หิรัญญลาวัลย์',
    'th-pos': 'นายกสมาคมถ่ายภาพแห่งประเทศไทย ในพระบรมราชูปถัมภ์',
    'en-txt': 'Tul Hirunyalawaan, Hon.F.RPST, President of The Royal Photographic Society of Thailand'
  },
  {
    'name': 'คุณปณีตา มาลัยวงศ์',
    'th-pos': 'รองประธานเจ้าหน้าที่บริหาร บริษัท แอสเซทไวส์ จำกัด (มหาชน)',
    'en-txt': 'Paneeta Malaiwong, Director, Deputy CEO-Sales & Marketing, AssetWise PCL.'
  },
  {
    'name': 'คุณจุฬวิศว์ ศานติพงศ์',
    'th-pos': 'อุปนายกสมาคมถ่ายภาพแห่งประเทศไทย ในพระบรมราชูปถัมภ์',
    'en-txt': 'Chulawit Santipong, Hon.F.RPST, Vice President of The Royal Photographic Society of Thailand'
  },
  {
    'name': 'คุณวรรณพงษ์ สุรโรจน์ประจักษ์',
    'th-pos': 'กรรมการบริหารสมาคมถ่ายภาพแห่งประเทศไทย ในพระบรมราชูปถัมภ์',
    'en-txt': 'Wannapong A. Surarochprajak, Hon.F.RPST, Executive Board Committee of The Royal Photographic Society of Thailand'
  },
  {
    'name': 'คุณอาระตี เบญจาธิกูล',
    'th-pos': 'รองประธานสายงานอาวุโส ฝ่ายสื่อสารองค์กร, บริษัท แอสเซทไวส์ จำกัด (มหาชน)',
    'en-txt': 'Aratee Benchadhikul, Senior Vice President, AssetWise Public Company Limited'
  },
  {
    'name': 'คุณมรุพงษ์ กิจกสิกร',
    'th-pos': 'รองประธานสายงาน ฝ่ายลูกค้าสัมพันธ์, บริษัท แอสเซทไวส์ จำกัด (มหาชน)',
    'en-txt': 'Marupong Kitkasikorn, Deputy Vice President, AssetWise Public Company Limited'
  },
  {
    'name': 'คุณเปรมฤดี เอี่ยมศรีใส',
    'th-pos': 'ผู้จัดการฝ่ายสื่อสารองค์กร, บริษัท แอสเซทไวส์ จำกัด (มหาชน)',
    'en-txt': 'Premrudee Iamsrisai, Marketing Communication Manager, AssetWise Public Company Limited'
  },
]

function footer () {
  return(
    <footer className='pt-7'>
      <div className="container mx-auto gap-0 md:gap-5 grid md:grid-cols-3 px-3 2xl:px-0">
        <div className="juries col-span-2">
          <h4 className="font-semibold text-3xl md:text-4xl mb-2 md:mb-4">คณะกรรมการตัดสิน - The Panel of Judges</h4>
          <div className="juries-listed sm:w-100">
            <ul>              
            {juries.map((item, i) => (
              <li key={i} className="mb-3">
                <div className="line1 text-[20px] md:text-[24px] leading-tight">
                  <strong className="font-semibold block md:inline-block">{item.name}</strong> {item['th-pos']}
                </div>
                <div className="line2 text-[18px] md:text-[22px] leading-none">{item['en-txt']}</div>
              </li>
            ))}
            </ul>
          </div>
        </div>
        <div className='mt-4 md:mt-0'>
          <h4 className="font-semibold text-3xl md:text-4xl mb-4">สนับสนุนโดย</h4>
          <div className="footer-sponsors-logo flex items-center mb-5">
            <a title='assetwise.co.th' href="https://assetwise.co.th" target={'_blank'} rel='noreferrer' className="footer-sponsor-link w-1/6 mr-6">
              <img src={require('./img/asw-logo-sq.png')} alt='AssetWise'/>
            </a>
            <a title='rpst.or.th' href="http://www.rpst.or.th/" target={'_blank'} rel='noreferrer' className="footer-sponsor-link w-1/4 mr-6">
            <img src={require('./img/rpst-logo.png')} alt='RPST'/>
            </a>
          </div>
          <div className='h-5'></div>
          <h4 className="font-semibold text-3xl md:text-4xl mb-2">การประกวดปีที่ผ่านมา</h4>
          <ul className='text-[22px] md:text-[26px] flex gap-2'>
            <li>
              <a className='underline md:no-underline md:hover:underline' href="https://assetwise.co.th/photocontest/2023/" target={'_blank'} rel='noreferrer'>2023, </a>
            </li>
            <li>
              <a className='underline md:no-underline md:hover:underline' href="https://assetwise.co.th/photocontest/2024/" target={'_blank'} rel='noreferrer'>2024</a>
            </li>
          </ul>
        </div> 
      </div>
      <div className="copyright pt-2 pb-2 mt-4 px-3 2xl:px-0">
        <div className="container mx-auto grid md:grid-cols-2">
          <div className="copyright-txt text-center sm:text-left text-[#105596]">© Copyright ASSETWISE PHOTO CONTEST 2025. All Rights Reserved.</div>
          <div className="socialIcons flex space-x-2 justify-center items-center sm:justify-end py-3 md:py-0">
            <a href="https://www.facebook.com/AssetWiseThailand" title="AssetWise Facebook" className="social-link">
              <svg className="h-5 fill-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"/></svg>
            </a>
            <a href="https://x.com/AssetwiseTH" title="AssetWise X" className="social-link">
              <svg xmlns="http://www.w3.org/2000/svg" className='fill-gray-500' x="0px" y="0px" width="24" height="24" viewBox="0 0 24 24">
                <path d="M10.053,7.988l5.631,8.024h-1.497L8.566,7.988H10.053z M21,6v12	c0,1.657-1.343,3-3,3H6c-1.657,0-3-1.343-3-3V6c0-1.657,1.343-3,3-3h12C19.657,3,21,4.343,21,6z M17.538,17l-4.186-5.99L16.774,7	h-1.311l-2.704,3.16L10.552,7H6.702l3.941,5.633L6.906,17h1.333l3.001-3.516L13.698,17H17.538z"></path>
              </svg>
            </a>
            <a href="mailto:info@assetwise.co.th" title="Email" className="social-link">
              <svg className="h-5 fill-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M64 112c-8.8 0-16 7.2-16 16v22.1L220.5 291.7c20.7 17 50.4 17 71.1 0L464 150.1V128c0-8.8-7.2-16-16-16H64zM48 212.2V384c0 8.8 7.2 16 16 16H448c8.8 0 16-7.2 16-16V212.2L322 328.8c-38.4 31.5-93.7 31.5-132 0L48 212.2zM0 128C0 92.7 28.7 64 64 64H448c35.3 0 64 28.7 64 64V384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128z"/></svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default footer;