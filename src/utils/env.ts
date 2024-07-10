export enum ServerEnv {
  Local = "local",
  Staging = "staging",
  Production = "prod",
}

const CMS_API_DOMAIN_LOOKUP: Record<ServerEnv, string> = {
  [ServerEnv.Staging]: "api.staging.tuilink.io",
  [ServerEnv.Production]: "api.tuilink.io",
  [ServerEnv.Local]: "localhost",
};

// export const getServerEnv = (): ServerEnv => import.meta.env.MODE as ServerEnv;
// export const getAPIDomain = (): string => {

//     return CMS_API_DOMAIN_LOOKUP[getServerEnv()] ?? `api.${window.location.hostname}`;
//   };
