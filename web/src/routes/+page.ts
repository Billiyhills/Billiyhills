import type { PageLoad, PageServerData } from './$types';

export const load: PageLoad = ({ data }: { data: PageServerData }) => {
  return {
    md_files: data.md_files
  };
};

export const prerender = true;
