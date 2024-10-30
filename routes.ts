/**
 * An array of routes that are accessible to the public.
 * These routes do not require authetication
 * @type {string[]}
 */
export const publicRoutes: string[] = ['/', '/auth', '/auth/verification'];

/**
 * An array of routes that are used for authentication.
 * These routes will redirect logged in users to /settings
 * @type {string[]}
 */
export const authRoutes: string[] = [
  '/auth/signIn',
  '/auth/signUp',
  '/auth/error',
  '/auth/resetPassword',
  '/auth/newPassword',
];

/**
 * The prefix for API authentication routes.
 * Routes that start with this prefix are used for API authentication purposes
 * @type {string}
 */
export const apiAuthPrefix: string = 'api/auth';

/**
 * The default redirect path after logging in
 * @type {string}
 */
export const SIGNIN_REDIRECT_ROUTE: string = '/server';
