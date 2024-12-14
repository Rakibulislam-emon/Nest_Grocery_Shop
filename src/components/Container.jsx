import { twMerge } from "tailwind-merge"
export default function Container({children, className}) {
    return (
        <div className={twMerge(`max-w-screen-2xl mx-auto px-4 lg:px-0`, className)}>
            {children}
        </div>
    )
};
