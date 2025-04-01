import React, { createContext, useState, useContext, useEffect } from 'react';

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
    const [darkMode, setDarkMode] = useState(() => {
        // Verifica se há uma preferência salva no localStorage
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme) {
            return savedTheme === 'dark';
        }
        // Ou verifica a preferência do sistema
        return window.matchMedia('(prefers-color-scheme: dark)').matches;
    });

    const toggleTheme = () => {
        setDarkMode(prevMode => {
            const newMode = !prevMode;
            localStorage.setItem('theme', newMode ? 'dark' : 'light');
            return newMode;
        });
    };

    useEffect(() => {
        // Aplica a classe 'dark' no elemento html quando darkMode for true
        if (darkMode) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [darkMode]);

    return (
        <ThemeContext.Provider value={{ darkMode, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}

export function useTheme() {
    return useContext(ThemeContext);
}
