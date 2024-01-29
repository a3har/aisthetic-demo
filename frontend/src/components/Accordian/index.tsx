"use client"

import React from "react"
import { Disclosure, Transition } from "@headlessui/react"

interface AccordianProps {
  buttonMarkup:
    | React.ReactNode
    | (({ open }: { open: boolean }) => React.ReactNode)
  children: React.ReactNode
  defaultOpen?: boolean
}

export default function Accordian({
  buttonMarkup,
  children,
  defaultOpen,
}: AccordianProps) {
  return (
    <Disclosure defaultOpen={defaultOpen}>
      {({ open }) => (
        <div>
          <Disclosure.Button as="div">
            {typeof buttonMarkup === "function"
              ? buttonMarkup({ open })
              : buttonMarkup}
          </Disclosure.Button>
          <Transition
            enter="transition duration-100 ease-out"
            enterFrom="transform scale-95 opacity-0"
            enterTo="transform scale-100 opacity-100"
            leave="transition duration-75 ease-out"
            leaveFrom="transform scale-100 opacity-100"
            leaveTo="transform scale-95 opacity-0"
          >
            <Disclosure.Panel>{children}</Disclosure.Panel>
          </Transition>
        </div>
      )}
    </Disclosure>
  )
}
