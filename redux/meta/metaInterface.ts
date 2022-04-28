export type themeTypes = "light" | "dark";

export interface MetaState {
	theme: themeTypes;
	language: string;
	name: string;
	color: {
		r: number;
		g: number;
		b: number;
	};
  guess: {
		r: number;
		g: number;
		b: number;
	};
  done: boolean;
  win: boolean;
}
