// "use client";
// import Link from "next/link";
// import { usePathname } from "next/navigation";
// import { useState } from "react";
// import docsData from '@/components/Docs/docsData';
//
// const DocsMenu = () => {
//     const pathname = usePathname();
//     const [openIndex, setOpenIndex] = useState(-1);
//
//     const handleSubmenu = (index: number) => {
//         setOpenIndex(openIndex === index ? -1 : index);
//     };
//
//     return (
//         <nav className="docs-menu p-4 border-r border-gray-200 dark:border-gray-700">
//             <ul className="space-y-2">
//                 {docsData.map((doc, index) => (
//                     <li key={doc.id}>
//                         {doc.path ? (
//                             <Link
//                                 href={doc.path}
//                                 className={`block p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-800 ${
//                                     pathname === doc.path ? "text-primary font-bold" : "text-dark"
//                                 }`}
//                             >
//                                 {doc.title}
//                             </Link>
//                         ) : (
//                             <>
//                                 <div
//                                     onClick={() => handleSubmenu(index)}
//                                     className="flex justify-between items-center p-2 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800 rounded"
//                                 >
//                   <span
//                       className={`${
//                           pathname === doc.path ? "text-primary font-bold" : "text-dark"
//                       }`}
//                   >
//                     {doc.title}
//                   </span>
//                                     <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
//                                         <path d="M5.23 7.21a.75.75 0 011.06-.02L10 10.67l3.71-3.48a.75.75 0 111.06 1.06l-4.25 3.98a.75.75 0 01-1.06 0L5.23 8.27a.75.75 0 01-.02-1.06z" />
//                                     </svg>
//                                 </div>
//                                 {doc.submenu && openIndex === index && (
//                                     <ul className="ml-4 mt-1 space-y-1">
//                                         {doc.submenu.map((subdoc) => (
//                                             <li key={subdoc.id}>
//                                                 <Link
//                                                     href={subdoc.path}
//                                                     className={`block p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-800 ${
//                                                         pathname === subdoc.path ? "text-primary font-bold" : "text-dark"
//                                                     }`}
//                                                 >
//                                                     {subdoc.title}
//                                                 </Link>
//                                             </li>
//                                         ))}
//                                     </ul>
//                                 )}
//                             </>
//                         )}
//                     </li>
//                 ))}
//             </ul>
//         </nav>
//     );
// };
//
// export default DocsMenu;
