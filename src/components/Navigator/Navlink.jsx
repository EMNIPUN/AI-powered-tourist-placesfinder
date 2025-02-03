// import React from 'react'
// import {
//     NavigationMenu,
//     NavigationMenuContent,
//     NavigationMenuItem,
//     NavigationMenuLink,
//     NavigationMenuList,
//     NavigationMenuTrigger,
//   } from "@/components/ui/navigation-menu"
//   import NavigationMenuLinks from './NavigationMenuLink'
  


// function NavLink(props) {

//     const Links = [
//         {
//             "id":1,
//             "title" : 'Best Things to Do',
//             "description" : 'From finding the best surf to trying the ultimate local dishes, here are the top things to do in Sri Lanka.',
//             "icon": 'fa-solid fa-qrcode'
//         },
//         {
//             "id":2,
//             "title" : 'Money and Costs',
//             "description" : 'Whether you’re coming for just a few days or backpacking for months, here are some helpful ways to keep your costs down and visit Sri Lanka on a budget',
//             "icon": 'fa-sharp fa-solid fa-wallet'
//         },
//         {
//             "id":3,
//             "title" : 'Best Road Trips',
//             "description" : 'Hire a car and driver or rent a motorcycle and explore the best of Sri Lanka with these road trip routes.',
//             "icon": 'fa-solid fa-road-circle-check'
//         },
//         {
//             "id":4,
//             "title" : 'Transportation',
//             "description" : 'Our guide to transportation can help you plan the best way for your travels around Sri Lanka.',
//             "icon": 'fa-solid fa-taxi'
//         },        
//     ]

//   return (
//     <NavigationMenu className='flex gap-4'>
//         <NavigationMenuList>
//         <NavigationMenuItem>
//           <NavigationMenuTrigger>Getting started</NavigationMenuTrigger>
//             <NavigationMenuContent>
//                 <ul className="grid gap-3 p-4 md:w-[550px] lg:w-[650px] lg:grid-cols-[.75fr_1fr]">
//                 <li className="row-span-3 flex flex-col">
//                     {
//                         Links.map((Link)=> {
//                             return <NavigationMenuLinks name={Link} />
//                         })
//                     }
//                     {/* <NavigationMenuLinks name={Links[0]} /> */}
//                 </li>
//                 <li className="row-span-3 flex gap-3">
//                     <NavigationMenuLink>
//                     <a
//                         className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
//                         href="/"
//                     >
//                         <div className="">
//                             <img 
//                                 src="/assets/images/Hero/Hero3.jpg"
//                                 alt="random" 
//                                 className='brightness-200 h-52 w-auto object-cover hover:brightness-200'
//                             />
//                         </div>
//                         <p className="text-sm leading-tight text-black mt-2">
//                         Beautifully designed components built with Radix UI and
//                         Tailwind CSS.
//                         </p>
//                     </a>
//                     </NavigationMenuLink>
//                 </li>
//                 </ul>
//             </NavigationMenuContent>
//         </NavigationMenuItem>
//         </NavigationMenuList>

//         <NavigationMenuList>
//             <NavigationMenuItem>
//             <NavigationMenuTrigger>Item One</NavigationMenuTrigger>
//                 <NavigationMenuContent>
//                     <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
//                     <li className="row-span-3">
//                         <NavigationMenuLink>
//                         <a
//                             className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
//                             href="/"
//                         >
//                             <div className="mb-2 mt-4 text-lg font-medium">
//                             shadcn/ui
//                             </div>
//                             <p className="text-sm leading-tight text-muted-foreground">
//                             Beautifully designed components built with Radix UI and
//                             Tailwind CSS.
//                             </p>
//                         </a>
//                         </NavigationMenuLink>
//                     </li>
//                     </ul>
//                 </NavigationMenuContent>
//             </NavigationMenuItem>
//         </NavigationMenuList>

//         <NavigationMenuList>
//             <NavigationMenuItem>
//             <NavigationMenuTrigger>Item One</NavigationMenuTrigger>
//                 <NavigationMenuContent>
//                     <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
//                     <li className="row-span-3">
//                         <NavigationMenuLink>
//                         <a
//                             className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
//                             href="/"
//                         >
//                             <div className="mb-2 mt-4 text-lg font-medium">
//                             shadcn/ui
//                             </div>
//                             <p className="text-sm leading-tight text-muted-foreground">
//                             Beautifully designed components built with Radix UI and
//                             Tailwind CSS.
//                             </p>
//                         </a>
//                         </NavigationMenuLink>
//                     </li>
//                     </ul>
//                 </NavigationMenuContent>
//             </NavigationMenuItem>
//         </NavigationMenuList>
//     </NavigationMenu>
//   )
// }

// export default NavLink