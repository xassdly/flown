import styles from './CirculsrProgressBar.module.css';

type CircularProgressBarProps = {
    size: number;
    strokeWidth: number;
    progress: number;
    circleColor: string;
    trackColor: string;
}

const CircularProgressBar = ({ size, strokeWidth, progress, circleColor, trackColor }: CircularProgressBarProps) => {
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference * (1 - progress / 100);

  return (
    <svg className={styles.circleSvg}  width={size} height={size}>
      <circle
        stroke={trackColor}
        fill="none"
        strokeWidth={strokeWidth}
        r={radius}
        cx={size / 2}
        cy={size / 2}
      />
      <circle
        stroke={circleColor}
        fill="none"
        strokeWidth={strokeWidth}
        r={radius}
        cx={size / 2}
        cy={size / 2}
        strokeDasharray={circumference}
        strokeDashoffset={offset}
        style={{ transition: 'stroke-dashoffset 0.1s linear' }}
      />
    </svg>
  );
};

export default CircularProgressBar;
