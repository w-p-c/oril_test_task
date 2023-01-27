export {};

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      APP_PORT?: string;
      REDIS_PORT?: string;
      REDIS_HOST?: string;
    }
  }
}
