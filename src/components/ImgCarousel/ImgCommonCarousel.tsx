import { useState } from 'preact/hooks';
import type { IImgInfo } from '../../core/interfaces/img-info.interface';
import type React from 'preact/compat';
import './ImgCommonCarousel.scss';
import { MoveLeft, MoveRight } from 'lucide-preact';

interface CarouselProps {
    images: IImgInfo[];
}

const Carousel: React.FC<CarouselProps> = ({ images }) => {
    const [currentIndex, setCurrentIndex] = useState<number>(0);
    const [isAnimating, setIsAnimating] = useState<boolean>(false);
    const [direction, setDirection] = useState<'left' | 'right'>('right');

    const nextSlide = (): void => {
        if (!isAnimating) {
            setDirection('right');
            setIsAnimating(true);
            setTimeout(() => {
                setCurrentIndex((currentIndex + 1) % images.length);
                setIsAnimating(false);
            }, 100);
        }
    };

    const prevSlide = (): void => {
        if (!isAnimating) {
            setDirection('left');
            setIsAnimating(true);
            setTimeout(() => {
                setCurrentIndex((currentIndex - 1 + images.length) % images.length);
                setIsAnimating(false);
            }, 100);
        }
    };

    return (
        <div className="slider relative w-full my-20 mx-auto overflow-hidden rounded-xl shadow-xl">
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute left-0 top-0 h-full w-20 bg-gradient-to-r from-gray-900/50 to-transparent z-50"></div>
                <div className="absolute right-0 top-0 h-full w-20 bg-gradient-to-l from-gray-900/50 to-transparent z-50"></div>
            </div>
            <div
                className={`flex transition-transform duration-500 ease-in-out ${isAnimating
                    ? direction === 'right'
                        ? '-translate-x-full'
                        : 'translate-x-full'
                    : 'translate-x-0'
                    }`}
                style={{
                    transform: `translateX(-${currentIndex * 100}%)`,
                }}
            >
                {images.map((image, index) => (
                    <img
                        key={index}
                        src={image.url}
                        alt={`${image.alt} ${index + 1}`}
                        className="w-full h-64 sm:h-80 lg:h-96 object-cover flex-shrink-0"
                    />
                ))}
            </div>

            {/* Navigation Buttons */}
            <button
                onClick={prevSlide}
                className="absolute left-4 sm:left-8 top-1/2 transform -translate-y-1/2 slider-arrow rounded-full p-2 sm:p-3 shadow-md transition duration-300"
                aria-label="Previous Slide"
            >
                <MoveLeft />
            </button>
            <button
                onClick={nextSlide}
                className="absolute right-4 sm:right-8 top-1/2 transform -translate-y-1/2 slider-arrow rounded-full p-2 sm:p-3 shadow-md transition duration-300"
                aria-label="Next Slide"
            >
                <MoveRight />
            </button>

            {/* Slide Indicators */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {images.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentIndex(index)}
                        className={`w-3 h-3 rounded-full ${currentIndex === index ? 'bg-gray-700' : 'bg-gray-300'
                            }`}
                        aria-label={`Slide ${index + 1}`}
                    ></button>
                ))}
            </div>
        </div>
    );
};

export default Carousel;