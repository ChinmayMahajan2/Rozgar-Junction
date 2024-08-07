import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './People.css'
import {
  fetchAllPeopleAsync,
  selectAllPeople,
  fetchPeopleByFilterAsync
} from './peopleSlice';
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
import { Link } from 'react-router-dom';

const sortOptions = [
  { name: 'Rating', sort: 'rating', order: 'desc',current: false },
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
      { value: '5', label: 'above 5 years', checked: false },
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
    id: 'location',
    name: 'location',
    options: [
      { value: 'Cityville', label: 'Cityville' },
      { value: 'Ruralville', label: 'Ruralville' },
      { value: 'Suburbia', label: 'Suburbia' },
      { value: 'Greenfields', label: 'Greenfields' },
      { value: 'Cityscape', label: 'Cityscape' },
      { value: 'Mechanictown', label: 'Mechanictown' },
      { value: 'Plumberville', label: 'Plumberville' },
      { value: 'Cleansville', label: 'Cleansville' },
      { value: 'Culinarytown', label: 'Culinarytown' },
      { value: 'Caretown', label: 'Caretown' },
      { value: 'Roofcity', label: 'Roofcity' },
      { value: 'Plasterfield', label: 'Plasterfield' },
      { value: 'Weldertown', label: 'Weldertown' },
      { value: 'Masonville', label: 'Masonville' },
      { value: 'HVACtown', label: 'HVACtown' },
      { value: 'Bricktown', label: 'Bricktown' },
      { value: 'Cabinettown', label: 'Cabinettown' },
      { value: 'Tiletown', label: 'Tiletown' },
      { value: 'Scaffoldingtown', label: 'Scaffoldingtown' },
      { value: 'Floortown', label: 'Floortown' },
      { value: 'Fencetown', label: 'Fencetown' },
      { value: 'Roofertown', label: 'Roofertown' },
      { value: 'Drywalltown', label: 'Drywalltown' },
      { value: 'Assemblytown', label: 'Assemblytown' },
      { value: 'Trucktown', label: 'Trucktown' },
      { value: 'Cleantown', label: 'Cleantown' },
      { value: 'Landscapertown', label: 'Landscapertown' },
      { value: 'Farmtown', label: 'Farmtown' },
      { value: 'Plumbertown', label: 'Plumbertown' },
      { value: 'Paintertown', label: 'Paintertown' },
      { value: 'Woodtown', label: 'Woodtown' },
      { value: 'Greentown', label: 'Greentown' },
      { value: 'Electrictown', label: 'Electrictown' },
      { value: 'Painttown', label: 'Painttown' },
      { value: 'Cheftown', label: 'Cheftown' },
      { value: 'Caregivertown', label: 'Caregivertown' },
      { value: 'Rooftown', label: 'Rooftown' },
      { value: 'Plastertown', label: 'Plastertown' }
    ]
  },
  {
    id: 'category',
    name: 'Category',
    options:[
      { value: 'Construction-Worker', label: 'Construction Worker' },
      { value: 'Plumber', label: 'Plumber' },
      { value: 'Electrician', label: 'Electrician' },
      { value: 'Carpenter', label: 'Carpenter' },
      { value: 'Gardener', label: 'Gardener' },
      { value: 'Landscaper', label: 'Landscaper' },
      { value: 'Painter', label: 'Painter' },
      { value: 'Mechanic', label: 'Mechanic' },
      { value: 'Housekeeper', label: 'Housekeeper' },
      { value: 'Cleaner', label: 'Cleaner' },
      { value: 'Chef', label: 'Chef' },
      { value: 'Cook', label: 'Cook' },
      { value: 'Nurse', label: 'Nurse' },
      { value: 'Caregiver', label: 'Caregiver' },
      { value: 'Roofing-Contractor', label: 'Roofing Contractor' },
      { value: 'Plasterer', label: 'Plasterer' },
      { value: 'Welder', label: 'Welder' },
      { value: 'Mason', label: 'Mason' },
      { value: 'HVAC-Technician', label: 'HVAC Technician' },
      { value: 'Bricklayer', label: 'Bricklayer' },
      { value: 'Cabinet-Maker', label: 'Cabinet Maker' },
      { value: 'Tiler', label: 'Tiler' },
      { value: 'Scaffolder', label: 'Scaffolder' },
      { value: 'Flooring-Installer', label: 'Flooring Installer' },
      { value: 'Fence-Installer', label: 'Fence Installer' },
      { value: 'Roofer', label: 'Roofer' },
      { value: 'Drywaller', label: 'Drywaller' },
      { value: 'Assembler', label: 'Assembler' },
      { value: 'Truck-Driver', label: 'Truck Driver' },
      { value: 'Janitor', label: 'Janitor' },
      { value: 'Farm-Worker', label: 'Farm Worker' }
    ],
  },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}



export default function PeopleList() {
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)
  const dispatch = useDispatch();
  const people = useSelector(selectAllPeople)
  const [filter, setFilter] = useState({})

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
    dispatch(fetchPeopleByFilterAsync(newFilter))
  }

  useEffect(()=>{
    dispatch(fetchPeopleByFilterAsync(filter))
  },[dispatch,filter])


  return (
    <div>


      <div className="bg-white" style={{ boxShadow: '0 8px 16px rgba(0, 0, 0, 0.7)' }}>
        <div>
          {/* Mobile filter dialog */}
          <MobileFilter handleFilter={handleFilter} mobileFiltersOpen={mobileFiltersOpen} setMobileFiltersOpen={setMobileFiltersOpen}></MobileFilter>

          <main className="mx-auto max-w-full " >
            <div className="bg-gray-800 w-full px-2 flex items-baseline justify-between border-b border-gray-200 pb-6 pt-16">
              <h1 className="text-4xl font-bold tracking-tight  text-white">Say hi to the perfect people for your task !</h1>

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
                <PeopleGrid people={people}></PeopleGrid>
            </div>
          </section>
          {/* Pagination */}
          <Pagination></Pagination>
        </main>
      </div>
    </div>



    </div >
  );
}

function MobileFilter({handleFilter, mobileFiltersOpen, setMobileFiltersOpen}){
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
  ) ;
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
  );
}

function Pagination(){
  return (           <div className="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6">
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
  </div>);
}

function PeopleGrid({people}){
  return(
    <div className="lg:col-span-3">{<div className='cardContainer' style={{ backgroundColor: 'rgb(211 177 244)' }}>
                  {
                    people.map((person) => (

                      <div className="card rounded-lg">
                        <Link to="/profile">
                        <div>
                          <div className="bio">
                            <img src={person.photo} alt="profile photo" />
                            <div className="info">
                              <div>
                                <span>Name: </span>{person.name}
                              </div>
                              <div><span>Gender: </span>{person.gender}</div>
                              <div><span>Age: </span>{person.age}</div>
                              <div><span>Mobile No.: </span>{person.mobile}</div>
                            </div>
                          </div>

                          <div className='job'>
                            <p>{person.bio}</p>

                            <div className='Specific'>
                              <div><span>Interested Job: </span><ul>
                                <ul>
                                  {
                                    person.interest.map((person) => (
                                      <li>{person}</li>
                                    ))}
                                </ul>
                              </ul></div>
                              <div><span>Experience: </span>{person.experience} years</div>
                              <div><span>Rating: </span>{person.rating}</div>
                              <div><span>Available Location: </span>{person.location}</div>
                              <div><span>Email ID: </span>{person.email}</div>
                            </div>
                          </div>
                          <button className="rounded-md bg-gray-900 w-full  py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Apply</button>
                        </div>
                        </Link>
                      </div>
                      
                    )

                  )
                  }

                </div>}</div>
  ) ;
}

