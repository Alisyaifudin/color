import React, { useState } from "react";
import { LanguageButton } from "./LanguageButton";

const languages = ["IDN", "ENG"];
const langs = ["id-ID", "en-US"];

export const EngLanguage = () => {
	const [lang, setLang] = useState(langs[1]);
	const [language, setLanguage] = useState(languages[1]);
	const handleClick = (label: string) => {
		const index = languages.findIndex((language) => language === label);
		if (index === -1) return;
		setLang(langs[index]);
		setLanguage(languages[index]);
	};
	return <LanguageButton onClick={handleClick} label={language} labels={languages} value={lang} />;
};
