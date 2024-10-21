import { Navbar } from "@/components/Navbar";
import styles from "./page.module.css";

import {Button} from '@mui/material'

export default function Home() {
  return (
    <div className={styles.page}>

      Главная страница
      <Button>Эо</Button>
    </div>
  );
}
