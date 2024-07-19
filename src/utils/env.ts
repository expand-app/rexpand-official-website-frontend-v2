export enum ServerEnv {
  Local = "local",
  Development = "development",
  Production = "production",
}

const CMS_API_DOMAIN_LOOKUP: Record<ServerEnv, string> = {
  [ServerEnv.Development]: "localhost:3001",
  [ServerEnv.Production]: "cms.tuilink.io",
  [ServerEnv.Local]: "localhost:3001",
};

export const getAPIDomain = (): string => {
  console.log(process.env.APP_ENV, "+=process.env.NODE_ENV");

  return CMS_API_DOMAIN_LOOKUP[process.env.APP_ENV as ServerEnv] ?? `localhost`;
};
