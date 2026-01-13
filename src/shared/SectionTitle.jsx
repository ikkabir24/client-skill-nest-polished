import React from "react";

const SectionTitle = ({
    title,
    subtitle,
    align = "center", // center | left
    className = "",
}) => {
    const alignment =
        align === "left" ? "text-left items-start" : "text-center items-center";

    return (
        <div
            className={`mb-6 flex flex-col gap-3 ${alignment} ${className}`}
        >
            {/* Subtitle */}
            {subtitle && (
                <p className="text-sm md:text-base font-medium text-info tracking-wide uppercase">
                    {subtitle}
                </p>
            )}

            {/* Title */}
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-base-content leading-tight">
                {title}
            </h2>

            {/* Accent Divider */}
            <span className="mt-2 h-1 w-16 rounded-full bg-primary"></span>
        </div>
    );
};

export default SectionTitle;
