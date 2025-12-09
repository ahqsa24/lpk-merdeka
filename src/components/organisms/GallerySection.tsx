import React, { useState } from 'react';
import GalleryItem, { GalleryItemProps } from '../molecules/GalleryItem';
import GalleryFilter from '../molecules/GalleryFilter';
import { Heading, Paragraph } from '../atoms';

const galleryItems: GalleryItemProps[] = [
    {
        id: 1,
        type: 'photo',
        category: 'training',
        title: "Pelatihan Bahasa Jepang Intensif",
        date: "12 Okt 2023",
        image: "https://images.unsplash.com/photo-1540316281786-90c74f762634?q=80&w=1600&auto=format&fit=crop",
    },
    {
        id: 2,
        type: 'video',
        category: 'activity',
        title: "Senam Pagi Bersama Siswa",
        date: "15 Okt 2023",
        image: "https://images.unsplash.com/photo-1571408854495-2cc675c2e921?q=80&w=1600&auto=format&fit=crop",
    },
    {
        id: 3,
        type: 'photo',
        category: 'ceremony',
        title: "Upacara Kelulusan Angkatan 2023",
        date: "20 Okt 2023",
        image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=1600&auto=format&fit=crop",
    },
    {
        id: 4,
        type: 'photo',
        category: 'culture',
        title: "Pengenalan Budaya Minum Teh",
        date: "25 Okt 2023",
        image: "https://images.unsplash.com/photo-1528164344705-47542687000d?q=80&w=1600&auto=format&fit=crop",
    },
    {
        id: 5,
        type: 'video',
        category: 'training',
        title: "Simulasi Wawancara Kerja",
        date: "01 Nov 2023",
        image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=1600&auto=format&fit=crop",
    },
    {
        id: 6,
        type: 'photo',
        category: 'activity',
        title: "Kunjungan Industri",
        date: "05 Nov 2023",
        image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1600&auto=format&fit=crop",
    },
    {
        id: 7,
        type: 'photo',
        category: 'training',
        title: "Kelas Fisik & Disiplin",
        date: "10 Nov 2023",
        image: "https://images.unsplash.com/photo-1517863554189-9477e8dc2d63?q=80&w=1600&auto=format&fit=crop",
    },
    {
        id: 8,
        type: 'video',
        category: 'culture',
        title: "Festival Musim Panas (Natsu Matsuri)",
        date: "15 Nov 2023",
        image: "https://images.unsplash.com/photo-1533035353720-f1c6a75cd8ab?q=80&w=1600&auto=format&fit=crop",
    }
];

const categories = [
    { id: 'all', label: 'Semua' },
    { id: 'photo', label: 'Foto' },
    { id: 'video', label: 'Video' }
];

const GallerySection = () => {
    const [activeFilter, setActiveFilter] = useState('all');

    const filteredItems = galleryItems.filter(item => {
        if (activeFilter === 'all') return true;
        if (activeFilter === 'photo' || activeFilter === 'video') return item.type === activeFilter;
        return item.category === activeFilter;
    });

    return (
        <section className="bg-white py-20 min-h-screen">
            <div className="container mx-auto px-6 lg:px-12 xl:px-24">

                {/* Header */}
                <div className="text-center mb-12">
                    <Heading className="text-4xl lg:text-5xl font-extrabold text-gray-900 mb-4">Galeri Kami</Heading>
                    <Paragraph className="text-gray-600 max-w-2xl mx-auto">
                        Momen-momen berharga dari kegiatan pelatihan, budaya, dan keseruan siswa LPK PB Merdeka.
                    </Paragraph>
                </div>

                {/* Filters */}
                <GalleryFilter
                    filters={categories}
                    activeFilter={activeFilter}
                    onFilterChange={setActiveFilter}
                />

                {/* Masonry Grid */}
                <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
                    {filteredItems.map(item => (
                        <GalleryItem key={item.id} {...item} />
                    ))}
                </div>

                {filteredItems.length === 0 && (
                    <div className="text-center py-20 text-gray-500">
                        <p>Tidak ada media ditemukan untuk kategori ini.</p>
                    </div>
                )}

            </div>
        </section>
    );
};

export default GallerySection;
