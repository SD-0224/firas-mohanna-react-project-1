import styles from './IconicButton.module.css'

export function IconicButton({ className, iconColor, icon, text, ...buttonProps }) {
    return (
        <button className={`${styles.btn} ${className}`} {...buttonProps}>
            <ion-icon name={icon} style={{ color: iconColor }}></ion-icon>
            <span>{text}</span>
        </button>
    )
}