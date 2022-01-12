import World from './World';
import styles from './Hello.module.css';

export default function Hello() {
  return (
    <div>
      <h1 style={
      {
        color : 'white',
        backgroundColor : 'red',
        opacity : 0.5,
      }
      }>Hello</h1>
      <div className={styles.box}>Hello</div>
    </div>
  );
}

// <div> 없으면 에러.
// 왜냐?
// JSX는 하나의 태그만 만들 수 있어.