import React from 'react';
import { FaArrowRight, FaCheckCircle, FaPhoneAlt } from 'react-icons/fa';
import { useModal } from '../ModalContext/ModalContext';

const Hero = ({ title, description, image, home }) => {
    const { openModal } = useModal();

    return (
        <section
            className="relative h-[92vh] min-h-[650px] md:m-5 mt-3 mx-3 overflow-hidden rounded-[2rem] bg-neutral-950 shadow-2xl"
            style={{
                backgroundImage: `linear-gradient(90deg, rgba(8,8,8,.88) 0%, rgba(8,8,8,.62) 42%, rgba(8,8,8,.12) 100%), url(${image})`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat'
            }}
        >
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/20" />

            {home ? (
                <div className="relative z-10 flex h-full items-center">
                    <div className="w-full max-w-7xl px-7 md:px-14 lg:px-20 pt-16">
                        <div className="max-w-3xl">
                            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold text-white backdrop-blur-md">
                                <FaCheckCircle className="text-red-400" />
                                Trusted Auto Care & Repair
                            </div>

                            <h1 className="text-white text-4xl md:text-6xl lg:text-7xl font-extrabold leading-[1.05] tracking-tight">
                                {title}
                            </h1>

                            <p className="mt-6 max-w-2xl text-base md:text-xl leading-relaxed text-white/80">
                                {description}
                            </p>

                            <div className="mt-8 flex flex-col sm:flex-row gap-4">
                                <button onClick={openModal} className="common-btn !w-auto gap-3">
                                    Book Appointment
                                    <FaArrowRight />
                                </button>

                                <a
                                    href="tel:+15551234567"
                                    className="inline-flex items-center justify-center gap-3 rounded-xl border border-white/25 bg-white/10 px-7 py-3 font-semibold text-white backdrop-blur-md transition hover:bg-white/20"
                                >
                                    <FaPhoneAlt />
                                    Call Our Garage
                                </a>
                            </div>

                            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm font-medium text-white/70">
                                <span>✓ Honest diagnostics</span>
                                <span>✓ Fair pricing</span>
                                <span>✓ Quality workmanship</span>
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <div className="relative z-10 flex h-full max-w-6xl mx-auto items-center justify-center px-5 text-center">
                    <div>
                        <h1 className="text-white text-4xl md:text-6xl font-extrabold leading-tight">
                            {title}
                        </h1>
                        <p className="md:text-2xl text-lg text-white/80 my-6 max-w-3xl mx-auto leading-relaxed">
                            {description}
                        </p>
                    </div>
                </div>
            )}
        </section>
    );
};

export default Hero;