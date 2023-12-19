import React from 'react'
import  styles  from "../TeamCard/TeamCard.module.css"
const TeamCard = ({ Pic, name, description }) => {
    return (
        <>

            <div className={styles.TeamCard}>
                <div className={styles.cardImg}>
                    <img src={Pic} className="img-fluid" alt="team-card" />
                </div>
                <div className="text-center">
                    <h4 className={styles.TeamCardText}>{name}</h4>
                    <p className={styles.team_desc}>{description}</p>
                </div>
            </div>
        </>
    )
}

export default TeamCard