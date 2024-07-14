export const API_URL = `${process.env.API_ORIGIN}/cohort0`;
export const settings = {
	headers: {
		authorization: `${process.env.API_TOKEN}`,
		'Content-Type': 'application/json',
	},
};