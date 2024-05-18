import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

const isProtectedRoute = createRouteMatcher([
  '/',
  '/profile(.*)',
  '/coins(.*)',
  '/editing/(.*)',
  // '/api/webhooks/clerk'
]);

export default clerkMiddleware((auth, req) => {
  if (isProtectedRoute(req)) auth().protect();
  // publicRoutes: ['/api/webhooks/clerk']
});

export const config = {
  matcher: ["/((?!.+.[w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};