import React from 'react'

const Footer = () => {
    const currentYear = new Date().getFullYear();
    
    return (
        <footer className="bg-gray-800 text-white mt-16 py-12" role="contentinfo">
            <div className="max-w-7xl mx-auto px-4">
                <div className="text-center">
                    <h2 className="text-2xl font-bold mb-2">📚 Tech Blog</h2>
                    <p className="text-gray-300 mb-4">Exploring technology, one article at a time.</p>
                    
                    {/* Footer Links */}
                    <nav className="flex justify-center gap-6 mb-6" aria-label="Footer navigation">
                        <a href="#" className="text-gray-300 hover:text-white transition">About</a>
                        <a href="#" className="text-gray-300 hover:text-white transition">Privacy</a>
                        <a href="#" className="text-gray-300 hover:text-white transition">Terms</a>
                        <a href="#" className="text-gray-300 hover:text-white transition">Contact</a>
                    </nav>
                    
                    <p className="text-gray-500 text-sm">&copy; {currentYear} Tech Blog. All Rights Reserved</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer
