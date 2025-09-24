



// import React, { useRef, useState } from 'react';
// import { motion } from 'framer-motion';
// import { useInView } from 'framer-motion';
// import { profile } from '@/data/profile'; // Assuming profile contains recommendations

// export const Recommendations: React.FC = () => {
//   const ref = useRef(null);
//   const isInView = useInView(ref, { once: true, margin: '-100px' });

//   const [isHovered, setIsHovered] = useState(false);

//   // Create a seamless loop by duplicating the cards in the DOM
//   const recommendations = [...profile.recommendations, ...profile.recommendations, ...profile.recommendations, ...profile.recommendations]; // Duplicate the recommendations array

//   return (
//     <section id="recommendations" className="py-10 bg-dark">
//       <div className="mx-auto max-w-10xl px-4 sm:px-6">
//         <motion.div
//           ref={ref}
//           initial={{ opacity: 0, y: 50 }}
//           animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
//           transition={{ duration: 0.8 }}
//           className="text-center mb-16"
//         >
//           <h2 className="text-3xl md:text-4xl font-bold text-ivory-mist mb-6">Recommendations</h2>
//           <div className="w-24 h-1 bg-gradient-primary mx-auto mb-8" />
//           <p className="text-slate-mute text-lg max-w-2xl mx-auto">
//             See what others have to say about me
//           </p>
//         </motion.div>

//         <div
//           className="relative overflow-hidden"
//           onMouseEnter={() => setIsHovered(true)}  // Pause carousel on hover
//           onMouseLeave={() => setIsHovered(false)}  // Resume carousel when hover is removed
//         >
//           {/* Carousel or Scrollable container */}
//           <div
//             className={`flex space-x-4 animate-scroll ${isHovered ? 'paused' : ''}`}  // Apply "paused" class on hover
//           >
//             {recommendations.map((rec, index) => (
//               <motion.div
//                 key={index}
//                 initial={{ opacity: 0, y: 30 }}
//                 animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
//                 transition={{ delay: index * 0.2 }}
//                 className="relative card-glow p-6 hover:scale-105 transition-elastic group w-[350px]" // Adjusted padding for height
//               >
//                 {/* Image and Name at the Top */}
//                 <div className="flex flex-col items-center space-y-2">
//                   <div className="w-28 h-28 md:w-36 md:h-36 rounded-full overflow-hidden mb-2"> {/* Increased image size */}
//                     <img
//                       src={rec.image}
//                       alt={rec.name}
//                       className="object-cover w-full h-full rounded-full"
//                     />
//                   </div>

//                   <h3 className="text-lg md:text-xl font-bold text-ivory-mist mb-1">{rec.name}</h3> {/* Adjusted text size */}
//                 </div>

//                 {/* Description at the Bottom */}
//                 <div className="flex-1">
//                   <p className="text-slate-mute text-sm mt-4">{rec.description}</p> {/* Adjusted text size */}
//                 </div>

//                 <div className="absolute top-4 right-4 w-2 h-2 bg-teal-accent rounded-full opacity-0 group-hover:opacity-100 transition-opacity pulse-glow" />
//                 <div className="absolute bottom-4 left-4 w-1.5 h-1.5 bg-royal-violet rounded-full opacity-0 group-hover:opacity-100 transition-opacity pulse-glow" />
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };



import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { profile } from '@/data/profile'; // Assuming profile contains recommendations

export const Recommendations: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const [isHovered, setIsHovered] = useState(false);

  // Create a seamless loop by duplicating the cards in the DOM
  const recommendations = [...profile.recommendations, ...profile.recommendations, ...profile.recommendations, ...profile.recommendations]; // Duplicate the recommendations array

  return (
    <section id="recommendations" className="py-10 bg-dark">
      <div className="mx-auto max-w-10xl px-4 sm:px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-ivory-mist mb-6">Recommendations</h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto mb-8" />
          <p className="text-slate-mute text-lg max-w-2xl mx-auto">
            See what others have to say about me
          </p>
        </motion.div>

        <div
          className="relative overflow-hidden"
          onMouseEnter={() => setIsHovered(true)}  // Pause carousel on hover
          onMouseLeave={() => setIsHovered(false)}  // Resume carousel when hover is removed
        >
          {/* Carousel or Scrollable container */}
          <div
            className={`flex space-x-4 animate-scroll ${isHovered ? 'paused' : ''}`}  // Apply "paused" class on hover
          >
            {recommendations.map((rec, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ delay: index * 0.2 }}
                className="relative card-glow p-6 hover:scale-105 transition-elastic group w-[500px] h-[450px]" // Increased width to 400px and decreased height to 250px
              >
                {/* Image and Name at the Top */}
                <div className="flex flex-col items-center space-y-2">
                  <div className="w-28 h-28 md:w-36 md:h-36 rounded-full overflow-hidden mb-2"> {/* Increased image size */}
                    <img
                      src={rec.image}
                      alt={rec.name}
                      className="object-cover w-full h-full rounded-full"
                    />
                  </div>

                  <h3 className="text-lg md:text-xl font-bold text-ivory-mist mb-1">{rec.name}</h3> {/* Adjusted text size */}
                </div>

                {/* Description at the Bottom */}
                <div className="flex-1">
                  <p className="text-slate-mute text-sm mt-4">{rec.description}</p> {/* Adjusted text size */}
                </div>

                <div className="absolute top-4 right-4 w-2 h-2 bg-teal-accent rounded-full opacity-0 group-hover:opacity-100 transition-opacity pulse-glow" />
                <div className="absolute bottom-4 left-4 w-1.5 h-1.5 bg-royal-violet rounded-full opacity-0 group-hover:opacity-100 transition-opacity pulse-glow" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
