export type themeTypes = "light" | "dark";

export interface MetaState {
	theme: themeTypes;
	language: string;
	mysteryName: string;
	mysteryColor: {
		r: number;
		g: number;
		b: number;
	};
  guessColor: {
		r: number;
		g: number;
		b: number;
	};
	hsv: boolean;
	guessName: string;
  done: boolean;
  win: boolean;
}
