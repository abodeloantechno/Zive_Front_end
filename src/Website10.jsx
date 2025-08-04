import React, { useState, useEffect, useRef } from 'react';
import { Play, Pause, Volume2, VolumeX, Maximize, RotateCcw } from 'lucide-react';

const VideoShutterScroll = () => {
  const [scrollY, setScrollY] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(1);
  const [isMuted, setIsMuted] = useState(true);
  const [showControls, setShowControls] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  
  const videoRef = useRef(null);
  const containerRef = useRef(null);
  const controlsTimeoutRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Calculate scroll progress for video expansion with smoother timing
  const containerTop = containerRef.current?.offsetTop || 0;
  const relativeScroll = Math.max(0, scrollY - containerTop);
  const scrollProgress = Math.min(relativeScroll / (window.innerHeight * 0.3), 1);
  
  // Apply easing function for smoother animation
  const easeInOutCubic = (t) => t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
  const easedProgress = easeInOutCubic(scrollProgress);
  
  // Video height starts as thin line (4px) and expands to smaller viewport height
  const videoHeight = 6 + (easedProgress * (window.innerHeight * 0.6));
  
  // Video width expansion - starts narrow, becomes smaller full width
  const videoWidthPercent = 40 + (easedProgress * 50);

  // Auto-play video when expansion starts with smoother triggers
  useEffect(() => {
    if (videoRef.current) {
      if (easedProgress > 0.05 && !isPlaying) {
        videoRef.current.play().catch(() => {});
        setIsPlaying(true);
      } else if (easedProgress <= 0.05 && isPlaying) {
        videoRef.current.pause();
        setIsPlaying(false);
      }
    }
  }, [easedProgress]);

  // Video event handlers
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleTimeUpdate = () => setCurrentTime(video.currentTime);
    const handleDurationChange = () => setDuration(video.duration);
    const handlePlay = () => setIsPlaying(true);
    const handlePause = () => setIsPlaying(false);

    video.addEventListener('timeupdate', handleTimeUpdate);
    video.addEventListener('durationchange', handleDurationChange);
    video.addEventListener('play', handlePlay);
    video.addEventListener('pause', handlePause);

    return () => {
      video.removeEventListener('timeupdate', handleTimeUpdate);
      video.removeEventListener('durationchange', handleDurationChange);
      video.removeEventListener('play', handlePlay);
      video.removeEventListener('pause', handlePause);
    };
  }, []);

  // Controls visibility
  const handleMouseEnter = () => {
    setShowControls(true);
    if (controlsTimeoutRef.current) {
      clearTimeout(controlsTimeoutRef.current);
    }
  };

  const handleMouseLeave = () => {
    controlsTimeoutRef.current = setTimeout(() => {
      if (!isFullscreen) {
        setShowControls(false);
      }
    }, 2000);
  };

  const handleMouseMove = () => {
    setShowControls(true);
    if (controlsTimeoutRef.current) {
      clearTimeout(controlsTimeoutRef.current);
    }
    controlsTimeoutRef.current = setTimeout(() => {
      if (!isFullscreen) {
        setShowControls(false);
      }
    }, 2000);
  };

  // Control handlers
  const togglePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
    }
  };

  const handleProgressClick = (e) => {
    if (videoRef.current && duration) {
      const rect = e.currentTarget.getBoundingClientRect();
      const clickX = e.clientX - rect.left;
      const clickRatio = clickX / rect.width;
      const newTime = clickRatio * duration;
      videoRef.current.currentTime = newTime;
    }
  };

  const handleVolumeChange = (e) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    if (videoRef.current) {
      videoRef.current.volume = newVolume;
      videoRef.current.muted = newVolume === 0;
      setIsMuted(newVolume === 0);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      const newMutedState = !isMuted;
      videoRef.current.muted = newMutedState;
      setIsMuted(newMutedState);
      if (newMutedState) {
        videoRef.current.volume = 0;
        setVolume(0);
      } else {
        videoRef.current.volume = volume || 0.5;
        setVolume(volume || 0.5);
      }
    }
  };

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      containerRef.current?.requestFullscreen();
      setIsFullscreen(true);
    } else {
      document.exitFullscreen();
      setIsFullscreen(false);
    }
  };

  const restart = () => {
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play();
    }
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  const progressPercent = duration ? (currentTime / duration) * 100 : 0;

  return (
    <div className="min-h-[300vh] bg-stone-200">
      {/* Main shutter container */}
      <div ref={containerRef} className="relative min-h-screen bg-stone-200">
        
        {/* Text content - always visible */}
        <div className="relative z-20 flex flex-col items-center justify-center min-h-screen px-8">
          <div className="text-center max-w-6xl py-8">
           
            
            <h1 className="text-4xl md:text-6xl lg:text-8xl font-black text-gray-800 leading-none tracking-tight mb-6">
              PRODUCTION STUDIO
            </h1>
            <h2 className="text-2xl md:text-3xl lg:text-5xl font-black text-gray-800 leading-none tracking-tight mb-10">
              AUDIOVISUAL & CINEMA,
            </h2>
            
            {/* Video container with controls */}
            <div className="relative w-full flex justify-center mb-6">
              <div 
                className="bg-black transition-all duration-700 ease-out overflow-hidden rounded-sm relative group"
                style={{
                  width: `${videoWidthPercent}%`,
                  height: `${videoHeight}px`,
                  maxHeight: '60vh', // Reduced from 80vh to 60vh
                }}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                onMouseMove={handleMouseMove}
              >
                <video
                  ref={videoRef}
                  className="w-full h-full object-cover"
                  muted={isMuted}
                  loop
                  playsInline
                  preload="metadata"
                  onClick={togglePlayPause}
                >
                  <source src="https://ik.imagekit.io/psltlu4ds/Black%20and%20Orange%20Modern%20Welcome%20to%20My%20Channel%20Video%20(2).mp4?updatedAt=1731047140509" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>

                {/* Video Controls Overlay */}
                {videoHeight > 100 && (
                  <div className={`absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent transition-opacity duration-300 ${showControls ? 'opacity-100' : 'opacity-0'}`}>
                    
                    {/* Center Play/Pause Button */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <button
                        onClick={togglePlayPause}
                        className="bg-black/70 hover:bg-black/90 text-white rounded-full p-4 transition-all duration-200 hover:scale-110"
                      >
                        {isPlaying ? (
                          <Pause className="w-8 h-8" />
                        ) : (
                          <Play className="w-8 h-8 ml-1" />
                        )}
                      </button>
                    </div>

                    {/* Bottom Controls Bar */}
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      {/* Progress Bar */}
                      <div 
                        className="w-full h-1 bg-white/30 rounded-full mb-3 cursor-pointer hover:h-2 transition-all duration-200"
                        onClick={handleProgressClick}
                      >
                        <div 
                          className="h-full bg-red-600 rounded-full transition-all duration-100"
                          style={{ width: `${progressPercent}%` }}
                        />
                      </div>

                      {/* Control Buttons */}
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          {/* Play/Pause */}
                          <button
                            onClick={togglePlayPause}
                            className="text-white hover:text-red-400 transition-colors"
                          >
                            {isPlaying ? (
                              <Pause className="w-6 h-6" />
                            ) : (
                              <Play className="w-6 h-6" />
                            )}
                          </button>

                          {/* Restart */}
                          <button
                            onClick={restart}
                            className="text-white hover:text-red-400 transition-colors"
                          >
                            <RotateCcw className="w-5 h-5" />
                          </button>

                          {/* Volume Controls */}
                          <div className="flex items-center space-x-2">
                            <button
                              onClick={toggleMute}
                              className="text-white hover:text-red-400 transition-colors"
                            >
                              {isMuted ? (
                                <VolumeX className="w-5 h-5" />
                              ) : (
                                <Volume2 className="w-5 h-5" />
                              )}
                            </button>
                            <input
                              type="range"
                              min="0"
                              max="1"
                              step="0.1"
                              value={volume}
                              onChange={handleVolumeChange}
                              className="w-16 h-1 bg-white/30 rounded-lg appearance-none slider"
                              style={{
                                background: `linear-gradient(to right, #dc2626 0%, #dc2626 ${volume * 100}%, rgba(255,255,255,0.3) ${volume * 100}%, rgba(255,255,255,0.3) 100%)`
                              }}
                            />
                          </div>

                          {/* Time Display */}
                          <span className="text-white text-sm">
                            {formatTime(currentTime)} / {formatTime(duration)}
                          </span>
                        </div>

                        {/* Right side controls */}
                        <div className="flex items-center space-x-3">
                          {/* Fullscreen */}
                          <button
                            onClick={toggleFullscreen}
                            className="text-white hover:text-red-400 transition-colors"
                          >
                            <Maximize className="w-5 h-5" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
            
            <h3 className="text-2xl md:text-3xl lg:text-5xl font-black text-gray-800 leading-none tracking-tight mb-4">
              & POST-PRODUCTION LAB
            </h3>
            
            <div className="flex items-center justify-center space-x-4">
              <div className="w-0 h-0 border-l-[15px] border-l-gray-800 border-t-[9px] border-t-transparent border-b-[9px] border-b-transparent"></div>
              <span className="text-xl md:text-2xl lg:text-4xl font-black text-gray-800 tracking-tight">
                BASED IN REUNION
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Content sections that come after the video expansion */}
      <div className="relative z-30 bg-white">
        <div className="p-8 md:p-16">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-8">
              About Our Studio
            </h1>
            <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
              <p className="mb-6">
                Welcome to our production studio, where creativity meets cutting-edge technology. 
                We specialize in audiovisual content creation and post-production services, 
                bringing your vision to life with professional expertise and artistic flair.
              </p>
              <p className="mb-6">
                Based in Reunion, our team combines local insights with global standards to 
                deliver exceptional results. From concept development to final delivery, 
                we handle every aspect of your project with meticulous attention to detail.
              </p>
              <p className="mb-6">
                Our state-of-the-art facilities and experienced professionals ensure that 
                every project receives the highest quality treatment, whether it's a 
                commercial advertisement, documentary, or creative content piece.
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero natus, 
                in nostrum aut sint, maiores ut minima tenetur accusantium illum quae 
                aspernatur? Tempora, aliquid dolore. Voluptates dolorem ipsa libero, 
                voluptatem sint possimus doloremque dolores earum asperiores magnam ad 
                laboriosam, est nulla, et autem a qui nisi ea! Ex, rerum itaque?
              </p>
            </div>
          </div>
        </div>
        
        {/* Additional content */}
        <div className="bg-gray-50 p-8 md:p-16">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Our Services
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Video Production</h3>
                <p className="text-gray-600">
                  From pre-production planning to filming and directing, we handle every 
                  aspect of video creation with professional equipment and experienced crew.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Post-Production</h3>
                <p className="text-gray-600">
                  Our post-production lab features advanced editing suites, color grading, 
                  sound design, and visual effects capabilities for polished final products.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* More content for scrolling */}
        <div className="bg-white p-8 md:p-16">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Our Process
            </h2>
            <p className="text-gray-600 mb-8">
              We follow a structured approach to ensure every project meets our high standards 
              and exceeds client expectations.
            </p>
            <div className="space-y-6">
              <div>
                <h4 className="text-lg font-semibold text-gray-800 mb-2">1. Consultation</h4>
                <p className="text-gray-600">
                  We begin with a detailed consultation to understand your vision, goals, and requirements.
                </p>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-800 mb-2">2. Pre-Production</h4>
                <p className="text-gray-600">
                  Planning, scripting, storyboarding, and preparation ensure smooth production.
                </p>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-800 mb-2">3. Production</h4>
                <p className="text-gray-600">
                  Professional filming with state-of-the-art equipment and experienced crew.
                </p>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-800 mb-2">4. Post-Production</h4>
                <p className="text-gray-600">
                  Editing, editing, color grading, sound design, and final delivery of your project.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Final section */}
        <div className="bg-gray-900 text-white p-8 md:p-16">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Contact us today to discuss your vision and see how we can bring it to life.
            </p>
            <button className="bg-white text-gray-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Get In Touch
            </button>
          </div>
        </div>
      </div>

      <style jsx>{`
        .slider::-webkit-slider-thumb {
          appearance: none;
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background: #dc2626;
          cursor: pointer;
        }
        .slider::-moz-range-thumb {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background: #dc2626;
          cursor: pointer;
          border: none;
        }
      `}</style>
    </div>
  );
};

export default VideoShutterScroll;