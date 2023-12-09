import Head from 'next/head';
import styles from '../../styles/GamingPage.module.css';
import Link from 'next/link';
import Image from 'next/image';

function GamingPage() {
    // return the image only
    return <Image src='/engineer.png' alt='engineer' width='200' height='200' />

}

// Sidebar component
const Sidebar = () => {
    return (
        <div className={styles.sidebar}>
            {/* Sidebar content goes here */}
            <h2>Sidebar</h2>
            <p>Some sidebar content...</p>
        </div>
    );
};

// Grid component
const Grid = () => {
    return (
        <div id="main-content">
            {/* Grid items go here */}
            <div className={styles.grid - item}>Grid Item 1</div>
            <div className={styles.grid - item}>Grid Item 2</div>
            <div className={styles.grid - item}>Grid Item 3</div>
            {/* Add more grid items as needed */}
        </div>
    );
};


export default GamingPage;