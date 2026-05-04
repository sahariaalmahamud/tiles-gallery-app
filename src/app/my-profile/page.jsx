import ProfileUpdate from "@/Components/MyProfile/ProfileUpdate/ProfileUpdate";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { Avatar, Card } from "@heroui/react";
import Link from "next/link";

const MyProfilePage = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  const user = session?.user;

  return (
    <div className="min-h-screen bg-linear-to-br from-gray-50 to-gray-100 py-12 px-4">
      <div className="max-w-2xl mx-auto">
        {/* Back Button */}
        <Link href="/" className="inline-flex items-center gap-2 text-[#FF653F] font-semibold mb-8 hover:gap-3 transition-all">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Home
        </Link>

        <div className="space-y-8">
          {/* Header */}
          <div className="text-center space-y-3">
            <h1 className="text-4xl font-bold text-[#0b0031]">My Profile</h1>
            <p className="text-gray-600 text-lg">Manage your account information and preferences</p>
          </div>

          {/* Profile Card */}
          <Card className="border border-gray-200 rounded-2xl overflow-hidden shadow-lg bg-white">
            {/* Header Background */}
            <div className="h-32 bg-linear-to-r from-[#FF653F] to-[#FF8555]"></div>

            {/* Profile Content */}
            <div className="px-8 py-8 -mt-16 relative z-10">
              {/* Avatar */}
              <div className="flex justify-center mb-8">
                <Avatar className="w-32 h-32 border-4 border-white shadow-lg bg-white">
                  <Avatar.Image
                    alt={user?.name}
                    src={user?.image}
                    referrerPolicy="no-referrer"
                    className="object-cover"
                  />
                  <Avatar.Fallback className="text-2xl font-bold text-[#FF653F]">
                    {user?.name.charAt(0)}
                  </Avatar.Fallback>
                </Avatar>
              </div>

              {/* User Info */}
              <div className="text-center space-y-6 mb-10">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold text-[#0b0031]">{user?.name}</h2>
                  <p className="text-gray-600 text-lg">{user?.email}</p>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-4 bg-gray-50 rounded-lg p-6">
                  <div className="text-center">
                    <p className="text-2xl font-bold text-[#FF653F]">12</p>
                    <p className="text-gray-600 text-sm">Favorites</p>
                  </div>
                  <div className="text-center border-l border-r border-gray-200">
                    <p className="text-2xl font-bold text-[#FF653F]">5</p>
                    <p className="text-gray-600 text-sm">Orders</p>
                  </div>
                  <div className="text-center">
                    <p className="text-2xl font-bold text-[#FF653F]">Member</p>
                    <p className="text-gray-600 text-sm">Since 2024</p>
                  </div>
                </div>
              </div>

              {/* Actions */}
              <div className="space-y-4">
                <div className="flex items-center gap-4 p-4 bg-blue-50 rounded-lg border border-blue-100">
                  <svg className="w-6 h-6 text-blue-600 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <p className="font-semibold text-blue-900">You&apos;re all set!</p>
                    <p className="text-sm text-blue-700">Your profile is up to date</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-1">
                    <ProfileUpdate />
                  </div>
                </div>
              </div>
            </div>
          </Card>

          {/* Additional Info */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Account Security */}
            <Card className="border border-gray-200 rounded-lg p-6 bg-white">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <h3 className="font-bold text-[#0b0031]">Account Security</h3>
                </div>
                <p className="text-gray-600 text-sm">Your account is secure with Google authentication</p>
              </div>
            </Card>

            {/* Preferences */}
            <Card className="border border-gray-200 rounded-lg p-6 bg-white">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10.5 1.5H5.75A2.25 2.25 0 003.5 3.75v12.5A2.25 2.25 0 005.75 18.5h8.5a2.25 2.25 0 002.25-2.25V9.5m-8-7v5m0 0h5" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <h3 className="font-bold text-[#0b0031]">Preferences</h3>
                </div>
                <p className="text-gray-600 text-sm">Manage your notification and display preferences</p>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProfilePage;

