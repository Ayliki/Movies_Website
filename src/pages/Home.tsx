import { useState } from 'react';
import MediaCard from '../components/MediaCard/MediaCard';
import { useTrending } from '../hooks/useTrending';
import styles from './../styles/Page.module.css'
import Modal from '../components/Modal/Modal';
import Details from '../components/Details/Details';
import type { All } from '../types/types';
import Pagination from '../components/Pagination/Pagination';

export default function Home() {
    const [selected, setSelected] = useState<All | null>(null);
    const [page, setPage] = useState(1);

    const { trending, loading, error } = useTrending(page);

    if (loading) {
        return <div className={styles.message}>Loading…</div>;
    }
    if (error) {
        return <div className={styles.message}>Error: {error.message}</div>;
    }

    return (
        <>
            <Pagination totalPages={20} currentPage={page} onPageChange={setPage} />

            <div className={styles.container}>
                {trending.map(item => (
                    <div key={item.id}>
                        <button
                            onClick={() => setSelected(item)}
                            className={styles.cardButton}
                        >
                            <MediaCard key={item.id} item={item} />
                        </button>
                    </div>

                ))}
            </div>

            <Pagination totalPages={20} currentPage={page} onPageChange={setPage} />

            {selected && (
                <Modal onClose={() => setSelected(null)} >
                    <Details item={selected} />
                </Modal>
            )}
        </>

    );
}