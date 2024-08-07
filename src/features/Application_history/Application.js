import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  increment,
  incrementAsync,
  selectCount,
} from './applicationSlice';

import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import { Link } from 'react-router-dom';

const jobs = [
  {
    id: 1,
    employer: "Chinmay Mahajan",
    interest: ["BrickLayer", "electrician"],
    status: "pending",
    mobile: 9021669772,
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-01.jpg',
    imageAlt: 'Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt.',
  },
  {
    id: 2,
    employer: "Chinmay Mahajan",
    interest: ["BrickLayer", "electrician"],
    status: "pending",
    mobile: 9021669772,
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-02.jpg',
    imageAlt:
      'Front of satchel with blue canvas body, black straps and handle, drawstring top, and front zipper pouch.',
  },
  // More products...
]

export default function Application() {
  const [open, setOpen] = useState(true)
  // const count = useSelector(selectCount);
  const dispatch = useDispatch();
  return (
    <div className='h-full'>
      <main className="mx-auto max-w-full h-full " style={{backgroundColor: 'rgb(211 177 244)'} }>
        <div className="bg-gray-800 w-full px-2 flex items-baseline justify-between border-b border-gray-200 pb-6 pt-16">
          <h1 className="text-4xl font-bold tracking-tight  text-white">Application History and Updates</h1>
        </div>
        <div className="bg-white">

          <div className="flow-root">
            <ul role="list" className="divide-y divide-gray-200">
              {jobs.map((job) => (
                <li key={job.id} className="flex py-6 px-6">
                  <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                    <img
                      alt={job.imageAlt}
                      src={job.imageSrc}
                      className="h-full w-full object-cover object-center"
                    />
                  </div>

                  <div className="ml-4 flex flex-1 flex-col">
                    <div>
                      <div className="flex justify-between text-base font-medium text-gray-900">
                        <h3>
                          <a href={job.href}>{job.employer}</a>
                        </h3>
                        <p className="ml-4">{job.status}</p>
                      </div>
                      <p className="mt-1 text-sm text-gray-500">{job.color}</p>
                    </div>
                    <div className="text-gray-700 flex flex-1 items-start flex-col justify-between text-sm">
                      <span>Applied Jobs: </span>
                      <ul className='mx-4'>
                        <li>{job.interest[0]}</li>
                        <li>{job.interest[1]}</li>
                      </ul>
                    </div>
                    <div className="flex flex-1 items-end justify-between text-sm">
                      <p className="text-gray-500">Mobile No. {job.mobile}</p>

                      <div className="flex">
                        <button type="button" className="font-medium text-indigo-600 hover:text-indigo-500">
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
            
            <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
              <p>
                <Link to='/'>
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  className="font-medium text-indigo-600 hover:text-indigo-500"
                >
                  Continue viewing Jobs / employees
                  <span aria-hidden="true"> &rarr;</span>
                </button>
                </Link>
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
