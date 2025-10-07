"use client";

import React from "react";

export default function Button({
    children,
    type = "primary",
    icon,
    onClick,
    className = "",
}) {
    const baseStyles =
        "inline-flex items-center justify-center font-semibold rounded-lg px-6 py-3 overflow-hidden transition-colors duration-300 ease-in-out group";

    const typeStyles = {
        primary:
            "bg-[var(--color-blue-600)] text-[var(--color-blue-100)] hover:bg-[var(--color-blue-700)] hover:text-[var(--color-blue-50)]",
        secondary:
            "bg-[var(--color-blue-100)] text-[var(--color-blue-600)] hover:bg-[var(--color-blue-200)] hover:text-[var(--color-blue-700)]",
        outline:
            "bg-transparent border-2 border-[var(--color-blue-600)] text-[var(--color-blue-600)] hover:bg-[var(--color-blue-600)] hover:text-[var(--color-blue-100)]",
    };

    return (
        <button onClick={onClick} className={`${baseStyles} ${typeStyles[type]} ${className}`}>
            <span className="flex items-center gap-2">
                {/* Optional left icon - hidden by default */}
                <span className="transform -translate-x-3 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100">
                    {icon}
                </span>

                {/* Text */}
                <span>{children}</span>

                {/* Right icon */}
                <span className="transform translate-x-0 transition-all duration-300 group-hover:translate-x-3 group-hover:opacity-0">
                    {icon}
                </span>
            </span>
        </button>
    );
}
