import { cache } from "react";
import { notFound } from "next/navigation";
import { headers } from "next/headers";

export interface UserInformation {
  location: {
    language: {
      code: string;
      name: string;
      native: string;
    };
  };
}

const getUserInfo = cache(async () => {
  const realIP = headers().get("x-real-ip");

  try {
    const apiKey = process.env.IPREGISTRY_API_KEY;

    const result = await fetch(
      `https://api.ipregistry.co${
        realIP ? "/" + realIP : ""
      }?key=${apiKey}`
    );

    return result.json() as unknown as UserInformation;
  } catch (err) {
    console.error(err);
    notFound();
  }
});

export default getUserInfo;
