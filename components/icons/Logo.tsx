import { cn } from "@/lib/utils";

interface LogoProps {
    className?: string;
    size?: "sm" | "md" | "lg";
}

const sizeClasses = {
    sm: "h-8",
    md: "h-12",
    lg: "h-16",
};

export const Logo = ({ className, size = "md" }: LogoProps) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 375 375"
            className={cn(sizeClasses[size], "w-auto", className)}
        >
            <defs>
                <clipPath id="logo-d">
                    <path d="M115.492 112.242H257V268H115.492Zm0 0" />
                </clipPath>
                <clipPath id="logo-c">
                    <path d="M115.492 235H202v29h-86.508Zm0 0" />
                </clipPath>
                <clipPath id="logo-b">
                    <path d="M0 0h375v375H0z" />
                </clipPath>
                <radialGradient id="logo-g" cx="35%" cy="35%">
                    <stop offset="0%" stopColor="#6b63ff" />
                    <stop offset="50%" stopColor="#2721f7" />
                    <stop offset="100%" stopColor="#00a" />
                </radialGradient>
                <filter
                    id="logo-a"
                    width="100%"
                    height="90%"
                    x="0%"
                    y="0%"
                    filterUnits="objectBoundingBox"
                >
                    <feColorMatrix
                        in="SourceGraphic"
                        values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0"
                    />
                </filter>
                <mask id="logo-f">
                    <g filter="url(#logo-a)">
                        <use xlinkHref="#logo-b" />
                    </g>
                </mask>
                <g id="logo-e" clipPath="url(#logo-b)">
                    <use
                        xlinkHref="#logo-c"
                        transform="translate(129.809 150.29)scale(.06811)"
                    />
                </g>
            </defs>
            <g clipPath="url(#logo-d)">
                <path
                    fill="#2721f7"
                    d="M251.727 220.422c.433 10.183-2.547 18.582-9.086 22.894-5.141 3.391-11.739 3.766-18.782 1.63 15.961-13.856 26.055-34.294 26.055-57.09 0-41.735-33.832-75.567-75.566-75.567-23.782 0-44.996 10.988-58.848 28.164 11.195-9.957 25.945-16.004 42.11-16.004 35.015 0 63.402 28.39 63.402 63.406 0 17.223-6.864 32.84-18.008 44.266-4.52-4.226-8.824-9.3-12.637-15.082-3.125-4.738-5.68-9.586-7.66-14.383.461 10.754 4.734 23.496 12.656 35.508 15.418 23.387 38.825 35.152 52.278 26.281 10.722-7.074 11.879-25.132 4.086-44.023"
                />
            </g>
            <g clipPath="url(#logo-c)">
                <path
                    fill="#2721f7"
                    d="M188.879 243.027c-9.227 5.239-19.899 8.235-31.27 8.235-16.164 0-30.914-6.047-42.109-16 13.852 17.176 35.066 28.16 58.848 28.16 9.722 0 19.011-1.836 27.547-5.18-4.645-4.226-9.079-9.347-13.016-15.215"
                />
            </g>
            <use xlinkHref="#logo-e" mask="url(#logo-f)" />
            <circle cx={170} cy={190} r={28} fill="url(#logo-g)" />
            <text
                x={250}
                y={225}
                fill="#2721f7"
                fontFamily="Arial, sans-serif"
                fontSize={65}
                fontWeight="bold"
            >
                enai
            </text>
        </svg>
    );
};

export default Logo;
