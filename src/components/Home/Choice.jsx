import { TbHandClick } from 'react-icons/tb';
import Title from '../../Shared/Title';
import ChoiceCard from './ChoiceCard';
import { IoCarSportOutline } from "react-icons/io5";
import { RiVerifiedBadgeFill } from "react-icons/ri";

const Choice = () => {
 
    const choices = [
    {
        "image": <RiVerifiedBadgeFill></RiVerifiedBadgeFill>,
        "title": "12 Years 12,000 Miles warranty",
        "description": "Every repair at Great Motors Auto REPAIR is backed by Advantage Auto  Repair Network Warranty"
    },
    {
        "image": <IoCarSportOutline></IoCarSportOutline>,
        "title": "We SERVICE most makes and models Domestic",
        "description": "European Import Exotic Other"
    },
    {
        "image": <TbHandClick />,
        "title": "Click to Book, Come In to Fix",
        "description": "Easily schedule your appointments online-come to our garage and get professional service, all offline"
    }
]

    return (
        <div>
            <Title title={" Why Choose Us"} subTitle={"Your Go-To Auto Care Buddy"} description={"From routine maintenance to complex repairs, we've got you covered with expert service and transparent pricing."}></Title>
            <div className='mt-12 grid lg:grid-cols-3 gap-6 mx-[7%] mb-28'>
                {
                    choices.map((choice, idx) => <ChoiceCard key={idx} choice={choice}></ChoiceCard>)
                }
            </div>
        </div>
    );
};

export default Choice;