import React from 'react';
import styles from './styles.module.scss';
import Link from 'next/link';
import Image from 'next/image';
import { getServerAuthSession } from '@/app/api/server/auth';
import logo from '../app/shared/media/logo.svg';
import NavBar from './NavBar';

export default async function Header() {
  const authSession = await getServerAuthSession();

  return (
    <header className={styles.header}>
      <div className={styles.header__logo}>
        <Link href='/'>
          <Image
            src={logo}
            alt='shaker'
            width={40}
            height={40}
            priority={false}
          />
        </Link>
      </div>

      <NavBar user={authSession?.user} />
    </header>
  )
}
