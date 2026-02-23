export default function ComparePlansSection() {
  return (
    <section className="bg-white">
      <div className="container max-w-[1310px] mx-auto px-4 py-10 lg:py-20">
        {/* 标题 */}
        <h2 className="text-center text-2xl lg:text-4xl lg:leading-[3rem] font-bold text-[#353535]">
          Compare All Plans
        </h2>

        {/* 对比表格 */}
        <div className="mt-10 bg-white rounded-2xl shadow-[0_16px_81px_-57px_rgba(71,71,71,0.38)] overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[720px] text-center">
              {/* 表头 */}
              <thead>
                <tr>
                  <th className="w-[40%] py-[18px] rounded-tl-2xl border-b border-r border-[#F7F7F7]"></th>
                  <th className="w-[18.75%] text-base lg:text-xl text-[#404040] font-bold py-[18px] border-b border-r border-[#F7F7F7]">
                    Free
                  </th>
                  <th className="w-[18.75%] text-base lg:text-xl text-[#404040] font-bold py-[18px] border-b border-r border-[#F7F7F7]">
                    Standard
                  </th>
                  <th className="w-[22%] py-[18px] rounded-tr-2xl pr-0 xl:pr-10">
                    <div className="flex items-center justify-center">
                      <img 
                        width="30" 
                        height="30" 
                        src="https://idownergo.com/wp-content/themes/idownergo/assets/img/table/pro-icon.svg" 
                        alt="pro icon"
                      />
                      <p className="text-xl lg:text-2xl text-[#4EACEA] font-bold ml-2">Pro</p>
                    </div>
                  </th>
                </tr>
              </thead>

              {/* 表格主体 */}
              <tbody className="text-left text-[#292929]">
                {/* 热门功能行 */}
                <tr>
                  <td className="border-r border-[#F7F7F7] text-lg lg:text-2xl font-bold pl-5 lg:pl-[70px] py-3">
                    Hot & Popular Features
                  </td>
                  <td className="py-3 border-r border-[#F7F7F7]">
                    <a 
                      href="/download/?product=idownergo.dmg" 
                      target="_blank"
                      className="mx-auto w-32 md:w-36 lg:w-[180px] h-11 lg:h-12 border border-[#4EACEA] text-[#4EACEA] hover:text-white hover:bg-[#4EACEA] flex justify-center items-center rounded-full transition-colors"
                    >
                      <svg width="24" height="24" className="overflow-hidden">
                        <use href="https://idownergo.com/wp-content/themes/idownergo/assets/svg/common.svg#mac"></use>
                      </svg>
                      <span className="flex flex-col ml-2">
                        <b className="text-sm lg:text-base font-bold">Free Trial</b>
                      </span>
                    </a>
                  </td>
                  <td className="py-3 border-r border-[#F7F7F7]">
                    <a 
                      href="/download/?product=idownergo.dmg" 
                      target="_blank"
                      className="mx-auto w-32 md:w-36 lg:w-[180px] h-11 lg:h-12 border border-[#4EACEA] text-[#4EACEA] hover:text-white hover:bg-[#4EACEA] flex justify-center items-center rounded-full transition-colors"
                    >
                      <svg width="24" height="24" className="overflow-hidden">
                        <use href="https://idownergo.com/wp-content/themes/idownergo/assets/svg/common.svg#mac"></use>
                      </svg>
                      <span className="flex flex-col ml-2">
                        <b className="text-sm lg:text-base font-bold">Free Trial</b>
                      </span>
                    </a>
                  </td>
                  <td className="py-3 xl:pr-10">
                    <a 
                      href="/download/?product=idownergo.dmg" 
                      target="_blank"
                      className="mx-auto w-32 md:w-36 lg:w-[180px] h-11 lg:h-12 bg-[#4EACEA] hover:bg-transparent border border-[#4EACEA] hover:text-[#4EACEA] text-white flex justify-center items-center rounded-full transition-colors"
                    >
                      <svg width="24" height="24" className="overflow-hidden">
                        <use href="https://idownergo.com/wp-content/themes/idownergo/assets/svg/common.svg#mac"></use>
                      </svg>
                      <span className="flex flex-col ml-2">
                        <b className="text-sm lg:text-base font-bold">Free Trial</b>
                      </span>
                    </a>
                  </td>
                </tr>

                {/* Netflix Downloader */}
                <tr>
                  <td className="border-r border-[#F7F7F7] p-5 lg:pl-[70px]">
                    <div className="flex items-start">
                      <span className="text-sm lg:text-base">Netflix Downloader</span>
                      <span className="inline-block ml-1.5 -mt-2.5 text-[#4EACEA] text-[10px] leading-3 border border-[#4EACEA] rounded-full rounded-bl-none px-2 py-0.5">
                        New
                      </span>
                    </div>
                  </td>
                  <td className="text-[#999999] text-center font-bold border-r border-[#F7F7F7]">—</td>
                  <td className="text-[#999999] text-center font-bold border-r border-[#F7F7F7]">—</td>
                  <td className="text-center">
                    <img 
                      width="24" 
                      height="24" 
                      className="inline-block" 
                      src="https://idownergo.com/wp-content/themes/idownergo/assets/img/table/sure-only-icon.svg" 
                      alt="sure icon"
                    />
                  </td>
                </tr>

                {/* Amazon Prime Downloader */}
                <tr>
                  <td className="border-r border-[#F7F7F7] p-5 lg:pl-[70px]">
                    <div className="flex items-start">
                      <span className="text-sm lg:text-base">Amazon Prime Downloader</span>
                      <span className="inline-block ml-1.5 -mt-2.5 text-[#4EACEA] text-[10px] leading-3 border border-[#4EACEA] rounded-full rounded-bl-none px-2 py-0.5">
                        New
                      </span>
                    </div>
                  </td>
                  <td className="text-[#999999] text-center font-bold border-r border-[#F7F7F7]">—</td>
                  <td className="text-[#999999] text-center font-bold border-r border-[#F7F7F7]">—</td>
                  <td className="text-center">
                    <img 
                      width="24" 
                      height="24" 
                      className="inline-block" 
                      src="https://idownergo.com/wp-content/themes/idownergo/assets/img/table/sure-only-icon.svg" 
                      alt="sure icon"
                    />
                  </td>
                </tr>

                {/* Crunchyroll Downloader */}
                <tr>
                  <td className="border-r border-[#F7F7F7] p-5 lg:pl-[70px]">
                    <div className="flex items-start">
                      <span className="text-sm lg:text-base">Crunchyroll Downloader</span>
                      <span className="inline-block ml-1.5 -mt-2.5 text-[#4EACEA] text-[10px] leading-3 border border-[#4EACEA] rounded-full rounded-bl-none px-2 py-0.5">
                        New
                      </span>
                    </div>
                  </td>
                  <td className="text-[#999999] text-center font-bold border-r border-[#F7F7F7]">—</td>
                  <td className="text-[#999999] text-center font-bold border-r border-[#F7F7F7]">—</td>
                  <td className="text-center">
                    <img 
                      width="24" 
                      height="24" 
                      className="inline-block" 
                      src="https://idownergo.com/wp-content/themes/idownergo/assets/img/table/sure-only-icon.svg" 
                      alt="sure icon"
                    />
                  </td>
                </tr>

                {/* OF Video Downloader */}
                <tr>
                  <td className="border-r border-[#F7F7F7] p-5 lg:pl-[70px]">
                    <div className="flex items-start">
                      <span className="text-sm lg:text-base">OF Video Downloader</span>
                      <span className="inline-block ml-1.5 -mt-2.5 text-[#4EACEA] text-[10px] leading-3 border border-[#4EACEA] rounded-full rounded-bl-none px-2 py-0.5">
                        New
                      </span>
                    </div>
                  </td>
                  <td className="text-[#999999] text-center font-bold border-r border-[#F7F7F7]">—</td>
                  <td className="text-[#999999] text-center font-bold border-r border-[#F7F7F7]">—</td>
                  <td className="text-center">
                    <img 
                      width="24" 
                      height="24" 
                      className="inline-block" 
                      src="https://idownergo.com/wp-content/themes/idownergo/assets/img/table/sure-only-icon.svg" 
                      alt="sure icon"
                    />
                  </td>
                </tr>

                {/* Disney+ Downloader */}
                <tr>
                  <td className="border-r border-[#F7F7F7] p-5 lg:pl-[70px]">
                    <div className="flex items-start">
                      <span className="text-sm lg:text-base">Disney+ Downloader</span>
                      <span className="inline-block ml-1.5 -mt-2.5 text-[#4EACEA] text-[10px] leading-3 border border-[#4EACEA] rounded-full rounded-bl-none px-2 py-0.5">
                        New
                      </span>
                    </div>
                  </td>
                  <td className="text-[#999999] text-center font-bold border-r border-[#F7F7F7]">—</td>
                  <td className="text-[#999999] text-center font-bold border-r border-[#F7F7F7]">—</td>
                  <td className="text-center">
                    <img 
                      width="24" 
                      height="24" 
                      className="inline-block" 
                      src="https://idownergo.com/wp-content/themes/idownergo/assets/img/table/sure-only-icon.svg" 
                      alt="sure icon"
                    />
                  </td>
                </tr>

                {/* Hulu Downloader */}
                <tr>
                  <td className="border-r border-[#F7F7F7] p-5 lg:pl-[70px]">
                    <div className="flex items-start">
                      <span className="text-sm lg:text-base">Hulu Downloader</span>
                      <span className="inline-block ml-1.5 -mt-2.5 text-[#4EACEA] text-[10px] leading-3 border border-[#4EACEA] rounded-full rounded-bl-none px-2 py-0.5">
                        New
                      </span>
                    </div>
                  </td>
                  <td className="text-[#999999] text-center font-bold border-r border-[#F7F7F7]">—</td>
                  <td className="text-[#999999] text-center font-bold border-r border-[#F7F7F7]">—</td>
                  <td className="text-center">
                    <img 
                      width="24" 
                      height="24" 
                      className="inline-block" 
                      src="https://idownergo.com/wp-content/themes/idownergo/assets/img/table/sure-only-icon.svg" 
                      alt="sure icon"
                    />
                  </td>
                </tr>

                {/* HBO Max Downloader */}
                <tr>
                  <td className="border-r border-[#F7F7F7] p-5 lg:pl-[70px]">
                    <div className="flex items-start">
                      <span className="text-sm lg:text-base">HBO Max Downloader</span>
                      <span className="inline-block ml-1.5 -mt-2.5 text-[#4EACEA] text-[10px] leading-3 border border-[#4EACEA] rounded-full rounded-bl-none px-2 py-0.5">
                        New
                      </span>
                    </div>
                  </td>
                  <td className="text-[#999999] text-center font-bold border-r border-[#F7F7F7]">—</td>
                  <td className="text-[#999999] text-center font-bold border-r border-[#F7F7F7]">—</td>
                  <td className="text-center">
                    <img 
                      width="24" 
                      height="24" 
                      className="inline-block" 
                      src="https://idownergo.com/wp-content/themes/idownergo/assets/img/table/sure-only-icon.svg" 
                      alt="sure icon"
                    />
                  </td>
                </tr>

                {/* Download videos/audio from 10000+ sites */}
                <tr>
                  <td className="border-r border-[#F7F7F7] p-5 lg:pl-[70px]">
                    <span className="text-sm lg:text-base">Download videos/audio from 10000+ sites</span>
                  </td>
                  <td className="text-sm lg:text-base text-center border-r border-[#F7F7F7]">3 files</td>
                  <td className="text-center font-bold border-r border-[#F7F7F7]">
                    <img 
                      width="24" 
                      height="24" 
                      className="inline-block" 
                      src="https://idownergo.com/wp-content/themes/idownergo/assets/img/table/sure-only-icon.svg" 
                      alt="sure icon"
                    />
                  </td>
                  <td className="text-center">
                    <img 
                      width="24" 
                      height="24" 
                      className="inline-block" 
                      src="https://idownergo.com/wp-content/themes/idownergo/assets/img/table/sure-only-icon.svg" 
                      alt="sure icon"
                    />
                  </td>
                </tr>

                {/* Convert music from Apple Music */}
                <tr>
                  <td className="border-r border-[#F7F7F7] p-5 lg:pl-[70px]">
                    <span className="text-sm lg:text-base">Convert music from Apple Music, Spotify, Amazon Music, Deezer and TIDAL</span>
                  </td>
                  <td className="text-sm lg:text-base text-center border-r border-[#F7F7F7]">1 file</td>
                  <td className="text-center font-bold border-r border-[#F7F7F7]">
                    <img 
                      width="24" 
                      height="24" 
                      className="inline-block" 
                      src="https://idownergo.com/wp-content/themes/idownergo/assets/img/table/sure-only-icon.svg" 
                      alt="sure icon"
                    />
                  </td>
                  <td className="text-center">
                    <img 
                      width="24" 
                      height="24" 
                      className="inline-block" 
                      src="https://idownergo.com/wp-content/themes/idownergo/assets/img/table/sure-only-icon.svg" 
                      alt="sure icon"
                    />
                  </td>
                </tr>

                {/* Convert file to MP4 */}
                <tr>
                  <td className="border-r border-[#F7F7F7] p-5 lg:pl-[70px]">
                    <span className="text-sm lg:text-base">Convert file to MP4, MP3 and orginal format</span>
                  </td>
                  <td className="text-sm lg:text-base text-center border-r border-[#F7F7F7]">1/3 length</td>
                  <td className="text-center font-bold border-r border-[#F7F7F7]">
                    <img 
                      width="24" 
                      height="24" 
                      className="inline-block" 
                      src="https://idownergo.com/wp-content/themes/idownergo/assets/img/table/sure-only-icon.svg" 
                      alt="sure icon"
                    />
                  </td>
                  <td className="text-center">
                    <img 
                      width="24" 
                      height="24" 
                      className="inline-block" 
                      src="https://idownergo.com/wp-content/themes/idownergo/assets/img/table/sure-only-icon.svg" 
                      alt="sure icon"
                    />
                  </td>
                </tr>

                {/* Download playlist */}
                <tr>
                  <td className="border-r border-[#F7F7F7] p-5 lg:pl-[70px]">
                    <span className="text-sm lg:text-base">Download playlist, album, artist and more</span>
                  </td>
                  <td className="text-sm lg:text-base text-center border-r border-[#F7F7F7]">1 file</td>
                  <td className="text-center font-bold border-r border-[#F7F7F7]">
                    <img 
                      width="24" 
                      height="24" 
                      className="inline-block" 
                      src="https://idownergo.com/wp-content/themes/idownergo/assets/img/table/sure-only-icon.svg" 
                      alt="sure icon"
                    />
                  </td>
                  <td className="text-center">
                    <img 
                      width="24" 
                      height="24" 
                      className="inline-block" 
                      src="https://idownergo.com/wp-content/themes/idownergo/assets/img/table/sure-only-icon.svg" 
                      alt="sure icon"
                    />
                  </td>
                </tr>

                {/* Convert media to 20+ formats */}
                <tr>
                  <td className="border-r border-[#F7F7F7] p-5 lg:pl-[70px] pb-5 lg:pb-[60px]">
                    <span className="text-sm lg:text-base">Convert media to 20+ output formats</span>
                  </td>
                  <td className="text-[#999999] text-center font-bold border-r border-[#F7F7F7] py-5 lg:pb-[60px]">—</td>
                  <td className="text-center font-bold border-r border-[#F7F7F7] py-5 lg:pb-[60px]">
                    <img 
                      width="24" 
                      height="24" 
                      className="inline-block" 
                      src="https://idownergo.com/wp-content/themes/idownergo/assets/img/table/sure-only-icon.svg" 
                      alt="sure icon"
                    />
                  </td>
                  <td className="text-center py-5 lg:pb-[60px]">
                    <img 
                      width="24" 
                      height="24" 
                      className="inline-block" 
                      src="https://idownergo.com/wp-content/themes/idownergo/assets/img/table/sure-only-icon.svg" 
                      alt="sure icon"
                    />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
