import { useState } from 'react';
import MediaCard from '../components/MediaCard/MediaCard';
import { useTrending } from '../hooks/useTrending';
import styles from './../styles/Page.module.css'
import Modal from '../components/Modal/Modal';
import Details from '../components/Details/Details';
import type { All } from '../types/types';

export default function Home() {
    const [selected, setSelected] = useState<All | null>(null);

    const { trending, loading, error } = useTrending();

    if (loading) {
        return <div className={styles.message}>Loading…</div>;
    }
    if (error) {
        return <div className={styles.message}>Error: {error.message}</div>;
    }

    return (
        <>
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

            {selected && (
                <Modal onClose={() => setSelected(null)} >
                    <Details item={selected} />
                </Modal>
            )}
        </>

    );
}