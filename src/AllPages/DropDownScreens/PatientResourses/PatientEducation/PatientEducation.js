import React, { useState } from "react";
import styles from "../PatientEducation/PatientEducation.module.css";
import TopLayout2 from "../../../../components/TopLayout2/TopLayout2";
const PatientGuide = () => {
  const [tab, setTab] = useState(0);

  const handleTab = (tab) => {
    setTab(tab);
  }
  return (
    <>
      <section>
        <TopLayout2
          id={styles.TopLayout}
          Title="Patient Resourses"
          Heading="Patient Education"
          descriptions="Empowering Your Health: Patient Education for Well-Informed Decision-Making"
          image="../images/new/Health planss.webp"
        />
        <div className={`${styles.subContainer} container pt-5`}>
          <div className="row g-0">
            <div className="col-lg-3 offset-lg-1">
              <ul class="list-group list-group-flush">
                <li className={tab === 0 ? styles.active : styles.noneActive} onClick={() => handleTab(0)}>
                  Nutrition
                </li>
                <li className={tab === 1 ? styles.active : styles.noneActive} onClick={() => handleTab(1)}>
                  Sleep
                </li>
                <li className={tab === 2 ? styles.active : styles.noneActive} onClick={() => handleTab(2)}>
                  Stress Reduction
                </li>
                <li className={tab === 3 ? styles.active : styles.noneActive} onClick={() => handleTab(3)}>
                  Movement
                </li>

              </ul>
            </div>

            <div className="col-lg-8 " id={styles.paraSection}>
              {tab === 0 && (<div className="pb-5">

                <div>
                  <h1 className={styles.mainHeading}>
                    Eating a Balanced Diet
                  </h1>
                  <p className={styles.para}>
                    When your healthcare provider tells you to “eat a balanced diet,” it may
                    sound easy and straightforward at first. But there are many conflicting
                    opinions about what it means to eat a healthy, balanced diet.
                  </p>
                </div>

                <h1 className={styles.subHeading}>What Is a Balanced Diet?</h1>


                <p className={styles.para}>
                  In functional nutrition, a “balanced diet” is one that works for your lifestyle,
                  health concerns, and food preferences. There isn’t one diet or way of eating
                  that works for everyone. A food plan should be tailored to you to improve
                  your overall health and well-being. For example, a person recovering from
                  a car accident has unique nutritional needs, which are very different from an
                  athlete wanting to maximize their sports performance. Different combinations
                  of protein, fat, carbohydrates, and phytonutrients can help you achieve
                  a variety of health goals. Talk to your functional medicine provider about
                  tailoring a food plan for you. Following are some tips to get you started.
                </p>

                <h1 className={styles.subHeading}>Tips for Balancing Your Diet</h1>
                <p className={styles.para}>
                  Set SMART goals. A diet of whole, fresh foods may be very different from
                  what you are used to eating. Set yourself up for success by setting small,
                  attainable goals that help you incorporate healthy changes slowly and allow
                  you to ease into the transition. You might start by replacing sodas with fizzy
                  water until you’re comfortable adding another change or tackling another
                  goal. When you’re ready, try adding a side salad to your dinner a few nights a
                  week. Small, realistic changes over time are easier to make and are more likely
                  to stick than a big, dramatic change made suddenly. Work toward improving
                  your lifestyle, not eliminating everything you love to eat.
                </p>
                <h1 className={styles.subHeading}>Stay hydrated</h1>
                <p className={styles.para}>
                  Staying hydrated helps rid the body of toxins, builds resilience
                  to stress, enhances metabolism, and promotes satiety. Everyone should drink
                  clean, filtered water throughout the day, but specific recommendations will
                  depend on your weight and activity level. Those who are very active or living
                  in warmer climates may have increased needs for hydration. Your functional
                  medicine practitioner can provide personalized water recommendations
                  suited to your lifestyle and health goals.
                  In addition to water, some other good fluid sources are broths, herbal teas,
                  and other decaffeinated beverages. Alcohol, caffeinated beverages, and
                  sugary beverages should be limited, as they tend to dehydrate the body and
                  raise cortisol and blood sugar levels.
                </p>

                <h1 className={styles.subHeading}>Don’t skip the protein</h1>
                <p className={styles.para}>Protein helps build and repair every part of the body.
                  Without enough of it, you can feel run down, lethargic, and weak. Meats,
                  eggs, poultry, and seafood are excellent protein sources, but so are certain
                  vegetables. Good plant-based protein sources include beans and legumes,
                  broccoli, Brussels sprouts, lentils, nuts and seeds, oats, spinach, and wild rice
                </p>
                <h1 className={styles.subHeading}>Eat plenty of healthy fats</h1>
                <p className={styles.para}> Healthy fats will help support brain and heart
                  health while providing your body with energy. Aim for more omega-3s
                  (from avocados, fatty fish, nuts and seeds, etc.), and fewer omega-6s (from
                  processed foods, salad dressings, and sauces; as well as processed vegetable
                  oils like canola, safflower, etc.).</p>

                <h1 className={styles.subHeading}>Opt for carbohydrates from vegetables</h1>
                <p className={styles.para}> Many people associate
                  carbohydrates with sweets and bread products, but these foods are not
                  the only sources of carbohydrates. Many healthy whole foods like fruits,
                  vegetables, beans, and lentils fall into this category, too. When balancing your
                  diet, try to get the bulk of your carbohydrates from vegetable sources. The
                  fiber found in vegetables helps balance blood sugar and improve digestion</p>

                <h1 className={styles.subHeading}>Experiment in the kitchen</h1>
                <p className={styles.para}> Play around with different foods and cooking
                  methods to discover what you like. Aim to try at least one new recipe per
                  week. You might find that you like certain vegetables more or less, depending
                  on how they are prepared. Many people discover that they enjoy vegetables
                  they didn’t like as a child. If you’re not confident in your cooking skills, try
                  taking a cooking class with a friend or browse websites dedicated to food
                  and cooking for free tutorials. The goal is to become more comfortable with
                  cooking. The more comfortable and enjoyable cooking is for you, the easier it
                  will be to incorporate it into your regular routine.</p>


                <h1 className={styles.subHeading}>Limit sugar and processed foods</h1>
                <p className={styles.para}> Excessive intake of sugars and refined
                  grains contributes to many chronic health issues. To help prevent or even
                  reverse illness, limit your intake of processed foods. Examples include shelf stable cakes and cookies, candy bars, muffins, and cereals. Read food labels
                  carefully, and select foods with little to no added sugar. Look for foods that
                  contain “100% whole” grain in the ingredients list (rather than “refined”). Try
                  switching the sweetener in your morning coffee from table sugar to a natural
                  sweetener like maple syrup or honey.</p>


                <h1 className={styles.subHeading}>Everything in moderation</h1>
                <p className={styles.para}> Part of eating a healthy, balanced diet includes
                  being flexible and relaxing your rules and restrictions around food. Being too
                  restrictive can lead to the development of disordered eating patterns. Listen
                  to your body’s cravings, and allow yourself some wiggle room. Make a point
                  to indulge occasionally without any guilt or stress about your food choices.</p>

                <h1 className={styles.subHeading}>Eat the rainbow</h1>
                <p className={styles.para}> Our bodies function best when they take in nutrients from all different types and colors of whole foods. Aim to eat at least five different
                  colors of fruits and vegetables each day. IFM’s Phytonutrient Spectrum
                  documents can help you plan your intake of colorful foods.</p>
              </div>


              )
              }

              {tab === 1 && (<div className="pb-5">

                <div>
                  <h1 className={styles.mainHeading}>
                    Suggestions for Better Sleep
                  </h1>
                  <p className={styles.para}>
                    Achieving better sleep can lead to many health improvements. This list of
                    suggestions for better sleep is not meant to be implemented in its entirety.
                    Instead, pick three to four changes to implement to improve sleep quality
                  </p>
                </div>

                <div className="">
                  <h1 className={styles.subHeading}>
                    {" "}
                    Minimize or Avoid Stimulants
                  </h1>
                </div>
                <ul className={styles.list_points}>
                  <li>Avoid alcohol (wine, beer, and hard liquor) within 3 hours of bedtime</li>
                  <li>Avoid caffeine-containing beverages or foods after 2 p.m.; if sensitive
                    to caffeine, avoid it after 12 noon. (These items include Pepsi®, Coke®,
                    Mountain Dew®; tea, coffee, lattes, and chocolate; and coffee- or espresso-containing ice creams or desserts). Read labels on everything you consume.</li>
                  <li>Avoid Sudafed® or other decongestant cold medicines at night.</li>
                  <li>Some medications may have stimulating effects. Consult your pharmacist
                    and doctor to determine whether any of them might be contributing to
                    sleep problems. Do not stop medicines without talking to your doctor</li>
                  <li>Complete aerobic exercise before 6 p.m. (or at least 3 hours before bed).
                  </li>
                </ul>
                <h1 className={styles.subHeading}>
                  {" "}
                  Nighttime Tension and Anxiety
                </h1>

                <ul className={styles.list_points}>
                  <li>Avoid anxiety-provoking activities close to bedtime.</li>
                  <li>Avoid watching the news or paying bills before going to bed</li>
                  <li>Avoid reading stimulating, exciting materials in bed</li>
                  <li>Avoid checking your financial reports or the stock market before bedtime.</li>
                  <li>Avoid arguments before bedtime. Try to achieve some action plan or
                    resolution of a discussion or argument before trying to go to sleep.</li>
                  <li>Avoid repeated negative judgments about being unable to sleep.</li>
                  <li>Use positive self-talk phrases about your ability to relax and fall asleep: “I
                    can fall asleep.” “I can relax.”</li>
                  <li>Write in a journal any disturbing thoughts running through your mind.</li>
                  <li>Schedule a time in the next few days to deal with whatever is bothering you.If you’re having trouble managing your concerns for more than a few weeks,
                    ask your healthcare provider for treatment suggestions or a therapy referral</li>
                  <li>Many relaxing yoga or stress-reducing mindful breathing CDs or DVDs are
                    available to help you find a relaxing bedtime ritual that works for you.</li>
                </ul>
                <h1 className={styles.subHeading}>
                  Sleep Planning and Preparation
                </h1>

                <ul className={styles.list_points}>
                  <li>Plan your sleep by putting it into your schedule; plan for 8-9 hours in bed.</li>
                  <li>As much as possible, go to sleep and wake up at the same time each day.
                    This will help train your biological clock.</li>
                  <li>Begin prepping for bedtime 30 minutes before getting in bed.</li>
                  <li>Avoid getting in bed after 11 p.m. as late-hour sleep is not as helpful as
                    earlier sleep.</li>
                  <li>Avoid late-afternoon or evening naps.</li>
                  <li>Avoid naps longer than 45 minutes unless you’re ill or quite sleep-deprived</li>
                  <li>Avoid large meals or spicy foods before bed.</li>
                  <li>Finish all eating 3 hours before going to sleep</li>
                  <li>Avoid drinking more than 4-8 ounces of fluid before going to bed.</li>
                  <li>Take a hot salt/soda aromatherapy bath. Raising your body temperature
                    before bed helps induce sleep. A hot bath also relaxes muscles. Add 1-2
                    cups Epsom salts (magnesium sulfate absorbed through the skin is very
                    relaxing), ½ to 1 cup baking soda (sodium bicarbonate is alkalizing to a
                    stressed-out, acidic body), and 10 drops lavender oil (helps lower cortisol)</li>

                </ul>

                <h1 className={styles.subHeading}>Strategies to Use for Trouble Falling Asleep or Staying Asleep</h1>
                <ul className={styles.list_points}>
                  <li>Don’t stay in bed more than 20-30 minutes trying to fall asleep. Leave your
                    bedroom and go to a relaxing room other than the bedroom and read or do
                    a relaxation technique (e.g., meditation)</li>
                  <li>Try reading a good neutral book under low light to help with falling asleep</li>
                  <li>If using a tablet or phone for reading, make sure they are in the nighttime
                    setting and brightness is as low as possible.</li>
                  <li>If using a light, don’t use a table lamp. Instead, use a small light that only
                    illuminates the reading material.</li>
                  <li>If you awaken early because of light, put a dark covering over your eyes</li>
                  <li>If you awaken early due to recurrent thoughts, try writing them in a journal.
                    If this doesn’t help, consider counseling. Depression might be a factor.</li>

                </ul>

                <h1 className={styles.subHeading}>Light, Noise, Temperature, and Environmental Issues</h1>
                <ul className={styles.list_points}>
                  <li>Turn down the light in the bathroom and other rooms you are in 15 minutes
                    before going to bed</li>
                  <li>Decrease the light in your bedroom by using a dimmer or a reading light
                    with a dimmer.</li>
                  <li>Consider using amber glasses for at least 30 minutes before bedtime to
                    reduce light exposure.</li>
                  <li>Use dark window shades or try a set of eye shades or a black covering for
                    your eyes when trying to sleep or if you awaken too early because of light.</li>
                  <li>Decrease irritating noises in your space by closing windows, using earplugs,
                    or using a white noise generator or a HEPA air filter</li>
                  <li>Turn off or remove any appliances or clocks that make noise.</li>
                  <li>Make sure your sleeping area is in the correct temperature range (not too
                    hot or too cold).</li>
                  <li>Avoid sleeping near electromagnetic fields (EMFs). Try to have your head
                    at least 8 feet away from EMFs, if possible. Potential sources of EMFs
                    include electrical outlets, clock radios, stereos, cell phones, and computers.
                    Consider moving these devices or moving your bed or your position in the
                    bed. Consider using a TriField® or other meter to test for EMFs.</li>
                  <li>Avoid sleeping with an electric blanket on. Instead, turn on the blanket
                    when prepping for bedtime, then turn it off when getting into bed.</li>
                </ul>
                <h1 className={styles.subHeading}>Bedding and Pillows</h1>
                <ul className={styles.list_points}>
                  <li>Consider replacing your pillows with hypoallergenic pillows. Use ultrafine
                    allergy pillow and mattress covers.</li>
                  <li>Consider using a “side sleeper” pillow under your neck when sleeping on
                    your side.</li>
                  <li>Consider using a body pillow to hug and put between your knees to align
                    your back and shoulders at night.</li>
                  <li>Roll backward at a slight angle onto a body pillow if you have hip bursitis or
                    shoulder pain</li>

                  <li>Sleep on the highest quality bed linens you can afford.</li>
                </ul>

                <h1 className={styles.subHeading}>Supplements and Light Therapy</h1>
                <ul className={styles.list_points}>
                  <li>Consider taking supplements to aid your sleep, such as:
                    <ul>
                      <li><b>Melatonin</b>: 1-5 mg to fall asleep and/or 5-20 mg time-released melatonin
                        to stay asleep</li>
                      <li><b>5-HTP</b>: 100-200 mg 1 hour before bedtime</li>

                      <li><b>Taurine</b>: 500-2,000 mg 1 hour before bedtime</li>
                      <li><b>Magnesium</b>: 200-400 mg is a typical dose</li>
                      <li><b>Other</b>: To decrease nighttime cortisol or stress, consider using
                        ashwagandha, phosphorylated serine, Lactium® casein decapeptide,
                        L-theanine, or other calming herbs.</li>
                    </ul>
                  </li>

                  <li>Establish an evening herbal tea habit, such as lemon balm and
                    passionflower, to support relaxation and sleep onset.</li>
                  <li>Consider 30 minutes of exposure to a blue or 10,000 lux bright light first
                    thing in the morning if you have been going to bed too late and want to
                    shift to an earlier bedtime.</li>

                </ul>
              </div>
              )
              }

              {tab === 2 && (<div className="pb-5">

                <div>
                  <h1 className={styles.mainHeading}>
                    Strategies for Transforming Stress
                  </h1>
                  <p className={styles.para}>
                    You can’t avoid stress, but you can manage it. Many simple relaxation
                    strategies can help you transform stress. When you practice them every
                    day, they will become healthy habits. Learning to adapt well in the face
                    of challenges can bolster your energy reserves, support your health, and
                    improve your quality of life.
                  </p>
                </div>

                <div className="">
                  <h1 className={styles.subHeading}>
                    {" "}
                    Why Stress Relief Matters
                  </h1>
                </div>
                <p className={styles.para}>
                  Stress is one of the top health concerns of the 21st century—and for a good
                  reason. The majority of visits to primary care doctors are due, in part, to the
                  effects of chronic stress. For example, prolonged stress has been linked to
                  health issues like heart disease, diabetes, and chronic pain. Ongoing stress
                  can also harm your mood, emotions, and energy level.
                  Studies suggest that practicing relaxation methods can help you cope in a
                  wide variety of situations and may improve health-related symptoms. Some of
                  the symptoms and conditions that stress-relief practices can help with include:
                </p>


                <ul className={styles.stress_list}>
                  <li>Anxiety </li>
                  <li>Cancer (during and after treatment) </li>
                  <li>Caregiver stress</li>
                  <li>Childbirth</li>
                  <li>Depression</li>
                  <li>Diabetes</li>
                  <li>Headaches, migraines</li>
                  <li>Heart disease</li>
                  <li>High blood pressure(hypertension)</li>
                  <li>Insomnia</li>
                  <li>Job-related stress</li>
                  <li>Multiple sclerosis</li>
                  <li>Pain control</li>
                  <li>Parenting stress</li>
                  <li>Parkinson’s disease</li>
                  <li>Pre-surgery stress</li>
                  <li>Quitting smoking</li>
                  <li>School-related stress</li>
                  <li>Temporomandibular joint dysfunction (TMJ) or jaw pain</li>
                </ul>
                <h1 className={styles.subHeading}>
                  {" "}
                  Ways to Manage Stress
                </h1>
                <p className={styles.para}>
                  Many proven stress-relief approaches are listed here. Choose the methods
                  that appeal to you and work them into your daily routine. For example, do
                  10 minutes of yoga every day during your lunch break. Or, listen to relaxing
                  music for 15 minutes every night before bed.
                </p>

                <ul className={styles.stress_list_points}>
                  <li>Go for a walk or do other physical activities you enjoy</li>
                  <li>Journal about things you are grateful for</li>
                  <li>Use a free gratitude app online</li>
                  <li>Listen to music that relaxes you</li>
                  <li>Dance to your favorite music</li>
                  <li>Diffuse a soothing essential oil, such as sweet orange or lavender,
                    in your home or car</li>
                  <li>Give yourself a foot massage</li>
                  <li>Enjoy a warm water footbath with lavender essential oil</li>
                  <li>Take 5 minutes to focus on breathing deeply</li>
                  <li>Visualize in detail a scene that relaxes you, such as the beach,
                    mountains, or a flower garden</li>
                  <li>Spend time with a pet</li>
                  <li>Talk with supportive friends or family</li>
                  <li>Try yoga, tai chi, or qigong</li>
                  <li>Journal about a challenging situation</li>
                  <li>Connect with nature, such as by gardening, hiking, or feeding birds</li>
                  <li>Be creative, such as by coloring, painting, woodworking, knitting,
                    scrapbooking, or other crafting</li>
                  <li>Sit in a sauna or soak in a hot tub</li>
                  <li>Get a professional massage or swap massages with a partner that
                    you trust</li>
                  <li>Enjoy a funny movie or book</li>
                  <li>Try a laughter yoga session, such as by joining others to imitate
                    different types of laughs</li>
                  <li>Spend time in spiritual or religious practices</li>
                </ul>
              </div>
              )
              }

              {tab === 3 && (<div className="pb-5">

                <div>
                  <h1 className={styles.mainHeading}>
                    The Power of Movement:Living an Active Lifestyle
                  </h1>
                  <p className={styles.para}>
                    Lack of activity destroys the good condition of every human being, while
                    movement and methodical physical exercise save it and preserve it.” —Plato
                    Being consistently active helps you to live longer, have a better quality of
                    life, improve your mental health, and improve your self-image. Adults should
                    aim for either 150-300 minutes of moderate-intensity activity per week, 75
                    minutes of high-intensity activity, or a combination of both
                  </p>
                  <p className={styles.para}>
                    You can make big improvements to your health and energy levels by
                    incorporating exercise and physical activity throughout your week. Some
                    people feel daunted by the thought of adding physical activity or don’t know
                    where to begin. Here are a few tips to support your journey:
                  </p>
                </div>

                <div className="">
                  <h1 className={styles.subHeading}>
                    {" "}
                    Emphasize fun
                  </h1>
                </div>
                <p className={styles.para}>
                  What is something you love? Whether that’s music, birds,
                  friends, trampolines, or books, you can shape your activity plan around the
                  things you love. Walk to and from a spot where you can listen to the birds
                  every day; explore local libraries from top to bottom; take the stairs when you
                  visit friends; take a dance class that incorporates music you love. Make the
                  things you love part of your activity plan.
                </p>
                <h1 className={styles.subHeading}>Create a plan</h1>
                <p className={styles.para}>
                  Create a plan and carve out time for physical activity and
                  exercise throughout the week. If you block time on your schedule for activity,
                  it is much more likely to happen. Spread your exercise minutes throughout
                  the week. Two 20-minute high-intensity interval training sessions, a one hour
                  family bike ride, and a 20 minute jog is a good example of how you can meet
                  the amount of activity recommended.S
                </p>

                <h1 className={styles.subHeading}>Involve others</h1>
                <p className={styles.para}>
                  Chances are, your friends, family, and co-workers want to
                  be more active too. Set active living goals together and aim for gradual
                  advancement and increased variety in your routine. You could walk an extra
                  two miles a week—or three more flights of stairs. Try to keep moving by
                  walking instead of sitting at the coffeeshop, or walk around the block while
                  catching up with a friend. Many cities have active groups like running or hiking
                  clubs which can be great in your home town or when traveling to keep you
                  moving.
                </p>
                <h1 className={styles.subHeading}>Add an accountability partner</h1>
                <p className={styles.para}>
                  Share your goals with a person you trust and
                  ask them to help keep you accountable by checking in. It can be helpful to
                  partner with a friend or family member who has similar interests to engage in
                  activity together and keep each other accountable. Online groups may also
                  be a great option here to help you meet and achieve your goals. Social media
                  offers many forums where individuals can post goals, encourage each other,
                  and create a community around an active lifestyle.
                </p>


                <h1 className={styles.subHeading}>Set goals</h1>

                <p className={styles.para}>Goal setting can be a fantastic tool to help you on your fitness
                  journey. Be sure to set SMART goals which stands for: specific, measurable,
                  attainable, relevant, and time-based. Post your goal in a visible area and check
                  in with it often. Share your goal with your friends, family, and accountability
                  partner. Perhaps your goal is to run a 5k by the end of the year. Set smaller
                  SMART goals that can serve as milestones to help you make progress towards
                  a larger goal.</p>
                <h1 className={styles.subHeading}>Track your progress.</h1>
                <p className={styles.para}>Consider using a pedometer app on your phone or
                  purchasing a simple pedometer and have fun with it. How many steps do
                  you take on an average work day? How many do you take on the weekend?
                  Striving for 10,000 steps a day is recommended. However, some is better than
                  none. Many apps will track a variety of activity and health metrics. In addition
                  to daily steps, many will track your total activity at different intensities each
                  week. This can keep you on track to reaching your movement target each
                  week</p>
                <h1 className={styles.subHeading}>Be forgiving and flexible</h1>
                <p className={styles.para}>
                  If you have a sedentary day, let it go. Check in
                  with your body and goals and make adjustments as needed. Sometimes work
                  and life gets hectic. Adjust your goals as needed and find creative ways to
                  be active like walking or jogging around a park while your child is at soccer
                  practice. It is about progress, not perfection
                </p>
                <b className={styles.bold}>Daily movement reduces the risk of many health conditions. If you already
                  have a condition, movement reduces the symptoms. Research shows that
                  movement helps with conditions across a broad range:</b>
                <ul className={styles.list_points}>
                  <li>Many forms of cancer</li>
                  <li>Symptoms of depression, stress, and anxiety</li>
                  <li>Cardiometabolic diseases including prediabetes, diabetes, high blood
                    pressure, and stroke</li>
                  <li>Musculoskeletal health, including osteoporosis and rheumatoid arthritis</li>
                </ul>
              </div>
              )
              }

              {tab === 4 && (<div className="pb-5">

                <div>
                  <h1 className={styles.subHeading}>
                    Lorem Ipsum Dolor Sit consectetur
                  </h1>
                  <p className={styles.para}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Praesent congue mi eget finibus suscipit. Nullam at augue
                    venenatis, cursus lorem eget, consequat massa. Curabitur
                    molestie ultrices commodo. Sed tempus urna libero, eget
                    scelerisque justo dignissim quis. Donec at viverra urna, nec
                    placerat diam. Maecenas elementum ullamcorper lacus vitae
                    viverra. Fusce accumsan interdum venenatis. Etiam ac enim
                    vitae tellus semper commodo eu vitae ipsum. Vestibulum cursus
                    fringilla mi. Donec rhoncus mollis efficitur. Sed quis felis
                    faucibus, varius metus efficitur, elementum odio. Quisque
                    interdum tellus at pellentesque molestie. Aenean imperdiet,
                    quam nec fermentum semper, purus justo porta augue, in
                    placerat purus leo quis nulla. In eget ante tristique risus
                    consequat vulputate. Nullam efficitur ut libero in bibendum.
                    Donec metus risus, condimentum vitae scelerisque sed, mattis
                    vel risus. Proin eget auctor nunc. Mauris congue dolor quis
                    justo pellentesque, vitae laoreet diam tempus. Sed posuere,
                    turpis ac interdum accumsan, diam tortor iaculis nisl, nec
                    dictum mauris ex ut velit. Sed eu massa ac nunc euismod
                    tincidunt vitae sed ex. Integer ut purus quis sapien tincidunt
                    lacinia at non mauris. Sed feugiat quis leo ut finibus.
                  </p>
                </div>

                <div className="">
                  <h1 className={styles.subHeading}>
                    {" "}
                    Lorem Ipsum Dolor Sit Amet
                  </h1>
                </div>
                <p className={styles.para}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Praesent congue mi eget finibus suscipit. Nullam at augue
                  venenatis, cursus lorem eget, consequat massa. Curabitur
                  molestie ultrices commodo. Sed tempus urna libero, eget
                  scelerisque justo dignissim quis. Donec at viverra urna, nec
                  placerat diam. Maecenas elementum ullamcorper lacus vitae
                  viverra. Fusce accumsan interdum venenatis. Etiam ac enim
                  vitae tellus semper commodo eu vitae ipsum. Vestibulum cursus
                  fringilla mi. Donec rhoncus mollis efficitur. Sed quis felis
                  faucibus, varius metus efficitur, elementum odio. Quisque
                  interdum tellus at pellentesque molestie
                </p>

                <p className={styles.para}>
                  Aenean imperdiet, quam nec fermentum semper, purus justo porta
                  augue, in placerat purus leo quis nulla. In eget ante
                  tristique risus consequat vulputate. Nullam efficitur ut
                  libero in bibendum. Donec metus risus, condimentum vitae
                  scelerisque sed, mattis vel risus. Proin eget auctor nunc.
                  Mauris congue dolor quis justo pellentesque, vitae laoreet
                  diam tempus. Sed posuere, turpis ac interdum accumsan, diam
                  tortor iaculis nisl, nec dictum mauris ex ut velit. Sed eu
                  massa ac nunc euismod tincidunt vitae sed ex. Integer ut purus
                  quis sapien tincidunt lacinia at non mauris. Sed feugiat quis
                  leo ut finibus.
                </p>
                <p className={styles.para}>
                  Cras ullamcorper venenatis tincidunt. Curabitur sodales
                  consectetur cursus. Suspendisse faucibus fringilla ornare. In
                  vulputate nulla commodo purus elementum lobortis vitae a
                  sapien. In hac habitasse platea dictumst. Maecenas sed
                  vulputate ex, a blandit nunc. Donec tempor urna convallis
                  metus porttitor eleifend. Mauris iaculis, nulla ut eleifend
                  tempor, urna dolor vulputate felis, a facilisis sem arcu at
                  ipsum. Sed tempor a dolor id aliquam. Phasellus sed ligula
                  magna. Curabitur congue massa lacus, ut accumsan nisi pharetra
                  quis. Donec eleifend enim in lorem porta consequat. Nullam
                  eget semper lorem.
                </p>

                <p className={styles.para}>
                  Curabitur eget ligula sapien. Vivamus a ultrices mi, ac
                  sollicitudin erat. Duis tempus fringilla justo a fringilla.
                  Vivamus scelerisque nisi sollicitudin, elementum felis a,
                  commodo diam. Donec condimentum dui velit, sit amet mollis
                  augue ornare ut. Nulla viverra, mauris sit amet cursus
                  rhoncus, eros quam bibendum arcu, ut scelerisque augue ex eget
                  mauris. Integer id lorem nisl. Donec sed fermentum tortor, a
                  volutpat arcu. Sed dictum, arcu ut consectetur euismod, mauris
                  sem tristique risus, sit amet luctus libero sem quis orci.
                  Cras varius, diam sit amet faucibus semper, metus turpis
                  viverra orci, in maximus dolor leo et nisl. Nulla ac ipsum
                  venenatis, eleifend lacus eget, interdum risus. Nunc
                  pellentesque urna tortor. Aliquam erat volutpat. Praesent
                  consectetur dui sed lectus pellentesque commodo ultricies ut
                  turpis. In maximus purus sed feugiat feugiat. Sed fermentum.
                  Aenean imperdiet, quam nec fermentum semper, purus justo porta
                  augue, in placerat purus leo quis nulla. In eget ante
                  tristique risus consequat vulputate. Nullam efficitur ut
                  libero in bibendum. Donec metus risus, condimentum vitae
                  scelerisque sed, mattis vel risus. Proin eget auctor nunc.
                  Mauris congue dolor quis justo pellentesque, vitae laoreet
                  diam tempus. Sed posuere, turpis ac interdum accumsan, diam
                  tortor iaculis nisl, nec dictum mauris ex ut velit. Sed eu
                  massa ac nunc euismod tincidunt vitae sed ex. Integer ut purus
                  quis sapien tincidunt lacinia at non mauris. Sed feugiat quis
                  leo ut finibus.
                </p>
              </div>
              )
              }
            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default PatientGuide;
