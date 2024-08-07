import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './findJob.css'
import {
  fetchAllJobAsync,
  fetchJobByFilterAsync,
  selectAllJob,
} from './findJobSlice';
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import { ChevronDownIcon, FunnelIcon, MinusIcon, PlusIcon, Squares2X2Icon } from '@heroicons/react/20/solid'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/20/solid'



const sortOptions = [
  { name: 'Rating', sort: 'rating',order: 'desc', current: false },
  { name: 'Age', sort: 'age',order: 'asc', current: false },
  { name: 'Experience: Low to High', sort: 'experience', order: 'asc', current: false },
  { name: 'Experience: High to Low', sort: 'experience', order: 'desc', current: false },
]

const filters = [
  {
    id: 'experience',
    name: 'Experience',
    options: [
      { value: '0', label: 'No experience', checked: false },
      { value: '1', label: 'above 1 years', checked: false },
      { value: '3', label: 'above 3 years', checked: false },
      { value: '10', label: 'above 10 years', checked: false }
    ],
  },
  {
    id: 'gender',
    name: 'gender',
    options: [
      { value: 'Male', label: 'Male', checked: false },
      { value: 'Female', label: 'Female', checked: false }
    ],
  },
  {
    id: 'category',
    name: 'Category',
    options: [
      { value: 'BrickLayer', label: 'BrickLayer' },
      { value: 'Electrician', label: 'Electrician' },
      { value: 'plumber', label: 'plumber' },
      { value: 'Painter', label: 'Painter' },
      { value: 'Mason', label: 'Mason' },
      { value: 'Plumber', label: 'Plumber' },
      { value: 'Carpenter', label: 'Carpenter' },
      { value: 'Welder', label: 'Welder' },
      { value: 'Mechanic', label: 'Mechanic' },
      { value: 'Bricklayer', label: 'Bricklayer' },
      { value: 'Gardener', label: 'Gardener' },
      { value: 'Landscaper', label: 'Landscaper' },
      { value: 'Blacksmith', label: 'Blacksmith' },
      { value: 'Housekeeper', label: 'Housekeeper' },
      { value: 'Janitor', label: 'Janitor' },
      { value: 'Farmer', label: 'Farmer' },
      { value: 'Rancher', label: 'Rancher' },
      { value: 'Fisherman', label: 'Fisherman' },
      { value: 'Shrimp-Fisher', label: 'Shrimp Fisher' },
      { value: 'Cattle-Rancher', label: 'Cattle Rancher' },
      { value: 'Livestock-Farmer', label: 'Livestock Farmer' },
      { value: 'Fruit-Picker', label: 'Fruit Picker' },
      { value: 'Harvester', label: 'Harvester' },
      { value: 'Brickmaker', label: 'Brickmaker' },
      { value: 'Tile-Setter', label: 'Tile Setter' },
      { value: 'Scaffolder', label: 'Scaffolder' },
      { value: 'Demolition-Worker', label: 'Demolition Worker' },
      { value: 'Assembler', label: 'Assembler' },
      { value: 'Fabricator', label: 'Fabricator' },
      { value: 'Car-Washer', label: 'Car Washer' },
      { value: 'Detailer', label: 'Detailer' },
      { value: 'Packer', label: 'Packer' },
      { value: 'Sorter', label: 'Sorter' },
      { value: 'Barber', label: 'Barber' },
      { value: 'Hairstylist', label: 'Hairstylist' },
      { value: 'Plasterer', label: 'Plasterer' },
      { value: 'Drywaller', label: 'Drywaller' },
      { value: 'Cement-Mason', label: 'Cement Mason' },
      { value: 'Concrete-Finisher', label: 'Concrete Finisher' },
      { value: 'Decorator', label: 'Decorator' },
      { value: 'Pipefitter', label: 'Pipefitter' },
      { value: 'Lineworker', label: 'Lineworker' },
      { value: 'HVAC-Technician', label: 'HVAC Technician' },
      { value: 'AC-Mechanic', label: 'AC Mechanic' },
      { value: 'Technician', label: 'Technician' },
      { value: 'Roofer', label: 'Roofer' },
      { value: 'Tiler', label: 'Tiler' }
    ],
  },

]
function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}



export default function FindJob() {
  const dispatch = useDispatch();
  const jobs = useSelector(selectAllJob);
  const [filter, setFilter] = useState({})
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)


  const handleFilter = (e, section, option)=>{
    console.log(e.target.checked)
    const newFilter = {...filter} 
    // TODO : on server it will support multiple categories
    if(e.target.checked){
      newFilter [section.id] = option.value
    }
    else{
      delete newFilter[section.id]
    }
    setFilter(newFilter)
    console.log(section.id, option.value)
  }

  const handleSort = (e, option)=>{
    const newFilter = {...filter, _sort: option.sort, _order: option.order}
    setFilter(newFilter)
    dispatch(fetchJobByFilterAsync(newFilter))
  }

  useEffect(()=>{
    dispatch(fetchJobByFilterAsync(filter))
    },[dispatch,filter])

  
  return (
    <div>


      <div className="bg-white" style={{ boxShadow: '0 8px 16px rgba(0, 0, 0, 0.7)' }}>
        <div>
          {/* Mobile filter dialog */}
          <MobileFilter handleFilter={handleFilter} setMobileFiltersOpen={setMobileFiltersOpen} mobileFiltersOpen={mobileFiltersOpen}></MobileFilter>

          <main className="mx-auto max-w-full " >
            <div className="bg-gray-800 w-full px-2 flex items-baseline justify-between border-b border-gray-200 pb-6 pt-16">
              <h1 className="text-4xl font-bold tracking-tight  text-white">Hi, some best jobs are waiting for you !</h1>

              <div className="flex items-center">
                <Menu as="div" className="relative inline-block text-left">
                  <div>
                    <MenuButton className="group inline-flex justify-center text-sm font-medium  hover:text-slate-400 text-white">
                      Sort
                      <ChevronDownIcon
                        aria-hidden="true"
                        className="-mr-1 ml-1 h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                      />
                    </MenuButton>
                  </div>

                  <MenuItems
                    transition
                    className="absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white shadow-2xl ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
                  >
                    <div className="py-1">
                      {sortOptions.map((option) => (
                        <MenuItem key={option.name}>
                          <p
                            onClick={e=>handleSort(e,option)}
                            className={classNames(
                              option.current ? 'font-medium text-gray-900' : 'text-gray-500',
                              'block px-4 py-2 text-sm data-[focus]:bg-gray-100',
                            )}
                          >
                            {option.name}
                          </p>
                        </MenuItem>
                      ))}
                    </div>
                  </MenuItems>
                </Menu>

                <button type="button" className="-m-2 ml-5 p-2 text-gray-400 hover:text-gray-500 sm:ml-7">
                  <span className="sr-only">View grid</span>
                  <Squares2X2Icon aria-hidden="true" className="h-5 w-5" />
                </button>
                <button
                  type="button"
                  onClick={() => setMobileFiltersOpen(true)}
                  className="-m-2 ml-4 p-2 text-gray-400 hover:text-gray-500 sm:ml-6 lg:hidden"
                >
                  <span className="sr-only">Filters</span>
                  <FunnelIcon aria-hidden="true" className="h-5 w-5" />
                </button>
              </div>
            </div>

            <section aria-labelledby="products-heading" className="pb-24 pt-6 mx-4">
              <h2 id="products-heading" className="sr-only ">
                Products
              </h2>

              <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4">
                {/* Filters */}
                <DesktopFilter handleFilter={handleFilter}></DesktopFilter>

                {/* Product grid */}
                <JobGrid jobs={jobs}></JobGrid>
              </div>
            </section>
            {/* Pagination */}
            <Pagination></Pagination>
          </main>
        </div>
      </div>



    </div>
  );
}

function MobileFilter({mobileFiltersOpen, setMobileFiltersOpen, handleFilter}){
  return (
    <Dialog open={mobileFiltersOpen} onClose={setMobileFiltersOpen} className="relative z-40 lg:hidden">
    <DialogBackdrop
      transition
      className="fixed inset-0 bg-black bg-opacity-25 transition-opacity duration-300 ease-linear data-[closed]:opacity-0"
    />

    <div className="fixed inset-0 z-40 flex">
      <DialogPanel
        transition
        className="relative ml-auto flex h-full w-full max-w-xs transform flex-col overflow-y-auto bg-white py-4 pb-12 shadow-xl transition duration-300 ease-in-out data-[closed]:translate-x-full"
      >
        <div className="flex items-center justify-between px-4">
          <h2 className="text-lg font-medium text-gray-900">Filters</h2>
          <button
            type="button"
            onClick={() => setMobileFiltersOpen(false)}
            className="-mr-2 flex h-10 w-10 items-center justify-center rounded-md bg-white p-2 text-gray-400"
          >
            <span className="sr-only">Close menu</span>
            <XMarkIcon aria-hidden="true" className="h-6 w-6" />
          </button>
        </div>

        {/* Filters */}
        <form className="mt-4 border-t border-gray-200">
          <h3 className="sr-only">Categories</h3>


          {filters.map((section) => (
            <Disclosure key={section.id} as="div" className="border-t border-gray-200 px-4 py-6">
              <h3 className="-mx-2 -my-3 flow-root">
                <DisclosureButton className="group flex w-full items-center justify-between bg-white px-2 py-3 text-gray-400 hover:text-gray-500">
                  <span className="font-medium text-gray-900">{section.name}</span>
                  <span className="ml-6 flex items-center">
                    <PlusIcon aria-hidden="true" className="h-5 w-5 group-data-[open]:hidden" />
                    <MinusIcon aria-hidden="true" className="h-5 w-5 [.group:not([data-open])_&]:hidden" />
                  </span>
                </DisclosureButton>
              </h3>
              <DisclosurePanel className="pt-6">
                <div className="space-y-6">
                  {section.options.map((option, optionIdx) => (
                    <div key={option.value} className="flex items-center">
                      <input
                        defaultValue={option.value}
                        defaultChecked={option.checked}
                        id={`filter-mobile-${section.id}-${optionIdx}`}
                        name={`${section.id}[]`}
                        type="checkbox"
                        onChange={e=>handleFilter(e,section,option)}
                        className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                      />
                      <label
                        htmlFor={`filter-mobile-${section.id}-${optionIdx}`}
                        className="ml-3 min-w-0 flex-1 text-gray-500"
                      >
                        {option.label}
                      </label>
                    </div>
                  ))}
                </div>
              </DisclosurePanel>
            </Disclosure>
          ))}
        </form>
      </DialogPanel>
    </div>
  </Dialog>
  );
}

function DesktopFilter({handleFilter}){
  return (
    <form className="hidden lg:block">
                  <h3 className="sr-only">Categories</h3>


                  {filters.map((section) => (
                    <Disclosure key={section.id} as="div" className="border-b border-gray-200 py-6">
                      <h3 className="-my-3 flow-root">
                        <DisclosureButton className="group flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500">
                          <span className="font-medium text-gray-900">{section.name}</span>
                          <span className="ml-6 flex items-center">
                            <PlusIcon aria-hidden="true" className="h-5 w-5 group-data-[open]:hidden" />
                            <MinusIcon aria-hidden="true" className="h-5 w-5 [.group:not([data-open])_&]:hidden" />
                          </span>
                        </DisclosureButton>
                      </h3>
                      <DisclosurePanel className="pt-6">
                        <div className="space-y-4">
                          {section.options.map((option, optionIdx) => (
                            <div key={option.value} className="flex items-center">
                              <input
                                defaultValue={option.value}
                                defaultChecked={option.checked}
                                id={`filter-${section.id}-${optionIdx}`}
                                name={`${section.id}[]`}
                                type="checkbox"
                                onChange={e=>handleFilter(e,section,option)}
                                className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                              />
                              <label htmlFor={`filter-${section.id}-${optionIdx}`} className="ml-3 text-sm text-gray-600">
                                {option.label}
                              </label>
                            </div>
                          ))}
                        </div>
                      </DisclosurePanel>
                    </Disclosure>
                  ))}
                </form>
  ) ;
}

function Pagination(){
  return (
    <div className="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6">
    <div className="flex flex-1 justify-between sm:hidden">
      <a
        href="#"
        className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
      >
        Previous
      </a>
      <a
        href="#"
        className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
      >
        Next
      </a>
    </div>
    <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
      <div>
        <p className="text-sm text-gray-700">
          Showing <span className="font-medium">1</span> to <span className="font-medium">10</span> of{' '}
          <span className="font-medium">97</span> results
        </p>
      </div>
      <div>
        <nav aria-label="Pagination" className="isolate inline-flex -space-x-px rounded-md shadow-sm">
          <a
            href="#"
            className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
          >
            <span className="sr-only">Previous</span>
            <ChevronLeftIcon aria-hidden="true" className="h-5 w-5" />
          </a>
          {/* Current: "z-10 bg-indigo-600 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600", Default: "text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:outline-offset-0" */}
          <a
            href="#"
            aria-current="page"
            className="relative z-10 inline-flex items-center bg-gray-800 px-4 py-2 text-sm font-semibold text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            1
          </a>
          <a
            href="#"
            className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
          >
            2
          </a>
          <a
            href="#"
            className="relative hidden items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 md:inline-flex"
          >
            3
          </a>

          <a
            href="#"
            className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
          >
            <span className="sr-only">Next</span>
            <ChevronRightIcon aria-hidden="true" className="h-5 w-5" />
          </a>
        </nav>
      </div>
    </div>
  </div>
  ) ;
}

function JobGrid({jobs}){
  return (
    <div className="lg:col-span-3">{<div className='cardContainer' style={{ backgroundColor: 'rgb(211 177 244)' }}>
                  {
                    jobs.map((job) => (
                      <div className="card rounded-lg">
                        <img src={job.photo}></img>


                        <div className='job'>
                          <div className='Specific'>
                            <div><span>Employer: </span>{job.employer} years</div>
                            <div><span>Available Jobs: </span>
                            <ul>
                            {
                            job.interest.map((interest)=>(
                              <li>{interest}</li>
                            ))}
                            </ul>
                            </div>
                            <div><span>Salary: </span>{job.salary} {job.unit}</div>
                            <div><span>Location: </span>{job.location}</div>
                            <div><span>Mobile No.: </span>{job.mobile} years</div>
                            <div><span>Working Time: </span>{job.workingTime}</div>
                            <div><span>Experience: </span>{job.experience}</div>
                            <div><span>Age: </span>{job.aboveAge} to {job.belowAge}</div>
                            <div><span>Gender: </span>{job.gender}</div>
                            <div><span>Email ID: </span>{job.email}</div>
                          </div>
                        </div>
                        <button className="rounded-md bg-gray-900 px-3 my-0 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Apply</button>
                      </div>
                    )

                    )
                  }

                </div>}</div>
  );
}

