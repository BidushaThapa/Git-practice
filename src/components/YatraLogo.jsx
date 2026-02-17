// // src/components/YatraLogo.jsx
// const YatraLogo = ({ size = 56 }) => (
//   <svg 
//     width={size} 
//     height={size} 
//     viewBox="0 0 56 56" 
//     fill="none" 
//     xmlns="http://www.w3.org/2000/svg"
//     className="hover:scale-105 transition-transform duration-300"
//   >
//     {/* Prayer Flags Line */}
//     <path 
//       d="M8 18 L48 12" 
//       stroke="#94A3B8" 
//       strokeWidth="1.5"
//       strokeDasharray="2 2"
//     />
    
//     {/* Prayer Flags - Traditional Colors (Blue, White, Red, Green, Yellow) */}
//     <rect x="10" y="12" width="5" height="6" fill="#3B82F6" opacity="0.9" />
//     <rect x="17" y="13" width="5" height="6" fill="#FFFFFF" stroke="#E5E7EB" opacity="0.9" />
//     <rect x="24" y="14" width="5" height="6" fill="#EF4444" opacity="0.9" />
//     <rect x="31" y="13" width="5" height="6" fill="#10B981" opacity="0.9" />
//     <rect x="38" y="12" width="5" height="6" fill="#FCD34D" opacity="0.9" />
    
//     {/* Main Mountain Peak (Tallest - Sharp Angular) */}
//     <path 
//       d="M28 16 L38 38 L18 38 Z" 
//       fill="url(#mountainGradient1)" 
//       stroke="#1E40AF" 
//       strokeWidth="2"
//       strokeLinejoin="miter"
//       strokeLinecap="square"
//     />
    
//     {/* Left Mountain Peak */}
//     <path 
//       d="M16 26 L26 44 L6 44 Z" 
//       fill="url(#mountainGradient2)" 
//       stroke="#6366F1" 
//       strokeWidth="1.8"
//       strokeLinejoin="miter"
//       strokeLinecap="square"
//     />
    
//     {/* Right Mountain Peak */}
//     <path 
//       d="M40 26 L50 44 L30 44 Z" 
//       fill="url(#mountainGradient3)" 
//       stroke="#7C3AED" 
//       strokeWidth="1.8"
//       strokeLinejoin="miter"
//       strokeLinecap="square"
//     />
    
//     {/* Snow Caps - Sharp Triangles */}
//     <path d="M28 16 L32 24 L24 24 Z" fill="white" opacity="0.9" />
//     <path d="M16 26 L19 32 L13 32 Z" fill="white" opacity="0.85" />
//     <path d="M40 26 L43 32 L37 32 Z" fill="white" opacity="0.85" />
    
//     <defs>
//       {/* Mountain Gradients */}
//       <linearGradient id="mountainGradient1" x1="28" y1="16" x2="28" y2="38">
//         <stop offset="0%" stopColor="#3B82F6" />
//         <stop offset="100%" stopColor="#1E40AF" />
//       </linearGradient>
      
//       <linearGradient id="mountainGradient2" x1="16" y1="26" x2="16" y2="44">
//         <stop offset="0%" stopColor="#6366F1" />
//         <stop offset="100%" stopColor="#4F46E5" />
//       </linearGradient>
      
//       <linearGradient id="mountainGradient3" x1="40" y1="26" x2="40" y2="44">
//         <stop offset="0%" stopColor="#8B5CF6" />
//         <stop offset="100%" stopColor="#7C3AED" />
//       </linearGradient>
//     </defs>
//   </svg>
// );

// export default YatraLogo;