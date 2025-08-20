// Route: /resume
// Redirects to the Google Drive resume URL referenced in the UI components.
// If the resume link changes, update it here (search for "View Resume" references).

import { NextRequest } from "next/server";

const RESUME_URL = "https://drive.google.com/file/d/1l2jwt9Y4j8dLHvFhMI1w8_NWw2F2gQlr/view";

export function GET(_req: NextRequest) {
  // 302 (temporary) so future updates don't get cached permanently by browsers/CDNs
  return Response.redirect(RESUME_URL, 302);
}

// Optional: handle HEAD for completeness
export function HEAD(_req: NextRequest) {
  return new Response(null, {
    status: 302,
    headers: { Location: RESUME_URL },
  });
}
