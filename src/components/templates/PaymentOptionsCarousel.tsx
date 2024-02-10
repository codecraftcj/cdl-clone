// // PaymentOptionsCarousel.js
// import Slider from 'react-slick';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';

// const PaymentOptionsCarousel = () => {
//   const settings = {
//     dots: true,
//     infinite: false,
//     speed: 500,
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     responsive: [
//       {
//         breakpoint: 1024,
//         settings: {
//           slidesToShow: 3,
//           slidesToScroll: 1,
//           infinite: true,
//           dots: true
//         }
//       },
//       {
//         breakpoint: 600,
//         settings: {
//           slidesToShow: 2,
//           slidesToScroll: 1,
//           initialSlide: 2
//         }
//       },
//       {
//         breakpoint: 480,
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll: 1
//         }
//       }
//     ]
//   };

//   return (
//     <div className="container mx-auto px-4">
//       <Slider {...settings}>
//         {/* Repeat this <div> block for each payment option */}
//         <div className="p-4">
//           <div className="h-40 flex justify-center items-center border border-gray-200 rounded-lg shadow-lg">
//             <p>Payment Option 1</p>
//           </div>
//         </div>
//         <div className="p-4">
//           <div className="h-40 flex justify-center items-center border border-gray-200 rounded-lg shadow-lg">
//             <p>Payment Option 2</p>
//           </div>
//         </div>
//         <div className="p-4">
//           <div className="h-40 flex justify-center items-center border border-gray-200 rounded-lg shadow-lg">
//             <p>Payment Option 3</p>
//           </div>
//         </div>
//         {/* Add or remove options as needed */}
//       </Slider>
//     </div>
//   );
// };

// export default PaymentOptionsCarousel;
