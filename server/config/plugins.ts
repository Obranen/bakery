export default ({ env }) => ({
  upload: {
    config: {
      breakpoints: {
        "3xl": 1686,
        "2xl": 1400,
        xl: 1200,
        lg: 992,
        md: 768,
        sm: 576,
        mobile: 320,
      },
    },
  },
  "react-icons": true,
  "entity-relationship-chart": {
    enabled: true,
    config: {
      exclude: [
        "strapi::core-store",
        "webhook",
        "admin::permission",
        "admin::user",
        "admin::role",
        "admin::api-token",
        "plugin::upload.file",
        "plugin::i18n.locale",
        "plugin::users-permissions.permission",
        "plugin::users-permissions.role",
      ],
    },
  },
});
