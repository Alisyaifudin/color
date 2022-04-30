import { LANGUAGES } from "./DICT";

const colors = [
	//White
	{
		name: {
			[LANGUAGES.INA]: ["putih"],
			[LANGUAGES.EN]: ["white"],
		},
		color: {
			r: 255,
			g: 255,
			b: 255,
		},
		level: 1,
	},
	{
		name: {
			[LANGUAGES.INA]: ["danta", "semerdanta", "putih gading"],
			[LANGUAGES.EN]: ["ivory"],
		},
		color: {
			r: 255,
			g: 255,
			b: 240,
		},
		level: 3,
	},
	{
		name: {
			[LANGUAGES.INA]: ["salju"],
			[LANGUAGES.EN]: ["snow"],
		},
		color: {
			r: 255,
			g: 250,
			b: 250,
		},
		level: 3,
	},
	{
		name: {
			[LANGUAGES.INA]: ["krim pudina", "putih murup"],
			[LANGUAGES.EN]: ["mint cream", "shining white"],
		},
		color: {
			r: 245,
			g: 255,
			b: 250,
		},
		level: 3,
	},
	{
		name: {
			[LANGUAGES.INA]: ["azure"],
			[LANGUAGES.EN]: ["azure"],
		},
		color: {
			r: 240,
			g: 255,
			b: 255,
		},
		level: 2,
	},
	{
		name: {
			[LANGUAGES.INA]: ["kinantan"],
			[LANGUAGES.EN]: ["floral white", "white as-a-swan"],
		},
		color: {
			r: 255,
			g: 250,
			b: 240,
		},
		level: 3,
	},
	{
		name: {
			[LANGUAGES.INA]: ["nusa indah"],
			[LANGUAGES.EN]: ["honey dew", "greenish white"],
		},
		color: {
			r: 240,
			g: 255,
			b: 240,
		},
		level: 3,
	},
	{
		name: {
			[LANGUAGES.INA]: ["putih kapur", "putih hantu"],
			[LANGUAGES.EN]: ["ghost white", "chalk white"],
		},
		color: {
			r: 248,
			g: 248,
			b: 255,
		},
		level: 3,
	},
	{
		name: {
			[LANGUAGES.INA]: ["kulit cangkerang", "putih belak"],
			[LANGUAGES.EN]: ["seashell", "broken white"],
		},
		color: {
			r: 255,
			g: 245,
			b: 238,
		},
		level: 3,
	},
	{
		name: {
			[LANGUAGES.INA]: ["biru alice"],
			[LANGUAGES.EN]: ["alice blue"],
		},
		color: {
			r: 240,
			g: 248,
			b: 255,
		},
		level: 3,
	},
	{
		name: {
			[LANGUAGES.INA]: ["les lama", "putih bahana"],
			[LANGUAGES.EN]: ["old lace", "dull white"],
		},
		color: {
			r: 253,
			g: 245,
			b: 230,
		},
		level: 3,
	},
	{
		name: {
			[LANGUAGES.INA]: ["taluki", "merah gandaria"],
			[LANGUAGES.EN]: ["lavender blush", "pinkish white"],
		},
		color: {
			r: 255,
			g: 240,
			b: 245,
		},
		level: 3,
	},
	{
		name: {
			[LANGUAGES.INA]: ["asap putih", "putih mutiara"],
			[LANGUAGES.EN]: ["white smoke", "pale gray", "pearl gray", "pearl white"],
		},
		color: {
			r: 245,
			g: 245,
			b: 245,
		},
		level: 2,
	},
	{
		name: {
			[LANGUAGES.INA]: ["kuning air", "putih kuam"],
			[LANGUAGES.EN]: ["beige"],
		},
		color: {
			r: 245,
			g: 245,
			b: 220,
		},
		level: 3,
	},
	{
		name: {
			[LANGUAGES.INA]: ["linen"],
			[LANGUAGES.EN]: ["linen"],
		},
		color: {
			r: 250,
			g: 240,
			b: 230,
		},
		level: 3,
	},
	{
		name: {
			[LANGUAGES.INA]: ["putih antik"],
			[LANGUAGES.EN]: ["antique white"],
		},
		color: {
			r: 250,
			g: 235,
			b: 215,
		},
		level: 3,
	},
	{
		name: {
			[LANGUAGES.INA]: ["mawar berkabut"],
			[LANGUAGES.EN]: ["misty rose"],
		},
		color: {
			r: 255,
			g: 228,
			b: 225,
		},
		level: 2,
	},
	//Gray
	{
		name: {
			[LANGUAGES.INA]: ["putih perak"],
			[LANGUAGES.EN]: ["gainsboro", "silvery"],
		},
		color: {
			r: 220,
			g: 220,
			b: 220,
		},
		level: 2,
	},
	{
		name: {
			[LANGUAGES.INA]: ["abu-abu muda"],
			[LANGUAGES.EN]: ["light gray",],
		},
		color: {
			r: 211,
			g: 211,
			b: 211,
		},
		level: 3,
	},
	{
		name: {
			[LANGUAGES.INA]: ["perak"],
			[LANGUAGES.EN]: ["silver",],
		},
		color: {
			r: 192,
			g: 192,
			b: 192,
		},
		level: 2,
	},
	{
		name: {
			[LANGUAGES.INA]: ["nilajada"],
			[LANGUAGES.EN]: ["dark gray",],
		},
		color: {
			r: 169,
			g: 169,
			b: 169,
		},
		level: 3,
	},
	{
		name: {
			[LANGUAGES.INA]: ["hitam sabak muda"],
			[LANGUAGES.EN]: ["light slate gray",],
		},
		color: {
			r: 119,
			g: 136,
			b: 153,
		},
		level: 3,
	},
	{
		name: {
			[LANGUAGES.INA]: ["kelabu"],
			[LANGUAGES.EN]: ["gray",],
		},
		color: {
			r: 128,
			g: 128,
			b: 128,
		},
		level: 3,
	},
	{
		name: {
			[LANGUAGES.INA]: ["hitam sabak"],
			[LANGUAGES.EN]: ["slate gray",],
		},
		color: {
			r: 112,
			g: 128,
			b: 144,
		},
		level: 3,
	},
	{
		name: {
			[LANGUAGES.INA]: ["abu-abu redup"],
			[LANGUAGES.EN]: ["dim gray",],
		},
		color: {
			r: 105,
			g: 105,
			b: 105,
		},
		level: 3,
	},
	{
		name: {
			[LANGUAGES.INA]: ["hitam sabak tua"],
			[LANGUAGES.EN]: ["dark slate gray",],
		},
		color: {
			r: 47,
			g: 79,
			b: 79,
		},
		level: 3,
	},
	{
		name: {
			[LANGUAGES.INA]: ["hitam"],
			[LANGUAGES.EN]: ["black"],
		},
		color: {
			r: 0,
			g: 0,
			b: 0,
		},
		level: 1,
	},
	///Green
	{
		name: {
			[LANGUAGES.INA]: ["hijau pupus"],
			[LANGUAGES.EN]: ["lime"],
		},
		color: {
			r: 0,
			g: 255,
			b: 0,
		},
		level: 1,
	},
	{
		name: {
			[LANGUAGES.INA]: ["merah"],
			[LANGUAGES.EN]: ["red"],
		},
		color: {
			r: 255,
			g: 0,
			b: 0,
		},
		level: 1,
	},
	{
		name: {
			[LANGUAGES.INA]: ["merah muda"],
			[LANGUAGES.EN]: ["pink"],
		},
		color: {
			r: 255,
			g: 192,
			b: 203,
		},
		level: 2,
	},
	{
		name: {
			[LANGUAGES.INA]: ["dewangga"],
			[LANGUAGES.EN]: ["orange red"],
		},
		color: {
			r: 255,
			g: 69,
			b: 0,
		},
		level: 3,
	},
];

export default colors;
