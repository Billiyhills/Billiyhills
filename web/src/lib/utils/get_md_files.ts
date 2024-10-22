import fs from "fs"
import { marked } from "marked"
import path from "path"

export function get_md_files() {
  const md_dir = path.resolve("../")
  const md_files = fs.readdirSync(md_dir).filter((file) => file.endsWith(".md"))

  const md_res_arr = md_files.map((file) => {
    const file_absolute_path = path.join(md_dir, file)
    const file_content = fs.readFileSync(file_absolute_path, "utf8")

    return {
      file_name: file,
      content: marked.parse(file_content),
    }
  })

  return md_res_arr
}
