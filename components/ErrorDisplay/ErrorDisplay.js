import React from 'react';
import PropTypes from 'prop-types';
import Head from 'components/head';
import styles from './ErrorDisplay.css';

ErrorDisplay.propTypes = { statusCode: PropTypes.number };

ErrorDisplay.defaultProps = { statusCode: undefined };

// Formerly known as FourOhFour (404)
function ErrorDisplay({ statusCode }) {
  return (
    <>
      <Head title={statusCode ? `${statusCode}` : 'Error'}>
        <meta name="robots" content="noindex, nofollow" key={statusCode} />
      </Head>

      <div className={styles.ErrorDisplay}>
        <div className={styles.bg}>
          <h1 className={styles.title}>{statusCode}!</h1>
          <p className={styles.paragraph}>You definitely weren&apos;t supposed to see this...</p>
        </div>
      </div>
    </>
  );
}

export default ErrorDisplay;
