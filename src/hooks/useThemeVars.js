import { useMemo } from "react";

const VAR_MAP = {
  cream: "--cream",
  teal: "--teal",
  tealMid: "--teal-mid",
  tealLight: "--teal-light",
  tealPale: "--teal-pale",
  peach: "--peach",
  peachLight: "--peach-light",
  peachPale: "--peach-pale",
  gold: "--gold",
  goldSoft: "--gold-soft",
  sagePale: "--sage-pale",
  yellowPale: "--yellow-pale",
  ink: "--ink",
  inkMid: "--ink-mid",
  rose: "--rose",
  txtDark: "--txt-dark",
  txtMid: "--txt-mid",
  txtSoft: "--txt-soft",
};

// Tính CSS custom properties từ theme trong CLIENT_DATA, gán vào style của thẻ bọc ngoài.
// Mọi CSS hiện có đã dùng var(--teal) v.v. nên chỉ cần override ở đây, không cần sửa file CSS nào.
// Field rỗng/không có sẽ giữ nguyên giá trị mặc định đã khai báo ở :root (src/index.css).
export function useThemeVars(theme) {
  return useMemo(() => {
    const style = {};
    for (const [field, cssVar] of Object.entries(VAR_MAP)) {
      const value = theme?.[field];
      if (value) style[cssVar] = value;
    }
    return style;
  }, [theme]);
}
