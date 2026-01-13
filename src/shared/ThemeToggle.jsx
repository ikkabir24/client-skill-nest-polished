import React from "react";
import { LuMoon, LuSun } from "react-icons/lu";

const ThemeToggle = ({ theme, setTheme }) => {
    const isDark = theme === "dark";

    return (
        <button
            type="button"
            onClick={() => setTheme(isDark ? "light" : "dark")}
            className="btn btn-sm md:btn-md bg-base-200 hover:bg-base-300 border border-base-300 rounded-full px-3 md:px-4 flex items-center gap-2 transition-all"
            aria-label="Toggle Theme"
            title="Toggle Theme"
        >
            <span className="text-lg">
                {isDark ? <LuMoon /> : <LuSun />}
            </span>

            <span className="text-sm font-medium hidden sm:block">
                {isDark ? "Dark" : "Light"}
            </span>

            {/* Switch Track */}
            <span className="relative inline-flex h-6 w-11 items-center rounded-full bg-base-100 border border-base-300">
                {/* Switch Thumb */}
                <span
                    className={`inline-block h-5 w-5 transform rounded-full bg-primary transition-transform duration-300 ${isDark ? "translate-x-5" : "translate-x-1"
                        }`}
                />
            </span>
        </button>
    );
};

export default ThemeToggle;
