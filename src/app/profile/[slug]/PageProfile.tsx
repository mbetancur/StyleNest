"use client";
import React from "react";
import { getSupplierById } from "@/lib/api";
import { faArrowLeft, faCalendarDays, faClock, faLocationDot, faShareNodes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import "./profile.css";

interface Profile {
    id: number;
    created_at: string;
    name: string;
    imageUrl: string;
    supplyList: string;
    description: string;
}

export default function ProfilePage({ slug }: { slug: string }) {
    
    const [dataProfile, setDataProfile] = useState<Profile | null>(null);
    const [profile, setProfile] = useState(0);
    const [services, setServices] = useState<number[]>([0]);
    const router = useRouter();
    
    // load data
    useEffect(() => {
        (async () => {
        const { data } = await getSupplierById(slug);
        if (data && data.length > 0) {
            setDataProfile(data[0]);
        }
        })();
    }, [slug]);


    useEffect(() => {
        // Retrieve tab and content elements by their IDs
        const elements = {
            services: document.getElementById('services'),
            about: document.getElementById('about'),
            price: document.getElementById('price'),
            servicesContent: document.getElementById('services-content'),
            aboutContent: document.getElementById('about-content'),
            priceContent: document.getElementById('price-content')
        };
        // Ensure all elements exist before proceeding
        if (
            !elements.services ||
            !elements.about ||
            !elements.price ||
            !elements.servicesContent ||
            !elements.aboutContent ||
            !elements.priceContent
        ) {
            return;
        }
        // Mapping of profile values to corresponding tab and content
        const tabMapping: {
            [key: number]: { tab: HTMLElement; content: HTMLElement };
        } = {
            0: { tab: elements.services, content: elements.servicesContent },
            1: { tab: elements.about, content: elements.aboutContent },
            2: { tab: elements.price, content: elements.priceContent }
        };
        // Clear active state for all tabs and hide all contents
        // For tabs, remove the 'selected' class; for contents, set the class to 'hidden'
        [elements.services, elements.about, elements.price].forEach(tab =>
            tab.classList.remove('selected')
        );
        [elements.servicesContent, elements.aboutContent, elements.priceContent].forEach(content =>
            (content.className = 'hidden')
        );
        // Set active state for the current profile
        const active = tabMapping[profile];
        if (active) {
            // Add the 'selected' class to the active tab
            active.tab.classList.add('selected');
            // Set the content's class to 'visible' to display it
            active.content.className = 'visible';
        }
    }, [profile]);

    useEffect(() => {
        // Get the container element that holds the service items
        const servicesContent = document.getElementById('services-content');
        if (!servicesContent) return;
        // If no service is selected, default to the first service ([0])
        if (services.length === 0) {
            setServices([0]);
        }
        // Cache the children elements for easier access
        const children = servicesContent.children;
        // Reset all service items to the default class 'item'
        for (let i = 0; i < children.length; i++) {
            children[i].className = 'item';
        }
        // Apply the 'selected' class to each service specified in the 'services' array
        services.forEach((serviceIndex) => {
            if (serviceIndex < children.length) {
            children[serviceIndex].className = 'item selected';
        }
        });
    }, [services]);

    if (!dataProfile) {
        return <p>Cargando perfil...</p>;
    }

    const changeProfile = (index: number) => {
        setProfile(index);
    };

    const toggleServices = (number: number) => {
        if (services.indexOf(number) !== -1) {
            setServices(services.filter((item) => item !== number));
        } else {
            setServices([...services, number]);
        }
    };

    const goToProfile = () => {
        router.push(`/`); 
    };

    return (
        // <div>{dataProfile.name}</div>

        <div className="profile">
        {/* PROFILE HEADER */}
        <div className="profile-header">
            <div className="background-header"></div>
            <div className="profile-header_back" onClick={goToProfile}>
            <FontAwesomeIcon icon={faArrowLeft} /> Back
            </div>
            <div className="profile-header_info">
            <div className="profile-header_name">{dataProfile.name}</div>
            <div>{dataProfile.supplyList}</div>
            <div>💲60</div>
            </div>
            <div className="profile-header_img">
            <Image src={dataProfile.imageUrl} alt="Example" width={400} height={400} />
            </div>
        </div>

        {/* PROFILE ACTIONS */}
        <div className="profile-actions">
            <div className="profile-actions_item">
            <FontAwesomeIcon icon={faLocationDot} />
            DIRECTION
            </div>
            <div className="profile-actions_item">
            <FontAwesomeIcon icon={faShareNodes} />
            SHARE
            </div>
        </div>

        {/* PROFILE INFO */}
        <div className="profile-info">
            <div className="profile-info_select">
            <div id="services" className="selected" onClick={() => changeProfile(0)}>
                SERVICES
            </div>
            <div id="about" onClick={() => changeProfile(1)}>
                ABOUT
            </div>
            <div id="price" onClick={() => changeProfile(2)}>
                PRICE
            </div>
            </div>
            <div className="profile-info_content">
            <div id="services-content" className="services visible">
                {dataProfile.supplyList && dataProfile.supplyList.length > 0 ? (
                dataProfile.supplyList.split(",").map((supply: string, index: number) => (
                    <div
                    className={index === 0 ? "item selected" : "item"}
                    key={index}
                    onClick={() => toggleServices(index)}
                    >
                    {supply}
                    </div>
                ))
                ) : (
                <div className="item">No services</div>
                )}
            </div>
            <div id="about-content" className="about hidden">
                {dataProfile.description}
            </div>
            <div id="price-content" className="price hidden">
                <table className="price-table">
                <thead>
                    <tr>
                    <th>Service</th>
                    <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {dataProfile.supplyList && dataProfile.supplyList.length > 0 ? (
                    dataProfile.supplyList.split(",").map((supply: string, index: number) => (
                        <tr key={index}>
                        <td>{supply}</td>
                        <td>40</td>
                        </tr>
                    ))
                    ) : (
                    <tr>
                        <td colSpan={2}>No price</td>
                    </tr>
                    )}
                </tbody>
                </table>
            </div>
            </div>
        </div>

        {/* PROFILE WORKS */}
        <div className="profile-works">
            <div className="profile-works_title">Recent Works</div>
            <div className="profile-works_imgs">
            <div>
                <Image
                src="https://rznkuhtjleowjbvrmztk.supabase.co/storage/v1/object/public/userSupplierImage/barber.jpg"
                alt="Example"
                width={400}
                height={400}
                />
            </div>
            <div>
                <Image
                src="https://rznkuhtjleowjbvrmztk.supabase.co/storage/v1/object/public/userSupplierImage/barber.jpg"
                alt="Example"
                width={400}
                height={400}
                />
            </div>
            <div>
                <Image
                src="https://rznkuhtjleowjbvrmztk.supabase.co/storage/v1/object/public/userSupplierImage/barber.jpg"
                alt="Example"
                width={400}
                height={400}
                />
            </div>
            <div>
                <Image
                src="https://rznkuhtjleowjbvrmztk.supabase.co/storage/v1/object/public/userSupplierImage/barber.jpg"
                alt="Example"
                width={400}
                height={400}
                />
            </div>
            </div>
        </div>

        {/* PROFILE APPOINTMENT */}
        <div className="profile-appointment">
            <a className="profile-appointment_link" href="/" target="_blank" rel="noopener noreferrer">
            <span className="profile-appointment_text">Appointment</span>
            <div className="profile-appointment_icons">
                <FontAwesomeIcon className="calendar" icon={faCalendarDays} />
                <FontAwesomeIcon className="clock" icon={faClock} />
            </div>
            </a>
        </div>
        </div>
    );
}
