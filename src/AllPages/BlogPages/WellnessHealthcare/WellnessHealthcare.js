import Shadow from "../../../components/Shadow/Shadow";
import TopLayout2 from "../../../components/TopLayout2/TopLayout2";
import styles from "../styles.module.css";
const WellnessHealthcare = () => {
  return (
    <>
      <section>
        <TopLayout2
          Heading="The Wellness model of healthcare"
          descriptions="Approximately 3% of healthcare dollars are directed toward public health and prevention. This is nowhere close to being in line with an ounce of prevention is worth a pound of cure"
          image="/images/new/blog-wellness-model.webp"
        />

        <div className={`${styles.subContainer} container`}>
          <h1 className={styles.subHeading}>
          The Wellness model of healthcare
          </h1>

          <div className={styles.setShaowRight}>
            <Shadow />
          </div>
          <div className="pb-5">
            <p className={styles.para}>
              Approximately 3% of healthcare dollars are directed toward public health and prevention. This is nowhere close to being in line with “an ounce of prevention is worth a pound of cure.” There is a steep price paid for not putting an effort into preventing disease. The burden of chronic diseases keeps increasing. So much time and investment are being spent when people are at an almost irreversible stage of their chronic disease process. This disease care model of healthcare is failing, causing a health and economic crisis. The focus needs to be on the wellness model of healthcare. Many patients might not even remember the time when they were last well. There are so many inexpensive ways to help to prevent disease or facilitate disease remission. How about a 10-minute walk? What about counselling on diet and nutrition and empowering patients to exact change? How about spending time to guide patients through setbacks and encouraging them in their success? Medications are often needed to prevent complications of chronic disease. However, simple measures with consistent follow up often will allow for gradual removal of medications and possible disease reversal.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default WellnessHealthcare;
