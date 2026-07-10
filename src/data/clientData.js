// Dữ liệu khách hàng đọc từ biến môi trường (.env) — mỗi khách 1 file .env riêng, không sửa code.
// Xem .env.example để biết đầy đủ danh sách biến. Chỉnh nhanh qua giao diện /editor rồi
// xuất file .env đè lên file này.
import { buildFromEnv } from "./fromEnv";

export const CLIENT_DATA = buildFromEnv(import.meta.env);
