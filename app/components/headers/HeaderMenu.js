import React, { useState } from 'react';
import Link from 'next/link';
//react-iconsからダウンロード
import { AiOutlineMenu } from 'react-icons/ai';
import { ImCross } from 'react-icons/im';
import styles from './HeaderMenu.module.scss';
//components
import Signup from '../Signup';

export default function HeaderMenu() {
  const [menuopen, setMenuOpen] = useState(false);

  return (
    <div className={styles.top}>
      { menuopen && (
        <div className={styles.top_menu}>
          < button className={styles.top_menu_closer} onClick={() => setMenuOpen(false)} >
            <ImCross size={16} />
          </button >
          <ul className={styles.top_menu_lists}>
            <Link href="/">
              <a className={styles.link}><li className={styles.link_part}>Home</li></a>
            </Link>
            <Link href="/beginner">
              <a className={styles.link}><li className={styles.link_part}>How to use</li></a>
            </Link>
            <Link href="/reviews/new">
              <a className={styles.link}><li className={styles.link_part}>Guest Map</li></a>
            </Link>
            <Link href="/users">
              <a className={styles.link}><li className={styles.link_part}>Users</li></a>
            </Link>
            <li className={styles.component}>
              <Signup
                title="はじめる"
              />
            </li>
          </ul>
        </div>
      )}
      { !menuopen && (
        <button className={styles.top_opener} onClick={() => setMenuOpen(true)}>
          <AiOutlineMenu size={20} />
        </button>
      )}
    </div>
  )
}
