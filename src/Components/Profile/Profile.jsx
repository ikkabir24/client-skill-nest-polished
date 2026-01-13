import React, { useContext, useEffect, useMemo, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import userAvatar from "../../assets/user.png";
import { toast } from "react-toastify";
import LoadingPage from "../LoadingPage/LoadingPage";

const Profile = () => {
    const { user, updateUser, userLoad } = useContext(AuthContext);

    const initialData = useMemo(
        () => ({
            name: user?.displayName || "",
            email: user?.email || "",
            photoURL: user?.photoURL || "",
            phone: "",
            location: "",
            bio: "",
        }),
        [user]
    );

    const [isEditing, setIsEditing] = useState(false);
    const [isSaving, setIsSaving] = useState(false);
    const [formData, setFormData] = useState(initialData);

    // Keep form in sync if user updates after reload/login
    useEffect(() => {
        setFormData(initialData);
    }, [initialData]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleCancel = () => {
        setFormData(initialData);
        setIsEditing(false);
    };

    const handleSave = async (e) => {
        e.preventDefault();

        // Basic validation (lightweight, professional)
        if (!formData.name.trim()) {
            toast.error("Name is required.");
            return;
        }
        if (formData.photoURL && !/^https?:\/\/.+/i.test(formData.photoURL.trim())) {
            toast.error("Photo URL must be a valid link (http/https).");
            return;
        }

        try {
            setIsSaving(true);

            // Firebase Auth profile update: displayName + photoURL
            await updateUser({
                displayName: formData.name.trim(),
                photoURL: formData.photoURL.trim() || "",
            });

            toast.success("Profile updated successfully!");
            setIsEditing(false);
        } catch (err) {
            toast.error(err?.message || "Failed to update profile.");
        } finally {
            setIsSaving(false);
        }
    };

    if(userLoad) return <LoadingPage />
    return (
        <section className="bg-base-100">
            <div className="container mx-auto px-0 md:px-2">
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
                    <div>
                        <h2 className="text-2xl md:text-3xl font-bold text-base-content">
                            My Profile
                        </h2>
                        <p className="text-sm text-base-content/70 mt-1">
                            View and update your personal information.
                        </p>
                    </div>

                    <div className="flex gap-2">
                        {!isEditing ? (
                            <button
                                className="btn btn-primary"
                                onClick={() => setIsEditing(true)}
                                disabled={isSaving}
                            >
                                Edit Profile
                            </button>
                        ) : (
                            <>
                                <button
                                    type="button"
                                    className="btn btn-outline"
                                    onClick={handleCancel}
                                    disabled={isSaving}
                                >
                                    Cancel
                                </button>

                                <button
                                    type="submit"
                                    className="btn btn-primary"
                                    form="profileForm"
                                    disabled={isSaving}
                                >
                                    {isSaving ? "Saving..." : "Save Changes"}
                                </button>
                            </>
                        )}
                    </div>
                </div>

                {/* Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {/* Left: Profile Card */}
                    <div className="card border border-base-200 bg-base-100 shadow-sm">
                        <div className="card-body items-center text-center">
                            <div className="avatar">
                                <div className="w-28 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                    <img
                                        src={user?.photoURL || userAvatar}
                                        alt="profile"
                                        className="object-cover"
                                    />
                                </div>
                            </div>

                            <h3 className="mt-4 text-xl font-semibold text-base-content line-clamp-1">
                                {user?.displayName || "Your Name"}
                            </h3>

                            <p className="text-sm text-base-content/70 line-clamp-1">
                                {user?.email || "your@email.com"}
                            </p>

                            <div className="mt-4 w-full">
                                <div className="flex justify-between text-sm">
                                    <span className="text-base-content/70">Role</span>
                                    <span className="font-medium text-base-content">Student</span>
                                </div>
                                <div className="flex justify-between text-sm mt-2">
                                    <span className="text-base-content/70">Status</span>
                                    <span className="badge badge-outline">Active</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right: Editable Form */}
                    <div className="lg:col-span-2">
                        <div className="card border border-base-200 bg-base-100 shadow-sm">
                            <div className="card-body">
                                <h3 className="text-lg font-semibold text-base-content mb-1">
                                    Personal Information
                                </h3>
                                <p className="text-sm text-base-content/70 mb-6">
                                    Keep your details up to date for better communication.
                                </p>

                                <form id="profileForm" onSubmit={handleSave} className="space-y-5">
                                    {/* Name + Email */}
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div>
                                            <label className="label">
                                                <span className="label-text">Full Name</span>
                                            </label>
                                            <input
                                                name="name"
                                                value={formData.name}
                                                onChange={handleChange}
                                                disabled={!isEditing || isSaving}
                                                className="input input-bordered w-full"
                                                placeholder="Your full name"
                                            />
                                        </div>

                                        <div>
                                            <label className="label">
                                                <span className="label-text">Email</span>
                                            </label>
                                            <input
                                                name="email"
                                                value={formData.email}
                                                disabled
                                                className="input input-bordered w-full"
                                                placeholder="Email"
                                            />
                                        </div>
                                    </div>

                                    {/* Phone + Location (Firebase Auth stores only displayName/photoURL; keep UI fields for future DB) */}
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div>
                                            <label className="label">
                                                <span className="label-text">Phone</span>
                                            </label>
                                            <input
                                                name="phone"
                                                value={formData.phone}
                                                onChange={handleChange}
                                                disabled={!isEditing || isSaving}
                                                className="input input-bordered w-full"
                                                placeholder="+880 ..."
                                            />
                                        </div>

                                        <div>
                                            <label className="label">
                                                <span className="label-text">Location</span>
                                            </label>
                                            <input
                                                name="location"
                                                value={formData.location}
                                                onChange={handleChange}
                                                disabled={!isEditing || isSaving}
                                                className="input input-bordered w-full"
                                                placeholder="City, Country"
                                            />
                                        </div>
                                    </div>

                                    {/* Photo URL */}
                                    <div>
                                        <label className="label">
                                            <span className="label-text">Photo URL</span>
                                        </label>
                                        <input
                                            name="photoURL"
                                            value={formData.photoURL}
                                            onChange={handleChange}
                                            disabled={!isEditing || isSaving}
                                            className="input input-bordered w-full"
                                            placeholder="https://..."
                                        />
                                        <p className="text-xs text-base-content/60 mt-2">
                                            Tip: Use a direct image URL (png/jpg).
                                        </p>
                                    </div>

                                    {/* Bio */}
                                    <div>
                                        <label className="label">
                                            <span className="label-text">Bio</span>
                                        </label>
                                        <textarea
                                            name="bio"
                                            value={formData.bio}
                                            onChange={handleChange}
                                            disabled={!isEditing || isSaving}
                                            className="textarea textarea-bordered w-full h-28"
                                            placeholder="Write something about yourself..."
                                        />
                                    </div>

                                    {/* Mobile Save/Cancel */}
                                    {isEditing && (
                                        <div className="flex md:hidden gap-2 pt-2">
                                            <button
                                                type="button"
                                                className="btn btn-outline w-1/2"
                                                onClick={handleCancel}
                                                disabled={isSaving}
                                            >
                                                Cancel
                                            </button>
                                            <button
                                                type="submit"
                                                className="btn btn-primary w-1/2"
                                                disabled={isSaving}
                                            >
                                                {isSaving ? "Saving..." : "Save"}
                                            </button>
                                        </div>
                                    )}
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Profile;