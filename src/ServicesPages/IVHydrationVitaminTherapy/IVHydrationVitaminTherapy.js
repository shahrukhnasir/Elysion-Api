import styles from "../commanStyle.module.css";
import CommanButton from "../../components/CommanButton/CommanButton";
import Link from "next/link";
import ServiceCardComman from "../../components/ServiceCardComman/ServiceCardComman";
import TopLayout from "../../components/TopLayout/TopLayout";
import FlipServiceCard from "../../components/FlipServiceCard/FlipServiceCard";
import service from "../constant/serviceData";
const IVHydrationVitaminTherapy = () => {
	return (
		<>
			<div className="container-fluid p-0">
				<TopLayout
					Heading="IV Hydration & Vitamin Therapy"
					descriptions="Revitalize and Recharge: Exploring the Benefits of IV Hydration and Vitamin Therapy"
					image="/images/new/IV hydration & vitamin therapy-Pic.webp"
				/>
				<div className="container">
				 <div className="row">
								<div className="col-lg-6 py-3">
									<p className={styles.paragraph}>
									IV hydration and vitamin therapy involve the administration of fluids, electrolytes, and essential nutrients directly into the bloodstream. IV hydration is used to restore fluids in dehydrated individuals, while vitamin therapy delivers vitamins and minerals for various purposes. These therapies bypass the digestive system, allowing for faster absorption
									</p>

									<p className={styles.paragraph}>Revitalize and Recharge: Exploring the Benefits of IV Hydration and Vitamin Therapy</p>

									<div className="pt-2">
										<Link href="https://elysionhealth.md-hq.com/embedded/schedule.php">
											<CommanButton label="Book Now" />
										</Link>
									</div>
								</div>
							</div>

						<>
							<div className="row">
								<div
									className="col-lg-4"
									data-aos="fade-up"
									data-aos-duration="2000"
								>
									<FlipServiceCard
										Img="/images/iv/IV-Aging.jpeg"
										Title="Anti-aging"
										backDesc="Glutathione, Vit C, Biotin $250-Powerful antioxidant blend to quench free radicals"
									/>
								</div>

								<div
									className="col-lg-4"
									data-aos="fade-up"
									data-aos-duration="2000"
								>
									<FlipServiceCard
										Img="/images/iv/IV-Detox.jpeg"
										Title="Detoxification and anti-oxidants"
										backDesc="Vit C And Glutathione $250-Super Mix To Promote Detoxification"
									/>
								</div>

								<div
									className="col-lg-4"
									data-aos="fade-up"
									data-aos-duration="2000"
								>
									<FlipServiceCard
										id={9}
										Img="/images/iv/IV-Energize.jpeg"
										Title="Energize"
										backDesc="$200-B12 And B Complex, Magnesium -Energy Boosting Infusion"
									/>
								</div>

								<div
									className="col-lg-4"
									data-aos="fade-up"
									data-aos-duration="2000"
								>
									<FlipServiceCard
										id={9}
										Img="/images/iv/IV-Imune-Fxn.jpeg"
										Title="Immune fxn"
										backDesc="$200-B Complex, Vit C, Zinc -Boosts The Immune System"
									/>
								</div>

								<div
									className="col-lg-4"
									data-aos="fade-up"
									data-aos-duration="2000"
								>
									<FlipServiceCard
										id={9}
										Img="/images/iv/IV-Hydration.jpeg"
										Title="IV Hydration"
										backDesc="heading5"
									/>
								</div>

								<div
									className="col-lg-4"
									data-aos="fade-up"
									data-aos-duration="2000"
								>
									<FlipServiceCard
										id={9}
										Img="/images/iv/IV-NAD.png"
										Title="NAD therapy"
										backDesc="$300 - IV NAD+ therapy is a beneficial treatment for age-related diseases and chronic fatigue. It helps boost metabolism, increase energy, slow down aging, reduce inflammation, and potentially reverse neurodegenerative diseases and chronic illnesses"
									/>
								</div>

								<div
									className="col-lg-4"
									data-aos="fade-up"
									data-aos-duration="2000"
								>
									<FlipServiceCard
										id={9}
										Img="/images/iv/IV-Glutathione.jpeg"
										Title="Glutathione therapy"
										backDesc="$200 -IV Glutathione therapy is a naturally occurring antioxidant in the body. The therapy aims to support detoxification, boost the immune system, combat oxidative stress, and potentially improve skin health"
									/>
								</div>

								<div
									className="col-lg-4"
									data-aos="fade-up"
									data-aos-duration="2000"
								>
									<FlipServiceCard
										id={9}
										Img="/images/iv/IV-Personal-Coctail.jpeg"
										Title="Personal cocktail $150+"
										backDesc=""
									/>
								</div>

								<div
									className="col-lg-4"
									data-aos="fade-up"
									data-aos-duration="2000"
								>
									<FlipServiceCard
										id={9}
										Img="/images/new/IV hydration & vitamin therapy-Pic.webp"
										Title='Your mix-choose your antioxidants and minerals'
										backDesc=""
									/>
								</div>
							</div>
						</>

					<hr />
				</div>

				{/* People also Search for */}
				<div className="container py-5">
					<h1 className={styles.details}>People also Search for</h1>
					<div className="row">
						{service.map((item) => {
							return (
								<div className="col-lg-4">
									<ServiceCardComman
										link={item?.link}
										Title={item?.Title}
										Descriptions={item?.Desc}
										className={styles.serviceCardCol}
									/>
								</div>
							);
						})}
					</div>
				</div>
			</div>
		</>
	);
};

export default IVHydrationVitaminTherapy;
 