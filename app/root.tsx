import type { LinksFunction } from "@remix-run/node";
import stylesheet from "~/tailwind.css";
import globalstyle from "~/styles/main.css";

import {
  Await,
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useRouteError,
} from "@remix-run/react";
import { Suspense } from "react";
import LoadingTest from "./components/loading-test";
import ErrorBoundaryPage from "./components/ErrorPage";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: stylesheet },
  { rel: "stylesheet", href: globalstyle },
];



export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=0, minimum-scale=1.0, maximum-scale=1.0" />
        <Meta />
        <Links />
      </head>
      <body className="lg:overscroll-y-none overscroll-y-auto">
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}


export function ErrorBoundary() {
  const error = useRouteError()
  return (
    <html lang="en">
      <head>
        
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <meta name="description" content="Crafting Customer-Driven Digital Experiences" />
        <Meta />
        <Links />
      </head>
      <body className="lg:overscroll-y-none overscroll-y-auto">
        <Suspense fallback={<LoadingTest />}>
        <Await resolve={error}>
            {(resolvedError) => (
              <>
               
                <LoadingTest />
                <ErrorBoundaryPage error={resolvedError} />
                <ScrollRestoration />
                <Scripts />
             
              </>
            )}
          </Await>
        </Suspense>
      </body>
    </html>
  )
}