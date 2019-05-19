import Header from './Header';
import Head from "next/head";
import { Container } from "next/app";
import CssBaseline from "@material-ui/core/CssBaseline";

const layoutStyle = {
  margin: 20,
  padding: 20,
  border: '1px solid #DDD'
}

const withLayout = Page => {
  return () => (
    <Container>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500"
        />
      </Head>
      <div style={layoutStyle}>
        <Header />
        <CssBaseline />
        <Page />
      </div>
    </Container>
  )
}

export default withLayout;