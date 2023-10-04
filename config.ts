import { generateDeploymentConfig } from "scripts";
const config = generateDeploymentConfig("plh_facilitator_my");

/**
 * The default config should ideally be a superset of any extended configs
 * to allow for easier post-processing
 */

config.google_drive = {
  sheets_folder_ids: ["1k8zJfBeOm18gYDsk0XmdUm7OFtZDUY9R", "1bFeLrhGRb0jjCMa77tTRQcGYkgH0CYeC"],
  assets_folder_ids: ["1KcHDI7O4o2_FZ_YlXsz-8OqN3ehsfdVf", "16eHPz7W9-AHURP-rILGDtENKmkTKwqdc"],
};

config.git = {
  content_repo: "https://github.com/IDEMSInternational/plh-facilitator-app-my-content.git",
  content_tag_latest: "1.1.4",
};

config.app_data.output_path = "./app_data";

config.app_config.APP_LANGUAGES.default = "gb_en";
config.app_config.APP_SIDEMENU_DEFAULTS.title = "FacilitatorApp MY";
config.app_config.APP_HEADER_DEFAULTS.title = "FacilitatorApp";
config.app_config.NOTIFICATION_DEFAULTS.title = "New message from FacilitatorApp";
config.app_config.NOTIFICATION_DEFAULTS.text = "You have a new message from FacilitatorApp";
config.app_config.APP_THEMES.available = ["default", "professional"];
config.app_config.APP_THEMES.defaultThemeName = "professional";
config.app_config.APP_UPDATES.enabled = true;
config.app_config.APP_UPDATES.completeUpdateTemplate = "app_update_complete";
config.app_config.APP_FOOTER_DEFAULTS.templateName = "footer";

export default config;
