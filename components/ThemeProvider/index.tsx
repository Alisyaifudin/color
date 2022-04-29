import React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import ScopedCssBaseline from "@mui/material/ScopedCssBaseline";
import { useAppSelector } from "../../app/hooks";

export interface ThemeProviderProps {
	children: React.ReactNode;
}

export default function Provider({ children }: ThemeProviderProps) {
	const mode = useAppSelector((state) => state.meta.theme);

	const theme = React.useMemo(() => createTheme({ palette: { mode } }), [mode]);
	return (
		<React.Fragment>
			<ThemeProvider theme={theme}>
				<ScopedCssBaseline enableColorScheme data-testid="css-baseline">
					{children}
				</ScopedCssBaseline>
			</ThemeProvider>
		</React.Fragment>
	);
}
