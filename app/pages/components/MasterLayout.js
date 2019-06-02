import Header from './Header';
import Head from "next/head";
import { Container } from "next/app";
import CssBaseline from "@material-ui/core/CssBaseline";
import { MuiThemeProvider } from '@material-ui/core/styles';
import muiTheme from './muitheme/theme';

const withLayout = Page => {
  return () => (
    <Container maxWidth="sm">
     <MuiThemeProvider theme={muiTheme} >
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
        </MuiThemeProvider>
    </Container>
  )
}

export default withLayout;