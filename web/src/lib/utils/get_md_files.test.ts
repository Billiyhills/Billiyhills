import { get_md_files } from '$lib/utils/get_md_files';
import { expect, test } from 'vitest';

test('get_md_files', () => {
  const md_files = get_md_files();
  expect(md_files).toBeDefined();
})
