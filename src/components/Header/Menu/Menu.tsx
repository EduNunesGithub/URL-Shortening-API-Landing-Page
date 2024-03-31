"use client";

import React from "react";
import { Dialog, Transition } from "@headlessui/react";
import { Menu as LucideMenu } from "lucide-react";
import Link from "next/link";
import { twMerge } from "tailwind-merge";
import { Navigation } from "@/components/Header/Navigation/Navigation";

export const Menu = () => {
  const [show, setShow] = React.useState<boolean>(false);

  return (
    <div
      className={twMerge(
        "sm:flex sm:flex-col sm:flex-shrink-0 sm:w-fit",
        "lg:hidden",
      )}
    >
      <button
        className="sm:h-6 sm:flex sm:flex-shrink-0 sm:text-colorado-peak sm:w-6"
        onClick={() => setShow(true)}
      >
        <LucideMenu className="sm:h-full sm:w-full" />
      </button>

      <Transition show={show}>
        <Dialog
          className="relative z-50"
          onClose={() => setShow(false)}
        >
          <div className="sm:flex sm:fixed sm:inset-0 sm:items-start sm:justify-center sm:pb-6 sm:pt-28 sm:px-6 sm:w-screen">
            <Transition.Child
              as={React.Fragment}
              enter={twMerge(
                "sm:duration-emphasized-decelerate sm:ease-emphasized-decelerate sm:transition-all",
              )}
              enterFrom={twMerge("sm:opacity-0 sm:scale-75")}
              enterTo={twMerge("sm:opacity-100 sm:scale-100")}
              leave={twMerge(
                "sm:duration-emphasized-accelerate sm:ease-emphasized-accelerate sm:transition-all",
              )}
              leaveFrom={twMerge("sm:opacity-100 sm:scale-100")}
              leaveTo={twMerge("sm:opacity-0 sm:scale-75")}
            >
              <Dialog.Panel className="sm:bg-violet-purple sm:flex sm:flex-col sm:h-fit sm:max-h-full sm:overflow-y-auto sm:rounded-xl sm:w-full">
                <div className="sm:flex sm:flex-col sm:flex-shrink-0 sm:gap-8 sm:h-fit sm:items-center sm:justify-center sm:px-6 sm:py-10 sm:w-full">
                  <Dialog.Title className="sm:absolute sm:h-0 sm:opacity-0 sm:overflow-hidden sm:w-0">
                    Menu
                  </Dialog.Title>

                  <Navigation heading="General links">
                    <Navigation.Link href="#">Features</Navigation.Link>
                    <Navigation.Link href="#">Pricing</Navigation.Link>
                    <Navigation.Link href="#">Resources</Navigation.Link>
                  </Navigation>

                  <div className="sm:border-b-1 sm:border-b-colorado-peak sm:flex sm:opacity-25 sm:w-full" />

                  <div className="sm:flex sm:flex-col sm:gap-6 sm:items-center sm:text-center sm:w-full">
                    <Link
                      className={twMerge(
                        "sm:duration-standard sm:ease-standard sm:text-white sm:transition-colors sm:typography-link-02",
                        "sm:hover:text-deep-well",
                      )}
                      href="#"
                    >
                      Login
                    </Link>

                    <Link
                      className="sm:button sm:duration-standard sm:ease-standard sm:min-h-12 sm:transition-colors sm:!typography-link-02 sm:w-full"
                      href="#"
                    >
                      Sign Up
                    </Link>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </div>
  );
};
