const juries = [
  {
    'name': 'คุณกรมเชษฐ์ วิพันธ์พงษ์',
    'th-pos': 'ประธานเจ้าหน้าที่บริหาร บริษัท แอสเซทไวส์ จำกัด (มหาชน)',
    'en-txt': 'Kromchet Vipanpong, Chief Executive Officer, AssetWise Public Company Limited'
  },
  {
    'name': 'คุณตุลย์ หิรัญญลาวัลย์',
    'th-pos': 'นายกสมาคมถ่ายภาพแห่งประเทศไทย ในพระบรมราชูปถัมภ์',
    'en-txt': 'Tul Hirunyalawan, President of The Royal Photographic Society of Thailand'
  },
  {
    'name': 'คุณปณีตา มาลัยวงศ์',
    'th-pos': 'รองประธานเจ้าหน้าที่บริหารการตลาดและสื่อสารองค์กร และบริการลูกค้า บริษัท แอสเซทไวส์ จำกัด (มหาชน)',
    'en-txt': 'Paneeta Malaivongs, Deputy Chief Executive Officer (Sales and Marketing), AssetWise Public Company Limited'
  },
  {
    'name': 'คุณจุฬวิศว์ ศานติพงศ์',
    'th-pos': 'อุปนายกสมาคมถ่ายภาพแห่งประเทศไทย ในพระบรมราชูปถัมภ์',
    'en-txt': 'Chulawit Santipong, Vice-President of The Royal Photographic Society of Thailand'
  },
  {
    'name': 'คุณวรรณพงษ์ สุรโรจน์ประจักษ์',
    'th-pos': 'Hon.F.RPST, กรรมการบริหารสมาคมถ่ายภาพแห่งประเทศไทย ในพระบรมราชูปถัมภ์',
    'en-txt': 'Wannapong Surarochprajak, Executive committee, The Royal Photographic Society of Thailand'
  },
  {
    'name': 'คุณมรุพงษ์ กิจกสิกร',
    'th-pos': 'ผู้ช่วยประธานเจ้าหน้าที่สายงานลูกค้าสัมพันธ์ บริษัท แอสเซทไวส์ จำกัด (มหาชน)',
    'en-txt': 'Marupong kitkasikorn, Assistant To CEO (customer relations), AssetWise Public Company Limited'
  },
  {
    'name': 'คุณเปรมฤดี เอี่ยมศรีใส',
    'th-pos': 'ผู้จัดการฝ่ายสื่อสารการตลาด บริษัท แอสเซทไวส์ จำกัด (มหาชน)',
    'en-txt': 'Premrudee Iamsrisai, Marketing Communication Manager, AssetWise Public Company Limited'
  }
]

function footer () {
  return(
    <footer className='pt-7'>
      <div className="container mx-auto gap-0 md:gap-5 grid md:grid-cols-2 px-3 xl:px-0">
        <div className="juries">
          <h4 className="font-semibold text-3xl md:text-4xl mb-2 md:mb-4">คณะกรรมการตัดสิน - The Panel of Judges</h4>
          <div className="juries-listed sm:w-100">
            <ul>              
            {juries.map((item, i) => (
              <li key={i} className="mb-3">
                <div className="line1 text-lg sm:text-base leading-4 md:leading-5">
                  <strong className="font-semibold block md:inline-block">{item.name}</strong> {item['th-pos']}</div>
                <div className="line2 md:text-sm italic md:leading-3 leading-3">{item['en-txt']}</div>
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
            {/* <a title='bangkokartcity.org' href="https://www.bangkokartcity.org/" target={'_blank'} rel='noreferrer' className="footer-sponsor-link w-1/4">
              <img src={require('./img/colorful-bkk-logo.png')} alt='Colorful Bangkok 2023'/>
            </a> */}
          </div>
        </div> 
      </div>
      <div className="copyright pt-2 pb-2 mt-4 px-3 xl:px-0">
        <div className="container mx-auto grid md:grid-cols-2">
          <div className="copyright-txt text-center sm:text-left text-[#1A1460]">© Copyright ASSETWISE PHOTO CONTEST 2023. All Rights Reserved.</div>
          <div className="socialIcons flex space-x-4 justify-center sm:justify-end py-3 md:py-0">
            <a href="/" title="" className="social-link">
              <svg className="h-5 fill-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"/></svg>
            </a>
            <a href="/" title="" className="social-link">
              <svg className="h-5 fill-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"/></svg>
            </a>
            <a href="/" title="" className="social-link">
              <svg className="h-5 fill-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M204 6.5C101.4 6.5 0 74.9 0 185.6 0 256 39.6 296 63.6 296c9.9 0 15.6-27.6 15.6-35.4 0-9.3-23.7-29.1-23.7-67.8 0-80.4 61.2-137.4 140.4-137.4 68.1 0 118.5 38.7 118.5 109.8 0 53.1-21.3 152.7-90.3 152.7-24.9 0-46.2-18-46.2-43.8 0-37.8 26.4-74.4 26.4-113.4 0-66.2-93.9-54.2-93.9 25.8 0 16.8 2.1 35.4 9.6 50.7-13.8 59.4-42 147.9-42 209.1 0 18.9 2.7 37.5 4.5 56.4 3.4 3.8 1.7 3.4 6.9 1.5 50.4-69 48.6-82.5 71.4-172.8 12.3 23.4 44.1 36 69.3 36 106.2 0 153.9-103.5 153.9-196.8C384 71.3 298.2 6.5 204 6.5z"/></svg>
            </a>
            <a href="/" title="" className="social-link">
              <svg className="h-5 fill-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M64 112c-8.8 0-16 7.2-16 16v22.1L220.5 291.7c20.7 17 50.4 17 71.1 0L464 150.1V128c0-8.8-7.2-16-16-16H64zM48 212.2V384c0 8.8 7.2 16 16 16H448c8.8 0 16-7.2 16-16V212.2L322 328.8c-38.4 31.5-93.7 31.5-132 0L48 212.2zM0 128C0 92.7 28.7 64 64 64H448c35.3 0 64 28.7 64 64V384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128z"/></svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default footer;