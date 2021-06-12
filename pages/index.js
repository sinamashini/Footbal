import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { withApollo } from '../utils/withApollo';
import { useQuery } from '@apollo/client';
import { GETRESULTS } from '../lib/queries/getResult'
import Loading from '../component/loading';
import ResultsDataGrid from '../modules/results';
import styled from 'styled-components';

const Container = styled.div`
  background-image: url(${'/images/euro2021.jpg'});
`


const Home = () => {

  const { data, loading } = useQuery(GETRESULTS, {})
  if (loading) return <Loading open={loading} />

  return (
    <Container className={styles.container}>
      <Head>
        <title>Euro 2021 | Family Prediction</title>
        <meta name="description" content="Family Predict Euro 2021" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <ResultsDataGrid results={data.getResults} />
      </div>
    </Container>
  )
}

export default withApollo({ ssr: true })(Home);
