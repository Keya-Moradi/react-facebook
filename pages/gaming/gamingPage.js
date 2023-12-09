import Head from 'next/head';
import styles from '../../styles/GamingPage.module.css';
import Link from 'next/link';
import Image from 'next/image';
import Sidebar from '../components/sidebar';
import Menu from '../menu';
import 

function GamingPage() {
	return (<div>
		<Image src='/logo.png' alt='engineer' width='200' height='200' />
		<Menu />
		<Sidebar />
	</div>)
}

export default GamingPage;