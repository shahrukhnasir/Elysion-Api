import styles from "../commanStyle.module.css";
import CommanButton from "../../components/CommanButton/CommanButton";
import Link from "next/link";
import ServiceCardComman from "../../components/ServiceCardComman/ServiceCardComman";
import TopLayout from "../../components/TopLayout/TopLayout";
import service from "../constant/serviceData";
const InternalIntegrativeMedicine = () => {

	return (
		<>
			<div className="container-fluid p-0">
				<TopLayout
					Heading="Internal And Integrative Medicine"
					descriptions="Nutrition |Movement |Lifestyle |Supplements |Nutraceuticals"
					image="../images/new/integrative medicine.webp"
				/>
				<div className="container">
			
							<>
								<div className="row">
									<div className="col-lg-6 py-3">
										<p className={styles.paragraph}>
                    combines conventional medical practices with complementary and lternative therapies to provide wholistic, patient-centered care. It focuses on treating the whole person and addressing the root causes of illness. This approach integrates the expertise of internal medicine physicians with evidence-based complementary therapies such as lifestyle management acupuncture, herbal medicine, and mindfulness-based stress reduction. The goal is to optimize health outcomes by considering physical, emotional, social, and environmental factors, and developing personalized treatment plans
										</p>



										<div className="pt-2">
											<Link href="https://elysionhealth.md-hq.com/embedded/schedule.php">
												<CommanButton label="Book Now" />
											</Link>
										</div>
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

export default InternalIntegrativeMedicine;
