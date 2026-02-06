// import React, { useState, useEffect } from 'react'
// import { useNavigate } from 'react-router-dom'
// import './Header.css'

// const Header = () => {
//   const navigate = useNavigate()
//   const [isDropdownOpen, setIsDropdownOpen] = useState(false)
//   const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false)
//   const [userName, setUserName] = useState(localStorage.getItem("userName") || "")
//   const [profileImage, setProfileImage] = useState(null)
//   const [previewImage, setPreviewImage] = useState("")
//   const [userProfileImage, setUserProfileImage] = useState(localStorage.getItem("profileImage") || null)

//   const userEmail = localStorage.getItem("email") || "" 

//   const handleProfileImageChange = (e) => {
//     const file = e.target.files[0]
//     if (file) {
//       setProfileImage(file)
//       const reader = new FileReader()
//       reader.onloadend = () => {
//         setPreviewImage(reader.result)
//       }
//       reader.readAsDataURL(file)
//     }
//   }

//   const handleUpdateProfile = async () => {
//     try {
//       const formData = new FormData()
//       formData.append("userName", userName)
//       if (profileImage) {
//         formData.append("profileImage", profileImage)
//       }

//       const token = localStorage.getItem("accessToken")
//       const res = await fetch("http://localhost:7001/user/update-profile", {
//         method: "PUT",
//         headers: {
//           "Authorization": `Bearer ${token}`
//         },
//         body: formData
//       })

//       const data = await res.json()

//       if (data.status) {
//         localStorage.setItem("userName", data.user.userName)
//         localStorage.setItem("user", JSON.stringify(data.user))
        
//         // Update profile image if provided
//         if (data.user.profileImage) {
//           const profileImageUrl = `http://localhost:7001${data.user.profileImage}`
//           localStorage.setItem("profileImage", profileImageUrl)
//           setUserProfileImage(profileImageUrl)
//         }
        
//         setIsUpdateModalOpen(false)
//         setIsDropdownOpen(false)
//       } else {
//         alert(data.message || "Failed to update profile")
//       }
//     } catch (error) {
//       console.error("Error updating profile:", error)
//       alert("Error updating profile")
//     }
//   }

//   const handleSignOut = () => {
//     localStorage.clear()
//     navigate("/login")
//   }

//   return (
//     <>
//       <div className='header-container'>
//         <div className='header-title'>
//           <h1>NOTES APP</h1>
//         </div>

//         <div className='header-profile'>
//           <button 
//             className='profile-btn'
//             onClick={() => setIsDropdownOpen(!isDropdownOpen)}
//           >
//             <div className='profile-section'>
//               {userProfileImage ? (
//                 <img 
//                   src={userProfileImage} 
//                   alt="Profile" 
//                   className='profile-icon'
//                 />
//               ) : (
//                 <div className='profile-icon-placeholder'>👤</div>
//               )}
//               <span className='profile-username'>{userName}</span>
//             </div>
//           </button>

//           {isDropdownOpen && (
//             <div className='profile-dropdown'>
//               <div className='profile-info'>
//                 {userProfileImage ? (
//                   <img 
//                     src={userProfileImage} 
//                     alt="Profile" 
//                     className='dropdown-profile-image'
//                   />
//                 ) : (
//                   <div className='dropdown-profile-image-placeholder'>👤</div>
//                 )}
//                 <div className='profile-details'>
//                   <h3>{userName}</h3>
//                   <p>{userEmail}</p>
//                 </div>
//               </div>

//               <hr className='divider' />

//               <button 
//                 className='dropdown-option'
//                 onClick={() => {
//                   setIsUpdateModalOpen(true)
//                 }}
//               >
//                 ✏️ Update Profile
//               </button>

//               <button 
//                 className='dropdown-option sign-out-btn'
//                 onClick={handleSignOut}
//               >
//                 🚪 Sign Out
//               </button>
//             </div>
//           )}
//         </div>
//       </div>

//       {isUpdateModalOpen && (
//         <div className='update-modal-overlay'>
//           <div className='update-modal-card'>
//             <div className='modal-header'>
//               <h2>Update Profile</h2>
//               <button 
//                 className='close-btn'
//                 onClick={() => setIsUpdateModalOpen(false)}
//               >
//                 ✕
//               </button>
//             </div>

//             <div className='modal-body'>
//               <div className='image-upload-section'>
//                 {previewImage || userProfileImage ? (
//                   <img 
//                     src={previewImage || userProfileImage} 
//                     alt="Preview" 
//                     className='preview-image'
//                   />
//                 ) : (
//                   <div className='preview-image-placeholder'>👤</div>
//                 )}
//                 <input 
//                   type="file" 
//                   accept="image/*"
//                   onChange={handleProfileImageChange}
//                   className='file-input'
//                 />
//               </div>

//               <input
//                 type="text"
//                 placeholder="User Name"
//                 value={userName}
//                 onChange={(e) => setUserName(e.target.value)}
//                 className='input-field'
//               />
//             </div>

//             <div className='modal-footer'>
//               <button 
//                 className='cancel-btn'
//                 onClick={() => setIsUpdateModalOpen(false)}
//               >
//                 Cancel
//               </button>
//               <button 
//                 className='save-btn'
//                 onClick={handleUpdateProfile}
//               >
//                 Save Changes
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </>
//   )
// }

// export default Header


import React from "react"

const Header = ({ onLogoClick }) => {
  return (
    <header className="bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex justify-between items-center h-16" aria-label="Main navigation">
          {/* Logo/Title */}
          <button 
            onClick={onLogoClick}
            className="flex items-center cursor-pointer hover:opacity-90 transition focus:outline-none focus:ring-2 focus:ring-white rounded-lg px-2 py-1"
            aria-label="Tech Blog Home"
          >
            <h1 className="text-2xl font-bold">📚 Tech Blog</h1>
          </button>

          {/* Info Text */}
          <p className="text-sm text-white/80">Discover amazing articles</p>
        </nav>
      </div>
    </header>
  )
}

export default Header

