// import React from "react";


// export function Navbar() {
    
//     return (
//         <div className="relative w-[414px] h-[896px] bg-[#fbfcfe] rounded-[40px]">
//             <div className="absolute w-[355px] h-[28px] top-[69px] left-[30px]">
//                 <div className="absolute top-[2px] left-[80px] [font-family:'Lato-Medium',Helvetica] font-medium text-[#1892fa] text-[24px] tracking-[0.48px] leading-[26.4px] whitespace-nowrap">
//                     MED CALENDAR
//                 </div>
//                 <img className="w-[18px] h-[14px] top-[5px] absolute left-0" alt="Icon" src="icon.svg" />
//                 <div className="absolute w-[18px] h-[24px] top-0 left-[335px]">
//                     <img className="w-[16px] h-[20px] top-[4px] absolute left-0" alt="Icon" src="image.svg" />
//                     <div className="w-[4px] h-[4px] left-[14px] bg-[#ff0000] rounded-[2px] absolute top-0" />
//                 </div>
//             </div>
//             <div className="absolute w-[375px] h-[44px] top-[-2px] left-[20px]">
//                 <img className="absolute w-[24px] h-[11px] top-[17px] left-[339px]" alt="Battery" src="battery.png" />
//                 <img className="absolute w-[15px] h-[11px] top-[17px] left-[320px]" alt="Wifi" src="wifi.svg" />
//                 <img
//                     className="absolute w-[17px] h-[11px] top-[18px] left-[298px]"
//                     alt="Mobile signal"
//                     src="mobile-signal.svg"
//                 />
//                 <div className="absolute w-[54px] h-[21px] top-[12px] left-[3px]">
//                     <div className="absolute w-[54px] h-[18px] top-px left-0 [font-family:'SFProText-Semibold',Helvetica] font-normal text-[#102a43] text-[15px] text-center tracking-[-0.30px] leading-[normal] whitespace-nowrap">
//                         9:41
//                     </div>
//                 </div>
//             </div>
//             <div className="absolute w-[193px] h-[112px] top-[131px] left-[7px]">
//                 <div className="absolute w-[193px] h-[112px] top-0 left-0">
//                     <div className="relative h-[112px]">
//                         <div className="w-[170px] top-[17px] left-[23px] bg-[#fa8072] absolute h-[95px] rounded-[10px] shadow-[0px_15px_30px_#e0e0eb66]" />
//                         <div className="w-[87px] h-[79px] left-0 bg-[#ff1a00] rounded-[43.27px/39.74px] opacity-10 absolute top-0" />
//                     </div>
//                 </div>
//                 <div className="absolute w-[91px] top-[25px] left-[64px] [font-family:'Lato-Black',Helvetica] font-black text-white text-[20px] text-center tracking-[0.80px] leading-[22.0px]">
//                     Mañana
//                 </div>
//                 <img className="absolute w-[46px] h-[46px] top-[56px] left-[87px]" alt="Vector" src="vector.svg" />
//             </div>
//             <div className="top-[562px] absolute w-[352px] h-[95px] left-[35px]">
//                 <div className="relative w-[378px] h-[110px] top-[-15px] left-[-28px]">
//                     <div className="w-[350px] top-[15px] left-[28px] bg-[#fa8072] absolute h-[95px] rounded-[10px] shadow-[0px_15px_30px_#e0e0eb66]" />
//                     <img className="w-[378px] absolute h-[110px] top-0 left-0" alt="Sg" src="SG-3.png" />
//                     <div className="absolute w-[187px] top-[51px] left-[111px] [font-family:'Lato-Black',Helvetica] font-black text-white text-[20px] text-center tracking-[0.80px] leading-[22.0px]">
//                         Calendario al mes
//                     </div>
//                 </div>
//             </div>
//             <div className="top-[680px] absolute w-[352px] h-[95px] left-[35px]">
//                 <div className="relative w-[378px] h-[110px] top-[-15px] left-[-28px]">
//                     <div className="w-[350px] top-[15px] left-[28px] bg-[#fa8072] absolute h-[95px] rounded-[10px] shadow-[0px_15px_30px_#e0e0eb66]" />
//                     <img className="w-[378px] absolute h-[110px] top-0 left-0" alt="Sg" src="SG-4.png" />
//                     <div className="absolute w-[187px] top-[51px] left-[111px] [font-family:'Lato-Black',Helvetica] font-black text-white text-[20px] text-center tracking-[0.80px] leading-[22.0px]">
//                         Dia
//                     </div>
//                 </div>
//             </div>
//             <div className="absolute w-[172px] h-[95px] top-[261px] left-[30px]">
//                 <div className="absolute w-[172px] h-[95px] top-0 left-0">
//                     <div className="relative w-[193px] h-[110px] top-[-15px] left-[-23px]">
//                         <div className="w-[170px] top-[15px] left-[23px] bg-[#9370db] absolute h-[95px] rounded-[10px] shadow-[0px_15px_30px_#e0e0eb66]" />
//                         <img className="w-[193px] absolute h-[110px] top-0 left-0" alt="Sg" src="SG.png" />
//                         <div className="absolute w-[79px] top-[29px] left-[70px] [font-family:'Lato-Black',Helvetica] font-black text-white text-[20px] text-center tracking-[0.80px] leading-[22.0px]">
//                             Noche
//                         </div>
//                     </div>
//                 </div>
//                 <img className="absolute w-[32px] h-[43px] top-[40px] left-[71px]" alt="Frame" src="frame-7.svg" />
//             </div>
//             <div className="absolute w-[172px] h-[95px] top-[261px] left-[215px]">
//                 <div className="absolute w-[172px] h-[95px] top-0 left-0">
//                     <div className="relative w-[193px] h-[110px] top-[-15px] left-[-23px]">
//                         <div className="w-[170px] top-[15px] left-[23px] bg-[#00bfff] absolute h-[95px] rounded-[10px] shadow-[0px_15px_30px_#e0e0eb66]" />
//                         <img className="w-[193px] absolute h-[110px] top-0 left-0" alt="Sg" src="image.png" />
//                         <div className="absolute w-[129px] top-[22px] left-[45px] [font-family:'Lato-Black',Helvetica] font-black text-white text-[20px] text-center tracking-[0.80px] leading-[22.0px]">
//                             Solo cuando lo necesite
//                         </div>
//                     </div>
//                 </div>
//                 <img className="absolute w-[35px] h-[28px] top-[58px] left-[71px]" alt="Frame" src="frame.svg" />
//             </div>
//             <div className="absolute w-[172px] h-[95px] top-[148px] left-[215px]">
//                 <div className="absolute w-[172px] h-[95px] top-0 left-0">
//                     <div className="relative w-[194px] h-[110px] top-[-15px] left-[-24px]">
//                         <div className="w-[170px] top-[15px] left-[24px] bg-[#00ced1] absolute h-[95px] rounded-[10px] shadow-[0px_15px_30px_#e0e0eb66]" />
//                         <img className="w-[193px] absolute h-[110px] top-0 left-0" alt="Sg" src="SG-2.png" />
//                         <div className="absolute w-[102px] top-[24px] left-[59px] [font-family:'Lato-Black',Helvetica] font-black text-white text-[20px] text-center tracking-[0.80px] leading-[22.0px]">
//                             Tarde
//                         </div>
//                     </div>
//                 </div>
//                 <img className="absolute w-[57px] h-[46px] top-[39px] left-[61px]" alt="Frame" src="frame-6.svg" />
//             </div>
//             <div className="absolute top-[109px] left-[30px] [font-family:'Lato-Bold',Helvetica] font-bold text-[#102a43] text-[15px] tracking-[0.60px] leading-[16.5px] whitespace-nowrap">
//                 Etapas Del Dia
//             </div>
//             <div className="absolute top-[382px] left-[35px] [font-family:'Lato-Bold',Helvetica] font-bold text-[#102a43] text-[15px] tracking-[0.60px] leading-[16.5px] whitespace-nowrap">
//                 Agregar O Actualizar
//             </div>
//             <div className="absolute top-[529px] left-[35px] [font-family:'Lato-Bold',Helvetica] font-bold text-[#102a43] text-[15px] tracking-[0.60px] leading-[16.5px] whitespace-nowrap">
//                 Vista de medicinas
//             </div>
//             <div className="absolute w-[278px] h-[90px] top-[413px] left-[35px] rounded-[10px] shadow-[0px_15px_30px_#e0e0ec66] [background:linear-gradient(180deg,rgba(243,149,186,0.8)_0%,rgba(254,209,130,0.8)_100%)]">
//                 <div className="absolute top-[22px] left-[72px] [font-family:'Lato-Bold',Helvetica] font-bold text-[#235b7d] text-[12px] tracking-[0.50px] leading-[normal] whitespace-nowrap">
//                     Agregar medicina
//                 </div>
               
//                 <div className="absolute top-[40px] left-[72px] [font-family:'Lato-Regular',Helvetica] font-normal text-[#235b7d] text-[8px] tracking-[0.32px] leading-[8.8px] whitespace-nowrap">
//                     Añade un nuevo medicamento
//                 </div>
//                 <img className="absolute w-[38px] h-[51px] top-[15px] left-[21px]" alt="Frame" src="frame-2.svg" />
//             </div>
//             <div className="absolute w-[82px] h-[90px] top-[413px] left-[332px] rounded-[10px_0px_0px_10px] shadow-[0px_15px_30px_#e0e0ec66] [background:linear-gradient(180deg,rgb(188,209,255)_0%,rgb(156,187,255)_100%)]">
//                 <img className="absolute w-[39px] h-[45px] top-[19px] left-[13px]" alt="Frame" src="frame-5.svg" />
//             </div>
//             <div className="absolute w-[414px] h-[99px] top-[797px] left-0 bg-white-1 shadow-[0px_-20px_30px_#d7d7d733]">
//                 <div className="relative w-[337px] h-[57px] top-[20px] left-[39px]">
//                     <div className="absolute w-[337px] h-[44px] top-0 left-0">
//                         <img className="absolute w-[27px] h-[27px] top-[9px] left-[16px]" alt="Iconly light home" src="home.svg" />
//                         <img className="absolute w-[18px] h-[24px] top-[12px] left-[203px]" alt="Vector" src="vector-2.svg" />
//                         <img className="absolute w-[24px] h-[24px] top-[12px] left-[297px]" alt="Frame" src="frame-3.svg" />
//                         <img className="absolute w-[20px] h-[24px] top-[12px] left-[110px]" alt="Frame" src="frame-4.svg" />
//                     </div>
//                     <div className="absolute top-[43px] left-[15px] opacity-90 [font-family:'Lato-SemiBold',Helvetica] font-semibold text-[#1892fa] text-[12px] text-center tracking-[0] leading-[normal] whitespace-nowrap">
//                         Inicio
//                     </div>
//                     <div className="absolute h-[14px] top-[43px] left-[90px] opacity-90 [font-family:'Lato-SemiBold',Helvetica] font-semibold text-[#102a43] text-[12px] text-center tracking-[0] leading-[normal] whitespace-nowrap">
//                         Calendario
//                     </div>
//                     <div className="absolute h-[14px] top-[43px] left-[187px] opacity-90 [font-family:'Lato-SemiBold',Helvetica] font-semibold text-[#102a43] text-[12px] text-center tracking-[0] leading-[normal] whitespace-nowrap">
//                         Medicinas
//                     </div>
//                     <div className="absolute h-[14px] top-[43px] left-[290px] opacity-90 [font-family:'Lato-SemiBold',Helvetica] font-semibold text-[#102a43] text-[12px] text-center tracking-[0] leading-[normal] whitespace-nowrap">
//                         Cuenta
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };
