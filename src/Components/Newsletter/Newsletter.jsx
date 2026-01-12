import React, { useState } from "react";
import SectionTitle from "../../shared/SectionTitle";
import { toast } from "react-toastify";

const Newsletter = () => {
    const [email, setEmail] = useState("");

    const handleSubscribe = (e) => {
        e.preventDefault();
        if (!email) {
            toast.error("Please enter a valid email address!");
            return;
        }
        // Simulate API call
        toast.success(`Subscribed successfully with ${email}!`);
        setEmail("");
    };

    return (
        <section className="pb-16 md:pb-20 bg-base-100">
            <div className="container mx-auto px-6 md:px-12">
                <SectionTitle
                    title="Stay Updated"
                    subtitle="Subscribe to Our Newsletter"
                />

                <div className="flex flex-col md:flex-row items-center justify-center gap-6 bg-base-200 px-4 py-8 rounded-2xl">
                    {/* Description */}
                    <p className="max-w-md text-center md:text-left text-base-content/80 text-sm md:text-base">
                        Subscribe to our newsletter and get the latest updates, course launches,
                        and exclusive offers directly in your inbox.
                    </p>

                    {/* Newsletter Form */}
                    <form
                        onSubmit={handleSubscribe}
                        className="flex flex-col sm:flex-row w-full max-w-xl gap-3"
                    >
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Enter your email"
                            className="input input-bordered w-full border-base-300 dark:border-base-600 focus:border-primary focus:ring focus:ring-primary/20 rounded-lg"
                            required
                        />
                        <button
                            type="submit"
                            onClick={handleSubscribe}
                            className="btn btn-primary rounded-lg w-full sm:w-auto"
                        >
                            Subscribe
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Newsletter;
