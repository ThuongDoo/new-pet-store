// true nếu giá trị là 1 nguồn ảnh dùng được trực tiếp (base64, URL tuyệt đối, path nội bộ) —
// dùng để phân biệt với field chưa được khách chỉnh (rỗng).
export function isImageValue(v) {
  return !!v && (v.startsWith("data:") || v.startsWith("http") || v.startsWith("/"));
}

// Trả về src ảnh: dùng giá trị đã chỉnh (base64/URL) nếu có, ngược lại rơi về ảnh mẫu có sẵn
// trong bundle (thay vì ảnh placeholder ngoài internet) để site luôn có ảnh đẹp ngay từ đầu.
export function imgSrc(value, fallbackAsset) {
  return isImageValue(value) ? value : fallbackAsset;
}
