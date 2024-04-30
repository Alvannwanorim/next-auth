/**
 * An array of routes that are accessible to public
 * These routes do no require authentication
 * @types {string[]}
 */
export const publicRoutes = ["/"];

/**
 * An array of routes that ar used for authentication
 * These routes redirect logged in used to /settings
 * @types {string[]}
 */
export const authRoutes = ["/auth/login", "/auth/register"];

/**
 * The prefix for API authentication routes
 * Routes that start with this prefix are used for API authentication purposes
 * @types {string}
 */
export const apiAuthPrefix = "/api/auth";

export const DEFAULT_LOGIN_REDIRECT = "/settings";
