import '../styles/app.scss';
import {makeStyles} from '@material-ui/core/styles'
// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
  const useStyle = makeStyles({
    layout:{
        position: "absolute",
        width: "100%",
        height: "100%"
    }
});
  return <div className={useStyle.layout}> <Component {...pageProps} /></div>
}