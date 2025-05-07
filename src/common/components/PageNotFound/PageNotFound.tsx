import styles from "./PageNotFound.module.css"
import { Link } from "react-router"
import Button from "@mui/material/Button"
import { Path } from "@/common/routing"

export const PageNotFound = () => (
  <div className={styles.all}>
    <h1 className={styles.title}>404</h1>
    <h2 className={styles.subtitle}>page not found</h2>
    <Button variant={'contained'} component={Link} to={Path.Main} sx={{width: '330px', mt: '20px'}} >
      Вернуться на главную
    </Button>
  </div>
)