// import jwt from "jsonwebtoken";
// import jwt from "@tsndr/cloudflare-worker-jwt";

// export async function verifyToken(token) {
//   try {
//     if (token) {
//       const verified = await jwt.verify(
//         token,
//         new TextEncoder().encode(process.env.NEXT_PUBLIC_JWT_SECRET)
//       );
//       console.log({ verified });
//       return verified.payload && verified.payload?.issuer;
//     }
//     return null;
//   } catch (err) {
//     console.error({ err });
//     return null;
//   }
// }
// import jwt from "jsonwebtoken";
// import jwt from "@tsndr/cloudflare-worker-jwt";

// export async function verifyToken(token) {
//   if (token) {
//     const decodedToken = jwt.verify(token, process.env.NEXT_PUBLIC_JWT_SECRET);
//     console.log("decodedToken");
//     console.log({ decodedToken });

//     const userId = decodedToken.issuer;
//     return userId;
//   }
//   return null;
// }

import { jwtVerify } from "jose";

export async function verifyToken(token) {
  try {
    if (token) {
      const verified = await jwtVerify(
        token,
        new TextEncoder().encode(process.env.NEXT_PUBLIC_JWT_SECRET)
      );
      return verified.payload && verified.payload?.issuer;
    }
    return null;
  } catch (err) {
    console.error({ err });
    return null;
  }
}
