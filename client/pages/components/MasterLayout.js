import Header from './Header';
import Head from "next/head";
import { Container } from "next/app";
import CssBaseline from "@material-ui/core/CssBaseline";

const withLayout = Page => {
  return () => (
    <Container maxWidth="sm">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500"
        />
      </Head>
        <Header />
        <CssBaseline />
        <Page />
    </Container>
  )
}

export default withLayout;