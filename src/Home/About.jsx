

const About = () => {
    return (
        <div className="flex justify-center items-center">           
            <div>
                <h2 className="text-5xl font-bold mb-5">About this site</h2>
                <p>Your web application is designed to streamline the management of both employees and assets effectively. It allows for comprehensive employee management by enabling users to add, edit, and delete employee records, ensuring that up-to-date information such as contact details, job roles, and departmental assignments are maintained. In terms of asset management, the system provides robust tools for adding new assets with detailed descriptions, editing existing asset information, and removing outdated or disposed assets from the database. The application also facilitates asset distribution, allowing administrators to assign assets to employees and track their status, ensuring that the location and ownership of each asset are always clear. This integrated approach not only improves the accuracy and efficiency of managing assets and personnel but also enhances organizational control and transparency. With features such as role-based access control and notifications, the system ensures that only authorized users can make changes and that all relevant parties are kept informed of important updates and actions.</p>
            </div>
            <img className="h-[700px]" src="https://i.ibb.co/2Y2XTVV/Corporate-lady.png" alt="" />
        </div>
    );
};

export default About;