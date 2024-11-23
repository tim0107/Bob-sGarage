import React from "react";
import './staff.css'
import TimStaffImg from './Tim.jpeg';
import NguyenStaffImg from './Nguyen.jpeg';
import SaStaffImg from './Rosa.jpeg';
import BobStaffImg from './Bob.jpeg';



export default function Staff() {
    return (
        <div className="staffDiv">
            <h1 className="h1Staff">Meet our staff</h1>
            <h2 className="h2Staff"> Mechanics:</h2>
            <h4 className="pStaff">Tim-Head Mechanics <br />I’d like to introduce Tim, our esteemed head mechanist here at Bob's Garage. With a deep understanding of mechanical systems and a proven track record of leading complex projects, Tim brings both technical expertise and strong leadership to our team. Over the years, he has demonstrated an exceptional ability to troubleshoot, innovate, and optimize mechanical processes, ensuring that our operations run smoothly and efficiently.</h4>
            <img src={TimStaffImg} alt="Tim - Head Mechanic" className="staffImage" />
            <h4 className="pStaff">Nguyen-Side Mechanics <br />I’d like to introduce Nguyen, our skilled side mechanist at Bob's Garage. Nguyen plays a critical role in supporting our mechanical operations with a strong attention to detail and a deep knowledge of mechanical systems. Known for his problem-solving abilities and hands-on approach, Nguyen is always ready to tackle challenges and ensure our projects stay on track.</h4>
            <img src={NguyenStaffImg} alt="Nguyen - Head Mechanic" className="staffImage" />


            <h2 className="h2Staff" >Receptionist</h2>
            <h4 className="pStaff">I’d like to introduce Sa, our friendly and efficient receptionist at Bob's Garage. Sa is the first point of contact for our clients, ensuring that everyone who walks through our doors receives a warm welcome and exceptional service. With strong organizational skills and an eye for detail, Sa manages appointments, handles inquiries, and keeps our front desk running smoothly.</h4>
            <img src={SaStaffImg} alt="Sa - Head Mechanic" className="staffImage" />

            <h2 className="h2Staff" >Manager</h2>
            <h4 className="pStaff" >I’d like to introduce Bob, the dedicated manager at Bob's Garage. With years of experience in the automotive industry, Bob leads our team with a clear vision and a strong commitment to excellence. He is not only responsible for overseeing daily operations but also for ensuring that we deliver top-quality service to all our clients.</h4>
            <img src={BobStaffImg} alt="Bob - Head Mechanic" className="staffImage" />


        </div>
    )
}