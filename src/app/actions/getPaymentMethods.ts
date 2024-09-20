import { cache } from 'react'
import paymentMethods from '~/datasets/paymentMethods.json'; // Mock data for payment methods
import { notFound } from 'next/navigation'
import getUserInfo from './getUserInfo';

export interface Issuers {
    id: string,
    name: string,
    resource: string,
    image: string,
}

export interface PaymentMethod {
    id: string,
    description: string,
    image: string,
    issuers: Issuers[] | null,
    country: string | null,
}

const getPaymentMethods = cache(async () => {
    try {
        const userInfo = await getUserInfo();
        const result: PaymentMethod[] = paymentMethods.filter((paymentMethod) => {
            if (userInfo.location.language.code === paymentMethod.country || paymentMethod.country === null) {
                return paymentMethod;
            }
        });


        return result;
    } catch {
        notFound();
    }
});

export default getPaymentMethods;