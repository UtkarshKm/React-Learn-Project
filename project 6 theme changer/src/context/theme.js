import {useContext, createContext} from "react";

export const ThemeContext = createContext({
	//creating a context with default values
	themeMode: "light",
	darkTheme: () => {},
	lightTheme: () => {},
});

//creating context provider
export const ThemeProvider = ThemeContext.Provider;






//custom hooks
export default function useTheme() {
	return useContext(ThemeContext);
}
//now only need to import useTheme , inserted of importing useContext and UserContext

// AS useTheme HAS BOTH
