import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { ExternalLink, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { profile } from '@/data/profile';

// Import project images
import project1 from '@/assets/project-1.jpg';
import project2 from '@/assets/project-2.jpg';
import project3 from '@/assets/project-3.jpg';
import project4 from '@/assets/project-4.jpg';
import project5 from '@/assets/project-5.jpg';
import project6 from '@/assets/project-6.jpg';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const projectImages = [project1, project2, project3, project4, project5, project6];

export const Projects: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const projectsWithImages = profile.projects.map((project, index) => ({
    ...project,
    image: projectImages[index] || projectImages[0]
  }));

  return (
    <section id="projects" className="py-20 bg-gradient-subtle relative overflow-hidden">
      {/* Parallax background stripes */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-primary transform -skew-y-1" />
        <div className="absolute bottom-0 right-0 w-full h-2 bg-gradient-primary transform skew-y-1" />
      </div>
      
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-ivory-mist mb-6">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto mb-8" />
          <p className="text-slate-mute text-lg max-w-2xl mx-auto">
            Showcasing impactful AI/ML solutions that delivered measurable business outcomes
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ delay: 0.3 }}
          className="relative"
        >
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            navigation={{
              nextEl: '.swiper-button-next-custom',
              prevEl: '.swiper-button-prev-custom',
            }}
            pagination={{
              clickable: true,
              dynamicBullets: true,
            }}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 2 },
              1280: { slidesPerView: 3 },
            }}
            className="pb-12"
          >
            {projectsWithImages.map((project, index) => (
              <SwiperSlide key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  className="card-glow h-full group cursor-pointer"
                >
                  {/* Project Image */}
                  <div className="relative overflow-hidden rounded-t-xl">
                    <img
                      src={project.image}
                      alt={`${project.title} - AI/ML project demonstration`}
                      className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink-navy via-transparent to-transparent opacity-60" />
                    
                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
                  </div>

                  {/* Project Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-ivory-mist mb-3 group-hover:text-teal-accent transition-smooth">
                      {project.title}
                    </h3>
                    
                    <p className="text-slate-mute text-sm leading-relaxed mb-4 line-clamp-3">
                      {project.description}
                    </p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies.slice(0, 4).map((tech, techIndex) => (
                        <motion.span
                          key={tech}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                          transition={{ delay: 0.7 + index * 0.1 + techIndex * 0.05 }}
                          className="px-2 py-1 bg-teal-accent/20 text-teal-accent text-xs font-medium rounded border border-teal-accent/30 hover:bg-teal-accent/30 transition-smooth"
                        >
                          {tech}
                        </motion.span>
                      ))}
                      {project.technologies.length > 4 && (
                        <span className="px-2 py-1 bg-slate-mute/20 text-slate-mute text-xs font-medium rounded">
                          +{project.technologies.length - 4}
                        </span>
                      )}
                    </div>

                    {/* Action Buttons */}
                    {/* <div className="flex gap-3">
                      <Button
                        size="sm"
                        className="flex-1 bg-teal-accent hover:bg-teal-accent/90 text-ink-navy font-medium transition-smooth focus-ring"
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Preview
                      </Button>
                      
                      <Button
                        variant="outline"
                        size="sm"
                        className="border-slate-mute text-slate-mute hover:border-royal-violet hover:text-royal-violet transition-smooth focus-ring"
                      >
                        <Github className="w-4 h-4" />
                      </Button>
                    </div> */}
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Navigation Buttons */}
          <div className="flex justify-center space-x-4 mt-8">
            <button
              className="swiper-button-prev-custom w-12 h-12 rounded-full bg-charcoal border border-border/20 text-slate-mute bg-teal-accent hover:text-ink-navy transition-smooth focus-ring flex items-center justify-center"
              aria-label="Previous project"
            >
              ←
            </button>
            <button
              className="swiper-button-next-custom w-12 h-12 rounded-full bg-charcoal border border-border/20 text-slate-mute bg-teal-accent hover:text-ink-navy transition-smooth focus-ring flex items-center justify-center"
              aria-label="Next project"
            >
              →
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};