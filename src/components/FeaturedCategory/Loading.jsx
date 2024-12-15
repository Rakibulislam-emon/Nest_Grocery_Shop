// export default function Loader() {
//     return (
//       /* Fullscreen loader with backdrop blur */
//       <div className="flex justify-center items-center h-screen backdrop-blur-md bg-white/60">
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full max-w-screen-xl p-4">
//           {/* Skeleton Loader for Product Cards */}
//           {[...Array(8)].map((_, index) => (
//             <div
//               key={index}
//               className="flex flex-col bg-neutral-300 animate-pulse rounded-xl p-4 gap-4 shadow-lg"
//             >
//               {/* Image Skeleton */}
//               <div className="bg-neutral-400/50 w-full h-48 rounded-md"></div>
//               <div className="flex flex-col gap-2 mt-4">
//                 {/* Title Skeleton */}
//                 <div className="bg-neutral-400/50 w-full h-5 rounded-md"></div>
//                 {/* Description Skeleton */}
//                 <div className="bg-neutral-400/50 w-3/4 h-4 rounded-md"></div>
//                 {/* Price Skeleton */}
//                 <div className="bg-neutral-400/50 w-1/2 h-4 rounded-md"></div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     );
//   }
  

import React from 'react'

export default function loader() {
    return (
      <div className="h-screen flex items-baseline w-full justify-center">
        <p>Loading...</p>
      </div>
    );
  }
  