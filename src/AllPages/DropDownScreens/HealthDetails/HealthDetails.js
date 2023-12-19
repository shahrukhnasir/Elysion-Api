import React from "react";
import styles from "./HealthDetails.module.css";
import Shadow from "../../../components/Shadow/Shadow";
import TopLayout2 from "../../../components/TopLayout2/TopLayout2";
const HealthDetails = () => {
  return (
    <>
      <div className="container-fluid p-0">


        <TopLayout2
          Heading="Dr. Alex Whitaker-Lea Joins Elysion Health"
          descriptions="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
        felis eros, blandit sed mattis sit amet, porta sit amet
        orci. Maecenas sed tempor tellus. Donec tincidunt convallis
        accumsan. Curabitur congue luctus odio, et elementum ante
        accumsan eget. Phasellus mollis, mi sollicitudin tincidunt
        eleifend."
          image="../images/new/health plan.webp"
        />
        <div className={`${styles.subContainer} container`}>
          <div className={styles.setShaowRight}>
            <Shadow />

          </div>
          <h1 className={styles.subHeading}>Lorem Ipsum Dolor Sit Amet</h1>

          <div className="pb-5">
            <p className={styles.para}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse nisi neque, dapibus eu lacus at, convallis vestibulum
              diam. Suspendisse maximus, dolor interdum imperdiet euismod, enim
              velit suscipit dui, eget feugiat tortor est vitae diam. Proin
              vehicula nulla est, quis venenatis felis tincidunt non. Nam eros
              ante, congue ac nisi vitae, lacinia fermentum lorem. Sed eget erat
              aliquet, luctus metus et, efficitur mi. Integer dignissim quam in
              condimentum sagittis. Cras risus enim, aliquam non nisi a,
              consectetur vulputate mauris. Cras consectetur sem in mollis
              cursus. Suspendisse nec mollis nunc, eget malesuada ipsum. Donec
              vel sapien diam. Phasellus at consectetur magna. Nunc ultrices
              pharetra velit, non vulputate elit. Praesent in ultricies dolor,
              quis luctus orci. In dui nisl, dapibus et nunc vitae, cursus
              elementum velit.Vestibulum feugiat rutrum urna a cursus. Maecenas
              commodo fringilla libero, vel dictum orci.Vestibulum id eros nec
              urna tincidunt hendrerit in id risus. Etiam vitae augue quis elit
              blandit facilisis eu id nunc. Aliquam ut est et lorem luctus
              ornare in non metus. Suspendisse ut accumsan sapien. Nullam
              molestie vestibulum lacinia. Donec quis fringilla eros, et
              efficitur augue. Cras iaculis odio eros.
            </p>

            <p className={styles.para}>
              Nullam dui est, viverra vel orci a, rhoncus interdum dui. Donec
              sit amet ultrices leo, ut porttitor mi. Mauris vulputate aliquet
              efficitur. Nullam tempor faucibus tempus. Sed egestas pulvinar
              quam, vel faucibus lacus consequat in. Suspendisse venenatis sem
              ante, non mollis erat auctor a. Proin a eleifend nunc. Maecenas
              lacinia velit eget aliquam vehicula. Praesent lacus augue,
              sagittis et commodo eu, luctus et quam. Class aptent taciti
              sociosqu ad litora torquent per conubia nostra, per inceptos
              himenaeos. Donec ex nisi, placerat eget elementum vehicula,
              interdum id nisi.
            </p>

            <p className={styles.para}>
              Nam venenatis tempor erat, sit amet elementum tellus tincidunt at.
              Vivamus laoreet velit non felis eleifend, vel faucibus mauris
              tristique. Ut sit amet ipsum sed nulla vehicula tristique. Integer
              egestas arcu ut pellentesque ultrices. Fusce ultricies et dui sed
              fringilla. Pellentesque placerat ipsum vitae libero tincidunt
              varius. Vestibulum egestas, dolor a consectetur tincidunt, metus
              leo aliquam metus, sodales faucibus metus nulla vitae orci.
            </p>

            <p className={styles.para}>
              Proin molestie urna odio, pellentesque pulvinar ipsum tristique
              in. Nulla in massa sit amet sem ultricies condimentum. Aliquam
              fermentum arcu et tempor malesuada. Duis vitae lacinia enim, nec
              pellentesque tortor. Duis eros lectus, tincidunt at purus laoreet,
              imperdiet tincidunt felis. Nullam dignissim, nibh et pulvinar
              egestas, nisl libero sodales purus, et pellentesque ligula lacus a
              est. Nulla in convallis risus. Donec nec mauris finibus, gravida
              nibh sed, semper lectus.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default HealthDetails;
