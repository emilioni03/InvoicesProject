import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Tables from './componets/Table'
import { data } from 'autoprefixer'

function App() {

  return (
    
     <div className="font-monserrat flex min-h-screen 2xl:max-w-7xl 2xl:mx-auto 2xl:border-x-2 2xl:border-indigo-50 ">
  {/* Sidebar */}
  <aside className="bg-white w-1/5 py-10 pl-10  min-w-min   border-r border-indigo-900/20 hidden md:block ">
    <div className=" font-bold text-2xl">Lozeq</div>
    {/* Menu */}
    <div className="mt-12 flex flex-col space-y-7 text-gray-500 font-medium">
      <a className=" flex items-center space-x-2 py-1  group hover:border-r-2 hover:border-r-indigo-700 hover:font-semibold " href="#">
        <svg className="h-5 w-5 group-hover:stroke-indigo-700" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
        </svg>
        <span>Dashboard</span>
      </a>
      <a className=" flex items-center space-x-2 py-1  group hover:border-r-2 hover:border-r-indigo-700 hover:font-semibold " href="#">
        <svg className="h-5 w-5 group-hover:stroke-indigo-700" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h16M4 18h16" />
          <span>Transactions</span>
        </svg></a>
      <a className=" flex items-center space-x-2 py-1  font-semibold  border-r-2 border-r-indigo-700 pr-20 " href="#">
        <svg className="h-5 w-5 stroke-indigo-700" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
        <span>Invoices</span>
      </a>
      <a className=" flex items-center space-x-2 py-1  group hover:border-r-2 hover:border-r-indigo-700 hover:font-semibold " href="#">
        <svg className="h-5 w-5 group-hover:stroke-indigo-700" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 14l6-6m-5.5.5h.01m4.99 5h.01M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16l3.5-2 3.5 2 3.5-2 3.5 2zM10 8.5a.5.5 0 11-1 0 .5.5 0 011 0zm5 5a.5.5 0 11-1 0 .5.5 0 011 0z" />
        </svg>
        <span>Expenses</span>
      </a>
      <a className=" flex items-center space-x-2 py-1  group hover:border-r-2 hover:border-r-indigo-700 hover:font-semibold " href="#">
        <svg className="h-5 w-5 group-hover:stroke-indigo-700" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
        </svg>
        <span>Banking</span>
      </a>
      <a className=" flex items-center space-x-2 py-1  group hover:border-r-2 hover:border-r-indigo-700 hover:font-semibold " href="#">
        <svg className="h-5 w-5 group-hover:stroke-indigo-700" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
        </svg>
        <span>Cards</span>
      </a>
      <a className=" flex items-center space-x-2 py-1  group hover:border-r-2 hover:border-r-indigo-700 hover:font-semibold " href="#">
        <svg className="h-5 w-5 group-hover:stroke-indigo-700" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
        <span>Settings</span>
      </a>
    </div>{/* /Menu */}
  </aside>{/* /Sidebar */}
  <main className="bg-indigo-50/60 w-full py-10 px-3 sm:px-10">
    {/* Nav */}
    <nav className="text-lg flex items-center justify-between content-center ">
      <div className=" font-semibold text-xl text-gray-800 flex space-x-4 items-center">
        <a href="#">
          <span className="md:hidden">
            <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h7" />
            </svg>
          </span>
        </a>
        <span>Invoices</span>
      </div>
      <div className="flex space-x-5 md:space-x-10 text-gray-500 items-center content-center text-base ">
        <a className="flex items-center space-x-3 px-4 py-2 rounded-md  hover:bg-indigo-100" href="#">
          <span>
            <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          </span>
          <span className="hidden sm:block">Preferences</span>
        </a>
        <a className="px-4 py-2 bg-indigo-100 rounded-md flex items-center space-x-2 text-indigo-500 hover:bg-indigo-200" href="#">
          <svg className="h-5 w-5 fill-indigo-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd" />
          </svg>
          <div className="hidden xs:block"><span className="hidden sm:inline-block">Create</span> New</div>
        </a>
        <a className href="#">
          <img className="rounded-full w-10 h-10 border-2 border-indigo-200 hover:border-indigo-300" src="images/avatar.jpg" alt srcSet />
        </a>
      </div>
    </nav> {/* /Nav */}
    {/* Filters Section */}
    <section>
      <div className="bg-rose-100/70 mt-12  rounded-xl px-5 sm:px-10  pt-8 pb-4 relative xl:bg-[url('../images/invoice.png')] bg-no-repeat bg-right bg-contain ">
        <div className="text-rose-400 font-semibold text-lg">All Invoices</div>
        <div className="mt-6 grid grid-cols-1 xs:grid-cols-2 gap-y-6  gap-x-6 md:flex md:space-x-6 md:gap-x-0 ">
          {/* <div class="mt-6 grid grid-cols-4 max-w-max gap-x-6"> */}
          {/* <div class="flex flex-col w-40 text-gray-700 text-sm space-y-2">
                      <label for="start-date">Begin Date</label>
                      <input id="startdate" type="date" value="2019-11-01"
                          class="bg-indigo-800/80 text-white  px-4 py-3 rounded-lg ">
                  </div> */}
          <div className="flex flex-col  md:w-40  text-gray-600 text-sm space-y-2 font-semibold">
            <label htmlFor="client">Begin Date</label>
            <div className="inline-flex relative">
              <input className="bg-indigo-800/80 text-white tracking-wider pl-4 pr-10 py-3 rounded-lg appearance-none w-full outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-300" id="client" name="client" type="text" defaultValue="2019/02/28" />
              <span className="absolute top-0 right-0 m-3 pointer-events-none text-white">
                <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </span>
            </div>
          </div>
          <div className="flex flex-col md:w-40  text-gray-600 text-sm space-y-2 font-semibold">
            <label htmlFor="client">End Date</label>
            <div className="inline-flex relative">
              <input className="bg-indigo-800/50 text-white tracking-wider pl-4 pr-10 py-3 rounded-lg appearance-none w-full outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-300" id="client" name="client" type="text" defaultValue="2019/12/09" />
              <span className="absolute top-0 right-0 m-3 pointer-events-none text-white">
                <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </span>
            </div>
          </div>
          <div className="flex flex-col md:w-40  text-gray-600 text-sm space-y-2 font-semibold">
            <label htmlFor="client">Status</label>
            <div className="inline-flex relative">
              <select className="bg-rose-400 text-white  px-4 py-3 rounded-lg appearance-none w-full outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-300" id="client" name="client">
                <option value="Any">Any</option>
              </select>
              <span className="absolute top-0 right-0 m-3 pointer-events-none text-white">
                <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </span>
            </div>
          </div>
          <div className="flex flex-col md:w-40 text-gray-600 text-sm space-y-2 font-semibold">
            <label htmlFor="client">Client</label>
            <div className="inline-flex relative">
              <select className="bg-blue-600/70  text-white  px-4 py-3 rounded-lg appearance-none w-full outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-300" id="client" name="client">
                <option value="Any">Any</option>
              </select>
              <span className="absolute top-0 right-0 m-3 pointer-events-none text-white">
                <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </span>
            </div>
          </div>
        </div>
        <div className="mt-5 text-gray-500 text-sm ">
          * This data has been shown according to your given information
        </div>
      </div>
    </section> {/* /Filters Section */}
    {/* Invoice List Table */}
    <Tables encabezado={["ID", "Nombre", "Fecha factura", "Empleado", "Total", "Estatus"]} data={[{"id": "12", "nombre": "hola"}, {"id": "1", "nombre": "hhhh"}]} />
    {/* /Invoice List Table */}
  </main>
</div>

    
  )
}

export default App
