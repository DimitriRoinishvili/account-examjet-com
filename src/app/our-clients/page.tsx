import Breadcrumb from "@/components/Common/Breadcrumb";
import {Metadata} from "next";
import {BASE_PATH, PAGE_SUFFIX} from '@/config';
import Image from 'next/image';

export const metadata: Metadata = {
    title: `Our Clients | ${PAGE_SUFFIX}`
};

const OurClientsPage = () => {
    return (
        <>
            <Breadcrumb pageName="Our Clients"/>

            <div className="container">
                <h2 className="my-5 text-center text-3xl font-bold leading-tight text-black dark:text-white sm:text-2xl sm:leading-tight md:text-3xl md:leading-tight">
                    We’re proud to work with these amazing clients and partners
                </h2>
            </div>

            <div className="container mb-8">
                <div className="flex gap-16 justify-center items-center flex-wrap">
                    <Image src={`${BASE_PATH}/images/clients/NVU-Logo.webp`}
                           alt="NVU"
                           width={400}
                           height={270}
                           className="w-[210px] h-[75px]"/>

                    <Image src={`${BASE_PATH}/images/clients/BTU-ENG.webp`}
                           alt="BTU"
                           width={150}
                           height={150}
                           className="w-[150px] h-[150px]"/>

                    <Image src={`${BASE_PATH}/images/clients/gau-en.webp`}
                           alt="GAU"
                           width={200}
                           height={100}
                           className="w-[200px] h-[100px]"/>
                </div>
            </div>

            <div className="pt-12"></div>
        </>
    );
};

export default OurClientsPage;
