// // import { Link } from 'react-router-dom';
// // import { BookingButton } from './BookingButton';
// // import { footerLinkGroups } from '@/data/siteData';

// // export function Footer() {
// //   return (
// //     <footer className="bg-dark text-ivory pt-[80px] pb-[25px] px-[clamp(24px,8vw,130px)] max-sm:pt-[60px] bg-[#a88143]">
// //       <div className="flex items-center gap-[40px] pb-[75px] border-b border-[#634a30] max-md:flex-wrap max-sm:gap-[25px]">
// //         <Link to="/" className="flex flex-col leading-[0.95] tracking-[0.15em] whitespace-nowrap text-[14px] max-sm:text-[11px] font-serif font-medium text-ivory">
// //           <span>THE GOLDEN NUMERALIST</span>
// //           <small className="font-sans text-gold text-[8px] max-sm:text-[7px] tracking-[0.34em] mt-[7px]">BY NAMRATTAA LAL</small>
// //         </Link>
// //         <p className="mx-auto text-[#c8ae8c] font-serif text-[22px] max-md:m-0 max-md:w-full max-md:order-3">Traditional numerology for modern reflection.</p>
// //         <BookingButton label="Book a session" variant="outline" className="text-ivory border-[#8c704d]" />
// //       </div>
// //       <div className="grid grid-cols-3 max-w-[580px] gap-[60px] py-[45px] pb-[75px] max-md:max-w-none max-sm:gap-[18px]">
// //         {footerLinkGroups.map(([heading, links]) => (
// //           <div key={heading}>
// //             <span className="block text-gold uppercase tracking-[0.23em] text-[10px] leading-[1.5] mb-[20px]">{heading}</span>
// //             {links.map((link) => (
// //               <Link key={link} to={`/${link.toLowerCase().replace(/ /g, '-')}`} className="block text-[#d4bd9c] text-[11px] my-[11px] transition-colors duration-200 hover:text-bronze">{link}</Link>
// //             ))}
// //           </div>
// //         ))}
// //       </div>
// //       <div className="flex justify-between border-t border-[#634a30] pt-[20px] text-[#9b7c59] uppercase tracking-[0.12em] text-[8px] max-sm:flex-col max-sm:gap-[12px]">
// //         <span>© 2026 The Golden Numeralist</span>
// //         <span>Privacy · Terms · Disclaimer</span>
// //       </div>
// //     </footer>
// //   );
// // }







// import { Link } from 'react-router-dom';
// import { BookingButton } from './BookingButton';
// import { footerLinkGroups } from '@/data/siteData';

// export function Footer() {
//   return (
//     <footer
//       className="bg-[#FDFBF7] text-[#363637] pt-[80px] pb-[25px] px-[clamp(24px,8vw,130px)] max-sm:pt-[60px]"
//     >
//       {/* Top Footer */}
//       <div className="flex items-center gap-[40px] pb-[75px] border-b border-[#CDA66F] max-md:flex-wrap max-sm:gap-[25px]">
//         <Link
//           to="/"
//           className="flex flex-col leading-[0.95] tracking-[0.15em] whitespace-nowrap text-[14px] max-sm:text-[11px] font-serif font-medium text-[#363637]"
//         >
//           <span>THE GOLDEN NUMERALIST</span>

//           <small className="font-sans text-[#C5934D] text-[8px] max-sm:text-[7px] tracking-[0.34em] mt-[7px]">
//             BY NAMRATTAA LAL
//           </small>
//         </Link>

//         <p className="mx-auto text-[#87533E] font-serif text-[22px] max-md:m-0 max-md:w-full max-md:order-3">
//           Traditional numerology for modern reflection.
//         </p>

//         <BookingButton
//           label="Book a session"
//           variant="outline"
//           className="text-[#87533E] border-[#C5934D]"
//         />
//       </div>

//       {/* Footer Links */}
//       <div className="grid grid-cols-3 max-w-[580px] gap-[60px] py-[45px] pb-[75px] max-md:max-w-none max-sm:gap-[18px]">
//         {footerLinkGroups.map(([heading, links]) => (
//           <div key={heading}>
//             <span className="block text-[#C5934D] uppercase tracking-[0.23em] text-[10px] leading-[1.5] mb-[20px]">
//               {heading}
//             </span>

//             {links.map((link) => (
//               <Link
//                 key={link}
//                 to={`/${link.toLowerCase().replace(/ /g, '-')}`}
//                 className="block text-[#87533E] text-[11px] my-[11px] transition-colors duration-200 hover:text-[#C5934D]"
//               >
//                 {link}
//               </Link>
//             ))}
//           </div>
//         ))}
//       </div>

//       {/* Bottom Footer */}
//       <div className="flex justify-between border-t border-[#CDA66F] pt-[20px] text-[#87533E] uppercase tracking-[0.12em] text-[8px] max-sm:flex-col max-sm:gap-[12px]">
//         <span>© 2026 The Golden Numeralist</span>
//         <span>Privacy · Terms · Disclaimer</span>
//       </div>
//     </footer>
//   );
// }



import { Link } from 'react-router-dom';
import { BookingButton } from './BookingButton';
import { footerLinkGroups } from '@/data/siteData';

export function Footer() {
  return (
    <footer
      className="bg-[#87533E] text-[#FEFCF8] pt-[80px] pb-[25px] px-[clamp(24px,8vw,130px)] max-sm:pt-[60px]"
    >
      {/* Top Footer */}
      <div className="flex items-center gap-[40px] pb-[75px] border-b border-[#C5934D] max-md:flex-wrap max-sm:gap-[25px]">
        {/* Logo */}
        <Link
          to="/"
          className="flex flex-col leading-[0.95] tracking-[0.15em] whitespace-nowrap text-[14px] max-sm:text-[11px] font-serif font-medium text-[#FEFCF8]"
        >
          <span>THE GOLDEN NUMERALIST</span>

          <small className="font-sans text-[#CDA66F] text-[8px] max-sm:text-[7px] tracking-[0.34em] mt-[7px]">
            BY NAMRATTAA LAL
          </small>
        </Link>

        {/* Tagline */}
        <p className="mx-auto text-[#F2EFEB] font-serif text-[22px] max-md:m-0 max-md:w-full max-md:order-3">
          Traditional numerology for modern reflection.
        </p>

        {/* Booking Button */}
        <BookingButton
          label="Book a session"
          variant="outline"
          className="text-[#FEFCF8] border-[#C5934D] hover:bg-[#C5934D] hover:text-[#060606]"
        />
      </div>

      {/* Footer Links */}
      <div className="grid grid-cols-3 max-w-[580px] gap-[60px] py-[45px] pb-[75px] max-md:max-w-none max-sm:gap-[18px]">
        {footerLinkGroups.map(([heading, links]) => (
          <div key={heading}>
            {/* Heading */}
            <span className="block text-[#CDA66F] uppercase tracking-[0.23em] text-[10px] leading-[1.5] mb-[20px]">
              {heading}
            </span>

            {/* Links */}
            {links.map((link) => (
              <Link
                key={link}
                to={`/${link.toLowerCase().replace(/ /g, '-')}`}
                className="block text-[#F2EFEB] text-[11px] my-[11px] transition-colors duration-200 hover:text-[#CDA66F]"
              >
                {link}
              </Link>
            ))}
          </div>
        ))}
      </div>

      {/* Bottom Footer */}
      <div className="flex justify-between border-t border-[#C5934D] pt-[20px] text-[#CDA66F] uppercase tracking-[0.12em] text-[8px] max-sm:flex-col max-sm:gap-[12px]">
        <span>© 2026 The Golden Numeralist</span>

        <span>Privacy · Terms · Disclaimer</span>
      </div>
    </footer>
  );
}