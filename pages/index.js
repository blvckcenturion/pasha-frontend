import Head from 'next/head'
import { useWindowSize } from '../utils/windowDimensions';

export default function Home() {
  const {width, height} = useWindowSize();
  console.log(width)

  return (
    <div>
      <h1>PASHA</h1>
      <h2>Hello Everyone!</h2>
      <h3>Hello Everyone!</h3>
      <h4>Hello Everyone!1</h4>
      <h4 className="b success">Hello Everyone!1</h4>
      <p>Hello Everyone!</p>
      <p className="b error">Hello Everyone!</p>
      <button>Hello Everyone!</button>
      <h1>PASHA</h1>
      <h2>Hello Everyone!</h2>
      <h3>Hello Everyone!</h3>
      <h4>Hello Everyone!1</h4>
      <h4 className="b success">Hello Everyone!1</h4>
      <p>Hello Everyone!</p>
      <p className="b error">Hello Everyone!</p>
      <button>Hello Everyone!</button>
      <h1>PASHA</h1>
      <h2>Hello Everyone!</h2>
      <h3>Hello Everyone!</h3>
      <h4>Hello Everyone!1</h4>
      <h4 className="b success">Hello Everyone!1</h4>
      <p>Hello Everyone!</p>
      <p className="b error">Hello Everyone!</p>
      <button>Hello Everyone!</button>
      <h1>PASHA</h1>
      <h2>Hello Everyone!</h2>
      <h3>Hello Everyone!</h3>
      <h4>Hello Everyone!1</h4>
      <h4 className="b success">Hello Everyone!1</h4>
      <p>Hello Everyone!</p>
      <p className="b error">Hello Everyone!</p>
      <button>Hello Everyone!</button>
      <h1>PASHA</h1>
      <h2>Hello Everyone!</h2>
      <h3>Hello Everyone!</h3>
      <h4>Hello Everyone!1</h4>
      <h4 className="b success">Hello Everyone!1</h4>
      <p>Hello Everyone!</p>
      <p className="b error">Hello Everyone!</p>
      <button>Hello Everyone!</button>
      <h1>PASHA</h1>
      <h2>Hello Everyone!</h2>
      <h3>Hello Everyone!</h3>
      <h4>Hello Everyone!1</h4>
      <h4 className="b success">Hello Everyone!1</h4>
      <p>Hello Everyone!</p>
      <p className="b error">Hello Everyone!</p>
      <button>Hello Everyone!</button>
    </div>
  )
}
