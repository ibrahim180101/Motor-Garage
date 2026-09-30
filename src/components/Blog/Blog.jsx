import React from 'react';
import blogImage from '/src/assets/images/team4.jpg'
import blogImage2 from '../../assets/images/blog.jpg'
import blogImage3 from '../../assets/images/blog1.jpg'

const Blog = () => {
    return (
        <div>
            <img className='rounded-2xl' src={blogImage} alt="" />
            <p className='text-lg text-black-base mt-12'>When your check engine light suddenly turns on, don’t panic—it doesn’t always mean disaster. Start by checking your gas cap. A loose or damaged cap is a surprisingly common cause. If tightening it doesn’t help, pay attention to how your car feels. Is it driving normally, or is the engine shaking or losing power? A blinking check engine light means something serious—stop driving and seek help right away.</p>
            <p className='text-lg text-black-base my-4'>our next step should be visiting a certified technician who can run a diagnostic scan. The scan reveals fault codes that pinpoint the problem, whether it's a failing oxygen sensor, worn spark plugs, or issues with your mass airflow sensor. Even if your car seems fine, ignoring the light could lead to costly damage. Stay ahead of problems with regular maintenance and timely repairs. At [Your Business Name], we offer a free engine light check to keep you safe on the road—no pressure, just expert advice.</p>
            <div className='mt-2 grid md:grid-cols-2 gap-6'>
                <img className='w-full h-full object-cover rounded-2xl' src={blogImage2} alt="" />
                <img className='h-full w-full object-cover rounded-2xl' src={blogImage3} alt="" />
            </div>
            <p className='mt-6 text-lg text-black-base'>Wheel alignment isn’t just about keeping your car straight—it affects your tires, fuel economy, and overall driving safety. Misaligned wheels can make your car pull to one side, cause uneven tire wear, and even strain your suspension system. You might notice the steering wheel is off-center or that your car feels unstable.  Misalignment is often caused by potholes, bumping into curbs, or rough terrain. Fixing it means adjusting your suspension so the wheels meet the road at the correct angle. This restores smooth handling, saves your tires, and improves gas mileage. Ignoring alignment can shorten your vehicle’s lifespan and cost you more in the long run. Let [Your Business Name] inspect your alignment and keep your vehicle driving straight and safe.</p>
        </div>
    );
};

export default Blog;