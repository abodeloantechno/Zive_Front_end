import React, { useState, useEffect, useRef } from 'react';

const Gallery = () => {
    const [rotation, setRotation] = useState(0);
    const [isHovered, setIsHovered] = useState(false);
    const animationRef = useRef();
    const lastTimeRef = useRef(0);

    

    // useEffect(() => {
    //     const animate = (currentTime) => {
    //         if (currentTime - lastTimeRef.current >= 16) { // ~60fps
    //             setRotation(prev => prev + 0.5);
    //             lastTimeRef.current = currentTime;
    //         }
    //         animationRef.current = requestAnimationFrame(animate);
    //     };

    //     animationRef.current = requestAnimationFrame(animate);

    //     return () => {
    //         if (animationRef.current) {
    //             cancelAnimationFrame(animationRef.current);
    //         }
    //     };
    // }, []);

    const handlePlanetHover = (isHovering) => {
        setIsHovered(isHovering);
    };

    useEffect(() => {
        const animate = (currentTime) => {
            if (currentTime - lastTimeRef.current >= 16) { // ~60fps
                if (!isHovered) {
                    setRotation(prev => prev + 0.5);
                }
                lastTimeRef.current = currentTime;
            }
            animationRef.current = requestAnimationFrame(animate);
        };
    
        animationRef.current = requestAnimationFrame(animate);
    
        return () => {
            if (animationRef.current) {
                cancelAnimationFrame(animationRef.current);
            }
        };
    }, [isHovered]); // Added isHovered to dependency array

    const planets = [
        {
            name: 'Meditation',
            color: 'bg-red-500',
            glowColor: 'shadow-red-500/50',
            size: 'w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12',
            orbit: { mobile: 50, tablet: 65, desktop: 80 },
            speed: 1.2,
            image: 'https://ik.imagekit.io/psltlu4ds/pngwing.com%20(8).png?updatedAt=1753864053384',
            description: 'Mental Wellness & Mindfulness'
        },
        {
            name: 'Nutrition',
            color: 'bg-green-500',
            glowColor: 'shadow-green-500/50',
            size: 'w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12',
            orbit: { mobile: 80, tablet: 105, desktop: 130 },
            speed: 0.8,
            image: 'https://ik.imagekit.io/psltlu4ds/pngwing.com%20(9).png?updatedAt=1753864537490',
            description: 'Healthy Eating & Diet'
        },
        {
            name: 'Fitness',
            color: 'bg-white',
            glowColor: 'shadow-white/50',
            size: 'w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12',
            orbit: { mobile: 110, tablet: 145, desktop: 180 },
            speed: 0.6,
            image: 'https://ik.imagekit.io/psltlu4ds/pngwing.com%20(11).png?updatedAt=1753864863758',
            description: 'Physical Training & Exercise'
        }
    ];

    const getOrbitSize = (planet) => {
        if (typeof window !== 'undefined') {
            if (window.innerWidth < 640) return planet.orbit.mobile;
            if (window.innerWidth < 1024) return planet.orbit.tablet;
            return planet.orbit.desktop;
        }
        return planet.orbit.desktop;
    };

    const getPlanetPosition = (planet, speed, index) => {
        const orbit = getOrbitSize(planet);
        const angle = (rotation * speed + index * 120) * (Math.PI / 180);
        const x = Math.cos(angle) * orbit;
        const y = Math.sin(angle) * orbit;
        return { x, y };
    };

    return (
        <div id="home" className=" max-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
        
            {/* Stars background */}
            <div className="bg-gradient-to-r from-cyan-400/20 via-yellow-400/20 to-pink-500/20 absolute inset-0"></div>

            {/* Solar System Container */}
            <div className="flex  items-center justify-center p-40  md:p-24 lg:p-30">
                <div className="relative w-80 h-80 sm:w-96 sm:h-96 md:w-[500px] md:h-[500px] lg:w-[600px] lg:h-[600px] xl:w-[700px] xl:h-[700px]">

                    {/* Orbit rings */}
                    {planets.map((planet, index) => {
                        const orbit = getOrbitSize(planet);
                        return (
                            <div
                                key={`orbit-${index}`}
                                className="absolute border border-white/20 sm:border-white/30 rounded-full"
                                style={{
                                    width: `${orbit * 2}px`,
                                    height: `${orbit * 2}px`,
                                    left: '50%',
                                    top: '50%',
                                    transform: 'translate(-50%, -50%)',
                                    willChange: 'transform'
                                }}
                            />
                        );
                    })}

                    {/* Central Sun - ZiveFitness */}
                    <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
                        <div className="relative">
                            {/* Sun glow effect */}
                            <div className="absolute inset-0 w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 bg-white rounded-full blur-lg sm:blur-xl opacity-60 animate-pulse"></div>

                            {/* Sun body */}
                            <div className="relative w-10 h-10 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-20 lg:h-20 rounded-full flex items-center justify-center shadow-2xl overflow-hidden">
                                <img
                                    src="https://ik.imagekit.io/psltlu4ds/zive_sollar_system.jpg?updatedAt=1753892418099"
                                    alt="ZIVE Logo"
                                    className="w-full h-full object-cover rounded-full"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Planets */}
                    {planets.map((planet, index) => {
                        const position = getPlanetPosition(planet, planet.speed, index);
                        return (
                            <div
                                key={planet.name}
                                className="absolute"
                                style={{
                                    left: '50%',
                                    top: '50%',
                                    transform: `translate(calc(-50% + ${position.x}px), calc(-50% + ${position.y}px))`,
                                    willChange: 'transform'
                                }}
                                onMouseEnter={() => handlePlanetHover(true)}
    onMouseLeave={() => handlePlanetHover(false)}
                            >
                                {/* Planet glow */}
                                <div className={`absolute inset-0 ${planet.size} ${planet.color} rounded-full blur-sm sm:blur-md opacity-50`}></div>

                                {/* Planet body with tooltip */}
                                <div className={`relative ${planet.size} rounded-full flex items-center justify-center shadow-2xl ${planet.glowColor} cursor-pointer hover:scale-110 sm:hover:scale-125 hover:brightness-110 transition-all duration-300 group bg-gradient-to-br from-white/20 to-white/10 border border-white/30 sm:border-2 hover:border-white/60`}>
                                    <img
                                        src={planet.image}
                                        alt={planet.name}
                                        className="w-4/5 h-4/5 object-contain"
                                    />

                                    {/* Mobile/Tablet Tooltip - appears at top */}
                                    <div className="sm:hidden fixed top-4 left-1/2 transform -translate-x-1/2 bg-black/90 text-white px-4 py-3 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none z-50 shadow-2xl">
                                        <div className="font-bold text-center mb-1">{planet.name}</div>
                                        <div className="text-xs text-blue-200 text-center">{planet.description}</div>
                                    </div>

                                    {/* Desktop Tooltip */}
                                    <div className="hidden sm:block fixed top-4 left-1/2 transform -translate-x-1/2 bg-black/80 text-white px-6 py-4 rounded-xl text-base whitespace-nowrap opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none z-50 shadow-2xl">
                                        <div className="font-bold text-center mb-2 text-xl">{planet.name}</div>
                                        <div className="text-sm text-blue-200 text-center font-medium">{planet.description}</div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>

            {/* Title and Description */}
            <div className="absolute top-30 md:top-20 lg:top-25 left-1/2 transform -translate-x-1/2 text-center px-4 w-full">
                <h1 className="text-lg sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-2 sm:mb-4 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 bg-clip-text text-transparent">
                    ZyveFit Solar System
                </h1>
                <p className="text-gray-300 text-xs sm:text-sm md:text-base lg:text-lg max-w-xs sm:max-w-sm md:max-w-lg lg:max-w-2xl xl:max-w-3xl mx-auto leading-relaxed">
                    A holistic wellness universe where Meditation, Nutrition, and Fitness orbit around your health journey
                </p>
            </div>

            <div className=" absolute bottom-4 sm:bottom-6 left-2 sm:left-4 md:left-6 lg:left-8 bg-black/70 sm:bg-black/60 backdrop-blur-lg rounded-lg p-3 sm:p-4 text-white text-xs sm:text-sm max-w-xs animate-[slideUp_1.8s_ease-out] z-40">
                <style jsx>{`
                    @keyframes slideUp {
                        from {
                            transform: translateY(100vh);
                            opacity: 0;
                        }
                        to {
                            transform: translateY(0);
                            opacity: 1;
                        }
                    }
                `}</style>
                <div className="text-yellow-400 font-bold mb-1 sm:mb-2">🌟 Interactive Features</div>
                <div className="space-y-1">
                    <div>• Hover over planets for details</div>
                    <div>• Watch the orbital motion</div>
                    <div>• Each planet moves at different speeds</div>
                </div>
            </div>

            {/* Legend */}
            {/* <div className=" absolute bottom-4 sm:bottom-6 left-2 sm:left-4 md:left-6 lg:left-8 bg-black/70 sm:bg-black/60 backdrop-blur-lg rounded-lg p-3 sm:p-4 text-white max-w-xs animate-[slideUp_1.8s_ease-out] z-40">
                <style jsx>{`
                    @keyframes slideUp {
                        from {
                            transform: translateY(100vh);
                            opacity: 0;
                        }
                        to {
                            transform: translateY(0);
                            opacity: 1;
                        }
                    }
                `}</style>
                <h3 className="font-bold mb-2 sm:mb-3 text-yellow-400 text-sm sm:text-base">Wellness Planets</h3>
                {planets.map((planet, index) => (
                    <div key={index} className="flex items-center mb-2 last:mb-0">
                        <div className={`w-3 h-3 sm:w-4 sm:h-4 ${planet.color} rounded-full mr-2 sm:mr-3 flex-shrink-0`}></div>
                        <div className="min-w-0">
                            <div className="font-semibold text-xs sm:text-sm">{planet.name}</div>
                            <div className="text-xs text-gray-400 leading-tight">{planet.description}</div>
                        </div>
                    </div>
                ))}
            </div> */}

            {/* Controls info - Hidden on mobile, visible on tablet+ */}
            
            
        </div>
    );
};

export default Gallery;