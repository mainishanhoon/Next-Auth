/**
 * An array of routes that are accessible to the public.
 * These routes do not require authetication
 * @type {string[]}
 */
export const publicRoutes = ['/'];

/**
 * An array of routes that are used for authentication.
 * These routes will redirect logged in users to /settings
 * @type {string[]}
 */
export const authRoutes = ['/auth/signIn', '/auth/signUp'];

/**
 * The prefix for API authentication routes.
 * Routes that start with this prefix are used for API authentication purposes
 * @type {string}
 */
export const apiAuthPrefix = 'api/auth';

/**
 * The default redirect path after logging in
 * @type {string}
 */
export const SIGNIN_REDIRECT_ROUTE = '/settings';
