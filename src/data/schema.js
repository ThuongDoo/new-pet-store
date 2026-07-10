// Khai báo 1 lần ánh xạ field dữ liệu khách <-> tên biến VITE_*.
// Dùng chung bởi: clientData.js (đọc import.meta.env -> CLIENT_DATA)
// và toEnvText.js (CLIENT_DATA -> nội dung file .env, dùng khi Editor xuất file).

// Field đơn (scalar): 1 field = 1 biến env.
export const DATA_SCALARS = [
  { key: "VITE_BRAND", get: (d) => d.brand, set: (d, v) => (d.brand = v) },
  { key: "VITE_TAGLINE", get: (d) => d.tagline, set: (d, v) => (d.tagline = v) },
  { key: "VITE_PHONE", get: (d) => d.phone, set: (d, v) => (d.phone = v) },
  { key: "VITE_PHONE_LABEL", get: (d) => d.phoneLabel, set: (d, v) => (d.phoneLabel = v) },
  { key: "VITE_ADDRESS", get: (d) => d.address, set: (d, v) => (d.address = v) },
  { key: "VITE_EMAIL", get: (d) => d.email, set: (d, v) => (d.email = v) },
  { key: "VITE_PAGE_TITLE", get: (d) => d.pageTitle, set: (d, v) => (d.pageTitle = v) },
  { key: "VITE_BOOK_BTN", get: (d) => d.bookBtn, set: (d, v) => (d.bookBtn = v) },

  { key: "VITE_SOCIAL_FACEBOOK", get: (d) => d.social.facebook, set: (d, v) => (d.social.facebook = v) },
  { key: "VITE_SOCIAL_INSTAGRAM", get: (d) => d.social.instagram, set: (d, v) => (d.social.instagram = v) },
  { key: "VITE_SOCIAL_ZALO", get: (d) => d.social.zalo, set: (d, v) => (d.social.zalo = v) },

  { key: "VITE_THEME_CREAM", get: (d) => d.theme.cream, set: (d, v) => (d.theme.cream = v) },
  { key: "VITE_THEME_TEAL", get: (d) => d.theme.teal, set: (d, v) => (d.theme.teal = v) },
  { key: "VITE_THEME_TEAL_MID", get: (d) => d.theme.tealMid, set: (d, v) => (d.theme.tealMid = v) },
  { key: "VITE_THEME_TEAL_LIGHT", get: (d) => d.theme.tealLight, set: (d, v) => (d.theme.tealLight = v) },
  { key: "VITE_THEME_TEAL_PALE", get: (d) => d.theme.tealPale, set: (d, v) => (d.theme.tealPale = v) },
  { key: "VITE_THEME_PEACH", get: (d) => d.theme.peach, set: (d, v) => (d.theme.peach = v) },
  { key: "VITE_THEME_PEACH_LIGHT", get: (d) => d.theme.peachLight, set: (d, v) => (d.theme.peachLight = v) },
  { key: "VITE_THEME_PEACH_PALE", get: (d) => d.theme.peachPale, set: (d, v) => (d.theme.peachPale = v) },
  { key: "VITE_THEME_GOLD", get: (d) => d.theme.gold, set: (d, v) => (d.theme.gold = v) },
  { key: "VITE_THEME_GOLD_SOFT", get: (d) => d.theme.goldSoft, set: (d, v) => (d.theme.goldSoft = v) },
  { key: "VITE_THEME_SAGE_PALE", get: (d) => d.theme.sagePale, set: (d, v) => (d.theme.sagePale = v) },
  { key: "VITE_THEME_YELLOW_PALE", get: (d) => d.theme.yellowPale, set: (d, v) => (d.theme.yellowPale = v) },
  { key: "VITE_THEME_INK", get: (d) => d.theme.ink, set: (d, v) => (d.theme.ink = v) },
  { key: "VITE_THEME_INK_MID", get: (d) => d.theme.inkMid, set: (d, v) => (d.theme.inkMid = v) },
  { key: "VITE_THEME_ROSE", get: (d) => d.theme.rose, set: (d, v) => (d.theme.rose = v) },
  { key: "VITE_THEME_TXT_DARK", get: (d) => d.theme.txtDark, set: (d, v) => (d.theme.txtDark = v) },
  { key: "VITE_THEME_TXT_MID", get: (d) => d.theme.txtMid, set: (d, v) => (d.theme.txtMid = v) },
  { key: "VITE_THEME_TXT_SOFT", get: (d) => d.theme.txtSoft, set: (d, v) => (d.theme.txtSoft = v) },

  { key: "VITE_STATS_NUMBER", get: (d) => d.stats.number, set: (d, v) => (d.stats.number = v) },
  { key: "VITE_STATS_LABEL", get: (d) => d.stats.label, set: (d, v) => (d.stats.label = v) },

  { key: "VITE_HERO_TAG", get: (d) => d.hero.tag, set: (d, v) => (d.hero.tag = v) },
  { key: "VITE_HERO_H1_LINE1", get: (d) => d.hero.h1Line1, set: (d, v) => (d.hero.h1Line1 = v) },
  { key: "VITE_HERO_H1_LINE2", get: (d) => d.hero.h1Line2, set: (d, v) => (d.hero.h1Line2 = v) },
  { key: "VITE_HERO_H1_CURSIVE", get: (d) => d.hero.h1Cursive, set: (d, v) => (d.hero.h1Cursive = v) },
  { key: "VITE_HERO_SUB", get: (d) => d.hero.sub, set: (d, v) => (d.hero.sub = v) },
  { key: "VITE_HERO_CTA_MAIN", get: (d) => d.hero.ctaMain, set: (d, v) => (d.hero.ctaMain = v) },
  { key: "VITE_HERO_CTA_VIDEO_TITLE", get: (d) => d.hero.ctaVideoTitle, set: (d, v) => (d.hero.ctaVideoTitle = v) },
  { key: "VITE_HERO_CTA_VIDEO_SUB", get: (d) => d.hero.ctaVideoSub, set: (d, v) => (d.hero.ctaVideoSub = v) },
  { key: "VITE_HERO_CARE_TITLE", get: (d) => d.hero.careTitle, set: (d, v) => (d.hero.careTitle = v) },
  { key: "VITE_HERO_CARE_SUB", get: (d) => d.hero.careSub, set: (d, v) => (d.hero.careSub = v) },
  { key: "VITE_HERO_IMG_MAIN", get: (d) => d.hero.imgMain, set: (d, v) => (d.hero.imgMain = v) },
  { key: "VITE_HERO_IMG_LEFT", get: (d) => d.hero.imgLeft, set: (d, v) => (d.hero.imgLeft = v) },
  {
    key: "VITE_HERO_IMG_LEFT_CAPTION",
    get: (d) => d.hero.imgLeftCaption,
    set: (d, v) => (d.hero.imgLeftCaption = v),
  },
  { key: "VITE_HERO_IMG_RIGHT", get: (d) => d.hero.imgRight, set: (d, v) => (d.hero.imgRight = v) },
  {
    key: "VITE_HERO_IMG_RIGHT_CAPTION",
    get: (d) => d.hero.imgRightCaption,
    set: (d, v) => (d.hero.imgRightCaption = v),
  },
  { key: "VITE_HERO_IMG_PAW", get: (d) => d.hero.imgPaw, set: (d, v) => (d.hero.imgPaw = v) },

  { key: "VITE_STORY_EYEBROW", get: (d) => d.story.eyebrow, set: (d, v) => (d.story.eyebrow = v) },
  { key: "VITE_STORY_H2_LINE1", get: (d) => d.story.h2Line1, set: (d, v) => (d.story.h2Line1 = v) },
  { key: "VITE_STORY_H2_EM", get: (d) => d.story.h2Em, set: (d, v) => (d.story.h2Em = v) },
  { key: "VITE_STORY_P", get: (d) => d.story.p, set: (d, v) => (d.story.p = v) },

  { key: "VITE_SERVICES_H2_LINE1", get: (d) => d.services.h2Line1, set: (d, v) => (d.services.h2Line1 = v) },
  { key: "VITE_SERVICES_H2_SPAN", get: (d) => d.services.h2Span, set: (d, v) => (d.services.h2Span = v) },
  {
    key: "VITE_EMERGENCY_TITLE",
    get: (d) => d.services.emergency.title,
    set: (d, v) => (d.services.emergency.title = v),
  },
  {
    key: "VITE_EMERGENCY_DESC",
    get: (d) => d.services.emergency.desc,
    set: (d, v) => (d.services.emergency.desc = v),
  },
  {
    key: "VITE_EMERGENCY_CTA",
    get: (d) => d.services.emergency.cta,
    set: (d, v) => (d.services.emergency.cta = v),
  },

  { key: "VITE_PROCESS_H2_LINE1", get: (d) => d.process.h2Line1, set: (d, v) => (d.process.h2Line1 = v) },
  { key: "VITE_PROCESS_H2_SPAN", get: (d) => d.process.h2Span, set: (d, v) => (d.process.h2Span = v) },

  { key: "VITE_TEAM_H2_LINE1", get: (d) => d.team.h2Line1, set: (d, v) => (d.team.h2Line1 = v) },
  { key: "VITE_TEAM_H2_SPAN", get: (d) => d.team.h2Span, set: (d, v) => (d.team.h2Span = v) },
  { key: "VITE_TEAM_P", get: (d) => d.team.p, set: (d, v) => (d.team.p = v) },
  { key: "VITE_TEAM_NAME", get: (d) => d.team.name, set: (d, v) => (d.team.name = v) },
  { key: "VITE_TEAM_TITLE", get: (d) => d.team.title, set: (d, v) => (d.team.title = v) },
  { key: "VITE_TEAM_BIO", get: (d) => d.team.bio, set: (d, v) => (d.team.bio = v) },
  { key: "VITE_TEAM_TONE", get: (d) => d.team.tone, set: (d, v) => (d.team.tone = v) },
  { key: "VITE_TEAM_AVATAR", get: (d) => d.team.avatar, set: (d, v) => (d.team.avatar = v) },

  { key: "VITE_REVIEWS_EYEBROW", get: (d) => d.reviews.eyebrow, set: (d, v) => (d.reviews.eyebrow = v) },

  { key: "VITE_CASES_EYEBROW", get: (d) => d.cases.eyebrow, set: (d, v) => (d.cases.eyebrow = v) },
  { key: "VITE_CASES_H2_LINE1", get: (d) => d.cases.h2Line1, set: (d, v) => (d.cases.h2Line1 = v) },
  { key: "VITE_CASES_H2_SPAN", get: (d) => d.cases.h2Span, set: (d, v) => (d.cases.h2Span = v) },

  { key: "VITE_BOOKING_EYEBROW", get: (d) => d.booking.eyebrow, set: (d, v) => (d.booking.eyebrow = v) },
  { key: "VITE_BOOKING_H2_LINE1", get: (d) => d.booking.h2Line1, set: (d, v) => (d.booking.h2Line1 = v) },
  { key: "VITE_BOOKING_H2_SPAN", get: (d) => d.booking.h2Span, set: (d, v) => (d.booking.h2Span = v) },
  { key: "VITE_BOOKING_P", get: (d) => d.booking.p, set: (d, v) => (d.booking.p = v) },
  {
    key: "VITE_BOOKING_FORM_HEADING",
    get: (d) => d.booking.formHeading,
    set: (d, v) => (d.booking.formHeading = v),
  },
  {
    key: "VITE_BOOKING_SUBMIT_BTN",
    get: (d) => d.booking.submitBtn,
    set: (d, v) => (d.booking.submitBtn = v),
  },
  {
    key: "VITE_BOOKING_THANKS_TITLE",
    get: (d) => d.booking.thanksTitle,
    set: (d, v) => (d.booking.thanksTitle = v),
  },
  { key: "VITE_BOOKING_THANKS_P", get: (d) => d.booking.thanksP, set: (d, v) => (d.booking.thanksP = v) },
  {
    key: "VITE_BOOKING_FAQ_EYEBROW",
    get: (d) => d.booking.faqEyebrow,
    set: (d, v) => (d.booking.faqEyebrow = v),
  },
  {
    key: "VITE_BOOKING_FAQ_H2_LINE1",
    get: (d) => d.booking.faqH2Line1,
    set: (d, v) => (d.booking.faqH2Line1 = v),
  },
  {
    key: "VITE_BOOKING_FAQ_H2_LINE2",
    get: (d) => d.booking.faqH2Line2,
    set: (d, v) => (d.booking.faqH2Line2 = v),
  },

  { key: "VITE_CONTACT_EYEBROW", get: (d) => d.contact.eyebrow, set: (d, v) => (d.contact.eyebrow = v) },
  { key: "VITE_CONTACT_H2_LINE1", get: (d) => d.contact.h2Line1, set: (d, v) => (d.contact.h2Line1 = v) },
  { key: "VITE_CONTACT_H2_EM", get: (d) => d.contact.h2Em, set: (d, v) => (d.contact.h2Em = v) },
  { key: "VITE_CONTACT_P", get: (d) => d.contact.p, set: (d, v) => (d.contact.p = v) },
  {
    key: "VITE_CONTACT_FORM_HEADING",
    get: (d) => d.contact.formHeading,
    set: (d, v) => (d.contact.formHeading = v),
  },
  {
    key: "VITE_CONTACT_SUBMIT_BTN",
    get: (d) => d.contact.submitBtn,
    set: (d, v) => (d.contact.submitBtn = v),
  },
  {
    key: "VITE_CONTACT_THANKS_TITLE",
    get: (d) => d.contact.thanksTitle,
    set: (d, v) => (d.contact.thanksTitle = v),
  },
  { key: "VITE_CONTACT_THANKS_P", get: (d) => d.contact.thanksP, set: (d, v) => (d.contact.thanksP = v) },

  { key: "VITE_FOOTER_TAGLINE", get: (d) => d.footer.tagline, set: (d, v) => (d.footer.tagline = v) },
  { key: "VITE_FOOTER_COPYRIGHT", get: (d) => d.footer.copyright, set: (d, v) => (d.footer.copyright = v) },
  { key: "VITE_FOOTER_NOTE", get: (d) => d.footer.note, set: (d, v) => (d.footer.note = v) },
];

// Danh sách chuỗi đơn giản: VITE_PREFIX_1, VITE_PREFIX_2, ... (dừng khi gặp index rỗng)
export const STRING_LISTS = [
  { prefix: "VITE_BOOKING_SERVICE", get: (d) => d.booking.serviceOptions, set: (d, v) => (d.booking.serviceOptions = v) },
];

// Danh sách object: VITE_PREFIX_{n}_{SUFFIX} cho mỗi field, dừng khi field đầu tiên ở index n không tồn tại.
export const OBJECT_LISTS = [
  {
    prefix: "VITE_SERVICE",
    get: (d) => d.services.items,
    set: (d, v) => (d.services.items = v),
    fields: [
      ["name", "NAME"],
      ["desc", "DESC"],
      ["tone", "TONE"],
    ],
  },
  {
    prefix: "VITE_PROCESS_STEP",
    get: (d) => d.process.steps,
    set: (d, v) => (d.process.steps = v),
    fields: [
      ["title", "TITLE"],
      ["desc", "DESC"],
    ],
  },
  {
    prefix: "VITE_REVIEW",
    get: (d) => d.reviews.items,
    set: (d, v) => (d.reviews.items = v),
    fields: [
      ["text", "TEXT"],
      ["name", "NAME"],
      ["pet", "PET"],
      ["rating", "RATING"],
      ["avatar", "AVATAR"],
    ],
  },
  {
    prefix: "VITE_CASE",
    get: (d) => d.cases.items,
    set: (d, v) => (d.cases.items = v),
    fields: [
      ["tag", "TAG"],
      ["duration", "DURATION"],
      ["title", "TITLE"],
      ["desc", "DESC"],
      ["outcome", "OUTCOME"],
      ["img", "IMG"],
    ],
  },
  {
    prefix: "VITE_FAQ",
    get: (d) => d.booking.faqItems,
    set: (d, v) => (d.booking.faqItems = v),
    fields: [
      ["q", "Q"],
      ["a", "A"],
    ],
  },
];
