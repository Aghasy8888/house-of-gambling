import React from 'react';
import styles from './TitleAndBtnSectionStyle.module.scss'

 function TitleAndBtnSection() {
  return (
    <section className={styles.TitleAndBtnSection}>
      <div className={styles.container}>
        <h1 className={styles.title}>HOUSE OF <span>GAMBLING</span> </h1>
        <h3 className={styles.raiseYourROI}>Raise your ROI with direct advertiser</h3>
        <button>
            <div>Become a Partner</div>
        </button>
      </div>
    </section>
  )
}

export default TitleAndBtnSection;