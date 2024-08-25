import styles from './HeadingSmall.module.scss';

const HeadingSmall: React.FC<{children: React.ReactNode, className?: string}> = ({children, className}) => {
    const classes = `${styles.headingSmall} ${className ? className : ''}`; 

    return <h3 className={classes}>{children}</h3>
}

export default HeadingSmall;