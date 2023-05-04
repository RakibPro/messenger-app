export { default } from 'next-auth/middleware';

// --- This route is now protected ---
export const config = { matcher: ['/'] };
