import React, { useState, useEffect } from "react";
import styles from "./Chat.module.css";
import { useRouter } from "next/router";
import { PostContactHandler } from "../../Service/contactService";
import { useDispatch } from "react-redux";

const Chat = () => {
	const dispatch = useDispatch()
	const router = useRouter();
	const [error, setError] = useState(true)
	const [showChat, setShowChat] = useState(false);
	const [chatFields, setChatFields] = useState({name: "",lName: "",number: "",message: "",email: ""});
	const [loading, setLoading] = useState(false);
	const handleEmailSend = async (e) => {
		setLoading(true);
		let data = new FormData();
		data.append("first_name", chatFields?.name);
		data.append("last_name", chatFields?.lName);
		data.append("phone", chatFields?.number);
		data.append("message", chatFields?.message);
		data.append("email", chatFields?.email);
		dispatch(PostContactHandler(data, setLoading, setChatFields));
		router.push('/thank-you');

	};

	const [toggle, setToggle] = useState(false);
	const handleChange = (e) => {
		e.preventDefault();
		setChatFields((prev) => ({
			...prev,
			[e.target.name]: e.target.value,
		}));
	};

	const handletoggle = () => {
		setToggle((prev) => !prev);
	};
	useEffect(() => {
		window.addEventListener("scroll", () => {
			if (window.scrollY > 100) {
				setShowChat(true);
			} else {
				setShowChat(false);
			}
		});
	});
	useEffect(() => {
		let hasError = true;
		Object.keys(chatFields).forEach(function (key) {
			if (chatFields[key] === "") {
				hasError = false;
			}
		});

		setError(hasError);
	}, [chatFields]);


	return (
		<>
			{showChat && (
				<div className={styles.chat__outer}>
					{toggle && (
						<div className={styles.chat__wrapper}>
							<div className={styles.chat__head}>
								<p>ELYSION Health & Wellness</p>
							</div>

							<div className={styles.mobile_icon} >

								<span>
									<img src="../images/message.svg" className="img-fluid rounded-start" alt="..." />
								</span>
								<span>
									<div className={styles.provide_text}>
										Please enter your name, number, and message for our team!
									</div>
								</span>

							</div>
							<div className={styles.chat__body}>
								<form className={styles.form}>
									<div className="row">
										<div className="col-lg-6">
											<input
												className={styles.inputField}
												label="Name"
												placeholder="Name"
												type="text"
												value={chatFields.name}
												name="name"
												onChange={handleChange}
											/>
											{error && chatFields.name.length <= 0 ? (
												<span className={styles.warning}>
													This field is required

												</span>
											) : (
												""
											)}
										</div>
										<div className="col-lg-6">
											<input
												className={styles.inputField}
												label="lName"
												placeholder="Last Name"
												type="text"
												value={chatFields.lName}
												name="lName"
												onChange={handleChange}
											/>
											{error && chatFields.lName.length <= 0 ? (
												<span className={styles.warning}>
													This field is required

												</span>
											) : (
												""
											)}
										</div>

										<div className="col-lg-6">
											<input
												className={styles.inputField}
												label="number"
												placeholder="Phone Number"
												type="number"
												value={chatFields.number}
												name="number"
												onChange={handleChange}
											/>
											{error && chatFields.number.length <= 0 ? (
												<span className={styles.warning}>
													This field is required

												</span>
											) : (
												""
											)}
										</div>
										<div className="col-lg-6">
											<input
												className={styles.inputField}
												label="email"
												placeholder="Email"
												type="email"
												value={chatFields.email}
												name="email"
												onChange={handleChange}
											/>
											{error && chatFields.email.length <= 0 ? (
												<span className={styles.warning}>
													This field is required

												</span>
											) : (
												""
											)}

										</div>
									</div>
									<textarea
										className={styles.textAreaField}
										name="message"
										value={chatFields.message}
										onChange={handleChange}
										rows={3}
										placeholder="Describe your issue..."
									></textarea>
									{error && chatFields.message.length <= 0 ? (
										<span className={styles.warning}>
											Message	can't be Empty!
										</span>
									) : (
										""
									)}
									<div className={styles.formCheckBox}>

										<span>
											<input className="form-check" type="checkbox" value="checkbox" id="flexCheckDefault" />
										</span>
										<span className={styles.checkText}>
											By clicking "SUBMIT," you agree to receive communication through the provided email and phone number, potentially including text messages, containing information about our services. Standard message rates could be applicable. You can opt out by replying "STOP" and refer to our privacy policy for more details.
										</span>

									</div>


								</form>
							</div>

							<hr />
							<div className={styles.footer_chat}>
								{
									!loading ? (
										<button
											disabled={!error}
											onClick={handleEmailSend} className={`${!error ? styles.chatPreSubmit : styles.chatSubmit}`}>Submit</button>
									)
										:
										(
											<button className={styles.chatSubmit}>Loading...</button>
										)
								}
							</div>
						</div>
					)}


					<button className={styles.popup__btn} onClick={handletoggle}>
						{toggle == true ? (
							<img src="/images/cross.svg" className={styles.pop_Icon} alt="cross-icon" />
						) : (
							<img src="/images/chat.svg" className={styles.pop_Icon} alt="chat-icon" />
						)}


					</button>
				</div>
			)}
		</>
	);
};

export default Chat;
