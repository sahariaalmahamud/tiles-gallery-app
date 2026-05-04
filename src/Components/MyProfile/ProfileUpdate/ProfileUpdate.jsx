"use client";

import { authClient } from "@/lib/auth-client";
import { Button, Input, Label, Modal, TextField } from "@heroui/react";
import { toast } from "react-toastify";

const ProfileUpdate = () => {
  const onSubmit = async (e) => {
    e.preventDefault();

    const fromData = new FormData(e.currentTarget);
    const data = Object.fromEntries(fromData.entries());

    try {
      await authClient.updateUser({
        image: data.image,
        name: data.name,
      });
      toast.success("Profile updated successfully!");
    } catch (error) {
      toast.error("Failed to update profile");
    }
  };

  return (
    <div className="w-full">
      <Modal>
        <Button className="w-full bg-[#FF653F] text-white font-semibold py-3 hover:bg-[#E55A35] transition-colors flex items-center justify-center gap-2">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
          </svg>
          Edit Profile
        </Button>
        <Modal.Backdrop>
          <Modal.Container placement="center">
            <Modal.Dialog className="sm:max-w-md">
              <Modal.CloseTrigger />
              <Modal.Header className="border-b border-gray-200">
                <Modal.Heading className="text-xl font-bold text-[#0b0031]">
                  Update Your Profile
                </Modal.Heading>
              </Modal.Header>

              <Modal.Body className="p-6 space-y-5">
                <form onSubmit={onSubmit} className="flex flex-col gap-5">
                  <TextField isRequired className="w-full" name="name" type="text">
                    <Label className="font-semibold text-[#0b0031]">Full Name</Label>
                    <Input 
                      placeholder="Enter your name"
                      className="py-2"
                      variant="bordered"
                    />
                  </TextField>

                  <TextField className="w-full" name="image" type="text">
                    <Label className="font-semibold text-[#0b0031]">Profile Image URL</Label>
                    <Input 
                      placeholder="https://example.com/image.jpg"
                      className="py-2"
                      variant="bordered"
                    />
                  </TextField>

                  <Modal.Footer className="border-t border-gray-200 mt-6 pt-4">
                    <Button 
                      type="submit" 
                      slot="close"
                      className="w-full bg-[#FF653F] text-white font-semibold py-3 hover:bg-[#E55A35] transition-colors"
                    >
                      Save Changes
                    </Button>
                  </Modal.Footer>
                </form>
              </Modal.Body>
            </Modal.Dialog>
          </Modal.Container>
        </Modal.Backdrop>
      </Modal>
    </div>
  );
};

export default ProfileUpdate;
