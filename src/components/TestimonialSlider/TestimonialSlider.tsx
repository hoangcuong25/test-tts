import React, { useEffect, useState } from 'react';
import './TestimonialSlider.css';
import { getTestimonials } from '../../apis/Testimonial';

export default function TestimonialSlider() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [testimonials, setTestimonials] = useState<TestimonialType[]>([]);

    useEffect(() => {
        const fetchTestimonials = async () => {
            const data = await getTestimonials();
            setTestimonials(data);
        };

        fetchTestimonials();
    }, []);

    return (
        <div className="testimonial-section">
            <h2>Testimonials</h2>

            <div className="carousel-container">
                <div
                    className="carousel-track"
                    style={{
                        transform: `translateX(-${currentIndex * (80 + 2)}%)`,
                    }}
                >
                    {testimonials.map((item) => (
                        <div className="slide" key={item.id}>
                            <div className="card">
                                <img src={item.imageUrl} alt="testimonial" />
                                <p>{item.desctiption}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="dots">
                {testimonials.map((_, i) => (
                    <span
                        key={i}
                        className={`dot ${i === currentIndex ? 'active' : ''}`}
                        onClick={() => setCurrentIndex(i)}
                    ></span>
                ))}
            </div>
        </div>
    );
}
