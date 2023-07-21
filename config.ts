import { extendDeploymentConfig } from "scripts";
const config = extendDeploymentConfig({ name: "plh_facilitator_my", parent: "plh_facilitator" });

// override app constants here
config.app_config.APP_HEADER_DEFAULTS.title = "plh_facilitator_my";
config.app_config.APP_SIDEMENU_DEFAULTS.title = "plh_facilitator_my";

// example filters applied to main deployment content
config.app_data.sheets_filter_function = (flow) =>true,
config.app_data.assets_filter_function = (fileEntry) =>true

export default config;