import { get_md_files } from '$lib/utils/get_md_files';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = () => {
	const md_files = get_md_files();

	return { md_files };
};
