import styles from './styles.module.scss'


interface SubscripeButtonProps {
  priceId: string;
}


export function SubscribeButton({ priceId }: SubscripeButtonProps) {
  return (
    <button
      type="button"
      className={styles.subscribeButton}
    >
      Subscribe now
    </button>
  )
}
