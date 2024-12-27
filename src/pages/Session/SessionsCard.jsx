import { useState } from "react";
import ReactCardFlip from "react-card-flip";
import { GoArrowRight } from "react-icons/go";

const SessionsCard = () => {
    const [flip, setFlip] = useState(false);
    return (
        <ReactCardFlip isFlipped={flip} flipDirection="horizontal">
            {/*Front*/}
            <div className="mx-auto mt-10 relative w-[263px] h-[429px]">
                <div
                    className="absolute inset-0"
                    style={{
                        clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
                    }}
                >
                    <img
                        src="/src/assets/black-bg.png"
                        alt="Background 1"
                        className="w-full h-full object-cover"
                    />
                </div>
                <div className="absolute top-0 left-0 w-[263px] h-[335px]">
                    <div className="relative w-full h-full">
                        <div
                            className="absolute top-[50px] left-0 w-[263px] h-[293px]"
                            style={{
                                clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
                            }}
                        >
                            <img
                                src="/src/assets/ash-bg.png"
                                alt="Background 2"
                                className="w-full h-full object-cover"
                            />
                            <div
                                className="absolute top-[70px] left-[50%] transform -translate-x-1/2 w-[126px] h-[134px] bg-[url('/src/assets/session-img.png')] bg-cover border border-white rounded-[30px]"
                            ></div>
                            <div className="absolute top-[210px] left-[50%] transform -translate-x-1/2 text-center text-white font-semibold text-[15px] leading-[16px] tracking-wide">
                                Real-Time Signal Processing in IoT Devices
                            </div>
                            <div className="absolute bottom-[15px] left-[50%] transform -translate-x-1/2 w-[85px] h-[10px] bg-white rounded-[5px] flex items-center justify-center">
                                <img src='/src/assets/mic2.png' className="size-2" />
                                <span className="text-[9px] leading-[10px] font-medium text-black">
                                    To Be Announced
                                </span>
                            </div>
                        </div>
                        <div
                            className="absolute bottom-[-60px] left-[50%] transform -translate-x-1/2 flex items-center justify-center w-[80px] h-[20px] border border-white rounded-[45px]"
                            onClick={() => setFlip(!flip)}
                        >
                            <span className="text-[10px] leading-[10px] tracking-[0.08em] font-medium text-white font-inter">
                                Know More
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            {/*Back*/}
            <div className=" mx-auto relative w-[263px] h-[429px]">
                <div
                    className="absolute inset-0"
                    style={{
                        clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
                    }}
                >
                    <img
                        src="/src/assets/black-bg.png"
                        alt="Background 1"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute top-[90px] left-[50%] transform -translate-x-1/2 text-center text-white text-xl line font-semibold leading-[25px] tracking-wide w-full px-8">
                        Real-Time Signal Processing in IoT Devices
                    </div>
                    <div className="absolute top-[185px] left-[50%] transform -translate-x-1/2 w-[85px] h-[10px] bg-white rounded-[5px] flex items-center justify-center">
                        <img src='/src/assets/mic2.png' className="size-2" />
                        <span className="text-[9px] leading-[10px] font-medium text-black">
                            To Be Announced
                        </span>
                    </div>
                    <div className="absolute bottom-[50px] left-[50%] transform -translate-x-1/2 text-center text-white text-sm line leading-[20px] tracking-wide w-full px-8">
                        Gain an in-depth understanding of how signal processing revolutionizes real-time applications in IoT. The session provides invaluable insights and skills that are highly relevant in professional and industry settings.
                    </div>
                    <div
                        className="absolute top-[20px] left-[12%] transform -translate-x-1/2 flex items-center justify-center w-[80px] h-[20px]"
                        onClick={() => setFlip(!flip)}
                    >
                        <GoArrowRight className="text-white size-8"/>
                    </div>

                </div>
            </div>
        </ReactCardFlip>
    );
};

export default SessionsCard;