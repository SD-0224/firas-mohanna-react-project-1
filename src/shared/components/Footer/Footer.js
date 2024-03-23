import styles from "./Footer.module.css"

export function Footer({ year }) {
    return (
        <footer class={styles.footer}>
            <p>Developed with <span style={{ color: "#e0103d" }}>❤</span> © {year} </p>
        </footer>
    )
}