import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
import { toast } from "react-toastify";
import SectionTitle from "../../shared/SectionTitle";

const ContactUs = () => {

    const handleMessage = (e) =>{
        e.preventDefault();
        toast.success('Your message has been sent...');
    }

    return (
        <section className="bg-base-100 py-6 min-h-screen">
            {/* Hero Section */}
            <SectionTitle
                title="Reach out to us"
                subtitle="Contact Us"
            />

            {/* Main Content */}
            <div className="container mx-auto px-6 md:px-12 py-6 grid grid-cols-1 lg:grid-cols-2 gap-12">

                {/* Contact Info */}
                <div className="space-y-6">
                    <h2 className="text-2xl font-semibold">Get in Touch</h2>
                    <p className="text-gray-500">
                        We’re here to help you with courses, enrollment, or any technical issues.
                    </p>

                    <div className="space-y-4">
                        <div className="flex items-center gap-4 bg-base-200 p-4 rounded-lg">
                            <FaEnvelope className="text-primary text-xl" />
                            <div>
                                <p className="font-medium">Email</p>
                                <p className="text-sm text-gray-500">support@skillsnest.com</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-4 bg-base-200 p-4 rounded-lg">
                            <FaPhoneAlt className="text-primary text-xl" />
                            <div>
                                <p className="font-medium">Phone</p>
                                <p className="text-sm text-gray-500">+880 1234-567890</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-4 bg-base-200 p-4 rounded-lg">
                            <FaMapMarkerAlt className="text-primary text-xl" />
                            <div>
                                <p className="font-medium">Address</p>
                                <p className="text-sm text-gray-500">
                                    Rajshahi, Bangladesh
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Contact Form */}
                <div className="bg-base-200 p-8 rounded-xl shadow-md">
                    <h2 className="text-2xl font-semibold mb-6">Send a Message</h2>

                    <form onClick={handleMessage} className="space-y-4">
                        <div>
                            <label className="label">
                                <span className="label-text">Your Name</span>
                            </label>
                            <input
                                type="text"
                                placeholder="Enter your name"
                                className="input input-bordered w-full"
                            />
                        </div>

                        <div>
                            <label className="label">
                                <span className="label-text">Email Address</span>
                            </label>
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="input input-bordered w-full"
                            />
                        </div>

                        <div>
                            <label className="label">
                                <span className="label-text">Message</span>
                            </label>
                            <textarea
                                className="textarea textarea-bordered w-full h-32"
                                placeholder="Write your message..."
                            ></textarea>
                        </div>

                        <button type="submit" className="btn btn-primary w-full">
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default ContactUs;
