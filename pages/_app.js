import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return <div style={{ backgroundColor: "aliceblue" }}>
    <Component {...pageProps} />
  </div>
}

export default MyApp
