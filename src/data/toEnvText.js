import { DATA_SCALARS, OBJECT_LISTS, STRING_LISTS } from "./schema.js";

function escapeEnvValue(v) {
  const s = String(v ?? "")
    .replace(/\\/g, "\\\\")
    .replace(/"/g, '\\"')
    .replace(/\n/g, "\\n");
  return `"${s}"`;
}

// Chuyển CLIENT_DATA thành nội dung file .env (dùng bởi Editor khi xuất file).
export function buildEnvText(data) {
  const lines = [];
  const set = (key, value) => lines.push(`${key}=${escapeEnvValue(value)}`);

  lines.push("# Nội dung site — mỗi khách 1 file .env riêng, không commit lên git");
  for (const f of DATA_SCALARS) set(f.key, f.get(data));

  lines.push("");
  for (const l of STRING_LISTS) {
    const items = l.get(data) || [];
    items.forEach((v, i) => set(`${l.prefix}_${i + 1}`, v));
  }

  lines.push("");
  for (const l of OBJECT_LISTS) {
    const items = l.get(data) || [];
    items.forEach((item, i) => {
      for (const [objKey, suffix] of l.fields) {
        set(`${l.prefix}_${i + 1}_${suffix}`, item[objKey]);
      }
    });
  }

  return lines.join("\n") + "\n";
}
