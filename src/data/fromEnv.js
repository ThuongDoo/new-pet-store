import { DATA_SCALARS, OBJECT_LISTS, STRING_LISTS } from "./schema.js";

function skeletonData() {
  return {
    social: {},
    theme: {},
    stats: {},
    hero: {},
    story: {},
    services: { emergency: {}, items: [] },
    process: { steps: [] },
    team: {},
    reviews: { items: [] },
    cases: { items: [] },
    booking: { serviceOptions: [], faqItems: [] },
    contact: {},
    footer: {},
  };
}

function readStringList(env, prefix) {
  const items = [];
  for (let i = 1; env[`${prefix}_${i}`] !== undefined; i++) {
    items.push(env[`${prefix}_${i}`]);
  }
  return items;
}

function readObjectList(env, prefix, fields) {
  const items = [];
  const [, firstSuffix] = fields[0];
  for (let i = 1; env[`${prefix}_${i}_${firstSuffix}`] !== undefined; i++) {
    const item = {};
    for (const [objKey, suffix] of fields) {
      item[objKey] = env[`${prefix}_${i}_${suffix}`] ?? "";
    }
    items.push(item);
  }
  return items;
}

// Dựng CLIENT_DATA từ biến môi trường (import.meta.env ở app).
export function buildFromEnv(env) {
  const data = skeletonData();
  for (const f of DATA_SCALARS) f.set(data, env[f.key] ?? "");
  for (const l of STRING_LISTS) l.set(data, readStringList(env, l.prefix));
  for (const l of OBJECT_LISTS) l.set(data, readObjectList(env, l.prefix, l.fields));
  return data;
}
