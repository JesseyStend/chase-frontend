import { cache } from 'react'
import { notFound } from 'next/navigation'

export interface UserInformation { 
    location: {
        language: {
            code: string,
            name: string
            native: string
        },
    }
}

const getUserInfo = cache(async () => {
    try {
        const apiKey = process.env.IPREGISTRY_API_KEY;

        const result = await fetch('https://api.ipregistry.co?key=' + apiKey);

        return result.json() as unknown as UserInformation;
    } catch {
        notFound();
    }
});

export default getUserInfo;