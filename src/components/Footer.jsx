import React from 'react'
import { FaLinkedinIn,FaGithub,FaInstagram,FaFacebook} from 'react-icons/fa6'

function Footer() {
  return (
    <>
      <hr />
        <footer className='py-12'>
            <div className='max-w-screen-2xl container mx-auto px-4 md:px-20'>
                <div className='flex flex-col items-center justify-center'>
                    <div className='flex space-x-4'>

                        <a href="https://www.linkedin.com/in/astik-yadav-8b5995225/" target="_blank"><FaLinkedinIn size={24}/></a>
                        <a href="https://github.com/Astik2004" target="_blank"><FaGithub size={24}/></a>
                        <a href="https://www.instagram.com/astikydv/" target="_blank"><FaInstagram size={24}/></a>
                        <a href="https://www.facebook.com/profile.php?id=100091766149396" target="_blank"><FaFacebook size={24}/></a>
                    </div>
                    <div className="mt-8 border-gray-700 border-t pt-8 flex flex-col items-center">
                            <p className='text-sm'>
                                &copy;2024 Your Company.All Right Reserved.
                            </p>
                    </div>
                </div>
            </div>

        </footer>
    </>
  )
}

export default Footer