import React from "react";
import { Layout } from "@/components/template/Layout";
import Head from "next/head";
import GalleryTemplate from "@/components/template/GalleryTemplate";

export default function GalleryPage() {
    return (
        <>
            <Head>
                <title>Galeri Kegiatan | LPK PB Merdeka</title>
                <meta name="description" content="Koleksi foto dan video kegiatan LPK PB Merdeka" />
            </Head>
            <Layout>
                <GalleryTemplate />
            </Layout>
        </>
    );
}
