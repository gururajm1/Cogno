// "use client"

// import { User, Gamepad, BarChart, MessageCircle, Settings } from "lucide-react"
// import Link from "next/link"

// export default function DoctorDashboard() {
//   const menuItems = [
//     { icon: User, label: "Profile", href: "/profile" },
//     { icon: Gamepad, label: "Games", href: "/games" },
//     { icon: BarChart, label: "Progress", href: "/progress" },
//     { icon: MessageCircle, label: "Messages", href: "/messages" },
//     { icon: Settings, label: "Settings", href: "/settings" },
//   ]

//   return (
//     <div className="flex h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
//       {/* Sidebar */}
//       <aside className="w-64 bg-white shadow-lg">
//         <div className="p-6">
//           <h2 className="text-2xl font-bold text-indigo-700 mb-6">Cognoo</h2>
//           <nav>
//             <ul className="space-y-4">
//               {menuItems.map(({ icon: Icon, label, href }) => (
//                 <li key={label}>
//                   <Link href={href}className="flex items-center p-3 text-gray-600 hover:bg-indigo-50 hover:text-indigo-700 rounded-lg transition-colors duration-200">
//                       <Icon className="mr-3 h-5 w-5" />
//                       <span className="font-medium">{label}</span>
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//           </nav>
//         </div>
//       </aside>
//     </div>
//   )
// }
