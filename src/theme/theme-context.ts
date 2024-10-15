import React from "react";

export const ThemeContext = React.createContext({
    isDark: false,
    darkTheme: () => {
    },
    lightTheme: () => {
    },
    toggleTheme: () => {
    }
});
